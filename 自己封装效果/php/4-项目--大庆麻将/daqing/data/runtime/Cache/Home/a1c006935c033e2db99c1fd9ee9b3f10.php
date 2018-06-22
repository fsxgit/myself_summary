<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>公司介绍</title>
    <link rel="stylesheet" href="/static/css/base.css"/>
    <link rel="stylesheet" href="/static/css/css.css"/>
    <style>
        html,body{width: 100%; height:100%; background: none;}
        html{background: url("/static/images/loginbg.jpg") no-repeat 0 0; background-size:100% 100%; }
        .c-footer{background: none; position: absolute; left:0; bottom:0; width: 100%;}
    </style>
</head>
<body>
<div class="login_logo main"><a href="/"><img src="/static/images/logo3.png" alt=""/></a></div>
<form action="<?php echo U('');?>" method="post">
    <div class="register-box oh">
        <div class="login_icon"><img src="/static/images/logo4.png" alt=""/></div>
        <div class="login_txt">个性账号</div>
        <div class="login_input"><input type="text" class="user" name="username" placeholder="请输入6-12位字符或数字的账号"/></div>
        <div class="login_input_ts ts3"><span class="ts ts2" >账号格式不正确</span></div>
        <div class="login_input"><input type="password" class="pass" name="password" placeholder="请输入6-12位字符或数字的密码"/></div>
        <div class="login_input_ts ts4"><span class="ts ts2" >密码格式不正确</span></div>
        <div class="login_txt2">实名及防沉迷填写</div>
        <div class="login_input">
            <input type="text" id="realname" class="realname"  name="realname" placeholder="请输入真实姓名"/>
        </div>
        <div class="login_input_ts ts1"><span class="ts ts2" >请输入正确的姓名</span></div>
        <div class="login_input"><input type="text" class="idcard"  name="idcard" placeholder="请输入正确的身份证号"/></div>
        <div class="login_input_ts ts2"><span class="ts ts2" >请输入正确身份证号</span></div>
        <div class="choose_xy">
            <span class="xy_btn"></span><span>我已仔细阅读并接受 <a href="<?php echo U('web/xy1');?>">《用户服务协议》</a></span>
        </div>
        <div class="choose_xy">
            <span class="xy_btn"></span><span>我已仔细阅读并接受
            <a href="<?php echo U('web/xy2');?>">《网络游戏防沉迷协议及实名认证服务协议》</a>
        </span>
        </div>
        <div class="login_btn"><input type="submit" value="接受协议并注册"/></div>

    </div>
</form>

<!--footer-->
<div class="c-footer">
    <!--<div>公司介绍   |   联系我们</div>-->
	<div>健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活</div>
    <div>Copyright © 2011 hbyc.com All Rights Reserved  版权所有 · 北京海博远创软件科技有限公司</div>
    <div>备案编号：京ICP备11043388号</div>
</div>
<!--footer end-->
<script src="/static/js/jquery-1.9.1.min.js"></script>
<script>
    $(".xy_btn").click(function(){
        $(this).toggleClass("active");
    });
//    验证姓名
    $("#realname").change(function(){
        var str = $(this).val();
        var reg = /[^\u0000-\u00FF]/;

        if(!reg.test(str)){
            $(".ts1").show();
            setTimeout(function(){
                $(".ts1").hide();
            },1500);
            $(this).val("");
        }
    });

    $(".login_input input").focus(function(){
        $(this).addClass("active");
    });
    $(".login_input input").blur(function(){
        $(this).removeClass("active");
    });

//验证身份证号
    $(".idcard").change(function(){
        var str = $(this).val();
        var reg = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;

        if(!reg.test(str)){
            $(".ts2").show();
            setTimeout(function(){
                $(".ts2").hide();
            },1500);
        }
    });

//验证用户名
    $(".user").change(function(){
        var str = $(this).val();
        var reg = /^[A-Za-z0-9]{6,12}$/;

        if(!reg.test(str)){
            $(".ts3").show();
            setTimeout(function(){
                $(".ts3").hide();
            },1500);
        }
    });
//    验证密码
    $(".pass").change(function(){
        var str = $(this).val();
        var reg = /^[a-zA-Z0-9]{6,12}$/;

        if(!reg.test(str)){
            $(".ts3").show();
            setTimeout(function(){
                $(".ts3").hide();
            },1500);
        }
    });
</script>
</body>
</html>