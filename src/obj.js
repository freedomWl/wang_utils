
/**
 * @description 判断元素是否为对象
 * @param {*} obj
 * @return {Boolen}
 */
export function isObject (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
/**
 * @description 清除对象中值为空的属性
 * @param {Object} obj
 * @returns {Object}  清除对象中值为空的属性
 */
export  function filterParams (obj) {
    let _newPar = {}
    for (let key in obj) {
        if ((obj[key] !== 0 && obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
            _newPar[key] = obj[key]
        }
    }
    return _newPar
}
/**
 * @param {Function, Object, String, Boolean, Array,Date} type 判断数据类型
 * @returns {String}  返回的是字符串数据类型
 */
export  function paramsType (type) {
    return Object.prototype.toString.call(o).slice(8, -1)
}