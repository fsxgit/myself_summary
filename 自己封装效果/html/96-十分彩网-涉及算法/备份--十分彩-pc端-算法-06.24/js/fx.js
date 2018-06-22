function czlunbo(obj2){


    var contName = $(obj2); //图片ul的class
    var len = contName.find("li").length; //总li个数
    var OL = parseInt(contName.find("li").outerHeight()); //每次移动的长度
    var EL = parseInt((len-3)*OL);                //终点位置

    var timer = setInterval(function(){

        var L = parseInt(contName.css("top"));         //当前的位置
        if(L <= -EL){
            contName.animate({top:0},100);
        }else{
            contName.animate({top:parseInt(L-OL)},100);
        }

    },2000)

}


//banner轮播
function lunbo(obj1,obj2){
//    导航点
    var navName = $(obj1);  //导航点ul的class
    var nlen = navName.find("li").length;  //导航点个数
    var n = 0;


    var contName = $(obj2); //图片ul的class
    var len = contName.find("li").length; //总li个数
    var OL = parseInt(contName.find("li").width()); //每次移动的长度
    var EL = parseInt((len-1)*OL);                //终点位置

    var timer = setInterval(function(){

        var L = parseInt(contName.css("left"));         //当前的位置
        if(n == nlen-1){
            n = 0;
            navName.find("li").eq(n).delay(100).addClass("on").siblings("li").removeClass("on");
            contName.animate({left:0},100);
        }else{
            n++;
            navName.find("li").eq(n).delay(100).addClass("on").siblings("li").removeClass("on");
            contName.animate({left:parseInt(L-OL)},100);
        }

    },3000)

}

//头部  个人信息 我的账户移入显示隐藏
function  personalInfo(){
    var L = $(window).width()-$(".fx_cardBox").outerWidth();
    var T = 30;
    $(".fx_cardBox").css("left",L/2);
    $(".fx_cardBox").css("top",T);

    $("._personalInfo").hover(function(){
        $(".fx_cardBox").show();
    },function(){
        $(".fx_cardBox").hide();
    });
    $(".fx_cardBox").hover(function(){
        $(".fx_cardBox").show();
    },function(){
        $(".fx_cardBox").hide();
    });


    $(".HoverShow").hover(function(){
        $(".HoverShowContent").show();
    },function(){
        $(".HoverShowContent").hide();
    })
}



//       页面滑动彩票种类js
function kindsSlide(){
    //        向左滑
    $(".betNavtab.left").click(function(){
        var uw = $(".betNav.fix").width();
        var lw = $(".betNav.fix li").width();
        var len = parseInt(uw/lw);
        if(len>6){
            var str = $(".betNav.fix").css("transform");
//                结果类似于：matrix(1, 0, 0, 1, -112, 0)
            var oX = str.match(/(matrix\(1, 0, 0, 1,)(.*)(, 0\))/)[2];
            var zhun = (lw*6-uw+10); //设置移动标准，另加10个单位的偏移量
//                console.log(oX +"和"+zhun);
            if(oX > zhun){
                $(".betNav.fix").css("transform","translateX("+(oX-lw)+"px)");
            }else{
                alert("已经到顶了！")
            }

        }else{
            alert("已经到顶了！")
        }

    });
//        向右滑
    $(".betNavtab.right").click(function(){
        var uw = parseInt($(".betNav.fix").width());
        var lw = parseInt($(".betNav.fix li").width());
        var len = parseInt(uw/lw);
        if(len>6){
            var str = $(".betNav.fix").css("transform");
//                结果类似于：matrix(1, 0, 0, 1, -112, 0)
            var oX = parseInt(str.match(/(matrix\(1, 0, 0, 1,)(.*)(, 0\))/)[2]);
            var zhun = 0-10; //设置移动标准，另加10个单位的偏移量
//                console.log(oX +"和"+zhun+"和"+lw);
            if(oX < zhun){
                $(".betNav.fix").css("transform","translateX("+(oX+lw)+"px)");
            }else{
                alert("已经到底了！")
            }

        }else{
            alert("已经到底了！")
        }

    })
}


