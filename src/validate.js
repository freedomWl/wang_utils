
/**
 * 判断给定的路径是否为外部链接
 *
 * @param {string} path - 需要判断的路径
 * @returns {boolean} 如果路径是外部链接（以http://, https://, mailto:, tel:开头），则返回true；否则返回false
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 验证编码CODE的正则表达式
 *
 * @param {string} str - 需要验证的编码CODE字符串
 * @returns {boolean} 如果字符串只包含英文、数字、点、横线、下划线，则返回true；否则返回false
 */
export function validateCode (str) {
  const reg = /^[a-zA-Z0-9_\\.\\-]*$/
  return reg.test(str)
}

/**
 * 验证用户输入是否合法
 *
 * 此函数用于验证用户输入是否只包含允许的字符。
 * 允许的字符包括英文字母（大小写）、数字以及中文字符。
 * 不允许的字符包括：~ ! @ # $ % ^ & * ( ) - + = [ ] { } | \ ; : ' " , . / < > ?
 *
 * @param {string} str - 用户输入的字符串
 * @returns {boolean} 如果输入字符串只包含允许的字符，则返回true；否则返回false
 */
export function validUserInput (str) {
  const reg = /^[a-zA-Z0-9\u4E00-\u9FA5]+$/
  return reg.test(str)
}

/**
 * 验证标签输入是否合法
 *
 * 此函数用于验证输入字符串是否只包含英文字母（大小写）、数字以及中文字符。
 *
 * @param {string} str - 待验证的输入字符串
 * @returns {boolean} 如果输入字符串只包含英文字母（大小写）、数字以及中文字符，则返回true；否则返回false
 */
export function validTagsInput (str) {
  const reg = /^[a-zA-Z0-9\u4E00-\u9FA5]+$/
  return reg.test(str)
}

/**
 * 验证输入字符串是否为正整数
 *
 * 使用正则表达式检查输入字符串是否仅包含正整数。
 *
 * @param {string} str - 需要验证的输入字符串
 * @returns {boolean} 如果输入字符串是正整数，则返回true；否则返回false
 */
export function validNumberOnly (str) {
  const reg = /^[1-9]\d*$/
  return reg.test(str)
}

/**
 * 验证输入字符串是否为非负整数
 *
 * 使用正则表达式检查输入字符串是否仅包含非负整数（包括0）。
 *
 * @param {string} str - 需要验证的输入字符串
 * @returns {boolean} 如果输入字符串是非负整数，则返回true；否则返回false
 */
export function validNumberOnlyAnd0 (str) {
  const reg = /^[0-9]\d*$/
  return reg.test(str)
}

/**
 * 验证输入字符串是否为手机号或座机电话
 *
 * 此函数用于验证输入的字符串是否符合手机号或座机电话的格式。
 * 如果输入字符串中包含 '-' 字符，则使用座机电话的正则表达式进行校验；
 * 如果不包含 '-' 字符，则使用手机号的正则表达式进行校验。
 *
 * @param {string} str - 需要验证的输入字符串
 * @returns {boolean} 如果输入字符串符合手机号或座机电话的格式，则返回 true；否则返回 false
 */

