<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>用户登陆页面</title>
    <link rel="stylesheet" href="__CSS__/fx.css"/>
    <!--上下等效-->
    <!--<link rel="stylesheet" href="__PUBLIC__/css/fx.css"/>-->
    <script src="__JS__/fx.js"></script>
    <!--上下等效-->
    <!--<script src="__PUBLIC__/js/fx.js"></script>-->
</head>
<body>
<form action="__URL__/do_login" method="post" name="myForm">
    用户名：<input type="text" name="username"/><br/>
    <br/>
    密　码：<input type="password" name="password"/><br/>
    <br/>
    验证码：<input type="text" name="code"/><img src="__APP__/Public/code" onclick="this.src=this.src+'?'+Math.random" alt=""/>
    <br/>
    <!--<input type="submit" value="提交"/>-->
    <!--<img src="__PUBLIC__/images/login.gif"  onclick="sub()" alt="提交"/>-->
    <input type="button" onclick="sub()" value="提交"/>
</form>

</body>
</html>