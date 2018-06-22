// 给根元素设定标准,以rem为单位
var iWidth=document.documentElement.getBoundingClientRect().width;
document.getElementsByTagName("html")[0].style.fontSize=iWidth/10+"px";
//说明：设定根元素html字体大小是（屏幕的宽度/10）
//那么，屏幕的满屏宽度就是10rem，也即body{width:100%;}等效于body{width:10rem;}
//那么，以psd宽度是750为例，每个元素的css宽度=其psd上的 宽度(假设75px) 除以 （psd的总宽度/10）（也即根元素单位75px）=1rem;
//所以 其css宽度就是 div{width:1rem;}




////        窗口变化,重新加载  有时候容易引起问题,所以暂且不用
//    window.onresize = function () {
//        window.location.href=window.location.href;
//    };


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