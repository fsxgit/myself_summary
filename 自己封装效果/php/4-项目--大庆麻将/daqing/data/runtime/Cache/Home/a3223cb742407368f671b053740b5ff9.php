<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>公司介绍</title>
    <link rel="stylesheet" href="/static/css/base.css"/>
    <link rel="stylesheet" href="/static/css/css.css"/>
</head>
<body>
<!--header-->
<div class="c-header">
    <div class="c-logo main oh">
        <img class="fl" src="/static/images/icon3.png" alt=""/>
        <span class="fl">消消乐</span>
        <span class="fr f12">本游戏适合18岁（含）以上玩家进入</span>
    </div>
    <div class="c-nav">
        <div class="main">
    <a href="<?php echo ('/');?>">首页</a>
    <a href="<?php echo U('web/introduce');?>" >公司介绍</a>
    <a href="<?php echo U('web/product');?>" >公司产品</a>
    <a href="<?php echo U('web/tel');?>" >联系我们</a>
   <span class="reglogin fr oh">
        <?php $user = session('userLoginS');if(empty($user)){ ?>
	<a href="<?php echo U('/register/login');?>">登录</a>
	<a href="<?php echo U('/register');?>">注册</a>
<?php }else{ ?>
	<a href="javascrpt:;">你好,<?php echo ($user["username"]); ?></a> <a href="<?php echo U('register/loginout');?>">退出</a> 
<?php } ?>

   </span>
</div>
    </div>
</div>
<!--header end-->
<form action="" method="post">
<div class="pro-box main oh">
    <div class="intro-left">
        <div class="intro-tel bb">
    <div class="name">电话</div>
    <div>010-56230099</div>
</div>
<div class="intro-zhen">
    <div class="name">传真</div>
    <div>010-62971107</div>
</div>
    </div>
    <div class="intro-right">
        <div class="hb-tit bb">
            <span class="tit">登录</span>
        </div>
        <div class="reg-box">
            <!-- <div class="tit">个性账号</div> -->
            <div class="reg-input">
                <div><span class="input_tt">账号</span><input type="text" name="username" placeholder="6-12位字母和数字（必须填写）"/></div>
                <div><span class="input_tt">密码</span><input type="password" name="password" placeholder="6-12位字母和数字（必须填写）"/></div>
            </div>
            <div class="login_btn"><input type="submit" value="登录" /></div>
        </div>
    </div>
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
</body>
</html>