<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>商标管理-商标列表</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/brand.css"/>
    <style>
        .pia,.pia:link,.pia:visited,.pia:active{color:#333;}
    </style>
</head>

<body>
    <div class="main-hou">
        <div class="brand-gl c333">
            <div class="bgl-nav  bb">
                <a href="<?php echo U('Brand/brand_lst');?>" class="active">商标列表</a>
                <a href="<?php echo U('Brand/brand_query');?>">商标查询</a>
                <a href="<?php echo U('Brand/brand_query_lst');?>">查询列表</a>
            </div>
        </div>
        <div class="list-gk-tab sb-list">
            <a class="active" href="javascript:;">注册中</a>
            <a href="javascript:already();">已注册</a>
            <a href="javascript:fail();">注册失败</a>
            <a href="javascript:no_use();">已无效</a>
        </div>
        <div class="tiaojian-box mb20">
			<form action="<?php echo U('Brand/brand_lst');?>" method="post">
            <div class="sel-mode">
                <input type="text" class="fw-input" placeholder="商标名称" name="brand_name" id="brand_name" value="<?php echo ($name); ?>"/>
            </div>
            <!--/*公用输入框样式 */-->
            <div class="sel-mode c-fp-sel-wrap statusSelect">
                <div class="c-fp-sel-box c-cx-width">
                    <input type="text" readonly="readonly" class="c-fp-sel-value" placeholder="状态"/>
                    <span class="downUp"></span>
                    <div class="c-fp-sel-p c-cx-width sw">
						<P value="资料准备" data-state="1">资料准备</P>
						  <P value="资料审查" data-state="2">资料审查</P>
						  <P value="提交申请" data-state="3">提交申请</P>
						  <P value="受理" data-state="4">受理</P>
						  <P value="实质审查" data-state="5">实质审查</P>
						  <P value="驳回" data-state="6">驳回</P>
						  <P value="驳回复审" data-state="7">驳回复审</P>
						  <P value="公告" data-state="8">公告</P>
						  <P value="异议" data-state="9">异议</P>
						  <P value="异议答辩" data-state="10">异议答辩</P>
						  <P value="寄送注册证" data-state="11">寄送注册证</P>
						  <P value="变更中" data-state="12">变更中</P>
						  <P value="转让中" data-state="13">转让中</P>
						  <P value="已转让" data-state="14">已转让</P>
                    </div>
                </div>
                <div class="cb"></div>
            </div>
            <!--/*公用输入框样式 end*/-->
            
            <div class="sel-mode">
                <input type="button" class="blue-big-btn" value="搜索" onclick="sea()"/>
            </div>
			</form>
            <div class="sb-list-piliang f12 fr">
            <!--    <span class="pl1">批量续展</span>
                <span class="c999 ml10 mr10">|</span>  -->
                <a href="<?php echo U('Brand/brand_biangeng');?>" class="pia"><span class="pl2">批量变更</span></a>
            </div>
            <div class="cb"></div>
        </div>
        <!--商标-->
        <div class="brand-box">
            <table class="brand-table c333">
                <tr class="bt-tr1 bg5 c999">
                    <td style="width:5%;">序号</td>
                    <td style="width:8%;">商标图样</td>
                    <td style="width:16%;">商标名称</td>
                    <td style="width:6%;">类别</td>
                    <td style="width:10%;">申请号</td>
                   
                    <td style="width:12%;">状态</td>
                    <td style="width:21%;">操作</td>
                </tr>
				<?php if(is_array($res)): foreach($res as $key=>$vo): ?><tr>
                    <td><?php echo ($size+$key+1); ?></td>
                    <td class="brand-logo">
					
					<?php if( $vo["markimage"] == '' ): ?><img src="<?php echo ($vo["marklogo"]); ?>" alt="" width='100' height="100"/>
					<?php else: ?>
<img src="data:png;base64,<?php echo ($vo["markimage"]); ?>" alt="" width='100' height="100"/><?php endif; ?>
					</td>
                    <td><?php echo ($vo["markname"]); ?></td>
                    <td><?php echo ($vo["uniontypecode"]); ?></td>
                    <td><?php if( $vo["markcode_key"] == '' ): ?>----<?php else: echo ($vo["markcode_key"]); endif; ?></td>
                
                    <td>全部可注册</td>
                    <td><a href="javascript:show(<?php echo ($vo["id"]); ?>);">查看</a></td>
                </tr><?php endforeach; endif; ?>
            </table>
           
			 <!--翻页按钮"javascript:void(0);" onclick="js_method()"-->
			<div class="c-pages tc">
				<span><?php echo ($count); ?>条记录，共<?php echo ($totalpage); ?>页</span>
				<span><?php echo ($page); ?></span>
	        </div>
            <!--翻页按钮 end-->
            <!--翻页按钮 end-->
        </div>
        <!--商标 end-->
    </div>
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

    $(".sb-list a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
	 $(".sb-list-piliang span").hover(function(){
        $(this).addClass("active");
    },function(){
        $(this).removeClass("active");
    })

	function sea(){
		var name = $("#brand_name").val();

		$(".sw p").each(function(){
			if($(this).hasClass("active")){
				state = $(this).data("state");
			}else{
				state = "";
			}
		});

//		alert(name);
//		alert(state);
//		alert(type);
		window.location.href="index.php?g=portal&m=brand&a=brand_lst&name="+name+"&state="+state;
	}

	function already(){
		window.location.href="index.php?g=portal&m=brand&a=brand_already_lst";
	}
	function fail(){
		window.location.href="index.php?g=portal&m=brand&a=brand_fail";
	}
	function no_use(){
		window.location.href="index.php?g=portal&m=brand&a=brand_no";
	}

	function show(id){
		window.location.href="index.php?g=portal&m=brand&a=brand_detail&id="+id;
	}
</script>
</body>
</html>