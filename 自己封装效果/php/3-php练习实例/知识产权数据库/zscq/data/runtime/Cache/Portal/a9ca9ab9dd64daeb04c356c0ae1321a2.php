<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>找回密码</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/wrong.css"/>
</head>
<body>
    <div class="fp-box main-hou c333 f12">
        <div class="per-nav">我的钱包 > 开通钱包</div>
        <div class="qb-kt-tit1 tc">开通神州钱包-个人账户</div>
        <div class="qb-kt-tit2 tc">身份信息</div>
        <div class="fp-input-box my-qb-kt-input bc">
            <p>
				<span class="tit">姓名</span>
				<input type="text" class = "ggg" id = "username" value="" placeholder="请输入您身份证上的姓名"/>
			</p>
			<p class="warn-box" id = "userts"></p>
            <p>
				<span class="tit">身份证号</span>
				<input type="text" class = "ggg" id = "sfhao" value="" placeholder="请输入您身份证号"/>
			</p>
			<p class="warn-box" id = "sfhaots"></p>
            <div class="fp-sel-wrap">
                <span class="tit">开户行</span>
                <div class="fp-sel-box">
                    <input class="fp-sel-value khhts" placeholder="请选择开户行">
                    <div class="fp-sel-p">
					<?php if(is_array($arrlist)): foreach($arrlist as $k=>$vo): ?><P data-hang="<?php echo ($vo["bankno"]); ?>" ><?php echo ($vo["bankname"]); ?></P><?php endforeach; endif; ?>
                    </div>
                </div>
                <div class="cb"></div>
            </div>
			<p class="warn-box" id = "khhts"></p>
            <p>
				<span class="tit">银行卡号</span>
				<input type="text" class = "ggg" id = "yhhao" value="" placeholder="请输入银行卡号"/>
			</p>
			<p class="warn-box" id = "yhhaots"></p>
            <p>
				<span class="tit">银行预留手机号</span>
				<input type="text" class = "ggg" id = "telhao" value="" placeholder="请输入银行预留手机号"/>
			</p>
            <p class="warn-box" id = "telhaots"></p>
            <p>
				<span class="tit">手机验证码</span>
				<input type="text" id = "telcode" class="fp2-ma ggg" placeholder="请输入验证码"/>
				<!--<input type="button" onClick="telcode()" class="maBtn2 fr cfff" value="获取短信验证码"/>-->
				<span onClick="telcode(this)" class="maBtn2 fr cfff">获取短信验证码</span>
			</p>
			<p class="warn-box" id = "telcodets"></p>
        </div>

        <div class="qb-kt-tit2 tc pt30 mb10">交易密码</div>
        <div class="fp-input-box my-qb-kt-input bc">
            <p>
				<span class="tit">交易密码</span>
				<span class="pasIE-box">
					<input type="text" class = "pasIE-bg" placeholder="请输入交易密码"/>
					<input type="password" id = "pass" class = "ggg pasIE" placeholder="请输入交易密码"/>
				</span>
			</p>
			<p class="warn-box" id = "passts"></p>
            <p>
				<span class="tit">确认密码</span>
				<span class="pasIE-box">
					<input type="text" class = "pasIE-bg" placeholder="请再次输入交易密码"/>
					<input type="password" id = "pass1" class = "ggg pasIE" placeholder="请再次输入交易密码"/>
				</span>
			</p>
			<p class="warn-box" id = "pass1ts"></p>

            <p class="queren mb30">
				<input type="button" onclick = "formck()" class="next bg1 cfff" value="确认开通"/>
			</p>
			<p class="warn-box" id = "formts"></p>
        </div>
    </div>
