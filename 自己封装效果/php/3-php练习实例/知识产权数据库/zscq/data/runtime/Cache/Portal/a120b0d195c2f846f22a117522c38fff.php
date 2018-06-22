<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>订单确定-商标注册</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/search.css"/>
</head>
<body>
<div id="wrap">
<!--公用header-->
   
<!--公用header end-->
<!--公用右侧浮动导航-->
    
<!--公用右侧浮动导航 end-->

<!--s-content内容存放的地方-->
<form method="post" action="<?php echo U('Oneroadpay/shoupay');?>">
	

    <div class="s-content main pr">
        <!--公用结果 企业认领-->
            <div class="order-xinxi-box main">
                <!--基本信息 -->
                <div class="order-xinxi">
                    <div class="oh" >
						<div class="fl" style="width:48%;">
					<h1 class="xq-h1">联系人信息<span>我们会按照如下信息为您办理业务，请认真核对。</span></h1>
							<div class="ren-box">
								<p><span class="order-name c999">联系人：　</span><span class="order-cont xgNameValue" id="1"><?php echo ($info["customername"]); ?></span><span class="order-xg fc1" onclick="xgName()">修改</span></p>
								<p><span class="order-name c999">手机号：　</span><span  class="order-cont xgTelValue" id="2"><?php echo ($info["customermobile"]); ?></span><span class="order-xg fc1"  onclick="xgTel()">修改</span></p>
							</div>
						 </div>
						<div class="fr" style="width:48%;">
							<h1 class="xq-h1">企业信息<span>我们会按照如下信息为您办理业务，请认真核对。</span></h1>
							<div class="ren-box">
								<p><span class="order-name c999">企业名称：</span><span class="order-cont xgQiyeValue" id="3"><?php echo ($info["applicantname"]); ?></span><span class="order-xg fc1" onclick="xgQiye()">修改</span></p>
								<p><span class="order-name c999">注册地址：</span><span  class="order-cont xgSiteValue" id="4"><?php echo ($info["applicantaddress"]); ?></span><span class="order-xg fc1" onclick="xgZhuce()">修改</span></p>
							</div>
						</div>
                    </div>
                    <h1 class="xq-h1">选择优惠券</h1>
                    <div class="order-quan-box">
                        <div class="quan-wai active">
                            <div class="quan-nei cfff">
                                满200减100元
                            </div>
                        </div>
                        <div class="quan-wai">
                            <div class="quan-nei cfff">
                                满200减100元
                            </div>
                        </div>
                        <div class="quan-wai">
                            <div class="quan-nei cfff">
                                满200减100元
                            </div>
                        </div>
                    </div>
               </div>
                <!--基本信息 end-->
                <!--商标-->
                <div class="brand-box">
                    <h1 class="xq-h1">商品信息</h1>
                    <table class="good-table c333">
                        <tr class="bt-tr1 c999 bg8">
                            <td style="width:60px; padding-left:18px; padding-right: 18px">图标样式</td>
                            <td style="width:258px;">名称</td>
                            <td style="width:156px;">分类</td>
                            <td style="width:128px;">类型</td>
                            <td style="width:148px;">官费</td>
                            <td style="width:148px;">服务费</td>
                            <td style="width:226px;">小计</td>
                        </tr>
						<?php if(is_array($arr)): foreach($arr as $key=>$vo): ?><tr>
                            <td class="good-logo" onclick="ckdetail();"><img src="<?php echo ($vo["markimage"]); ?>" alt=""/></td>
                            <td><?php echo ($vo["markname"]); ?></td>
                            <td class="fc1">
							<?php if(is_array($vo["onecode"])): foreach($vo["onecode"] as $k=>$vi): if($k != 0 ): ?>,<?php endif; ?>
							<span onclick="xiangqing(<?php echo ($vi); ?>)" style="cursor: pointer;"><?php echo ($vi); ?></span><?php endforeach; endif; ?>
							<?php echo ($info["one_code"]); ?>
							</td>
                            <td><?php echo ($service["service_name"]); ?></td>
                            <td><?php echo ($vo["official_price"]); ?>元</td>
                            <td><?php echo ($vo["service_price"]); ?>元</td>
                            <td><?php echo ($vo["summary_price"]); ?>元</td>
                        </tr><?php endforeach; endif; ?>
                    </table>
                    <div class="order-total">
                        <table class="order-total-table">
                            <tr>
                                <td class="tj-tit c999">官费总计：</td>
                                <td class="fc2"><?php echo ($info["official_price"]); ?>元</td>
                            </tr>
                            <!--<tr>
                                <td class="tj-tit c999">已为您节省：</td>
                                <td>0元</td>
                            </tr>!-->
                            <tr>
                                <td class="tj-tit c999">服务费：</td>
                                <td><?php echo ($info["service_price"]); ?>元</td>
                            </tr>
                        </table>
                        <div class="cb"></div>
						<input type="hidden" name="orderid" value="<?php echo ($info["orderid"]); ?>">
                        <input type="submit" value="提交订单" class="order-tj-btn  blue-big-btn"/>
                    </div>
                </div>
                <!--商标 end-->
            </div>
        <!--公用结果 end-->
    </div>
	</form>