//关闭提示框
closeNotice();
function closeNotice(){
    $(".closeNotice").click(function(){
        $(this).parents(".notice").hide();
    })
}

//top 全部彩票移入显示，移出隐藏
betMoreList();
function betMoreList(){
    $(".betNavMore").hover(function(){
        $(".betMoreList").show();
    },function(){

    });
    $(".betMoreList").hover(function(){
        $(".betMoreList").show();
    },function(){
        $(".betMoreList").hide();
    })
}

//中奖信息切换
winningList();
function winningList(){
    $(".winningList h3").click(function(){
        $(this).removeClass("notSelect").siblings("h3").addClass("notSelect");
        var i = $(this).index();
        if(i == 0){
            $("#lotteryInfo").show();
            $("#moneyList").hide();
        }else{
            $("#lotteryInfo").hide();
            $("#moneyList").show();
        }
    })
}

//wenxintishi
wxts();
function wxts(){
    $(".layermend,.layermbtn").click(function(){
        //$(this).parents(".layermbox").hide();
        $(".layermbox").hide();

    })
}
//wenxintishi end

//余额显示隐藏
yue();
function yue(){
    $(".fx_money_hide").click(function(){
        $(".getMoney").hide();
        $(".showMoney").show();
    });
    $(".fx_money_show").click(function(){
        $(".getMoney").show();
        $(".showMoney").hide();
    })
}





