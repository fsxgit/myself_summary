/* *
fsx  built in 2015.9.23
 */


//报价列表 BaojiaList.html  js
function BJ(){
    $aSpan = $(".BLhead span");
    $aImg = $(".BLhead img");

    $aSpan.each(function(){
        $(this).click(function(){
            var i = $(this).index();
            var aa=$aImg.eq(i).attr("src");
            var bb="images/down2.png";
            if(aa == bb){
                $aImg.eq(i).attr("src","images/up2.png");
            }else{
                $aImg.eq(i).attr("src","images/down2.png");
            }

        })
    })
}
//取消交易 Cannel.html js 开始
function Cannel(){
    var $aP = $(".CselectBox p");

    $aP.each(function(){
        $(this).click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        })

    })
}

//数码产品 digit.html js 开始
function Dxiala(){
    //    下拉菜单  js 开始
    var $aP = $(".fx_options p");
    var $fx_value = $(".fx_value");
    var $fx_btn = $(".fx_btn");
    var $fx_bg = $(".fx_bg");
    var $fx_options = $(".fx_options");
    var $selects = $(".selects");

    $(function(){$selects.each(function(){
        var $aP = $(this).find(".fx_options p");
        var $fx_value = $(this).find(".fx_value");
        var $fx_btn = $(this).find(".fx_btn");
        var $fx_bg = $(this).find(".fx_bg");
        var $fx_options = $(this).find(".fx_options");
        var $selects = $(this).find(".selects");

        function fxSlideBg(obj1,obj2,obj3,bgname){
            obj1.click(function(){
                obj3.stop().toggleClass(bgname);
                obj2.stop().slideToggle();

            })
        }
        fxSlideBg($fx_btn,$fx_options,$fx_bg,"bg2");
        function fxQuZhi(objs,obj0,obj1,obj2){
            objs.each(function(){
                $(this).click(function(){
                    obj0.text($(this).text());
//                obj1.attr("value",$(this).text());
                    obj2.slideUp();
                    $(this).addClass("selected").siblings().removeClass("selected");
                    obj0.css("color","#000")
                    obj1.removeClass("bg2").addClass("bg1");
                })
            })
        };
        fxQuZhi($aP,$fx_value,$fx_bg,$fx_options);
    })})
//    下拉菜单  js 结束
    //是否 选择  js  开始
    var $Bao = $("#Bao");
    var $Ture = $("#Ture");
    var $aBao = $("#Bao .choose");
    var $aTure = $("#Ture .choose");

    $aBao.each(function(){
        $(this).click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        })
    })
    $aTure.each(function(){
        $(this).click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        })
    })
    //是否 选择  js  结束
    var $Duo = $("#Duo");
    var $aDuo = $("#Duo div");

    $aDuo.each(function(){
        $(this).click(function(){
            $(this).toggleClass("active");
        })
    })
}
//我的物品 myGoods.html  js  开始
function MG(){
    var $aMGheader = $(".MGheader span");
    var $aMode = $(".MGcontent .mode");

    $aMGheader.each(function(){
        $(this).click(function(){
            var i = $(this).index();
            $(this).addClass("active11").siblings().removeClass("active11");
            $aMode.eq(i).addClass("active22").siblings().removeClass("active22");
        })

    })
}
//旧衣产品 OldCloth.html js 开始
function OC(){
    //    下拉菜单  js 开始
    var $aP = $(".fx_options p");
    var $fx_value = $(".fx_value");
    var $fx_btn = $(".fx_btn");
    var $fx_bg = $(".fx_bg");
    var $fx_options = $(".fx_options");
    var $selects = $(".selects");

    $(function(){$selects.each(function(){
        var $aP = $(this).find(".fx_options p");
        var $fx_value = $(this).find(".fx_value");
        var $fx_btn = $(this).find(".fx_btn");
        var $fx_bg = $(this).find(".fx_bg");
        var $fx_options = $(this).find(".fx_options");
        var $selects = $(this).find(".selects");
        var $aInput = $(this).find("input:not('.quzhi')");
        var $aQuzhi = $(this).find(".quzhi");

        function fxSlideBg(obj1,obj2,obj3,bgname){
            obj1.click(function(){
                obj3.stop().toggleClass(bgname);
                obj2.stop().slideToggle();

            })
        }
        fxSlideBg($fx_btn,$fx_options,$fx_bg,"bg2");
        function fxQuZhi(objs,obj0,obj1,obj2,obj3){
            objs.each(function(index){
                $(this).click(function(){
                    obj0.text($(this).text());
//                obj1.attr("value",$(this).text());
                    var value =$aInput.eq(index).attr("value");
                    alert(index);
                    alert(value);
                    obj3.attr("value",value);

                    obj2.slideUp();
                    $(this).addClass("selected").siblings().removeClass("selected");
                    obj0.css("color","#000")
                    obj1.removeClass("bg2").addClass("bg1");
                })
            })
        };
        fxQuZhi($aP,$fx_value,$fx_bg,$fx_options,$aQuzhi);
    })})
//    下拉菜单  js 结束
//是否 选择  js  开始
    var $Bao = $("#Bao");
    var $Ture = $("#Ture");
    var $aBao = $("#Bao .choose");
    var $aTure = $("#Ture .choose");

    $aBao.each(function(){
        $(this).click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        })
    })
    $aTure.each(function(){
        $(this).click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        })
    })
    //是否 选择  js  结束
    var $Duo = $("#Duo");
    var $aDuo = $("#Duo label");

    $aDuo.each(function(){
        $(this).click(function(){
            $(this).parent().toggleClass("active");
        })
    })
}

//个人资料 PerData.html js 开始
function PD(){
    //    下拉菜单  js 开始
    var $aP = $(".fx_options p");
    var $fx_value = $(".fx_value");
    var $fx_btn = $(".fx_btn");
    var $fx_bg = $(".fx_bg");
    var $fx_options = $(".fx_options");
    var $selects = $(".selects");

    $(function(){$selects.each(function(){
        var $aP = $(this).find(".fx_options p");
        var $fx_value = $(this).find(".fx_value");
        var $fx_btn = $(this).find(".fx_btn");
        var $fx_bg = $(this).find(".fx_bg");
        var $fx_options = $(this).find(".fx_options");
        var $selects = $(this).find(".selects");

        function fxSlideBg(obj1,obj2,obj3,bgname){
            obj1.click(function(){
                obj3.stop().toggleClass(bgname);
                obj2.stop().slideToggle();

            })
        }
        fxSlideBg($fx_btn,$fx_options,$fx_bg,"bg2");
        function fxQuZhi(objs,obj0,obj1,obj2){
            objs.each(function(){
                $(this).click(function(){
                    obj0.text($(this).text());
//                obj1.attr("value",$(this).text());
                    obj2.slideUp();
                    $(this).addClass("selected").siblings().removeClass("selected");
                    obj0.css("color","#000")
                    obj1.removeClass("bg2").addClass("bg1");
                })
            })
        };
        fxQuZhi($aP,$fx_value,$fx_bg,$fx_options);
    })})
    //    下拉菜单  js 结束
}
//手机品牌 phoneKinds.html js 开始
function PK(){
    var $aDiv = $(".boxLeft div:not(.TitLeft)");
    var $aMode = $(".mode");
    var $TitRight = $(".TitRight");

    $aDiv.each(function(){
        $(this).click(function(){
            var i = $(this).index()-1;
            $(this).addClass("active").siblings().removeClass("active");
            $aMode.eq(i).addClass("current").siblings().removeClass("current");
            $TitRight.text($(this).text());
        })
    })
}