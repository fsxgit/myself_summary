// 给根元素设定标准,以rem为单位
var iWidth=document.documentElement.getBoundingClientRect().width;
document.getElementsByTagName("html")[0].style.fontSize=iWidth/10+"px";

//安卓手机微信端 禁止调整页面字体大小的js
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


