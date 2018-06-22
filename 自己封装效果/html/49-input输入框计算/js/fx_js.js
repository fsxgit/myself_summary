
function tabBox(){
    var oSpan = $(".choSpan");
    var oTabBox = $(".tabBox");
    oSpan.on("click",function(){
        var i = $(this).index();
        oTabBox.eq(i).show().siblings(".tabBox").hide();
    });
}



//    名字索引
nameIndex();
function nameIndex(){
    var oNameNum = $(".nameNum");
    oNameNum.each(function(index){
        var i = index+1;
        $(this).text(i);
        $(this).parents(".bagMode").find(".ceshi").val(i);
        $(this).parents(".bagMode").find(".ceshi").attr("name","fsx["+i+"][333]");
    })

}


//、////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//删除事件
//单个删除功能
Del();
function Del(){
    var oDelfx = $(".delfx");
    $("body").on("click",".delfx",function(){
        $(this).parents(".onlyInputBox").remove();
        DanCal();
        DuoCal();

    })

}



//整包删除功能
BagDel();
function BagDel(){
    $("body").on("click",".BagDel",function(){
        $(this).parents(".bagMode").remove();
        DanCal();
        DuoCal();
        nameIndex();
    })

}

//、////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//多选添加js
function addMore(){

    var aTabBox = $(".tabBoxDuo");
    aTabBox.each(function(){
        //全局使用
        var oBagsBox = $(this).find(".bagsBox");
        var oBaddBtn = $(this).find(".BaddBtn");
//    名字索引
      nameIndex();

//    继续添加
      jixuAdd();
      function jixuAdd(){
          oBaddBtn.on("click",function(){

              oBagsBox.append(
                  ' <div class="bagMode bagModeDuo">  <h1>礼包<span class="nameNum"></span><input type="button" class="BagDel" value="删除此包"/></h1> <div class="inputBag"> <div class="controls onlyInputBox"> <input type="button" value="删除" class="delfx"/><input type="text" class="input" name="area_name" value="">单价：<input type="tel" class="input danPriceDuo" placeholder="请输入价格" name="area_name" value="4">个数：<input type="tel"  placeholder="请输入个数" class="input numGeDuo" name="area_name" value="2"><input type="text" class="input ceshi" name="area_name" value=""> </div> </div> <button class="SaddBtn">添加</button> <div style="clear: both;"></div> <div class="bagBot"> <div class="bagTop"> <input type="button" value="保存" class="baocun"/> <span class="tjBox"> <span class="bagNum">请输入所需包1的个数: <input type="tel" value="1" class="bagNumValue numBagDuo"/></span> <input type="button" value="提交" class="tijiao"/> <span>共有<span class="numColor numHuiDuo"></span>张优惠券，共计<span class="numColor numMoneyDuo"></span>元 </span> </span> </div> </div> </div>'
              )

              nameIndex();
              tijiao();
              baocun();
              DuoCal();


          })

      }


//    append()生成元素的绑定事件的方法
      appendClick();
      function appendClick(){
          //    append()生成元素的绑定事件的方法
          oBagsBox.on("click",".SaddBtn",function(){
              var oInputBag =  $(this).siblings(".inputBag");
              oInputBag.append(
                  '<div class="controls onlyInputBox"><input type="button" value="删除" class="delfx"/><input type="text" class="input" name="area_name" value="">单价：<input type="tel" class="input danPriceDuo" placeholder="请输入价格" name="area_name" value="0">个数：<input type="tel"  placeholder="请输入个数" class="input numGeDuo" name="area_name" value="0"><input type="text" class="input ceshi" name="area_name" value=""></div>'
              )

              DuoCal();
              nameIndex();

          })
      }

//保存
      baocun();
      function baocun(){
          var oBaocun =  $(".baocun");
          oBaocun.on("click",function(){
              var oTjBox =  $(this).siblings(".tjBox");
              oTjBox.show();
          })
      }
//提交
      tijiao();
      function tijiao(){
          var oTijiao =  $(".tijiao");
          oTijiao.on("click",function(){
              var oBagTop =  $(this).parents(".bagTop");
              oBagTop.hide();
          })
      }
})
}


