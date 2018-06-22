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
                <a class="active" href="index.php?g=Portal&m=cost&a=orderlst">我的订单</a>
                <a href="index.php?g=Portal&m=Oneroadpay&a=qianbao">我的钱包</a>
                <a href="index.php?g=Portal&m=Userinfo&a=yhjuan">我的优惠券</a>
            </div>

        </div>
        <div class="tiaojian-box">
            <div class="sel-mode">
                <input type="text" class="fw-input" placeholder="商品名称" name=""/>
            </div>
            <!--/*公用输入框样式 */-->
            <div class="sel-mode c-fp-sel-wrap statusSelect">
                <div class="c-fp-sel-box c-cx-width">
                    <input type="text" readonly="readonly" class="c-fp-sel-value" placeholder="商标类型"/>
                    <span class="downUp"></span>
                    <div class="c-fp-sel-p c-cx-width">
                        <P class="active">注册商标</P>
						<P class="active">驳回复审</P>
						<P class="active">商标转让</P>
						<P class="active">商标变更</P>
						<P class="active">异议答辩</P>
                    </div>
                </div>
                <div class="cb"></div>
            </div>
            <!--/*公用输入框样式 end*/-->
            <!--/*公用输入框样式 */-->
            <div class="sel-mode c-fp-sel-wrap sbLei">
                <div class="c-fp-sel-box c-cx-width">
                    <input type="text" readonly="readonly" class="c-fp-sel-value" placeholder="状态"/>
                    <span class="downUp"></span>
                    <div class="c-fp-sel-p c-cx-width">
                        <P class="active">代付款</P>
						<P class="active">已付款</P>
						<P class="active">已取消</P>
                    </div>
                </div>
                <div class="cb"></div>
            </div>
            <!--/*公用输入框样式 end*/-->
            <div class="sel-mode">
                <input type="submit" class="blue-big-btn" value="搜索"/>
            </div>
            <div class="cb"></div>
        </div>
		<?php if(is_array($zcorder)): foreach($zcorder as $key=>$vo): ?><!--待支付-->
       <div class="f12 c999 pt20 pb10">
           <span class="mr10">时间：<?php echo date('Y-m-d H:i:s',$vo['addtime'])?></span>
           <span>订单号：<?php echo ($vo["order_no"]); ?></span>
       </div>
        <!--商标-->
        <div class="brand-box">
            <table class="brand-table c333">
                <tr class="bt-tr1 bg5 c999">
                    <td style="width:9%;">图标样式</td>
                    <td style="width:26%;">商标名称</td>
                    <td style="width:10%;">金额</td>
                    <td style="width:14%;">订单类型</td>
                    <td style="width:13%;">状态</td>
                    <td style="width:28%;">阶段</td>
                </tr>
               
				 <tr>
                    <td class="brand-logo"><img src="<?php echo ($vo["mark"]["0"]["markimage"]); ?>" alt=""/></td>
                    <td><?php echo ($vo["mark"]["0"]["markname"]); ?></td>



                    <td rowspan="<?php echo ($vo["num"]); ?>"><?php echo ($vo["summary_price"]); ?>元</td>
                    <td rowspan="<?php echo ($vo["num"]); ?>">
                    <?php if( $vo["type"] == '111222' ): ?>商标注册
					<?php elseif( $vo["type"] == '111666' ): ?>
                    驳回复审
					<?php elseif( $vo["type"] == '111333' ): ?>
                    转让
					<?php elseif( $vo["type"] == '111555' ): ?>
                    变更
					<?php elseif( $vo["type"] == '111888' ): ?>
                    异议
					<?php elseif( $vo["type"] == '111777' ): ?>
                    续展
					<?php elseif( $vo["type"] == '111444' ): ?>
                    许可<?php endif; ?>
                    </td>
                    <td rowspan="<?php echo ($vo["num"]); ?>">
                    <?php if( $vo["state"] == 0 ): ?>未支付
					<?php elseif( $vo["state"] == 1 ): ?>
                    已付款
					<?php elseif( $vo["state"] == 2 ): ?>
                    已取消订单
					<?php elseif( $vo["state"] == 3 ): ?>
                    已完成<?php endif; ?>
					</td>
                    <td rowspan="<?php echo ($vo["num"]); ?>" class="xq-order-hand">
                    <?php if( $vo["state"] == 0 ): ?><a href="<?php echo U('Oneroadpay/shoupay1',array('orderid'=>$vo['orderid']));?>">立即支付</a>
					<a href="javascript:;">取消订单</a>
					<a href="<?php echo U('Cost/orderpay_details',array('orderid'=>$vo['orderid']));?>">查看详情</a>
					<?php else: ?>
                    <a href="<?php echo U('Cost/orderpay_details',array('orderid'=>$vo['orderid']));?>">查看详情</a><?php endif; ?>
                    </td>
                </tr>
				<?php if(is_array($vo["mark"])): foreach($vo["mark"] as $k=>$vi): if($k != 0): ?><tr>
                    <td class="brand-logo"><img src="<?php echo ($vi["markimage"]); ?>" alt=""/></td>
                    <td><?php echo ($vi["markname"]); ?></td>
                </tr><?php endif; endforeach; endif; ?>
            </table>
        </div>
        <!--待支付 end--><?php endforeach; endif; ?>
    </div>
	 <!--翻页按钮"javascript:void(0);" onclick="js_method()"-->
			<div class="c-pages tc">
				<span>共<?php echo ($count); ?>条记录，<?php echo ($num); ?>页</span>
				<span><?php echo ($page); ?></span>
	        </div>
            <!--翻页按钮 end-->
<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script src="public/html/js/js.js"></script>
<script>

    $(".bgl-nav a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })

//    状态下拉
    statusSelect();
    function statusSelect(){
        var aP = $(".statusSelect .c-fp-sel-p p"); //下拉的p
        var apBox = $(".statusSelect .c-fp-sel-p"); //下拉的盒子
        var oValue = $(".statusSelect .c-fp-sel-value"); //选中值存放的地方
        var oBox = $(".statusSelect .c-fp-sel-box"); //最外层的盒子
        oBox.click(function(){
            $(this).toggleClass("active");
            if($(this).hasClass("active")){
                apBox.slideDown();
            }else{
                apBox.slideUp();
            }
        })
        aP.click(function(event){
            $(this).addClass("active").siblings().removeClass("active");
            var val = $(this).text();
            oValue.val(val);
            oBox.removeClass("active");
            apBox.slideUp();
            event.stopPropagation();
        })
    }

    sbLei();
    function sbLei(){
        var aP = $(".sbLei .c-fp-sel-p p"); //下拉的p
        var apBox = $(".sbLei .c-fp-sel-p"); //下拉的盒子
        var oValue = $(".sbLei .c-fp-sel-value"); //选中值存放的地方
        var oBox = $(".sbLei .c-fp-sel-box"); //最外层的盒子
        oBox.click(function(){
            $(this).toggleClass("active");
            if($(this).hasClass("active")){
                apBox.slideDown();
            }else{
                apBox.slideUp();
            }
        })
        aP.click(function(event){
            $(this).addClass("active").siblings().removeClass("active");
            var val = $(this).text();
            oValue.val(val);
            oBox.removeClass("active");
            apBox.slideUp();
            event.stopPropagation();
        })
    }
</script>
</body>
</html>