<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script src="public/html/js/js.js"></script>
<script>
    $(function(){
//        var txt = $(".fp-sel-p p").eq(0).text();
//        $(".fp-sel-value").val(txt);
        $(".fp-sel-box").click(function(){
            $(this).toggleClass("active");
			$("#khhts").hide();
			
            if($(this).hasClass("active")){
                $(".fp-sel-p").slideDown();
            }else{
                $(".fp-sel-p").slideUp();
            }
        })
        $(".fp-sel-p p").click(function(event){
            $(this).addClass("active").siblings().removeClass("active");
            var val = $(this).text();
            $(".fp-sel-value").val(val);
            $(".fp-sel-box").removeClass("active");
            $(".fp-sel-p").slideUp();
            event.stopPropagation();
        })
    })
		//提示错误后，再获取焦点是，提示隐藏
	$(".ggg").each(function(){
		$(this).focus(function(){
			$(this).parents("p").siblings(".warn-box").hide().html("");
		})
	});
	
	function telcode(obj){
		var hang;
		$(".fp-sel-p p").each(function(){
			if($(this).hasClass("active")){
				hang = $(this).data("hang");
			}
		});
		var username = $("#username").val();
		var sfhao = $("#sfhao").val();
		var yhhao = $("#yhhao").val();
		var telhao = $("#telhao").val();
		var telcode = $("#telcode").val();
		if(username == ""){
			$("#userts").show();
			$("#userts").html("<span class='warn-txt'>请输入姓名</span>");
			return false;
		}else if(sfhao == ""){
			$("#sfhaots").show();
			$("#sfhaots").html("<span class='warn-txt'>请输入身份证号</span>");
			return false;
		}else if(!/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/i.test(sfhao)){
			$("#sfhaots").show();
			$("#sfhaots").html("<span class='warn-txt'>请输入正确的身份证号</span>");
			return false;
		}else if($(".khhts").val() == ""){
			$("#khhts").show();
			$("#khhts").html("<span class='warn-txt'>请选择开户银行</span>");
		}else if(yhhao == ""){
			$("#yhhaots").show();
			$("#yhhaots").html("<span class='warn-txt'>请输入银行卡号</span>");
			return false;
		}else if(!/^\d{16}|\d{19}$/i.test(yhhao)){
			$("#yhhaots").show();
			$("#yhhaots").html("<span class='warn-txt'>请输入正确的银行卡号</span>");
			return false;
		}else if(telhao == ""){
			$("#telhaots").show();
			$("#telhaots").html("<span class='warn-txt'>请输入预留手机号</span>");
			return false;
		}else if(!/^(13[0-9]|17[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(telhao)){
			$("#telhaots").show();
			$("#telhaots").html("<span class='warn-txt'>请输入正确的银行卡号</span>");
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
            type: "POST",
            url: "<?php echo U('Portal/oneroadpay/shenqing');?>",
            data: {
				'realName':username,
				'identityNo':sfhao,
				'mobileNo':telhao,
				'bankNo':hang,
				'bankCardNo':yhhao
			},
            success: function(msg){
				return false;
				if(msg == 2){
					$("#formts").show();
					$("#formts").html("<span class='warn-txt'>银行卡信息有问题</span>");
					return false;
				}
			}
        });
	}

	function formck(){
		var telcode = $("#telcode").val();
		var pass = $("#pass").val();
		var pass1 = $("#pass1").val();
		if(telcode == ""){
			$("#telcodets").show();
			$("#telcodets").html("<span class='warn-txt'>请输入验证码</span>");
			return false;
		}else if(pass == ""){
			$("#passts").show();
			$("#passts").html("<span class='warn-txt'>请输入密码</span>");
			return false;
		}else if(pass1 == ""){
			$("#pass1ts").show();
			$("#pass1ts").html("<span class='warn-txt'>请输入确认密码</span>");
			return false;
		}else if(pass != pass1){
			$("#pass1ts").show();
			$("#pass1ts").html("<span class='warn-txt'>两次密码输入不一致</span>");
			return false;
		}
		$.ajax({
            type: "POST",
            url: "<?php echo U('Portal/oneroadpay/shenqing2');?>",
            data: {
				'pass':pass,
				'code':telcode
			},
            success: function(msg){
				if(msg == 1){
					//跳转到钱包页面
					window.location.href='index.php?g=Portal&m=Oneroadpay&a=qianbao';
				}else if(msg == 4){
					$("#formts").show();
					$("#formts").html("<span class='warn-txt'>密码设置失败</span>");
					return false;
				}else if(msg == 3){
					$("#formts").show();
					$("#formts").html("<span class='warn-txt'>开通失败</span>");
					return false;
				}
			}
        });
	}
</script>
</body>
</html>