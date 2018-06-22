<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>知识产权</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <style>
        .kj-header{
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 11;
            min-width: 960px;
            height: 60px;
            _position: absolute;
            _width: 100%;
        }
        .kj-left{
            position: absolute;
            top: 60px;
            left: 0;
            bottom: 0;
            z-index: 2;
            width: 200px;
            background: #f91315;
            _height: 100%;
        }
        .kj-iframe-box{
            position: absolute;
            top:60px;
            left: 200px;
            bottom: 0;
            right:0;
            min-width: 920px;
        }
        .kj-iframe-box iframe{
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .nav-p a{display: block;}
		.fff-a,.fff-a:link,.fff-a:visited,.fff-a:hover,.fff-a:active{color:#fff;}
    </style>
</head>
<body>
<!--公用header-->
<div class="kj-header">
    <div class="c-top-nav bg9 cfff f14">
        <div class="top-left-logo fl"><img src="public/html/images/logo3.png" alt=""/></div>
        <div class="top-right-mode fr fc11">
            <div class="top-nav-search  hover fl">
			<!--	<form action="<?php echo U('Portal/Userinfo/search');?>" method="post"> -->
                <div class="top-search-input fl">
                    <input  type="text" placeholder="请输入企业名称或者商标名称" name="business_name" id="business_name" value="<?php echo ($business_name); ?>"/>
                </div>
                <input type="button" class="top-search-btn fl" value="搜索" onclick="sou()"/>
			<!--	</form>  -->
            </div>
            <a href="<?php echo U('Userinfo/index',array('type'=>'1'));?>" class="fff-a"><div class="top-nav-xj hover fl">新建</div></a>
            <a href="<?php echo U('Userinfo/index',array('type'=>'2'));?>" class="fff-a">
				<div class="top-nav-xx hover fl">
					<?php if($sum != 0){ ?>
						<span><?php echo $sum; ?></span>
					<?php }else{ ?>
						
					<?php } ?>
				</div>
			</a>
            <div class="top-nav-img header-search fl pr">
                <img src="public/html/images/img3.png" alt=""/>
                <div class="sy-img-nav f12 c333">
                    <div class="p-box">
                        <p class="p2"><span onclick="info()">个人中心</span></p>
                        <p class="p4"><span onclick="log()">退出登录</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="cb"></div>
    </div>
</div>
<!--公用header end-->
<!--公用左侧主导航-->
<div class="kj-left">
    <div class="c-left-nav oh">
        <div class="nav-p">
            <p class="p2 <?php if($type == null): ?>active<?php endif; ?>"><a data-href="<?php echo U('Portal/userinfo/trademark_gk');?>" ><span>商标概况</span></a></p>
            <p class="p3 <?php if($type == 1): ?>active<?php endif; ?>"><a data-href="<?php echo U('Portal/brand/brand_lst');?>"><span>商标管理</span></a></p>
            <p class="p4"><a data-href="<?php echo U('Portal/userinfo/jiance');?>"><span>商标监测</span></a></p>
            <p class="p5 <?php if($type == 2): ?>active<?php endif; ?>"><a data-href="<?php echo U('Portal/pinfo/index');?>" ><span>个人中心</span></a></p>
            <p class="p1"><a data-href="<?php echo U('Portal/cost/orderlst');?>" ><span>费用中心</span></a></p>
        </div>
    </div>
</div>
<!--公用左侧主导航 end-->
<!--content 这里是存放内容的盒子，即需要改变的地方-->
<div class="kj-iframe-box">
    <?php if($type == 1): ?><iframe name="myFrame" id="myFrame" src="<?php echo U('Portal/brand/brand_query');?>" frameborder="0" ></iframe>
    <?php elseif($type == 2): ?>
<iframe name="myFrame" id="myFrame" src="<?php echo U('Portal/pinfo/xiaoxilst');?>" frameborder="0" ></iframe>
	<?php elseif($type == 3): ?>
<iframe name="myFrame" id="myFrame" src="<?php echo U('Portal/Userinfo/search',array('business_name'=>$business_name));?>" frameborder="0" ></iframe>
	<?php else: ?>
<iframe name="myFrame" id="myFrame" src="<?php echo U('Portal/Userinfo/trademark_gk');?>" frameborder="0" ></iframe><?php endif; ?>
	
</div>
<!--content end-->



<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script>

    $(function(){
        $(".top-nav-img").hover(function(){
            $(".sy-img-nav").show();
        },function(){
            $(".sy-img-nav").hide();
        });

        $(".p-box p").hover(function(){
            $(this).addClass("active");
        },function(){
            $(this).removeClass("active");
        });
        $(".nav-p p").click(function(){
			var hrefA = $(this).find("a").data("href");
            $(this).addClass("active").siblings().removeClass("active");
			$("#myFrame").attr("src",hrefA);
		
        })
    })

	function info(){
		window.location.href="index.php?g=Portal&m=Userinfo&a=index";
	}

	function log(){
		window.location.href="index.php?g=Portal&m=Register&a=outlogin";
	}
	function aa(){
		window.location.href="index.php?g=&m=Brand&a=query";
	}

	function sou(){
		var business_name = $("#business_name").val();
		window.location.href="index.php?g=Portal&m=Userinfo&a=index&business_name="+business_name+"&type="+3;
	}
</script>
</body>
</html>