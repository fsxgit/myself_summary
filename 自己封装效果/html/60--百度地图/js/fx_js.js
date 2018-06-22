/**
 * Created by Administrator on 2016/6/16.
 */
function delLabel(){
    var aHuo = document.getElementsByClassName("huo");
    for(var i = 0 ;i < aHuo.length; i++){
        aHuo[i].onmouseover = function(){
            this.getElementsByTagName("span")[0].style.display = "block";
            this.getElementsByTagName("span")[0].onclick = function(){
                alert(222);
            }
        }
        aHuo[i].onmouseout =function(){
            this.getElementsByTagName("span")[0].style.display = "none";
        }
    }
}


function isAdd(){
    var oWm1 =  document.getElementById("wm1");
    var oWm2 =  document.getElementById("wm2");
    var iSadd =  document.getElementsByClassName("iSadd")[0];
    oWm1.onclick = function(){
        if(oWm1.checked){
            iSadd.style.display = "block";
        }
    }
    oWm2.onclick = function(){
        iSadd.style.display = "none";
    }
}


function alertBox(){
    var oBtn = $("#btn");
    var oBtnAdd = $(".btnAdd");
    var oShdaw = $("#shdaw");
    var oBox = $("#box");
    var oClose = $("#close");
    oBtn.click(function(){
        oShdaw.show();
        oBox.show();
        L = ($(document).width()-oBox.width())/2;
        T = ($(window).height()-oBox.height())/2;
        oBox.css({left:L,top:T});
        $("body").eq(0).css("overflow","hidden");
    })
    oClose.click(function(){
        oShdaw.hide();
        oBox.hide();
        $("body").eq(0).css("overflow","auto");
    })
    oBtnAdd.click(function (){
        var oShdaw = $("#shdaw");
        var oBox = $("#box");
        alert(11);
        oShdaw.hide();
        oBox.hide();
    })

}