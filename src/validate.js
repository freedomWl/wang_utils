
export function isvalidUsername (str) {
  const valid_map = ['sysadmin', 'areaadmin', 'bizadmin', 'qjadmin']
  return valid_map.indexOf(str.trim()) >= 0
}

export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
	 * 验证编码CODE的正则表达式
	 * 只能包含英文、数字、点、横线、下划线
	 */
export function validateCode (str) {
  const reg = /^[a-zA-Z0-9_\\.\\-]*$/
  return reg.test(str)
}

/**
 * 验证编码CODE的正则表达式
 * 2、	文本输入数据时不能包含特殊字符，特殊字符包括~ ! @ # $ % ^ & * ( ) - + = [ ] { } | \ ; : ' " , . / < > ? <
 */
export function validUserInput (str) {
  const reg = /^[a-zA-Z0-9\u4E00-\u9FA5]+$/
  return reg.test(str)
}
export function validTagsInput (str) {
  const reg = /^[a-zA-Z0-9\u4E00-\u9FA5]+$/
  return reg.test(str)
}
/**
 * 验证编码CODE的正则表达式
 * 只能是数字(正整数)
 */
export function validNumberOnly (str) {
  const reg = /^[1-9]\d*$/
  return reg.test(str)
}
// 包括0
export function validNumberOnlyAnd0 (str) {
  const reg = /^[0-9]\d*$/
  return reg.test(str)
}

/**
 * 手机号码或者固定电话校验
 */
export const validmobileNumber = (str) => {
  if (str.indexOf('-') === -1) {
    const reg = /^1[3456789]\d{9}$/
    return reg.test(str)
  } else {
    // console.log("inini")
    const reg = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/
    return reg.test(str)
  }
}

/**
 * 邮箱号码校验
 */
export const validEmail = (str) => {
  const reg = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
  return reg.test(str)
}

/**
 * 校验纯数字(整数)
 */
export const checkNumber = (str) => {
  const reg = /^[0-9]*$/
  return reg.test(str)
}
/**
 * 校验数字(非负，包含浮点数)
 */
export const checkFloatAndIntegerNumber = (str) => {
  // const reg = /^([0-9]\d*|\d+\.\d+)$/
  const reg = /^(?!0+(\.0+)?$)\d+(\.\d+)?$/
  return reg.test(str)
}

/**
 * 校验数字和字母
 */
export const checkNumberOrAlphabet = (str) => {
  const reg = /^[0-9a-zA-Z]*$/
  return reg.test(str)
}

/**
  * 判断特殊字符(不包含下划线)
  */
export const specialCharacters1 = (str) => {
  var specialKey = "~!@#$%^&*()-+=[{}|\;:',./<>?~·！￥……（）——-+={【}】|、：；”“‘’《，》。？/"
  for (var i = 0; i < str.length; i++) {
    if (specialKey.indexOf(str.substr(i, 1)) !== -1) {
      return false
    }
  }
  return true
  // const regEn1 = /[~!@#$%^&*()-+=[\]{}|\\;:'",.\/<>?]/im;
  // return regEn1.test(str);
}

/**
  * 判断特殊字符(包含下划线)
  */
export const specialCharacters2 = (str) => {
  var specialKey = "~!@#$%^&*()-_+=[]{}|\;:',./<>?~·！￥……（）——-+={【}】|、：；”“‘’《，》。？/"
  for (var i = 0; i < str.length; i++) {
    if (specialKey.indexOf(str.substr(i, 1)) !== -1) {
      return false
    }
  }
  return true
  // const regEn2 = /[~!@#$%^&*()-_+=[\]{}|\\;:'",.\/<>?]/im;
  // return regEn2.test(str);
}

/**
  * 判断特殊字符（js）
  */
export const specialKeyFun = (str) => {
  var specialKey = "[`~!#$^&*()=|{}':;'\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'"
  for (var i = 0; i < str.length; i++) {
    if (specialKey.indexOf(str.substr(i, 1)) !== -1) {
      return false
    }
  }
  return true
}

export function hasFunction (str) {
  var functionCodes = localStorage.getItem('roleFunction')
  if (functionCodes === 'undefined') {
    return false
  }
  var functionCodesArray = JSON.parse(functionCodes)
  for (var i = 0; i < functionCodesArray.length; i++) {
    if (str === functionCodesArray[i]) {
      return true
    }
  }
  return false
}
/** *******************************************
  * 检验身份证格式是否正确
  ********************************************/
