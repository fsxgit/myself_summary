
var setW = 1000; //�趨��ת��Ϊ�ֻ��ķֱ��ʣ���Ļwidth>1000��ʾ������ʽ����Ļwidth<1000���ֻ���ʽ���
var isScroll = 0; //�Ƿ������
var winW = $(window).width();
var winH = $(window).height();
var device = 0; //�豸 0 ��ʾ���� 1��ʾ�ֻ�
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
            //֤���ֻ�û����
            setTimeout(function(){
                $("#header").removeClass("bg1");
            },400)
        }
    }
    $("#nav").slideToggle("400");
    e.stopPropagation();
});

if(device == 1){
    //�ֻ��˲˵�
    $("#nav li").click(function(e){
        $("#nav").slideUp("400");
        if(isScroll == 0){
            //֤���ֻ�û����
            $("#header").removeClass("bg1");
        }
        e.stopPropagation();
    });
    $("body").click(function(){
        $("#nav").slideUp("400");
        if(isScroll == 0){
            //֤���ֻ�û����
            setTimeout(function(){
                $("#header").removeClass("bg1");
            },400)
        }
        e.stopPropagation();
    });
}

//����ҳ�����嵼���ƶ��Ŀ��

var headerh = $("#header").height();
var ams = 1;
//�����ߵ���;    �����������
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
//    �仯������active״̬
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
    //ams ����Ϊ0 ʱ��֤���ǵ�������Ĺ�������ʱ����������������ж�
    if(ams == 1){
        fun();
    }
    //����PC��ģ�����ʾ���ض�Ч�Լ�PC�������ֲ�ʱ����ģ����Ҫ��ʾ���ص�Ԫ�ص���ʾ���ء������ƶ��˺�PC��header��page1��#page-nav�ı���
    divShow();
});
function fun(){
    //    section����ռ��Ļһ���Ҫת��active
    //    section����������Ļ����-80ʱ�ж�Ҫ��Ҫ����ɫ
    var hasgo = $(window).scrollTop(); //�������ߵľ���
    var winH = $(window).height(); //��Ļ�ĸ߶�
    var bodyH = $("body").height(); //�ĵ����ܸ߶�
    var offH = 100; //ƫ����

    /*
     * �� hasgo + winH == bodyH ;֤���������˵ײ�
     * ��������һ���Ƚϼ��ˣ����Ը�һ��ƫ����offH��Ҳ���ǵ�����������������ײ�offH��ôԶ��ʱ������˶����˵ײ�����Ҫ�����һ������active��
     * �� hasgo == 0 ;֤���������������˶���
     * ��  hasgoa >= t1 && hasgoa <= t1+t2 ;֤������������������һ�������
     * ��t1��Ŀ��Ԫ�ض��������ĵ������ľ��룬t2��Ŀ��Ԫ�صĸ߶ȣ� t1+t2Ŀ��Ԫ�صĵײ������ĵ������ľ��롿
     * */
    if(hasgo <= 0+offH){
        //֤���������˶���
        var id = $("#nav li:nth-of-type(1)").data("id");
        isScroll = 0;
        tabActive(id);

    }else if(hasgo + winH >= bodyH-offH){
        isScroll = 1;
        //֤���������������˵ײ�
        var id = $("#nav li:nth-last-of-type(1)").data("id");
        tabActive(id);
    }else{
        isScroll = 1;
        var hasgoa = hasgo+winH/2; //+1/2winH��Ϊ�˵�Ԫ���ڵ�����Ļ����ʱ�����Ƶ���һģ���Ӧ����ʹ��
        $("section").each(function(){
            var This = $(this);
            var t1 = This.offset().top; //Ԫ�ؾ��붥���ľ���
            var t2 = This.height(); //Ԫ�صĸ߶�
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

//��ģ��̶��߶ȣ��Ա�����������ģ�飨����Ϊ�˶�Ч������ʱ��div���϶ѵ���
function divShow(){
    //��Ԫ�س�������Ļ�����ʱ��
    var hasgo = $(window).scrollTop(); //�������ߵľ���
    var offH = 100; //ƫ����
    var hasgoa = parseInt(hasgo + winH);
    if(hasgo >= winH){
        //֤����������ʱ���ڵ�һ��
        $("#header").addClass("bg1");
    }else{
        //֤���������������˵�һ��
        if(hasgo >= 50){
            //������
            $("#header").addClass("bg1");
        }else{
            $("#header").removeClass("bg1");
        }
    }

    if(device == 0){
        //������������
        $(".needFadeInUp").each(function(i){
            var This = $(this);
            var t1 = This.offset().top; //Ԫ�ؾ��붥���ľ���
            if(hasgoa >= parseInt(t1+offH) && hasgoa <= parseInt(t1+winH)){
                // console.log("index="+i);
                This.css("opacity","1");
                This.addClass("fadeInUp");
            }
        })
    }
}

//PC�˽�ҳ��ʱ��Ҫ�����ء�׼���ƶ�����Ч���֡���Ԫ��
function hideDiv(){
    $(".needFadeInUp").css("opacity","0");
}
window.onbeforeunload = function(){
    //ˢ�º�ҳ���Զ��ص�����
    document.documentElement.scrollTop = 0;  //ie��
    document.body.scrollTop = 0;  //��ie
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
        // ��ʼ��������Ϊ�˽�����ʱ�򿴵���������λ��
//            fun();
//            divShow();
    }else{
        //�ƶ�
        $(".load").hide();
    }

}
window.onload=loading;



// ������ҳ����������
/**
 * ��ȡhref�Ĳ���ֵ
 * name����Ҫ��ȡ�Ĳ���������
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
