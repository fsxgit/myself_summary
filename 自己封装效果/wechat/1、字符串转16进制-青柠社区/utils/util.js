function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('-');
}
exports.formatTime = formatTime;
var formatNumber = function (n) {
  var str = n.toString();
  return str[1] ? str : '0' + str;
};

/**
 * 加密
 * 
*/

function str2utf8(str) {
// 把字符串转化为utf-8格式
  var out, i, len, c;

  out = "";

  len = str.length;

  for (i = 0; i < len; i++) {

    c = str.charCodeAt(i);

    if ((c >= 0x0001) && (c <= 0x007F)) {

      out += str.charAt(i);

    } else if (c > 0x07FF) {

      out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));

      out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));

      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));

    } else {

      out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));

      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));

    }
  }
  return out;
}

function stringToHex(str) {
  console.log("str=" + str);
  str = str.toString();
  str = str2utf8(str);
  // 把utf-8格式字符串转化为16进制字符
  var val = "";
  for (var i = 0; i < str.length; i++) {
    if (val == "")
      val = str.charCodeAt(i).toString(16);
    else
      val += "," + str.charCodeAt(i).toString(16);
  }
  return val.replace(/,/g, "");
}

exports.stringToHex = stringToHex; 