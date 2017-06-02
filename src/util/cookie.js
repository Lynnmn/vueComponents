/**
 * 获取cookie
 * @param {String} key 
 */
export function getItem(key){
    return new RegExp("[?:; ]*" + key + "=([^;]*);?").test(document.cookie + "") ? decodeURIComponent(RegExp["$1"]) : "";
}

/**
 * 设置cookie
 * @param {String} key 
 * @param {String} value 
 * @param {Number|String|Date} expiration 0:进程，-1:永久，数字:天数，字符串，日期
 * @param {String} path 文档路径
 * @param {String} domain 域名，可以设置主域名
 */
export function setItem(key, value, expiration, path, domain){
    let str = key + "=" + encodeURIComponent(value);
    if(expiration){
        let type = typeof expiration;
        if( type === 'number'){
            // 数字，为 天数
            expiration = new Date().getTime() + expiration * 24 * 60 * 60 * 1000;
        }
        else if( type === 'string'){
            expiration = new Date(expiration.replace(/\-/g, '/').replace(/T/, ' ').replace(/\.\d*$/, ''));
        }
        str += "; expires=" + expiration.toGMTString();
    }
    if(path){
        str += "; path=" + path;
    }
    if(domain){
        str += "; domain=" + domain;
    }

    document.cookie = str;
}

/**
 * 移除cookie
 * @param {*} key 
 * @param {*} path 文档路径
 * @param {*} domain 域名，可以设置主域名
 */
export function removeItem(key, path, domain){
    let str = key + "=; expires=" + (new Date(0)).toGMTString();
    if (path) {
        r += "; path=" + path;
    }
    if (domain) {
        str += "; domain=" + domain;
    }
    document.cookie = str;
}

export default {getItem, setItem, removeItem}