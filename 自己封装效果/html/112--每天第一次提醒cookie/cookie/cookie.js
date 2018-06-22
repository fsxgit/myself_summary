/**
 *
 * 这个不知道哪里有问题，不能删除cookie，反正有问题
 *
 *
 *
 *
 *  设置cookie
 *  当exdays值为空时，
 *      则表示未设置cookie过期时间：也就是关闭浏览器时，cookie失效
 *      exdays ：1、2、3、4.....表示若干天后失效；如果想设置长期有效，则可以设置为5年有效期或者更长。5*365*24*60*60
 *  cname : cookie 名字
 *  cvalue : cookie  值
 */
function setCookie(cname,cvalue,exdays){
    var d = new Date();
    var expires = "expires="+d.setTime(d.getTime()+(exdays*24*60*60*1000));
    if(exdays){
        expires = "expires="+d.toGMTString();
    }
    document.cookie = cname+"="+cvalue+"; "+expires;
}
/**
 *  获取cookie 值
 *  cname ： cookie 名字
 */
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}
/**
 *  删除cookie
 *  cname ： cookie 名字
 */
function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null){
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }
}