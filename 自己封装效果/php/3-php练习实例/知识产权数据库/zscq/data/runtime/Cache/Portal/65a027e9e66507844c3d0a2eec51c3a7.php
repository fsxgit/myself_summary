<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>费用中心-优惠券</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/brand.css"/>
</head>
<body>
    <div class="main-hou">
        <div class="brand-gl c333">
            <div class="bgl-nav  bb">
                <a href="index.php?g=Portal&m=cost&a=orderlst">我的订单</a>
                <a href="index.php?g=Portal&m=Oneroadpay&a=qianbao">我的钱包</a>
                <a href="index.php?g=Portal&m=Userinfo&a=yhjuan" class="active">我的优惠券</a>
            </div>
        </div>
        <div class="list-gk-tab">
            <a href="index.php?g=Portal&m=userinfo&a=yhjuan&type=0">未使用</a>
            <a href="index.php?g=Portal&m=userinfo&a=yhjuan&type=1">已使用</a>
            <a class="active" href="index.php?g=Portal&m=userinfo&a=yhjuan&type=2">已过期</a>
        </div>
        <!--内容-->
        <div class="yh-box">
			<!--测试使用-->
            <div class="yhq yhq-mode1">
                <div class="yhq-top">
                    <p class="yhq-money"><?php echo ($arr["amount"]); ?></p>
                    <p class="yhq-ky"><?php echo ($arr["conditions"]); ?></p>
                    <p class="yhq-time"><?php echo ($arr["startDate"]); ?>-<?php echo ($arr["endDate"]); ?></p>
                </div>
                <div class="yhq-bot">
                    <p><span class="yhq-tit">使用商城</span>：<span><?php echo ($arr["shopType"]); ?></span></p>
                    <p><span class="yhq-tit lt">券名称</span>：<span><?php echo ($arr["name"]); ?></span></p>
                    <p><span class="yhq-tit">适用商品</span>：<span><?php echo ($arr["goodsTypes"]); ?></span></p>
                </div>
            </div>
        </div>
        <!--内容 end-->
    </div>
<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script>

    $(".bgl-nav a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })

    $(".list-gk-tab a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
</script>
</body>
</html>