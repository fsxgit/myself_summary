function slide(){
    var  mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', //水平方向
        grabCursor : true, //指针形状
        freeMode : false,//自动粘合
        slidesPerView : 'auto',//按设置的宽高自由分配显示的个数
        preventClicks : false
    });
    var aSpan = $(".navBox .swiper-slide");
    aSpan.on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
}