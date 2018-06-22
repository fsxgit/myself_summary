<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>知识产权</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/index.css"/>
</head>
<body>

<?php if($_COOKIE["code"]){?>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>顶部导航</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
</head>
<body>
<!--公用header-->
    <div class="c-top-nav heiBg-top  bg10 cfff f14">
        <div class="main">
            <div class="top-left-logo fl"><img src="public/html/images/logo4.png" alt=""/></div>
            <div class="top-right-mode fr fc11">
                <div class="top-nav
				-search  hover fl" style="">
					<form action="index.php?g=Portal&m=Index&a=search" method='post' id='form'>
                    <div class="top-search-input fl" style="background: #172029;">
                        <input  type="text" placeholder="请输入企业名称或者商标名称" name='business_name' value='<?php echo $name;?>' id='business_name'/>
                    </div>
                    <input type="submit" class="top-search-btn fl" value="搜索" />
					</form>
                </div>
                <div class="top-nav-xj hover  fl">新建</div>
                <div class="top-nav-xx hover fl oh" style="padding-left: 20px;">
					<img  class="fl" src="public/html/images/icon19.png" width="20" height="20" alt=""/>
					<?php if($sum != 0){ ?>
						<span class="fl" style="margin-top: 3px; margin-left: 4px;"><?php echo $sum; ?></span>
					<?php }else{ ?>
						
					<?php } ?>
				</div>
                <div class="top-nav-img header-search fl pr">
                    <img src="public/html/images/img3.png" alt=""/>
                    <div class="sy-img-nav f12 c333" style="z-index:20;">
                        <div class="p-box" style="border-right: 1px solid #ccc;">
                            <p class="p2"><span onclick="per()">个人中心</span></p>
                            <p class="p4"><span onclick="log()">退出登录</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cb"></div>
        </div>
    </div>
<!--公用header end-->
<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script>

    $(function(){
        $(".top-nav-img,.p-box").hover(function(){
            $(".sy-img-nav").show();
        },function(){
            $(".sy-img-nav").hide();
        });
        $(".p-box p").hover(function(){
            $(this).addClass("active");
        },function(){
            $(this).removeClass("active");
        })
//        $(".top-search-btn").click(function(){
//            $(".top-nav-search").removeClass("active");
//        })
//        $(".top-search-input input").focus(function(){
//            $(".top-search-input input").blur(function(){
//                $(".top-nav-search").addClass("active");
//            })
//        })
    })

	function per(){
		window.location.href="index.php?g=Portal&m=Userinfo&a=index";
	}
	function log(){
		window.location.href="index.php?g=Portal&m=Register&a=outlogin";
	}
</script>
</body>
</html>
<?php }else{?>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>顶部导航</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
</head>
<body>
<!--公用header-->
<div class="c-header-3 ">
    <div class="main oh">
        <div class="fl c-logo-3"><img src="public/html/images/logo4.png" width="142" height="40" alt=""/></div>
        <div class="fr c-right-3 oh">
            <input class="c-log-3 fl" type="button" value="登录" onclick='login()'/>
            <input class="c-reg-3 fl" type="button" value="免费注册" onclick='reg()'/>
        </div>
    </div>
</div>
<!--公用header end-->
</body>
</html>
<script>
    function login(){
        window.location.href='index.php?g=Portal&m=Register&a=index';
    }
    function reg(){
        window.location.href='index.php?g=Portal&m=Register&a=register';
    }
</script>
<?php }?>

<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>返回顶部</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
</head>
<body>
<!--返回顶部-->
<div class="backTop">
    <div class="backTop-msg"><a onclick="NTKF.im_openInPageChat('kf_9328_1467084789257')"><img src="public/html/images/msg.png" width="50" height="50" alt=""/></a></div>
    <div class="backTop-top"><a href="javascript:window.scrollTo( 0, 0 );" ><img src="public/html/images/top.png" width="50" height="50" alt=""/></a></div>
</div>
<!--返回顶部 end-->

</body>
</html>

