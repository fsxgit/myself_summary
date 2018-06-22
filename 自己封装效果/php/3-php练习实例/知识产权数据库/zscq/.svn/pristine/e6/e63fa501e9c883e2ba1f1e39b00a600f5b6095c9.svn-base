<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>首页</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/index.css"/>
</head>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>顶部导航</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
</head>
<body>
<!--公用header-->
    <div class="c-header-2 oh">
        <div class="fl c-logo-2"><img src="public/html/images/logo2.png" width="141" height="40" alt=""/></div>
    <!--    <div class="fl c-step-2">找回密码</div>  -->
    <?php if($_COOKIE['code']){?>
        <div class="fr c-right-2 oh">
            已登录
            <input class="c-reg-2 fl" type="button" value="退出" onclick='reg()'/>
        </div>
    <?php }else{?>
        <div class="fr c-right-2 oh">
            <input class="c-log-2 fl" type="button" value="登录" onclick='login()'/>
            <input class="c-reg-2 fl" type="button" value="注册" onclick='reg()'/>
        </div>
    <?php }?>
    </div>
<!--公用header end-->
</body>
</html>
<script>
    function login(){
        location.href="index.php?g=Portal&m=Register&a=index";
    }
    function reg(){
        location.href="index.php?g=Portal&m=Login&a=index";
    }
</script>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>公用侧边栏</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
</head>
<body>
<!--公用右侧浮动导航-->
<div class="f-bar">
    <div class="bar-ma">
        <div class="bar-ma-img"><img src="public/html/images/ma.png" width="100" height="100" alt=""/></div>
    </div>
    <div class="bar-msg"></div>
    <div class="bar-top"><a href="javascript:window.scrollTo( 0, 0 );" ></a></div>
</div>
<!--公用右侧浮动导航 end-->
<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script src="public/html/js/js.js"></script>
<script>
    $(function(){
//      二维码的显示隐藏
        maTab();

    })
</script>
</body>
</html>
<body>
<!--公用header-->

<!--公用header end-->
<!--公用右侧浮动导航-->

<!--公用右侧浮动导航 end-->
<div class="index-search-box">
    <div class="main">
        <div class="is-h1">
            <img src="public/html/images/h1.png" width="502" height="107" alt=""/>
        </div>
        <!--公用企业搜索输入框-->
        <div class="search oh bc">
            <form action="<?php echo U('Portal/Index/search');?>" method='post' id='form'>
            <input type="text" class="s-in fl f14" placeholder="请输入您的企业名称" name='business_name'/>
            <span class="s-btn f16 cfff">
                <span onclick='dos()'>企业查询</span>
            </span>
            </form>
        </div>
        <!--公用企业搜索输入框 end-->
        <div class="is-step">
            <img src="public/html/images/img11.png" width="1198" height="141" alt=""/>
        </div>
    </div>
</div>
<div class="index-gl-box main">
    <h1 class="ig-h1">在这里，管理您的商标</h1>
    <h2 class="ig-h2">时刻帮您检测企业商标信息情况</h2>
    <div class="ig-mode-box">
        <div class="ig-mode active">
            <p class="img"><img src="public/html/images/ig1.png" width="142" height="142" alt=""/></p>
            <p class="name">专属顾问</p>
            <p class="txt">登录系统，认领您的企业，我们会为您分配一个专属顾问</p>
        </div>
        <div class="ig-mode">
            <p class="img"><img src="public/html/images/ig2.png" width="142" height="142" alt=""/></p>
            <p class="name">极速查询</p>
            <p class="txt">专属顾问电脑前待命，实时查询，3分钟内可出结果</p>
        </div>
        <div class="ig-mode">
            <p class="img"><img src="public/html/images/ig3.png" width="142" height="142" alt=""/></p>
            <p class="name">流程可视化</p>
            <p class="txt">办理流程全部可视化，并有消息提醒，让您清晰的知悉业务办理到哪一步</p>
        </div>
        <div class="ig-mode">
            <p class="img"><img src="public/html/images/ig4.png" width="142" height="142" alt=""/></p>
            <p class="name">商标检测</p>
            <p class="txt">续展监测，侵权监测，撤三监测，竞争对手监测，为您提供更好保护</p>
        </div>

    </div>
</div>
<div class="index-reg-box">
    <div class="main tc">
        <h1 class="ir-h1">商标注册流程</h1>
        <div class="ir-img"><img src="public/html/images/img12.jpg" width="1008" height="508" alt=""/></div>
    </div>
</div>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>公用底部</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
</head>
<body>
<!--公用底部-->
    <div class="c-bot">
        <div class="c-bot-top">
           <div class="oh main">
               <div class="bot-img img1">
                   <a href="javascript:;"><img src="public/html/images/bot1.png" width="252" height="60" alt=""/></a>
               </div>
               <div class="bot-img img2">
                   <a href="javascript:;"><img src="public/html/images/bot2.png" width="252" height="60" alt=""/></a>
               </div>
               <div class="bot-img img3">
                   <a href="javascript:;"><img src="public/html/images/bot3.png" width="252" height="60" alt=""/></a>
               </div>
               <div class="bot-img">
                   <a href="javascript:;"><img src="public/html/images/bot4.png" width="252" height="60" alt=""/></a>
               </div>
           </div>
        </div>
        <div class="c-bot-bot">
            <div class="main">
                <div class="c-bot-copy  fl">
                    <div class="copy1">
                        <a href="javascript:;">神州易桥集团</a>
                        <a href="javascript:;">企博士</a>
                        <a href="javascript:;">企采团</a>
                        <a href="javascript:;">应用云</a>
                        <a href="javascript:;">商学院</a>
                        <a href="javascript:;">积分宝</a>
                    </div>
                    <div class="copy2">
                        Copyright © 1998 - 2016 All Rights Reserved. 神州网版权所有  京ICP备10028182号 京公网安备110108400735号
                    </div>
                </div>
                <div class="c-bot-tel fr"><img src="public/html/images/tel2.png" alt=""/></div>
            </div>
        </div>
    </div>
<!--公用底部 end-->
</body>
</html>
<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script src="public/html/js/js.js"></script>
<script>
    $(function(){
//        二维码的显示隐藏
        maTab();
        $(".ig-mode").hover(function(){
            $(this).addClass("active").siblings().removeClass("active");
        })
    })
    
    function dos(){
        $("#form").submit();
    }
</script>
</body>
</html>