//、////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//单选添加的js
function addDan(){

    var aTabBox = $(".tabBoxDan");
    aTabBox.each(function(){
//    名字索引
        nameIndex();
        function nameIndex(){
            var oNameNum = $(".nameNum");
            oNameNum.each(function(index){
                $(this).text(index+1);
            })
        }



//小添加

Sadd();
        function Sadd(){
            var oSaddBtn =  $(".SaddBtn");
            oSaddBtn.each(function(i){
                $(this).on("click",function(){
                    //alert(i);

                    var oInputBag =  $(this).siblings(".inputBag");
                    var fsx = 222;
                    oInputBag.append(
                        '<div class="controls onlyInputBox"><input type="button" value="删除" class="delfx"/><input type="text" class="input" name="area_name" value="">单价：<input type="tel" class="input danPrice" placeholder="请输入价格" name="area_name" value="0">个数：<input type="tel"  placeholder="请输入个数" class="input numGe" name="area_name" value="0"><input type="text" class="input" name="area_name" value="'+fsx+'"></div>'
                    )
                })
                return false;
            })

        }
//保存
        baocun();
        function baocun(){
            var oBaocun =  $(".baocun");
            oBaocun.on("click",function(){
                var oTjBox =  $(this).siblings(".tjBox");
                oTjBox.show();
            })
        }
//提交
        tijiao();
        function tijiao(){
            var oTijiao =  $(".tijiao");
            oTijiao.on("click",function(){
                var oBagTop =  $(this).parents(".bagTop");
                oBagTop.hide();
            })
        }
    })
}




//、////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//如果不进行计算时，单选多选公用的js  都不用像上面那样单独分为 addMore() 和addDan()了
function addCommon(){

    var aTabBox = $(".tabBox");
    aTabBox.each(function(){
        //全局使用
        var oBagsBox = $(this).find(".bagsBox");
        var oBaddBtn = $(this).find(".BaddBtn");
        var aBagMode = $(this).find(".bagMode");
//    名字索引
        nameIndex();
        function nameIndex(){
            var oNameNum = $(".nameNum");
            oNameNum.each(function(index){
                $(this).text(index+1);
            })
        }


//    继续添加
        jixuAdd();
        function jixuAdd(){
            oBaddBtn.on("click",function(){
                var fsx=$(".nameNum").length+1;
                oBagsBox.append(
                    ' <div class="bagMode">  <h1>礼包<span class="nameNum"></span></h1> <div class="inputBag"> <div class="controls onlyInputBox"> <input type="text" class="input" name="area_name" value="">单价：<input type="tel" class="input danPrice" placeholder="请输入价格" name="area_name" value="3">个数：<input type="tel"  placeholder="请输入个数" class="input numGe" name="area_name" value="1"><input type="text" class="input" name="area_name" value="'+fsx+'"> </div> </div> <button class="SaddBtn">添加</button> <div style="clear: both;"></div> <div class="bagBot"> <div class="bagTop"> <input type="button" value="保存" class="baocun"/> <span class="tjBox"> <span class="bagNum">请输入所需包1的个数: <input type="tel" value="1" class="bagNumValue"/></span> <input type="button" value="提交" class="tijiao"/> <span>共有<span class="numColor numHuiDuo"></span>张优惠券，共计<span class="numColor numMoneyDuo"></span>元 </span> </span> </div>  </div> </div>'
                )

                nameIndex();
                tijiao();
                baocun();
            })

        }

//小添加

//Sadd();
        function Sadd(){
            var oSaddBtn =  $(".SaddBtn");
            oSaddBtn.each(function(i){
                $(this).on("click",function(){
                    //alert(i);

                    var oInputBag =  $(this).siblings(".inputBag");
                    var fsx = 222;
                    oInputBag.append(
                        '<div class="controls onlyInputBox"><input type="text" class="input" name="area_name" value=""><input type="text" class="input" name="area_name" value=""><input type="text" class="input" name="area_name" value=""><input type="text" class="input" name="area_name" value="'+fsx+'"></div>'
                    )
                })
                return false;
            })

        }

//    append()生成元素的绑定事件的方法
        appendClick();
        function appendClick(){
            //    append()生成元素的绑定事件的方法
            oBagsBox.on("click",".SaddBtn",function(){
                var oInputBag =  $(this).siblings(".inputBag");
                var fsx = $(this).siblings("h1").find(".nameNum").text();
                oInputBag.append(
                    '<div class="controls onlyInputBox"><input type="text" class="input" name="area_name" value="">单价：<input type="tel" class="input danPrice" placeholder="请输入价格" name="area_name" value="0">个数：<input type="tel"  placeholder="请输入个数" class="input numGe" name="area_name" value="0"><input type="text" class="input" name="area_name" value="'+fsx+'"></div>'
                )
            })
        }

//保存
        baocun();
        function baocun(){
            var oBaocun =  $(".baocun");
            oBaocun.on("click",function(){
                var oTjBox =  $(this).siblings(".tjBox");
                oTjBox.show();
            })
        }
//提交
        tijiao();
        function tijiao(){
            var oTijiao =  $(".tijiao");
            oTijiao.on("click",function(){
                var oBagTop =  $(this).parents(".bagTop");
                oBagTop.hide();
            })
        }
    })
}




