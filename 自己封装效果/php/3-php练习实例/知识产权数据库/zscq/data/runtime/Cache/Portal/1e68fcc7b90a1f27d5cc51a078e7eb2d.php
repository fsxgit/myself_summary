<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>个人中心-绑定手机</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/perCenter.css"/>
    <style>
        .maBtn2{margin-left: 0 !important;}
    </style>
</head>
<body>
    <div class="perCenter-box main-hou">
        <div class="per-nav">安全设置 > 绑定手机</div>
        <div class="c-h1">绑定手机</div>
        <div class="bang-cel-box">
            <div class="fp-input-box bc">
                <p>
					<span class="tit">已绑定手机</span>
					<span class="cel-has" id = "oldtel"><?php echo ($res["phone"]); ?></span>
				</p>
                <div>
                    <p>
						<span class="tit">图片验证码</span>
						<input type="text" id = "oldyzm" class="fp-ma ggg" placeholder="请输入图片验证码"/>
						<img width="78" height="34" src="<?php echo U('Portal/register/yzm');?>" class="imgMa cp fl" alt="" onclick="this.src='/index.php?g=Portal&m=register&a=yzm'"/>
					</p>
                    <p>
						<span class="tit"></span>
						<!--<input type="button" onclick = "telcode()" class="maBtn2  cfff" value="获取短信验证码"/>-->
                        <span class="maBtn2 cfff"  onClick="telcode(this)" >获取短信验证码</span>
					</p>
                    <p class="warn-box" id = "oldyzmts"></p>
                </div>
                <div>
                    <p>
						<span class="tit">短信验证码</span>
						<input type="text" value="" class = "ggg" placeholder="请输入短信验证码"/>
					</p>
                    <p class="warn-box"><span class="warn-txt">邮箱格式错误</span></p>
                </div>
                <div>
                    <p>
						<span class="tit">图片验证码</span>
						<input type="text" class="fp-ma ggg" placeholder="请输入图片验证码"/>
						<img width="78" height="34" src="<?php echo U('Portal/register/yzm');?>" class="imgMa cp fl" alt="" onclick="this.src='/index.php?g=Portal&m=register&a=yzm'"/>
					</p>
                    <p class="warn-box"><span class="warn-txt">邮箱格式错误</span></p>
                </div>
                <p><input type="button" onclick = "formck()" class="next bg1 cfff" value="下一步"/></p>
            </div>
        </div>
        </div>
    </div>
</body>
<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script src="public/html/js/js.js"></script>
<script>
//提示错误后，再获取焦点是，提示隐藏
	$(".ggg").each(function(){
		$(this).focus(function(){
			$(this).parents("p").siblings(".warn-box").hide().html("");
		})
	});
	function telcode(obj){
		var oldtel = $("#oldtel").html();
		var oldyzm = $("#oldyzm").val();
		if(oldyzm == ""){
			$("#oldyzmts").show();
			$("#oldyzmts").html("<span class='warn-txt'>验证码输入错误</span>");
			return false;
		}

//	获取验证码按钮效果
        var aa = $(obj);
        var timer = null;
        if( !aa.hasClass("forbid")){
            aa.html("<span class='forbid-time'>120</span>s后可以重新发送")
            aa.addClass("forbid");
            var i = 120;

            timer = setInterval( function time(){
                i--;
                $(".forbid-time").text(i);
                if( i == 1){
                    aa.html("获取短信验证码");
                    aa.removeClass("forbid");
                    clearTimeout(timer);
                }
            },1000);
        }
//	获取验证码按钮效果 end
	}
</script>
</html>