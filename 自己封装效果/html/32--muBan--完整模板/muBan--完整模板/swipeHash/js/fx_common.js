/**
 * Created by JinnyZh on 2015/11/6.
 */
//����js
//        ʹ��Ļ��С ��Ϊhtml��font-size  ��Ϊҳ���root
var iWidth=document.documentElement.getBoundingClientRect().width;
document.getElementsByTagName("html")[0].style.fontSize=iWidth+"px";

///��׿�ֻ�΢�Ŷ� ��ֹ����ҳ�������С��js
// ȱ��:����һ�����ҵļ����ӳ�,��ý������:ʹ����ʱ�������ڸ�
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