//首页、详情页公用轮播
function fxswiper(){
    var mySwiper1 = new Swiper ('#banner', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction : false,
        autoplay: 3000
    });
}


//首页、详情页公用进度条计算
function progressBar(){
    $(".jdval").each(function(){
        var V = parseInt($(this).html());
        if(V<=100){
            $(this).parents(".progress").find(".tiaoNei").css("width",V+"%");
        }else{
            $(this).parents(".progress").find(".tiaoNei").css("width",100+"%");
        }
    })
}

//购买日期中数字加减 多个使用
function num_change(){
    $(".c_num_reduce").click(function(){
        var zhi = $(this).siblings(".c_num_val").val();
        if(zhi>1){
            $(this).siblings(".c_num_val").val(zhi-1);
        }else{

        }
    });
    $(".c_num_add").click(function(){
        var zhi = parseInt($(this).siblings(".c_num_val").val());
        $(this).siblings(".c_num_val").val(zhi+1);
    })
}

$(function(){

});