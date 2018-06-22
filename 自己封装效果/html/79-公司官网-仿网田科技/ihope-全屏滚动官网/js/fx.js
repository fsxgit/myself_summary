$(function(){
    //banner 图片上下居中
    $(".bannerCont1").css("marginTop",($(window).height()-262)/2);
    $(".bannerCont2").css("marginTop",($(window).height()-262)/2);
    $(".ceNav").css("top",($(window).height()-$(".ceNav").height())/2);
    $(".sec-box").each(function(){
        $(this).css("marginTop",($(window).height()-$(this).height())/2);
    })

    hoverAdd();
    function hoverAdd(){
        //	������������ ��ʼ
        var Timer = null;
        var oWai1  = $(".num1");
        var oWai2  = $(".num2");
        var oWai3  = $(".num3");
        var oWai4  = $(".num4");
        var oNei1  = $(".num1 span");
        var oNei2  = $(".num2 span");
        var oNei3  = $(".num3 span");
        var oNei4  = $(".num4 span");
        addAuto(oWai1,oNei1,10,1);
        addAuto(oWai2,oNei2,400,40);
        addAuto(oWai3,oNei3,700,70);
        addAuto(oWai4,oNei4,190,19);
        function addAuto(obj1,obj2,endnum,addgap){
            obj1.hover(function(){

                clearTimeout(obj1.Timer);
                zouni();
            },function(){

            });
            function zouni(){
                var i = 0;
                obj1.Timer = setInterval(function add(){
                    if(i<endnum){
                        i = i+addgap;
                        obj2.text(i);
                    }else{
                        clearTimeout(Timer);
                    }
                }, 100);

            }
        }

    }


})
