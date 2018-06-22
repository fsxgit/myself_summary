//其他js

function SSQjs(){
    var oFsheng = $(".Fsheng");
    var oSBox = $(".shengbox");
    var aPsheng = $(".shengbox p");
    var aHsheng = $(".Fsheng h1");

    var aPqu = $(".Fqu p");
    var aHqu = $(".Fqu h1");
    var aPxian = $(".Fxian p");
    var aHxian = $(".Fxian h1");

    var oQBox = $(".qubox");
    var oXBox = $(".xianbox");
    var oSvalue = $(".SValue");
    var oQvalue = $(".QValue");
    var oXvalue = $(".XValue");


//    aPsheng.on("click",function(){
//
//        alert("aaa");
////            oSBox.slideToggle();
////
////            oSvalue.text(txt);
//    });
    aHsheng.on("click",function(){
        oSBox.slideToggle();
    });
    aHqu.on("click",function(){
        oQBox.slideToggle();
    });
    aHxian.on("click",function(){
        oXBox.slideToggle();
    });
    aPsheng.on("click",function(){
        oSBox.slideUp();
    });
    aPqu.on("click",function(){
        oSBox.slideUp();
    });
    aPxian.on("click",function(){
        oXBox.slideUp();
    });


};

//省市区 调用数据 方法
function ajaxData(){
    var oFsheng = $(".Fsheng");
    var oSBox = $(".shengbox");
    var aPsheng = $(".shengbox p");
    var aHsheng = $(".Fsheng h1");

    var aPqu = $(".Fqu p");
    var aHqu = $(".Fqu h1");
    var aPxian = $(".Fxian p");
    var aHxian = $(".Fxian h1");

    var oQBox = $(".qubox");
    var oXBox = $(".xianbox");
    var oSvalue = $(".SValue");
    var oQvalue = $(".QValue");
    var oXvalue = $(".XValue");
    var oSBox = $(".shengbox");
    var oQBox = $(".qubox");
    var oXBox = $(".xianbox");
    $.ajax({
        url:"./data/dataCity.json",
        data:"",
        dataType:"json",
        type:"GET",
        async:"false",
        success:function(data){
//获取省份
            $.each(data.datas,function(indexS,valS){
                if(valS.C){
                    var arrS = "";
                    $.each(valS.C,function(i,v){
                        arrS += "<p >"+ v +"</p>"
                    });

                    oSBox.html(arrS);
                }

            });

//         绑定省份点击事件
            var iName = "";//为查找县的名字做准备
            oSBox.on("click","p",function(){
                var txt = $(this).text();
                oSBox.slideUp();
                oSvalue.text(txt);

                var iS = $(this).index();
                //alert("iS");
                var quName = "C_"+iS;
                //alert("quName");
                $.each(data.datas,function(indexQ,valQ){
//                    console.log(valQ);
//                    如果是通过获取的名字来找的话这样声明的名字 是不会被传值进去的,只会被当做本来名字来使用  例如 : valQ.quName中的 quName 不会被当做 上面传进来的 "C_"+iS 来使用  只会被当做 quName 来使用, 然后去 数据库里面找就找不到数据了,所以  通过名字来找数据的方法不能这样写 , 通过id的可以这样写
//                    if(valQ.quName){
//                        var arrQ = "";
//                        $.each(valQ.quName,function(i,v){
//                            arrQ += "<p >"+ v +"</p>"
//                        });
//                        oQBox.html(arrQ);
//                    }
                    //获取   市/区  的值

                    if(valQ[quName]){
                        var arrQ = "";//每次先清空
                        $.each(valQ[quName],function(i,v){
                            arrQ += "<p data-name = "+quName+">"+ v +"</p>"
                        });
                        oQBox.html(arrQ);
                        //  同时清除上一次选择的痕迹 {市/区 和县}为这一次选择的第一个的值
                        var txt0 =  valQ[quName][0];
                        oQvalue.text(txt0);
                        oXvalue.text("请选择县");
//                        县选择框 出现市区中第一个的数据
                        var xian0 = quName+"_"+0;
//                        alert(xian0);
                        $.each(data.datas,function(indexX0,valX0){
                            if(valX0[xian0]){
                                var arrX0 = "";
                                $.each(valX0[xian0],function(i0,v0){
                                    arrX0 += "<p data-name = "+valX0[xian0]+">"+ v0 +"</p>"
                                })
                            }
                            oXBox.html(arrX0);
                            //  同时清除上一次选择的痕迹 {市/区 和县}为这一次选择的第一个的值
                            if(valX0[xian0]){
                                oXvalue.text(valX0[xian0][0]);
                            }else{
                                oXvalue.text();
                            };
                            //   调用绑定县点击事件
                            xianXuan();

                        });
                        return iName = quName;
                    }
                });
            });
            //  调用绑定市/区点击事件
            quDian();

//  绑定市/区点击事件
            function quDian(){
                oQBox.on("click","p",function(){
                    var txt = $(this).text();
                    oQBox.slideUp();
                    oQvalue.text(txt);
//                alert($(this).text());
//                alert(iName);
                    var iQ = $(this).index();
                    var xianName = iName+"_"+iQ;
//                alert(xianName);
                    $.each(data.datas,function(indexX,valX){
                        if(valX[xianName]){
                            var arrX = "";//每次先清空
                            $.each(valX[xianName],function(i,v){
                                arrX += "<p data-name = "+xianName+">"+ v +"</p>"
                            });
                            oXBox.html(arrX);
                            //  同时清除上一次选择的痕迹 {市/区 和县}为这一次选择的第一个的值
                            var txt0 =  valX[xianName][0];
                            oXvalue.text(txt0);
                        }
                    });
//    调用绑定县点击事件
                    xianXuan();
                })
            };

//  绑定县点击事件
            function xianXuan(){
                oXBox.on("click","p",function(){
                    var txt = $(this).text();
//                    alert($(this).index());
                    oXBox.slideUp();
                    oXvalue.text(txt);
                });
            }

        },
        error:function(){
            alert("呵呵呵呵 !");
        }
    })
};