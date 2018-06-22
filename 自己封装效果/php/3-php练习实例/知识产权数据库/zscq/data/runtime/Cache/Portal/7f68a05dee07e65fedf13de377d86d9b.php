<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>商标管理-商标查询</title>
	<link rel="stylesheet" href="public/html/css/up-style.css" type="text/css" />
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
	 <link rel="stylesheet" href="public/html/css/brand2.css"/>
	<link rel="stylesheet" href="public/html/css/brand.css"/>
   
	<link rel="stylesheet" type="text/css" href="public/html/js/tree_themes/SimpleTree.css"/>
    <script type="text/javascript" src="public/html/js/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="public/html/js/js.js"></script>
    <script type="text/javascript" src="public/html/js/SimpleTree.js"></script>
    <script type="text/javascript">
        $(function(){
            $(".st_tree").SimpleTree({
//		click:function(a){
//			if(!$(a).attr("hasChild"))
//				alert($(a).attr("ref"));
//		}
            });
        });
    </script>
	<style type="text/css">
		 /*查询中*/
        .cx-box{width:500px; position: fixed; left:0; top:0; background: #fff; display: none; z-index: 14;}
        .cx-top{height:232px; background: url("public/html/images/bg17.png") no-repeat 0 0;}
        .cx-close{width:100%; text-align: right; }
        .cx-close img{width:12px; height:12px; padding-right:26px; padding-top: 12px; cursor: pointer;}
        .cx-loading{padding-top: 16px; padding-bottom: 20px; text-align: center;}
        .cx-loading img{width: 80px; height: 80px;}
        .cx-txt{font-size: 12px; color: #add4f5; text-align: center;}
        .cx-txt .active{font-size: 16px; color: #fff;}
        .cx-bot{width: 100%; padding:36px 0; text-align: center; font-size: 12px; }
        .cx-bot .time{color: #f34545;}
        /*查询中 end*/
		#hyly{border: 1px solid #eee; border-bottom:none; display:none;}
		.lei-tab{overflow:hidden; border-right:none;}
		.lei-kai-tab{border-right:1px solid #eee;width:17.8%;}
	</style>
</head>
<body>
    <div class="brand-gl main-hou c333">
        <div class="bgl-nav bb">
                <a href="<?php echo U('Brand/brand_lst');?>">商标列表</a>
                <a href="<?php echo U('Brand/brand_query');?>" class="active">商标查询</a>
                <a href="<?php echo U('Brand/brand_query_lst');?>">查询列表</a>
            </div>
        <div class="bgl-mode">
            <h1 class="c-h1 mt20 bdn">查询步骤</h1>
            <div class="bgl-cont bgl-steps">
                <span class="bgl-step">1</span>
                <span>用户提交商标查询</span>
                <span class="bgl-point"></span>
                <span class="bgl-step">2</span>
                <span>顾问查询商标</span>
                <span class="bgl-point"></span>
                <span class="bgl-step">3</span>
                <span>顾问反馈结果</span>
            </div>
        </div>
		<form method="post" action="<?php echo U('Brand/brand_query');?>">
		

        <div class="bgl-mode">
            <h1 class="c-h1">上传商标</h1>
            <div class="bgl-cont oh">
                <div class="brand-chuan-left fl">
                    <div class="brand-chuan-left-top oh">
                        <input type="text" class="input-txt fl" placeholder="请输入您要注册的商标名称" name="markname" value="" maxlength="20"/>
                        <input type="button" class="blue-big-btn fl" value="预览" onclick="yulan()"/>
                    </div>
                    <div class="brand-chuan-left-bot oh">
                        <div class="wangge fl">
                            <img src="public/html/images/yl.png" width="200" height="200" alt="" id="img"/>
                        </div>
                        <div class="chuanSay fl">
                            <p class="txt">jpg格式，大小不超过200K 像素介于400×400px至1500×1500px之间 尺寸介于5×5CM至10×10CM之间</p>
                            <p><input type="button" class="blue-big-btn fl"  onclick="shangchuan();" value="上传图片"/></p>
							<input type="hidden" name="image" value="">
                        </div>
                    </div>
                </div>
                <div class="brand-chuan-right fl">
                    <div class="img fl"><img src="public/html/images/say.png" width="51" height="80" alt=""/></div>
                    <div class="txt fl">
                        <h2>商标图样注意事项</h2>
                        <p>1、如果您没有商标设计图，请输入商标名称，点击预览，我们会生成一个商标图样，如果您 有商标设计图，请输入商标名称后，上传商标图</p>
                        <p>2、我们将完全依照您提供的商标标样文字、图案、颜色提交至国家商标局。请您确认后上传。 </p>
                        <p>3、如果上传图样为彩色，取得注册后，只能按照该彩色图样使用。  </p>
                        <p>4、如果上传图样为黑白，取得注册后，可以更换商标颜色使用，建议上传黑白图样。</p>
                    </div>
                </div>

            </div>
        </div>
        <div class="bgl-mode">
            <div class="bgl-cont ">
                <div class="c-rl-cont-ts">
                    <p class="ts1">1、顾问会按照您提交的名称和商标样式进行查询，请慎重填写。 </p>
                    <p>2、如果没有商标样式，请输入名称后点击【预览】将根据商标的名称自动。</p>
                </div>
            </div>
        </div>
        <div class="bgl-mode">
            <h1 class="c-h1 mt20 bdn">查询方式</h1>
            <div class="bgl-cont">
                <div class="bgl-cx-styles">
                    <span class="active" onclick="type(1)">智能推荐</span>
                    <span onclick="type(2)">委托顾问查询</span>
                    <span onclick="type(3)">自主选择分类</span>
                </div>
				<input type="hidden" name="type" value="1">
                <p class="bgl-cx-styles-say">您只需选择领域及行业，系统会自动推荐适合注册的分类。</p>
            </div>
        </div>
        <!--这里是查询方式的三种选择所需要显示部分的盒子-->
        <div class="tj-styles-box">
            <!--智能推荐-->
            <div class="tj-mode active">
                <div class="bgl-mode">
                    <h1 class="c-h1">选择领域及行业</h1>
                    <div class="bgl-cont">
                        <div class="tj-styles-box1 fl">
                            <div class="c-fp-sel-box ly-width">
                                <input type="text" readonly="readonly" class="c-fp-sel-value" placeholder="选择所在领域"/>
                                <span class="downUp"></span>
                                <div class="c-fp-sel-p ly-width">
                                  <?php if(is_array($industry)): foreach($industry as $key=>$vo): ?><P onclick="industr(<?php echo ($vo["id"]); ?>)"><?php echo ($vo["industry_name"]); ?></P><?php endforeach; endif; ?>   
                                </div>
                            </div>
                            <div class="cb"></div>
                        </div>
						<input type="hidden" name="industry_id">
                        <div class="tj-styles-box2 fl">
                            <div class="c-fp-sel-box ly-width">
                                <input type="text" readonly="readonly" class="c-fp-sel-value" placeholder="选择所在行业"/>
                                <span class="downUp"></span>
                                <div class="c-fp-sel-p ly-width" id="hy">

                                </div>
                            </div>
                            <div class="cb"></div>
                        </div>
						<input type="hidden" name="industry_id2">
                        <div class="cb"></div>
                    </div>
                </div>
                  <div class="bgl-mode ">
                    <h1 class="c-h1">选择商品及服务</h1>
                    <div class="bgl-cont " id="nmd">
					<div id="hyly">
			
					</div>
                        <div class="hang-lei-box">
                            <!--添加类的盒子 第2步盒子-->
                            <div class="add-step2-box">
                               
                            </div>
                            <!--添加类的盒子 第2步盒子 end-->
                            <div class="hang-lei-mode f12">
                                <h1 class="lei-h1">继续添加商品类别</h1>
                                <div class="hang-lei-cont">
                                    <!--展开合并第1步-->
                                    <!--第1步开关-->
                                    <span class="lei-reduce  addReduce">-</span>
                                    <div class="lei-xu-cont addReduce-cont1">
                                        <?php if(is_array($arr)): foreach($arr as $key=>$vo): ?><span  class="<?php echo ($vo["id"]); ?>">第<?php echo ($vo["id"]); ?>类 <?php echo ($vo["name"]); ?></span><?php endforeach; endif; ?>
                                   
                                    </div>
                                    <!--展开合并第一步 end-->
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
            <!--委托顾问查询/-->
            <div class="tj-mode"></div>
            <!--自主选择分类-->
            <div class="tj-mode">
                <div class="zizhu-box oh">
                    <div class="zizhu-left-nav">
                       <!--树状 菜单-->
                        <div class="st_tree">
                            <ul>
							<?php if(is_array($arr)): foreach($arr as $key=>$vo): ?><li onclick="nice(<?php echo ($vo["code"]); ?>)"><a href="#" ref="ckgl">第<?php echo ($vo["id"]); ?>类 &nbsp;<?php echo ($vo["name"]); ?></a></li>
                                <ul>
								<?php if(is_array($vo["subset"])): foreach($vo["subset"] as $key=>$vi): ?><li><a href="#" ref="kcgl"><?php echo ($vi["name"]); ?></a></li>
								   <ul>
								   <?php if(is_array($vi["subset"])): foreach($vi["subset"] as $key=>$vs): ?><li onclick="addbrand(<?php echo ($vs["id"]); ?>)"><a href="#" ref="kcgl"><?php echo ($vs["name"]); ?></a></li><?php endforeach; endif; ?>
                                    </ul><?php endforeach; endif; ?>
                                </ul><?php endforeach; endif; ?>
                            </ul>
                        </div>
                        <!--树状 菜单 end-->
                    </div>
                    <div class="zizhu-right-cont" id="mydiv">
                        
                    </div>
					<div id="mydiv_pid">
                        
                    </div>
					<div id="mydiv_zid">
                        
                    </div>
                </div>
            </div>
        </div>
        <!--这里是查询方式的三种选择所需要显示部分的盒子 end-->
	<!--查询商标上传图片功能-->
    <div class="shadow"></div>
    <div class="container">
        <div class="c-tan-top oh">
            <div class="c-tan-Title fl">上传图片</div>
            <div class="c-tan-close fr"><img class="img1"  src="public/html/images/close.png" width="12" height="12" alt=""/><img  class="img2" src="public/html/images/closel.png" width="12" height="12" alt=""/></div>
        </div>
        <div class="imageBox">
            <div class="thumbBox"></div>
            <div class="spinner" style="display: none"></div>
        </div>
        <div class="action">
            <!-- <input type="file" id="file" style=" width: 200px">-->
            <div class="new-contentarea tc"> <a href="javascript:void(0)" class="upload-img">
                <label for="upload-file">上传图像</label>
            </a>
                <input type="file" class="" name="upload-file" id="upload-file" />
            </div>
           <div class="oh">
				<span id="btnZoomOut" class="Btnsty_peyton"><img src="public/html/images/add4.png" /></span>
				<span id="btnZoomIn" class="Btnsty_peyton"><img src="public/html/images/add3.png" /></span>
               <!-- <input type="button" id="btnZoomIn" class="Btnsty_peyton" value=""  >
               <input type="button" id="btnZoomOut" class="Btnsty_peyton" value="" > -->
           </div>
        </div>
		<div class="tc pt10 pb30 c999 f12">请上传上传格式JPG、JPEG、PNG,大小不超过200K</div>
        <div class="btnCrop_box bt pt20 pb20 oh">
            <input type="button" id="btnCrop"  class="Btnsty_peyton" value="确定">
        </div>
        <!--<div class="cropped"></div>-->
    </div>
    <!--查询商标上传图片功能 end-->
        <div class="bgl-mode bt">
            <div class="bgl-cont tr">
                <input type="button" onclick="add_chaxun()"  class="blue-big-btn" value="立即办理"/>
            </div>
        </div>
			</form>
    </div>

 <!--数据查询中-->
  <!--弹出框遮罩-->
    <div class="c-tan-shadow"></div>
    <div class="cx-box">
        <div class="cx-top">
            <div class="cx-close"><img src="public/html/images/close3.png" alt=""/></div>
            <div class="cx-loading"><img src="public/html/images/loading.gif" alt=""/></div>
            <div class="cx-txt">
                <p>大数据引擎检索完成</p>
                <p class="active">一类检查检索中</p>
                <p>一类查询检查完成</p>
            </div>
        </div>
        <div class="cx-bot">
            <p>数据量巨大，专业人士正在努力查询中...</p>
            <p>预计<span class="time">2分59秒</span>后出结果</p>
        </div>
       
    </div>
	<!--数据查询中 end-->
<!--数状菜单-->
<input type="hidden" name="chaxundanid">
<script type="text/javascript" >
        function addEvent(el,name,fn)
        function nextnode(node)
        function prevnode(node)
        function parcheck(self,checked)
        }
        function sibcheck(self)
            return n==sbi.length?true:false;
        }
        addEvent(document.getElementById('root'),'click',function(e)else{
                            tp.style.display = 'none';
                            prevnode(target.parentNode.previousSibling).className = 'add'
                        }
                    }
                    break;
                case 'SPAN'://点击图标只展开或者收缩
                    var ap = nextnode(nextnode(target.nextSibling).nextSibling);
                    if(ap.style.display != 'block' ){
                        ap.style.display = 'block';
                        target.className = 'ren'

                    }else{
                        ap.style.display = 'none';
                        target.className = 'add'
                    }
                    break;
                case 'INPUT'://点击checkbox，父亲元素选中，则孩子节点中的checkbox也同时选中，孩子结点取消父元素随之取消
                    if(target.checked){
                        if(tp){
                            var checkbox = tp.getElementsByTagName('input');
                            for(var i=0;i<checkbox.length;i++)
                                checkbox[i].checked = true;
                        }
                    }else{
                        if(tp){
                            var checkbox = tp.getElementsByTagName('input');
                            for(var i=0;i<checkbox.length;i++)
                                checkbox[i].checked = false;
                        }
                    }
                    parcheck(target,sibcheck(target));//当孩子结点取消选中的时候调用该方法递归其父节点的checkbox逐一取消选中
                    break;
            }
        });
        window.onload = function()
        }
