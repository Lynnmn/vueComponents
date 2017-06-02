import {getUUID} from './misc'
// 本地存储引用
const LS = window.localStorage;
const SS = window.sessionStorage;

let SKey = SS.getItem('koi-skey');
if(!SKey){
    SKey = getUUID();
    SS.setItem('koi-skey', SKey);
}

function remove(key) {
    LS.removeItem(key);
    return null;
}

/**
 * 获取本地存储
 * @param {String} key 
 */
export function getItem(key) {
    let value = LS.getItem(key);
    let json = null;
    try {
        json = JSON.parse(value);
    } catch (e) {}
    if (!json) {
        return json;
    }

    // 检测是否过期
    let expiration = json.koi_expiration;
    if (expiration) {
        let now = new Date().getTime();
        // 过期
        return expiration === -1 || now <= expiration ? json.item : remove(key);
    }
    let session = json.koi_session;
    if (session) {
        // 过期
        return session == SKey ? json.item : remove(key);
    }
    return remove(key);
}

/**
 * 设置本地存储
 * @param {String} key 
 * @param {*} value 
 * @param {Number|String|Date} expiration 0:进程，-1:永久，数字:天数，字符串，日期
 */
export function setItem(key, value, expiration = 0) {
    let json = { item: value };
    let type = typeof expiration;
    if (type === 'number') {
        if (expiration === 0) {
            json.koi_session = SKey;
        } else if (expiration === -1) {
            json.koi_expiration = -1;
        } else {
            json.koi_expiration = new Date().getTime() + expiration * 24 * 60 * 60 * 1000;
        }
    } else {
        // 过期时间 设置为 固定时间
        if (type === 'string') {
            expiration = new Date(expiration.replace(/\-/g, '/').replace(/T/, ' ').replace(/\.\d*$/, ''));
        }
        json.koi_expiration = expiration.getTime();
    }
    LS.setItem(key, JSON.stringify(json));
}

/**
 * 移除数据
 * @param {String} key 
 */
export function removeItem(key) {
    remove(key);
}


export default {setItem, getItem, removeItem}