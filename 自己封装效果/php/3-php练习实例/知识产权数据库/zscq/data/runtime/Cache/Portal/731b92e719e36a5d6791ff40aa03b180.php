<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>我的订单-详情</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/brand.css"/>
</head>
<body>
    <div class="brand-gl main-hou xq-feiyong c333">
        <div class="bread-nav">
            我的订单 > 订单详情
        </div>
        <div class="bgl-mode">
            <h1 class="c-h1">订单详情</h1>
            <div class="bgl-cont">
                <table class="brand-table c333">
                    <tr class="bt-tr1 bg5 c999">
                        <td style="width:15%;">订单号</td>
                        <td style="width:14%;">下单时间</td>
                        <td style="width:9%;">订单类型</td>
                        <td style="width:9%;">订单状态</td>
                        <td style="width:9%;">订单金额</td>
                        <td style="width:8%;">优惠金额</td>
                        <td style="width:9%;">应付总额</td>
                        <td style="width:27%;">操作</td>
                    </tr>
                    <tr>
                        <td><?php echo ($zcorder["order_no"]); ?></td>
                        <td><?php echo date('Y-m-d H:i:s',$zcorder['addtime']);?></td>
                        <td>
				
						<?php if( $zcorder["type"] == '111222' ): ?>商标注册
					<?php elseif( $zcorder["type"] == '111666' ): ?>
                    驳回复审
					<?php elseif( $zcorder["type"] == '111333' ): ?>
                    转让
					<?php elseif( $zcorder["type"] == '111555' ): ?>
                    变更
					<?php elseif( $zcorder["type"] == '111888' ): ?>
                    异议
					<?php elseif( $zcorder["type"] == '111777' ): ?>
                    续展
					<?php elseif( $zcorder["type"] == '111444' ): ?>
                    许可<?php endif; ?>
					    </td>
                        <td>
						
						<?php if( $zcorder["state"] == 0 ): ?>待付款
					    <?php elseif( $zcorder["state"] == 1 ): ?>
						已付款
						<?php elseif( $zcorder["state"] == 2 ): ?>
						已取消订单
						<?php elseif( $zcorder["state"] == 3 ): ?>
						已完成<?php endif; ?>
						</td>
                        <td><?php echo ($zcorder["summary_price"]); ?>元</td>
                        <td>0元</td>
                        <td class="fc2"><?php echo ($zcorder["summary_price"]); ?>元</td>
                        <td class="xq-order-hand">----</td>
                    </tr>
                </table>

            </div>
        </div>
        <div class="bgl-mode" style="display:none">
            <h1 class="c-h1">变更信息</h1>
            <div class="bgl-cont">
                <p class="oh"><span class="tit fl">申请人姓名变更为:</span><span class="fl">神州易桥（北京）财税科技有限公司</span></p>
                <p class="oh"><span class="tit fl">申请人地址变更为：</span><span class="fl">北京市海淀区清河中街68号华润五彩城购物中心二期13层</span></p>
            </div>
        </div>
        <div class="bgl-mode">
            <h1 class="c-h1">联系人信息</h1>
            <div class="bgl-cont">
                <p class="oh"><span class="tit fl">联系人:</span><span class="fl"><?php echo ($zcorder["customername"]); ?></span></p>
                <p class="oh"><span class="tit fl">手机号：</span><span class="fl"><?php echo ($zcorder["customermobile"]); ?></span></p>
            </div>
        </div>
        <div class="bgl-mode">
            <h1 class="c-h1">企业信息</h1>
            <div class="bgl-cont">
                <p class="oh"><span class="tit fl">企业名称:</span><span class="fl"><?php echo ($zcorder["applicantname"]); ?></span></p>
                <p class="oh"><span class="tit fl">注册地址：</span><span class="fl"><?php echo ($zcorder["applicantaddress"]); ?></span></p>
            </div>
        </div>
        <div class="bgl-mode pb30">
            <h1 class="c-h1">商标详情</h1>
			<?php if(is_array($nice)): foreach($nice as $k=>$vo): ?><div class="bb"></div>
            <div class="bgl-cont">
                <p class="oh"><span class="tit fl">商标图片:</span><span class="sb-xq-logo fl"><img src="<?php echo ($vo["markimage"]); ?>" alt=""/></span><span  class="sb-xq-logo-kan fl">查看商标</span></p>
                <p class="oh"><span class="tit fl">商标名称：</span><span class="fl"><?php echo ($vo["markname"]); ?></span></p>
                <p class="oh"><span class="tit fl">申请人姓名：</span><span class="fl"><?php echo ($zcorder["applicantname"]); ?></span></p>
                <p class="oh"><span class="tit fl">申请人地址：</span><span class="fl"><?php echo ($zcorder["applicantaddress"]); ?></span></p>
                <p class="oh"><span class="tit fl">类别：</span><span class="fl"><?php echo ($vo["one_code"]); echo ($zcorder["mark"]["0"]["one_code"]); ?></span></p>
                <div class="oh">
                    <div class="tit fl">小类：</div>
                    <div class="fl">
					<?php if(is_array($vo["three_code"])): foreach($vo["three_code"] as $key=>$vi): ?><p><?php echo ($vi); ?></p><?php endforeach; endif; ?>
            
                    </div>
                </div>
                <p class="oh"><span class="tit fl">官费：</span><span class="fl"><?php echo ($zcorder["official_price"]); ?>元</span></p>
                <p class="oh"><span class="tit fl">服务费：</span><span class="fl"><?php echo ($zcorder["service_price"]); ?>元</span></p>
            </div><?php endforeach; endif; ?>
        </div>
    </div>
</body>
</html>