</script>
<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script src="public/html/js/js.js"></script>
<script>
function add_chaxun(){
    var markname = $('[name="markname"]').val();
    var image = $('[name="image"]').val();
	var type = $('[name="type"]').val();
	var mydiv_zid = document.getElementById('mydiv_zid');
    var twoid = mydiv_zid.getElementsByTagName('input');
	var zid = "";
    for(var i=0; i<twoid.length; i++){ 
		zid += twoid[i].value+',';
    } 
    var str=zid.substring(0,zid.length-1);
	var mydiv_pid = document.getElementById('mydiv_pid');
    var oneid = mydiv_pid.getElementsByTagName('input');
	var pid = "";
    for(var i=0; i<oneid.length; i++){ 
		pid += oneid[i].value+',';
    } 
    var str2=pid.substring(0,pid.length-1);
	if(type=='3'){
	     if(markname!=''&&image!=''&&type!=''&&str!=''&&str2!=''){
				$.ajax({
				  type: "POST",
				  url: "<?php echo U('Brand/brand_query');?>",
				  data: {'markname':markname,'image':image,'type':type,'str':str,'str2':str2},
				  success: function(msg){
				      if(msg!=''){
						 $('[name="chaxundanid"]').val(msg);
						 cxzhong();
					  }
					  
				  }
			   });
       }

	}
	if(type=='1'){

		var nmd = document.getElementById('nmd');
        var three = nmd.getElementsByTagName('input');
	    var pid = "";
        for(var i=0; i<three.length; i++){ 
		    pid += three[i].value+',';
        } 
        var str2=pid.substring(0,pid.length-1);
		var industry_id = $('[name="industry_id"]').val();
		var industry_id2 = $('[name="industry_id2"]').val();
        if(markname!=''&&image!=''&&type!=''&&str2!=''&&industry_id!=''&&industry_id2!=''){
			
				$.ajax({
				  type: "POST",
				  url: "<?php echo U('Brand/brand_query');?>",
				  data: {'markname':markname,'image':image,'type':type,'str2':str2,'industry_id':industry_id,'industry_id2':industry_id2},
				  success: function(msg){
					 if(msg!=''){
						 $('[name="chaxundanid"]').val(msg);
						 cxzhong();
					  }
				  }
			   });
       }
	}
	if(type=='2'){
	   if(markname!=''&&image!=''&&type!=''){
	    $.ajax({
		  type: "POST",
		  url: "<?php echo U('Brand/brand_query');?>",
		  data: {'markname':markname,'image':image,'type':type},
		  success: function(msg){
			if(msg!=''){
						 $('[name="chaxundanid"]').val(msg);
						 cxzhong();
					  }
		  }
	   });
	}
	}
	
}
//    商标查询中
function cxzhong(){
    var oShadow = $(".c-tan-shadow"); //遮罩层
    var oBox = $(".cx-box"); //弹出框
    var oClose = $(".cx-close"); //关闭弹出框按钮

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
        clearTimeout(timer1);
        clearTimeout(timer2);
		location.href="<?php echo U('Brand/brand_query_lst');?>";
    });