//彩票JS
function K3JS(){
    //        点击数字，下面对应生成投注的东西
    numChoose();
//彩票选择切换
    navtab();


//通过kd值来把 选择（betFilter>li）与提示（betTip>span）与内容(checkNumber>ul)联系起来显示、给状态
//data-kd

//通过不同的type来设置不同的选择方式
//data-type="1"  和值、三同号通选、三连号通选
//data-type="2"  三同号单选、二同号复选
//data-type="3"  三不同号
//data-type="4"  二同号单选
//data-type="5"  二不同号

//通过不同的que值来判断是否显示确认选号按钮
//data-que="1"  1时显示确认选号
//data-que="2"  2时不显示确认选号


//        点击数字，下面对应生成投注的东西
    function numChoose(){
        var reg = /\d+\.?\d*/;
//        点击数字，下面对应生成投注的东西
        $(".checkNumber li").click(function(){
            var name2 = $(".betFilter").find(".curr").text();
            var isTrue = $(this).hasClass("active");
            var type = $(".checkNumber ul.on").data("type");
            //alert(type);
            if(!isTrue){
//                    当此数字未被选中时
                $(this).addClass("active");

                if(type == 1){
                    //                        设置单价
                    var unitp = $(this).find("span").text();
                    unitp = unitp.match(reg);
                    if(!unitp){
                        unitp =  parseFloat($(".betTip span.on").find("i").text());
                    }

                    var name = $(this).find(".ClickShade").text();
                    var htm1 ='';
                    htm1 += '<tr data-v-021d6267="">';
                    htm1 += '<td data-v-021d6267=""><i data-v-021d6267="" class="order_type">['+name2+'] ' +name+ '</i></td>';
                    htm1 += '<td data-v-021d6267=""><span data-v-021d6267="" class="order_zhushu">总共 <i data-v-021d6267="" class="order_num c_red">1</i>注</span></td>';
                    htm1 += '<td data-v-021d6267=""><i data-v-021d6267="" class="order_price">每注<input data-v-021d6267="" data-price="'+unitp+'" type="text" class="eachPrice">元</i></td>';
                    htm1 += '<td data-v-021d6267=""><i data-v-021d6267="" class="c_3"><span data-v-021d6267="" class="hide_this">可中金额：<i data-v-021d6267="" class="orderMoney c_red">0.00</i>元</span></i></td>';
                    htm1 += '<td data-v-021d6267=""><i data-v-021d6267="" class="orderCancel" data-del="' +name+
                        '">删除</i></td>';
                    htm1 += '</tr>';

                    $(".checkedList tbody").prepend(htm1);
                    totl();
                }
                if(type == 2){
                    var ali = $(".checkNumber ul.on").find("li.active");
                    var len1 = ali.length;
                    $(".Panel .betTotal em").text(len1);


                }
                if(type == 3){
                    var ali = $(".checkNumber ul.on").find("li.active");
                    var len3 = ali.length;
                    if(len3 < 3){
                        $(".Panel .betTotal em").text(0);
                    }
                    if(len3 == 3){
                        $(".Panel .betTotal em").text(1);
                    }
                    if(len3 == 4){
                        $(".Panel .betTotal em").text(4);
                    }
                    if(len3 == 5){
                        $(".Panel .betTotal em").text(10);
                    }
                    if(len3 == 6){
                        $(".Panel .betTotal em").text(20);
                    }


                }
                if(type == 4){
                    var type4 = $(this).parents("ul.on").data("type4");
                    var i = $(this).index();
                    if(type4 == 1){
                        $(".checkNumber ul.on[data-type4='2']").find("li").eq(i).removeClass("active");
                    }else{
                        $(".checkNumber ul.on[data-type4='1']").find("li").eq(i).removeClass("active");
                    }
                    var a = $(".checkNumber ul.on[data-type4='1'] li.active").length;
                    var b = $(".checkNumber ul.on[data-type4='2'] li.active").length;
                    //总注数
                    var tot = a*b;
                    $(".Panel .betTotal em").text(tot);

                }
                if(type == 5){
                    var ali = $(".checkNumber ul.on").find("li.active");
                    var len1 = ali.length;

                    var tot = (len1*len1)/2-len1/2;
                    $(".Panel .betTotal em").text(tot);
                }




            }else{
                $(this).removeClass("active");
                if(type == 1){
                    var name = $(this).find(".ClickShade").text();
                    $(".checkedList .orderCancel[data-del='"+name+"']").click();
                }
                if(type == 2){
                    var len1 = $(".checkNumber ul.on").find("li.active").length;
                    $(".Panel .betTotal em").text(len1);
                }
                if(type == 3){
                    var ali = $(".checkNumber ul.on").find("li.active");
                    var len3 = ali.length;
                    if(len3 < 3){
                        $(".Panel .betTotal em").text(0);
                    }
                    if(len3 == 3){
                        $(".Panel .betTotal em").text(1);
                    }
                    if(len3 == 4){
                        $(".Panel .betTotal em").text(4);
                    }
                    if(len3 == 5){
                        $(".Panel .betTotal em").text(10);
                    }
                    if(len3 == 6){
                        $(".Panel .betTotal em").text(20);
                    }

                }
                if(type == 4){
                    var a = $(".checkNumber ul.on[data-type4='1'] li.active").length;
                    var b = $(".checkNumber ul.on[data-type4='2'] li.active").length;
                    //总注数
                    var tot = a*b;
                    $(".Panel .betTotal em").text(tot);

                }
                if(type == 5){
                    var ali = $(".checkNumber ul.on").find("li.active");
                    var len1 = ali.length;

                    var tot = (len1*len1)/2-len1/2;
                    $(".Panel .betTotal em").text(tot);
                }


            }

        });


//          点击确认选号按钮
        $(".Panel .betBtn.ClickShade").click(function(){
            var name3 = "";
            var name2 = $(".betFilter").find(".curr").text();
            var type = $(".checkNumber ul.on").data("type");

            if(type == 2){
                var ali = $(".checkNumber ul.on").find("li.active");
                var len1 = ali.length;
                if(len1 > 0){
                    //                 设置单价
                    var unitp = $(this).find("span").text();
                    unitp = unitp.match(reg);
                    if(!unitp){
                        unitp =  parseFloat($(".betTip span.on").find("i").text());
                    }

                    ali.each(function(){
                        name3 += $(this).find(".ClickShade").text()+",";
                    });

                    var html2 = '';
                    html2 += '<tr data-v-021d6267="">';
                    html2 += '<td data-v-021d6267=""><i data-v-021d6267="" class="order_type">['+name2+'] ' +name3+ '</i></td>';
                    html2 += '<td data-v-021d6267=""><span data-v-021d6267="" class="order_zhushu">总共 <i data-v-021d6267="" class="order_num c_red">'+len1+'</i>注</span></td>';
                    html2 += '<td data-v-021d6267=""><i data-v-021d6267="" class="order_price">每注<input data-v-021d6267="" data-price="'+unitp+'" type="text" class="eachPrice">元</i></td>';
                    html2 += '<td data-v-021d6267=""><i data-v-021d6267="" class="c_3"><span data-v-021d6267="" class="hide_this">可中金额：<i data-v-021d6267="" class="orderMoney c_red">0.00</i>元</span></i></td>';
                    html2 += '<td data-v-021d6267=""><i data-v-021d6267="" class="orderCancel" data-del="' +name+
                        '">删除</i></td>';
                    html2 += '</tr>';
                    $(".checkedList tbody").prepend(html2);
                    totl();

                }else{
                    alert("号码选择不完整，请重新选择！");
                }



            }
            if(type==3){
                var ali = $(".checkNumber ul.on").find("li.active");
                var len1 = ali.length;

                if(len1 > 0){

                    //                 设置单价
                    var unitp = $(this).find("span").text();
                    unitp = unitp.match(reg);
                    if(!unitp){
                        unitp =  parseFloat($(".betTip span.on").find("i").text());
                    }


                    ali.each(function(){
                        name3 += $(this).find(".ClickShade").text()+",";
                    });

                    var html2 = '';
                    html2 += '<tr data-v-021d6267="">';
                    html2 += '<td data-v-021d6267=""><i data-v-021d6267="" class="order_type">['+name2+'] ' +name3+ '</i></td>';
                    html2 += '<td data-v-021d6267=""><span data-v-021d6267="" class="order_zhushu">总共 <i data-v-021d6267="" class="order_num c_red">'+len1+'</i>注</span></td>';
                    html2 += '<td data-v-021d6267=""><i data-v-021d6267="" class="order_price">每注<input data-v-021d6267="" data-price="'+unitp+'"  type="text" class="eachPrice">元</i></td>';
                    html2 += '<td data-v-021d6267=""><i data-v-021d6267="" class="c_3"><span data-v-021d6267="" class="hide_this">可中金额：<i data-v-021d6267="" class="orderMoney c_red">0.00</i>元</span></i></td>';
                    html2 += '<td data-v-021d6267=""><i data-v-021d6267="" class="orderCancel" data-del="' +name+
                        '">删除</i></td>';
                    html2 += '</tr>';
                    $(".checkedList tbody").prepend(html2);
                    totl();

                }else{
                    alert("号码选择不完整，请重新选择！");
                }



            }
            if(type == 4){
                var a = $(".checkNumber ul.on[data-type4='1'] li.active").length;
                var b = $(".checkNumber ul.on[data-type4='2'] li.active").length;
                //总注数
                var tot = a*b;
                if(tot>0){

                    //                 设置单价
                    var unitp = $(this).find("span").text();
                    unitp = unitp.match(reg);
                    if(!unitp){
                        unitp =  parseFloat($(".betTip span.on").find("i").text());
                    }

                    var ali41 = $(".checkNumber ul.on[data-type4='1']").find("li.active");
                    var ali42 = $(".checkNumber ul.on[data-type4='2']").find("li.active");
                    var len41 = ali41.length;
                    var len42 = ali42.length;
                    var tot = len41*len42;
                    var name41="";
                    var name42="";
                    ali41.each(function(){
                        name41 += $(this).find(".ClickShade").text()+" ";
                    });
                    ali42.each(function(){
                        name42 += $(this).find(".ClickShade").text()+" ";
                    });
                    var name43 = name41 +","+name42;



                    var html2 = '';
                    html2 += '<tr data-v-021d6267="">';
                    html2 += '<td data-v-021d6267=""><i data-v-021d6267="" class="order_type">['+name2+'] ' +name43+ '</i></td>';
                    html2 += '<td data-v-021d6267=""><span data-v-021d6267="" class="order_zhushu">总共 <i data-v-021d6267="" class="order_num c_red">'+tot+'</i>注</span></td>';
                    html2 += '<td data-v-021d6267=""><i data-v-021d6267="" class="order_price">每注<input data-v-021d6267="" data-price="'+unitp+'" type="text" class="eachPrice">元</i></td>';
                    html2 += '<td data-v-021d6267=""><i data-v-021d6267="" class="c_3"><span data-v-021d6267="" class="hide_this">可中金额：<i data-v-021d6267="" class="orderMoney c_red">0.00</i>元</span></i></td>';
                    html2 += '<td data-v-021d6267=""><i data-v-021d6267="" class="orderCancel" data-del="' +name+
                        '">删除</i></td>';
                    html2 += '</tr>';
                    $(".checkedList tbody").prepend(html2);
                    totl();
                }else{
                    alert("号码选择不完整，请重新选择！");
                }


            }
            if(type == 5){
                var ali = $(".checkNumber ul.on").find("li.active");
                var len1 = ali.length;

                var tot = (len1*len1)/2-len1/2;
                if(tot>0){

                    //                 设置单价
                    var unitp = $(this).find("span").text();
                    unitp = unitp.match(reg);
                    if(!unitp){
                        unitp =  parseFloat($(".betTip span.on").find("i").text());
                    }

                    ali.each(function(){
                        name3 += $(this).find(".ClickShade").text()+" ";
                    });

                    var html2 = '';
                    html2 += '<tr data-v-021d6267="">';
                    html2 += '<td data-v-021d6267=""><i data-v-021d6267="" class="order_type">['+name2+'] ' +name3+ '</i></td>';
                    html2 += '<td data-v-021d6267=""><span data-v-021d6267="" class="order_zhushu">总共 <i data-v-021d6267="" class="order_num c_red">'+tot+'</i>注</span></td>';
                    html2 += '<td data-v-021d6267=""><i data-v-021d6267="" class="order_price">每注<input data-v-021d6267=""  data-price="'+unitp+'" type="text" class="eachPrice">元</i></td>';
                    html2 += '<td data-v-021d6267=""><i data-v-021d6267="" class="c_3"><span data-v-021d6267="" class="hide_this">可中金额：<i data-v-021d6267="" class="orderMoney c_red">0.00</i>元</span></i></td>';
                    html2 += '<td data-v-021d6267=""><i data-v-021d6267="" class="orderCancel" data-del="' +name+
                        '">删除</i></td>';
                    html2 += '</tr>';
                    $(".checkedList tbody").prepend(html2);
                    totl();

                }else{
                    alert("号码选择不完整，请重新选择！");
                }
            }




            //去除选择过的状态
            var ali = $(".checkNumber ul.on").find("li.active");
            ali.removeClass("active");
            $(".Panel .betTotal em").text("0");
        });


        //点击删除按钮
        $(".checkedList").on("click",".orderCancel",function(){
            $(this).parents("tr").remove();
            var name1 = $(this).data("del");
            $(".checkNumber li").each(function(){
                var name2 = $(this).find(".ClickShade").text();
                if(name1 == name2){
                    $(this).removeClass("active");
                }


            });

            totl();
        });

//            输入每注 元 数，算出可中金额 数
        $(".checkedList").on("blur",".eachPrice",function(){
            var val = $(this).val();
            var reg2 = /^\d+$/;
            var zh = reg2.test(val);
            if(!zh){
                $(this).val("0");
            }
            var zong = parseInt($(this).val())*parseFloat($(this).data("price"));
            $(this).parents("tr").find(".orderMoney").text(zong);

            totl();
        });


//            计算总注数和总钱数
        function totl(){

            var n = 0; //总注数
            var m = 0;  //总钱数
            $(".checkedList").find(".order_num").each(function(){
                var i = parseInt($(this).text());
                var j = parseInt($(this).parents("tr").find(".eachPrice").val());
                n += i;
                if(!j){
                    j = 0;
                }
                m += i*j;
            });

            $(".betTotal .zhu").text(n);
            $(".betTotal .money").text(m);

        }



    }

//          彩票选择切换
    function navtab(){
        $(".betFilter li").click(function(){
            $(this).addClass("curr").siblings().removeClass("curr");
            var n1 = $(this).data("kd");
            $(".betTip span").each(function(){
                var n2 = $(this).data("kd");
                if(n2 == n1){
                    $(this).addClass("on").siblings().removeClass("on");
                }
            });
            $(".checkNumber ul").each(function(){
                var n3 = $(this).data("kd");
                var que = $(this).data("que");
                var type = $(this).data("type");
                if(n3 == n1){
                    $(".checkNumber ul").removeClass("on");
                    $(".checkNumber ul[data-kd='"+n3+"']").addClass("on");
                    if(que==1){
                        $(".Panel").show();
                    }else{
                        $(".Panel").hide();
                    }
                }

                //去除选择过的状态
                if(type !== 1){
                    $(this).find("li").removeClass("active");
                    $(".Panel .betTotal em").text("0");
                }
            })
        })
    }
}




