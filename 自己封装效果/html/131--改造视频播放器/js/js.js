function indexfun(){
    var ww = $(window).width();
    var wh = $(window).height();
    $("#banner,#content").css({"height":wh});
    setTimeout(function(){
        $("#banner").fadeIn();
    },100);
    setTimeout(function(){
        $("#content").show();
    },200);
    var showState = 1;
    scroll_fun();
    function scroll_fun(){
        //控制整体框架的func
        /**
         * 判断当前显示的是banner页还是内容页
         * showState:
         * 1：显示的是banner页
         * 2:显示的是内容页
         * **/
        function scrollDown(){
            // console.log("滑轮向下滚动");
            if(showState == 1){
                setTimeout(function(){
                    $("html").animate({"scrollTop":wh},"swing");
                    $("header").addClass("bg");
                    $("#nav li:nth-of-type(2)").addClass("active").siblings().removeClass("active");
                },200);
                showState = 2;
            }



            navTab();

        }
        function scrollUp(){
            // console.log("滑轮向上滚动");
            var t = $("#content").scrollTop();
            // console.log(t);
            if(showState == 2 && t == 0){
                $("html").animate({"scrollTop":0},"swing");
                $("header").removeClass("bg");
                showState = 1;
                $("#nav li:nth-of-type(1)").addClass("active").siblings().removeClass("active");
            }



            navTab();
        }


        var scrollFunc = function (e) {
            var direct = 0;
            e = e || window.event;
            if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
                if (e.wheelDelta > 0) { //当滑轮向上滚动时
                    scrollUp();
                }
                if (e.wheelDelta < 0) { //当滑轮向下滚动时
                    scrollDown();
                }
            } else if (e.detail) {  //Firefox滑轮事件
                if (e.detail> 0) { //当滑轮向下滚动时
                    scrollDown();
                }
                if (e.detail< 0) { //当滑轮向上滚动时
                    scrollUp();
                }
            }
        };
        //给页面绑定滑轮滚动事件
        if (document.addEventListener) {
            document.addEventListener('DOMMouseScroll', scrollFunc, false);
        }
        //滚动滑轮触发scrollFunc方法
        window.onmousewheel = document.onmousewheel = scrollFunc;
    }

    lihover();
    function lihover(){
        $(".page1_list li").hover(function(){
            $(this).find(".cover").hide();
            $(this).find(".txt").show();
        },function(){
            $(this).find(".cover").show();
            $(this).find(".txt").hide();
        })
    }
    navli();
    function navli(){
        $("#nav li").click(function(){
            var This = $(this);
            var i = This.index();
            $("header").addClass("bg");
            showState = 2;
            This.addClass("active").siblings().removeClass("active");
        })
    }

    function navTab(){
        var kkkb = $("#toB").offset().top-wh;
        var kkkc = $("#toC").offset().top-wh-200;
        var kkkd = $("#toD").offset().top-wh-200;
        if(kkkb < 0){
            $("#nav li:nth-of-type(2)").addClass("active").siblings().removeClass("active");
        }
        if(kkkc < 0){
            $("#nav li:nth-of-type(3)").addClass("active").siblings().removeClass("active");
        }
        if(kkkd < 0){
            $("#nav li:nth-of-type(4)").addClass("active").siblings().removeClass("active");
        }
    }



    videoControl();
    function videoControl(){
        var videos = document.getElementsByClassName("video");
        var players = document.getElementsByClassName("player");
        var covers = document.getElementsByClassName("covers");
        var len = videos.length;
        var k = [];
        for (var i= 0; i< len; i++){
            k.push(0);

            videos[i].index = i;
            covers[i].index = i;
            players[i].index = i;

            var avideo = videos[i];

            avideo.onclick = function(){
                var j = this.index;
                if(k[j] == 0){
                    this.play();
                    k[j] = 1;
                }else{
                    this.pause();
                    k[j] = 0;
                }
            };
            avideo.onended = function(){
                var j = this.index;
                k[j] = 0;

                players[j].style.display = "block";
                covers[j].style.display = "block";
            };
        }
        $(".player").each(function(e){
            var This = $(this);
            This.click(function(e){
                var pbox = This.parents(".mp4_box");
                pbox.find(".player").hide();
                pbox.find(".covers").hide();
                pbox.find(".video").click();
                e.stopPropagation();
            });
        });

    }
}