//    倒计时
    var ts = 3*60*1000-1000;//倒计时总时长3分钟
    var timer1 = setInterval(timer,1000);
    var timer2 = setInterval(function(){
            /*var id = $('[name="chaxundanid"]').val();
            $.ajax({
				  type: "POST",
				  url: "<?php echo U('Brand/brand_query');?>",
				  data: {'id':id},
				  success: function(msg){
					  if(msg!=''){
						
					  }
				  }
	      });*/
    },5000);
    function timer()
    {
        ts = ts - 1000;
        var mm = parseInt(ts / 1000 / 60 % 60, 10);//计算剩余的分钟数
        var ss = parseInt(ts / 1000 % 60, 10);//计算剩余的秒数
        if(mm == 0 && ss == 0){
            clearTimeout(timer1);
            clearTimeout(timer2);
            location.href="<?php echo U('Brand/brand_query_lst');?>";
        }
        document.getElementsByClassName("time")[0].innerHTML = mm + "分" + ss + "秒";
    }
}
//调用方法生成图片返回路径
function yulan(){
   var markname = $('[name="markname"]').val();
   if(markname!=''){
	   $.ajax({
		  type: "POST",
		  url: "<?php echo U('Brand/preview');?>",
		  data: {'markname':markname},
		  success: function(msg){
			 $("#img").attr({src:msg,alt:"图片生成失败！！！" });
			 $('[name="image"]').val(msg);
		  }
	   });
   }
   
}
//切换查询方法
function type(e){
	if(e=='1'){
	    $('[name="type"]').val('1');
	}else if(e=='2'){
	    $('[name="type"]').val('2');
	}else if(e=='3'){
	    $('[name="type"]').val('3');
	}
}
//查询尼斯分类
function addbrand(e){
	 $.ajax({
		  type: "POST",
		  url: "<?php echo U('Brand/nice_level');?>",
		  data: {'code':e},
		  success: function(msg){
			  var obj = eval("("+msg+")"); 
			  var mydiv_pid = document.getElementById('mydiv_pid');
              var oneid = mydiv_pid.getElementsByTagName('input');
			  var s=''; 
              for(var i=0; i<oneid.length; i++){ 
                      if(oneid[i].value == obj['b']['id']){
					     s='1';
					  }
               }
			  var mydiv_zid = document.getElementById('mydiv_zid');
              var twoid = mydiv_zid.getElementsByTagName('input');
			  var ss=''; 
              for(var i=0; i<twoid.length; i++){ 
                      if(twoid[i].value == obj['a']['id']){
					     ss='1';
					  }
               } 
			  if(s=='1'){
				  if(ss!='1'){
                  var c = "<div class='lei-name' id='"+obj['a']['id']+"'>"+obj['a']['code']+" &nbsp "+obj['a']['name']+"<span class='del' onclick='deldel("+obj['a']['id']+")'></span></div>";
				  var html3= $('#'+obj['b']['id']+'as').html()+c;
				  $('#'+obj['b']['id']+'as').html(html3);
				  var d = "<input type='hidden' name='twoid[]'  id='two"+obj['a']['id']+"'  value="+obj['a']['id']+">";
				  var html4= $('#mydiv_zid').html() +d;
				  $('#mydiv_zid').html(html4);
				  }
				  
			  }else{
			     var a = "<div class='hang-lei-mode' id="+obj['b']['id']+"><h1 class='lei-h1'>第"+obj['b']['id']+"类 "+obj['b']['name']+"<span onclick='deldiv("+obj['b']['id']+")'>删除</span></h1><div class='hang-lei-cont' id="+obj['b']['id']+"as"+"><div class='lei-name' id='"+obj['a']['id']+"'>"+obj['a']['code']+" &nbsp "+obj['a']['name']+"<span class='del' onclick='deldel("+obj['a']['id']+")'></span></div></div></div>";
				  var html1= $('#mydiv').html() +a;
				  $('#mydiv').html(html1);
				  var b = "<input type='hidden' name='oneid[]' id='one"+obj['b']['id']+"' value="+obj['b']['id']+">";
				  var html2= $('#mydiv_pid').html() +b;
				  $('#mydiv_pid').html(html2);
				  var d = "<input type='hidden' name='twoid[]' id='two"+obj['a']['id']+"'  value="+obj['a']['id']+">";
				  var html4= $('#mydiv_zid').html() +d;
				  $('#mydiv_zid').html(html4);
			  }
			  
		  }
	   });
}
function deldiv(e){
 $("#"+e).remove();
 $("#one"+e).remove();
}
function deldel(e){
    $("#"+e).remove();
    $("#two"+e).remove();
}
//行业领域切换
function industr(e){
	   $('[name="industry_id"]').val(e);
       $.ajax({
		  type: "POST",
		  url: "<?php echo U('Brand/industry');?>",
		  data: {'id':e},
		  success: function(msg){
			   var obj = eval(msg); 
			   var a = "";
			   for(var i=0; i<obj.length; i++){ 
				   a += "<P onclick='indu("+obj[i]['id']+")'>"+obj[i]['industry_name']+"</P>";
               }
			   $('#hy').html(a);
		  }
	   });
}
function indu(e){
	   $('[name="industry_id2"]').val(e);
       $.ajax({
		  type: "POST",
		  url: "<?php echo U('Brand/indu');?>",
		  data: {'id':e},
		  success: function(msg){
			  $('#hyly').show();
			  $('#hyly').html(msg);
		  }
	   });
}