//ssc 组选60的算法
//obj1 二重号位的选中的a的组合
//obj2 单号位的选中的a的组合
//例如
//var naActives = $(".na span.active");
//var nbActives = $(".nb span.active");
//
//var aa = zu60(naActives,nbActives);
//alert(aa);
function zu60(obj1,obj2){
    var zres = 0;
    var naLen = obj1.length;
    var nbLen = obj2.length;
    obj1.each(function(){
        var k =  2;
        var a0 = $(this).text().replace(/\s/g,"");
        if(naLen >=1){
            if(nbLen>=3){
                obj2.each(function(){
                    var b0 = $(this).text().replace(/\s/g,"");
                    if(a0 == b0){
                        //有一个相等的值，k 就变为1
                        k = 1;
                    }
                });

                if( k == 1){
                    //B值 中 有 与 A值 相等的值,则使用第一种算法
                    if(nbLen >= 4){
                        zres += C((nbLen-1),3);
                    }
                }else{
                    zres += C(nbLen,3);
                }
            }
        }
    });
    return  zres;
}
//ssc 组选30的算法
function zu30(obj1,obj2){
    var zres = 0;
    var naLen = obj1.length;
    var nbLen = obj2.length;


    obj2.each(function(){
        var k =  2;
        var a0 = $(this).text().replace(/\s/g,"");

        if(naLen >=2){

            obj1.each(function(){
                var b0 = $(this).text().replace(/\s/g,"");
                if(a0 == b0){
                    //有一个相等的值，k 就变为1
                    k = 1;
                }
            });

            if( k == 1){
                //B值 中 有 与 A值 相等的值,则使用第一种算法
                if(naLen >= 3){
                    zres += C((naLen-1),2);
                }
            }else{
                zres += C(naLen,2);
            }
        }
    });
    return  zres;
}
//组选20
function zu20(obj1,obj2){
    var zres = 0;
    var naLen = obj1.length;
    var nbLen = obj2.length;


    obj1.each(function(){
        var k =  2;
        var a0 = $(this).text().replace(/\s/g,"");

        if(nbLen >=2){

            obj2.each(function(){
                var b0 = $(this).text().replace(/\s/g,"");
                if(a0 == b0){
                    //有一个相等的值，k 就变为1
                    k = 1;
                }
            });

            if( k == 1){
                //B值 中 有 与 A值 相等的值,则使用第一种算法
                if(nbLen >= 3){
                    zres += C((nbLen-1),2);
                }
            }else{
                zres += C(nbLen,2);
            }
        }
    });
    return  zres;
}
//组选10
function zu10(obj1,obj2){
    var zres = 0;
    var naLen = obj1.length;
    var nbLen = obj2.length;


    obj1.each(function(){
        var k =  2;
        var a0 = $(this).text().replace(/\s/g,"");

        if(nbLen >=1){

            obj2.each(function(){
                var b0 = $(this).text().replace(/\s/g,"");
                if(a0 == b0){
                    //有一个相等的值，k 就变为1
                    k = 1;
                }
            });

            if( k == 1){
                //B值 中 有 与 A值 相等的值,则使用第一种算法
                if(nbLen >= 2){
                    zres += C((nbLen-1),1);
                }
            }else{
                zres += C(nbLen,1);
            }
        }
    });
    return  zres;
}
//直选和值1三位算法
function zhi1(obj1){
    var n = 0;
    var A = 0;
    obj1.each(function(){
        var M = $(this).text().replace(/\s/g,"");
        if(M>9){
            A = 9;
        }else{
            A = M;
        }
        //个位：
        for (var i = 0 ;i <= A ; i++){
            //十位：
            for (var j = 0 ;j <= A ; j++){
                //百位：
                for (var k = 0 ;k <= A ; k++){
                    var he = i+j+k;
                    if(he == M){
                        n++;
                    }
                }
            }
        }
    });
    return n;
}
//直选和值2两位算法
function zhi2(obj1){
    var n = 0;
    var A = 0;
    obj1.each(function(){
        var M = $(this).text().replace(/\s/g,"");
        if(M>9){
            A = 9;
        }else{
            A = M;
        }
        //个位：
        for (var i = 0 ;i <= A ; i++){
            //十位：
            for (var j = 0 ;j <= A ; j++){
                var he = i+j;
                if(he == M){
                    n++;
                }
            }
        }
    });
    return n;
}

