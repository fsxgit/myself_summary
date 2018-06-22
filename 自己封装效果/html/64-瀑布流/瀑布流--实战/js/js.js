//pc端每个页面必须引入此方法,不然页面缩放各1�7 内容不会跟着变化
function ScreenResize(){
    //窗口改变页面自动刷新 弄1�7姄1�7
    window.onresize=function(){
        location.reload();
    };
};

//公用头部 扫码下载
$(function(){
    $(".hover-ma").hover(function(){
        $(".dload-ma").show();
    },function(){
        $(".dload-ma").hide();
    })
    //逄1�7出登彄1�7
    $(".user-img").hover(function(){
        $(".tuic").show();
    },function(){
        $(".tuic").hide();
    })

});
//公用头部 扫码下载 end
//公用 end
$(function(){
    $(window).scroll(function(){
        var st = $(window).scrollTop();
        if( st>300){
            $(".c-backTop").show();
        }else{
            $(".c-backTop").hide();
        }
    })
})


//首页轮播
function IndexSwipe(){
    var L = ($(window).width()-1000)/2;
    var T = ($(".ind-banner").height()-70)/2;
    $(".ind-banner .swiper-button-prev").css({"left":L,"top":T});
    $(".ind-banner .swiper-button-next").css({"right":L,"top":T});


    var mySwiperBanner = new Swiper('.index-banner-swiper', {
        autoplay: 3000,//可�1�7��1�7�项，自动滑劄1�7
        effect : 'fade',
        loop:true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        pagination : '.swiper-pagination',
        speed:1000,
        fade: {
            crossFade:true
        },
        paginationClickable :true,
        autoplayDisableOnInteraction : false
    })
    $(".swiper-container-banner").hover(function(){
        mySwiperBanner.stopAutoplay();
    },function(){
        mySwiperBanner.startAutoplay();
    });
}

//切换 active
function tabActive(obj){
    $(obj).click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
}


function setDate( obj , type ){
    switch (type ){
        case 1:
            $(obj).datepicker({format: 'yyyy-mm-dd hh:ii:ss' , language:"zh-CN"});
            break;
        case 2:
            $(obj).datepicker({format: 'yyyy-mm-dd',language:"zh-CN",minView:2,autoclose:true});
            break;
    }

}







// 后台js
window.updateAlert = function (text) 
{
    alert(text);
};

