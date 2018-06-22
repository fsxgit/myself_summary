<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>商标概况</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/brand.css"/>
</head>
<body>
    <div class="brand-gk main-hou">
        <!--顾问 有顾问 -->
		
        <div class="brand-guwen mt40 oh">
			<?php if($res["isclaimed"] == 1){?>
            <div class="guwen-left fl f12 c333">
                <div class="fl mr20 ml30"><img src="public/img/wu.png" alt=""/></div>
                <div class="txt fl">
                    <p class=" fb f14">您好，<span><?php echo $res["loginname"];?></span></p>
                    <p><?php echo $res["companyname"];?></p>
                    <p>
						<span class="ling fc12">您已认领企业</span>
						<a class="kan fc1 fb" href = "index.php?g=Portal&m=pinfo&a=xq_qiye&names=<?php echo $res["companyname"];?>">查看企业信息</a>
					</p>
                </div>
            </div>
			<?php } ?>
			<?php if($res["isclaimed"] == 0){?>
            <div class="guwen-left fl f12 c333">
                <div class="fl mr20 ml30">
					<img src="public/img/wu.png" alt=""/>
				</div>
                <div class="txt fl">
                    <p class=" fb f14">您好，<span><?php echo $res["loginname"];?></span></p>
                    <p>
						<span class="fc12">您还没有认领企业</span>
						<a href = "index.php?g=Portal&m=Userinfo&a=search_input" class="kan fc1 fb">立即认领</a>
					</p>
                    <p>
						<span class="fc12">认领企业有什么好处</span>
						<span class="kan fc1 fb" style="cursor: pointer;" onclick="kanGood();">查看</span>
					</p>
                </div>
            </div>
			<?php } ?>
			<?php if($res["adviser"] == 1){?>
            <div class="guwen-right fl">
                <div class="fl mr20 ml30">
					<img src="public/img/ren.png" alt=""/>
				</div>
                <div class="txt fl f12">
                    <p class=" fb f14">服务顾问：<?php echo $guwen['consultantname']; ?></p>
                    <p>联系方式：<?php echo $guwen['consultantmobile']; ?></p>
                    <p>联系地址：<?php echo $guwen['consultantaddress']; ?></p>
                </div>
            </div>
			<?php } ?>
			<?php if($res["adviser"] == 0){?>
            <div class="guwen-right fl">
                <div class="fl mr20 ml30">
					<img src="public/img/ren.png" alt=""/>
				</div>
                <div class="txt fl f12">
                    <p class=" fb f14">目前还没有顾问为您服务</p>
                    <p class="fc12">认领企业后即可免费获得1名服务顾问</p>
                    <p class="fc12">服务顾问将会对您的商标进行检测</p>
                </div>
            </div>
			<?php } ?>
        </div>
        <!--顾问 有顾问 end-->
        <!--顾问 没有顾问 -->
		<!--
        <div class="brand-guwen guwen-wei mt40  oh">
			
        </div>-->
        <!--顾问 没有顾问 end-->

        <!--商标统计-->
        <div class="brand-tongji">
            <h1 class="xq-h1">商标统计</h1>
            <div class="tongji-xq">
                <div class="tj-xq-mode">
                    <p>
						<img src="public/html/images/icon20.png" alt=""/>
					</p>
                    <p class="name">总量</p>
                    <p class="num"><?php echo ($count); ?></p>
                </div>
                <div class="tj-xq-mode">
                    <p>
						<img src="public/html/images/icon21.png" alt=""/>
					</p>
                    <p class="name">注册成功</p>
                    <p class="num"><?php echo $cgcount; ?></p>
                </div>
                <div class="tj-xq-mode">
                    <p>
						<img src="public/html/images/icon22.png" alt=""/>
					</p>
                    <p class="name">注册中</p>
                    <p class="num"><?php echo $zzcount; ?></p>
                </div>
                <div class="tj-xq-mode">
                    <p>
						<img src="public/html/images/icon23.png" alt=""/>
					</p>
                    <p class="name">注册失败</p>
                    <p class="num"><?php echo $sbcount; ?></p>
                </div>
                <div class="tj-xq-mode">
                    <p>
						<img src="public/html/images/icon24.png" alt=""/>
					</p>
                    <p class="name">已无效</p>
                    <p class="num"><?php echo $wxcount; ?></p>
                </div>
            </div>
        </div>
        <!--商标统计 end-->
        <!--未读通知-->
        <div class="brand-weidu">
            <h1 class="xq-h1">未读通知 <a class="all" onclick="th()">全部信息</a></h1>
            <div class="brand-xinxi">
                <div class="brand-xx-mode oh f12  c333">
                    <div class="mode-left fl">
                        <span class="mode-txt">[支付消息] 放飞心灵 拥抱草原——易桥2015坝上草原消夏游</span>
                        <span class="kai tz-kg fc1 ">展开</span>
                        <span class="guan tz-kg fc1">收起</span>
                    </div>
                    <div class="mode-right c999 fr">2016-09-08 12:00</div>
                </div>
                <div class="brand-xx-mode oh f12  c333">
                    <div class="mode-left fl">
                        <span class="mode-txt">[支付消息] 转让成功。商标名称：易桥及分宝 WWW.12366.COM，商标分类：45。受让人名称（中文）：神州易桥(北京)财税科技有限神州易桥(北京)财税科技有限神州易桥(北京)财税科技公司，受让人地址（中文）：北京市昌平区回龙观镇西大街118号1幢905室。</span>
                        <span class="kai tz-kg fc1 ">展开</span>
                        <span class="guan tz-kg fc1">收起</span>
                    </div>
                    <div class="mode-right c999 fr">2016-09-08 12:00</div>
                </div>
                <div class="brand-xx-mode oh f12  c333">
                    <div class="mode-left fl">
                        <span class="mode-txt">[支付消息] 转让成功。商标名称：易桥及分宝 WWW.12366.COM，商标分类：45。受让人名称（中文）：神州易桥(北京)财税科技有限神州易桥(北京)财税科技有限神州易桥(北京)财税科技公司，受让人地址（中文）：北京市昌平区回龙观镇西大街118号1幢905室。</span>
                        <span class="kai tz-kg fc1 ">展开</span>
                        <span class="guan tz-kg fc1">收起</span>
                    </div>
                    <div class="mode-right c999 fr">2016-09-08 12:00</div>
                </div>
                <div class="brand-xx-mode oh f12  c333">
                    <div class="mode-left fl">
                        <span class="mode-txt">[支付消息] 转让成功。商标名称：易桥及分宝 WWW.12366.COM，商标分类：45。受让人名称（中文）：神州易桥(北京)财税科技有限神州易桥(北京)财税科技有限神州易桥(北京)财税科技公司，受让人地址（中文）：北京市昌平区回龙观镇西大街118号1幢905室。</span>
                        <span class="kai tz-kg fc1 ">展开</span>
                        <span class="guan tz-kg fc1">收起</span>
                    </div>
                    <div class="mode-right c999 fr">2016-09-08 12:00</div>
                </div>

            </div>
        </div>
        <!--未读通知 end-->

    </div>

