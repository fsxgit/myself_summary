//发布淡入淡出
function fabu(){
    $('.fbBox').remove();
    $.getJSON("/index.php/member/auth",function(data){
        if(data.code)
        {
          updateAlert(data.desc)
        }else{
          $('body').append(data.data.html)
        }
    });
}


function sexChoose(){
    $(".sexBox label").each(function(){
        $(this).click(function(){
            $(this).addClass("active").siblings("label").removeClass("active");
        })
    })
}

//index.html
function indexSwipe(){
    var myswiper = new Swiper('#swiper-container-banner', {
        autoplay:3000,
        slidesPerView: 1,
        pagination:'#swiper-container-banner .swiper-pagination',
        loop:true,
        autoplayDisableOnInteraction : false
    });
}
//新闻轮播
function newsSwipe(){
    var myswiper = new Swiper('#swiper-container-news', {
        autoplay:3000,
        direction:'vertical',
        slidesPerView:1,
        loop:true,
        autoplayDisableOnInteraction : false
    });
}
//专题轮播
function ztSwipe(){
    var myswiper = new Swiper('#swiper-container-zt', {
        autoplay:3000,
        slidesPerView:1,
        pagination:'#swiper-container-zt .swiper-pagination',
        loop:true,
        autoplayDisableOnInteraction : false
    });
}
//组织展示轮播
function showSwipe(){
    var myswiper = new Swiper('.swiper-container-show', {
        autoplay:3000,
        slidesPerView: 1,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        autoplayDisableOnInteraction : false
    });
}
//gyxm.html
function gyxm(){
    indexSwipe2();
    function indexSwipe2(){
        var myswiper = new Swiper('.swiper-container', {
            autoplay:2000,
            slidesPerView: "auto",
            loop: true,
            autoplayDisableOnInteraction : false
        });
    }
//    页面中的下拉
    //排序的下拉
    var ogyShadow = $(".gyShadow");
    var oOrder = $(".order");
    var orderSpan = $(".order span");
    var orderSelect = $(".orderSelect");
    var orderP = $(".orderSelect p");

    var oCitys = $(".citys");
    var ocitySpan = $(".citys span");
    var citySelect = $(".citysSelect");
    var cityP = $(".citysSelect p");

    var oState = $(".state");
    var stateP = $(".stateSelect p");
    var stateSpan = $(".state span");
    var stateSelect = $(".stateSelect");


    var oFilter = $(".filter");
    var oFilterSpan = $(".filter span");
    var oBox = $(".shaiBox");
    var oShai = $(".shaixuan");

    var siteMa = $(".sitema");
    var oDiImg = $(".diImg");
    var oDiTu = $(".diTu");
    var oHotCont = $(".hotCont");

    var W = oBox.width();
    oShai.css("left",-W);
    var m = true;
    var H;





    gySelect();
    function gySelect(){
//判断阴影是否显示
        showShadow();
        function showShadow(){
            var isTrue = orderSpan.hasClass("active") || stateSpan.hasClass("active") || ocitySpan.hasClass("active") ;
            if(isTrue){
                ogyShadow.show();
            }else{
                ogyShadow.hide();
            }

        }
//排序下拉
        oSelect();
        function oSelect(){
            oOrder.click(function(){

                orderSpan.toggleClass("active");
                orderSelect.slideToggle("slow");

                oDiTu.css("zIndex","4");
//                点击排序按钮  隐藏状态的下拉 和 侧边栏
                stateSpan.removeClass("active");
                ocitySpan.removeClass("active");
                stateSelect.hide();
                citySelect.hide();
                oShai.css("visibility","hidden");
                oFilterSpan.removeClass("active");
                oShai.css("left",-W);
                m = true;
                showShadow();
            });
            orderP.click(function(){
                $(this).addClass("active").siblings("p").removeClass("active");
                orderSpan.removeClass("active");
                orderSelect.slideToggle("slow");
                showShadow();
            })


        }

//    状态下拉
        sSelect();
        function sSelect(){
            oState.click(function(){
                stateSpan.toggleClass("active");
                stateSelect.slideToggle("slow");
//                点击状态按钮  隐藏排序的下拉 和 侧边栏
                orderSpan.removeClass("active");
                orderSelect.hide();
                ocitySpan.removeClass("active");
                citySelect.hide();
                oShai.css("visibility","hidden");
                oFilterSpan.removeClass("active");
                oShai.css("left",-W);
                oDiTu.css("zIndex","4");
                m = true;
                showShadow();
            });
            stateP.click(function(){
                $(this).addClass("active").siblings("p").removeClass("active");
                stateSpan.removeClass("active");
                stateSelect.slideToggle("slow");
                showShadow();
            })
        }
        //    城市下拉
        cSelect();
        function cSelect(){
            oCitys.click(function(){
                ocitySpan.toggleClass("active");
                citySelect.slideToggle("slow");
//                点击状态按钮  隐藏排序的下拉 和 侧边栏
                orderSpan.removeClass("active");
                orderSelect.hide();
                stateSpan.removeClass("active");
                stateSelect.hide();
                oShai.css("visibility","hidden");
                oFilterSpan.removeClass("active");
                oShai.css("left",-W);
                oDiTu.css("zIndex","4");
                m = true;
                showShadow();
            });
            cityP.click(function(){
                $(this).addClass("active").siblings("p").removeClass("active");
                ocitySpan.removeClass("active");
                citySelect.slideToggle("slow");
                showShadow();
            })
        }
    }




//    筛选滑动
    shaiHua();
    function shaiHua(){
        //开关按钮
        kgTab();
        function kgTab(){
            $(".sxKG").click(function(){
                $(this).toggleClass("active");
            })
        }

        oFilter.click(function(){

            if(m){
                oBox.css("height",H);
                oShai.css("visibility","visible");
                ogyShadow.show();
                oFilterSpan.addClass("active");
                oShai.animate({"left":0},500);
                oDiTu.css("zIndex","4");
                m = false;
                //                点击筛选按钮  隐藏排序的下拉 和 状态的下拉
                orderSpan.removeClass("active");
                orderSelect.hide();
                stateSpan.removeClass("active");
                stateSelect.hide();
                ocitySpan.removeClass("active");
                citySelect.hide();

            }else{
                ogyShadow.hide();
                oShai.animate({"left":W},500,function(){
                    oShai.css("visibility","hidden");
                    oBox.css("height","0");
                    oFilterSpan.removeClass("active");
                    oShai.css("left",-W);
                    oDiTu.css("zIndex","40");
                });

                m = true;
            }

        })

        $(window).load(function(){
            H = $(".shaixuan").height();
//        alert(H);
            oDiTu.css("display","none");
        })
    }

//    地图的切换
    ditu();
    function ditu(){
        siteMa.click(function(){
            $(this).toggleClass("active");
            if($(this).hasClass("active")){
                oDiImg.css("display","block");
                oDiTu.css("display","block");
                oHotCont.css("display","none");
               $("body").css({"width":"100%","height":"100%","overflow":"hidden"});

                ogyShadow.hide();
                orderSpan.removeClass("active");
                orderSelect.hide();
                stateSpan.removeClass("active");
                stateSelect.hide();
                oShai.css("visibility","hidden");
                oBox.css("height","0");
                oShai.css("left",-W);
                oDiTu.css("zIndex","40");
                m = true;
            }else{
                $("body").css({"width":"100%","height":"auto","overflow":"auto"});
                oDiImg.css("display","none");
                oDiTu.css("display","none");
                oHotCont.css("display","block");
                ogyShadow.hide();
                orderSpan.removeClass("active");
                orderSelect.hide();
                stateSpan.removeClass("active");
                stateSelect.hide();
                oShai.css("visibility","hidden");
                oBox.css("height","0");
                oShai.css("left",-W);
                oDiTu.css("zIndex","40");
                m = true;
            }
        })
    }
}

