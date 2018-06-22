<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>公司产品</title>
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
            <a href="<?php echo U('Home/Index/product');?>"  class="active">公司产品</a>
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
<div class="pro-box main oh">
    <div class="dq_pro-right fr">
        <div class="dq_pro_right_mode">
            <div class="hb-tit bb">
                <span class="tit">公司产品</span>
                <div class="buy_card">
                    <a href="<?php echo U('Home/Index/pay');?>">购买房卡></a>
                </div>
            </div>
            <div class="in-down in-down-pro oh">
                <div class="fl"><img src="/static/images/app.png"  alt=""/></div>
                <div class="down-right fl">
                    <p>大庆盘锦麻将</p>
                    <a href="https://fir.im/e4fj">下载</a>
                </div>
            </div>
        </div>
        <div class="dq_pro_right_mode">
            <div class="hb-tit bb">
                <span class="tit">联系我们</span>
            </div>
            <div class="dq_pro_tel">
                <div class="tels1 bb">电话：0459-6079913</div>
                <div class="tels2">手机：13555522333</div>
            </div>
        </div>
    </div>
    <div class="dq_pro-left fl">
            <div class="wanfa">
                <div class="txt">
                    <h1 class="dtit">大庆麻将玩法介绍</h1>
                    <h1 class="tit"> 一、胡牌条件</h1>
                    <p>1.胡牌必须两三色（红中不算色），清一色不能胡牌</p>
                    <p>2.听牌时，牌中必须有“幺九”</p>
                    <p>3.胡牌时，牌中至少有一组顺子牌（如：123万、345饼）</p>
                    <p>4.胡牌时，牌中至少有一组刻牌（刻牌：三张一样的牌，如：三个一万，三个红中）</p>
                    <p>5.胡牌时，必须是“开门”状态（开门：进行过吃、碰、杠，算是开门），门清不可以听牌</p>
                    <p>6.红中可以代替“幺九”和“刻牌”条件</p>
                    <p>7.无一炮多响，如果同时存在两个玩家胡牌，按照逆时针方向，顺序在前者优先胡牌。</p>
                </div>
                <div class="txt">
                    <h1 class="tit">二、房间选项介绍</h1>
                    <p>1.不夹不胡：勾选了改选项后，只可以胡“夹胡”，不允许胡边胡</p>
                    <p>2.3、7夹：勾选该选项后，当胡的方式为“边3”或者“边7”时，视为夹胡，否则视为边胡</p>
                    <p>3.单调夹：勾选了选项后，当胡牌的方式为单调胡时，视为夹胡，否则视为边胡</p>
                    <p>4.红中满天飞：勾选该选项后，上听后自摸摸到“红中”时，视为 摸宝胡</p>
                    <p>5.刮大风：勾选了选项，上听后自摸摸到手中的刻牌时，视为摸宝胡</p>
                    <p>6.带漏的：勾选了改选项：上听时要胡的牌与宝牌一致时，直接按照宝中宝胡牌（胡牌的方式视为“夹胡”，注：同时勾选“刮大风”选项时，刻牌与宝牌一致，同样可以漏上，同时勾选了红中漫天飞时，红中如果是宝，也直接可以漏上，“夹胡”按宝中宝算，“边胡”按摸宝中宝算）</p>
                    <p>7.支对：当胡牌的方式为“对倒”时，可选一对扣下，并只胡扣下的这一对，这叫做支对，按“夹胡”算</p>
                </div>
                <div class="txt">
                    <h1 class="tit">三、番数计算</h1>
                    <p>1.算番的方式有：“门清”“点炮”“庄家”“自摸”“夹胡”“摸宝胡”“宝中宝”每种方式都是*2倍。</p>
                    <p>2.点炮者包三家，即三家输的分数之和将由点炮者独自承担。</p>
                </div>
                <div class="txt">
                    <h1 class="tit">四、详细介绍</h1>
                    <p>1.边胡：当牌形如下，旁家打出2饼和5饼，算边胡</p>
                    <p><img src="/static/images/wf1.jpg" alt=""/></p>
                    <p>2.夹胡：当牌形如下，旁家打出3饼时，算夹胡</p>
                    <p><img src="/static/images/wf2.jpg" alt=""/></p>
                    <p>3.自摸：当牌形如下，上听后轮到自己摸牌，摸到3饼，算自摸</p>
                    <p><img src="/static/images/wf3.jpg" alt=""/></p>
                    <p>4.3、7夹：当胡牌牌形是1、2或8、9时，勾选了3、7夹后，算夹胡</p>
                    <p><img src="/static/images/wf4.jpg" alt=""/></p>
                    <p>5.单调夹：当听牌后，胡牌牌形是单调类型时，勾选了单调夹后，此牌型算夹胡（不勾选时算平胡 ）</p>
                    <p><img src="/static/images/wf5.jpg" alt=""/></p>
                    <p>6.支对：当听牌后，胡的牌是两组将牌（对子牌）时，算作对倒型牌，不算夹胡，但是勾选了支对玩法后，可以选一对牌扣下，并指定只胡这一对，这是算作夹胡</p>
                    <p><img src="/static/images/wf6.jpg" alt=""/></p>
                    <p>7.摸宝胡：如果当前的宝牌是3万，那么在上听后自摸，摸到3万视为摸宝胡</p>
                    <p><img src="/static/images/wf7.jpg" alt=""/></p>
                    <p>8．红中满天飞：如果勾选了红中满天飞选项，上听后自摸，摸到红中视为“红中满天飞”（摸宝胡）</p>
                    <p><img src="/static/images/wf8.jpg" alt=""/></p>
                    <p>9.大风：如果勾选了“带大风”选项，上听后自摸手中的刻牌，视为“摸大风”（摸宝胡）</p>
                    <p><img src="/static/images/wf9.jpg" alt=""/></p>
                    <p>10.宝中宝：上听后 ， 如果宝牌与要胡的牌是相同的牌的时候（需要胡“夹胡”）自摸摸到宝牌，则视为宝中宝</p>
                    <p><img src="/static/images/wf10.jpg" alt=""/></p>
                </div>
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