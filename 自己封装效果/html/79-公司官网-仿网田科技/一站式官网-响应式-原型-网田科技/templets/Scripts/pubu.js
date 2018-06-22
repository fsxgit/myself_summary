$(function(){


    $(window).load(function(){
        var startWinWidth = $(window).width();

        if(startWinWidth < 545) {
            conWidth = $(window).width();
            col2 = 2;

        } else if(startWinWidth< 765) {
            conWidth = $(window).width();
            col2 = 4
        } else if(startWinWidth < 985) {
            conWidth = $(window).width();
            col2 = 5;
        } else {
            conWidth = $(window).width();
            col2 = 6;
            $('.grid').width();
        }

        $('#container').BlocksIt({
            numOfCol:col2,
            offsetX: 5,
            offsetY: 5
        });


        var currentWidth =985;
        var col;
        $(window).resize(function() {
            var winWidth = $(window).width();
            var conWidth;
            if(winWidth < 545) {
                conWidth = $(window).width();
                col = 2;

            } else if(winWidth < 765) {
                conWidth = $(window).width();
                col = 4
            } else if(winWidth < 985) {
                conWidth = $(window).width();
                col = 5;
            } else {
                conWidth = $(window).width();
                col = 6;
                $('.grid').width();
            }
            if(conWidth != currentWidth) {
                currentWidth = conWidth;
                $('#container').width(conWidth);
                $('#container').BlocksIt({
                    numOfCol: col,
                    offsetX: 5,
                    offsetY: 5
                });
            }
        });
    });

});