<!--s-content内容存放的地方-->
<!--弹出框 -->
    <div class="c-tan-shadow"></div>
    <!--修改名字弹出框-->
    <div class="c-tan-cont xg-ren-cont bc">
        <div class="c-tan-top oh">
            <div class="c-tan-Title fl">修改购买人</div>
            <div class="c-tan-close fr"><img src="public/html/images/close.png" class="img1" width="12" height="12" alt=""/><img src="public/html/images/closel.png" class="img2" width="12" height="12" alt=""/></div>
        </div>
        <!--弹出框需要修改的部分-->
        <div class="xg-ren bc">
            <input type="text" placeholder="请输入购买人名称" name="customername"/>
        </div>
        <!--弹出框需要修改的部分 end-->
        <div class="c-tan-bot bc">
            <input type="button" class="btn-ding  xg-sure" value="确定" onclick="save(1)"/>
        </div>
    </div>

    <!--修改名字弹出框 end-->

    <!--修改手机号弹出框-->
    <div class="c-tan-cont xg-tel-cont bc">
        <div class="c-tan-top oh">
            <div class="c-tan-Title fl">修改手机号</div>
            <div class="c-tan-close fr"><img src="public/html/images/close.png" class="img1" width="12" height="12" alt=""/><img src="public/html/images/closel.png" class="img2" width="12" height="12" alt=""/></div>
        </div>
        <!--弹出框需要修改的部分-->
        <div class="xg-ren bc">
            <input type="text" placeholder="请输入购买人手机号" name="customermobile"/>
        </div>
        <!--弹出框需要修改的部分 end-->
        <div class="c-tan-bot bc">
            <input type="button" class="btn-ding  xg-sure" value="确定" onclick="save(2)"/>
        </div>
    </div>

    <!--修改手机号弹出框 end-->

    <!--修改企业名称弹出框-->
    <div class="c-tan-cont xg-qiye-cont bc">
        <div class="c-tan-top oh">
            <div class="c-tan-Title fl">修改企业名称</div>
            <div class="c-tan-close fr"><img src="public/html/images/close.png" class="img1" width="12" height="12" alt=""/><img src="public/html/images/closel.png" class="img2" width="12" height="12" alt=""/></div>
        </div>
        <!--弹出框需要修改的部分-->
        <div class="xg-ren bc">
            <input type="text" placeholder="请输入企业名称" name="applicantname"/>
        </div>
        <!--弹出框需要修改的部分 end-->
        <div class="c-tan-bot bc">
            <input type="button" class="btn-ding  xg-sure" value="确定" onclick="save(3)"/>
        </div>
    </div>

    <!--修改企业名称弹出框 end-->

    <!--修改注册地址弹出框-->
    <div class="c-tan-cont xg-zhuce-cont bc">
        <div class="c-tan-top oh">
            <div class="c-tan-Title fl">修改注册地址</div>
            <div class="c-tan-close fr"><img src="public/html/images/close.png" class="img1" width="12" height="12" alt=""/><img src="public/html/images/closel.png" class="img2" width="12" height="12" alt=""/></div>
        </div>
        <!--弹出框需要修改的部分-->
        <div class="xg-ren bc">
            <input type="text" placeholder="请输入注册地址" name="applicantaddress"/>
        </div>
        <!--弹出框需要修改的部分 end-->
        <div class="c-tan-bot bc">
            <input type="button" class="btn-ding  xg-sure" value="确定" onclick="save(4)"/>
        </div>
    </div>

    <!--修改注册地址弹出框 end-->

    <!--修改名字弹出框 end-->
    <!--商标详情弹出框-->
    <div class="c-tan-cont bd-cont bc">
        <div class="c-tan-top oh">
            <div class="c-tan-Title fl">商标详情</div>
            <div class="c-tan-close fr"><img src="public/html/images/close.png" class="img1" width="12" height="12" alt=""/><img src="public/html/images/closel.png" class="img2" width="12" height="12" alt=""/></div>
        </div>
        <!--弹出框需要修改的部分-->
        <div class="brand-detail bc">
           <p class="oh"><span class="bd-tit fl">商标图片：</span><span class="brand-tan-logo  fl" id="sbtupian"></span></p>
           <p><span class="bd-tit">商标名称：</span><span id="sbmc"></span></p>
           <p><span class="bd-tit">申请人名称：</span><span><?php echo ($info["applicantname"]); ?></span></p>
           <p><span class="bd-tit">申请人地址：</span><span><?php echo ($info["applicantaddress"]); ?></span></p>
           <p><span class="bd-tit">类别：</span><span id="sblb"></span></p>
           <div class="oh">
               <div class="bd-tit fl">小类：</div>
               <div class="fl" id="sbxl">
                    <!--<p>申请人地址</p>-->
                    <!--<p>申请人地址</p>-->
                    <!--<p>申请人地址</p>-->
                    <!--<p>申请人地址</p>-->
                    <!--<p>申请人地址</p>-->
               </div>
           </div>
        </div>
        <!--弹出框需要修改的部分 end-->
        <div class="c-tan-bot bc">
            <input type="submit" class="btn-ding ck-btn" value="确定"/>
        </div>
    </div>
    <!--商标详情弹出框 end-->
    <!--查看详情弹出框-->
    <div class="c-tan-cont ck-cont bc">
        <div class="c-tan-top oh">
            <div class="c-tan-Title fl">商标详情</div>
            <div class="c-tan-close fr"><img src="public/html/images/close.png" class="img1" width="12" height="12" alt=""/><img src="public/html/images/closel.png" class="img2" width="12" height="12" alt=""/></div>
        </div>
        <!--弹出框需要修改的部分-->
        <div class="brand-detail brand-cha bc">
            <p><span class="bd-tit">被许可人名称（中文）：</span><span>神州易桥（北京）财税科技有限公司</span></p>
            <p><span class="bd-tit">被许可人地址：</span><span>北京市昌平区回龙观镇西大街118号1幢905室</span></p>
            <p><span class="bd-tit">被许可人邮编：</span><span>100000</span></p>
            <p><span class="bd-tit">联系人：</span><span>马小亮</span></p>
            <p><span class="bd-tit">电话：</span><span>18899875467</span></p>
            <p><span class="bd-tit">代理机构名称：</span><span>神州易桥（北京）财税科技有限公司</span></p>
            <p><span class="bd-tit">注册商标号：</span><span>23423550099</span></p>
            <p><span class="bd-tit">是否共有商标：</span><span>否</span></p>
            <p><span class="bd-tit">再许可：</span><span>否</span></p>
            <p><span class="bd-tit">许可期限：</span><span>2016年7月1日至2017年6月30日</span></p>

        </div>
        <!--弹出框需要修改的部分 end-->
        <div class="c-tan-bot bc">
            <input type="button" class="btn-ding ck-btn" value="确定"/>
        </div>
    </div>
    <!--查看详情弹出框 end-->