//底部切换导航
function footerTab(){
    $(".botNav a").click(function(){
        $(".botNav a").removeClass("active");
        $(this).addClass("active").siblings("a").removeClass("active");
    })

}
//发布显示隐藏弹出框
function fbAlertBox(){
    $(".center").click(function(){
        $(".fbBox").show();
    });
    $(".fbClose").click(function(){
        $(".fbBox").hide();
    })
}

//wodescV.html
//视频删除选择页面
function videoDel(){
    var oBtn = $(".scdel");
    var oQuan = $(".quan");
    var oShan = $(".shan");
    var osvDel = $(".svDel");
    var osvBot = $(".svBot");
    var num = 0;
    oBtn.click(function(){
        var dn = $(this).data("dn");
        if(dn == 1){
            $(this).addClass("active");
            $(this).data("dn","2");
            osvBot.show();
            osvDel.show();
        }
        if(dn == 2){
            $(this).removeClass("active");
            $(this).data("dn","1");
            osvBot.hide();
            osvDel.hide();
//            所有属性复原
            oQuan.text("全选");
            oQuan.data("qn","1");
            osvDel.each(function(){
                $(this).removeClass("active");
            });
            num = 0;
        }
    })

//    判断是否全部选中
    panduan();
    function panduan(){
        num = 0;
        var len = osvDel.length;
        osvDel.each(function(){
            if($(this).hasClass("active")){
                num += 1;
            }
        });
        if(num == len){
            oQuan.text("全不选");
            oQuan.data("qn","2");
        }else{
            oQuan.text("全选");
            oQuan.data("qn","1");
        }
        shanBtn();
    }
//判断删除按钮颜色
    shanBtn();
    function shanBtn(){
        //        判断删除按钮
        if(num == 0){
            oShan.css("color","#a0a0a0");
        }else{
            oShan.css("color","#000");
        }
    }

//    单选按钮
    osvDel.click(function(){
        $(this).toggleClass("active");
        panduan();
    });




//    全选按钮
    oQuan.click(function(){
        var qn = $(this).data("qn");
        if(qn == 1){
            osvDel.each(function(){
                $(this).addClass("active");
            });
            oQuan.text("全不选");
            $(this).data("qn","2");
        }
        if(qn == 2){
            osvDel.each(function(){
                $(this).removeClass("active");
            });
            oQuan.text("全选");
            $(this).data("qn","1");
            num = 0;
        }
        shanBtn();
    })
}


