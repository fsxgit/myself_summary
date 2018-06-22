<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>家长监护</title>
    <link rel="stylesheet" href="/static/css/base.css"/>
    <link rel="stylesheet" href="/static/css/css.css"/>
</head>
<body>
<!--header-->
<div class="c-header">
    <div class="c-logo main oh">
        <img class="limg fl" src="/static/images/logo.png" alt=""/>
        <!--<span class="fl">消消乐</span>-->
        <div class="c-nav">
            <a href="<?php echo ('/');?>">首页</a>
            <i></i>
            <a href="<?php echo U('web/introduce');?>" >公司介绍</a>
            <i></i>
            <a href="<?php echo U('web/product');?>" >公司产品</a>
            <i></i>
            <a href="<?php echo U('web/tel');?>" >联系我们</a>
        </div>
        <span class="reglogin fr oh">
                <?php $user = session('userLoginS');if(empty($user)){ ?>
	<a href="<?php echo U('/register/login');?>">登录</a>
	<a href="<?php echo U('/register');?>">注册</a>
<?php }else{ ?>
	<a href="javascrpt:;">你好,<?php echo ($user["username"]); ?></a> <a href="<?php echo U('register/loginout');?>">退出</a> 
<?php } ?>

           </span>
        <span class="eye fr f12">本游戏适合18岁（含）以上玩家进入</span>
    </div>
</div>
<!--header end-->
<div class="custody-box main">
    <div class="custody-banner"><img src="/static/images/custody.jpg" alt=""/></div>
    <div class="custody-cont oh">
        <div class="custody-left fl">
            <div class="txt">“网络游戏未成年人家长监护工程”是一项由日月游戏平台根据国家有关规定而发起的一个项目，由中华人民共和国文化部指导，旨在加强家长对未成年人参与网络游戏的监护，引导未成年人健康、绿色参与网络游戏，和谐家庭关系的社会性公益行动。它提供了一种切实可行的方法，一种家长实施监控的管道，使家长纠正部分未成年子女沉迷游戏的行为成为可能。该项社会公益行动充分反映了中国网络游戏行业高度的社会责任感，对未成年玩家合法权益的关注及对用实际行动营造和谐社会的愿望。</div>
            <div class="intro-tit2">《未成年人健康参与网络游戏提示》</div>
            <div class="txt">随着网络在青少年中的普及，未成年人接触网络游戏已经成为普遍现象。为保护未成年人健康参与游戏，在政府进一步加强行业管理的前提下，家长也应当加强监护引导。为此，我们为未成年人参与网络游戏提供以下意见：</div>
                <p>一、主动控制游戏时间。游戏只是学习、生活的调剂，要积极参与线下的各类活动，并让父母了解自己在网络游戏中的行为和体验。</p>
                <p>二、不参与可能耗费较多时间的游戏设置。不玩大型角色扮演类游戏，不玩有PK类设置的游戏。在校学生每周玩游戏不超过2小时，每月在游戏中的花费不超过10元。</p>
                <p>三、不要将游戏当作精神寄托。尤其在现实生活中遇到压力和挫折时，应多与家人朋友交流倾诉，不要只依靠游戏来缓解压力。</p>
                <p>四、养成积极健康的游戏心态。克服攀比、炫耀、仇恨和报复等心理，避免形成欺凌弱小、抢劫他人等不良网络行为习惯。</p>
                <p>五、注意保护个人信息。包括个人家庭、朋友身份信息，家庭、学校、单位地址，电话号码等，防范网络陷阱和网络犯罪。</p>
            <div class="intro-tit2">家长监护申请流程</div>
            <div class="txt">家长监护系统充分考虑家长的实际需求，当家长发现自己的孩子玩游戏过于沉迷的时候，由家长提供合法的监护人资质证明、游戏名称账号、以及家长对于限制强度的愿望等信息，可对处于孩子游戏沉迷状态的账号采取几种限制措施，解决未成年人沉迷网游的不良现象，如限制孩子每天玩游戏的时间区间和长度，也可以限制只有周末才可以游戏，或者完全禁止。</div>
            <div class="stepsImg"><img src="/static/images/custody1.jpg" alt=""/></div>
        </div>
        <div class="custody-right fr">
            <div class="hb-tit bb">
                <span class="tit">监护服务申请文档下载</span>
            </div>
            <div class="shu">
                <p>附件1：《网络游戏未成年人家长监护申请书》</p>
                <p>附件2：《被监护人信息》</p>
                <p>附件3：《监护人信息》</p>
                <a href="<?php echo U('index/biao');?>" class="downbtn tc pt20"><img src="/static/images/downbtn.png" class="bc" alt=""/> </a>
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