//////////////////////////////////////////////
//    第1步
$(".addReduce").click(function(){
    $(this).toggleClass("active");
    if($(this).hasClass("active")){
        $(this).html("-");
        $(".addReduce-cont1").slideDown();
    }else{
        $(this).html("+");
        $(".addReduce-cont1").slideUp();
    }
});

//第2步
$(".addReduce-cont1 span").click(function(){
	var id = $(this).attr("class");
	var varaa = $(this).text();
    if($(this).hasClass("active")){
        return false;
    }else{
        $(this).addClass("active");
        $(".add-step2-box").show();
		var html1 = $(".add-step2-box").html();

       $.ajax({
		  type: "POST",
		  url: "<?php echo U('Brand/erjiindu');?>",
		  data: {'id':id},
		  async:false,
		  success: function(msg){
			   var obj = eval(msg); 
			   var b = '';
			   for(var i=0; i<obj.length; i++){ 
				   if(i=='0'){
				      var c = "active";
				   }else{
				      var c = "";
				   }
				   b += '<p class="lei-tab '+c+'" id="'+obj[i]['id']+'">'+obj[i]['code']+obj[i]['name']+'</p>';
               }
			   var a = '<div class="hang-lei-mode f12"><h1 class="lei-h1">'+varaa+'<span data-id="'+id+'">删除</span></h1><!--第3步 开关--><div class="oh"><div class="hang-lei-cont addReduce-cont4 fl"></div><span class="lei-add addReduce2 active fl">+</span></div><!--添加类的盒子 第3步盒子--><div class="lei-kai-box addReduce-cont2" ><div class="lei-kai-tab">'+b+'</div><div class="lei-kai-cont addReduce-cont3" id="p'+id+'"></div></div><!--添加类的盒子 第3步盒子 end--></div>';
       
        html1 += a;
        $(".add-step2-box").html(html1);

        $(".lei-tab").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            var id = $(this).attr("id");
				$.ajax({
					  type: "POST",
					  url: "<?php echo U('Brand/erjiindu');?>",
					  data: {'id':id},
					  async:false,
					  success: function(msg){
						 var obj = eval(msg); 
			             var b = '';
						
						   for(var i=0; i<obj.length; i++){ 
							   b += '<span id='+obj[i]['id']+'>第'+obj[i]['code']+'类 '+obj[i]['name']+'</span>';
						   }

						   $("#p"+obj['0']['ppid']).html(b);
					  }
				});
//第4步

    $(".addReduce-cont3").each(function(){
        $(this).find("span").click(function(){
            if($(this).hasClass("active")){
//                alert(3);
                return false;
            }else{
//                alert(4);
				var id = $(this).attr("id");
				//alert(id)
				var varaa = $(this).html();
				
                $(this).addClass("active");
                $(this).parents(".hang-lei-mode").find(".addReduce-cont4").show();
                var html2 = $(this).parents(".hang-lei-mode").find(".addReduce-cont4").html();
                html2 += '<div class="lei-name">'+varaa+'<input type="hidden" name="nmd[]" value='+id+'><span class="del"></span></div>';
                $(this).parents(".hang-lei-mode").find(".addReduce-cont4").html(html2);
//                点击标签的删除按钮 删除此小标签
                $(".del").each(function(){
                    $(this).click(function(){
//                        alert(11111);
                        $(this).parents(".lei-name").remove();
                    })
                })
            }
        });

    })
        });

        $(".lei-h1 span").click(function(){
			var id = $(this).data("id");
			$(".addReduce-cont1 span").each(function(){
				if($(this).hasClass(id)){
					$(this).removeClass("active");
					return false;
				}
			}) 
            $(this).parents(".hang-lei-mode").remove();

        })
			   
		  }
	   });
	   
    }

    //第3步
    $(".addReduce2").each(function(){

        $(this).click(function(){
            $(this).toggleClass("active");
            if($(this).hasClass("active")){
                $(this).html("+");
                $(this).parents(".hang-lei-mode").find(".addReduce-cont2").hide();
            }else{
                $(this).html("-");
                $(this).parents(".hang-lei-mode").find(".addReduce-cont2").show();
            }
        });
    })



})






    $(".bgl-cx-styles span").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var i = $(this).index();
        $(".tj-mode").eq(i).addClass("active").siblings().removeClass("active");

    })
    $(".bgl-nav a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })

    cSelect1();
    function cSelect1(){
        var aP = $(".tj-styles-box1 .c-fp-sel-p p"); //下拉的p
        var apBox = $(".tj-styles-box1 .c-fp-sel-p"); //下拉的盒子
        var oValue = $(".tj-styles-box1 .c-fp-sel-value"); //选中值存放的地方
        var oBox = $(".tj-styles-box1 .c-fp-sel-box"); //最外层的盒子
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

    cSelect2();
    function cSelect2(){
        var apBox = $(".tj-styles-box2 .c-fp-sel-p"); //下拉的盒子
        var oValue = $(".tj-styles-box2 .c-fp-sel-value"); //选中值存放的地方
        var oBox = $(".tj-styles-box2 .c-fp-sel-box"); //最外层的盒子
//        var txt = aP.eq(0).text();
//        oValue.val(txt);
        oBox.click(function(){
            $(this).toggleClass("active");
            if($(this).hasClass("active")){
                apBox.slideDown();
            }else{
                apBox.slideUp();
            }
        });

        apBox.on("click","p",function(event){
            $(this).addClass("active").siblings("p").removeClass("active");
            var val = $(this).text();
            oValue.val(val);
            oBox.removeClass("active");
            apBox.slideUp();
            event.stopPropagation();
        });

    }

    $(".lei-tab").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
</script>
<!--上传图片-->
<script type="text/javascript" src="public/html/js/cropbox.js"></script>
<script type="text/javascript">
    $(window).load(function() {
        var options =
        {
            thumbBox: '.thumbBox',
            spinner: '.spinner',
            imgSrc: 'public/html/images/avatar.png'
        }
        var cropper = $('.imageBox').cropbox(options);
        $('#upload-file').on('change', function(){
            var reader = new FileReader();
            reader.onload = function(e) {
                options.imgSrc = e.target.result;
                cropper = $('.imageBox').cropbox(options);
            }
            reader.readAsDataURL(this.files[0]);
            this.files = [];
        })
        $('#btnCrop').on('click', function(){
            var img = cropper.getDataURL();
			$.ajax({
				  type: "POST",
				  url: "<?php echo U('Brand/sheng');?>",
				  data: {'img':img},
				  success: function(msg){
					 $("#img").attr({src:img,alt:"图片上传失败！！！" });
					 $('[name="image"]').val(msg);
					 $(".shadow").hide();
                     $(".container").fadeOut();
				  }
	       });
         })
        $('#btnZoomIn').on('click', function(){
            cropper.zoomIn();
        })
        $('#btnZoomOut').on('click', function(){
            cropper.zoomOut();
        })
    });
</script>

<script>
    function shangchuan(){

        var L = ($(window).width()-$(".container").width())/2;
        var T = ($(window).height()-$(".container").height())/2;
        $(".container").css({"left":L,"top":T});
        $(".shadow").show();
        $(".container").fadeIn();

        $(".c-tan-close").click(function(){
            $(".shadow").hide();
            $(".container").fadeOut();
        })
    }
</script>
</body>
</html>