//详情 xmxq.html
//图片轮播
function imgSwipe(){
    var myswiper = new Swiper('.swiper-container', {
        autoplay:2000,
        slidesPerView: "auto",
        autoplayDisableOnInteraction : false
    });
}
//进度条
function jindutiao(){
    var rc = $(".rightcircle");
    var lc = $(".leftcircle");
    var per = $(".percentage").text();
//    alert(per);
//    百分一就是：3.6
    var d;
    if(per <= 50){
        d = Math.floor(3.6*per) + 225;
//        alert(d);
//        alert("1");
        rc.css({"-webkit-transform":"rotate("+ d +"deg)"});
        rc.css({"transform":"rotate("+ d +"deg)"});
    }else{
        d = Math.floor(3.6*(per-50)) + 225;
//        alert(d);
//        alert("2");
        rc.css({"-webkit-transform":"rotate(405deg)"});
        rc.css({"transform":"rotate(405deg)"});
        lc.css({"-webkit-transform":"rotate("+ d +"deg)"});
        lc.css({"transform":"rotate("+ d +"deg)"});
    }
}
//播放按钮居中
function btnCenter(){
    $(window).load(function(){
        var MT = ($(".playerBtn").height()-$(".playerBtn img").height())/2;
        $(".playerBtn img").css("marginTop",MT);
    })
}


//认证 的四个页面 公用 （认证公募组织，非公募组织，企事业单位，社会团体）
function renzhengAlert(){
    var sdBox = $(".sdBox");
    var sdCenter = $(".sdCenter");
    var MT = (sdBox.height() - sdCenter.innerHeight())/2;
    sdCenter.css("marginTop",MT);
    sdBox.fadeIn("slow",function(){
        setTimeout(function(){
            sdBox.fadeOut("slow");
        },4000)

    });
}


//几个详情中字符串的截取 发起方、公募组织、公益组织详情等页面
function txtSubing(){
    var oTxtBox = $(".textBox");
    var oBtn = $(".ckgd");
    var oBtnSpan = $(".ckgd span");

    var oTxt = oTxtBox.text();
    var subTxt ="";
    var len =oTxt.length;
    if(len>125){
        subTxt = oTxt.substr(0,125)+"...";
    }else{
        subTxt = oTxt.substr(0,125);
        oBtn.hide();
    }
    oTxtBox.text(subTxt);
    var shou = "向上收起详情";
    var zhan = "查看更多项目详情";
//    alert(oTxt);
//    console.log(h);

    oBtn.click(function(){
        var isTrue = $(this).hasClass("active");
        if(!isTrue){
//            alert(111);
            oTxtBox.text(oTxt);
            $(this).addClass("active");
            oBtnSpan.text(shou);
        }
        if(isTrue){
//            alert(222);
            $(this).removeClass("active");
            oTxtBox.text(subTxt);
            oBtnSpan.text(zhan);
        }
    })
}

//地图轮播
function dituSwipe(){
    var myswiper = new Swiper('.swiper-container', {
        autoplay:2000,
        slidesPerView: "auto",
        loop: true,
        autoplayDisableOnInteraction : false
    });
}


// 发布隐藏
function fabuClose(obj)
{
  var _parent = $(obj).parents(".fbBox");
  _parent.fadeOut("slow");;
}