<!--弹出框 end-->


<!--公用底部
    <iframe src="footer.html" width="100%" height="440px" scrolling="no" frameborder="0"></iframe>
公用底部 end-->

</div>
<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script src="public/html/js/js.js"></script>
<script>
    $(function(){
        $(".quan-wai").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        })

    });
/**
修改基本信息
**/
function save(e){
	var customername = $('[name="customername"]').val();
    var customermobile = $('[name="customermobile"]').val();
	var applicantname = $('[name="applicantname"]').val();
    var applicantaddress = $('[name="applicantaddress"]').val();
	var orderid = $('[name="orderid"]').val();
   if(e=='1'){
       $.ajax({
		  type: "POST",
		  url: "<?php echo U('Brand/order_info_save');?>",
		  data: {'customername':customername,'orderid':orderid,'type':e},
		  success: function(msg){
			  if(msg=='1'){
                 $('#'+e).html(customername);
			  }
		  }
	   });
   }
   if(e=='2'){
       $.ajax({
		  type: "POST",
		  url: "<?php echo U('Brand/order_info_save');?>",
		  data: {'customermobile':customermobile},
		  success: function(msg){
			  if(msg=='1'){
                $('#'+e).html(customermobile);
			  }
		  }
	   });
   }
   if(e=='3'){
       $.ajax({
		  type: "POST",
		  url: "<?php echo U('Brand/order_info_save');?>",
		  data: {'applicantname':applicantname},
		  success: function(msg){
			  if(msg==''){
                $('#'+e).html(applicantname);
			    
			  }
		  }
	   });
   }
   if(e=='4'){
       $.ajax({
		  type: "POST",
		  url: "<?php echo U('Brand/order_info_save');?>",
		  data: {'applicantaddress':applicantaddress},
		  success: function(msg){
			  if(msg!=''){
                $('#'+e).html(applicantaddress);
			    
			  }
		  }
	   });
   }
}


