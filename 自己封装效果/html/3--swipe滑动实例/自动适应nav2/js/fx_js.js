
//    KuaiSuXiaDan.html/JiShi.html/DingDan.html/aboutZiJi.html底部切换公共js
function DNfotSwitch(){
    var aFotImg = $(".KSfot img");
    aFotImg.on("click",function(){
        var imgnameY = $(this).attr("data-imgY");
        aFotImg.each(function(){
            var imgnameN = $(this).attr("data-imgN");
            $(this).attr("src",'images/'+imgnameN+'.png');
        })
        $(this).attr("src",'images/'+imgnameY+'.png');
    })
};

//ChaKanDaiFu.html  js
function CKDF(){
    var aPay = $(".payStyle .payBgN");
    aPay.on("click",function(){
        $(this).parents(".pay").siblings(".pay").find(".payBgN").removeClass("payBgY");
        $(this).toggleClass("payBgY")
    })
};

//ChaKanDingDan.html   js
function CKDD(){
    var oFpay_method = $(".Fpay_method");
    var aPay = $(".payStyle .payBgN");
    aPay.on("click",function(){
        $(this).parents(".pay").siblings(".pay").find(".payBgN").removeClass("payBgY");
        $(this).toggleClass("payBgY");
        var payValue = $(this).attr("data-value");
        oFpay_method.val(payValue);
    })
};

//DingDan.html  js
function DDjs(){
    //    头部切换
    var aSpan = $(".DDTab span");
    var aTabMode = $(".TabMode");
    aTabMode.eq(0).show();
    aSpan.on("click",function(){
        var i = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        aTabMode.eq(i).show().siblings(".TabMode").hide();

    });

//暂停 开关键
    $(function(){
        var aDingdanMode = $(".DingdanMode");
        aDingdanMode.each(function(){

            var oKGbtn =  $(this).find(".KGbtn");
            var oKGvalue = oKGbtn.attr("data-pause");
            var oKGid = oKGbtn.attr("data-myid");
            if(oKGvalue == 1){
                oKGbtn.addClass("zanTingG");
            }else{
                oKGbtn.addClass("zanTingK");
            };
            DY();
            function DY(){
                oKGbtn.on("click",function(){
                    var HasK = $(this).hasClass("zanTingK")
                    if(HasK){
                        $(this).addClass("zanTingG");
                        $(this).removeClass("zanTingK");
                        alert("您将于{2015-12-04}暂停配送");
                        alert(oKGid);
                    }else{
                        $(this).addClass("zanTingK");
                        $(this).removeClass("zanTingG");
                        alert("您将于{2015-12-04}开始配送");
                        alert(oKGid);
                    }
                });
            }
        })
        //var oKGbtn = $(".KGbtn");
        //var oKGvalue = oKGbtn.attr("data-pause");
        //var oKGid = oKGbtn.attr("data-myid");
        //if(oKGvalue == 1){
        //    oKGbtn.addClass("zanTingG");
        //}else{
        //    oKGbtn.addClass("zanTingK");
        //};
        //DY();
        //function DY(){
        //    oKGbtn.on("click",function(){
        //        var HasK = $(this).hasClass("zanTingK")
        //        if(HasK){
        //            $(this).addClass("zanTingG");
        //            $(this).removeClass("zanTingK");
        //            alert("您将于{2015-12-04}暂停配送");
        //            alert(oKGid);
        //        }else{
        //            $(this).addClass("zanTingK");
        //            $(this).removeClass("zanTingG");
        //            alert("您将于{2015-12-04}开始配送");
        //            alert(oKGid);
        //        }
        //    });
        //}
    });
//选择配送天数
       var aBtn = $(".BiaoQian span");
       aBtn.on("click",function(){
           $(this).addClass("fxActive").siblings().removeClass("fxActive");
       });
//弹出框 居中
    var aAlertBtn = $(".peiBtn .alertBtn");
    var oXuBox = $(".XuBox");
    var oBgShodaw = $(".BgShodaw");
    var aQiaoXiao = $(".XuBtn .QuXiao");
    aAlertBtn.on("click",function(){
        oBgShodaw.show();
        var L = ($(window).width()-oXuBox.width())/2;
        var T = ($(window).height()-oXuBox.height())/2;
        oXuBox.css({left:L,top:T});
    })
    aQiaoXiao.on("click",function(){
        oBgShodaw.hide();
    })

};


//XuanZePinZhong.html  js
function XZPZ(){
//弹出框 居中
    var aBtn = $(".chooseBtn");
    var oXuBox = $(".XuBox");
    var oBgShodaw = $(".BgShodaw");
    var aQiaoXiao = $(".XuBtn .QuXiao");
    var oChuanZhi = $(".chuanZhi");
    aBtn.on("click",function(){
        $("#TxtBox").val(1);
        oBgShodaw.show();
        var btnValue = $(this).attr("value");
        var L = ($(window).width()-oXuBox.width())/2;
        var T = ($(window).height()-oXuBox.height())/2;
        oXuBox.css({left:L,top:T});
        oChuanZhi.attr("value",btnValue)
    })
    aQiaoXiao.on("click",function(){
        oBgShodaw.hide();
    })

};





















