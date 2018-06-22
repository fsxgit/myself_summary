<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>公司介绍</title>
    <link rel="stylesheet" href="/static/css/base.css"/>
    <link rel="stylesheet" href="/static/css/css.css"/>
</head>
<body class="bfff">
<!--header-->
<div class="c-header">
    <div class="c-logo main oh">
        <a href="<?php echo ('/');?>"><img class="limg fl" src="/static/images/logo.png" alt=""/></a>
        <!--<span class="fl">消消乐</span>-->
        <div class="c-nav">
            <a href="<?php echo ('/');?>">首页</a>
            <i></i>
            <a href="<?php echo U('Home/Index/introduce');?>" >公司介绍</a>
            <i></i>
            <a href="<?php echo U('Home/Index/product');?>" >公司产品</a>
            <i></i>
            <a href="<?php echo U('Home/Index/tel');?>"  class="active">联系我们</a>
        </div>
        <span class="reglogin fr oh">
                <?php $user = session('userLoginS');if(empty($user)){ ?>
	<a class="hover1" href="<?php echo U('Home/register/login');?>">登录</a>
	<a class="hover2" href="<?php echo U('Home/register/index');?>">注册</a>
<?php }else{ ?>
	<a class="lgsuc" href="javascrpt:;">你好,<?php echo ($user["username"]); ?></a> <a class="hover2" href="<?php echo U('Home/register/loginout');?>">退出</a>
<?php } ?>

           </span>
        <span class="eye fr f12">本游戏适合18岁（含）以上玩家进入</span>
    </div>
</div>
<!--header end-->

<div class="tei_box">
    <div class="tel_banner">
        <h1>联系我们</h1>
    </div>
    <div class="tels_style_box pr main">
        <div class="tels_style">
            <div class="mode styles1">
                <div class="icon"></div>
                <div class="name">电话</div>
                <div class="txt">0459-6079913</div>
            </div>
            <div class="mode styles2">
                <div class="icon"></div>
                <div class="name">手机</div>
                <div class="txt">13555522333</div>
            </div>
            <div class="mode styles3">
                <div class="icon"></div>
                <div class="name">邮箱</div>
                <div class="txt">youshiwl007@163.com</div>
            </div>
            <div class="mode styles4">
                <div class="icon"></div>
                <div class="name">QQ</div>
                <div class="txt">2938181059</div>
            </div>
        </div>
    </div>

</div>

<!--footer-->
<div class="c-footer">
    <!--<div>公司介绍   |   联系我们</div>-->
	<div>健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活</div>
    <div>Copyright © 2016 hbyc.com All Rights Reserved  版权所有 · 大庆市优世网络科技开发有限公司</div>
    <div>备案编号：黑ICP备17000518号-1</div>
</div>
<!--footer end-->
</body>
</html>