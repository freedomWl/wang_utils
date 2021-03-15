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
export function lastItem (arr) {
    if (Array.isArray(arr)) {
        return arr.slice(-1)[0]
    }
    if (arr instanceof Set) {
        return Array.from(arr).slice(-1)[0]
    }
    if (arr instanceof Map) {
        return Array.from(arr.values()).slice(-1)[0]
    }
}
