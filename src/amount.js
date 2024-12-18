
/**
 * @description  金额整数自动补位 .00
 * @param { Number } num 要处理的金额
 * @return {Number}
 */
export function amtPatchPosition(num) {
    if (num === '') {
        return num
    } else {
        if (num === 0) {
            num = '0.00'
            return num
        } else {
            num += ''
            num = num.replace(/[^0-9|\.]/g, '') // 清除字符串中的非数字非.字符
            if (/^0+/) {
                num = num.replace(/^0+/, '')
            } // 清除字符串开头的0
            if (!/\./.test(num)) {  // 为整数字符串在末尾添加.00
                num += '.00'
            }
            if (/^\./.test(num)) { // 字符以.开头时,在开头添加0
                num = '0' + num
            }
            num += '00' // 在字符串末尾补零
            num = num.match(/\d+\.\d{2}/)[0]
            return num
        }
    }
}

/**
 * @description  解决两个小数相加丢精度
 * @param { Number } num1
 * @param { Number } num2
 * @return {Number}
 */
export function addNum(num1, num2) {
    // 将数字转换成字符串
    num1 = num1.toString()
    num2 = num2 === null ? '0' : num2.toString()
    // 获取小数点的位置
    var index1 = num1.indexOf('.')
    var index2 = num2.indexOf('.')
    // 如果小数点存在，那么就再获取各自的小数位数
    var ws1 = 0
    var ws2 = 0
    if (index1 != -1) {
        ws1 = num1.split('.')[1].length
    }
    if (index2 != -1) {
        ws2 = num2.split('.')[1].length
    }
    // 看谁的小数位数大，谁的小数位数小
    var bigger = (ws1 > ws2) ? ws1 : ws2
    var smaller = (ws1 < ws2) ? ws1 : ws2
    // 计算得到需要补齐的0的个数
    var zerosCount = bigger - smaller
    // 好了,现在开始不管三七二十一，全部去除小数点
    num1 = num1.replace('.', '')
    num2 = num2.replace('.', '')
    // 比较num1和num2谁大，比较方法就是看谁是smaller,是smaller的一方就补0
    if (ws1 === smaller) {
        for (var i = 0; i < zerosCount; i++) {
            num1 += '0'
        }
    } else {
        for (var i = 0; i < zerosCount; i++) {
            num2 += '0'
        }
    }
    // 开 始计算
    var sum = parseInt(num1) + parseInt(num2)
    // 根据较大的小数位数计算倍数
    var beishu = 1
    for (var i = 0; i < bigger; i++) {
        beishu = beishu * 10
    }
    sum = sum / beishu
    return sum
}

//    arg2 利率 10 100
/**
 * @description  计算小数乘以倍数
 * @param { Number } num  原小数
 * @param { Number } rate 利率
 * @return {Number}
 */
export function accMul(num, rate) {
    let m = 0
    var s1 = num.toString()
    let s2 = rate.toString()
    try {
        m += s1.split('.')[1].length
    } catch (e) {
    }
    try {
        m += s2.split('.')[1].length
    } catch (e) {
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}

/*******
 * @description: [currency 金额格式化函数]
 * @return {*} [返回格式好的金额]
 * @param value
 * @param currencySymbol
 * @param decimalsCount
 */
export const currency = (value, currencySymbol = '$', decimalsCount = 2) => {
    const digitsRE = /(\d{3})(?=\d)/g; // 匹配数字之前的3个数字用于添加逗号
    // 转换成数值，非有限数值或值不存在且值不等于0时返回空字符串
    if (!isFinite(value = parseFloat(value)) || (!value && value !== 0)) return '';

    // 取数值的绝对值后固定decimalsCount位小数，并分割整数与小数部分
    const stringified = Math.abs(value).toFixed(decimalsCount);
    const integerPart = stringified.slice(0, -1 - decimalsCount); // 取整数部分
    const decimalPart = stringified.slice(-1 - decimalsCount); // 取小数部分

    // 处理整数部分，每三位添加逗号
    let formattedInteger = integerPart;
    if (integerPart.length > 3) {
        formattedInteger = integerPart.slice(0, integerPart.length % 3) +
            integerPart.slice(integerPart.length % 3).replace(digitsRE, '$1,');
    }
    // 判断正负数并拼接最终字符串
    const sign = value < 0 ? '-' : '';
    return sign + currencySymbol + formattedInteger + decimalPart;
};
