function header(){
    var html = "";
    html += '<div class="cebbox">';
    html += '<div class="cebb-top">';
	html += '<img class="kgimg2" src="../images/kgimg2.png" alt=""/>';
	html += '<div class="tabkg">';
    html += '<img class="kgimg1" src="../images/kgimg1.png" alt=""/>';
    html += '<div class="kgtxt">';
    html += '联<br />';
    html += '系<br />';
    html += '方<br />';
    html += '式<br />';
    html += '</div>';
    html += '<img class="kgimg3" src="../images/kgimg3.png" alt=""/>';
    html += '</div>';
    html += '<div class="cebb-logo">';
    html += '<a href="../index.php">';
    html += '<img src="../images/ce7.png" alt="海博远创科技有限公司" title="海博远创科技有限公司"/>';
    html += '</a>';
    html += '</div>';
	html += '<div class="ce-line ce-line1"><img src="../images/ce6.png" alt=""/></div>';
    html += '<div class="cebb-tel">';
    html += '<img src="../images/ce3.png" alt="400-109-7899" title="400-1097899"/>';
    html += '</div>';
    html += '<div class="ce-line"><img src="../images/ce6.png" alt=""/></div>';
    html += '<div class="cebb-qq1">';
    html += ' <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=982677074&site=qq&menu=yes"><img  style="CURSOR: pointer"  border="0"  SRC="../images/qq1.png" alt="QQ沟通"></a>';
    html += '</div>';
    html += '<div class="cebb-qq2">';
    html += '<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=982677000&site=qq&menu=yes"><img  style="CURSOR: pointer"  border="0" SRC="../images/qq2.png" alt="QQ沟通"></a>';
    html += '</div>';
    html += '<div class="cebb-txt">';
    html += '<img src="../images/ce4.png" />';
    html += '</div>';
    html += '</div>';
    html += '<div class="cebb-bot">';
    html += '<div class="cebb-bt">';
    html += '<a href="javascript:;">';
    html += '<img src="../images/cet2.png" class="btimg1"  alt=""/>';
    html += '<img src="../images/cet1.png" class="btimg2"   alt=""/>';
    html += '</a>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '<!--header-->';
    html += '<div class="c-header" id="div0">';
    html += '<div class="logo">';
    html += '<a href="../index.php"><img src="../images/logo.png" alt="海博远创" class="img-responsive" /></a>';
    html += '</div>';
    html += '<nav class="menu">';
    html += '<i class="line"></i>';
    html += '<ul class="list-inline">';
    html += '<li><a href="../index.php?id=1">首页</a></li>';
    html += '<li><a  href="../games.html">游戏开发</a></li>';
    html += '<li><a href="../index.php?id=3">解决方案</a></li>';
    html += '<li class="active"><a href="../cases.html">经典案例</a></li>';
    html += '<li style="width: 0; padding:0; margin:0;"><a></a></li>';
    html += '<li><a href="../index.php?id=5">团队介绍</a></li>';
    html += '<li><a href="../index.php?id=6">合作客户</a></li>';
    html += '<li><a href="../index.php?id=7">服务流程</a></li>';
    html += '<li><a href="../index.php?id=8">联系我们</a></li>';
    html += '</ul>';
    html += '</nav>';
    html += '<div class="hotline">';
    html += '<img src="../images/tel1.png" alt=""/>';
    html += '</div>';
    html += '</div>';
    html += '<!--header end-->';
    $("#comHeader").html(html);
	
	
   xishou();
    function xishou(){
         $(".tabkg").click(function(){
            $(".cebb-top").animate({right:"0"},500);
            $(".tabkg").hide();
        });
        $(".kgimg2").click(function(){
            $(".cebb-top").animate({right:"-150px"});
            setTimeout(function(){
                $(".tabkg").show();
            },600);
        })
    }
}


function footer(){

    var html = "";
    html += '<!--footer-->';
    html += '<div id="div9">';
    html += '<div class="footerBg"></div>';
    html += '<div id="footer">';

    html += '<div id="div_5-1">';

    html += '<p class="p_5-1">联系我们</p>';

    html += '<img src="../images/xian1.png" />';

    html += '<p class="p_5-2"><span>电话：</span>400-109-7899</p>';

    html += '<p class="p_5-2"><span>手机：</span>18701268669 18201599883</p>';

    html += '<p class="p_5-2"><span>传真：</span>010-62971107</p>';

    html += '<p class="p_5-2"><span>邮箱：</span><span >marketing@ihope99.com</span></p>';

    html += '<p class="p_5-2"> <span>QQ：</span>982677074 982677000</p>';

    html += '<p class="p_5-2"> <span>地址：</span>北京市海淀区上地西路上地科技大厦3层</p>';

    html += '</div>';

    html += '<div id="div_5-2">';

    html += '<p class="p_5-1">服务内容</p>';

    html += '<img src="../images/xian2.png" />';

    html += '<p class="p_5-2">iOS开发</p>';

    html += '<p class="p_5-2">Android开发</p>';

    html += '<p class="p_5-2">网站开发</p>';

    html += '<p class="p_5-2">微信开发</p>';

    html += '<p class="p_5-2">项目咨询</p>';

    html += '</div>';

    html += '<div id="div_5-3">';

    html += '<p class="p_5-1">关于我们</p>';

    html += '<img src="../images/xian3.png" />';

    html += '<p class="p_5-3">北京海博远创是国内最早从事iOS\Android开发的公司，在移动互联网技术以及电子商务网站等领域处于国内领先地位。公司致力于成为国内最好的移动平台软件研发公司，客户包括中央电视台、中国电信、中国联通、中科院、新华社、中国好声音、总参总医院、花旗银行等。</p>';

    html += '</div>';

    html += '</div>';

    html += '</div>';
    html += '<div id="div10">';

    html += '<div id="copyright">';

    html += '<p><span id="span10_1">Copyright &copy; 2011-2017 iHope99.com All Rights Reserved  版权所有 ? 北京海博远创软件科技有限公司</span><span id="span10_2">备案编号：京ICP备11043388号</span></p>';


    html += '</div>';

    html += '</div>';
    $("#comFooter").html(html);

}


function navLine(){

    var pos = $(".list-inline li.active").offset().left;
    var wid = $(".list-inline li.active").outerWidth();
    $(".line").css({"left":pos,"width":wid});
    $(".line").css({"left":pos,"width":wid});
    $(".list-inline li").hover(function(){
        var pos = $(this).offset().left;
        var wid = $(this).outerWidth();
        $(".line").animate({"left":pos,"width":wid});
    },function(){

    });

    $(".list-inline").hover(function(){

    },function(){
        var pos = $(".list-inline li.active").offset().left;
        var wid = $(".list-inline li.active").outerWidth();
        $(".line").animate({"left":pos,"width":wid});
    })


    //侧边栏 返回顶部
    $(".cebb-bt").hover(function(){
        $(this).addClass("active");
    },function(){
        $(this).removeClass("active");
    })
    $(".cebb-bt").click(function(){
        window.scrollTo(0, 0);
    })
};