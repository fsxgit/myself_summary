function getData(){
    $.ajax({
        type:"post",
        url:"data.json",
        dataType:"json",
        async:false,
        success:function(data){
            var list="";
            $.each(data.data.sex,function(i,value){
                list += '<p data-val="'+i+'">'+value+'</p>';
            });
            $(".kinds").html(list);
            //FenLeiSelect();
        },
        error:function(){
            alert("wrong");
        }
    });
};