export function validmobileNumber (str){
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
 * 验证电子邮件地址的有效性
 *
 * @param {string} str - 需要验证的电子邮件地址字符串
 * @returns {boolean} 如果字符串是有效的电子邮件地址，则返回true；否则返回false
 */

export function validEmail  (str){
  const reg = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
  return reg.test(str)
}

/**
 * 验证输入字符串是否为纯数字
 *
 * 此函数用于检查传入的字符串是否仅由数字字符组成。
 *
 * @param {string} str - 需要验证的输入字符串
 * @returns {boolean} 如果输入字符串完全由数字组成，则返回 true；否则返回 false
 */

export function validNumber  (str){
  const reg = /^[0-9]*$/
  return reg.test(str)
}
/**
 * 验证输入字符串是否为正整数或正浮点数
 *
 * 该函数接收一个字符串参数，并检查该字符串是否符合正整数或正浮点数的格式。
 * 使用正则表达式进行验证，确保字符串仅包含数字，且可选地包含一个小数点及小数点后的数字。
 * 同时，该函数排除了形如 '0' 或 '0.0' 这样的无效数值。
 *
 * @param {string} str - 需要验证的输入字符串
 * @returns {boolean} 如果输入字符串为正整数或正浮点数，则返回 true；否则返回 false
 */

export function checkFloatAndIntegerNumber  (str) {
  // const reg = /^([0-9]\d*|\d+\.\d+)$/
  const reg = /^(?!0+(\.0+)?$)\d+(\.\d+)?$/
  return reg.test(str)
}
/**
 * 检查字符串是否仅包含数字和字母
 *
 * 该函数用于验证传入的字符串是否仅由数字（0-9）或字母（a-z, A-Z）组成。
 * 它通过正则表达式进行匹配，返回布尔值表示验证结果。
 *
 * @param {string} str - 需要验证的字符串
 * @returns {boolean} 如果字符串仅包含数字和字母，则返回 true；否则返回 false
 */

export function checkNumberOrAlphabet (str){
  const reg = /^[0-9a-zA-Z]*$/
  return reg.test(str)
}
/**
 * 判断字符串中是否包含特殊字符（不包含下划线）
 *
 * 该函数遍历输入的字符串，检查其中是否包含指定的特殊字符集合。
 * 如果字符串中包含任何特殊字符，则返回 false；否则返回 true。
 *
 * @param {string} str - 需要检查的字符串
 * @returns {boolean} 如果字符串中不包含任何特殊字符（不包含下划线），则返回 true；否则返回 false
 */

export function specialCharacters1 (str){
  var specialKey = "~!@#$%^&*()-+=[{}|\;:',./<>?~·！￥……（）——-+={【}】|、：；”“‘’《，》。？/"
  for (var i = 0; i < str.length; i++) {
    if (specialKey.indexOf(str.substr(i, 1)) !== -1) {
      return false
    }
  }
  return true
}

/**
 * 判断字符串中是否包含特殊字符（包含下划线）
 *
 * 该函数用于检查传入的字符串中是否包含特定的特殊字符集合，包括下划线。
 * 如果字符串中包含任何特殊字符，则返回 false；否则返回 true。
 *
 * @param {string} str - 需要检查的字符串
 * @returns {boolean} 如果字符串中不包含任何特殊字符（包含下划线），则返回 true；否则返回 false
 */

export function specialCharacters2 (str){
  var specialKey = "~!@#$%^&*()-_+=[]{}|\;:',./<>?~·！￥……（）——-+={【}】|、：；”“‘’《，》。？/"
  for (var i = 0; i < str.length; i++) {
    if (specialKey.indexOf(str.substr(i, 1)) !== -1) {
      return false
    }
  }
  return true
}

/**
 * 判断字符串中是否包含特殊字符（JavaScript）
 *
 * 该函数用于检查传入的字符串是否包含特定的特殊字符集合。
 * 如果字符串中包含任何特殊字符，则返回 false；否则返回 true。
 *
 * @param {string} str - 需要检查的字符串
 * @returns {boolean} 如果字符串中不包含任何特殊字符，则返回 true；否则返回 false
 */
export function specialKeyFun (str) {
  var specialKey = "[`~!#$^&*()=|{}':;'\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'"
  for (var i = 0; i < str.length; i++) {
    if (specialKey.indexOf(str.substr(i, 1)) !== -1) {
      return false
    }
  }
  return true
}

/** *******************************************
  * 检验身份证格式是否正确
  ********************************************/
export function checkIdCard (IDCard, callback) {
  // 身份证地区
  const areaID = {
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
  // 验证长度和格式
  if (!/^\d{17}(\d|x|X)$/i.test(IDCard)) {
    return callback(new Error('输入的身份证长度或格式错误!'));
  }

  // 统一将X转换为小写a进行后续处理
  const normalizedIDCard = IDCard.replace(/x|X$/i, 'a');

  // 验证地区码
  if (areaID[parseInt(normalizedIDCard.substr(0, 2), 10)] == null) {
    return callback(new Error('身份证地区码非法!'));
  }

  // 验证出生日期
  const sBirthday = `${normalizedIDCard.substr(6, 4)}-${normalizedIDCard.substr(10, 2)}-${normalizedIDCard.substr(12, 2)}`;
  const d = new Date(sBirthday);
  if (isNaN(d) || sBirthday !== d.toISOString().slice(0, 10)) {
    return callback(new Error('身份证上的出生日期非法!'));
  }

  // 验证校验码
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 权重因子
  const checkCodes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']; // 校验码
  let sum = 0;
  for (let i = 0; i < normalizedIDCard.length - 1; i++) {
    sum += parseInt(normalizedIDCard[i], 10) * weights[i];
  }
  const remainder = sum % 11;
  if (normalizedIDCard[17] !== checkCodes[remainder]) {
    return callback(new Error('输入的身份证号非法!'));
  }

  return callback();
  // 性别
  // // var sexMap = { 0: '女', 1: '男' }
  // var iSum = 0
  // // var info = ''
  // if (!/^\d{17}(\d|x)$/i.test(IDCard)) { return callback(new Error('你输入的身份证长度或格式错误!')) }
  // IDCard = IDCard.replace(/x$/i, 'a')
  // if (areaID[parseInt(IDCard.substr(0, 2))] == null) { return callback(new Error('你的身份证地区非法!')) }
  // var sBirthday = IDCard.substr(6, 4) + '-' + Number(IDCard.substr(10, 2)) + '-' + Number(IDCard.substr(12, 2))
  // var d = new Date(sBirthday.replace(/-/g, '/'))
  // if (sBirthday !== (d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate())) { return callback(new Error('身份证上的出生日期非法!')) }
  // for (var i = 17; i >= 0; i--) { iSum += (Math.pow(2, i) % 11) * parseInt(IDCard.charAt(17 - i), 11) }
  // if (iSum % 11 !== 1) { return callback(new Error('你输入的身份证号非法!')) }
  // return callback()
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

/**
 * 检查护照号码的有效性
 *
 * 该函数用于验证输入的护照号码是否符合特定的格式要求。
 * 如果护照号码符合格式要求，则调用回调函数且不传递任何参数；
 * 如果不符合格式要求，则调用回调函数并传递一个错误对象。
 *
 * @param {string} val - 需要验证的护照号码字符串
 * @param {Function} callback - 回调函数，用于处理验证结果
 *                             - 当验证通过时，不传递任何参数调用此函数
 *                             - 当验证失败时，传递一个Error对象调用此函数
 */
export function checkHuZhaoCard(val, callback) {
  // 护照号码通常由5到17位的字母和数字组成
  const reg = /^[a-zA-Z0-9]{5,17}$/g;
  if (reg.test(val)) {
    return callback();
  } else {
    return callback(new Error('你输入的护照长度或格式错误!'));
  }
}
// 回乡证
export function checkHuiXiangCard (val, callback) {
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
 * 验证手机号码或固定电话的有效性
 *
 * @param {string} str - 需要验证的电话号码字符串
 * @returns {boolean} 如果字符串是有效的手机号码或固定电话，则返回true；否则返回false
 */
export function validatePhoneNumber(str) {
  if (str.indexOf("-") === -1) {
    // 手机号码的正则表达式，匹配以1开头，第二位为3-9之间任意数字，后面跟着9位数字的手机号
    const reg = /^1[3-9]\d{9}$/;
    return reg.test(str);
  } else {
    // 固定电话的正则表达式，匹配区号（0开头，后面跟着2-3位数字），电话号码（7-8位数字），
    // 可选的分机和分机号（以-开头，后面跟着至少3位数字）
    const reg = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
    return reg.test(str);
  }
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

/**
 * 格式化数字，添加逗号分隔符
 *
 * @param {string} val - 需要格式化的数字字符串
 * @returns {string} 格式化后的数字字符串，包含逗号分隔符
 */
export function formatNumberWithCommas(val) {
  // 验证并获取格式化前的数字字符串
  const verifiedNumber = verifyNumberIntegerAndFloat(val);
  if (typeof verifiedNumber !== 'string') {
    throw new Error('Invalid number format');
  }
  // 整数部分添加逗号分隔符
  const integerPart = verifiedNumber.split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // 如果有小数部分，则合并；否则直接返回整数部分
  const decimalPart = verifiedNumber.split('.')[1];
  return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
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
/**
 * 验证IP地址的有效性
 *
 * @param {string} val - 需要验证的IP地址字符串
 * @returns {boolean} 如果字符串是有效的IPv4地址，则返回true；否则返回false
 */

export function verifyIPAddress(val) {
  // 使用更简洁的正则表达式验证IP地址
  const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return ipRegex.test(val);
}

/**
 * 验证输入的字符串是否符合电子邮件格式
 *
 * @param {string} val - 需要验证的电子邮件地址字符串
 * @returns {boolean} 如果输入的字符串符合电子邮件格式，则返回true；否则返回false
 */
export function verifyEmail(val) {
  // 使用更简洁的正则表达式验证邮箱格式
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(val);
}
/**
 * 验证身份证号码的有效性
 *
 * @param {string} val - 需要验证的身份证号码
 * @returns {boolean} 如果身份证号码有效，则返回true；否则返回false
 */
export function verifyIdCard(val) {
  // 正则表达式验证身份证号码格式
  const idCardRegex = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  // 使用test()方法进行验证并返回结果
  return idCardRegex.test(val);
}

/**
 * 验证全名是否符合中文姓名格式，支持最多两个点的姓名（如“张三·李四·王五”）
 *
 * @param {string} val - 需要验证的全名
 * @returns {boolean} 如果全名符合格式，则返回true；否则返回false
 */
export function verifyFullName(val) {
  return /^[\u4e00-\u9fa5]{1,6}(·[\u4e00-\u9fa5]{1,6}){0,2}$/.test(val);
}

/**
 * 验证邮政编码是否正确
 *
 * @param {string} val - 需要验证的邮政编码字符串
 * @returns {boolean} 如果邮政编码格式正确，则返回true；否则返回false
 */
export function verifyPostalCode(val) {
  // 使用正则表达式验证邮政编码格式：6位数字，首位不为0
  const reg = /^[1-9][0-9]{5}$/;
  return reg.test(val);
}
/**
 * 验证给定的字符串是否为有效的URL
 *
 * @param {string} val - 需要验证的字符串
 * @returns {boolean} 如果字符串是有效的URL，则返回true；否则返回false
 */
export function verifyUrl(val) {
  // 简化后的正则表达式，用于验证URL格式
  const urlRegex = /^(https?:\/\/[^\s]+)/i;
  return urlRegex.test(val);
}

/**
 * 验证车牌号的有效性
 *
 * 使用正则表达式来验证传入的车牌号字符串是否符合规定的格式。
 * 该正则表达式支持中国大陆的各种车牌号格式，包括普通车牌、新能源汽车车牌以及特殊车牌（如使领馆车牌等）。
 *
 * @param {string} val - 需要验证的车牌号字符串
 * @returns {boolean} 如果传入的车牌号字符串符合规定的格式，则返回true；否则返回false
 */
export function verifyCarNum(val) {
  // 简化后的正则表达式，仍然保持原有功能
  const reg = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4}))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/;
  return reg.test(val);
}

