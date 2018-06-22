<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>知识产权-注册</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/wrong.css"/>
</head>
<body>
    <div class="login-box">
        <div class="login-top">
            <!--header-->
            <div class="c-header login-header oh">
                <div class="fl c-logo"><img src="public/html/images/logo3.png" width="118" height="40" alt=""/></div>
                <div class="fr c-right oh">
                    <div class="c-tel oh fl">
                        <img src="public/html/images/icon1.png" class="fl" width="13" height="14" alt=""/>
                        <span class="fl f12">400-686-5658</span>
                    </div>
                </div>
            </div>
            <!--header end-->
            <h1 class="login-title tc cfff f28 fb">知识产权注册</h1>
            <div class="input-wrap  ">
                <div class="input-wrap-left register f12 fl c333">
					<form class="form-horizontal js-ajax-form" action="<?php echo U('Portal/register/regem');?>" id="formreg" method="post">
                    <div class="fp-input-box bc">
                        <div>
							<p>
								<input type="text" id = "tel" name = "tel" class="jc-input"  placeholder="请输入手机号"/>
							</p>
							<p class="warn-box" id = "userts"></p>
						</div>
						<div>
							<p>
								<span class="pasIE-box">
									<input type="text" class="pasIE-bg"  placeholder="请输入登录密码，6-15个字符，可用字母、数字"/>
									<input type="password" name = "password" class="jc-input pasIE" id="password" placeholder="请输入登录密码，6-15个字符，可用字母、数字"/>
								</span>
							</p>
							<p class="warn-box" id = "passts"></p>
						</div>
						<div>
							<p>
								<span class="pasIE-box">
									<input type="text" class="pasIE-bg" placeholder="请再次输入密码"/>
									<input type="password" name = "passwordtwo" id="passwordtwo" class="jc-input pasIE" placeholder="请再次输入密码"/>
								</span>
							</p>
							<p class="warn-box" id = "passtwots"></p>
						</div>
						<div>
							<p>
								<input type="text" name = "verify" id="verify" class="fp-ma jc-input" placeholder="请输入图片验证码"/>
								<img src="<?php echo U('Portal/register/yzm');?>" onclick="this.src='index.php?g=Portal&m=register&a=yzm&time='+Math.random();" width="79px" height="34px" class="cp fr" alt=""/>
							</p>
							<p class="warn-box" id = "verifyts"></p>
						</div>
						<div>
							<p>
								<input type="text" name = "code" id="code" class="fp2-ma jc-input" placeholder="请输入验证码"/>
								<!--<input type="button"  onClick="telcode()" class="maBtn2 fr cfff" value="获取短信验证码"/>-->
								<span onClick="telcode(this)" class="maBtn2 fr cfff">获取短信验证码</span>
							</p>
							<p class="warn-box" id = "codets"></p>
						</div>
                        <p>
							<span class="jieshou">我已阅读并接受</span>
							<a href="javascript:;" class="xy">《用户协议》</a>
						</p>
						<p class="warn-box" id = "msg"></p>
						<p>
							<input type="button" onclick = "formck()" class="next bg1 cfff" value="确定"/>
						</p>
						<p class="tc">已经注册过？<a href="index.php?g=Portal&m=register&a=index" class="xy">立即登录</a></p>
                    </div>
					</form>
                </div>
                <div class="input-wrap-right fl">
                    <div class="input-hello bb  tc"><img src="public/html/images/hello.png" width="194" height="73" alt=""/></div>
                    <div class="input-hello-txt tl f12">
                        <p>神州易桥是一个智能化管理企业及个人知识产权的工具。</p>
                        <p>神州易桥致力于为企业和个人提供最好的知识产权服务体验，简单优雅的设计，给用户带来前所未有的愉快感受。每个人都可以畅想互联网时代智慧带来的成果。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script src="public/html/js/js.js"></script>
<script>
    $(function(){
        $(".input-tab span").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            var i = $(this).index();
            $(".input-box").eq(i).addClass("active").siblings().removeClass("active");
        })

        var oBox = $(".input-wrap");
        var L = ($(".login-top").width()-oBox.width())/2;
        var B = -270;
        oBox.css({"left":L,"bottom":B});


        $(".jieshou").click(function(){
            $(this).toggleClass("active");
        })
    })
	function telcode(obj){
		var tel = document.getElementById("tel").value;
		if(tel == ""){
			$("#userts").show();
			$("#userts").html("<span class='warn-txt'>手机号码不能为空</span>");
			return false;
		}else if(!/^(13[0-9]|17[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(tel)){
			$("#userts").show();
			$("#userts").html("<span class='warn-txt'>请输入正确的手机号</span>");
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
					aa.html("获取短信验证码")
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
			url:'<?php echo U('Portal/register/telcode');?>',
			success: function(msg){
				if(msg == 100){
					$("#userts").show();
					$("#userts").html("<span class='warn-txt'>手机号不能为空1</span>");
					return false;
				}
			}
		});
	}

	//提示错误后，再获取焦点是，提示隐藏
	$(".jc-input").each(function(){
		$(this).focus(function(){
			$(this).parents("p").siblings(".warn-box").hide().html("");
		})
	});


	function formck(){
		var username = $("#tel").val();
		var password = $("#password").val();
		var verify = $("#verify").val();
		var code = $("#code").val();
		var passwordtwo = $("#passwordtwo").val();
		if(username == ""){
			$("#userts").show();
			$("#userts").html("<span class='warn-txt'>请输入账号或是手机号</span>");
			return false;
		}else if(!/^(13[0-9]|17[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(username)){
			$("#userts").show();
			$("#userts").html("<span class='warn-txt'>请输入正确的手机号</span>");
			return false;
		}else if(password == ""){
			$("#passts").show();
			$("#passts").html("<span class='warn-txt'>请输入密码</span>");
			return false;
		}else if(passwordtwo == ""){
			$("#passtwots").show();
			$("#passtwots").html("<span class='warn-txt'>请再次输入密码</span>");
			return false;
		}else if(password != passwordtwo){
			$("#passtwots").show();
			$("#passtwots").html("<span class='warn-txt'>两次密码输入不一致</span>");
			return false;
		}else if(verify == ""){
			$("#verifyts").show();
			$("#verifyts").html("<span class='warn-txt'>请输入验证码</span>");
			return false;
		}else if(code == ""){
			$("#codets").show();
			$("#codets").html("<span class='warn-txt'>请输入手机验证码</span>");
			return false;
		}
		$.ajax({
            type: "POST",
            url: "<?php echo U('Portal/register/regem');?>",
            data: {'username':username,'password':password,'verify':verify,'code':code},
            success: function(msg){
				if(msg == 0){
					$("#verifyts").html("<center><font color='red'>验证码不正确</font></center>");
					return false;
				}if(msg == 1){
					$("#msg").html("<center><font color='red'>注册失败手机号码不能重复注册</font></center>");
					return false;
				}
			}
        });
		//$("#formreg").submit();
	}

	//手机的正则验证
	//if(!/^(13[0-9]|17[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(username))
</script>
</body>
</html>