$(function() {
    $(".meau_mode span").data("state", 1);
//    ����˵������۵��˵�
    $(".meau_mode span").click(function () {
        if ($(this).data("state") == 1) {
            var hasUl = $(this).siblings("ul");
            if(hasUl.length != 0){
                hasUl.show();
                $(this).data("state", 2);
            }else{
//                    location.href="https://www.baidu.com";
            }
        } else {
            $(this).siblings("ul").hide();
            $(this).data("state", 1);
        }

    });

//����˵������Աߵ��ܵ�ѡ���ѡ�д˱�����������еĲ˵�
    //state�� 1 δѡ�У�2 ѡ��
    $("input[type='checkbox']").click(function(){
        var state = $(this).data("state");
        var fus = $(this).parents("ul");
        var zis = $(this).siblings("ul").find("input[type='checkbox']");
        if( state == 1){
            //��ǰ�����ѡ���δ��ѡ��

            //�޸Ĵ�ѡ����״̬  ��Ϊ ѡ��״̬
            $(this).prop("checked",true);
            $(this).data("state",2);

            //�޸������¼�ѡ����״̬  ��Ϊ ѡ��״̬
            zis.prop("checked",true);
            zis.data("state",2);

            //�޸ĸ���ѡ����״̬ ����Ҫ���ݵ�ǰ��ͬһ���������������ѡ�����������
            fus.each(function(){
                //��������������������������ѡ��򶼱�ѡ�У��򸸼����ֵ�ѡ���ѡ��
                var Thats = $(this).find("input[type='checkbox']");
                var a = 1; //��������û��δ��ѡ�е�
                //�������������ѡ����Ƿ�ȫ��ѡ��
                Thats.each(function(){
                    if($(this).data("state") == 1){
                        //����������δ��ѡ�е�
                        a = 2;
                    }
                });
                if(a == 1){
                    //������������ѡ���ȫ��ѡ�У��򸸼��ֵܵ�ѡ���ѡ��
                    $(this).siblings("input[type='checkbox']").prop("checked",true);
                    $(this).siblings("input[type='checkbox']").data("state",2);
                }else{
                    //������������ѡ���δ��ȫ��ѡ�У��򸸼��ֵܵ�ѡ��򲻱�ѡ��
                    $(this).siblings("input[type='checkbox']").prop("checked",false);
                    $(this).siblings("input[type='checkbox']").data("state",1);
                }
                //�޸ĸ�������һ��
            })
        }else{
            //��ǰ�����ѡ����ѱ�ѡ��

            //�޸Ĵ�ѡ����״̬ ��Ϊ δѡ��״̬
            $(this).prop("checked",false);
            $(this).data("state",1);

            //�޸������¼�ѡ����״̬ ��Ϊ δѡ��״̬
            zis.prop("checked",false);
            zis.data("state",1);
            //�޸ĸ���ѡ����״̬  ��Ϊ δѡ��״̬
            fus.siblings("input[type='checkbox']").prop("checked",false);
            fus.siblings("input[type='checkbox']").data("state",1);
        }
    })


});