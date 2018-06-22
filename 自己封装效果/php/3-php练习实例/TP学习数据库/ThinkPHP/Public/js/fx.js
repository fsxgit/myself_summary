/**
 * Created by Administrator on 2016/4/21.
 */
function sub(){
    var ou = document.myForm.username;
    var op = document.myForm.password;
    var oc = document.myForm.code;
    if(ou.value=='' || op.value=='' || oc.value==''){
        alert("用户名，密码，验证码都不能为空！！");
    }else{
        alert("aaa");
        document.myForm.submit();
    }
}