//组选和值2两位算法
function zhi3(obj1){
    var n = 0;
    var A = 0;
    obj1.each(function(){
        var M = $(this).text().replace(/\s/g,"");
        if(M>9){
            A = 9;
        }else{
            A = M;
        }
        //个位：
        for (var i = 0 ;i <= A ; i++){
            //十位：
            for (var j = 0 ;j <= A ; j++){
                var he = i+j;
                if(i==j){

                }else{
                    if(he == M){
                        n++;
                    }
                }

            }
        }
    });
    return n;
}

//ssc
//	C(n,m) 从n中选中m个的组合（n>=m）
//var aa = C(n,m);
//alert(aa);
function C(n,m){
    if(n<m){
        return res = 0;
    }else{
        var a = 1;
        for (var i = n;i >= 1 ;i--){
            a*=i;
        }

        var b = 1;
        for (var i = (n-m);i >= 1 ;i--){
            b*=i;
        }

        var c = 1;
        for (var i = m;i >= 1 ;i--){
            c*=i;
        }
//		console.log(a+"/"+b+"/"+c);
        return res = a/(b*c);
    }

}
//排列
function A(n,m){
    if(n<m){
        return res = 0;
    }else{
        var a = 1;
        for (var i = n;i >= 1 ;i--){
            a*=i;
        }

        var b = 1;
        for (var i = (n-m);i >= 1 ;i--){
            b*=i;
        }

        var c = 1;
        for (var i = m;i >= 1 ;i--){
            c*=i;
        }
//		console.log(a+"/"+b+"/"+c);
        return res = a/(b*c);
    }

}


//11X5 JS
//前三直选复式
function syx5_0(obj1,obj2,obj3){

    var zres = 0;
    obj1.each(function(){
        var a0 = $(this).text().replace(/\s/g,"");
        obj2.each(function(){
            var b0 = $(this).text().replace(/\s/g,"");

            if(a0 !== b0){
                obj3.each(function(){
                    var c0 = $(this).text().replace(/\s/g,"");
                    if(b0 !== c0 && a0 !== c0){
                        zres++;
                    }
                });
            }
        });
    });
    return  zres;
}
//前二直选复式
function syx5_1(obj1,obj2){

    var zres = 0;
    obj1.each(function(){
        var a0 = $(this).text().replace(/\s/g,"");
        obj2.each(function(){
            var b0 = $(this).text().replace(/\s/g,"");

            if(a0 !== b0){
                zres++;
            }
        });
    });
    return  zres;
}