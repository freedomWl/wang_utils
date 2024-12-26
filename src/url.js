/**
 *@description 获取url参数
 * @param {String} name 参数名，不传则返回所有参数的对象
 * @return {Object}
 */
export function getParams (name) {
    const search = window.location.search.substring(1);
    if (search) {
        const obj = JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
        return name ? obj[name] : obj
    }
}
/**
 *@description url参数就是其中 ? 后面的参数
 * @param {String} url 一个http地址
 * @return {Object} _rs 返回的是一个json对象
 */
export function getUrlPrmt (url) {
    url = url || window.location.href
    let _pa = url.substring(url.indexOf('?') + 1); let _arrS = _pa.split('&');
    const _rs = {};
    for (let i = 0, _len = _arrS.length; i < _len; i++) {
        let pos = _arrS[i].indexOf('=')
        if (pos === -1) {
            continue
        }
        let name = _arrS[i].substring(0, pos);
        _rs[name] = window.decodeURIComponent(_arrS[i].substring(pos + 1))
    }
    return _rs
}
/**
 *@description 判断浏览器
 */
export function getExplorer(){
    const ua = window.navigator.userAgent
    const isExplorer = (exp) => {
        return ua.indexOf(exp) > -1
    }
    if (isExplorer('MSIE')) return 'IE'
    else if (isExplorer('Firefox')) return 'Firefox'
    else if (isExplorer('Chrome')) return 'Chrome'
    else if (isExplorer('Opera')) return 'Opera'
    else if (isExplorer('Safari')) return 'Safari'
}

/**
 * @description 判断移动端设备是安卓还是iso
 */
export function deviceType() {
    let u = navigator.userAgent;
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        return 'Android'
    }
    if (isIOS) {
        return 'IOS'
    }
}
/**
 * @description 判断是在微信浏览器还是支付宝浏览器
 */
export function browserJudgment () {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return 'Weixin'
    } else if(ua.match(/Alipay/i)=='alipay'){
        return 'Alipay'
    } else if (ua.match(/QQ/i) == 'qq') {
        return 'QQ'
    } else {
        return 'other'
    }
}
