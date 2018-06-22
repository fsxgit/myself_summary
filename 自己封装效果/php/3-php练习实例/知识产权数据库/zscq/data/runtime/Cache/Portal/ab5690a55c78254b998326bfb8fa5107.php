<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>个人中心-绑定手机</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/perCenter.css"/>
</head>
<body>
    <div class="perCenter-box main-hou">
        <div class="per-nav"><a href = "<?php echo U('Portal/pinfo/index');?>">安全设置</a> > 绑定手机</div>
        <div class="c-h1">绑定手机</div>
        <div class="bang-cel-box">
            <div class="fp-input-box bc">
                <p>
					<span class="tit">已绑定手机</span>
					<span class="cel-has" id = "oldtel"><?php echo ($res["phone"]); ?></span>
				</p>
                <div>
                    <p>
						<span class="tit">已绑定验证码</span>
						<input type="text" class="fp-ma" id = "oldcode" placeholder="请输入验证码"/>
						<!--<input type="button" onclick = "telcode()" class="maBtn2  cfff" value="获取短信验证码"/>-->
						<span class="maBtn2 cfff"  onClick="telcode(this)" >获取短信验证码</span>
					</p>
                    <p class="warn-box" id = "oldcodets"></p>
                </div>
                <div>
                    <p>
						<span class="tit">新手机号</span>
						<input type="text" value="" class="fp-ma" id = "newtel" placeholder="请输入新手机号"/>
					</p>
                    <p class="warn-box" id = "newtelts"></p>
                </div>
                <div>
                    <p>
						<span class="tit">新验证码</span>
						<input type="text" id = "newcode" class="fp-ma" placeholder="请输入验证码"/>
						<!--<input type="button" onclick = "telcode1()" class="maBtn2  cfff" value="获取短信验证码"/>-->
						<span class="maBtn2 cfff"  onClick="telcode1(this)" >获取短信验证码</span>
					</p>
                    <p class="warn-box" id = "newcodets"></p>
                </div>
                <p>
					<input type="button" onclick = "uptel()" class="next bg1 cfff" value="下一步"/>
				</p>
            </div>
        </div>
        </div>
    </div>
</body>
<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script src="public/html/js/js.js"></script>
<script>

	function telcode(obj){



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





		var tel = $("#oldtel").html();
		$.ajax({
			type:"post",
			dataType:"text",
			data:{"tel":tel},
			url:'<?php echo U('Portal/pinfo/telcode');?>',
		});
	}

	function telcode1(obj){
		var tel = $("#newtel").val();
		if(tel == ""){
			$("#newtelts").show();
			$("#newtelts").html("<span class='warn-txt'>手机号码不能为空</span>");
			return false;
		}else if(!/^(13[0-9]|17[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(tel)){
			$("#newtelts").show();
			$("#newtelts").html("<span class='warn-txt'>请输入正确的手机号</span>");
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


		$.ajax({
			type:"post",
			dataType:"text",
			data:{"tel":tel},
			url:'<?php echo U('Portal/pinfo/telcode');?>',
		});
	}
	
	function uptel(){
		var oldtel = $("#oldtel").html();
		var oldcode = $("#oldcode").val();
		var newtel = $("#newtel").val();
		var newcode = $("#newcode").val();
		if(oldcode == ""){
			$("#oldcodets").show();
			$("#oldcodets").html("<span class='warn-txt'>手机验证码不能为空</span>");
			return false;
		}else if(newtel == ""){
			$("#newtelts").show();
			$("#newtelts").html("<span class='warn-txt'>手机号不能为空</span>");
			return false;
		}else if(!/^(13[0-9]|17[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(newtel)){
			$("#newtelts").show();
			$("#newtelts").html("<span class='warn-txt'>请输入正确的手机号</span>");
			return false;
		}else if(newcode == ""){
			$("#newcodets").show();
			$("#newcodets").html("<span class='warn-txt'>请输入验证码</span>");
			return false;
		}
		$.ajax({
            type: "POST",
            url: "<?php echo U('Portal/pinfo/uptel');?>",
            data: {'oldtel':oldtel,'oldcode':oldcode,'newtel':newtel,'newcode':newcode},
            success: function(msg){
				if(msg == 1){
					window.location.href='index.php?g=Portal&m=pinfo&a=index';
					return false;
				}else{
					$("#newcodets").show();
					$("#newcodets").html("<span class='warn-txt'>"+msg+"</span>");
					return false;
				}
			}
        });
	}

	//提示错误后，再获取焦点是，提示隐藏
	$(".fp-ma").each(function(){
		$(this).focus(function(){
			$(this).parents("p").siblings(".warn-box").hide().html("");
		})
	});
	//<span class="warn-txt">验证码输入错误</span>
</script>
</html>