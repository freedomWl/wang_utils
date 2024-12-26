

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

/**
 * 检查字符串是否存在于本地存储中的角色功能数组中
 *
 * @param str 要检查的字符串
 * @returns 如果字符串存在于本地存储中的角色功能数组中，则返回 true；否则返回 false
 */
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

/**
 * 验证百分比（不可以小数）
 * @param val 当前值字符串
 * @returns 返回处理后的字符串
 */
export function verifyNumberPercentage(val) {
  // 匹配空格
  let v = val.replace(/(^\s*)|(\s*$)/g, '');
  // 只能是数字和小数点，不能是其他输入
  v = v.replace(/[^\d]/g, '');
  // 不能以0开始
  v = v.replace(/^0/g, '');
  // 数字超过100，赋值成最大值100
  v = v.replace(/^[1-9]\d\d{1,3}$/, '100');
  // 返回结果
  return v;
}

/**
 * 验证百分比（可以小数）
 * @param val 当前值字符串
 * @returns 返回处理后的字符串
 */
export function verifyNumberPercentageFloat(val) {
  let v = verifyNumberIntegerAndFloat(val);
  // 数字超过100，赋值成最大值100
  v = v.replace(/^[1-9]\d\d{1,3}$/, '100');
  // 超过100之后不给再输入值
  v = v.replace(/^100\.$/, '100');
  // 返回结果
  return v;
}

