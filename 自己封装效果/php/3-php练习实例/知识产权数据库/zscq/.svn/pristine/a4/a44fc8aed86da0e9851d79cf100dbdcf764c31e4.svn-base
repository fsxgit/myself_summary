$(function(){

    //所有弹出框的删除按钮的hover事件
    $(".c-tan-close").hover(function(){
        $(this).addClass("active");
    },function(){
        $(this).removeClass("active");
    })

    //所有input的palceholder的兼容ie的方法
    //判断浏览器是否支持placeholder属性
    var supportPlaceholder='placeholder'in document.createElement('input');
    if( !supportPlaceholder ) // 如果不支持placeholder属性
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
//                如果input的 type = "password" 时对css的操作
                $(".pasIE-bg").show();
                $(".pasIE").hide();
//                如果input的 type = "password" 时
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