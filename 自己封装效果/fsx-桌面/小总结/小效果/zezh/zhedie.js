$(function() {
    $(".meau_mode span").data("state", 1);
//    点击菜单标题折叠菜单
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

//点击菜单标题旁边的总的选择框，选中此标题下面的所有的菜单
    //state： 1 未选中；2 选中
    $("input[type='checkbox']").click(function(){
        var state = $(this).data("state");
        var fus = $(this).parents("ul");
        var zis = $(this).siblings("ul").find("input[type='checkbox']");
        if( state == 1){
            //当前点击的选择框未被选中

            //修改此选择框的状态  变为 选中状态
            $(this).prop("checked",true);
            $(this).data("state",2);

            //修改所有下级选择框的状态  变为 选中状态
            zis.prop("checked",true);
            zis.data("state",2);

            //修改父级选择框的状态 【这要根据当前的同一父级的下面的所有选择框来决定】
            fus.each(function(){
                //遍历父级，如果父级下面的所有选择框都被选中，则父级的兄弟选择框被选中
                var Thats = $(this).find("input[type='checkbox']");
                var a = 1; //父级下面没有未被选中的
                //遍历父级下面的选择框是否被全部选中
                Thats.each(function(){
                    if($(this).data("state") == 1){
                        //父级下面有未被选中的
                        a = 2;
                    }
                });
                if(a == 1){
                    //如果父级下面的选择框被全部选中，则父级兄弟的选择框被选中
                    $(this).siblings("input[type='checkbox']").prop("checked",true);
                    $(this).siblings("input[type='checkbox']").data("state",2);
                }else{
                    //如果父级下面的选择框未被全部选中，则父级兄弟的选择框不被选中
                    $(this).siblings("input[type='checkbox']").prop("checked",false);
                    $(this).siblings("input[type='checkbox']").data("state",1);
                }
                //修改父级的上一级
            })
        }else{
            //当前点击的选择框已被选中

            //修改此选择框的状态 变为 未选中状态
            $(this).prop("checked",false);
            $(this).data("state",1);

            //修改所有下级选择框的状态 变为 未选中状态
            zis.prop("checked",false);
            zis.data("state",1);
            //修改父级选择框的状态  变为 未选中状态
            fus.siblings("input[type='checkbox']").prop("checked",false);
            fus.siblings("input[type='checkbox']").data("state",1);
        }
    })


});