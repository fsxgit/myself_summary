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
        <img class="fl" src="/static/images/icon3.png" alt=""/>
        <span class="fl">消消乐</span>
        <span class="fr f12">本游戏适合18岁（含）以上玩家进入</span>
    </div>
    <div class="c-nav">
        <div class="main">
            <a href="<?php echo ('/');?>">首页</a>
            <a href="<?php echo U('web/introduce');?>">公司介绍</a>
            <a href="<?php echo U('web/product');?>" class="active">公司产品</a>
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
    <div class="intro-right">
        <div class="hb-tit bb">
            <span class="tit">公司产品</span>
            <div class="buy_card">
                <a href="<?php echo U('web/pay');?>">购买房卡></a>
            </div>
        </div>
        <div class="products-box">
            <div class="oh">
                <div class="in-down">
                    <div class="fl"><img src="/static/images/icon3.png" alt=""/></div>
                    <div class="down-right fl">
                        <p>消消乐</p>
                        <a href="<?php echo U('download/fruit');?>" style="margin-top:12px;">下载</a>
                    </div>
                </div>
                <div class="in-down">
                    <div class="fl"><img src="/static/images/80.png" alt=""/></div>
                    <div class="down-right fl">
                        <p>八零麻将</p>
                        <a href="<?php echo U('download/bashi');?>" style="margin-top:12px;">下载</a>
                    </div>
                </div>
            </div>
            <div style="height:30px; background: #f5f5f5; margin: 30px 0;"></div>
            <div class="wanfa">
                <div class="txt">
                    <h1 class="tit">一、八零棋牌的玩法介绍</h1>
                    <p>1.游戏人数：4人。</p>
                    <p>2.游戏道具：麻将“筒”“条”“万”共108张。</p>
                    <p>3.玩家胡牌后，其余玩家继续游戏，直到流局或只有一
                        位未胡牌玩家为止。</p>
                    <p>4.胡牌时，手牌最多只有2种花色，否则不可以胡牌。</p>
                    <p>5.牌墙剩余4张牌时，能胡牌必须胡，不能跳过。</p>
                    <p>6.流局时查叫，即未叫玩家要赔偿有叫玩家最大可能
                        番数。（不含已胡牌玩家）</p>
                    <p>7.坐庄规则：上一局最先胡牌玩家当庄，如一炮多响则
                        点炮玩家为庄，流局则此局庄家的下家当庄。</p>
                </div>
                <div class="txt">
                    <h1 class="tit">二、术语解释</h1>
                    <p>1.定缺：摸牌结束后由玩家选择一种花色作为该局游戏
                        定缺的花色。游戏中必须优先打该花色的牌。</p>
                    <p>2.刮风（明杠）：分为直杠和面下杠（弯杠）
                        直杠：玩家手中有三张一样的牌，其他玩家打出此牌
                        ，该玩家选择杠。</p>
                    <p>面下杠：玩家已经碰出一对牌，又自摸到碰出的牌选
                        择杠，此时可以被其他玩家抢杠胡，若抢杠胡则此杠
                        不结算。</p>
                    <p>3.下雨（暗杠）：玩家手中含有4张相同的牌（未碰），
                        此时玩家选择杠。暗杠不可被抢杠胡。</p>
                    <p>4.过手胡：再某一回合中，若有人点炮，玩家没有胡，
                        则此回合有其他玩家点炮，只要没有加番就也不能胡
                        ，自摸除外。当该玩家摸牌，碰牌，杠牌后，过手胡
                        限制解除。</p>
                    <p>5.查大叫：流局时没叫的玩家陪给有叫的玩家最大可能
                        的番数，并刮风下雨不再结算。</p>
                    <p>6.自摸：玩家自摸胡牌时，赢得其他3位玩家的积分。</p>
                </div>
                <div class="txt">
                    <h1 class="tit">三、胡牌类型</h1>
                    <p>1.平胡（0番）：四坎（除4副刻子）加一对将。</p>
                    <p>2.对对胡(1番)：四副刻子加一对将。</p>
                    <p>3.清一色（2番）：全部是一种花色的平胡。</p>
                    <p>4.七对（2番）：玩家手牌都是对子，没有碰和刮风下雨。
                        特殊的七对，只是</p>
                    <p>5.龙七对（3番）：7对中含有4张相同牌且没有杠出。</p>
                    <p>6.清对（3番）：清一色+对对胡</p>
                    <p>7.清七对（4番）：清一色+七对</p>
                    <p>8.清龙七对（5番）：清一色+龙七对</p>
                    <p>9.天胡（5番）：庄家在游戏开始时直接胡牌，没有出牌。</p>
                    <p>10.地胡（5番）：在第一回合中，没有出现任何吃，碰，
                        杠，非庄家自摸胡牌。</p>
                </div>
                <div class="txt">
                    <h1 class="tit">四、番计算</h1>
                    <p>1.基本输（赢）积分=2的总番数次方（最大番数可由建房者选择）+刮风下雨</p>
                    <p>2.点炮结算方式为1对1，自摸结算方式为1对多。</p>
                    <p>3.另加番</p>
                    <p>根：+1番 所有牌中有4张一样的牌，（无论是否碰、杠），可累计计算。</p>
                    <p>杠上开花：+1番</p>
                    <p>杠上炮：+1番</p>
                    <p>抢杠胡：+1番</p>
                    <p>扫底胡：+1番</p>
                    <p>单钓：+1番</p>
                    <p>金钩胡：+1番</p>
                    <p>备注：<span class="zhu">各个牌型不重复计算，只收取最大番。</span></p>
                </div>
            </div>
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
</body>
</html>