//    修改名字弹出框
    function xgName(){
        var oShadow = $(".c-tan-shadow"); //遮罩层
        var oBox = $(".xg-ren-cont"); //弹出框
        var oClose = $(".c-tan-close"); //关闭弹出框按钮
        var oSure = $(".xg-sure");  //弹出框确定按钮

        var value = $(".xgNameValue").text();
        oBox.find(".xg-ren").find("input").val(value);

        var wW = $(window).width();
        var oW = oBox.width();

        var L = (wW - oW)/2;
        var T = 80;
        oBox.css({"left":L,"top":T});
        oBox.fadeIn();
        oShadow.show();
        oClose.click(function(){
            oBox.fadeOut();
            oShadow.hide();
        });
        oSure.click(function(){
            oBox.fadeOut();
            oShadow.hide();
        });
    }

//    修改电话弹出框
    function xgTel(){
        var oShadow = $(".c-tan-shadow"); //遮罩层
        var oBox = $(".xg-tel-cont"); //弹出框
        var oClose = $(".c-tan-close"); //关闭弹出框按钮
        var oSure = $(".xg-sure");  //弹出框确定按钮

        var value = $(".xgTelValue").text();
        oBox.find(".xg-ren").find("input").val(value);

        var wW = $(window).width();
        var oW = oBox.width();

        var L = (wW - oW)/2;
        var T = 80;
        oBox.css({"left":L,"top":T});
        oBox.fadeIn();
        oShadow.show();
        oClose.click(function(){
            oBox.fadeOut();
            oShadow.hide();
        });
        oSure.click(function(){
            oBox.fadeOut();
            oShadow.hide();
        });
    }

