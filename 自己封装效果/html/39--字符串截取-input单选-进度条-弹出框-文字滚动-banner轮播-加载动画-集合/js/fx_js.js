
//banner  轮播
function bannerLunBo(){
    var myswiper = new Swiper('.swiper-container1', {
        autoplay:3000,
        slidesPerView: 1,
        loop:true,
        pagination : '.swiper-pagination',
        autoplayDisableOnInteraction : false
    });
}

//文字滚动
function Txtgundong(){
    var myswiper = new Swiper('.swiper-container2', {
        autoplay:3000,
        slidesPerView: 1,
        direction : 'vertical',
        loop:true,
        pagination : '.swiper-pagination',
        autoplayDisableOnInteraction : false
    });
}

//弹出框 显示 隐藏
function hideShow(){
    $(".lingnum").on("click",function(){
        $(".chengzhang").toggle();
        event.stopPropagation();
    })
    $("body").on("click",function(){
        $(".chengzhang").hide();
    })
}

//字符串截取
//截取字符串，多余的部分用...代替
function stringDeal(){
    var aSpanWei = $(".spanwei");
    aSpanWei.each(function(){
        var fx = $(this).text();
        var txt = setString(fx, 15);
        $(this).text(txt);
    })
    function setString(str, len) {
        var strlen = 0;
        var s = "";
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 128) {
                strlen += 2;
            } else {
                strlen++;
            }
            s += str.charAt(i);
            if (strlen >= len) {
                return s+"...";
            }
        }
        return s;
    }
}
//签到弹出框
function alertQD(){
    var oQD = $(".QDleft_qd");
    var oshodaw = $(".fx_shodaw");
    var ofx_con = $(".fx_con");
    var MT = ($(window).height()-ofx_con.height())/2;
    oQD.on("click",function(event){
        ofx_con.css({top:MT});
        oshodaw.show();
        setTimeout(function(){oshodaw.hide();},5000);
        event.stopPropagation();
    })
    $("body").on("click",function(){
        oshodaw.hide();
    })
//刷新一下进度条
//    jinduQD();
}

//升级弹出框
function alertSJ(){
    var oshodaw = $(".sj_shodaw");
    var ofx_con = $(".sj_con");
    var MT = ($(window).height()-ofx_con.height())/2;
    ofx_con.css({top:MT});
    //oQD.on("click",function(event){
    //    ofx_con.css({top:MT});
    //    oshodaw.show();
    //    setTimeout(function(){oshodaw.hide();},5000);
    //    event.stopPropagation();
    //})
    $("body").on("click",function(){
        oshodaw.hide();
    })
//刷新一下进度条
    jinduQD();
}


//加载动画

function fxloading(){
    $(".loadcenterNow").show();
    $(".loadcenter").hide();
    var oLoad = $(".loadbtn");
    var oLoadcenter = $(".loadcenter");
    var timer = null;
    oLoad.on("click",function(){
        $(".loadcenterNow").hide();
        $(".loadcenter").show();
        loading();
        function loading(){
            function a1(){
                oLoadcenter.text("正在加载.")
            }
            a1();
            setTimeout(function(){
                oLoadcenter.text("正在加载..")
            },500);

            setTimeout(function(){
                oLoadcenter.text("正在加载...")
            },1000)
        }
        timer = setInterval(function(){
            loading();
        },1500);
    });

    $(".gengxin").on("click",function(){
        $(".loadcenterNow").show();
        $(".loadcenter").hide();
    })
}


//    控制弹出框进度条的的效果
function jinduQD(){
    var ojinSpan = $(".jinSpan");
    var oJYnow = parseInt($(".JYnow").text());
    var oJYtol = parseInt($(".JYtol").text());
    var spanW = (oJYnow/oJYtol)*100;
    //alert(spanW);
    ojinSpan.css("width",spanW+"%");
}

//升级 弹出框 单选按钮
function danxuan(){
    var aLabel = $(".chooseNameLabel");
    aLabel.on("click",function(){
        $(this).find(".chooseName").addClass("fx_active");
        $(this).siblings().find(".chooseName").removeClass("fx_active");
        event.stopPropagation();
    })
}