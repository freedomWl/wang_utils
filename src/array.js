/**
 * 判断是否是数组
 * @param arr
 */
export function isToAaary(arr){
    if(Array.isArray(arr)){
        return true
    }
}
/**
 * 删除数组中的空对象属性
 * @param arr
 */
export function removeAryEmpty (arr) {
  for (var key in arr) {
    if (arr[key] === '' || arr[key] === undefined) {
      delete arr[key]
    }
  }
  return arr
}

/**
 * 数组去重(字符串)
 * @param {Array} arr  数组
 */
export function removeRepeatStr(arr){
    return Array.from(new Set(arr))
}

/**
 * 数组去重(单一json对象)
 * @param {Array} arr  数组
 */
export function removeRepeatObj (arr) {
    const res = new Map()
    return arr.filter((item) => !res.has(item.value) && res.set(item.value, 1))
}
/**
 * 数组扁平化(多维变一维)
 * @param {Array} arr  数组
 */
export function isToSingle (arr) {
    return arr.reduce((prev, current) => {
        return prev.concat(Array.isArray(current) ? iterTree3(current) : current)
    }, [])
}

/**
 * 树结构数组扁平化(多维变一维)
 * @param tree
 */
export function treeToSingle (tree) {
    var queen = []
    var out = []
    queen = queen.concat(tree)
    while (queen.length) {
        var first = queen.shift()
        if (first.children) {
            queen = queen.concat(first.children)
            delete first['children']
        }
        out.push(first)
    }
    return out
}
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
export const getIntersection = (arr1, arr2) => {
    let len = Math.min(arr1.length, arr2.length)
    let i = -1
    let res = []
    while (++i < len) {
        const item = arr2[i]
        if (arr1.indexOf(item) > -1) res.push(item)
    }
    return res
}
/**
 * @param {Array, Map, Set} arr
 * @description 获取数组中最后一项
 */
export function lastItem(arr) {
    if (!Array.isArray(arr) && !(arr instanceof Set) && !(arr instanceof Map)) {
        throw new Error('Invalid argument type. Expected Array, Set, or Map.');
    }
    if (Array.isArray(arr)) {
        return arr.slice(-1)[0];
    }
    if (arr instanceof Set || arr instanceof Map) {
        let lastItem;
        for (const item of arr) {
            if (arr instanceof Map) {
                // For Map, we only care about the values
                item[1];
                lastItem = item[1];
            } else {
                lastItem = item;
            }
        }
        return lastItem;
    }
}

/**
 * @description 判断数组对象中某一属性是否包含重复的值 有则返回false 无则返回true
 * @param {Array} arr 要去重的数组
 * @param {String} key 根据去重的字段名
 */
export function hasDuplicateValue (arr, key) {
    let names = arr.map(item => item[key])
    let nameSet = new Set(names)
    return nameSet.size === names.length
}

/**
 * @description  数组对象根据字段去重 返回是Array
 * @param {Array} arr 要处理的路径
 * @param {String} key 根据去重的字段名
 */
export function delRepeatObject(arr, key) {
    if (arr.length === 0) return []
    let list = []
    const map = {}
    arr.forEach((item) => {
        if (!map[item[key]]) {
            map[item[key]] = item
        }
    })
    list = Object.values(map)
    return list
}

/**
 * @description  数组对象去重
 * @param {dataSource} 原数组对象
 * @param {primaryKey} 指定数组对象元素主键(以该主键的值为标准判断数据是否重复)==>如果数组元素是一般数据类型，不传primaryKey
 * @return {array} 去重后的新数组对象
 * */

export const deWeightArray = (dataSource, primaryKey, callback) => {
    // 参数校验
    if (!Array.isArray(dataSource)) {
        throw new Error('dataSource must be an array.');
    }
    if (primaryKey !== undefined && typeof primaryKey !== 'string' && !Number.isInteger(primaryKey)) {
        throw new Error('primaryKey must be a string or an integer if provided.');
    }

    // 如果数组的元素是基本数据类型或对象但不提供主键，使用Set去重
    if (!primaryKey || typeof dataSource[0] !== 'object') {
        const uniqueSet = new Set(dataSource.map(item => JSON.stringify(item)));
        return Array.from(uniqueSet).map(item => JSON.parse(item));
    }
    const tempList = []
    const map = new Map() //创建Map对象数据结构
    // 遍历需要去重的数组对象
    dataSource.forEach(item => {
        // 判断map对象中该key是否已经存在
        if (!map.has(item[primaryKey])) {
            map.set(item[primaryKey], item) //如果不存在，将该数据插入
        } else {
            tempList.push(item)
        }
    })
    callback && callback(tempList)
    return [...map.values()] //将map对象转换回数组再返回
}

/**
 * @description 去重json对象 使用JSON.stringify和JSON.parse方法配合Set数据结构来实现JSON对象的去重
 * @param {Array} arr 要处理的数组
 */
export function deduplicateJson(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array.');
    }

    const set = new Set();
    const result = [];

    for (let item of arr) {
        if (typeof item !== 'object' || item === null) {
            continue;  // Skip non-object items
        }

        try {
            const strItem = JSON.stringify(item);
            if (!set.has(strItem)) {
                set.add(strItem);
                result.push(JSON.parse(strItem));
            }
        } catch (err) {
            console.error('Error while stringifying/parsing JSON:', err);
        }
    }

    return result;
}
