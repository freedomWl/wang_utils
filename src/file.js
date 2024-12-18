/**
 * 获取文件的后缀名
 * @param {Object} fileName
 */
export function getFileLastName(fileName) {
    if(fileName.lastIndexOf(".") === -1)
        return fileName;
    var pos = fileName.lastIndexOf(".") + 1;
    return fileName.substring(pos, fileName.length).toLowerCase();
}

/**
 * 获取文件名称
 * @param {Object} fileName
 */
export function getFileName(fileName) {
    var pos = fileName.lastIndexOf(".");
    if(pos === -1) {
        return fileName;
    } else {
        return fileName.substring(pos, fileName.length);
    }
}
/**
 * 文件尺寸格式化
 * @param {String} size
 */
export  function formatSize (size){
    if (typeof +size === 'number') {
        const unitsHash = 'B,KB,MB,GB'.split(',')
        let index = 0
        while (size > 1024 && index < unitsHash.length) {
            size /= 1024
            index++
        }
        return Math.round(size * 100) / 100 + unitsHash[index]
    } else {
        throw new Error('Argument(s) is illegal !')
    }
}

/**
 * 文件下载
 * @param {string} url
 * @returns {File}
 */
export function downLoadFile (href, name) {
    const a = document.createElement('a')
    if (name) a.setAttribute('download', name)
    a.href = href
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

/**
 * 下载二进制文件流
 * @param {Blob} blob 文件流
 * @param {String} contentDisposition 文件名的请求头 对应 content-disposition
 */
export function downLoadByBlob (blob, contentDisposition) {
    const file = new Blob([blob], { type: 'application/octet-stream' })
    // 提取文件名
    const fileName = contentDisposition.match(
        /filename=(.*)/
    )[1]
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
        // 兼容IE，window.navigator.msSaveBlob：以本地方式保存文件
        window.navigator.msSaveBlob(file, decodeURI(fileName))
    } else {
        const blobURL = window.URL.createObjectURL(file)
        const tempLink = document.createElement('a')
        tempLink.style.display = 'none'
        tempLink.href = blobURL
        tempLink.setAttribute('download', decodeURI(fileName))
        if (typeof tempLink.download === 'undefined') {
            // 兼容：某些浏览器不支持HTML5的download属性
            tempLink.setAttribute('target', '_blank')
        }
        document.body.appendChild(tempLink)
        tempLink.click()
        document.body.removeChild(tempLink)
        window.URL.revokeObjectURL(blobURL)
    }
}
