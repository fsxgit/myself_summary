<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>商标管理-商标列表</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/brand.css"/>
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
            <a href="javascript:brand();">注册中</a>
            <a href="javascript:already();">已注册</a>
            <a class="active" href="javascript:;">注册失败</a>
            <a href="javascript:no_use();">已无效</a>
        </div>
        <div class="tiaojian-box mb20">
			<form method="post">
            <div class="sel-mode">
                <input type="text" class="fw-input" placeholder="商标名称" name="brand_name" id="brand_name" value="<?php echo ($name); ?>"/>
            </div>
            
            <div class="sel-mode">
                <input type="button" class="blue-big-btn" value="搜索" onclick="sea()"/>
            </div>
			</form>
           
            <div class="cb"></div>
        </div>
        <!--商标-->
        <div class="brand-box">
            <table class="brand-table c333">
                <tr class="bt-tr1 bg5 c999">
                    <td style="width:5%;">序号</td>
                    <td style="width:8%;">商标图样</td>
                    <td style="width:16%;">名称</td>
                    <td style="width:6%;">类别</td>
                    <td style="width:10%;">申请号</td>
                    <td style="width:21%;">操作</td>
                </tr>
                <?php if(is_array($res)): foreach($res as $key=>$vo): ?><tr>
                    <td><?php echo ($size+$key+1); ?></td>
                    <td class="brand-logo"><img src="data:png;base64,<?php echo ($vo["markimage"]); ?>" alt="" width='100' height="100"/></td>
                    <td><?php echo ($vo["markname"]); ?></td>
                    <td><?php echo ($vo["uniontypecode"]); ?></td>
                    <td><?php echo ($vo["markcode_key"]); ?></td>
                    <td><a href="javascript:show(<?php echo ($vo["id"]); ?>);">查看</a></td>
                </tr><?php endforeach; endif; ?>
            </table>
            <!--翻页按钮-->
            <div class="c-pages tc">
				<span><?php echo ($count); ?>条记录，共<?php echo ($totalpage); ?>页</span>
				<span><?php echo ($page); ?></span>
	        </div>
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

	function sea(){
		var name = $("#brand_name").val();
		window.location.href="index.php?g=portal&m=brand&a=brand_fail&name="+name;
	}

	function already(){
		window.location.href="index.php?g=portal&m=brand&a=brand_already_lst";
	}
	function brand(){
		window.location.href="index.php?g=portal&m=brand&a=brand_lst";
	}
	function no_use(){
		window.location.href="index.php?g=portal&m=brand&a=brand_no";
	}
        function show(id){
		window.location.href="index.php?g=portal&m=brand&a=brand_detail&id="+id+"&zhuce="+1;
	}
</script>
</body>
</html>