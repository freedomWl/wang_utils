
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

/**
 * @param {Object} obj
 * @description 对象转数组
 */
export function objToArray(obj) {
   return Object.entries(obj)
}


/**
 * @description 将Map类型转换为Object类型
 * @param {Map} inputMap - 要转换的Map实例
 * @param {boolean} [inherit=true] - 是否继承Object的原型
 * @return {Object} 转换后的Object实例
 */
export function mapToObject(inputMap = new Map(), inherit = true) {
    const resultObject = inherit ? {} : Object.create(null);
    for (let [key, value] of inputMap) {
        resultObject[key] = value;
    }
    return resultObject;
}

/**
 * @description 将Object类型转换为Map类型
 * @param {Object} object - 要转换的对象实例
 * @return {Map} 转换后的Map实例
 */
export function objectToMap(object = {}) {
    const resultMap = new Map();
    for (let key of Object.keys(object)) {
        resultMap.set(key, object[key]);
    }
    return resultMap;
}

/**
 *  * @description 检测对象自身属性中是否具有指定的属性
 * @param {Object} obj - （必须）检测的目标对象
 * @param {String} prop - （必须）属性名
 * @returns {Boolean}
 */
export const hasOwn = (obj, prop) => {
    const hasOwnProperty = Object.prototype.hasOwnProperty
    return obj && hasOwnProperty.call(obj, prop)
}

