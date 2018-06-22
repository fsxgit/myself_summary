/**
 * Created by JinnyZh on 2015/11/19.
 */
function fxtab(){
    //窗口改变页面自动刷新 开始
    window.onresize=function(){
        location.reload();
    };
};

function alertMa(){
    var oAlertBtn = $(".alertBtn");
    var oQxBtn = $(".QxBtn");
    var oAlertBox = $(".alertBox");
    var oAlertShadow = $(".alertShadow");
    oAlertBtn.click(function(){
        oAlertShadow.show();
        var L = ($(window).width()-oAlertBox.width())/2;
        var T = ($(window).height()-oAlertBox.height())/2;
        oAlertBox.css({"left":L,"top":T});
    });
    oQxBtn.click(function(){
        oAlertShadow.hide();
    })
}