// 小数或整数(不可以负数)
export function verifyNumberIntegerAndFloat(val) {
  // 匹配空格
  let v = val.replace(/(^\s*)|(\s*$)/g, '');
  // 只能是数字和小数点，不能是其他输入
  v = v.replace(/[^\d.]/g, '');
  // 以0开始只能输入一个
  v = v.replace(/^0{2}$/g, '0');
  // 保证第一位只能是数字，不能是点
  v = v.replace(/^\./g, '');
  // 小数只能出现1位
  v = v.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
  // 小数点后面保留2位
  v = v.replace(/^(\\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
  // 返回结果
  return v;
}

// 正整数验证
export function verifiyNumberInteger(val) {
  // 匹配空格
  let v = val.replace(/(^\s*)|(\s*$)/g, '');
  // 去掉 '.' , 防止贴贴的时候出现问题 如 0.1.12.12
  v = v.replace(/[\\.]*/g, '');
  // 去掉以 0 开始后面的数, 防止贴贴的时候出现问题 如 00121323
  v = v.replace(/(^0[\d]*)$/g, '0');
  // 首位是0,只能出现一次
  v = v.replace(/^0\d$/g, '0');
  // 只匹配数字
  v = v.replace(/[^\d]/g, '');
  // 返回结果
  return v;
}

// 去掉中文及空格
export function verifyCnAndSpace(val) {
  // 匹配中文与空格
  let v = val.replace(/[\u4e00-\u9fa5\s]+/g, '');
  // 匹配空格
  v = v.replace(/(^\s*)|(\s*$)/g, '');
  // 返回结果
  return v;
}

// 去掉英文及空格
export function verifyEnAndSpace(val) {
  // 匹配英文与空格
  let v = val.replace(/[a-zA-Z]+/g, '');
  // 匹配空格
  v = v.replace(/(^\s*)|(\s*$)/g, '');
  // 返回结果
  return v;
}

// 禁止输入空格
export function verifyAndSpace(val) {
  // 匹配空格
  let v = val.replace(/(^\s*)|(\s*$)/g, '');
  // 返回结果
  return v;
}

// 金额用 `,` 区分开
export function verifyNumberComma(val) {
  // 调用小数或整数(不可以负数)方法
  let v = verifyNumberIntegerAndFloat(val);
  // 字符串转成数组
  v = v.toString().split('.');
  // \B 匹配非单词边界，两边都是单词字符或者两边都是非单词字符
  v[0] = v[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // 数组转字符串
  v = v.join('.');
  // 返回结果
  return v;
}

// 匹配文字变色（搜索时）
export function verifyTextColor(val, text = '', color = 'red') {
  // 返回内容，添加颜色
  let v = text.replace(new RegExp(val, 'gi'), `<span style='color: ${color}'>${val}</span>`);
  // 返回结果
  return v;
}

// 数字转中文大写
export function verifyNumberCnUppercase(val, unit = '仟佰拾亿仟佰拾万仟佰拾元角分', v = '') {
  // 当前内容字符串添加 2个0，为什么??
  val += '00';
  // 返回某个指定的字符串值在字符串中首次出现的位置，没有出现，则该方法返回 -1
  let lookup = val.indexOf('.');
  // substring：不包含结束下标内容，substr：包含结束下标内容
  if (lookup >= 0) val = val.substring(0, lookup) + val.substr(lookup + 1, 2);
  // 根据内容 val 的长度，截取返回对应大写
  unit = unit.substr(unit.length - val.length);
  // 循环截取拼接大写
  for (let i = 0; i < val.length; i++) {
    v += '零壹贰叁肆伍陆柒捌玖'.substr(val.substr(i, 1), 1) + unit.substr(i, 1);
  }
  // 正则处理
  v = v
      .replace(/零角零分$/, '整')
      .replace(/零[仟佰拾]/g, '零')
      .replace(/零{2,}/g, '零')
      .replace(/零([亿|万])/g, '$1')
      .replace(/零+元/, '元')
      .replace(/亿零{0,3}万/, '亿')
      .replace(/^元/, '零元');
  // 返回结果
  return v;
}

// 手机号码
export function verifyPhone(val) {
  // false: 手机号码不正确
  if (!/^((12[0-9])|(13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(val)) return false;
  // true: 手机号码正确
  else return true;
}

// 国内电话号码
export function verifyTelPhone(val) {
  // false: 国内电话号码不正确
  if (!/\d{3}-\d{8}|\d{4}-\d{7}/.test(val)) return false;
  // true: 国内电话号码正确
  else return true;
}

// 登录账号 (字母开头，允许5-16字节，允许字母数字下划线)
export function verifyAccount(val) {
  // false: 登录账号不正确
  if (!/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/.test(val)) return false;
  // true: 登录账号正确
  else return true;
}

// 密码 (以字母开头，长度在6~16之间，只能包含字母、数字和下划线)
export function verifyPassword(val) {
  // false: 密码不正确
  if (!/^[a-zA-Z]\w{5,15}$/.test(val)) return false;
  // true: 密码正确
  else return true;
}

// 强密码 (字母+数字+特殊字符，长度在6-16之间)
export function verifyPasswordPowerful(val) {
  // false: 强密码不正确
  if (
      !/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&\\.*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&\\.*]+$)(?![\d!@#$%^&\\.*]+$)[a-zA-Z\d!@#$%^&\\.*]{6,16}$/.test(val)
  )
    return false;
  // true: 强密码正确
  else return true;
}

// 密码强度
export function verifyPasswordStrength(val) {
  let v = '';
  // 弱：纯数字，纯字母，纯特殊字符
  if (/^(?:\d+|[a-zA-Z]+|[!@#$%^&\\.*]+){6,16}$/.test(val)) v = '弱';
  // 中：字母+数字，字母+特殊字符，数字+特殊字符
  if (/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&\\.*]+$)[a-zA-Z\d!@#$%^&\\.*]{6,16}$/.test(val)) v = '中';
  // 强：字母+数字+特殊字符
  if (
      /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&\\.*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&\\.*]+$)(?![\d!@#$%^&\\.*]+$)[a-zA-Z\d!@#$%^&\\.*]{6,16}$/.test(val)
  )
    v = '强';
  // 返回结果
  return v;
}

// IP地址
export function verifyIPAddress(val) {
  // false: IP地址不正确
  if (
      !/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(
          val
      )
  )
    return false;
  // true: IP地址正确
  else return true;
}

// 邮箱
export function verifyEmail(val) {
  // false: 邮箱不正确
  if (
      !/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          val
      )
  )
    return false;
  // true: 邮箱正确
  else return true;
}

// 身份证
export function verifyIdCard(val) {
  // false: 身份证不正确
  if (!/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(val)) return false;
  // true: 身份证正确
  else return true;
}

// 姓名
export function verifyFullName(val) {
  // false: 姓名不正确
  if (!/^[\u4e00-\u9fa5]{1,6}(·[\u4e00-\u9fa5]{1,6}){0,2}$/.test(val)) return false;
  // true: 姓名正确
  else return true;
}

// 邮政编码
export function verifyPostalCode(val) {
  // false: 邮政编码不正确
  if (!/^[1-9][0-9]{5}$/.test(val)) return false;
  // true: 邮政编码正确
  else return true;
}

// url
export function verifyUrl(val) {
  // false: url不正确
  if (
      !/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
          val
      )
  )
    return false;
  // true: url正确
  else return true;
}

// 车牌号
export function verifyCarNum(val) {
  // false: 车牌号不正确
  if (
      !/^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(
          val
      )
  )
    return false;
  // true：车牌号正确
  else return true;
}

