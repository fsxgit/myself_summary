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
            <a href="<?php echo U('web/introduce');?>" class="active">公司介绍</a>
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

<div class="intro-box main oh">
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
            <span class="tit">公司介绍</span>
        </div>
        <div class="intro-logo"><img src="/static/images/icon4.png" alt=""/></div>
        <div class="intro-txt intro-txt1">北京市海博远创科技有限公司是国内最早从事iOS\Android开发的公司，在移动互联网技术以及电子商务网站等领域处于国内领先地位。公司致力于成为国内最好的移动平台软件研发公司，客户包括中央电视台、中国电信、中国联通、中科院、新华社、中国好声音、总参总医院、花旗银行等。</div>
    </div>
</div>

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