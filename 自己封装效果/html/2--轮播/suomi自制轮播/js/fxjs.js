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
//    ��������ƶ���ť
    aBtnLeft.on("click",function(){
        clearTimeout(oTimer);
        leftMove();
    });
//    ��������ƶ���ť
    aBtnRight.on("click",function(){
        clearTimeout(oTimer);
        rightMove();
    });
//�����ƶ�����
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
//�����ƶ�����
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
//�ı�dot�ķ���
    function dotChange(){
        aDot.each(function(){
            aDot.eq(iNow).addClass("active").siblings().removeClass("active");
        });
    };
//���dot�ƶ��ķ���
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
//    ���õ��dot�ķ���
    dotMove();

//�ö�ʱ�������Զ�����

//    �Զ����ŵķ���
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