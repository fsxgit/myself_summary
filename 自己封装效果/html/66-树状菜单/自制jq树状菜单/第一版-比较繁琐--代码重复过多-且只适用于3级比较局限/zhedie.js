$(function(){
    $(".meau_mode span").data("state",1);
//    ����˵�����򿪹رղ˵�
    $(".meau_mode span").click(function(){
        if($(this).data("state") == 1){
            $(this).siblings("ul").show();
            $(this).data("state",2);
        }else{
            $(this).siblings("ul").hide();
            $(this).data("state",1);
        }

    });

//����˵������Աߵ��ܵ�ѡ���ѡ�д˱�����������еĲ˵�
//    state : 1 δѡ�У�2 ѡ��
    $(".ul1_ck,.ul2_ck,.ul3_ck").click(function(){
        if($(this).data("state") == 1){
            $(this).siblings("ul").find("input[type='checkbox']").prop("checked",true);
            $(this).prop("checked",true);
            $(this).siblings("ul").find("input[type='checkbox']").data("state",2);
            $(this).data("state",2);
        }else{
            $(this).siblings("ul").find("input[type='checkbox']").prop("checked",false);
            $(this).prop("checked",false);
            $(this).siblings("ul").find("input[type='checkbox']").data("state",1);
            $(this).data("state",1);
        }
    });
    $(".ul4_ck").click(function(){
        if($(this).data("state") == 1){
            $(this).prop("checked",true);
            $(this).data("state",2);
        }else{
            $(this).prop("checked",false);
            $(this).data("state",1);
        }
    });
//    ����ÿ���˵������ѡ��������һ��û��ѡ�У���˲˵���ѡ��


    $(".fp_left_meau").on("change",".ul4_ck",function(){
        var items = $(this).parents(".ul3").find(".ul4_ck");
        var ii = 2;
        items.each(function(){
            if($(this).data("state") == 1){
                ii = 1;
            }
        });
        if(ii == 1){
            $(this).parents(".ul3").siblings(".ul3_ck").prop("checked",false);
            $(this).parents(".ul3").siblings(".ul3_ck").data("state",1);
        }else{
            $(this).parents(".ul3").siblings(".ul3_ck").prop("checked",true);
            $(this).parents(".ul3").siblings(".ul3_ck").data("state",2);
        }

//        ������
        var items3 = $(this).parents(".ul2").find(".ul3_ck");
        var ii3 = 2;
        items3.each(function(){
            if($(this).data("state") == 1){
                ii3 = 1;
            }
        });
        if(ii3 == 1){
            $(this).parents(".ul2").siblings(".ul2_ck").prop("checked",false);
            $(this).parents(".ul2").siblings(".ul2_ck").data("state",1);
        }else{
            $(this).parents(".ul2").siblings(".ul2_ck").prop("checked",true);
            $(this).parents(".ul2").siblings(".ul2_ck").data("state",2);
        }
//        �ڶ���
        var items2 = $(this).parents(".ul1").find(".ul2_ck");
        var ii2 = 2;
        items2.each(function(){
            if($(this).data("state") == 1){
                ii2 = 1;
            }
        });
        if(ii2 == 1){
            $(this).parents(".ul1").siblings(".ul1_ck").prop("checked",false);
            $(this).parents(".ul1").siblings(".ul1_ck").data("state",1);
        }else{
            $(this).parents(".ul1").siblings(".ul1_ck").prop("checked",true);
            $(this).parents(".ul1").siblings(".ul1_ck").data("state",2);
        }

    });
    $(".fp_left_meau").on("change",".ul3_ck",function(){
        var items = $(this).parents(".ul2").find(".ul3_ck");
        var ii = 2;
        items.each(function(){
            if($(this).data("state") == 1){
                ii = 1;
            }
        });
        if(ii == 1){
            $(this).parents(".ul2").siblings(".ul2_ck").prop("checked",false);
            $(this).parents(".ul2").siblings(".ul2_ck").data("state",1);
        }else{
            $(this).parents(".ul2").siblings(".ul2_ck").prop("checked",true);
            $(this).parents(".ul2").siblings(".ul2_ck").data("state",2);
        }
        //        �ڶ���
        var items2 = $(this).parents(".ul1").find(".ul2_ck");
        var ii2 = 2;
        items2.each(function(){
            if($(this).data("state") == 1){
                ii2 = 1;
            }
        });
        if(ii2 == 1){
            $(this).parents(".ul1").siblings(".ul1_ck").prop("checked",false);
            $(this).parents(".ul1").siblings(".ul1_ck").data("state",1);
        }else{
            $(this).parents(".ul1").siblings(".ul1_ck").prop("checked",true);
            $(this).parents(".ul1").siblings(".ul1_ck").data("state",2);
        }
    });
    $(".fp_left_meau").on("change",".ul2_ck",function(){
        var items = $(this).parents(".ul1").find(".ul2_ck");
        var ii = 2;
        items.each(function(){
            if($(this).data("state") == 1){
                ii = 1;
            }
        });
        if(ii == 1){
            $(this).parents(".ul1").siblings(".ul1_ck").prop("checked",false);
            $(this).parents(".ul1").siblings(".ul1_ck").data("state",1);
        }else{
            $(this).parents(".ul1").siblings(".ul1_ck").prop("checked",true);
            $(this).parents(".ul1").siblings(".ul1_ck").data("state",2);
        }
    });
})