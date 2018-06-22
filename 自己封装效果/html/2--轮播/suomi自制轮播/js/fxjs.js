/**
 * Created by JinnyZh on 2015/11/19.
 */
function fxtab(){
    var oTabbox = $(".Tabbox");
    var oUl = $(".bannerList");
    var aLi = $(".bannerList li");
    var aDot = $(".indexDot span");
    var aBtnLeft = $(".btnleft");
    var aBtnRight = $(".btnright");
    var iWidth = aLi.width();
    var Len = aLi.length;
    var tolWidth = Len*iWidth;
    var iNow = 0;
    var oTimer = null;
//    点击向左移动按钮
    aBtnLeft.on("click",function(){
        clearTimeout(oTimer);
        leftMove();
    });
//    点击向右移动按钮
    aBtnRight.on("click",function(){
        clearTimeout(oTimer);
        rightMove();
    });
//向左移动方法
    function leftMove(){
        var Left = parseInt(oUl.css("left"));
        var sTopLeft =  tolWidth-iWidth;
        if(Math.abs(Left) >= sTopLeft){
            oUl.css("left",-sTopLeft);
            autoPlay();
        }else{
            Left = Left-iWidth;
            oUl.animate({"left":Left},500);
            iNow++;
            dotChange();
            autoPlay();
            return iNow;
        };
    };
//向右移动方法
    function rightMove(){
        var Left = parseInt(oUl.css("left"));
        if(Left >= 0){
            oUl.css("left",0);
            autoPlay();
        }else{
            Left = Left+iWidth;
            oUl.animate({"left":Left},500);
            iNow--;
            dotChange();
            autoPlay();
            return iNow;
        }
    };
//改变dot的方法
    function dotChange(){
        aDot.each(function(){
            aDot.eq(iNow).addClass("active").siblings().removeClass("active");
        });
    };
//点击dot移动的方法
    function dotMove(){
        aDot.each(function(index){
            $(this).on("click",function(){
                clearTimeout(oTimer);
                var Left = parseInt(oUl.css("left"));
                Left = index*iWidth;
                oUl.animate({"left":-Left},500);
                iNow = index;
                dotChange();
                autoPlay();
            })
        });
    };
//    调用点击dot的方法
    dotMove();

//用定时器设置自动播放

//    自动播放的方法
    function autoPlay(){
        oTimer = setInterval(function(){
            play();
        },2000);
        function play(){
            if(iNow<3){
                iNow++;
                dotChange();
                var Left = parseInt(oUl.css("left"));
                Left = iNow*iWidth;
                oUl.animate({"left":-Left},500);
                return iNow;
            }else{
                iNow = 0;
                dotChange();
                oUl.animate({"left":0},500);
                return iNow;
            };
        };
    };
    autoPlay();
};