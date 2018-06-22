//手机品牌 phoneKinds.html js 开始
function PK(){
    var $aDiv = $(".boxLeft .swiper-slide");
    var $aMode = $(".mode");
    var aN = $(".n");
    aN.each(function(index){
        $(this).text(index+1);
    })
    $aDiv.each(function(){
        $(this).click(function(){
            var i = $(this).index()-1;
            $(this).addClass("active").siblings().removeClass("active");
            $aMode.eq(i).addClass("current").siblings().removeClass("current");
        })
    })
}

function mySwiperPK(){
    var H = $(document.body).height()-$(".header").height()-$(".TitLeft").height()
    $(".swiper-wrapper").css("height", H);
    $(".swiper-container").css("height",H);
    var  mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        grabCursor : true,
        freeMode : false,
        slidesPerView : 'auto',
        preventClicks : false

    });
}

