<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>知识产权-登录</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/wrong.css"/>
</head>
<body onkeydown="return CheckEnterKey(event)">
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
            <h1 class="login-title tc cfff f28 fb">知识产权登录</h1>
            <div class="input-wrap">
                <div class="input-wrap-left fl c333">
				
                    <!--切换登录方式、-->
                    <div class="input-tab  c999">
                        <span class="active">账号密码登录</span>
                        <span>短信登录</span>
                    </div>
                    <div class="input-box active">
						<form class="form-horizontal js-ajax-forms" action="<?php echo U('Portal/register/login');?>" method="post">
							<p class="zhanghao"><input type="text" name = "username" id = "username" class="jc-input" placeholder="请输入账号"/></p>
							<p class="warn-box" id = "userts"></p>
							<!--IE修改-->
							<p class="password">
								<span class="pasIE-box">
									<input type="text" class="pasIE-bg"   placeholder="请输入密码"/>
									<input type="password" class="jc-input pasIE" name = "password" id = "password" placeholder="请输入密码"/>
								</span>

							</p>
							<!--IE修改 end-->
							<p class="warn-box" id = "passts"></p>
							<div class="login-btn">
								<p class="warn-box" id = "msgx"></p>
								<input type="button" onclick = "formck()" class="bg1 cfff" value="登录"/>
							</div>
						</form>
                    </div>

                    <div class="input-box">
						<form class="form-horizontal js-ajax-forms" action="<?php echo U('Portal/register/fastlogin');?>" method="post">
							<p class="tel"><input type="text" class="jc-input" name = "tel" id = "tel" placeholder="请输入已验证手机号"/></p>
							<p class="warn-box" id = "telts"></p>
							<p class="ma oh">
							<input type="text" class="maShu fl jc-input" name = "code" id = "code" placeholder="请输入短信验证码"/>
							<!--<input type="button"  onClick="telcode()" class="maBtn fr cfff" value="获取短信验证码"/>-->
							<span class="maBtn fr cfff"  onClick="telcode(this)" >获取短信验证码</span>
							</p>
							<p class="warn-box" id = "codets"></p>
							<div class="login-btn">
								<p class="warn-box" id = "msgx"></p>
								<input type="button" onclick = "formck1()" class="bg1 cfff" value="登录"/>
							</div>
						</form>
                    </div>
				
                    <!--切换登录方式、end-->
                    <div class="login-bot oh f12 fc1">
                        <span class="cp fl"><img src="public/html/images/icon29.png" width="100" height="21" alt=""/></span>
                        <a href="index.php?g=Portal&m=pinfo&a=uppass1" class="fpass fr">忘记密码？</a>
                        <a href="<?php echo U('Portal/register/register');?>" class="fr">免费注册</a>
                    </div>
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
//	键盘登录
function CheckEnterKey(evt)
{
	if(evt.keyCode == 13)
	{
		if($(".input-box").eq(0).hasClass("active")){
			formck();
		}else{
			formck1();
		}
	}
}

//	键盘登录 end



    $(function(){
        $(".input-tab span").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            var i = $(this).index();
            $(".input-box").eq(i).addClass("active").siblings().removeClass("active");
        })

        var oBox = $(".input-wrap");
        var L = ($(".login-top").width()-oBox.width())/2;
        var B = -(oBox.height()/2);
        oBox.css({"left":L,"bottom":B});
    })
	function telcode( obj ){


		var tel = document.getElementById("tel").value;
		if(tel == ""){
			$("#telts").show();
			$("#telts").html("<span class='warn-txt'>手机号码不能为空</span>");
			return false;
		}else if(!/^(13[0-9]|17[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(tel)){
			$("#telts").show();
			$("#telts").html("<span class='warn-txt'>请输入正确的手机号</span>");
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
			url:'<?php echo U('Portal/register/telcode');?>',//目标地址
			success: function(msg){
				if(msg == 100){
					$("#telts").show();
					$("#telts").html("<span class='warn-txt'>手机号不能为空1</span>");
					return false;
				}
			}
		})
	}

	function formck(){
		var username = $("#username").val();
		var password = $("#password").val();
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
		}
		$.ajax({
            type: "POST",
            url: "<?php echo U('Portal/register/loginem');?>",
            data: {'username':username,'password':password},
            success: function(msg){
				if(msg == 100){
					$("#msgx").show();
					$("#msgx").html("<span class='warn-txt'>登录失败</span>");
					return false;
				}
                                if(msg==12){
                                    window.location.href='index.php?g=Portal&m=Userinfo&a=index';
                                } else{
					window.location.href=msg;
                }
			}
        });
	}

	function formck1(){
		var tel = $("#tel").val();
		var code = $("#code").val();
		if(tel == ""){
			$("#telts").show();
			$("#telts").html("<span class='warn-txt'>请输入手机号</span>");
			return false;
		}else if(!/^(13[0-9]|17[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(tel)){
			$("#telts").show();
			$("#telts").html("<span class='warn-txt'>请输入正确的手机号</span>");
			return false;
		}else if(code == ""){
			$("#codets").show();
			$("#codets").html("<span class='warn-txt'>请输入验证码</span>");
			return false;
		}
		$.ajax({
            type: "POST",
            url: "<?php echo U('Portal/register/fastlogin');?>",
            data: {'tel':tel,'code':code},
            success: function(msg){
				if(msg == 100){
					$("#msgx").show();
					$("#msgx").html("<span class='warn-txt'>登录失败</span>");
					return false;
				}if(msg==13){
                                    window.location.href='index.php?g=Portal&m=Userinfo&a=index';
                                } else{
                                     window.location.href=msg;
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





</script>
</body>
</html>