function jiShi(){
    $('.countdown').downCount({
        date: '12/30/2020 8:59:00', //设置结束时间
        offset: 8     //区时设置
    }, function () {
        alert('倒计时结束!');//设置回调函数
    });
//倒计时  结束
    var aFotImg = $(".KSfot img");
    aFotImg.on("click",function(){
        var imgnameY = $(this).attr("data-imgY");
        aFotImg.each(function(){
            var imgnameN = $(this).attr("data-imgN");
            $(this).attr("src",'images/'+imgnameN+'.png');
        })
        $(this).attr("src",'images/'+imgnameY+'.png');
    })
};

//ShanPinDetail.html  js
function SPXQ(){
    var aLoveBg = $(".loveBg");
    aLoveBg.on("click",function(){
        $(this).toggleClass("loveBgY")
    });
    var myswiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        pagination : '.swiper-pagination'
    });
};

//SheZhi.html  js
function SZKG(){
    var oKGK = $(".pXiaoXi .KGK");
    oKGK.on("click",function(){
        $(this).toggleClass("fxGuan");
    })
};

//SongNaiDiZhi.html  js
function SNDZ(){
    var aInput = $(".hangR label");
    aInput.on("click",function(){
        $(this).addClass("active").siblings().removeClass("active")
    });

//城市选择  js 开始
    //选择城市 弹出框开始
    $(function(){
        var aBtnCity = $(".cityBtn");
        var ocityShadow = $(".cityShadow");
        var oCityBox = $(".cityBox");
        var aP = $(".cityBox p");
        var oCityShow = $(".cityShow");
        aBtnCity.on("click",function(){
            ocityShadow.show();
            var L = ($(window).width()- oCityBox.width())/2;
            var T = ($(window).height()- oCityBox.height())/2;
            oCityBox.css({"left":L,"top":T})
        });
        aP.on("click",function(){
            var Txt = $(this).text();
            ocityShadow.hide();
            oCityShow.val(Txt);
        })
    });
    //选择区域 弹出框开始
    $(function(){
        var aBtnCity = $(".quBtn");
        var ocityShadow = $(".quShadow");
        var oCityBox = $(".quBox");
        var aP = $(".quBox p");
        var oCityShow = $(".quShow");
        aBtnCity.on("click",function(){
            ocityShadow.show();
            var L = ($(window).width()- oCityBox.width())/2;
            var T = ($(window).height()- oCityBox.height())/2;
            oCityBox.css({"left":L,"top":T})
        });
        aP.on("click",function(){
            var Txt = $(this).text();
            ocityShadow.hide();
            oCityShow.val(Txt);
        })
    })
};

//SongNaiTime.html js
function SNTime(){
    //    <!--时间选择插件开始-->
    $(function(){


        var mydate = new Date();
        var K1 = parseInt(mydate.getFullYear());
        var K2 = parseInt(mydate.getMonth()+1);
        var K3 = parseInt(mydate.getDate()+3);
        var str = K1+'-'+K2+'-'+K3;

        //alert(str);
        //alert(K1);
        //alert(K2);
        //alert(K3);

        $("#scroller").val(str);
        $("#scroller").mobiscroll().date();
        var currYear = (new Date()).getFullYear();
        var opt = {
            preset: 'date',
            theme: 'android-ics',
            display: 'modal',
            mode: 'scroller',
            lang:'zh',
            dateFormat: 'yyyy-mm-dd',
            setText: '确定',
            cancelText: '取消',
            dateOrder: 'yyyymmdd',
            dayText: '日', monthText: '月', yearText: '年',
            showNow: false,
            nowText: "今",
            startYear:currYear,
            endYear:currYear + 100,
            minDate: new Date(new Date().setDate(K3))
            //minDate: new Date(new Date().setDate(K3))
            //minDate: new Date(new Date().setFullYear(currYear - 2))

        };
        $("#scroller").mobiscroll(opt);
    });

    $(function(){
        var aBtnMoShi = $(".btnMoShi");
        var oSNshadow = $(".SNshadow");
        var oChooseBox = $(".chooseBox");
        var aRshow = $(".Rshow");
        var oMoShivalue = $(".MoShivalue");
        aBtnMoShi.on("click",function(){
            oSNshadow.show();
            var L = ($(window).width()- oChooseBox.width())/2;
            var T = ($(window).height()- oChooseBox.height())/2;
            oChooseBox.css({"left":L,"top":T})
        });
        aRshow.on("click",function(){
            $(this).addClass("active");
            var Txt = $(this).parent().text();
            $(this).parent().siblings().find(".Rshow").removeClass("active");
            oSNshadow.hide();
            oMoShivalue.text(Txt);
        })
    })
};

//WoDiZhi.html js
function WDZ(){
    var aRen = $(".Ren");
    aRen.on("click",function(){
        $(this).find(".DZchoose").addClass("fxActive");
        $(this).siblings().find(".DZchoose").removeClass("fxActive");
        var DzVal = $(this).find(".DzValue").attr("value");
        $("#ua_id").val(DzVal);
    });
};


//XiaDingDan.html js
function XDD(){
    var aBtn = $(".BiaoQian span");
    var oTxtBox = $("#TxtBox");
    aBtn.on("click",function(){
        $(this).addClass("fxActive").siblings().removeClass("fxActive");
        var Dayval = $(this).attr("data-day");
        oTxtBox.val(Dayval);
    })
};
