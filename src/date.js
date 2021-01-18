/**
 * YYYYMMDD这种类型转换为YYYY-MM-DD
 * @param {String} str  字符串
 */
export function isToDate(str){
    str = str + ''
    return str.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')
}
/**
 * 格林威治标准时间这种类型转换为北京标准时间
 * @param {String} endTime  YYYY-MM-DD HH:FF:SS
 * @returns {String}  返回的是倒计时时间
 */
export function getEndTime (endTime) {
    var startDate = new Date() // 开始时间，当前时间
    var endDate = new Date(endTime) // 结束时间，需传入时间参数
    var t = endDate.getTime() - startDate.getTime() // 时间差的毫秒数
    var d = 0; var h = 0; var m = 0; var s = 0
    if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24)
        h = Math.floor(t / 1000 / 60 / 60 % 24)
        m = Math.floor(t / 1000 / 60 % 60)
        s = Math.floor(t / 1000 % 60)
    }
    return '剩余时间' + d + '天 ' + h + '小时 ' + m + ' 分钟' + s + ' 秒'
}
    /**
 * 格林威治标准时间这种类型转换为北京标准时间
 * @param {String} str  字符串
 * @param {String} type  字符串
 */
export function yMdHms(str, type) {
    var now = new Date(str)
    var year = now.getFullYear()
    var month = now.getMonth() + 1
    var date = now.getDate()
    var hour = now.getHours()
    var minute = now.getMinutes()
    var second = now.getSeconds()
    month = month < 10 ? '0' + month : month
    date = date < 10 ? '0' + date : date
    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute
    second = second < 10 ? '0' + second : second
    return type === undefined ? `${year}-${month}-${date}` : `${year}-${month}-${date} ${hour}:${minute}:${second}`
}
/**
 * 计算开始时间与结束时间差天数 str1和str2是2006-12-18格式
 * @param {String} str1  字符串
 * @param {String} str2  字符串
 */
export function datedifference(str1, str2) {
    var dateSpan, iDays;
    str1 = Date.parse(str1);
    str2 = Date.parse(str2);
    dateSpan = str2 - str1;
    dateSpan = Math.abs(dateSpan);
    iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
    return iDays
}

/**
 * 获取指定月份有多少天
 *  @param months {String} 指定月份：例"2018-01"
 * @returns {number} 返回指定月份有多少天，如：31
 */
export function daysInMonth(months) {
    var date = new Date(Date.parse(months))
    var year = date.getFullYear()
    var month = date.getMonth()
    if (month === 1) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) { return 29 } else { return 28 }
    } else if ((month <= 6 && month % 2 === 0) || (month > 6 && month % 2 === 1)) { return 31 } else { return 30 }
}
/**
 * 获取指定日期是星期几
 * @param date {String} 指定日期,例："2018-01-23"
 * @returns {Number} 返回星期几(1-7)，如：2
 */
export function dayOfWeek (date) {
    var time = new Date(Date.parse(date));
    var weekday=new Array(7);
    weekday[0]= 7;
    weekday[1]= 1;
    weekday[2]= 2;
    weekday[3]= 3;
    weekday[4]= 4;
    weekday[5]= 5;
    weekday[6]= 6;
    return weekday[time.getDay()];
}
/**
 * 比较两个时间的大小
 * @param date1 {String} 指定日期,例："2018-01-23"
 *  @param date2 {String} 指定日期,例："2018-01-23"
 * @returns {Boolean} return true; //第一个大否则第二个大
 */
export function compareDate(date1,date2){
    var oDate1 = new Date(date1);
    var oDate2 = new Date(date2);
    return oDate1.getTime() > oDate2.getTime();
}