<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script>
    $(".backTop-msg,.backTop-top").hover(function(){
        $(this).css("background","#157efb");
    },function(){
        $(this).css("background","#456588");
    })

	NTKF_PARAM = {
		siteid:"kf_9328",		            //企业ID，为固定值，必填
		settingid:"kf_9328_1467084789257",	//接待组ID，为固定值，必填
		uid:"12323",		                //用户ID，未登录可以为空，但不能给null，uid赋予的值显示到小能客户端上
		uname:"eminyli@163.com",		    //用户名，未登录可以为空，但不能给null，uname赋予的值显示到小能客户端上
		isvip:"0",                          //是否为vip用户，0代表非会员，1代表会员，取值显示到小能客户端上
		userlevel:"1",		                //网站自定义会员级别，0-N，可根据选择判断，取值显示到小能客户端上
		erpparam:"abc"                      //erpparam为erp功能的扩展字段，可选，购买erp功能后用于erp功能集成
	}
</script>
<script type="text/javascript" src="http://dl.ntalker.com/js/xn6/ntkfstat.js?siteid=kf_9328" charset="utf-8"></script>

<!--公用右侧浮动导航-->
            <style type="text/css">
                
            </style>
            <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=m2axyCMQkLFocFH7nFb9GrPk"></script>

        <div id="l-map"></div>
<!--公用右侧浮动导航 end-->
<div class="index-search-box">
    <div class="main">
        <div class="is-h1">
            <img src="public/html/images/h1.png" width="502" height="107" alt=""/>
        </div>
        <!--公用企业搜索输入框-->
        <div class="search oh bc">
            <form action="<?php echo U('Portal/Index/search');?>" method='post' id='form'>
            <input type="text" class="s-in fl f14" placeholder="请输入您的企业名称" name='business_name' id='business_name'/>
			
		<!--	<div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div> -->
            <span class="s-btn f16 cfff">
                <span onclick='sear()'>企业查询</span>
            </span>
            </form>
        </div>
        <!--公用企业搜索输入框 end-->
        <div class="is-step">
            <div class="step">
                <div class="img fl"><img src="public/html/images/icon38.png" alt=""/></div>
                <div class="txt fl tl">
                    <h1>查询企业</h1>
                    <p>海量存储，为您提供丰富</p>
                    <p>的企业数据</p>
                </div>
            </div>
            <div class="step">
                <div class="img fl"><img src="public/html/images/icon39.png" alt=""/></div>
                <div class="txt fl tl">
                    <h1>认领企业</h1>
                    <p>找到您的企业，并进行认领</p>
                    <p class="stepBtn" onclick="kanGood();">好处是什么！</p>
                </div>
            </div>
            <div class="step last">
                <div class="img fl"><img src="public/html/images/icon40.png" alt=""/></div>
                <div class="txt fl tl">
                    <h1>认领商标</h1>
                    <p>完成认领后，享受全方位的</p>
                    <p>商标管理服务</p>
                </div>
            </div>
            <!--替换图片的部分 end-->
        </div>
    </div>
</div>
<div class="index-gl-box main">
    <h1 class="ig-h1">在这里，管理您的商标</h1>
    <h2 class="ig-h2">时刻帮您检测企业商标信息情况</h2>
    <div class="ig-mode-box">
        <div class="ig-mode active">
            <p class="img"><img src="public/html/images/ig1.png" width="142" height="142" alt=""/></p>
            <p class="name">专属顾问</p>
            <p class="txt">登录系统，认领您的企业，我们会为您分配一个专属顾问</p>
        </div>
        <div class="ig-mode">
            <p class="img"><img src="public/html/images/ig2.png" width="142" height="142" alt=""/></p>
            <p class="name">极速查询</p>
            <p class="txt">专属顾问电脑前待命，实时查询，3分钟内可出结果</p>
        </div>
        <div class="ig-mode">
            <p class="img"><img src="public/html/images/ig3.png" width="142" height="142" alt=""/></p>
            <p class="name">流程可视化</p>
            <p class="txt">办理流程全部可视化，并有消息提醒，让您清晰的知悉业务办理到哪一步</p>
        </div>
        <div class="ig-mode">
            <p class="img"><img src="public/html/images/ig4.png" width="142" height="142" alt=""/></p>
            <p class="name">商标检测</p>
            <p class="txt">续展监测，侵权监测，撤三监测，竞争对手监测，为您提供更好保护</p>
        </div>

    </div>
</div>
<div class="index-reg-box">
    <div class="main tc">
        <h1 class="ir-h1">商标注册流程</h1>
        <div class="ir-img"><img src="public/html/images/img12.png" width="983" height="520" alt=""/></div>
    </div>
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


