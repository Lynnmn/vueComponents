import { parse as parseQS, stringify as stringifyQS } from './querystring'
import { forEach, getUUID, loadJS, getFullUrl } from './misc'
import EventEmitter from './eventemitter'


const host = window.location.host;
// 如果存在 fetch 优先使用 fetch
const hasFetch = !!window.fetch;

/**
 * 参数整合url
 * @param url
 * @param param
 * @returns {*}
 */
function fixedURL(url, param) {
    let str = typeof param == 'string' ? param : stringifyQS(param, '&');
    if (str) {
        return url + (url.indexOf("?") > -1 ? '&' : '?') + str;
    }
    return url;
}

// 结束 返回数据
function responseEnd(req, res) {
    if (!res.result && res.text) {
        try{
            res.result = JSON.parse(res.text);
        }catch(e){
            res.result = null;
        }
    }
    delete this._req;
    this.emit("verify", res, req);
    if (res.cancel === true) {
        return;
    }
    this.emit("callback", res, req);
    this.emit(res.err ? "fail" : "success", res, req);
}

// ============================ajax=========================================
//创建XHR
let createXHR = window.XMLHttpRequest ? function(isCross) {
    if (window.XDomainRequest && isCross) {
        return new window.XDomainRequest();
    }
    return new window.XMLHttpRequest();
} : function() {
    return new window.ActiveXObject("Microsoft.XMLHTTP");
};

/**
 * ajax  进度
 * @param type
 * @param event
 */
function onprogress(type, event) {
    this.emit("progress" + type, event);
}

function onload(req, res) {
    let xhr = req.xhr;
    if (xhr && !req.outFlag) {
        let headers = ''
        try {
            headers = xhr.getAllResponseHeaders();
        } catch (e) {}
        /**
         * 获取header 值
         * @param key
         * @returns {string}
         */
        res.getHeader = function(key) {
            return new RegExp("(?:" + key + "):[ \t]*([^\r\n]*)\r").test(headers) ? RegExp["$1"] : "";
        };

        res.text = "";
        try {
            res.text = xhr.responseText;
        } catch (e) {}
        res.status = 0;
        try {
            res.status = xhr.status;
        } catch (e) {}
        if (res.status === 0) {
            res.status = res.text ? 200 : 404;
        }
        let s = res.status;
        res.err = (s >= 200 && s < 300 || s === 304 || s === 1223) ? null : ('http error [' + s + ']');
        responseEnd.call(this, req, res);
    }
    delete req.xhr;
    delete req.outFlag;
}

function onHttpRequestChange(req, res) {
    let xhr = req.xhr;
    if (xhr && xhr.readyState == 4) {
        onload.call(this, req, res);
    }
}

/**
 * ajax 发送数据
 * @returns {ajax}
 */
function httpSend(req, res) {
    let async = req.async;
    let header = req.header;

    // XHR
    req.xhr = createXHR(req.isCross);
    if (req.isCross && this.credentials !== false) {
        // 跨域带上cookie
        req.xhr.withCredentials = true;
    }
    // IE8 跨域
    let isXDR = req.isXDR = req.xhr.constructor == window.XDomainRequest;
    if (isXDR) {
        // 注意 IE8 XDR无法同步
        async = req.async = true;
    }
    let method = (req.method || 'GET').toUpperCase();
    let param;
    if (method == 'GET') {
        req.xhr.open(method, fixedURL(req.url, req.param), async);
    } else {
        let url = req.url;
        param = req.param;
        if (isXDR) {
            url = fixedURL(url, param);
            param = null;
        }
        req.xhr.open(method, url, async);
        if (header["Content-Type"] === undefined && !req.isFormData && !isXDR) {
            header["Content-Type"] = "application/x-www-form-urlencoded";
        }
    }
    if (header['X-Requested-With'] === undefined && !req.isCross) {
        // 跨域不增加 X-Requested-With
        header['X-Requested-With'] = 'XMLHttpRequest';
    }
    if (!isXDR) {
        forEach(header, function(v, k) {
            req.xhr.setRequestHeader(k, v);
        });
    }
    res.status = 0;
    if (this.hasEvent('progress')) {
        // 跨域 加上 progress post请求导致 多发送一个 options 的请求
        // 只有有进度需求的任务,才加上
        try {
            req.xhr.upload.onprogress = onprogress.bind(this, "");
        } catch (e) {}
    }
    if (this.hasEvent('progressdown')) {
        try {
            req.xhr.onprogress = onprogress.bind(this, "down");
        } catch (e) {}
    }

    //发送请求
    if (async) {
        if (isXDR || 'onload' in req.xhr) {
            req.xhr.onload = onload.bind(this, req, res);
        } else {
            req.xhr.onreadystatechange = onHttpRequestChange.bind(this, req, res);
        }
    }
    req.xhr.send(param ? stringifyQS(param, '&').replace(/[\x00-\x08\x11-\x12\x14-\x20]/g, "*") : null);
}

// ========================================================fetch请求数据================================
/**
 * fetch 发送数据
 */
