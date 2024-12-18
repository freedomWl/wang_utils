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
 * @param {number} [min=0] - 随机数的最小值，如果只传入一个参数，该参数也为最大值，默认值为0
 * @param {number} [max=255] - 随机数的最大值，如果不传入任何参数，默认返回0到255的随机数
 * @returns {number} 返回指定范围的随机数
 */
export function random(min = 0, max = 255) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Argument(s) is illegal !')
    }
    if (arguments.length === 1) {
        max = min;
        min = 0;
    }
    if (min > max) {
        [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
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
 * 判断数据类型 Array, Object, String, Map, Set 是否为空
 * @param {Array|Object|String|Map|Set} obj - 要检查的对象
 * @returns {Boolean} 如果为空返回 true, 否则返回 false
 */
export function isEmpty(obj) {
    if (obj === null || obj === undefined) {
        return true;
    }

    if (Array.isArray(obj)) {
        return obj.length === 0;
    }

    if (typeof obj === 'string') {
        return obj.length === 0;
    }

    if (obj instanceof Map || obj instanceof Set) {
        return obj.size === 0;
    }

    if (Object.prototype.toString.call(obj) === '[object Object]') {
        return Object.keys(obj).length === 0;
    }

    return false;
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
 * @return {Function}
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
 * @return {Function}
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
 * @return {String}
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
 * @description 字符串的大小写取反（大写变小写，小写变大写）。例如：'AbC' 转换为 'aBc'
 * @param {String} str - 要处理的字符串
 * @return {String} - 处理后的字符串
 */
export function processString(str) {
    return str.replace(/[a-z]/gi, (char) =>
        char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
    );
}
/**
 * @description 根据给定的分隔符获取字符串前后的内容
 * @param {String} str 要处理的字符串
 * @param {Number} state 0 表示获取前面的内容，否则获取后面的内容
 * @param {String} [symbol='_'] 要使用的分隔符，默认为下划线
 * @return {String}
 */
export function getSubstringAroundSymbol(str, state, symbol = '_') {
    if (typeof str !== 'string' || typeof state !== 'number') {
        throw new Error('Invalid input parameters');
    }
    let index = str.lastIndexOf(symbol);
    if (index === -1) {
        // 如果分隔符不存在于字符串中，根据state返回整个字符串或空字符串
        return state === 0 ? str : '';
    }

    if (state === 0) {
        return str.substring(0, index);
    } else {
        return str.substring(index + 1);
    }
}

/**
 * 去掉字符串的所有空格
 * @param str 要处理的字符串
 * @param type 空格类型，可选值为1：去掉所有空格,2：去掉前后空格,3：去掉前空格, 4：去掉后空格
 * @returns 返回处理后的字符串
 */
export function trimSpace(str,  type) {
    if (typeof str !== 'string') {
        return str; // 如果str不是字符串，则直接返回
    }
    switch (type) {
        case 1:
            return str.replace(/\s+/g, '')
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, '')
        case 3:
            return str.replace(/(^\s*)/g, '')
        case 4:
            return str.replace(/(\s*$)/g, '')
        default:
            return str
    }
}
/**
 * 判断当前设备类型
 * @returns 返回当前设备类型，可能为 'iOS'、'Android' 或 'Web'
 */
export function getDeviceType () {
    var ua = navigator.userAgent.toLowerCase();
    var match = ua.match(/iPhone\sOS|iPad/i);
    if (match && (match[0] === 'iphone os' || match[0] === 'ipad')) { // ios
        return 'iOS';
    }
    if (ua.match(/Android/i)) {
        return 'Android';
    }
    return 'Web';
}
/**
 * 将数字转换成中文大写形式
 *
 * @param {number} num 要转换的数字
 * @returns {string} 返回转换后的中文大写形式
 */
export function digitUppercase(num) {
    var fraction = ['角', '分'];
    var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
    var head = num < 0 ? '欠' : '';
    num = Math.abs(num);
    var s = '';

    // 修复小数部分的处理
    s = (num % 1).toFixed(2).substr(2).split('').reverse().reduce((acc, val, idx) => {
        return acc + (digit[val] + fraction[idx]).replace(/零./, '');
    }, '') || '整';

    num = Math.floor(num);
    for (var i = 0; i < unit[0].length && num > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && num > 0; j++) {
            p = digit[num % 10] + unit[1][j] + p;
            num = Math.floor(num / 10);
        }
        // 修复零的处理
        p = p.replace(/(零.)*零$/, '').replace(/^$/, '零');
        s = p + unit[0][i] + s;
    }

    // 修复最终的零处理
    return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^$/, '零元整').replace(/^整$/, '零元整');
}

/**
 * 判断一个字符串是否为回文字符串
 * @param str 待判断的字符串 ABA
 * @returns 返回布尔值，表示是否为回文字符串
 */
export function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

/**
 * 缩短字符串,多余部分用指定后缀ext表示
 * @param  str 输入字符串
 * @param  len 字节长度
 * @param  ext 超出长度部分替换后缀,默认为...
 * @return  缩短后的字符串
 */
export function shortString(str, len, ext ='...'){
    if (str === "" || str === null || str === undefined || len == 0) {
        return "";
    }
    let shortStr = "",
        count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        count += getCharLength(char);
        if (count <= len) {
            shortStr += char;
        } else {
            shortStr += ext;
            break;
        }
    }
    return shortStr;
}

/**
 * 获取字符的字节长度
 * @param  char 单个字符
 * @return 字符的字节长度
 */
export function getCharLength(char){
    return char.replace(/[\u0391-\uffe5]/g, "aa").length;
}


/** * 全局替换某个字符为另一个字符 *
 * @param {String} str 字符
 * @param {String} valueOne 包含的字符
 * @param {String} valueTwo 要替换的字符,选填
 */
export const strReplace = (str, valueOne, valueTwo) => {
    return str.replace(new RegExp(valueOne,'g'), valueTwo
)}
/*
 * @description: 解决ios手机时间NAN
 * @param params {string} 期字符串，格式为YYYY-MM-DD或YYYY/MM/DD
 * @return {*} [时间戳]
 */
export function solveIosTime(params){
    return getDeviceType() === 'iOS'?params.replace(/-/g, "/"):params
}


