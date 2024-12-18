import {delRepeatObject} from './array'

/**
 * 判断数组对象中某一属性是否包含重复的值
 * @param arr 要去重的数组
 * @param  key 根据去重的字段名
 */
export function duplicateValue(arr, key) {
    let pages = getCurrentPages()
    let pagefullPath = []
    for (let i = 0; i < pages.length; i++) {
        pagefullPath.push({ fullPath: pages[i].$page.fullPath, route: pages[i].route })
    }
    let names = arr.map(item => item[key])
    let nameSet = new Set(names)
    return nameSet.size === names.length
}
/**
@description // 解决小程序路由跳转超过10层栈溢出点击无法跳转
* @param {String} url 要处理的路径
* @return {Function}
* */
export function linkHerf (url) {
    let pages = getCurrentPages()// 页面栈
    let is_link = 1 // 判断getCurrentPages是否有重复的地址
    let iindex = ''// 获取重复地址的下标
    let is_url = ''
    for (let i = 0; i < pages.length; i++) {
        is_url = pages[i].$page.fullPath // 拼接“/”成为一个绝对路径
        if (url === is_url) {
            is_link++
            iindex = i
        }
    }
    // 判断 地址有重复的话 就使用后退 delta后退多级
    if (is_link === 2) {
        return uni.navigateBack({
            delta: pages.length - iindex - 1
        })
    } else {
        // getCurrentPages没到达10级就可以使用navigateTo跳转
        if (pages.length !== 10) {
            if (is_url.indexOf('Authorization') !== -1) {
                return uni.redirectTo({
                    url: url
                })
            } else {
                return uni.navigateTo({
                    url: url
                })
            }
        } else {
            // 有超过的话 使用redirectTo 关闭当前页进行跳转
            return uni.redirectTo({
                url: url
            })
        }
    }
}
/**
 @description // 解决小程序路由跳转超过10层栈溢出点击无法跳转1 最终调用routeJump方法
 @param {String} url 要处理的路径 一般是返回tab类型页面
 * */
export function routeJump(url) {
    let pages = getCurrentPages()
    let pagefullPath = []
    for (let i = 0; i < pages.length; i++) {
        pagefullPath.push({fullPath: pages[i].$page.fullPath, route: pages[i].route})
    }
    // 判断有重复的路由删除
    if (!duplicateValue(pagefullPath, 'route')) {
        let newPages = delRepeatObject(pages, 'route')
        let newPrevpage = newPages[newPages.length - 2]
        linkHerf(newPrevpage.$page.fullPath)
    } else {
        if (pages.length > 1) {
            let prevpage = pages[pages.length - 2]
            linkHerf(prevpage.$page.fullPath)
        } else {
          return uni.switchTab({
                url: url
            })
        }
    }
}


