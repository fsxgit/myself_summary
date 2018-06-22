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