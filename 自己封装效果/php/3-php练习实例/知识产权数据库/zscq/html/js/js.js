$(function(){

    //���е������ɾ����ť��hover�¼�
    $(".c-tan-close").hover(function(){
        $(this).addClass("active");
    },function(){
        $(this).removeClass("active");
    })

    //����input��palceholder�ļ���ie�ķ���
    //�ж�������Ƿ�֧��placeholder����
    var supportPlaceholder='placeholder'in document.createElement('input');
    if( !supportPlaceholder ) // �����֧��placeholder����
    {
        $('input').each(function(  )
        {
            if($(this).attr("type") == "text"){
                var ph = $(this).attr('placeholder');

                if( ph && !$(this).val() )
                {
                    $(this).val(ph).css('color', '#aaa').css('line-height', $(this).css('height'));
                }

                $(this).on('focus', function()
                {
                    if( $(this).val() === ph)
                    {
                        $(this).val(null).css('color', '');
                    }

                }).on('blur', function()
                {
                    if( !$(this).val() )
                    {
                        $(this).val(ph).css('color', '#aaa').css('line-height', $(this).css('height'));
                    }
                });
            }else if($(this).attr("type") == "password"){
//                ���input�� type = "password" ʱ��css�Ĳ���
                $(".pasIE-bg").show();
                $(".pasIE").hide();
//                ���input�� type = "password" ʱ
                $(".pasIE-bg").focus(function(){
                    $(this).hide();
                    $(this).siblings(".pasIE").show().focus();
                    $(this).siblings(".pasIE").focus(function(){
                        $(this).siblings(".pasIE-bg").hide();
                    }).blur(function(){
                        if(!$(this).val()){
                            $(this).siblings(".pasIE-bg").show();
                            $(this).hide();
                        }
                    })
                });

            }
        });
    }

})