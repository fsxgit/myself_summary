// JavaScript Document

//在线选片 选择精修照 js 开始
function zxxpChooseClothes(){
    var $box_left = $(".box_left");
    var $B_imgLeft = $(".B_imgLeft");
    var $B_imgRight = $(".B_imgRight");
    var $shdowTxt = $(".shdowTxt");
    var $choosePhotoList = $("#choosePhotoList");
    var $choosephotosBox = $("#choosephotosBox");
    var aLi = $(".imgs li");
    var $choosedImg = $("#choosedImg");
    var $num = $("#num");
    var $numTol = parseInt($("#numTol").text());
    var ff =0;

//改变显示图片的src为当前图片的src   并返回当前的索引值 开始
    var $imgChoose = $(".imgChoose");
    var  srcIndexY = 0;  //定义最初索引值为0  大按钮/点击图片/src用
    function src(srcIndex){

        var src = $("#Simgs li>img:first-child").eq(srcIndex).attr("src"); //当前图片的src

        aLi.eq(srcIndex).addClass("choosePhotoActive2").siblings().removeClass("choosePhotoActive2");  //当前图片添加类名,其他移除类名

        $("#imgShow").attr("src",src); //改变显示图片的src为当前图片的src

        return srcIndexY = srcIndex;// 并返回当前的索引值 开始
    }
//改变显示图片的src为当前图片的src   并返回当前的索引值 开始

//自移动的导航 开始
    var fnum = 10;  //导航显示的个数
    var flen = aLi.length;   //导航的总数
    var fw = aLi.width()+8;  //导航中单个li的宽度
    function Change(findex){
        if(findex < fnum){//一半以前
            $choosePhotoList.animate({left: 0});  //靠左
        }else if(fnum<= findex <=flen-fnum){ ////当前+显示长度  <= 导航个数
            $choosePhotoList.animate({left: -(findex-fnum)* fw});//向左移动当前加一个
        }

    }

//自移动的导航 结束
// 选择精修按钮 点击 开始
    $imgChoose.click(function(){
        addRemove(srcIndexY);
        changeTxt(srcIndexY);
    })
// 选择精修按钮 点击 结束
//改变文字  开始
    changeTxt(srcIndexY);
    function changeTxt(txtIndex){
        var mm = aLi.eq(txtIndex).hasClass("choosePhotoActive");
        if(mm){
            $imgChoose.html("取消精修");
        }else{
            $imgChoose.html("选择精修");
        }

    };

//改变文字  结束
//    判断变暗 变亮的总指挥  开始
    function LED(){
        aLi.each(function(){
            var LED1 = $(this).hasClass("choosePhotoActive");
            var LED2 = $(this).hasClass("choosePhotoActive2");
            if(LED1 || LED2){
                $(this).find(".choosePhotoShdow").hide();
            }else{
                $(this).find(".choosePhotoShdow").show();
            }
        })


    }
    //判断变暗 变亮的总指挥  结束
//    添加移除 function  开始

function addRemove(index){
    var i = index+1;
    var ff = $choosedImg.children("li").length;
    var src3 = aLi.eq(index).children("img:first-child").attr("src");
    // 判断是否选择的精修照已达上限
    if(ff<$numTol){
            aLi.eq(index).toggleClass("choosePhotoActive");
            aLi.eq(index).find(".choosePhotoShdow").hide();
            if( aLi.eq(index).hasClass("choosePhotoActive")){
                $choosedImg.append(
                    '<li id="'+i+'">'+
                    '<img src="'+src3+'" alt=""/>'+
                    '<div class="shdow"></div>'+
                    '<span class="f12">移除</span></li>'
                )}
            else
            {

                $("#"+i+"").remove();
            }

        }else if(aLi.eq(index).hasClass("choosePhotoActive"))
            {
                aLi.eq(index).removeClass("choosePhotoActive");
                $("#"+i+"").remove();
            }else{
                alert("您好!您选择数量已达上限!")
    };
    changeTxt(index);
//右边的小图片移入显示,移出隐藏
    $choosedImg.children("li").hover(function(){
        $(this).addClass("fx_hover");
    },function(){
        $(this).removeClass("fx_hover");
    });
    $choosedImg.children("li").children("span").click(function(){
        $(this).parent("li").remove();
        var m = $(this).parent().attr("id");
        //alert(m);
        $("#f"+m+"").removeClass("choosePhotoActive");
        var gg = $choosedImg.children("li").length;
        //alert(len);
        $num.text(gg);
        if(gg==$numTol){
            $(".photoConfirm").css({backgroundColor:"#E63736"});
            $(".photoConfirm").addClass("hover");
        }else{
            $(".photoConfirm").css({backgroundColor:"#666"});
            $(".photoConfirm").removeClass("hover");
        }
        LED();
        return ff = gg;
    })
    if(ff==$numTol){
        $(".photoConfirm").css({backgroundColor:"#E63736"});
        $(".photoConfirm").addClass("hover");
    }else{
        $(".photoConfirm").css({backgroundColor:"#666"});
        $(".photoConfirm").removeClass("hover");
    }

    var len = $choosedImg.children("li").length;
    //alert(len);
    $num.text(len);
    if(len==$numTol){
        $(".photoConfirm").css({backgroundColor:"#E63736"});
        $(".photoConfirm").addClass("hover");
    }else{
        $(".photoConfirm").css({backgroundColor:"#666"});
        $(".photoConfirm").removeClass("hover");
    }
    LED();
    return ff = len;
};


//    添加移除 function  结束


//水平居中显示
    $choosephotosBox.css("left",($(document).width()-$choosephotosBox.width())/2);
    //左边的箭头,阴影移入显示,移出隐藏
    $box_left.hover(function(){
        $B_imgLeft.show();$B_imgRight.show();$shdowTxt.show();
    },function(){
        $B_imgLeft.hide();$B_imgRight.hide();$shdowTxt.hide();
    })

    //左边的下面的图片导航列表点击选中,再次点击取消选中,且在右边已选择里面显示/移除
    $choosePhotoList.children("li").click(function(){
            i = $(this).index()+1;
            var src3 = $(this).children("img:first-child").attr("src");

             src($(this).index());

           // 判断是否选择的精修照已达上限
            if(ff<$numTol){
                $(this).toggleClass("choosePhotoActive");
                $(this).find(".choosePhotoShdow").hide();
                if($(this).hasClass("choosePhotoActive")){
                    $choosedImg.append(
                        '<li id="'+i+'">'+
                        '<img src="'+src3+'" alt=""/>'+
                        '<div class="shdow"></div>'+
                        '<span class="f12">移除</span></li>'
                    )}
                else
                {

                    $("#"+i+"").remove();
                }
                changeTxt($(this).index());
            }else if($(this).hasClass("choosePhotoActive"))
            {
                $(this).removeClass("choosePhotoActive");
                $("#"+i+"").remove();
                changeTxt($(this).index());

            }else{
                alert("您好!您选择数量已达上限!")
            };
            //右边的小图片移入显示,移出隐藏
            $choosedImg.children("li").hover(function(){
                $(this).addClass("fx_hover");
            },function(){
                $(this).removeClass("fx_hover");
            });
            $choosedImg.children("li").children("span").click(function(){
                $(this).parent("li").remove();
                var m = $(this).parent().attr("id");
                //alert(m);
                $("#f"+m+"").removeClass("choosePhotoActive");
                var gg = $choosedImg.children("li").length;
                //alert(len);
                $num.text(gg);
                if(gg==$numTol){
                    $(".photoConfirm").css({backgroundColor:"#E63736"});
                    $(".photoConfirm").addClass("hover");
                }else{
                    $(".photoConfirm").css({backgroundColor:"#666"});
                    $(".photoConfirm").removeClass("hover");
                }
                LED();
                return ff = gg;
            })
            var len = $choosedImg.children("li").length;
            //alert(len);
            $num.text(len);
            if(len==$numTol){
                $(".photoConfirm").css({backgroundColor:"#E63736"});
                $(".photoConfirm").addClass("hover");
            }else{
                $(".photoConfirm").css({backgroundColor:"#666"});
                $(".photoConfirm").removeClass("hover");
            }
        changeTxt($(this).index());
        LED();
            return ff = len;
    });
    $(".photoConfirm").click(function(){
        if(ff == $numTol){
            alert("aaa");
        }else{
           return false;
        }
    })
	/*
    //确认精修  提取出已选图片
    $("#photoConfirm").click(function(){
        var arr = [];
       $("#choosedImg li").each(function(){
           var src = $(this).find("img").attr("src");
           arr.push(src);
       })
        alert(arr);
    })
	*/
//左边的图片列表移入背景蒙版消失,移出蒙版出现
    $choosePhotoList.children("li").hover(function(){

        $(this).find(".choosePhotoShdow").hide();

    },function(){
        LED();
        });
//加载进来时显示第一张图片
    var src1 = $("#Simgs li>img:first-child").eq(0).attr("src");
    $("#imgShow").attr("src",src1);
//点击左右箭头  替换图片  并判断是否到头
//    var iNow = 1;
    $("#Simgs li").eq(0).addClass("choosePhotoActive2").siblings().removeClass("choosePhotoActive2");
    $B_imgLeft.click(function(){
        if(srcIndexY === 0)
        {
            //$("#Simgs li").eq(0).addClass("choosePhotoActive").siblings().removeClass("choosePhotoActive2");
            return false;
        }
        else
        {
            srcIndexY--;
            changeTxt(srcIndexY);
            src(srcIndexY);

            var findex = srcIndexY+1;
            //alert("aaa");
            Change(findex);
            aLi(srcIndexY).find(".choosePhotoShdow").hide();

        }
        LED();
        return srcIndexY;

    })
    $B_imgRight.click(function(){
        if(srcIndexY >= aLi.length)
        {
            //alert("已经是最后一张了!");
            return false;
        }
        else
        {
            srcIndexY++;
            changeTxt(srcIndexY);
            src(srcIndexY);
            var findex = srcIndexY+1;
            if(srcIndexY == aLi.length){
                Change(findex-1);
                return srcIndexY=srcIndexY-1 ;
            }else{
                Change(findex);
            }


        }
        LED();
        return srcIndexY;

    })
//点击导航左右箭头移动图片,并判断是否到头
    var FF1 = $(document).width();
    var FF2 = eval($("#choosephotosBox").width());
    var FF3 = eval($("#B1").width())/100*FF2;
    var FF4 = eval($("#Simgs").width())/100*FF3;//导航显示图片的div宽度
    //alert(FF1);
    //alert(FF2);
    //alert(FF3);
    //alert(FF4);
    var liWidth = aLi.width()+8;//单个图片宽度
    $("#choosePhotoList").css("width",(liWidth)*aLi.length);
    var TotleWidth = parseInt($("#choosePhotoList").css("width"));//ul的总宽度
    $(".S_imgRight").click(function(){
        var ulLeft = parseInt($("#choosePhotoList").css("left"));//ul左移的距离
        var Leave = TotleWidth+ulLeft;//ul左移后剩余的距离
        //alert(Leave);
        if(Leave <= FF4){
            //alert("已经到头了");
            return false;
        }
        else{
            $("#choosePhotoList").stop().animate({"left":(ulLeft-liWidth)},300);
        }

    })

    $(".S_imgLeft").click(function(){
        var ulLeft = parseInt($("#choosePhotoList").css("left"));
        if(ulLeft >= 0){
            //alert("已经到头了");
            $("#choosePhotoList").css({left:0});
            return false;
        }
        else{
            $("#choosePhotoList").stop().animate({"left":(ulLeft+liWidth)},300);
        }
    })

};
//在线选片选择精修照 js 结束

