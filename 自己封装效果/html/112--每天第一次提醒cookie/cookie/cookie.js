/**
 *
 * �����֪�����������⣬����ɾ��cookie������������
 *
 *
 *
 *
 *  ����cookie
 *  ��exdaysֵΪ��ʱ��
 *      ���ʾδ����cookie����ʱ�䣺Ҳ���ǹر������ʱ��cookieʧЧ
 *      exdays ��1��2��3��4.....��ʾ�������ʧЧ����������ó�����Ч�����������Ϊ5����Ч�ڻ��߸�����5*365*24*60*60
 *  cname : cookie ����
 *  cvalue : cookie  ֵ
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
 *  ��ȡcookie ֵ
 *  cname �� cookie ����
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
 *  ɾ��cookie
 *  cname �� cookie ����
 */
function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null){
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }
}