
function DingWei(obj){
    var L = ($(window).width()-obj.width())/2;
    var T = ($(window).height()-obj.height())/2;

    obj.css({"left":L,"top":T});
}
//取值
function quZhi(){
    var oTjbtn = $(".tjbtn");
    var oSValue = $(".SValue");
    var oQValue = $(".QValue");
    var oXValue = $(".XValue");
    oTjbtn.on("click",function(){
        var valS = oSValue.text();
        var valQ = oQValue.text();
        var valX = oXValue.text();
        var valTot = "省:"+valS+",市/区:"+valQ+",县:"+valX;

        alert(valTot);
    })

};
////这些是未调用ajax时使用的js
function SSQjs(){
    var oShadowBoxS = $(".shadowBoxS");
    var oSCenter = $(".SCenter");
    var oShadowBoxQ = $(".shadowBoxQ");
    var oQCenter = $(".QCenter");
    var oShadowBoxX = $(".shadowBoxX");
    var oXCenter = $(".XCenter");
    var aPsheng = $(".shengbox p");
    var aHsheng = $(".Fsheng h1");

    var aPqu = $(".Fqu p");
    var aHqu = $(".Fqu h1");
    var aPxian = $(".Fxian p");
    var aHxian = $(".Fxian h1");

    //弹出 并定位 js
    aHsheng.on("click",function(){
        DingWei(oSCenter);
        oShadowBoxS.show();
    });
    aHqu.on("click",function(){
        DingWei(oQCenter);
        oShadowBoxQ.show();
    });
    aHxian.on("click",function(){
        DingWei(oXCenter);
        oShadowBoxX.show();
    });

    //未调用ajax时隐藏弹出层 js
    oShadowBoxS.on("click",function(){
        oShadowBoxS.hide();
    });
    oShadowBoxQ.on("click",function(){
        oShadowBoxQ.hide();
    });
    oShadowBoxX.on("click",function(){
        oShadowBoxX.hide();
    });
};

//省市区 调用数据 方法
function ajaxData(){

    var oShadowBoxS = $(".shadowBoxS");
    var oSCenterH = $(".SCenter h2");
    var oShadowBoxQ = $(".shadowBoxQ");
    var oQCenterH = $(".QCenter h2");
    var oShadowBoxX = $(".shadowBoxX");
    var oXCenterH = $(".XCenter h2");
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
                oShadowBoxS.hide();
                oSvalue.text(txt);

                var iS = $(this).index();
                var quName = "C_"+iS;
                $.each(data.datas,function(indexQ,valQ){
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
                    oShadowBoxQ.hide();
                    oQvalue.text(txt);
                    var iQ = $(this).index();
                    var xianName = iName+"_"+iQ;
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
                    oShadowBoxX.hide();
                    oXvalue.text(txt);
                });
            }

        },
        error:function(){
            alert("数据调用错误 !");
        }
    })
};