//在线选片 查看精修照js start
function chooseClothCheck(){
    var $imgsShow = $("#imgsShow");
    var $B_imgLeft = $(".B_imgLeft");
    var $B_imgRight = $(".B_imgRight");
    var $Check_photosBox = $("#Check_photosBox");
    var $shdow = $(".shdow");
    var aLi = $(".imgs li");
    var $Check_photosBoxImgs = $("#Check_photosBoxImgs");
    var $Clicked_photo = $("#Clicked_photo");

//自移动的导航 开始
var fnum = 12;  //导航显示的个数
var flen = aLi.length;   //导航的总数
var fw = aLi.width()+8;  //导航中单个li的宽度
function Change(findex){
    if(findex < fnum){//一半以前
        $Check_photosBoxImgs.animate({left: 0});  //靠左
    }else if(fnum<= findex <=flen-fnum){ ////当前+显示长度  <= 导航个数
        $Check_photosBoxImgs.animate({left: -(findex-fnum)* fw});//向左移动当前加一个
    }

}

//自移动的导航 结束

//水平居中显示
    $Check_photosBox.css("left",($(document).width()-$Check_photosBox.width())/2);
//移入显示,移出隐藏
    $imgsShow.hover(function(){
        $B_imgLeft.show(),$B_imgRight.show(),$shdow.show();
    },function(){
        $B_imgLeft.hide(),$B_imgRight.hide(),$shdow.hide();
    });
//点击导航  图片切换成当前图片
    var iNow = null;
    //设置全局变量,共全局使用

    $Check_photosBoxImgs.children("li").each(function()
    {
        $(this).stop().click(function(){
            //alert($(this).index());
            iNow = $(this).index()+1;
            $(this).addClass("choosePhotoActive").siblings().removeClass("choosePhotoActive");
            var src3 = $(this).find("img").attr("src");
            //alert(src3);
            $Clicked_photo.attr("src",src3);
            return iNow = iNow-1;
        })
    }) ;
//加载进来时显示第一张图片
    var src1 = $("#Simgs li>img:first-child").eq(0).attr("src");
    $("#Clicked_photo").attr("src",src1);
//点击左右箭头  替换图片  并判断是否到头
//点击上面大的左右箭头  替换图片  并判断是否到头
    $B_imgLeft.stop().click(function(){
        //alert(iNow);
        if(iNow === 0)
        {
            //alert("已经是第一张了!");
            return false;
        }
        else
        {
            iNow--;
            var index = iNow;
            Change(index+1);
            //alert(index);
            var src2 = $("#Simgs li>img:first-child").eq(index).attr("src");
            $Clicked_photo.attr("src",src2);
            aLi.eq(index).addClass("choosePhotoActive").siblings().removeClass("choosePhotoActive");

        }
    })


    $B_imgRight.click(function(){
        //alert(iNow);
        if(iNow >= aLi.length-1)
        {
            //alert("已经是最后一张了!");
            return false;
        }
        else
        {
            iNow++;
            var index = iNow;
            Change(index+1);
            var src2 = $("#Simgs li>img:first-child").eq(index).attr("src");
            $Clicked_photo.attr("src",src2);
            aLi.eq(index).addClass("choosePhotoActive").siblings().removeClass("choosePhotoActive");

        }

    })


//点击导航左右箭头移动图片,并判断是否到头
    var FF1 = $(document).width();
    var FF2 = eval($("#Check_photosBox").width());
    var FF4 = eval($("#Simgs").width())/100*FF2;//导航显示图片的div宽度
    //alert(FF1);
    //alert(FF2);
    //alert(FF3);
    //alert(FF4);
    //动态改变 图片的盒子宽度
    var liWidth = aLi.width()+8;//单个图片宽度
    //alert(liWidth);
    $("#Check_photosBoxImgs").css("width",(liWidth)*aLi.length);
    var TotleWidth = parseInt($("#Check_photosBoxImgs").css("width"));//图片父级ul的总宽度
    $(".S_imgRight").click(function(){
        var ulLeft = parseInt($("#Check_photosBoxImgs").css("left"));//ul向左移动的距离
        //alert(ulLeft);
        var Leave = TotleWidth+ulLeft;
        //alert(Leave);
        if(Leave <= FF4){
            //alert("已经到头了");
            return false;
        }
        else{
            $("#Check_photosBoxImgs").stop().animate({"left":(ulLeft-liWidth*4)},300);
        }

    })

    $(".S_imgLeft").click(function(){
        var ulLeft = parseInt($("#Check_photosBoxImgs").css("left"));
        if(ulLeft >= 0){
            //alert("已经到头了");
            $("#Check_photosBoxImgs").css({left:0});
            return false;
        }
        else{
            $("#Check_photosBoxImgs").stop().animate({"left":(ulLeft+liWidth*4)},300);
        }
    })
}
////在线选片 查看精修照js end

