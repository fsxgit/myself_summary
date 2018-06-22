//pc端每个页面必须引入此方法,不然页面缩放后 内容不会跟着变化
function ScreenResize(){
    //窗口改变页面自动刷新 开始
    window.onresize=function(){
        location.reload();
    };
};