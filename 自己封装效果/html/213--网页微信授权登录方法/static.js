/**
 * 常亮
 * */
var HOST = "http://baping.tuokexing.cn";
var HOSTURL = "http://xiuke.tuokexing.cn/index.php?i=26&t=26&v=1.12&from=wxapp&c=entry&a=wxapp&do=api&m=longbing_multi&channel=pc&s=";

// var vConsole = new VConsole();
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
};

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
 * 公用浏览记录统计接口
 * uid: 分享用户id
 * channel：分享渠道模块id（1.微信 2.微博 3.浏览器 4.FB 5.Twitter）
 * id：分享数据id（新闻、活动、信托、家庭福利规划、家庭财富架构架建等的数据id）
 * */

// 是转发的才走这个接口
var uid = getParam("uid"); // 转发用户的uid
if(!uid){uid=''}
var dataId = getParam("id");
if(!dataId){dataId='999'}
var cu_id = ''; // 当打开连接用户的uid
var skanTime = 1; // 浏览时间
var skanTimeOld = 0; // 浏览时间上次记录
var skanLength = 0; // 浏览长度
var skanLengthOld = 0; // 浏览长度上次记录
setInterval(function(){
  skanTime++;
},1000);


setInterval(function(){
  skanDataStatistics();
},5000);

var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
var iswxTimes = false;
function skanRecord(){
  var isfrom = getParam("from");
  if(isfrom){
    var isweixin = ua.match(/MicroMessenger/i);

    if(isweixin == 'micromessenger'){
      // 是微信打开才走微信授权
      $("#test").append("<p>1---在微信打开</p>");

      getuserinfo1();
    }else{
      // 不是微信打开直接去统计
      skanDataStatistics();
      document.getElementById("loading_wrap_box").style.opacity = 0;
      document.getElementById("loading_wrap_box").style.visibility = 'hidden';
    }

    // 【2】获取用户授权的url链接
    function getuserinfo1(){
      var code = getParam("code");
      var state = getParam("state");
      if(code && state){
        // 证明是授权返回来的链接，授过权就不走获取授权链接这个接口了
        $("#test").append("<p>2---打开微信授权之后的链接</p>");

        getuserinfo2();
        document.getElementById("loading_wrap_box").style.opacity = 0;
        document.getElementById("loading_wrap_box").style.visibility = 'hidden';
        return false;
      }
      var isurl = HOST+"/api/Wechat/get_url";
      var url = window.location.href;
      var param = {
        "url": url,
        "uid": uid
      };
      iswxTimes = true;
      $.ajax({
        "url": isurl,
        "type":"post",
        "data":param,
        success: function (res) {
          var data = JSON.parse(res);
          console.log(data.data);
          $("#test").append("<p>2---微信授权之后返回的状态code="+data.code+"</p>");
          if(data.code == 1){
            // 去授权
            var href = data.data;
            window.location.replace(href);
          }else if(data.code == 0){
            // 已授权，去记录浏览信息
            cu_id = data.data.uid;
            $("#test").append("<p>3---此用户授权过uid="+cu_id+"</p>");
            // 为防止关闭页面记录不上信息，所以在进入页面时提前发送一次记录
            skanDataStatistics();
            document.getElementById("loading_wrap_box").style.opacity = 0;
            document.getElementById("loading_wrap_box").style.visibility = 'hidden';
          }
        },
        error: function (res) {
          console.log("错误");
        }
      });
    }

    // 【2】获取用户信息
    function getuserinfo2(){
      var code = getParam("code");
      var state = getParam("state");

      $("#test").append("<p>4---获取到当前登录用户的用户信息</p>");
      $("#test").append("<p>code="+code+"</p>");
      $("#test").append("<p>state="+state+"</p>");
      $("#test").append("<p>uid="+uid+"</p>");
      $("#test").append("<p>uid="+123+"</p>");

      console.log("获取用户信息");
      console.log("code="+code,"state="+state);
      if(code && state){
        // 证明是微信授权后，返回的链接打开的，拿授权返回code和state去请求后台接口，获取用户信息
        $("#test").append("<p>去请求接口</p>");
        var isurl = HOST+"/api/wechat/get_code";
        var param = {
          "code": code,
          "state": state,
          "uid": uid
        };
        $.ajax({
          "url": isurl,
          "type":"get",
          "data":param,
          success: function (res) {
            console.log("接口返回");
            console.log(res);
            $("#test").append("<p>授权接口返回</p>");
            $("#test").append(res);
            var data = JSON.parse(res);
            if(data.code == 0){
              // 已授权，去记录浏览信息
              cu_id = data.data.uid;
              $("#test").append("<p>5---获取到当前登录用户uid="+cu_id+"</p>");
              // 为防止关闭页面记录不上信息，所以在进入页面时提前发送一次记录
              skanDataStatistics();
              document.getElementById("loading_wrap_box").style.opacity = 0;
              document.getElementById("loading_wrap_box").style.visibility = 'hidden';
            }
          },
          error: function (res) {
            console.log("错误");
          }
        });
      }
    }
  }else{

    document.getElementById("loading_wrap_box").style.opacity = 0;
    document.getElementById("loading_wrap_box").style.visibility = 'hidden';
  }

}

