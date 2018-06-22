
//banner  轮播
function bannerLunBo(){
    var myswiper = new Swiper('.swiper-container1', {
        autoplay:3000,
        slidesPerView: 1,
        loop:true,
        pagination : '.swiper-pagination',
        autoplayDisableOnInteraction : false
    });
}

//文字滚动
function Txtgundong(){
    var myswiper = new Swiper('.swiper-container2', {
        autoplay:3000,
        slidesPerView: 1,
        direction : 'vertical',
        loop:true,
        pagination : '.swiper-pagination',
        autoplayDisableOnInteraction : false
    });
}

//弹出框 显示 隐藏
function hideShow(){
    $(".lingnum").on("click",function(){
        $(".chengzhang").toggle();
        event.stopPropagation();
    })
    $("body").on("click",function(){
        $(".chengzhang").hide();
    })
}

//字符串截取
//截取字符串，多余的部分用...代替
function stringDeal(){
    var aSpanWei = $(".spanwei");
    aSpanWei.each(function(){
        var fx = $(this).text();
        var txt = setString(fx, 15);
        $(this).text(txt);
    })
    function setString(str, len) {
        var strlen = 0;
        var s = "";
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 128) {
                strlen += 2;
            } else {
                strlen++;
            }
            s += str.charAt(i);
            if (strlen >= len) {
                return s+"...";
            }
        }
        return s;
    }
}