function fetchSend(req, res) {
    let header = req.header;
    let method = (req.method || 'GET').toUpperCase();

    let url = req.url;
    let param = req.param;

    if (method == 'GET') {
        url = fixedURL(url, param);
        param = null;
    } else {
        if (header["Content-Type"] === undefined && !req.isFormData) {
            header["Content-Type"] = "application/x-www-form-urlencoded";
        }
    }

    if (header['X-Requested-With'] === undefined && !req.isCross) {
        // 跨域不增加 X-Requested-With
        header['X-Requested-With'] = 'XMLHttpRequest';
    }

    let option = {
        method: method,
        headers: header,
        body: param
    };
    if (req.isCross) {
        option.mode = 'cors';
        if (this.credentials !== false) {
            option.credentials = 'include';
        }
    }

    let fetchData = (function(text) {
        res.text = text || '';
        responseEnd.call(this, req, res);
    }).bind(this);

    function fetchBack(response) {
        if (!req.outFlag) {
            res.getHeader = function(key) {
                return response.headers.get(key);
            };

            res.status = response.status;
            res.text = '';
            res.err = response.ok ? null : 'http error [' + res.status + ']';
            response.text().then(fetchData, fetchData);
        }
        delete req.outFlag;
    }
    window.fetch(url, option).then(fetchBack, fetchBack);
}

// ==============================================jsonp==============================================
function jsonpSend(req, res) {
    let param = req.param;
    let key = req.jsonpKey || this.jsonpKey;
    let backFunKey = param[key];
    if (!backFunKey) {
        param[key] = backFunKey = 'jsonp_' + getUUID();
    }

    let backFunFlag;
    let backFun = (function(data) {
        if (!backFunFlag) {
            backFunFlag = true;
            res.result = data;
            res.text = '';
            res.err = data ? null : 'http error';
            if (!req.outFlag) {
                responseEnd.call(this, req, res);
            }
        }
    }).bind(this);

    window[backFunKey] = backFun;

    let url = fixedURL(req.url, param);

    loadJS(url, function() {
        backFun();
    });
}


function requestSend(xParam, req) {
    if (req.outFlag) {
        return;
    }

    req.method = this.method;
    req.url = this.url;
    req.cache = this.cache;

    let res = {
        root: this
    };

    Object.assign(req.param = {}, this.param);
    Object.assign(req.qsParam = {}, this.qsParam);
    Object.assign(req.header = {}, this.header);

    let async = req.async;
    let method = (req.method || '').toUpperCase();
    let isFormData = req.isFormData;

    this.emit('open', req);
    let param = req.param;
    let qs = req.qsParam;
    let header = req.header;

    // 还原,防止复写
    req.isFormData = isFormData;
    req.async = async;
    req.method = method;

    if (typeof xParam == "string") {
        xParam = parseQS(xParam);
    }

    if (isFormData) {
        // 只能 post
        forEach(req.param, function(value, key) {
            if (!xParam.has(key)) {
                xParam.append(key, value);
            }
        });
        param = req.param = xParam;
    } else if (method == 'GET' || method == 'JSONP') {
        if (req.cache === false && !qs._r_) {
            qs._r_ = getUUID();
        }
        Object.assign(qs, param);
        Object.assign(qs, xParam);
        param = req.param = qs;
    } else {
        Object.assign(param, xParam);
    }

    // 是否跨域
    req.isCross = !/:\/\/$/.test(getFullUrl(req.url).split(host)[0] || '');

    if (method == 'JSONP') {
        // jsonp 获取数据
        jsonpSend.call(this, req, res);
        return;
    }

    if (hasFetch && async && this.useFetch && !this.hasEvent('progress')) {
        //fetch 存在 fetch 并且无上传或者进度回调 只能异步
        fetchSend.call(this, req, res);
        return;
    }
    // 走 XMLHttpRequest
    httpSend.call(this, req, res);
}

/**
 * Ajax基础类
 * @param url
 * @param method
 * @param async
 */
export default class ajax extends EventEmitter {
    constructor(url, method, async, cache) {
        super();
        this.url = url;
        this.method = method || 'GET';
        this.async = method == 'jsonp' ? true : (async === false ? false : true);
        this.param = {};
        this.qsParam = {};
        this.header = {};
        this.cache = cache;
        this.useFetch = true;
    }

    // 中止ajax请求
    abort() {
        let req = this._req;
        if (req) {
            req.outFlag = true;
            if (req.xhr) {
                req.xhr.abort();
                req.xhr = null;
            }
            delete this._req;
        }
        return this;
    }

    /**
     * 发送数据据
     * @param param
     * @param over
     * @returns {ajax}
     */
    send(param, over) {
        if (this._req) {
            if (!over) {
                return this;
            }
            this.abort();
        }

        let req = this._req = {
            root: this,
            async: this.async
        };
        if (window.FormData && param instanceof window.FormData) {
            req.isFormData = true;
            req.method = 'POST';
        };
        if (this.async) {
            setTimeout(requestSend.bind(this, param || {}, req), 1);
        } else {
            requestSend.call(this, param, param || {}, req);
        }
        return this;
    }
}

function send(type, url, callback, param, sync){
    let t = new ajax(url, type, !sync);
    if (callback) {
        t.on('callback', callback);
    }
    t.send(param);
    return t;
}

export function get(...args){
    return send('GET', ...args);
}
ajax.get = get;
export function post(...args){
    return send('POST', ...args);
}
ajax.post = post;
export function put(...args){
    return send('PUT', ...args);
}
ajax.put = put;

ajax.delete = function(...args){
    return send('DELETE', ...args);
}

export function jsonp(url, callback, param, key){
    let t = new ajax(url, 'jsonp', true);
    t.jsonpKey = key || 'callback';
    if (callback) {
        t.on('callback', callback);
    }
    t.send(param);
    return t;
}
ajax.jsonp = jsonp;