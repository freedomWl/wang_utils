/**
 * json对象转换为json字符串
 * @param obj
 * @returns {*}
 */

export function jsonToString(obj) {
    var { jsonToString: jsonToString1 } = this
    switch (typeof (obj)) {
        case 'string':
            return '"' + obj.replace(/(["\\])/g, '\\$1') + '"'
        case 'array':
            return '[' + obj.map(jsonToString1).join(',') + ']'
        case 'object':
            if (obj instanceof Array) {
                var strArr = []
                var len = obj.length
                for (var i = 0; i < len; i++) {
                    strArr.push(jsonToString1(obj[i]))
                }
                return '[' + strArr.join(',') + ']'
            } else if (obj == null) {
                return 'null'
            } else {
                var string = []
                for (var property in obj) {
                    string.push(jsonToString1(property) + ':' +
                        jsonToString1(obj[property]))
                }
                return '{' + string.join(',') + '}'
            }
        case 'number':
            return obj
        case false:
            return obj
    }
}

/**
 * 指定范围随机数
 * @returns {*} 随机返回一个范围的数字。参数是两个的时候，返回传入的两个参数的区间的随机函数；参数是一个的时候，返回0到这个数的随机函数；参数是零个的时候，返回0到255区间的整数，大家可以根据自己的需要进行扩展
 */
//获取指定范围内的随机数
export function random(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Argument(s) is illegal !')
    }
    if (min > max) {
        [min, max] = [max, min]
    }
    return Math.floor(Math.random() * (max - min + 1) + min)
}
/**
 * @returns {*} 根据时间随机生成uuid
 */
export const randomDateUuid = (() => {
    const id = (function*() {
        let mil = new Date().getTime()

        while (true) { yield mil += 1 }
    })()

    return () => id.next().value
})()

/**
 * 判断 数据类型 undefined null String
 * @param {Null, String, Undefined, 'undefined', 'null'} obj
 * @returns {Boolean} 如果为空返回true, 否则返回false
 */
export function isEmpty(obj) {
    return typeof obj === 'undefined' || obj == null || obj === '' || obj === 'null' || obj === undefined
}
/**
 * 判断 数据类型 Array, Object,String,Map, Set是否为空
 * @param {Array, Object,String,Map, Set} obj
 * @returns {Boolean} 如果为空返回true, 否则返回false
 */
export function  emptyIsTo (obj) {
    if (Array.isArray(obj) ||
        typeof obj === 'string' ||
        obj instanceof String
    ) {
        return obj.length === 0
    }
    if (obj instanceof Map || obj instanceof Set) {
        return obj.size === 0
    }

    if (({}).toString.call(obj) === '[object Object]') {
        return Object.keys(obj).length === 0
    }
    return false
}

/**
 * @description 首字母小写
 * @param {String} str 源字符串
 * @return {String}
 */
export function firstLowerCase(str) {
    if (isEmpty(str)) return ''
    return str.replace(/^\S/, function(s) { return s.toLowerCase() })
}
/**
 * @description 首字母大写
 * @param {String} str 源字符串
 * @return {String}
 */
export function  firstUpperCase(str) {
    if (isEmpty(str)) return ''
    return str.replace(/^\S/, function(s) { return s.toUpperCase() })
}
/**
 * @description 去除字符串前后空格
 * @param {String} str 源字符串
 * @return {String} 去掉之后的字符串
 */
export function clearSpace(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '')
}

/**
 * @description 去除字符串所有空格
 * @param {String} str 源字符串
 * @return {String} 去掉之后的字符串
 */
export function clearAllSpace(str) {
    return str.replace(/\s*/g, '')
}
/**
 * @description 反转字符串的元素顺序
 * @param {String} str 源字符串
 * @return {String}
 */
export function reverse(str) {
    if (isEmpty(str)) return ''
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}

/**
 * @description 防抖函数用于防止重复点击
 * @param {Function} fn 函数事件
 * @param delay
 */
export function debounce (fn, delay) {
    var timer = null
    return function () {
        var context = this
        var args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(context, args)
        }, delay)
    }
}
/**
 * @description 防抖函数用于防止重复点击
 * @param {Function} fn 函数事件
 * @param wait   ob1UN1F3qQ0hYlpzhlOwcFZchv0o
 */
export function throttle (fn, wait){
    var timer = null;
    return function(){
        var context = this;
        var args = arguments;
        if(!timer){
            timer = setTimeout(function(){
                fn.apply(context,args);
                timer = null;
            },wait)
        }
    }
}

/**
 * @description base64转Blob
 * @param {String} code base64码
 */
export function base64ToBlob (code) {
    var parts = code.split(';base64,')
    var contentType = parts[0].split(':')[1]
    var raw = window.atob(parts[1])
    var rawLength = raw.length

    var uInt8Array = new Uint8Array(rawLength)

    for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i)
    }
    return new Blob([uInt8Array], { type: contentType })
}

/**
 * @description 复制到剪切板
 * @param {String} value
 */
export function getCopy (value) {
    var _input = document.createElement('input') // 直接构建input
    _input.value = value // 设置内容
    document.body.appendChild(_input) // 添加临时实例
    _input.select() // 选择实例内容
    document.execCommand('Copy') // 执行复制
    document.body.removeChild(_input)
}

/**
 * @description js 实现内容过多省略号
 * @param {String} id  dom节点
 * @param {String} rows  第几行出现省略号
 * @param {String} str  省略内容
 */
export function moreline (id, rows, str) {
    var boxid = document.getElementById(id)
    var computedStyle = document.defaultView.getComputedStyle(boxid, null)
    var lineHeight = computedStyle.lineHeight
    var top = rows * parseInt(lineHeight)
    var tempstr = str
    boxid.innerHTML = tempstr
    var len = tempstr.length
    var i = 0
    if (boxid.offsetHeight >= top) {
        var temp = ''
        boxid.innerHTML = temp
        while (boxid.offsetHeight <= top) {
            temp = tempstr.substring(0, i + 1)
            i++
            boxid.innerHTML = temp
        }
        var slen = temp.length
        tempstr = temp.substring(0, slen - 1)
        len = tempstr.length
        boxid.innerHTML = tempstr.substring(0, len - 1) + '...'
        boxid.height = top + 'rem'
    }
}
/**
 * @description 字符串的大小写取反（大写变小写小写变大写 要处理的字符串 AbC转换aBc
 * @param {String} str
 */
export function processString(str) {
    var arr = str.split('')
    var new_arr = arr.map((item) => {
        return item === item.toUpperCase() ? item.toLowerCase()
            : item.toUpperCase()
    })
    return new_arr.join('')
}
