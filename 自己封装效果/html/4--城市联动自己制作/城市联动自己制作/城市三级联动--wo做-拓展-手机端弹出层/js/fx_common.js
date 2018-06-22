// 给根元素设定标准,以rem为单位
var iWidth=document.documentElement.getBoundingClientRect().width;
document.getElementsByTagName("html")[0].style.fontSize=iWidth+"px";

//        窗口变化,重新加载  有时候容易引起问题,所以暂且不用
    window.onresize = function () {
        window.location.href=window.location.href;
    };