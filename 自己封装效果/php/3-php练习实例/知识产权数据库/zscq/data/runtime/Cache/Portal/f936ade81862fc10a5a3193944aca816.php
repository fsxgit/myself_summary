<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>费用中心-我的钱包</title>
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
        <div class="bgl-mode mt40">
            <h1 class="c-h1">账户余额 
				<a class="yuea" href = "index.php?g=Portal&m=Oneroadpay&a=czpass">
					<span class="f12 fr">修改账户密码</span>
				</a>
			</h1>
            <div class="bgl-cont">
                <div class="oh">
                    <span class="qb-now-money fl">￥<?php echo ($yue); ?></span>
                    <a href = "index.php?g=Portal&m=oneroadpay&a=chongzhi">
						<input type="button" class="blue-small-btn fl mr10 ml10" value="充值"/>
					</a>
                    <a href = "index.php?g=Portal&m=oneroadpay&a=tixian">
						<input type="button" class="write-small-btn fl" value="提现"/>
					</a>
                </div>
            </div>
        </div>
        <div class="bgl-mode">
            <h1 class="c-h1">银行卡</h1>
            <div class="bgl-cont">
                <div class="oh pt20 pb20">
					<?php if(is_array($kalist)): foreach($kalist as $k=>$vo): ?><div class="yh-mode">
							<div class="yh-logo fl">
								<img src="public/html/images/icon37.png" alt=""/>
							</div>
							<div class="yh-name fl f14"><?php echo ($vo["bankName"]); ?> 
								<span class="c999 f12"><?php echo ($vo["bankCardNo"]); ?></span>
							</div>
						</div><?php endforeach; endif; ?>
                    <div class="yh-mode-add">
                           <a href = "index.php?g=Portal&m=Oneroadpay&a=roadlist"> + 添加银行卡</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="bgl-mode">
            <h1 class="c-h1">最新订单</h1>
            <div class="bgl-cont">
                <table class="qb-table">
                    <tr class="tr1">
                        <td style="width:8%;">序号</td>
                        <td style="width:16%;">时间</td>
                        <td style="width:10%;">金额</td>
                        <td style="width:14%;">操作后余额</td>
                        <td style="width:25%;">方式</td>
                    </tr>
					<?php if(is_array($jilulist)): foreach($jilulist as $k=>$vo): ?><tr>
							<td><?php echo ($k+1); ?></td>
							<td><?php echo ($vo["creatTimeFormat"]); ?></td>
							<td><span class="fc2"><?php echo ($vo["amount"]); ?>元</span></td>
							<td><?php echo ($vo["balance"]); ?></td>
							<td><?php echo ($vo["orderName"]); ?></td>
						</tr><?php endforeach; endif; ?>
                </table>
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