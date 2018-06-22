/**
 * Created by JinnyZh on 2015/11/6.
 */
//公用js
//        使屏幕大小 作为html的font-size  作为页面的root
var iWidth=document.documentElement.getBoundingClientRect().width;
document.getElementsByTagName("html")[0].style.fontSize=iWidth+"px";

///安卓手机微信端 禁止调整页面字体大小的js
// 缺点:具有一秒左右的加载延迟,最好解决方法:使用延时动画来掩盖
(function(){
    if (typeof(WeixinJSBridge) == "undefined") {
        document.addEventListener("WeixinJSBridgeReady", function (e) {
            setTimeout(function(){
                WeixinJSBridge.invoke('setFontSizeCallback',{"fontSize":0}, function(res) {
                    alert(JSON.stringify(res));
                });
            },0);
        });
    } else {
        setTimeout(function(){
            WeixinJSBridge.invoke('setFontSizeCallback',{"fontSize":0}, function(res) {
                alert(JSON.stringify(res));
            });
        },0);
    }
})();