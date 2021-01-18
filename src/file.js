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