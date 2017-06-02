/**
 * 转换为Date对象
 * @param {Number, String, Date} date 
 */
export function create(date){
    if (date && date.constructor == Date) {
        return date;
    }
    if (typeof str == 'string') {
        date = date.replace(/\-/g, '\/').replace(/T/, ' ').replace(/\.\d+$/, '');
    }
    return date ? new Date(date) : new Date();
}

/**
 * 将date格式化为固定格式的字符串
 * @param {Number, String, Date} date 
 * @param {String} formatStr  YYYY YY MM M DD D hh h mm m ss s
 */
export function format(date, formatStr = 'YYYY-MM-DD'){
    date = create(date);
    return formatStr.replace(/YYYY/g, date.getFullYear())
        .replace(/YY/g, String(date.getYear()).slice(-2))
        .replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2))
        .replace(/M/g, date.getMonth() + 1)
        .replace(/DD/g, ("0" + date.getDate()).slice(-2))
        .replace(/D/g, date.getDate())
        .replace(/hh/g, ("0" + date.getHours()).slice(-2))
        .replace(/h/g, date.getHours())
        .replace(/mm/g, ("0" + date.getMinutes()).slice(-2))
        .replace(/m/g, date.getMinutes())
        .replace(/ss/g, ("0" + date.getSeconds()).slice(-2))
        .replace(/s/g, date.getSeconds());
}


export default {create, format}