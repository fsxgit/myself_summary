function bannerLunBo(){
    var myswiper = new Swiper('.swiper-container', {
        autoplay:2000,
        slidesPerView: 1,
        pagination : '.swiper-pagination',
        autoplayDisableOnInteraction : false
    });
}


function bannerLunBo_xq(){
    //获取轮播总个数
    var oTol = $("#tol");
    var aSwiperSlide = $(".swiper-slide");
    oTol.html(aSwiperSlide.length);

    //轮播开始
    var myswiper = new Swiper('.swiper-container', {
        autoplay:2000,
        slidesPerView: 1,
        pagination : '.swiper-pagination',
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
}
