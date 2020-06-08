const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 正则验证手机号
 * 参数：手机号
*/
const regTel = function (tel) {
  console.log(tel);
  const reg = /^1[0-9]{10}$/;
  return reg.test(tel);
}

/**
 * 正则验证钱数
 * 参数：money
*/
const regMoney = function (tel) {
  console.log(tel);
  const reg = /^([0-9]+)(\.[0-9]+)?/;
  return reg.test(tel);
}

/**
 * 将时间转化为：**分钟前（1小时内）、**小时前（24小时内）、2019-06-07
*/
const timeChange = function (time) {
  let date = new Date();
  // 获取时间转化为时间戳
  let ztime = new Date(time).valueOf();
   // 当前时间的时间戳
  let ctime = date.valueOf();

  // 差距的时间戳 毫秒数
  let ms = ctime - ztime; 
  // 毫秒转化为秒
  let s = ms / 1000;    
  // 秒转化为分
  let m = s / 60;    
  // 分转化为小时
  let h = m / 60;   

  if (s < 60) {
    return parseInt(s) + "秒前";
  } else if (m < 60) {
    return parseInt(m) + "分前";
  } else if (h < 24) {
    return parseInt(h) + "小时前";
  } else {
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    let seperator1 = "-";
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    let currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
  }
}

module.exports = {
  formatTime: formatTime,
  regTel: regTel,
  regMoney: regMoney,
  timeChange: timeChange
}


