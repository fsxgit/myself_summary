
//index.html js��ʼ
function guaguabanner(){
    var myswiper = new Swiper('.swiper-container', {
        autoplay:3000,
        slidesPerView: 1,
        loop:true,
        pagination : '.swiper-pagination',
        autoplayDisableOnInteraction : false
    });
}

//�ײ�����ת�� index.html js��ʼ
function footswitch(){
    var $Img = $(".footList .iconBot img");
    $Img.each(function(){
        $(this).click(function(){
            var str=$(this).attr("src").split("_")[0];
            $Img.each(function(){
                $(this).attr("src",$(this).attr("src").split("_")[0]+"_o.png");
            })
            $(this).attr("src",str+'_n.png');
        })
    })
}
//�ײ�����ת�� js����
//�����
function slideOut(){
    var slideout = new Slideout({
        'panel': document.getElementById('main'),
        'menu': document.getElementById('menu'),
        'padding': 235,
        'tolerance': 70
    });

    document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
        slideout.toggle();
    });

    document.querySelector('.menu').addEventListener('click', function(eve) {
        if (eve.target.nodeName === 'A') { slideout.close(); }
    });
    function aload(t){"use strict";t=t||window.document.querySelectorAll("[data-aload]"),void 0===t.length&&(t=[t]);var a,e=0,r=t.length;for(e;r>e;e+=1)a=t[e],a["LINK"!==a.tagName?"src":"href"]=a.getAttribute("data-aload"),a.removeAttribute("data-aload");return t}
    window.onload = function(){
        aload();
        document.querySelector('.iphone').className += ' shown';
    }
}
//index.html js����

//feifang.html ��ʼ
//��ҵ���� ���ת��
function lei_span_tab(){
    var aSpan = $(".lei_span span");
    aSpan.each(function(){
        $(this).on("click",function(){
            $(this).addClass("active").siblings().removeClass("active");
        })
    })
}
//feifang.html ����
//feijiZG.html �л�
function feiTab(){
    var aSpan = $(".header span");
    var aTabMode =$(".tabMode");

    aSpan.each(function(i){
        $(this).on("click",function(){
            $(this).addClass("active").siblings().removeClass("active");
            aTabMode.eq(i).show().siblings(".tabMode").hide();
        })
    })
}

//zuoyeDD.html ��ַѡ�� js
function siteChoose(){
    var aSiteUse =$(".site_use");
    aSiteUse.each(function(){
        $(this).on("click",function(){
            $(this).addClass("active");
            $(this).parents(".site_mode").siblings(".site_mode").find(".site_use").removeClass("active");
        })
    })
}
//zuoyedidian.html ��ַѡ�� js
function placeChoose(){
    var aPlaceBox = $(".placeBox");
    aPlaceBox.each(function(){
        $(this).on("click",function(){
            $(this).addClass("active").siblings().removeClass("active");
        })
    })
}

//woxiaoxiBJ.html ��Ϣ�༭ js
function xiaoxiBJ(){
    var xiaoxi =$(".neiBox");
    xiaoxi.on("click",function(event){
        alert("aaa");
            //$(this).toggleClass("active");
        event.stopPropagation();
    })
}