<!--查看好处弹出框-->
    <!--页面的弹出框-->
    <div class="c-tan-shadow"></div>
    <div class="c-tan-cont">
        <div class="c-tan-top oh">
            <div class="c-tan-Title fl">认领企业的好处</div>
            <div class="c-tan-close fr"><img class="img1"  src="public/html/images/close.png" width="12" height="12" alt=""/><img  class="img2" src="public/html/images/closel.png" width="12" height="12" alt=""/></div>
        </div>
        <div class="c-tan-center cha-good bc f12 c999">
            <h1 class="f14 c333">认领企业的用户，将获得以下便利：</h1>
            <p>1、免去繁琐的资料填写，所有文书一键生成；</p>
            <p>2、有针对性的分配一名免费顾问，对您的知识产权进行全方位检测；</p>
            <p>3、过往的所有商标，将同步到您的账户内，方便在线管理；</p>
            <p>4、提出有针对性的商标保护方案，让您的商标更加有用。</p>
        </div>
        <div class="c-tan-bot bc">
            <input type="button" class="btn-qu write-big-btn" value="再看看"/>
            <input type="submit" class="btn-ding blue-big-btn" value="去认领" onclick="go1()"/>
        </div>
    </div>
    <!--页面的弹出框 end-->
<!--查看好处弹出框 end-->




<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script src="public/html/js/js.js"></script>
<script>
function th(){
	 
	window.location.href="index.php?g=Portal&m=pinfo&a=xiaoxitz";
}


    $(".mode-txt").each(function(){
        var txt =$(this).text();
//        alert(txt);
        var len = txt.length;
//        alert(len);
        if(len > 94){
//            alert(2);
            var str = txt.substr(0,90);
//            alert(str);
            $(this).text(str+" ...");
            $(this).siblings(".kai").show();
            $(this).siblings(".kai").click(function(){
                $(this).siblings(".mode-txt").text(txt);
                $(this).hide();
                $(this).siblings(".guan").show();
                $(this).parents(".brand-xx-mode").addClass("active");
                $(this).siblings(".guan").click(function(){
                    $(this).siblings(".mode-txt").text(str+" ...");
                    $(this).hide();
                    $(this).siblings(".kai").show();
                    $(this).parents(".brand-xx-mode").removeClass("active");
                })
            })
        }
    })


    //    查看好处弹出框
    function kanGood(){
        var oShadow = $(".c-tan-shadow"); //遮罩层
        var oBox = $(".c-tan-cont"); //弹出框
        var oClose = $(".c-tan-close"); //关闭弹出框按钮
        var oSure = $(".btn-ding");  //弹出框确定按钮
        var oQu = $(".btn-qu");  //弹出框取消按钮

        var wW = $(window).width();
        var wH = $(window).height();
        var oW = oBox.width();
        var oH = oBox.height();

        var L = (wW - oW)/2;
        var T = (wH - oH)/2;
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
        oQu.click(function(){
            oBox.fadeOut();
            oShadow.hide();
        });
    }


	function go1(){
		location.href="index.php?g=Portal&m=Userinfo&a=search_input";
	}
</script>
</body>
</html>