let toString = Object.prototype.toString

function forpush(arr, v) {
    arr.push(v);
    return v;
}

function forappend(obj, v, k) {
    obj[k] = v;
}

function forback() {
    return arguments[1];
}

const types = '-[object array]-[object nodelist]-[object htmlcollection]-[object arguments]-';

/**
 * 数据循环
 * @param {Array、Object} arr 循环的数据
 * @param {Function} fun 每次循环执行函数
 * @param {Array} exe fun return后推入次数组
 * @param {*} scope fun this指向 
 */
export function forEach(arr, fun, exe, scope = this) {
    if (arr) {
        let doExe = exe ? exe.push ? forpush : forappend : forback;
        let len = arr.length;
        if (types.indexOf('-' + toString.call(arr).toLowerCase() + '-') > -1 || '[object htmlcollection]' == String(arr).toLowerCase()) {
            for (let i = 0; i < len; i += 1) {
                var item = fun.call(scope, arr[i], i);
                if (item === false) {
                    break;
                }
                doExe(exe, item, i);
            }
        } else {
            for (let n in arr) {
                if (arr.hasOwnProperty(n)) {
                    let item = fun.call(scope, arr[n], n);
                    if (item === false) {
                        break;
                    }
                    doExe(exe, item, n);
                }
            }
        }
    }
    return exe || scope;
}

/**
 * 加载 js
 * @param url
 * @param callback
 * @param charset
 * @returns {Element}
 */
let head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
export function loadJS(url, callback, charset) {
    let node = document.createElement("script");
    node.setAttribute("type", "text/javascript");
    charset && node.setAttribute("charset", charset);
    node.onload = node.onerror = function() {
        node.onload = node.onerror = null;
        callback && callback();
        setTimeout(function() {
            //防止回调的时候，script还没执行完毕
            // 延时 2s 删除节点
            if (node) {
                node.parentNode.removeChild(node);
                node = null;
            }
        }, 2000);
    }

    node.async = true;
    head.appendChild(node);
    node.src = url;
    return node;
}

let soleTime = new Date().getTime() - 10000;
let soleCount = 100;
/**
 * 获取页面唯一的 id 值
 * @returns {string}
 */
export function getUUID() {
    soleCount += 1;
    return Number(Math.round(Math.random() * 100 + soleCount) + '' + (new Date().getTime() - soleTime)).toString(36);
}


let linkA = document.createElement('a');
/**
 * 获得url的真实地址
 * @param url
 * @returns {string}
 */
export function getFullUrl(url) {
    linkA.setAttribute('href', url);
    return linkA.href;
}


/**
 * 判断两组数据是否相同 前言 
 * @param {*} a 
 * @param {*} b 
 */
export function isEqual(a, b){
    if (a == null || b == null || (a === '' || b === '')){
        // null 和 '' 进行特殊比较
        return a === b;
    }
    let aC = toString.call(a).toLowerCase(), bC = toString.call(b).toLowerCase();
    let ns = '-[object string]-[object number]';
    if(ns.indexOf(aC) > 0 && ns.indexOf(bC) > 0){
        // 全部为 字符串 或者 数字 统一转数字 比较
        return '' + a === '' + b;
    }
    if(aC !== bC){
        // 类型不同
        return false;
    }
    switch (aC) {
        case '[object regexp]':
            return '' + a === '' + b;
        case '[object date]':
        case '[object boolean]':
            return +a === +b;
        case '[object array]':
            if(a.length != b.length){
                // 长度不一致，返回 false
                return false;
            }
        case '[object object]':
            if(Object.keys(a).length !== Object.keys(b).length){
                // keys 不一致，返回 false
                return false;
            }
            let flag = true;
            // 递归搜查每项是否一致
            forEach(a, function(val, key){
                if(isEqual(val, b[key]) === false){
                    return flag = false;
                }
            });
            return flag;
    }
    return a == b;
}


export default {forEach, loadJS, getUUID, getFullUrl, isEqual}