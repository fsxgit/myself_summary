function detailSelect(){
    var oTitClick = $(".fxMode .TitClick");

    oTitClick.on("click",function(){
        $(this).siblings(".selectCont").slideToggle();
        $(this).toggleClass("RbgActive");

    })
};

function bannerLunBo(){
    var myswiper = new Swiper('.swiper-container', {
        autoplay:2000,
        slidesPerView: 1,
        pagination : '.swiper-pagination',
        autoplayDisableOnInteraction : false
    });
}


function fullBo(){
    var myswiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        autoplay : 2000,
        slidesPerView: 1,
        autoplayDisableOnInteraction : false,
        onSlideChangeEnd: function(swiper){
//            alert('事件触发了;');
            $(".swiper-wrapper div").each(function(){
                if( $(this).hasClass('swiper-slide-active')){
                    var i =$(this).index()+1;
                    $("#num").html(i);
                }
            })
        }
    });
    $(function(){
        var oTol = $("#tol");
        var aSwiperSlide = $(".swiper-slide");
        var oSwiperWrapper = $(".swiper-wrapper");
        var T = ($(window).height()-oSwiperWrapper.height())/2;
        oSwiperWrapper.css({top:T});
        oTol.html(aSwiperSlide.length);
    })
}