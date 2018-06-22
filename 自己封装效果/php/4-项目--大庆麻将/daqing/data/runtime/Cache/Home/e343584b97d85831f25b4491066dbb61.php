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
<form action="" method="post">
<div class="login-box oh">
    <div class="login_icon"><img src="/static/images/logo4.png" alt=""/></div>
    <div class="login_txt">登录</div>
    <div class="login_input"><input type="text" class="user kong" name="username" placeholder="游戏账号"/></div>
    <div class="login_input"><input type="password" class="pass kong" name="password" placeholder="游戏密码"/></div>
    <div class="login_input_ts ts4"><span class="ts" >账号/密码不能为空</span></div>
    <div class="login_btn"><input type="button" class="suBtn" value="立即登录" /></div>
    <div class="login_reg">
        <span class="txt">没有账号？</span>
        <a href="<?php echo U('Home/Register/index');?>" class="txt">注册</a>
    </div>
</div>
</form>

<!--footer-->
<div class="c-footer">
    <!--<div>公司介绍   |   联系我们</div>-->
	<div>健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活</div>
    <div>Copyright © 2016 hbyc.com All Rights Reserved  版权所有 · 大庆市优世网络科技开发有限公司</div>
    <div>备案编号：黑ICP备17000518号-1</div>
</div>
<!--footer end-->

<script src="/static/js/jquery-1.9.1.min.js"></script>
<script>
    $(".login_input input").focus(function(){
        $(this).addClass("active");
    });
    $(".login_input input").blur(function(){
        $(this).removeClass("active");
    });

    $(".suBtn").click(function(){
        var m =1 ;
        $(".kong").each(function(){
            if($(this).val()==""){
                m=2;
                return false;
            }
        });

        if(m == 2){
            $(".ts4").show();
            setTimeout(function(){
                $(".ts4").hide();
            },1500);
        }else{
            $("form").submit();
        }
    })

</script>
</body>
</html>