<?php if (!defined('THINK_PATH')) exit();?><html>
<head lang="en">
    <meta charset="UTF-8">
    <title>商标管理-商标变更</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/brand.css"/>
</head>
<body>
    <div class="brand-gl main-hou c333">
        <div class="bread-nav">
            商标列表 > 商标变更
        </div>
        <div class="bgl-mode">
            <h1 class="c-h1">商标变更说明</h1>
            <div class="bgl-cont">
                本业务需要将所有注册中与已注册的商标进行变更
            </div>
        </div>
        <div class="bgl-mode">
            <h1 class="c-h1">变更步骤</h1>
            <div class="bgl-cont bgl-steps">
                <span class="bgl-step">1</span>
                <span>提交订单并支付</span>
                <span class="bgl-point"></span>
                <span class="bgl-step">2</span>
                <span>下载并填写资料</span>
                <span class="bgl-point"></span>
                <span class="bgl-step">3</span>
                <span>快递资料给顾问</span>
                <span class="bgl-point"></span>
                <span class="bgl-step">4</span>
                <span>顾问接收资料并办理</span>
                <span class="bgl-point"></span>
                <span class="bgl-step">5</span>
                <span>变更成功</span>
            </div>
        </div>
		<form method="post" action="<?php echo U('Brand/xiliangbiangeng');?>" onsubmit="return tijiao()">
	
        <div class="bgl-mode">
            <h1 class="c-h1">准备变更的商标</h1>
            <div class="bgl-cont" id="mydiv">
			<?php if(is_array($arr)): foreach($arr as $key=>$vo): ?><div class="bgl-sb">
                    <div class="close"><img src="public/html/images/close2.png" width="14" height="14" alt=""/></div>
                    <div class="limg">
					<?php if($vo["marklogo"] == ''): ?><img src="data:png;base64,<?php echo ($vo["markimage"]); ?>" alt="" width='100' height="100"/>
						<?php else: ?><img src="<?php echo ($vo["marklogo"]); ?>" alt=""/><?php endif; ?>
                    </div>
                    <div class="rtxt">
                        <p class="bname"><?php echo ($vo["markname"]); ?></p>
                        <p class="blei"><?php echo ($vo["uniontypecode"]); ?></p>
						<input type="hidden" name="markid[]" value="<?php echo ($vo["id"]); ?>">
                    </div>
                    <div class="cb"></div>
                </div><?php endforeach; endif; ?>
            </div>
        </div>
        <div class="bgl-mode">
            <h1 class="c-h1">变更内容</h1>
            <div class="bgl-cont bgl-change">
                <p class="mb10"><span class="c-gou mr10">申请人姓名变更为</span><input type="text" name="applicantname" /></p>
                <p><span class="c-gou mr10">申请人地址变更为</span><input type="text" name="applicantaddress" /></p>
            </div>
        </div>
        <div class="bgl-mode bt">
            <div class="bgl-cont tr">
                <input type="submit" class="blue-big-btn" value="确认"/>
            </div>
        </div>
				
		</form>
    </div>

<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script>
    $(".bgl-sb").each(function(){
        $(this).find(".close").click(function(){
            $(this).parents(".bgl-sb").remove();
        })
    })
    $(".c-gou").click(function(){
        $(this).toggleClass("active");
    })

    $(".bgl-sb").hover(function(){
        $(this).find(".close").show();
    },function(){
        $(this).find(".close").hide();
    });
	//提交数据验证
	function tijiao(){
		var applicantname = $('[name="applicantname"]').val();
        var applicantaddress = $('[name="applicantaddress"]').val();
		var mydiv = document.getElementById('mydiv');
		var twoid = mydiv.getElementsByTagName('input');
		var zid = "";
		for(var i=0; i<twoid.length; i++){ 
			zid += twoid[i].value+',';
		}  
		var str=zid.substring(0,zid.length-1);
		if(str==''||applicantname==''||applicantaddress==''){
		   return false;
		}else{
		   return true;
		}
	}
	
</script>
</body>
</html>