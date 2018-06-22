<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>首页</title>
    <link rel="stylesheet" href="/static/css/base.css"/>
    <link rel="stylesheet" href="/static/css/css.css"/>
    <link rel="stylesheet" href="/static/css/swiper-3.4.2.min.css"/>
    <style>
        .swiper-pagination-bullet{width:14px; height: 14px;}
    </style>
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
            <a href="<?php echo ('/');?>" class="active">首页</a>
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
<div class="banner">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="/static/images/banner.jpg" alt=""/>
            </div>
            <div class="swiper-slide">
                <img src="/static/images/banner1.jpg" alt=""/>
            </div>
            <div class="swiper-slide">
                <img src="/static/images/banner2.jpg" alt=""/>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</div>
<div class="bfff pt30 pb40">
    <div class="in-box main">
        <div class="in-top">
            <div class="in-top-left">
                <div class="hb-tit bb">
                    <!--<span class="tit">手机游戏下载</span>-->
                    <span class="tit">公司产品</span>
                    <a class="more" href="<?php echo U('/web/product');?>">更多</a>
                </div>
                <div class="in-down oh">
                    <div class="fl">
                        <img src="/static/images/icon3.png"  alt=""/>
                        <p>消消乐</p>
                    </div>
                    <div class="fr">
                        <img src="/static/images/80.png"  alt=""/>
                        <p>八零棋牌</p>
                    </div>

                </div>
            </div>
            <div class="in-top-right">
                <div class="hb-tit bb">
                    <span class="tit">公司介绍</span>
                    <a class="more" href="<?php echo U('/web/introduce');?>">更多</a>
                </div>
                <div class="js-box">
                    <div class="js-left">
                        <img src="/static/images/icon4.png" alt=""/>
                        <p class="userq"><span>用户权益保障</span></p>
                    </div>
                    <div class="js-right">北京市海博远创科技有限公司是国内最早从事iOS\Android开发的公司，在移动互联网技术以及电子商务网站等领域处于国内领先地位。公司致力于成为国内最好的移动平台软件研发公司，客户包括中央电视台、中国电信、中国联通、中科院、新华社、中国好声音、总参总医院、花旗银行等。</div>
                </div>
            </div>
        </div>
        <div class="in-bot">
            <div class="hb-tit bb">
                <span class="tit">家长监护工程</span>
                <a class="more" href="<?php echo U('/web/custody');?>">更多</a>
            </div>
            <div class="in-bot-txt">网络游戏未成年人家长监护工程”是一项由日月游戏平台根据国家有关规定而发起的一个项目，由中华人民共和国文化部指导，旨在加强家长对未成年人参与网络游戏的监护，引导未成年人健康、绿色参与网络游戏，和谐家庭关系的社会性公益行动。它提供了一种切实可行的方法，一种家长实施监控的管道，使家长纠正部分未成年子女沉迷游戏的行为成为可能。该项社会公益行动充分反映了中国网络游戏行业高度的社会责任感，对未成年玩家合法权益的关注及对用实际行动营造和谐社会的愿望。</div>
        </div>
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
<script src="/static/js/jquery-1.9.1.min.js"></script>
<script src="/static/js/swiper-3.4.2.jquery.min.js"></script>
<script>
    var Swiper1 = new Swiper('.swiper-container',{
        pagination : '.swiper-pagination',
        paginationClickable :true,
        autoplay: 4000,
        loop:true,
        autoplayDisableOnInteraction : false
    });
</script>
</body>
</html>