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
        <a href="<?php echo ('/');?>"><img class="limg fl" src="/static/images/logo.png" alt=""/></a>
        <!--<span class="fl">消消乐</span>-->
        <div class="c-nav">
            <a href="<?php echo ('/');?>">首页</a>
            <i></i>
            <a href="<?php echo U('Home/Index/introduce');?>"  class="active">公司介绍</a>
            <i></i>
            <a href="<?php echo U('Home/Index/product');?>" >公司产品</a>
            <i></i>
            <a href="<?php echo U('Home/Index/tel');?>" >联系我们</a>
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

<div class="intro-box oh">
    <div class="intro_banner">
        <img src="/static/images/prbanner.jpg" alt=""/>
    </div>
    <div class="intro-dq-txt">
       <div class="main">
           <p>大庆市优世网络科技开发有限公司主创团队于2016年正式注册：大庆市优世网络科技研发有限公司(简称优世网络)。是一家致力与网络游戏技术研发及提供可立即上线运营的棋牌游戏平台，是领先的网络棋牌游戏技术服务商，公司拥有一批在棋牌、互联网、软件行业具有丰富经验的管理人员，并拥有一支专注于棋牌业务、精通互联网和计算机软件的技术团队，为客户提供专业优质高效的网络棋牌游戏及定制开发服务。公司由曾服务于500强企业的IT技术团队和UI、UE设计团队、互联网精准营销团队组成，秉承团队大于一切，尊重客户体验，深挖客户需求，为传统企业通往移动互联搭建稳固桥梁。</p>
           <p>标志以展翅飞翔的图形为整体创意点，以“优世”的首字母Y+S组合形成展翅翱翔的标志突出品牌名称，形成独特的记忆点，加强受众对标志的识别，形成品牌传播的核心元素。完美传达出“优世网络科技”标志的品牌特性——自信的青春、飞翔的速度、共享的环境，优世科技以共享未来、永无止境的精神打造热情活力的事业平台。</p>
           <p>用软件实现您的梦想。</p>
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