<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>公用底部</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
</head>
<body>
<!--公用底部-->
    <div class="c-bot">
        <div class="c-bot-top">
           <div class="oh main">
               <div class="bot-img oh img1">
                   <div class="img fl"><img src="public/html/images/bot1.png" width="52" height="52" alt=""/></div>
                   <div class="fl">
                       <p class="bot-txt1">大数据精确匹配推荐</p>
                       <p class="bot-txt2">专注知识产权</p>
                   </div>
               </div>
               <div class="bot-img oh img2">
                   <div class="img fl"><img src="public/html/images/bot2.png" width="52" height="52" alt=""/></div>
                   <div class="fl">
                       <p class="bot-txt1">全心全意服务每一用户</p>
                       <p class="bot-txt2">专家竭诚服务</p>
                   </div>
               </div>
               <div class="bot-img oh img3">
                   <div class="img fl"><img src="public/html/images/bot3.png" width="52" height="52" alt=""/></div>
                   <div class="fl">
                       <p class="bot-txt1">开启互联网+知识产权新时代</p>
                       <p class="bot-txt2">联合战略投资</p>
                   </div>
               </div>
               <div class="bot-img oh img4">
                   <div class="img fl"><img src="public/html/images/bot4.png" width="52" height="52" alt=""/></div>
                   <div class="fl">
                       <p class="bot-txt1">服务出问题客户经理全程跟进</p>
                       <p class="bot-txt2">售后无忧</p>
                   </div>
               </div>

           </div>
        </div>
        <div class="c-bot-bot">
            <div class="main c-bot-copy-box oh">
                <div class="c-bot-copy  fl">
                    <div class="copy1">
                        <a href="javascript:;">神州易桥集团</a>
                        <a href="javascript:;">企博士</a>
                        <a href="javascript:;">企采团</a>
                        <a href="javascript:;">应用云</a>
                        <a href="javascript:;">商学院</a>
                        <a href="javascript:;">积分宝</a>
                    </div>
                    <div class="copy2">
                        Copyright © 1998 - 2016 All Rights Reserved. 神州网版权所有  京ICP备10028182号 京公网安备110108400735号
                    </div>
                </div>
                <div class="c-bot-tel fr">
                    <div class="img fr"><img src="public/html/images/kan1.png" width="91" height="99" alt=""/></div>
                    <div class="fr">
                        <p class="tel-txt1">服务热线</p>
                        <p class="tel-txt2">400-686-5658</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!--公用底部 end-->
</body>
</html>
<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script src="public/html/js/js.js"></script>
<script>
    $(function(){
//        二维码的显示隐藏
     
        $(".ig-mode").hover(function(){
            $(this).addClass("active").siblings().removeClass("active");
        })
    })
    
    function sear(){
        var name=$(".s-in").val();
	//	alert(name);
    //    $("#form").submit();
		window.location.href="index.php?g=Portal&m=Index&a=search&business_name="+name;
    }

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


/*
	// 百度地图API功能
	function G(id) {
		return document.getElementById(id);
	}

	var map = new BMap.Map("l-map");
	map.centerAndZoom("北京",12);        // 初始化地图,设置城市和地图级别。
        
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
			
	var geoc = new BMap.Geocoder();
	//单击获取点击的经纬度
	map.addEventListener("click",function(e){
		var pt = e.point;
		geoc.getLocation(pt, function(rs){
			var addComp = rs.addressComponents;
			//addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber;
			var address = addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber;
			$('#business_name').val(address);
		});
		// 用经纬度设置地图中心点
		map.clearOverlays();
	//	$('#longitude').val(e.point.lng);
	//	$('#latitude').val(e.point.lat);
		var new_point = new BMap.Point(e.point.lng,e.point.lat);
		var marker = new BMap.Marker(new_point);  // 创建标注
		map.addOverlay(marker);              // 将标注添加到地图中
		map.panTo(new_point);
	});
	var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
		{"input" : "business_name"
		,"location" : map
	});

	ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
	var str = "";
		var _value = e.fromitem.value;
		var value = "";
		if (e.fromitem.index > -1) {
			value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		}    
		str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
		
		value = "";
		if (e.toitem.index > -1) {
			_value = e.toitem.value;
			value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		}    
		str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
		G("searchResultPanel").innerHTML = str;
	});

	var myValue;
	ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
	var _value = e.item.value;
		myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
		
	//	setPlace();
	});*/
</script>
</body>
</html>