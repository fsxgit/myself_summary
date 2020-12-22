$(function () {
  var imgOuter = $('.wrap');
  var imgDiv = $('.pic');
  var timeId = null;
  var edgeDistance = 80;
  var imgNow = 0;
  var imgMouse = 0;
  var imgOuterWidth = imgOuter.width();

  function autoSlide() {
    if (imgNow == imgDiv.size() - 1) {
      imgNow = 0;
    } else {
      imgNow++;
    }
    if (imgNow == 0) {
      // imgDiv.eq(imgNow).children().hide().siblings().children().show();

      console.log("123");
      imgDiv.eq(imgNow).addClass("active").siblings().removeClass("active");

      //imgDiv.eq(imgNow).siblings().children().show();
      for (var i = imgDiv.size() - 1; i > 0; i--) {
        imgDiv.eq(i).animate({'left': imgOuterWidth - (imgDiv.size() - i) * edgeDistance + 'px'}, 700);
      }
    } else {
      //imgDiv.eq(imgNow).children().hide().siblings().children().show();

      console.log("456");
      imgDiv.eq(imgNow).addClass("active").siblings().removeClass("active");

      // imgDiv.eq(imgNow).siblings().children().show();
      imgDiv.eq(imgNow).animate({'left': edgeDistance * imgNow + 'px'}, 700);
    }
  }

  function mouseSlide() {
    if (imgMouse > imgNow) {
      for (var i = imgNow + 1; i <= imgMouse; i++) {
        // imgDiv.eq(imgMouse).children().hide();
        // imgDiv.eq(imgMouse).siblings().children().show();


        console.log("789");
        imgDiv.eq(imgMouse).addClass("active").siblings().removeClass("active");


        imgDiv.eq(i).stop().animate({'left': edgeDistance * i + 'px'}, 700);
      }
      imgNow = imgMouse;
    } else {
      for (var i = imgNow; i > imgMouse; i--) {
        // imgDiv.eq(imgMouse).children().hide();
        // imgDiv.eq(imgMouse).siblings().children().show();


        console.log("101112");
        imgDiv.eq(imgMouse).addClass("active").siblings().removeClass("active");

        imgDiv.eq(i).stop().animate({'left': imgOuterWidth - (imgDiv.size() - i) * edgeDistance + 'px'}, 700);
      }
      imgNow = imgMouse;
    }
  }

  timeId = setInterval(autoSlide, 30000);
  imgDiv.hover(function () {
    clearInterval(timeId);
    imgMouse = $(this).index();
    if (imgMouse != imgNow) {
      mouseSlide();
    }
  }, function () {
    timeId = setInterval(autoSlide, 30000);
  }).bind('click', function () {
    imgNow = $(this).index();
  });
});