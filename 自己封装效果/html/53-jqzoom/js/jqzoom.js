(function ($){
    $.fn.jqzoom = function(options){
        var settings = {
            xzoom : 300,
            yzoom : 300,
            offset : 15,
            position: 'right'
        };

        //继承
        $.extend(settings,options);

        //事件绑定
        $(this).hover(fnMouseover,fnMouseout);

        //事件处理
        function fnMouseover(){
            var bigImgPath = $(this).parent().attr('sref'); //获取大图片路径
            var imgWidth = $(this).width(); //获取小图片宽度
            var imgHeight = $(this).height(); //获取小图片高度
            var imgOffsetLeft = $(this).offset().left; //获取小图片左边偏移量
            var imgOffsetTop = $(this).offset().top; //获取小图片上边偏移量
            var L = 0;
            var scrollY = 0;
            var scrollX = 0;

            //创建大图片的节点元素并显示出来
            //防止重复添加
            if($(".big-img-span").length === 0)
            {
                $(this).after('<span class="big-img-span"><img class="bigImg" src="'+ bigImgPath +'"/></span>');
            };

            if(settings.position === 'right')
            {
                L = imgOffsetLeft + imgWidth + settings.offset;
            }else{
                L = imgOffsetLeft - settings.xzoom - settings.offset;
            };

            $(this).next('.big-img-span').css({left: L,top: imgOffsetTop});

            //设置大图片层尺寸
            $('.big-img-span').css({ width : settings.xzoom, height : settings.yzoom });
            //显示大图片层
            $(".big-img-span").show();

            $(document.body).mousemove(function(e){

                //获取大图片尺寸
                var bigWidth = $('.bigImg').width();
                var bigHeight = $('.bigImg').height();

                //声明临时变量，存储为字符串类型，一旦数据类型转变为int型，则不进行再次运算
                var scaleY = 'y';
                var scaleX = 'x';
                if (isNaN(scaleX) | isNaN(scaleY)) {
                    //这里的计算结果可以理解为一个系数；及大图的尺寸是小图的几倍
                    scaleX = Math.round(bigWidth / imgWidth);
                    scaleY = Math.round(bigHeight / imgHeight);
                };

                //e.pageX - imgOffsetTop 计算出鼠标指针在图片上位置
                //($("span.big-img-span").width()  / scaleX) / 2 换算大图对应小图该显示的位置，这里除以2是为了让鼠标对应的大图位置居中显示

                scrollY = e.pageY - imgOffsetTop - ($("span.big-img-span").height() / scaleY) / 2;
                scrollX = e.pageX - imgOffsetLeft - ($("span.big-img-span").width()  / scaleX) / 2;

                $("span.big-img-span").scrollTop(scrollY * scaleY);
                $("span.big-img-span").scrollLeft(scrollX * scaleX);
            });
        };

        function fnMouseout(){
            $(".big-img-span").hide();
            $(document.body).off("mousemove");
            $(".big-img-span").remove();
        };
    };
})(jQuery);