//、////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//单选的时候的 计算
function DanCal(){
    var oNumHui = $(".numHui");
    var oNumMoney = $(".numMoney");
    var Money=0;
    var HuiNum=0;

/////////////////////////////////////////////////////
//    个数变化时的计算
/////////////////////////////////////////////////////
//  关于优惠券个数的计算的js
    huiGe();
    function huiGe(){
        var oNumGe = $(".numGe");
        oNumGe.each(function(){
            HuiNum +=parseInt($(this).val());

        });
        oNumHui.text(HuiNum);
    }

    changeGe();
    function changeGe(){
        $(".bagMode").on("keyup",".numGe",function(){
            HuiNum=0;
            huiGe();
        })
    }

//  关于总价格的计算的js
    huiMoney();
    function huiMoney(){
        var oNumGe = $(".numGe");
        oNumGe.each(function(){
            Money += parseInt($(this).siblings(".danPrice").val())*parseInt($(this).val());

        });
        oNumMoney.text(Money);
    }

    changeMoney();
    function changeMoney(){
        $(".bagMode").on("keyup",".numGe",function(){
            Money=0;
            huiMoney();
        })
    }

/////////////////////////////////////////////////////
//    单价变化时的总数计算
/////////////////////////////////////////////////////
    //  关于总价格的计算的js
    changeDan();
    function changeDan(){
        $(".bagMode").on("keyup",".danPrice",function(){
            Money=0;
            huiMoney();
        })
    }
}


//、////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//多选的时候的 计算
function DuoCal(){
    var duoHuiTol = $(".duoHuiTol");
    var tabDuo =$(".tabBoxDuo");
    var duoMoneyTol = $(".duoMoneyTol");
    var Money=0;
    var HuiNum=0;

/////////////////////////////////////////////////////
//    个数变化时的计算
/////////////////////////////////////////////////////
//  关于优惠券个数的计算的js
    huiGe();
    function huiGe(){
        var oBagMode = $(".bagModeDuo");
        oBagMode.each(function(){
            var oNumGe = $(this).find(".numGeDuo");
            var oBagGe = $(this).find(".numBagDuo").val();
            HuiNum=0;
            oNumGe.each(function(){
                HuiNum +=parseInt($(this).val());
            });
            var huiTol = oBagGe*HuiNum;
            //alert(huiTol);
            $(this).find(".numHuiDuo").text(huiTol);
        })


    }

    changeGe();
    function changeGe(){
        $(".bagsBox").on("keyup",".numGeDuo",function(){
            HuiNum=0;
            huiGe();
        })
    }

//  关于总价格的计算的js
    huiMoney();
    function huiMoney(){
        var oBagMode = $(".bagModeDuo");
        oBagMode.each(function(i){
            var oNumGe = $(this).find(".numGeDuo");
            var oBagGe = $(this).find(".numBagDuo").val();
            //alert(oBagGe);
            //alert(i+"的长度是"+oNumGe.length);
            Money = 0;
            oNumGe.each(function(){
                Money += parseInt($(this).siblings(".danPriceDuo").val())*parseInt($(this).val());

            });
            //alert("aaa"+i);
            var MoneyTol = Money*oBagGe;
            $(this).find(".numMoneyDuo").text(MoneyTol);
        })
    }

    changeMoney();
    function changeMoney(){
        $(".bagsBox").on("keyup",".numGeDuo",function(){
            Money=0;
            huiMoney();
            zongTol();
        })
    }

/////////////////////////////////////////////////////
//    单价变化时的总数计算
/////////////////////////////////////////////////////
    //  关于总价格的计算的js
    changeDan();
    function changeDan(){
        $(".bagsBox").on("keyup",".danPriceDuo",function(){
            Money=0;
            huiMoney();
            zongTol();
        })
    }


    //  关于总价格的计算的js
    changeBag();
    function changeBag(){
        $(".bagsBox").on("keyup",".numBagDuo",function(){
            Money=0;
            HuiNum=0;
            huiMoney();
            huiGe();
            zongTol();
        })
    }

    //所有总计的计算
    zongTol();
    function zongTol(){
        var zongHuiGe = 0;
        var zongMoney = 0;
        tabDuo.find(".numHuiDuo").each(function(){
            zongHuiGe += parseInt($(this).text());
        });

        tabDuo.find(".numMoneyDuo").each(function(){
            zongMoney += parseInt($(this).text());
        });

        duoHuiTol.text(zongHuiGe);
        duoMoneyTol.text(zongMoney);

    }
}





