
var setW = 1000; //设定的转换为手机的分辨率，屏幕width>1000显示电脑样式，屏幕width<1000以手机形式输出
var isScroll = 0; //是否滚动了
var winW = $(window).width();
var winH = $(window).height();
var device = 0; //设备 0 表示电脑 1表示手机
if(winW >= setW){
    device = 0;
}else{
    device = 1;
}
$(".page1").css("height",winH);
$(".meau").click(function(e){
    if($("#nav").is(":hidden")){
        console.log("b");
        $("#header").addClass("bg1");
    }else{
        console.log("a");
        if(isScroll == 0){
            console.log("c");
            //证明手机没滚动
            setTimeout(function(){
                $("#header").removeClass("bg1");
            },400)
        }
    }
    $("#nav").slideToggle("400");
    e.stopPropagation();
});

if(device == 1){
    //手机端菜单
    $("#nav li").click(function(e){
        $("#nav").slideUp("400");
        if(isScroll == 0){
            //证明手机没滚动
            $("#header").removeClass("bg1");
        }
        e.stopPropagation();
    });
    $("body").click(function(){
        $("#nav").slideUp("400");
        if(isScroll == 0){
            //证明手机没滚动
            setTimeout(function(){
                $("#header").removeClass("bg1");
            },400)
        }
        e.stopPropagation();
    });
}

//控制页面整体导航移动的框架

var headerh = $("#header").height();
var ams = 1;
//点击侧边导航;    点击顶部导航
$("#nav li,#page-nav li").click(function(){
    ams = 0;
    $("#nav li").removeClass("active");
    $(this).addClass("active");
    var id = $(this).data("id");
    var obj = $("."+id);
    var t = obj.offset().top;
    try {
        $("html").animate({"scrollTop":(t-headerh)},function(){
            ams = 1;
        });
    }
    catch(err) {

    }
    try {
        $("body").animate({"scrollTop":(t-headerh)},function(){
            ams = 1;
        });
    }
    catch(err) {

    }
    tabActive(id);

});
//    变化导航的active状态
function tabActive(ids){
    var ids = ids;
    $("#nav li").each(function(){
        var This = $(this);
        var id2 = This.data("id");
        if(ids == id2){
            This.addClass("active").siblings().removeClass("active");
        }
    });
}
$(window).scroll(function(){
    //ams ：当为0 时，证明是点击触发的滚动，此时不用再走这个滚动判断
    if(ams == 1){
        fun();
    }
    //控制PC端模块的显示隐藏动效以及PC端首屏轮播时各个模块所要显示隐藏的元素的显示隐藏、控制移动端和PC的header、page1、#page-nav的背景
    divShow();
});
function fun(){
    //    section出来占屏幕一半就要转变active
    //    section出来到达屏幕顶部-80时判断要不要背景色
    var hasgo = $(window).scrollTop(); //滚动条走的距离
    var winH = $(window).height(); //屏幕的高度
    var bodyH = $("body").height(); //文档的总高度
    var offH = 100; //偏移量

    /*
     * 当 hasgo + winH == bodyH ;证明滚动到了底部
     * 【但是这一步比较极端，所以给一个偏移量offH；也就是当滚动条滚动到距离底部offH这么远的时候就算运动到了底部，就要给最后一个导航active】
     * 当 hasgo == 0 ;证明滚动条滚动到了顶部
     * 当  hasgoa >= t1 && hasgoa <= t1+t2 ;证明滚动条滚动到了这一块的区域
     * 【t1是目标元素顶部距离文档顶部的距离，t2是目标元素的高度； t1+t2目标元素的底部距离文档顶部的距离】
     * */
    if(hasgo <= 0+offH){
        //证明滚动到了顶部
        var id = $("#nav li:nth-of-type(1)").data("id");
        isScroll = 0;
        tabActive(id);

    }else if(hasgo + winH >= bodyH-offH){
        isScroll = 1;
        //证明滚动条滚动到了底部
        var id = $("#nav li:nth-last-of-type(1)").data("id");
        tabActive(id);
    }else{
        isScroll = 1;
        var hasgoa = hasgo+winH/2; //+1/2winH是为了当元素在到达屏幕中心时，就移到这一模块对应导航使用
        $("section").each(function(){
            var This = $(this);
            var t1 = This.offset().top; //元素距离顶部的距离
            var t2 = This.height(); //元素的高度
            if(hasgoa >= t1 && hasgoa <= t1+t2){
                var id1 = This.data("id");
                $("#nav li").each(function(){
                    var That = $(this);
                    var id2 = That.data("id");
                    if(id2 == id1){
                        tabActive(id1);
                    }
                })
            }
        })
    }

}

//给模块固定高度，以便于下面隐藏模块（隐藏为了动效出来）时，div向上堆叠，
function divShow(){
    //当元素出现在屏幕里面的时候
    var hasgo = $(window).scrollTop(); //滚动条走的距离
    var offH = 100; //偏移量
    var hasgoa = parseInt(hasgo + winH);
    if(hasgo >= winH){
        //证明滚动条此时不在第一屏
        $("#header").addClass("bg1");
    }else{
        //证明滚动条滚动到了第一屏
        if(hasgo >= 50){
            //滚动了
            $("#header").addClass("bg1");
        }else{
            $("#header").removeClass("bg1");
        }
    }

    if(device == 0){
        //电脑上面运行
        $(".needFadeInUp").each(function(i){
            var This = $(this);
            var t1 = This.offset().top; //元素距离顶部的距离
            if(hasgoa >= parseInt(t1+offH) && hasgoa <= parseInt(t1+winH)){
                // console.log("index="+i);
                This.css("opacity","1");
                This.addClass("fadeInUp");
            }
        })
    }
}

//PC端进页面时，要先隐藏“准备移动到动效出现”的元素
function hideDiv(){
    $(".needFadeInUp").css("opacity","0");
}
window.onbeforeunload = function(){
    //刷新后页面自动回到顶部
    document.documentElement.scrollTop = 0;  //ie下
    document.body.scrollTop = 0;  //非ie
};
function loading(){
    if(device == 0){
        //PC
        $("section").each(function(){
            var h = $(this).height();
            $(this).css("height",h);
        });
        hideDiv();
        $(".load").hide();
        // 初始化调用是为了进来的时候看到滚动条的位置
//            fun();
//            divShow();
    }else{
        //移动
        $(".load").hide();
    }

}
window.onload=loading;



// 由其它页面点击过来的
/**
 * 获取href的参数值
 * name：所要获取的参数的名字
 * **/

function GetHrefVal(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

var page = GetHrefVal("page");
if(page){
    $("#nav li").each(function(){
        var This = $(this);
        var id2 = This.data("id");
        if(page == id2){
            This.click();
        }
    });
}
