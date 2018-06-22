$(window).load(function() {
    var screenHeight = $(window).height();
    var screenWidth = $(window).width();
    var info_text = $(".info_text").width();
    var info_img_1 = $(".info_img_1").width();
    var topMenuWidth = $(".top_menu").width();
    var scrollTop = $(window).scrollTop();
    $(".info_text").css("right", screenWidth);
    $(".info_img_1").css("right", screenWidth);
    $(".info_img_2").css("right", screenWidth);
    $(".info_img_3").css("right", screenWidth);
    $(".top_weather").css("right", topMenuWidth + 15);
    $(window).resize(function() {
        infoAnimate();
    });
    $(window).resize(function() {
        // var screenHeight = $(window).height();
        if (scrollTop == 0) {
            var topMenuWidth = $(".top_menu").width();
            $(".top_weather").css("right", topMenuWidth + 15);
        }
        // $(".index_bg video").attr("style", "height:" + screenHeight + "px");
    });
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'forthPage'],
        scrollBar: true,
        afterLoad: function(anchorLink, index) {
            if (index == 2) {
                $("#phone_wea").delay(0).fadeIn(200);
                $("#phone_forecast").delay(100).fadeIn(400);
            } else if (index == 3) {
                infoAnimate();
            }
        },
        onLeave: function(index, nextIndex, direction) {
            if (index == 1) {
                $(".top_weather").animate({
                    right: 15
                }, 0);
                $(".top_weather_hid").css({
                    right: 0
                }, {
                    left: "auto"
                });
            }
            if (nextIndex == 1) {
                $(".top_weather").animate({
                    right: topMenuWidth + 15
                }, 0);
                $(".top_weather_hid").css({
                    right: "auto"
                }, {
                    left: 0
                });
                $(".index_bg").empty();
                initVideo().play();
                $(".info_text").css("right", screenWidth);
                $(".info_img_1").css("right", screenWidth);
                $(".info_img_2").css("right", screenWidth);
                $(".info_img_3").css("right", screenWidth);
            }
            if (index == 2) {
                $("#phone_wea").hide();
                $("#phone_forecast").hide();
                if (nextIndex == 3) {
                    infoAnimate();
                }
            } else if (index == 3) {
                $(".info_text").css("right", screenWidth);
                $(".info_img_1").css("right", screenWidth);
                $(".info_img_2").css("right", screenWidth);
                $(".info_img_3").css("right", screenWidth);
            } else if (index == 4) {
                infoAnimate();
            }
            $(".toTop").on('click', function() {
                $.fn.fullpage.moveTo('firstPage', 1);
            })
        }
    });
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop <= screenHeight && scrollTop != 0) {
            $("#weather").addClass("weather_bg");
        } else {
            $("#weather").removeClass("weather_bg");
        }
    })

    initVideo();
    $(".index_next").on('click', function() {
        scrollAnimate(screenHeight)
    })
    $(".weather_next").on('click', function() {
        scrollAnimate(screenHeight * 2)
    })
    $(".info_next").on('click', function() {
        scrollAnimate(screenHeight * 3)
    })
    $(".toTop").on('click', function() {
        scrollAnimate(0)
    })
    $(".top_weather").mouseover(function() {
        $(".top_weather_hid").addClass("top_weather_hid_animation");
        $(".top_weather_hid").removeClass("top_weather_hid_animation_leave");
        // $(".top_weather_hid_animation").css("animationName", "move");
    });
    //头部预报leave动画
    $(".top_weather").mouseleave(function() {
        $(".top_weather_hid").addClass("top_weather_hid_animation_leave");
        $(".top_weather_hid").removeClass("top_weather_hid_animation");
        // $(".top_weather_hid_animation").css("animationName", "leaveMove");
    });
    $(".index_banner_btn li").on('click', function() {
        var index = $(this).index();
        console.log(index);
        $(this).addClass("index_banner_cur").siblings().removeClass("index_banner_cur");
        $(".index_banner_content > div").eq(index).show().siblings().hide();
    })

    // 首页banner 配合css3 加载时间 视频16s 其他4s
    // var time = 16000;

    // function setIndexInterval() {
    //     clearInterval(setIndexBanner);
    //     var curIndex = $(".index_banner_cur").index();
    //     var btnLength = $(".index_banner_btn li").length;
    //     if (curIndex != 1) {
    //         time = 4000;
    //     } else {
    //         time = 16000;
    //     }
    //     if (curIndex == btnLength - 1) { // 如果是最后一个 下一个执行第一个 否则正常执行下一个
    //         $(".index_banner_btn li").eq(0).addClass("index_banner_cur").siblings().removeClass("index_banner_cur");
    //         $(".index_banner_content > div").eq(0).show().siblings().hide();
    //     } else {
    //         $(".index_banner_btn li").eq(curIndex + 1).addClass("index_banner_cur").siblings().removeClass("index_banner_cur");
    //         $(".index_banner_content > div").eq(curIndex + 1).show().siblings().hide();
    //     }
    //     setIndexBanner = setInterval(setIndexInterval, time);
    // }

    // var setIndexBanner = setInterval(setIndexInterval, time);
    $(".top_icon_home").css("opacity", '1');
});

function infoAnimate() { // 首页墨迹资讯动画
    var screenWidth = $(window).width();
    var info_text = $(".info_text").width();
    var info_img_1 = $(".info_img_1").width();
    $(".info_text").css("right", screenWidth / 2 - info_text / 2);
    $(".info_img_1").css("right", screenWidth / 2 + info_img_1 / 2 + 100);
    $(".info_img_2").css("right", screenWidth / 2 - info_img_1 / 2);
    $(".info_img_3").css("right", screenWidth / 2 - info_img_1 * 1.5 - 100);
}

function initVideo() {
    var screenWidth = window.screen.width;
    var screenHeight = $(window).height();
    var video = document.createElement("VIDEO");
    var source_agg = document.createElement("source");
    var source_webm = document.createElement("source");
    var source_mp4 = document.createElement("source");
    source_agg.setAttribute("src", "http://cdn.moji.com/websrc/video/video314.ogg");
    source_agg.setAttribute("type", "video/ogg");
    source_webm.setAttribute("src", "http://cdn.moji.com/websrc/video/video314.webm");
    source_webm.setAttribute("type", "video/webm");
    source_mp4.setAttribute("src", "http://cdn.moji.com/websrc/video/video314.mp4");
    source_mp4.setAttribute("type", "video/mp4");
    video.setAttribute("width", screenWidth + 120);
    video.setAttribute("height", "auto");
    video.setAttribute("style", "position: absolute;left:50%;margin-left:" + -(screenWidth / 2 + 60) + "px;");
    video.setAttribute("loop", "loop");
    video.setAttribute("autoplay", "autoplay");
    // video.setAttribute("src", "/templets/mojichina/img/video/video.mp4");
    video.appendChild(source_mp4, source_agg, source_webm);
    $(".index_bg").empty().append(video);
    return video;
}

function scrollAnimate(val) {
    var moveSpeed = 1000;
    $("html, body").animate({
        scrollTop: val
    }, moveSpeed);
}