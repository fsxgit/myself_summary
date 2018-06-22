//初始化 方法
/**
 * 首页
 */
//设置pm
function pmSet(k){
    /**
     *
     * 000-050:优 rank1
     * 051-100:良 rank1
     * 101-150:轻度污染 rank2
     * 151-200:重度污染 rank2
     * 201-250:严重污染 rank3
     * 251-999:超重污染 rank3
     *
     */

    var pm = parseInt(k);
    var pmState = "";
    if(pm <= 50){
        pmState="优";
        $("#pmRank").addClass("rank1");
    }else if(pm >= 51 && pm <= 100){
        pmState="良";
        $("#pmRank").addClass("rank1");
    }else if(pm >= 101 && pm <= 150){
        pmState="轻度污染";
        $("#pmRank").addClass("rank2");
    }else if(pm >= 151 && pm <= 200){
        pmState="重度污染";
        $("#pmRank").addClass("rank2");
    }else if(pm >= 201 && pm <= 250){
        pmState="严重污染";
        $("#pmRank").addClass("rank3");
    }else{
        pmState="超重污染";
        $("#pmRank").addClass("rank3");
    }

    var pml = pm.toString().length;
    if( pml == 1){
        pm = "00"+pm;
    }else if(pml == 2){
        pm = "0"+pm;
    }
    $("#pmVal").text(pm);
    $("#pmState").text(pmState);
}
//设置风速
function windSet(v){
    $("#windVal").text(v);
}


/**
 *  设置cookie
 *  当exdays值为空时，则表示未设置cookie过期时间，也就是关闭浏览器时，cookie失效
 *  获取cookie
 *  删除cookie
 */
function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+null;
    if(exdays){
        expires = "expires="+d.toGMTString();
    }
    document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}
function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null){
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }
}