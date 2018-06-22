<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>用户注册服务协议</title>
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
	<a href="<?php echo U('Home/register/login');?>">登录</a>
	<a href="<?php echo U('Home/register/index');?>">注册</a>
<?php }else{ ?>
	<a href="javascrpt:;">你好,<?php echo ($user["username"]); ?></a> <a href="<?php echo U('Home/register/loginout');?>">退出</a> 
<?php } ?>

           </span>
        <span class="eye fr f12">本游戏适合18岁（含）以上玩家进入</span>
    </div>
</div>
<!--header end-->
<div class="xy_box main">
    <a href="javascript:history.go(-1);"><img src="/static/images/back.png" alt=""/></a>
    <h1 class="tit">用户权益保障措施</h1>
    <p>根据《网络游戏管理暂行规定》（文化部令第49号），文化部制定《网络游戏服务格式化协议必备条款》。甲方为网络游戏运营企业，乙方为网络游戏用户。</p>
    <h1 class="tit"> 1.账号注册</h1>
    <p>1.1 乙方承诺以其真实身份注册成为甲方的用户，并保证所提供的个人身份资料信息真实、完整、有效，依据法律规定和必备条款约定对所提供的信息承担相应的法律责任。</p>
    <p>1.2 乙方以其真实身份注册成为甲方用户后，需要修改所提供的个人身份资料信息的，甲方应当及时、有效地为其提供该项服务。</p>
    <h1 class="tit"> 2.用户账号使用与保管</h1>
    <p>2.1 根据必备条款的约定，甲方有权审查乙方注册所提供的身份信息是否真实、有效，并应积极地采取技术与管理等合理措施保障用户账号的安全、有效；乙方有义务妥善保管其账号及密码，并正确、安全地使用其账号及密码。任何一方未尽上述义务导致账号密码遗失、账号被盗等情形而给乙方和他人的民事权利造成损害的，应当承担由此产生的法律责任.</p>
    <p>2.2乙方对登录后所持账号产生的行为依法享有权利和承担责任。</p>
    <p>2.3 乙方发现其账号或密码被他人非法使用或有使用异常的情况的，应及时根据甲方公布的处理方式通知甲方，并有权通知甲方采取措施暂停该账号的登录和使用。</p>
    <p>2.4 甲方根据乙方的通知采取措施暂停乙方账号的登录和使用的，甲方应当要求乙方提供并核实与其注册身份信息相一致的个人有效身份信息。</p>
    <p>2.4.1 甲方核实乙方所提供的个人有效身份信息与所注册的身份信息相一致的，应当及时采取措施暂停乙方账号的登录和使用。</p>
    <p>2.4.2甲方违反2.4.1款项的约定，未及时采取措施暂停乙方账号的登录和使用，因此而给乙方造成损失的，应当承担其相应的法律责任。</p>
    <p>2.4.3 乙方没有提供其个人有效身份证件或者乙方提供的个人有效身份证件与所注册的身份信息不一致的，甲方有权拒绝乙方上述请求。</p>
    <p>2.5 乙方为了维护其合法权益，向甲方提供与所注册的身份信息相一致的个人有效身份信息时，甲方应当为乙方提供账号注册人证明、原始注册信息等必要的协助和支持，并根据需要向有关行政机关和司法机关提供相关证据信息资料。</p>
    <h1 class="tit"> 3.服务的中止与终止</h1>
    <p>3.1乙方有发布违法信息、严重违背社会公德、以及其他违反法律禁止性规定的行为，甲方应当立即终止对乙方提供服务。</p>
    <p>3.2乙方在接受甲方服务时实施不正当行为的，甲方有权终止对乙方提供服务。该不正当行为的具体情形应当在本协议中有明确约定或属于甲方事先明确告知的应被终止服务的禁止性行为，否则，甲方不得终止对乙方提供服务。</p>
    <p>3.3乙方提供虚假注册身份信息，或实施违反本协议的行为，甲方有权中止对乙方提供全部或部分服务；甲方采取中止措施应当通知乙方并告知中止期间，中止期间应该是合理的，中止期间届满甲方应当及时恢复对乙方的服务。</p>
    <p>3.4 甲方根据本条约定中止或终止对乙方提供部分或全部服务的，甲方应负举证责任。</p>
    <h1 class="tit"> 4.用户信息保护</h1>
    <p>4.1 甲方要求乙方提供与其个人身份有关的信息资料时，应当事先以明确而易见的方式向乙方公开其隐私权保护政策和个人信息利用政策，并采取必要措施保护乙方的个人信息资料的安全。</p>
</div>


<!--footer-->

<!--footer-->
<div class="c-footer">
    <!--<div>公司介绍   |   联系我们</div>-->
	<div>健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活</div>
    <div>Copyright © 2016 hbyc.com All Rights Reserved  版权所有 · 大庆市优世网络科技开发有限公司</div>
    <div>备案编号：黑ICP备17000518号-1</div>
</div>
<!--footer end-->
<!--footer end-->
</body>
</html>