//    修改企业名称弹出框
    function xgQiye(){
        var oShadow = $(".c-tan-shadow"); //遮罩层
        var oBox = $(".xg-qiye-cont"); //弹出框
        var oClose = $(".c-tan-close"); //关闭弹出框按钮
        var oSure = $(".xg-sure");  //弹出框确定按钮

        var value = $(".xgQiyeValue").text();
        oBox.find(".xg-ren").find("input").val(value);

        var wW = $(window).width();
        var oW = oBox.width();

        var L = (wW - oW)/2;
        var T = 80;
        oBox.css({"left":L,"top":T});
        oBox.fadeIn();
        oShadow.show();
        oClose.click(function(){
            oBox.fadeOut();
            oShadow.hide();
        });
        oSure.click(function(){
            oBox.fadeOut();
            oShadow.hide();
        });
    }

//    修改注册地址弹出框
    function xgZhuce(){
        var oShadow = $(".c-tan-shadow"); //遮罩层
        var oBox = $(".xg-zhuce-cont"); //弹出框
        var oClose = $(".c-tan-close"); //关闭弹出框按钮
        var oSure = $(".xg-sure");  //弹出框确定按钮

        var value = $(".xgSiteValue").text();
        oBox.find(".xg-ren").find("input").val(value);

        var wW = $(window).width();
        var oW = oBox.width();

        var L = (wW - oW)/2;
        var T = 80;
        oBox.css({"left":L,"top":T});
        oBox.fadeIn();
        oShadow.show();
        oClose.click(function(){
            oBox.fadeOut();
            oShadow.hide();
        });
        oSure.click(function(){
            oBox.fadeOut();
            oShadow.hide();
        });
    }

//查看详情弹出框

    function xiangqing(e){
        var orderid = $('[name="orderid"]').val();
		$.ajax({
        type: "POST",
        url: "<?php echo U('Brand/brand_register_show_details');?>",
        data: {'nice':e,'orderid':orderid},
        success: function(msg){
			  var obj = eval("("+msg+")");
			  $('#sbmc').html(obj['markname']);
			  $('#sblb').html(obj['one_id']);
			  $('#sbxl').html(obj['three']);
			  $('#sbtupian').html("<img src='"+obj['markimage']+"'/>");
			  
        }
        });

        //        遮罩层
        var oShadow = $(".c-tan-shadow");
//        弹出框
        var oBox1 = $(".bd-cont");
        var oBox2 = $(".ck-cont");
//        弹出框 确定按钮
        var oSure = $(".ck-btn");
//        弹出框 关闭按钮
        var oClose = $(".c-tan-close");
//        弹出框 查看详情按钮
        var oBtn1 = $(".ckxq");

        var wW = $(window).width();
        var wH = $(window).height();
        var oW1 = oBox1.width();
        var oW2 = oBox2.width();
        var oH1 = oBox1.height();
        var oH2 = oBox2.height();
        var L1 = (wW - oW1)/2;
        var L2 = (wW - oW2)/2;
        var T1 = (wH - oH1)/2;
        var T2 = (wH - oH2)/2;
        oBox1.css({"left":L1,"top":T1});
        oBox2.css({"left":L2,"top":T2});
        oBox1.fadeIn();
        oShadow.show();
        oBtn1.click(function(){
            oBox1.fadeOut();
            oBox2.fadeIn();
        });
        oClose.click(function(){
            oBox1.fadeOut();
            oBox2.fadeOut();
            oShadow.hide();
        });
        oSure.click(function(){
            oBox1.fadeOut();
            oBox2.fadeOut();
            oShadow.hide();
        });
    }

</script>
</body>
</html>