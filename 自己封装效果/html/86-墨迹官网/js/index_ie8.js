$(window).load(function() {
    var screenHeight = $(window).height();
    var screenWidth = $(window).width();
    var topMenuWidth = $(".top_menu").width();
    var topMenuHeight = $(".top_menu").height();
    var scrollTop = $(window).scrollTop();
    $(".top_weather").css("right", topMenuWidth + 15);
    $(window).resize(function() {
        infoAnimate();
    });
    $(window).resize(function() {
        if (scrollTop == 0) {
            var topMenuWidth = $(".top_menu").width();
            $(".top_weather").css("right", topMenuWidth + 15);
        }
    });
    $(window).scroll(function() {
        var scrollTop = $(document).scrollTop();
        if (scrollTop >= topMenuHeight) {
            $(".top_weather").animate({
                right: 15
            }, 0);
            $(".top_weather_hid").css({
                right: 0,
                left: "auto"
            });
        } else {
            $(".top_weather").animate({
                right: topMenuWidth + 15
            }, 0);
            $(".top_weather_hid").css({
                right: "auto",
                left: 0
            });
        }
    })
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
});


function scrollAnimate(val) {
    var moveSpeed = 1000;
    $("html, body").animate({
        scrollTop: val
    }, moveSpeed);
}