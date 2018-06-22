<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>费用设置-我的订单</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/brand.css"/>
</head>
<body>
    <div class="main-hou">
        <div class="brand-gl c333">
            <div class="bgl-nav bb">
                <a href="index.php?g=Portal&m=cost&a=orderlst">我的订单</a>
                <a class="active" href="index.php?g=Portal&m=Oneroadpay&a=qianbao">我的钱包</a>
                <a href="index.php?g=Portal&m=Userinfo&a=yhjuan">我的优惠券</a>
            </div>
        </div>
        <div class="mt40 pt40">
            <div class="bc oh" style="width: 310px;">
                <div class="fl mr20"><img src="public/html/images/say.png" width="51" height="80" alt=""/></div>
                <div class="fl pt20 tl f14">
                    <p class="pb5">欢迎开通神州钱包</p>
                    <p>神州钱包专为中小企业提供金融服务</p>
                </div>
            </div>
            <div class="tc mt30">
                <a href = "index.php?g=Portal&m=Oneroadpay&a=roadlist">
					<input type="button" value="立即开通" class="blue-big-btn"/>
				</a>
            </div>
        </div>
    </div>
<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script>

    $(".bgl-nav a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
</script>
</body>
</html>