<!DOCTYPE html>
<?php
if(stripos($_SERVER['HTTP_USER_AGENT'],"android")||stripos($_SERVER['HTTP_USER_AGENT'],"iPhone"))
{
    header("Location:./app/index.html"); die;
}
?>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <title>北京海博远创|北京APP开发|APP外包公司|房卡麻将开发|棋牌游戏开发|麻将游戏开发|斗地主游戏开发</title>
    <meta name="keywords" content="北京房卡麻将开发,北京棋牌游戏开发,麻将游戏开发,斗地主游戏开发,北京app开发,app开发外包,app外包公司">
    <meta name="description" content="北京海博远创是国内最早从事iOS\Android开发的公司，在移动互联网技术以及电子商务网站等领域处于国内领先地位。公司致力于成为国内最好的移动平台软件研发公司，客户包括中央电视台、中国电信、中国联通、中科院、新华社、中国好声音、总参总医院、花旗银行等。">
  
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
    <meta name="copyright" content="Copyright © 2011-2014 iHope99.com All Rights Reserved 版权所有 · 北京海博远创软件科技有限公司 北京房卡麻将开发,北京棋牌游戏开发,麻将游戏开发,斗地主游戏开发  京ICP备11043388号" />
    <link rel="shortcut icon" href="images/favicon.ico" />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/swiper3.1.0.min.css" rel="stylesheet" />
    <link href="css/index.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/pubu.css">
    <link rel="stylesheet" href="imgs/js/layout.css">
    <link href="css/css3.css" rel="stylesheet" />
    <link href="css/fx.css" rel="stylesheet" />
	<style>
	.c3,.c3:link,.c3:visited,.c3:hover,.c3:active{text-decoration:none; color:#333;}
	</style>


    <!--[if lt IE 9]>
    <script src="js/html5shiv.min.js"></script>
    <![endif]-->


    <!--[if lt IE 9]>
    <script src="js/html5shiv.min.js"></script>
    <![endif]-->
	<script>
	var _hmt = _hmt || [];
	(function() {
	  var hm = document.createElement("script");
	  hm.src = "//hm.baidu.com/hm.js?df45ae940e33e354ed6b1038c64f1dae";
	  var s = document.getElementsByTagName("script")[0];
	  s.parentNode.insertBefore(hm, s);
	})();
	</script>

    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/index.js"></script>
    <script type="text/javascript" src="imgs/js/jquery.easing.min.js"></script>
    <script type="text/javascript" src="imgs/js/jquery.mixitup.min.js"></script>

    <script type="text/javascript">
        $(function () {

            var filterList = {

                init: function () {

                    // MixItUp plugin
                    $('#portfoliolist').mixitup({
                        targetSelector: '.portfolio',
                        filterSelector: '.filter',
                        effects: ['fade'],
                        easing: 'snap',
                        // 排序结束所要触发的自定义方法：
                        onMixEnd: filterList.FunName()
                    });

                },


                FunName: function () {

                    $('#portfoliolist .portfolio').hover(

                    );

                }

            };

            // Run the show!
            filterList.init();


        });
    </script>
</head>

<body>
<!--侧边导航-->
<div class="ceNav"><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p></div>
<!--侧边导航 end-->

<!--侧边 qq-->
<div class="cebbox">
    <div class="cebb-top">
		<img class="kgimg2" src="images/kgimg2.png" alt=""/>
		<div class="tabkg">
            <img class="kgimg1" src="images/kgimg1.png" alt=""/>
            <div class="kgtxt">
                联<br />
                系<br />
                方<br />
                式<br />
            </div>
            <img class="kgimg3" src="images/kgimg3.png" alt=""/>
        </div>
        <div class="cebb-logo">
            <a href="javascript:;">
                <img src="images/ce7.png" alt="海博远创科技有限公司" title="海博远创科技有限公司"/>
            </a>
        </div>
        <div class="ce-line ce-line1"><img src="images/ce6.png" alt=""/></div>
        <div class="cebb-tel">
            <img src="images/ce3.png" alt="4001097899" title="4001097899"/>
        </div>
        <div class="ce-line"><img src="images/ce6.png" alt=""/></div>
        <div class="cebb-qq1">
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=982677074&site=qq&menu=yes"><img  style="CURSOR: pointer"  border="0"  SRC="images/qq1.png" alt="QQ沟通"></a>
        </div>
        <div class="cebb-qq2">
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=982677000&site=qq&menu=yes"><img  style="CURSOR: pointer"  border="0" SRC="images/qq2.png" alt="QQ沟通"></a>
        </div>
        <div class="cebb-txt">
            <img src="images/ce4.png" />
        </div>
    </div>
    <div class="cebb-bot">
        <div class="cebb-bt">
            <img src="images/cet2.png" class="btimg1"  alt=""/>
            <img src="images/cet1.png" class="btimg2"   alt=""/>
        </div>
    </div>
</div>
<!--侧边 qq end-->
<header class="fixed" id="div0">
    <div class="logo">
        <img src="images/logo.png" alt="海博远创" class="img-responsive" />
		<img class="logof" src="images/logo4.png" style="display: none">
    </div>
    <nav class="menu">
        <ul class="list-inline">
            <li class="active" data-in="1"><a>首页</a></li>
             <li data-in="2"><a  href="games.html">游戏开发</a></li>
            <li data-in="3"><a>解决方案</a></li>
            <li data-in="4"><a href="cases.html">经典案例</a></li>
            <li style="width: 0; padding:0; margin:0;"><a></a></li>
            <li data-in="5"><a>团队介绍</a></li>
            <li data-in="6"><a>合作客户</a></li>
            <li data-in="7"><a>服务流程</a></li>
            <li data-in="8"><a>联系我们</a></li>
        </ul>
    </nav>
    <div class="hotline">
        <a href="tel:4001097899" title="全国服务热线"><span>400-1097899</span></a><u></u>
    </div>
    <div class="menu-icon">
        <a href="tel:4001097899" title="全国服务电话"><span class="glyphicon glyphicon-earphone"></span></a>
        <span class="glyphicon glyphicon-th-large"></span>
    </div>
</header>
<!--欢迎界面-->
<div class="welcome"></div>
<!--焦点轮播-->
<section class="sect1 video">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide nth-bg1">
                <div class="bannerCont1">
                    <div class="banner1-Img1"><img src="images/banner1-img4.png" alt=""/></div>
                    <div class="banner1-Img2"><img src="images/banner1-img2.png" alt=""/></div>
                </div>
            </div>
            <div class="swiper-slide  nth-bg2" >
			<a  href="games.html">
                <div class="bannerCont2 main ">
                    <div class="bannerImg2"><img src="images/bannerimg2.png" alt=""/></div>
                </div>
			</a>
            </div>
        </div>
    </div>
    <div class="innerBox">
        <div class="news"><ul></ul></div>
        <div class="guide"></div>
        <a class="movedown"></a>
    </div>
</section>
<!--服务领域-->
<section class="sect3">
    <div class="sec-box">
        <h1 class="sec-h1 sec3-h1">我们的服务</h1>
        <div class="ser-box">
            <ul>
                <li class="hvr-float-shadow">
                    <div class="fw-bg fw-bg1 "><img src="images/img8.png" alt=""/></div>
                    <div class="tit">APP开发</div>
                    <div class="txt">社交  视频直播  社区O2O  外卖  商城 <br /> 移动医疗  金融理财  交易培训</div>
                </li>
                <li class="hvr-float-shadow">
				<a  href="games.html" class="c3">
                    <div class="fw-bg fw-bg2"><img src="images/img9.png" alt=""/></div>
                    <div class="tit">游戏开发</div>
                    <div class="txt">大众麻将  房卡麻将  欢乐斗地主<br />德州扑克  金鲨银鲨  捕鱼游戏  跑胡子</div>
				</a>
                </li>
                <li class="hvr-float-shadow">
                    <div class="fw-bg fw-bg3"><img src="images/img10.png" alt=""/></div>
                    <div class="tit">网站建设</div>
                    <div class="txt">企业网站  旅游网站 <br /> 网站模板  网站优化</div>
                </li>
                <li class="hvr-float-shadow">
                    <div class="fw-bg fw-bg4"><img src="images/img11.png" alt=""/></div>
                    <div class="tit">微信开发</div>
                    <div class="txt">微商城  微网站  微宣传 <br /> 微门店    微吧   微预约</div>
                </li>
                <li class="hvr-float-shadow">
                    <div class="fw-bg fw-bg5"><img src="images/img12.png" alt=""/></div>
                    <div class="tit">UI设计</div>
                    <div class="txt">界面设计  网站设计 <br /> 宣传设计  logo设计</div>
                </li>
                <div class="cb"></div>
            </ul>
        </div>
    </div>
</section>
<!--服务领域 end-->
<!--解决方案 -->
<section class="sect4">
    <div class="sec-box">
        <h1 class="sec-h1  sec4-h1">行业解决方案</h1>
        <h3 class="sec-h3  sec4-h3">经过多年积累，海博远创深入理解各行业业务流程及市场趋势，陆续推出多种行业APP解决方案<br />为企业向移动互联网转型翻开了崭新一页。</h3>
        <div class="jiej-box">
            <ul>
                <li class="hvr-grow-rotate">
					<a  href="games.html" class="c3">
                    <div class="fa-img"><img src="images/img33.png" alt=""/></div>
                    <div class="tit">棋牌游戏</div>
					</a>
                </li>
                <li class="li2 hvr-grow-rotate">
                    <div class="fa-img"><img src="images/img34.png" alt=""/></div>
                    <div class="tit">智慧社区</div>
                </li>
                <li class=" hvr-grow-rotate">
                    <div class="fa-img"><img src="images/img35.png" alt=""/></div>
                    <div class="tit">电商平台</div>
                </li>
                <li class="li2 hvr-grow-rotate">
                    <div class="fa-img"><img src="images/img36.png" alt=""/></div>
                    <div class="tit">社交互动</div>
                </li>
                <li class="hvr-grow-rotate">
                    <div class="fa-img"><img src="images/img37.png" alt=""/></div>
                    <div class="tit">一元夺宝</div>
                </li>
                <li class="li2 hvr-grow-rotate">
                    <div class="fa-img"><img src="images/img38.png" alt=""/></div>
                    <div class="tit">移动医疗</div>
                </li>
                <li class="hvr-grow-rotate">
                    <div class="fa-img"><img src="images/img39.png" alt=""/></div>
                    <div class="tit">教育培训</div>
                </li>
                <li class="li2 hvr-grow-rotate">
                    <div class="fa-img"><img src="images/img40.png" alt=""/></div>
                    <div class="tit">上门O2O</div>
                </li>
                <div class="cb"></div>
            </ul>
        </div>
    </div>
</section>
<!--解决方案 end-->
<!--经典案例 -->
<section class="sect9">
    <div class="sec-box">
        <h1 class="sec-h1 sec9-h1">经典案例</h1>
        <ul id="filters" class="clearfix">
            <li><span class="filter active" data-filter="games O2O app card icon fnews fmoney fsites fweixin">All</span></li>
            <li><span class="filter" data-filter="games">棋牌游戏</span></li>
            <li><span class="filter" data-filter="O2O">O2O</span></li>
            <li><span class="filter" data-filter="app">电子商务</span></li>
            <li><span class="filter" data-filter="card">社交</span></li>
            <li><span class="filter" data-filter="icon">音视频</span></li>
            <li><span class="filter" data-filter="fnews">新闻杂志</span></li>
            <li><span class="filter" data-filter="fmoney">金融理财</span></li>
            <li><span class="filter" data-filter="fsites">网站</span></li>
            <li><span class="filter" data-filter="fweixin">微信</span></li>
        </ul>
        <div class="anli-box"  id="portfoliolist">
            <div class="portfolio O2O" data-cat="O2O" data-sid="14">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/O2O14.png" alt="" />
                </div>
                <div class="tit">央视新闻</div>
            </div>
            <div class="portfolio icon" data-cat="icon" data-sid="10">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/icon10.png" alt="" />
                </div>
                <div class="tit">中国好声音</div>
            </div>
            <div class="portfolio icon" data-cat="icon" data-sid="8">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/icon8.png" alt="" />
                </div>
                <div class="tit">河北人民广播电台</div>
            </div>
            <div class="portfolio fnews" data-cat="fnews" data-sid="10">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/fnews10.png" alt="" />
                </div>
                <div class="tit">博鳌亚洲论坛</div>
            </div>
            <div class="portfolio O2O" data-cat="O2O" data-sid="16">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/O2O16.png" alt="" />
                </div>
                <div class="tit">酒便利</div>
            </div>
            <div class="portfolio app" data-cat="app" data-sid="2">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/app2.png" alt="" />
                </div>
                <div class="tit">穷游网</div>
            </div>
            <div class="portfolio fmoney" data-cat="fmoney" data-sid="1">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/fmoney1.png" alt="" />
                </div>
                <div class="tit">和讯基金</div>
            </div>
            <div class="portfolio app" data-cat="app" data-sid="13">
				<div class="portfolio-wrapper">
					<img src="imgs/logos/app13.png" alt="" />
				</div>
				<div class="tit">京东到家</div>
			</div>
            <div class="portfolio app" data-cat="app" data-sid="7">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/app7.png" alt="" />
                </div>
                <div class="tit">顺丰优选</div>
            </div>



			<div class="portfolio games" data-cat="games" data-sid="2">
				<div class="portfolio-wrapper">
					<a href="details/index12.html">
					<img src="imgs/logos/games2.png" alt="" />
					</a>
				</div>
				<div class="tit">365斗地主</div>
			</div>
			<div class="portfolio games" data-cat="games" data-sid="1">
				<div class="portfolio-wrapper">
					<a href="details/index13.html">
					<img src="imgs/logos/games3.png" alt="" />
					</a>
				</div>
				<div class="tit">澳门游戏</div>
			</div>
			<div class="portfolio games" data-cat="games" data-sid="1">
				<div class="portfolio-wrapper">
					<a href="details/index14.html">
					<img src="imgs/logos/games1.png" alt="" />
					</a>
				</div>
				<div class="tit">海博斗地主</div>
			</div>
			<div class="portfolio games" data-cat="games" data-sid="2">
				<div class="portfolio-wrapper">
					<a href="details/index15.html">
					<img src="imgs/logos/games4.png" alt="" />
					</a>
				</div>
				<div class="tit">海博麻将</div>
			</div>

            <div class="portfolio O2O" data-cat="O2O" data-sid="1">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/O2O1.png" alt="" />
                </div>
                <div class="tit">索米约课-老师端</div>
            </div>
            <div class="portfolio O2O" data-cat="O2O" data-sid="2">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/O2O2.png" alt="" />
                </div>
                <div class="tit">华商基金</div>
            </div>
            <div class="portfolio O2O" data-cat="O2O" data-sid="3">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/O2O3.png" alt="" />
                </div>
                <div class="tit">回收通</div>
            </div>
            <div class="portfolio O2O" data-cat="O2O" data-sid="4">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/O2O4.png" alt="" />
                </div>
                <div class="tit">新疆发布</div>
            </div>
            <div class="portfolio app" data-cat="app" data-sid="1">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/app1.png" alt="" />
                </div>
                <div class="tit">邦购商城</div>
            </div>
            <div class="portfolio app" data-cat="app" data-sid="3">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/app3.png" alt="" />
                </div>
                <div class="tit">唯美购</div>
            </div>
            <div class="portfolio app" data-cat="app" data-sid="4">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/app4.png" alt="" />
                </div>
                <div class="tit">大麦网</div>
            </div>
            <div class="portfolio card" data-cat="card" data-sid="1">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/card1.png" alt="" />
                </div>
                <div class="tit">Baby一起玩</div>
            </div>
            <div class="portfolio card" data-cat="card" data-sid="2">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/card2.png" alt="" />
                </div>
                <div class="tit">型动</div>
            </div>
            <div class="portfolio card" data-cat="card" data-sid="3">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/card3.png" alt="" />
                </div>
                <div class="tit">骨头邦</div>
            </div>
            <div class="portfolio card" data-cat="card" data-sid="4">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/card4.png" alt="" />
                </div>
                <div class="tit">派派交友</div>
            </div>
            <div class="portfolio icon" data-cat="icon" data-sid="1">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/icon1.png" alt="" />
                </div>
                <div class="tit">听听FM</div>
            </div>
            <div class="portfolio icon" data-cat="icon" data-sid="2">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/icon2.png" alt="" />
                </div>
                <div class="tit">织图</div>
            </div>
            <div class="portfolio icon" data-cat="icon" data-sid="3">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/icon3.png" alt="" />
                </div>
                <div class="tit">蝌蚪音客</div>
            </div>
            <div class="portfolio icon" data-cat="icon" data-sid="4">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/icon4.png" alt="" />
                </div>
                <div class="tit">好好吃</div>
            </div>

            <div class="portfolio fnews" data-cat="fnews" data-sid="1">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/fnews1.png" alt="" />
                </div>
                <div class="tit">央视新闻</div>
            </div>
            <div class="portfolio fnews" data-cat="fnews" data-sid="2">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/fnews2.png" alt="" />
                </div>
                <div class="tit">新华社新疆发布</div>
            </div>
            <div class="portfolio fnews" data-cat="fnews" data-sid="3">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/fnews3.png" alt="" />
                </div>
                <div class="tit">掌上天津</div>
            </div>
            <div class="portfolio fnews" data-cat="fnews" data-sid="4">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/fnews4.png" alt="" />
                </div>
                <div class="tit">大地影院</div>
            </div>
            <div class="portfolio fmoney" data-cat="fmoney" data-sid="2">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/fmoney2.png" alt="" />
                </div>
                <div class="tit">人人投</div>
            </div>
            <div class="portfolio fmoney" data-cat="fmoney" data-sid="3">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/fmoney3.png" alt="" />
                </div>
                <div class="tit">滚雪球</div>
            </div>
            <div class="portfolio fmoney" data-cat="fmoney" data-sid="4">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/fmoney4.png" alt="" />
                </div>
                <div class="tit">爱钱帮</div>
            </div>

            <div class="portfolio fsites" data-cat="fsites" data-sid="1">
                <div class="portfolio-wrapper">
					<a href="details/index19.html">
                    <img src="imgs/logos/fsites1.png" alt="" />
					</a>
                </div>
                <div class="tit">寻拍</div>
            </div>
            <div class="portfolio fsites" data-cat="fsites" data-sid="2">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/fsites2.png" alt="" />
                </div>
                <div class="tit">欧亚卖场</div>
            </div>
            <div class="portfolio fsites" data-cat="fsites" data-sid="3">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/fsites3.png" alt="" />
                </div>
                <div class="tit">博鳌亚洲论坛</div>
            </div>


            <div class="portfolio fweixin" data-cat="fweixin" data-sid="1">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/fweixin1.png" alt="" />
                </div>
                <div class="tit">掌上微社区</div>
            </div>
            <div class="portfolio fweixin" data-cat="fweixin" data-sid="2">
                <div class="portfolio-wrapper">
                    <img src="imgs/logos/fweixin2.png" alt="" />
                </div>
                <div class="tit">K-word坤的微世界</div>
            </div>

            <div class="cb"></div>
        </div>
        <a class="more-duo" href="cases.html" >查看更多 ></a>
    </div>
</section>
<!--经典案例 end-->
<!--我们的优势-->
<section class="sect2">
    <div class="sec-box">
        <h1 class="sec-h1 sec2-h1">品牌优势</h1>
        <h3 class="sec-h3 sec2-h3">八年奋斗，不忘初心，选择了海博，您就选择了专业和放心。</h3>
        <div class="pai-box">
            <div class="left fl">
                <div class="simg">
                    <img src="images/icon5.png" alt=""/>
                </div>
                <p class="pf1"><span class="year">2010年</span><span class="spanR se4">优秀开发团队</span></p>
                <p class="pf2"><span class="year">2011年</span><span class="spanR se4">最佳无线应用奖</span></p>
                <p class="pf3"><span class="year">2012年</span><span class="spanR"><span class="se4">最具人气</span>移动开发服务商<span class="se4">博鳌亚洲论坛</span>合作伙伴</span></p>
                <p class="pf4"><span class="year">2013年</span><span class="spanR">和中科院成立<span class="se4">联合实验室</span></span></p>
                <p class="pf5"><span class="year">2014年</span><span class="spanR">移动互联网领域<span class="se4">杰出服务商</span></span></p>
                <p class="pf6"><span class="year">2015年</span><span class="spanR"><span class="se4">京东商场</span>战略合作伙伴</span></p>
                <p class="pf7"><span class="year">2016年</span><span class="spanR">猪八戒网<span class="se4">十周年皇冠级服务商</span></span></p>
            </div>
            <div class="right fr">
                <ul class="pai-img">
                    <li><img src="images/img2.png" alt=""/></li>
                    <li><img src="images/img3.png" alt=""/></li>
                    <li><img src="images/img4.png" alt=""/></li>
                    <li><img src="images/img5.png" alt=""/></li>
                    <li><img src="images/img6.png" alt=""/></li>
                    <li><img src="images/img7.png" alt=""/></li>
                    <div class="cb"></div>
                    <div class="shadow-txt">
                        <div class="ys-img"><img src="images/ys-txt.png" alt=""/></div>
                    </div>
                </ul>
            </div>
            <div class="cb"></div>
        </div>
    </div>
</section>
<!--我们的优势 end-->
<!--团队介绍-->
<section  class="sect5">
    <div class="sec-box">
        <h1 class="sec-h1 wrtie sec5-h1">我们的团队</h1>
        <h3 class="sec-h3 wrtie sec5-h3">项目核心团队来自微软，致力于打造国内顶级ＡＰＰ开发团队。</h3>
        <div class="team-box main">
            <ul>
                <li class="hvr-skew-backward li1">
                    <div class="center">
                        <div class="num num1">
                            <div class="jia">+</div>
                            <span class="zhang">10</span>
                        </div>
                        <div class="tit"><span class="zi">10 </span>年开发经验</div>
                    </div>
                </li>
                <li class="hvr-skew-backward li1">
                    <div class="center">
                        <div class="num num2">
                            <div class="jia">+</div>
                            <span class="zhang">400</span>
                        </div>
                        <div class="tit">服务于<span class="zi"> 400 </span>多个企业</div>
                    </div>
                </li>
                <li class="hvr-skew-forward li2">
                    <div class="center">
                        <div class="num num3">
                            <div class="jia">+</div>
                            <span class="zhang">700</span>
                        </div>
                        <div class="tit"><span class="zi">700 </span>余款应用开发</div>
                    </div>
                </li>
                <li class="hvr-skew-forward li2">
                    <div class="center">
                        <div class="num num4">
                            <div class="jia">+</div>
                            <span class="zhang">190</span>
                        </div>
                        <div class="tit"><span class="zi">190 </span>多人的开发团队</div>
                    </div>
                </li>
                <div class="cb"></div>
            </ul>
        </div>
    </div>
</section>
<!--团队介绍 end-->
<!--合作客户 -->
<section  class="sect6 clients">
    <div class="sec-box main">
        <h1 class="sec-h1 sec6-h1">合作客户</h1>
        <h3 class="sec-h3 sec6-h3">因为努力和真诚，他们选择了我们。我们诚邀您，如他们一样，体验海博远创的服务及科技创新成果。</h3>
        <div class="box kehu-box">
            <ul class="items list-inline">
                <li class="cctv b r"><span></span></li>
                <li class="unicom b r"><span></span></li>
                <li class="tsinghua b r"><span></span></li>
                <li class="cas b r"><span></span></li>
                <li class="sipo b"><span></span></li>
                <li class="apple b r"><span></span></li>
                <li class="das b r"><span></span></li>
                <li class="hunantv b r"><span></span></li>
                <li class="sino b r"><span></span></li>
                <li class="report b"><span></span></li>
                <li class="gedu r"><span></span></li>
                <li class="bgg r"><span></span></li>
                <li class="bsec r"><span></span></li>
                <li class="huadan r"><span></span></li>
                <li class="zd"><span></span></li>
            </ul>
        </div>
    </div>
</section>
<!--合作客户 end-->
<!--服务流程 -->
<section class="sect7">
    <div class="sec-box sec-box7">
        <h1 class="sec-h1 sec7-h1">服务流程</h1>
        <h3 class="sec-h3 sec7-h3">严谨科学的项目开发管理流程，是项目最终成功的有力保证。</h3>
        <div class="liuc-box">
            <div class="lcImg"><img src="images/img1.png" alt=""/></div>
        </div>
    </div>
</section>
<!--服务流程  end-->
<!--联系我们 -->
<section class="sect8">
    <div class="sec-box">
        <div class="box di-box main">
            <div class="di-mode1">
                <h1>联系我们</h1>
                <div class="lx-box">
                    <div class="lx-mode lx-mode1">
                        <p><span class="tit">电话</span>400-1097899</p>
                        <p><span class="tit">手机</span>18701268669<br /><span style="padding-left:32px;">18201599883</span></p>
                    </div>
                    <div class="lx-mode lx-mode2">
                        <span><span class="tit">传真</span>010-62971107</span>
                    </div>
                    <div class="lx-mode lx-mode3">
                        <span><span class="tit">邮箱</span><u style="color: #33b7fb; text-decoration: none;">marketing@ihope99.com</u></span>
                    </div>
                    <div class="lx-mode lx-mode4">
                        <span><span class="tit">QQ</span>982677074<br /><span style="padding-left:27px;">982677000</span></span>
                    </div>
                </div>

            </div>
            <div class="di-mode3">
                <h1>关于我们</h1>
                <div class="about-box">
                    <p>北京市海博远创科技有限公司是国内最早从事iOS\Android开发的公司，在移动互联网技术以及电子商务网站等领域处于国内领先地位。公司致力于成为国内最好的移动平台软件研发公司，客户包括中央电视台、中国电信、中国联通、中科院、新华社、中国好声音、总参总医院、花旗银行等。</p>
                </div>
            </div>
        </div>
    </div>
    <div id="div10">

        <div id="copyright">

            <p><span id="span10_1">Copyright &copy; 2011-2017 iHope99.com All Rights Reserved  版权所有 · 北京海博远创软件科技有限公司   北京房卡麻将开发,北京棋牌游戏开发,麻将游戏开发,斗地主游戏开发</span><span id="span10_2">备案编号：京ICP备11043388号</span></p>


        </div>

    </div>
</section>

<!--联系我们 end-->

</div>
<script src="js/notification.js"></script>
<script src="js/blocksit.min.js"></script>
<script src="js/pubu.js"></script>
<script src="js/fx.js"></script>
<script>
    $(".portfolio-wrapper").click(function(){
        var names = $(this).parents(".portfolio").data("cat");
        var ssid = $(this).parents(".portfolio").data("sid");
        $.ajax({
            url:"js/data.json",
            dataType: 'json',
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            type: 'GET',
            success:function(data){
                // console.log(data[names][ssid]);
                // location.href="detail.html?name="+names+"&id="+ssid;
			var pdTxt = data[names][ssid-1].imgTits[0];
            if(pdTxt != ""){
                location.href="detail.html?name="+names+"&id="+ssid;
            }

            }
          
        })

    })

    //侧边栏 返回顶部
    $(".cebb-bt").hover(function(){
        $(this).addClass("active");
    },function(){
        $(this).removeClass("active");
    })

</script>
</body>
</html>

