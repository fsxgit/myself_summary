
// const HOST = "http://api.summitdigitalcloud.com"; // 正式（卓越云）
// const HOST = "https://summitcloud.weiapp.net"; // 正式(公司)
var HOST = null;
var currHref = location.href;
console.log("currHref1="+currHref);
if(currHref.indexOf("summitdigitalcloud") >= 0 ){
  console.log("currHref2="+2);
  HOST = "http://api.summitdigitalcloud.com";
}else if(currHref.indexOf("weiapp") >= 0){
  HOST = "https://summitcloud.weiapp.net";
  console.log("currHref2="+3);
}else{
  HOST = "http://api.summitdigitalcloud.com";
  console.log("currHref2="+4);
}
/**
 * 常亮
 * */
function c_ts(text){
  var str = '';
  str += '<div class="c_ts_box">';
  str += '<div class="center">';
  str += '<span>'+text+'</span>';
  str += '</div>';
  str += '</div>';
  $("body").append(str);
  var timer = setTimeout(function(){
    $(".c_ts_box").remove();
    clearTimeout(timer);
  },2000);
}


/**
 * 获取指定的URL参数值
 * URL:http://www.quwan.com/index?name=tyler
 * 参数：paramName URL参数
 * 调用方法:getParam("name")
 * 返回值:tyler
 */
function getParam(paramName) {
  var paramValue = "";
  var isFound = !1;
  if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
    var arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
    while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
  }
  return paramValue == "" && (paramValue = null), paramValue
}

/**
 * 时间戳转化为年月日时分秒
 * */
function add0(m){return m<10?'0'+m:m }
function timeformat(shijianchuo)
{
//shijianchuo是整数，否则要parseInt转换
  var time = new Date(shijianchuo*1000);
  var y = time.getFullYear();
  var m = time.getMonth()+1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
}

/**
 * 时间戳转化为年月日时分
 * */
function add0(m){return m<10?'0'+m:m }
function timeformatMinute(shijianchuo)
{
//shijianchuo是整数，否则要parseInt转换
  var time = new Date(shijianchuo*1000);
  var y = time.getFullYear();
  var m = time.getMonth()+1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm);
}

/**
 * 时间戳转化为年月日
 * */
function timeToDate(date){
  date = new Date(date*1000);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = month.toString().length == 1 ? '0'+month : month;
  var day = date.getDate();
  day = day.toString().length == 1 ? '0'+day : day;
  console.log(day);
  date = year+'-'+month+'-'+day;
  return date;
}

/**
 * 时间戳转化为年月日
 * */
function timeToDateZh(date){
  date = new Date(date*1000);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = month.toString().length == 1 ? '0'+month : month;
  var day = date.getDate();
  day = day.toString().length == 1 ? '0'+day : day;
  console.log(day);
  date = year+'年'+month+'月'+day+'日';
  return date;
}


setInitFont();
function setInitFont() {
  var fontState = getParam("font");
  console.log("fontState="+fontState);
  if(fontState == "1"){
    console.log("fontState1="+fontState);
    $("html,body,title,p,div,span,i,h1,h2,h3,h4,h5,title,input,option,select").css("font-family"," PingFang SC, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif !important");
  }else{
    console.log("fontState2="+fontState);
    $("html,body,title,p,div,span,i,h1,h2,h3,h4,h5,title,input,option,select").css("font-family","TengXiang !important");
    $("html,body,title,p,div,span,i,h1,h2,h3,h4,h5,title,input,option,select").addClass("font2");
  }

}


/**
 *
 * 在app上显示分享按钮，在浏览器隐藏分享按钮
 *
 * **/
var ua = navigator.userAgent.toLowerCase();
// 安卓app设置值为 summitclub  ios设置值为 summitclubios
if (ua == "summitclub" || ua == "goxus" || ua == "summitclubios") {
  // 在app中
  $(".calc_teach_share").show();
  $(".c_bot_gap").show();
  // 资讯页面不显示资讯按钮
  $("#zixun").hide();
  $(".c_detail_wai").addClass("app");
}else{
  // 分享出去的资讯页面显示分享按钮
  $(".calc_teach_share").hide();
  $(".c_bot_gap").hide();
  // 分享出去的资讯页面显示资讯按钮
  $("#zixun").show();
}

/**
 * end
 * */


/**
 * 在app中弹出键盘时隐藏固定底部按钮，键盘消失时，显示固定顶部按钮
 *
 * **/
$("body").on("focus","input,textarea",function(){
  if(ua == "summitclub" || ua == "goxus") {
    return false;
    // 在安卓中
    $(".calc_teach_share").hide();
    $(".c_bot_gap").hide();
    $(".fixbtn").hide();
  }else if(ua == "summitclubios"){
    $(".calc_teach_share").hide();
    $(".c_bot_gap").hide();
    $(".fixbtn").hide();
  }
});
$("body").on("blur","input,textarea",function(){
  if(ua == "summitclub" || ua == "goxus") {
    // 在安卓中
    $(".calc_teach_share").show();
    $(".c_bot_gap").show();
    $(".fixbtn").show();
  }else if(ua == "summitclubios"){
    $(".calc_teach_share").show();
    $(".c_bot_gap").show();
    $(".fixbtn").show();
  }
});

window.addEventListener('focusout', function () {
  if (ua == "summitclub" || ua == "goxus") {
    // 在安卓中
    $(".calc_teach_share").show();
    $(".c_bot_gap").show();
    $(".fixbtn").show();
  }else if(ua == "summitclubios"){
    // 在ios中
    $(".calc_teach_share").show();
    $(".c_bot_gap").show();
    $(".fixbtn").show();
  }
  // window.scroll(0, 0);
});
window.addEventListener('focusin', function () {
  if (ua == "summitclub" || ua == "goxus") {
    return false;
    // 在安卓中
    $(".calc_teach_share").hide();
    $(".c_bot_gap").hide();
    $(".fixbtn").hide();
  }else if(ua == "summitclubios"){
    // 在ios中
    $(".calc_teach_share").hide();
    $(".c_bot_gap").hide();
    $(".fixbtn").hide();
  }
  // window.scroll(0, 0);
});

$(function(){
  var win0 = $(window).height();
  $(window).resize(function(){
    var win1 = $(window).height();
    if(win0 > win1 ){
      if(ua == "summitclub" || ua == "goxus"){
        return false;
        // 安卓
        $(".calc_teach_share").hide();
        $(".c_bot_gap").hide();
        $(".fixbtn").hide();
      }else if(ua == "summitclubios"){
        // ios
        $(".calc_teach_share").show();
        $(".c_bot_gap").show();
        $(".fixbtn").show();
      }
    }
    if(win0 < win1){
      if(ua == "summitclub" || ua == "goxus"){
        // 安卓
        $(".calc_teach_share").show();
        $(".c_bot_gap").show();
        $(".fixbtn").show();
      }else if(ua == "summitclubios"){
        // ios
        $(".calc_teach_share").hide();
        $(".c_bot_gap").hide();
        $(".fixbtn").hide();
      }
    }
  })
});

$("select").bind("click",function(e){
  if(ua == "summitclub" || ua == "goxus"){
    return false;
    // 安卓
    $(".calc_teach_share").hide();
    $(".c_bot_gap").hide();
    $(".fixbtn").hide();
  }else if(ua == "summitclubios"){
    $(".calc_teach_share").hide();
    $(".c_bot_gap").hide();
    $(".fixbtn").hide();
  }
});
/**
 *  end
 *
 * **/
