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
    <form action="<?php echo U('');?>" method="post">
    <div class="intro-right">
        <div class="hb-tit bb">
            <span class="tit">注册</span>
        </div>
        <div class="reg-box">
            <div class="tit">个性账号</div>
            <div class="reg-input">
                <div><span class="input_tt">账号</span><input type="text" name="username" placeholder="6-12位字母和数字（必须填写）"/></div>
                <div><span class="input_tt">密码</span><input type="password" name="password" placeholder="6-12位字母和数字（必须填写）"/></div>
            </div>
            <div class="tit">实名及防沉迷填写</div>
            <div class="reg-input">
                <div><span class="input_tt">姓名</span><input type="text" id="realname"  name="realname" placeholder="请输入真实姓名"/><span class="ts ts2" style="display: none;">请输入正确的姓名</span></div>
                <div><span class="input_tt">身份证号</span><input type="text"  name="idcard" placeholder="请输入与姓名相符的身份证号"/></div>
            </div>
            <div class="choose_xy pt20 pb10"><span class="xy_btn"></span><span>我已仔细阅读并接受 <a href="<?php echo U('web/xy1');?>">《用户服务协议》</a></span></div>
            <div class="choose_xy"><span class="xy_btn"></span><span>我已仔细阅读并接受 <a href="<?php echo U('web/xy2');?>">《网络游戏防沉迷协议及实名认证服务协议》</a></span></div>
            <div class="reg_btn"><input type="submit" value="接受协议并注册"/></div>
        </div>
    </div>
</form>
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
    $(".xy_btn").click(function(){
        $(this).toggleClass("active");
    });
    $("#realname").change(function(){
        var str = $(this).val();
        var reg = /[^\u0000-\u00FF]/;

        if(!reg.test(str)){
            $(".ts2").show();
            setTimeout(function(){
                $(".ts2").hide();
            },1000);
            $(this).val("");
        }
    })
</script>
</body>
</html>