var repeatId = "";
// 【1】当存在时表明是分享出来的页面，浏览记录统计
function skanDataStatistics() {

  document.getElementById("loading_wrap_box").style.opacity = 0;
  document.getElementById("loading_wrap_box").style.visibility = 'hidden';
  if(!getParam("from")){
    // 不是分享不统计
    return false;
  }
  var isweixin = ua.match(/MicroMessenger/i);
  if(!isweixin){
    // 不是微信不统计
    return false;
  }

  $("#test").append("<p>5---开始统计,参数为</p>");
  $("#test").append("---参数uid="+uid);
  $("#test").append("---参数dataId="+dataId);
  $("#test").append("---参数cu_id="+cu_id);
  var isurl = HOST + "/api/user/browse";
  var cururl = window.location.href;
  // cururl = cururl.replace("http://api.summitdigitalcloud.com","");
  // clearTimeout(skanTime);

  // $("#test").append("---浏览时长="+skanTime);
  // 向上滚动的那一部分高度
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  // 屏幕高度也就是当前设备静态下你所看到的视觉高度
  var clientHeight = document.documentElement.clientHeight;
  // 整个网页的实际高度，兼容Pc端
  var scrHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  // 当滚动到距离页面底部100px时触发加载更多

  // $("#test").append("---窗口高度="+clientHeight);
  // $("#test").append("---文档高度="+scrHeight);
  // $("#test").append("---滚动高度="+scrollTop);


  // $("#tongji3").append("---窗口高度="+clientHeight);
  // $("#tongji3").append("---文档高度="+scrHeight);
  // $("#tongji3").append("---滚动高度="+scrollTop);

  if(skanTime >= 5){
    if(Number(scrollTop) + Number(clientHeight) + 100 >= Number(scrHeight)){
      skanLength = 100;
    }else{
      skanLength = Math.round((scrollTop/scrHeight)*100);
    }
  }
  if(skanTime <= skanTimeOld){
    skanTime = skanTimeOld;
  }else{
    skanTimeOld = skanTime;
  }
  if(skanLength <= skanLengthOld){
    skanLength = skanLengthOld;
  }else{
    skanLengthOld = skanLength;
  }
  $("#test").append("篇幅="+skanLength+"时长="+skanTime+"repeatId="+repeatId);
  var param = {
    "uid": uid,
    "modular": "1",  // 1 文章 2 供求信息
    "channel": "1",
    "data_id": dataId,
    "cu_id": cu_id, // 当打开连接用户的uid
    "url": cururl, // 当打开连接的链接
    "length": skanLength, // 篇幅浏览篇幅 1-100 （百分比）
    "duration": skanTime, // 时长浏览时长：单位秒
    "id": repeatId
  };
  $.ajax({
    "url": isurl,
    "type":"post",
    "async": false,
    "data":param,
    success: function (res) {
      param= JSON.stringify(param);
      res = JSON.parse(res);
      var res2 = JSON.stringify(res);
      $("#test").append("数="+res2+skanTime);
      if(res.code == 0){
        repeatId = res.data;
      }
    },
    error: function (res) {
      console.log("错误");
    }
  });
}


$("body").on("click","#test",function(){
  $("#test").css("height","auto");
});


$(function(){
  // 不是在安卓和ios中
  window.onunload=function(e){
    // 页面关闭时去统计浏览篇幅和浏览时长
    if(!iswxTimes){
      // 防止微信统计两次
      skanDataStatistics();
    }
    // return '系统可能不会保存您所做的更改';
  };

  pushHistory();
  window.addEventListener("popstate", function(e) {

    if(!iswxTimes){
      // 防止微信统计两次
      var isweixin = ua.match(/MicroMessenger/i);
      if (isweixin == "micromessenger") {
        if(cu_id){
          // 在微信中 只有授权过的菜统计浏览次数，否则不统计，防止微信统计两次
          skanDataStatistics();
        }
        WeixinJSBridge.call('closeWindow'); //微信
        window.close(); //普通浏览器
      }else{
        skanDataStatistics();
      }
    }
  }, false);
  function pushHistory() {
    var isweixin = ua.match(/MicroMessenger/i);
    if (isweixin == "micromessenger") {
      //在微信中返回
      var state = {
        title: "title",
        url: "#"
      };
      window.history.pushState(state, "title", "#");
    }
  }
  skanRecord();
});

debugmode();
function debugmode(){
  if(getParam("test") == "999"){
    $(".calc_teach_share").show();
    $(".c_bot_gap").show();
  }
}