export const checkIdCard = (IDCard, callback) => {
  // 身份证地区
  var areaID = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外'
  }
  // 性别
  // var sexMap = { 0: '女', 1: '男' }
  var iSum = 0
  // var info = ''
  if (!/^\d{17}(\d|x)$/i.test(IDCard)) { return callback(new Error('你输入的身份证长度或格式错误!')) }
  IDCard = IDCard.replace(/x$/i, 'a')
  if (areaID[parseInt(IDCard.substr(0, 2))] == null) { return callback(new Error('你的身份证地区非法!')) }
  var sBirthday = IDCard.substr(6, 4) + '-' + Number(IDCard.substr(10, 2)) + '-' + Number(IDCard.substr(12, 2))
  var d = new Date(sBirthday.replace(/-/g, '/'))
  if (sBirthday !== (d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate())) { return callback(new Error('身份证上的出生日期非法!')) }
  for (var i = 17; i >= 0; i--) { iSum += (Math.pow(2, i) % 11) * parseInt(IDCard.charAt(17 - i), 11) }
  if (iSum % 11 !== 1) { return callback(new Error('你输入的身份证号非法!')) }
  return callback()
}
// 军官证
export const checkJunGuanCard = (val, callback) => {
  const reg = /^\军\d{7}$/g
  if (reg.test(val)) {
    return callback()
  } else {
    return callback(new Error('你输入的军官证长度或格式错误!'))
  }
}
// 护照
export const checkHuZhaoCard = (val, callback) => {
  // const reg = /^[EGeg]{1}\d{7}$/g
  const reg1 = /^[a-zA-Z]{5,17}$/g
  const reg2 = /^[a-zA-Z0-9]{5,17}$/g
  if (reg1.test(val) || reg2.test(val)) {
    return callback()
  } else {
    return callback(new Error('你输入的护照长度或格式错误!'))
  }
}
// 回乡证
export const checkHuiXiangCard = (val, callback) => {
  const reg = /^[HMhm]([0-9]{10}|[0-9]{8})$/g
  if (reg.test(val)) {
    return callback()
  } else {
    return callback(new Error('你输入的回乡证长度或格式错误!'))
  }
}
// 台胞证
export const checkTaiBaoCard = (val, callback) => {
  const reg = /^[0-9]{8}$/g
  if (reg.test(val)) {
    return callback()
  } else {
    return callback(new Error('你输入的台胞证长度或格式错误!'))
  }
}
// 警官证
export const checkJingGuanCard = (val, callback) => {
  const reg = /^[0-9]{6}$/g
  if (reg.test(val)) {
    return callback()
  } else {
    return callback(new Error('你输入的警官证长度或格式错误!'))
  }
}
// 士兵证
export const checkShiBingCard = (val, callback) => {
  const reg = /^[0-9]{7}$/g
  if (reg.test(val)) {
    return callback()
  } else {
    return callback(new Error('你输入的士兵证长度或格式错误!'))
  }
}
// 其他
export const checkQiTaCard = (val, callback) => {
  if (val.length > 0 || val.length < 32) {
    return callback()
  } else {
    return callback(new Error('你输入的证件长度或格式错误!'))
  }
}
// 只能数字与字母
export const checkInputCharNum = (val, callback) => {
  if (/^[a-zA-Z0-9]*$/.test(val)) {
    return callback()
  } else {
    return callback(new Error('只允许输入字母和数字!'))
  }
}
// 只能数字与字母和_
export const checkInputCharNum_ = (val, callback) => {
  if (/^[a-zA-Z0-9_]*$/.test(val)) {
    return callback()
  } else {
    return callback(new Error('只允许输入字母、数字和_!'))
  }
}
// 联动校验，根据证件类型校验证件号
export const checkCertNoByCertType = (type, val, callback) => {
  const checkFn = {
    '01': checkIdCard, // 身份证号
    '02': checkJunGuanCard, // 军官证
    '03': checkHuZhaoCard, // 护照
    '04': checkHuiXiangCard, // 回乡证
    '05': checkTaiBaoCard, // 台胞证
    '06': checkJingGuanCard, // 警官证
    '07': checkShiBingCard, // 士兵证
    '99': checkQiTaCard // 其他
  }
  return checkFn[type](val, callback)
}
/**
 * 校验数字(包含浮点数，两位小数)
 */
export const checkFloatAndIntegerNumber2 = (str, callback) => {
  // const reg = /^([0-9]\d*|\d+\.\d+)$/
  const reg = /^-?(?!0+(\.0{0,2})?$)\d+(\.\d{0,2}})?$/
  try {
    if (reg.test(str)) {
      return callback()
    } else {
      return callback(new Error('格式不正确'))
    }
  } catch (error) {
    return callback(new Error('格式不正确'))
  }
}

/**
 * 校验数字(包含浮点数)
 */
export const checkFloatAndIntegerNumberAll = (str) => {
  // const reg = /^([0-9]\d*|\d+\.\d+)$/
  const reg = /^-?(?!0+(\.0+)?$)\d+(\.\d+)?$/
  return reg.test(str)
}
/**
 * 手机号码或者固定电话校验
 */
export const validmobileNumber2 = (str) => {
  const reg = /^1[3456789]\d{9}$/
  return reg.test(str)
  // if (str.indexOf("-") == -1) {
  //   const reg = /^1[3456789]\d{9}$/
  //   return reg.test(str)
  // } else {
  //   // console.log("inini")
  //   const reg = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/
  //   return reg.test(str)
  // }
}
// 只能数字
export const numberOnly = (str, callback) => {
  const reg = /^[0-9]\d*$/
  if (reg.test(str)) {
    return callback()
  } else {
    return callback(new Error('只允许输入数字！'))
  }
}
