<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>购买</title>
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
            <a href="<?php echo U('Home/Index/introduce');?>" >公司介绍</a>
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
<div class="main" style="padding-top: 20px;">
    <a href="javascript:history.go(-1);" ><img src="/static/images/back.png" alt=""/></a>
</div>
<div class="paybox main">
    <div class="pay_mode">
        <div class="tit">充值账号：</div>
        <div class="cont"><input class="pay_hao" type="text" placeholder="请输入房卡号"/></div>
    </div>
    <div class="pay_mode">
        <div class="tit">充值金额：</div>
        <div class="cont pay_labels">
            <span data-my="10">10元</span>
            <span data-my="20">20元</span>
            <span data-my="30" class="active">30元</span>
            <span data-my="50">50元</span>
            <span data-my="100">100元</span>
            <span data-my="200">200元</span>
            <span data-my="300">300元</span>
            <span data-my="500">500元</span>
        </div>
    </div>
    <div class="pay_mode">
        <div class="tit">购买数量：</div>
        <div class="cont"><input class="pay_num" type="number" value="1"/></div>
    </div>
    <div class="pay_mode">
        <div class="tit">应付款：</div>
        <div class="cont"><input class="pay_money" readonly type="text" value="30"/>元</div>
    </div>
    <div class="pay_mode">
        <div class="tit">充值方式：</div>
        <div class="cont pay_styles">
            <!--<span>银行卡</span>-->
            <!--<span class="active">支付宝</span>-->
            <span>微信支付</span>
        </div>
    </div>
    <div class="pay_mode">
        <div class="tit">扫码支付：</div>
        <div class="cont">
            <!--<div class="pay_style_box banks">-->
                <!--<a href="javascript:;"><img src="/static/images/b1.png" alt=""/></a>-->
                <!--<a href="javascript:;"><img src="/static/images/b2.png" alt=""/></a>-->
                <!--<a href="javascript:;"><img src="/static/images/b3.png" alt=""/></a>-->
                <!--<a href="javascript:;"><img src="/static/images/b4.png" alt=""/></a>-->
                <!--<a href="javascript:;"><img src="/static/images/b5.png" alt=""/></a>-->
            <!--</div>-->
            <div class="pay_style_box active">
                <img class="pay_ma" src="/static/images/ma.png" alt=""/>
            </div>
            <!--<div class="pay_style_box"></div>-->
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
<script>
    $(".pay_num").on("input propertychange",function(){
        var reg=/^(\d)+$/;
        var val = $(this).val();
        var a = reg.test(val);
        if(!a || val==0){
            $(".pay_num").val(1);
        }
        cal();

    });
    $(".pay_labels span").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        cal();
    });
    $(".pay_styles span").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    function cal(){
        var my = $(".pay_labels .active").data("my");
        var dw = $(".pay_num").val();
        var zong = my*dw;
        $(".pay_money").val(zong);
    }
</script>
</body>
</html>