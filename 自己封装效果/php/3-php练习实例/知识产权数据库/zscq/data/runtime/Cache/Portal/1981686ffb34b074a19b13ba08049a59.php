<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>个人中心-修改密码</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/perCenter.css"/>
</head>
<body>
    <div class="perCenter-box main-hou">
        <div class="per-nav">安全设置 > 修改密码</div>
        <div class="c-h1">修改密码</div>
        <div class="bang-cel-box">
            <div class="fp-input-box bc">
                <div>
                    <p>
						<span class="tit">旧密码</span>
						<span class="pasIE-box">
							<input type="text" class = "pasIE-bg" placeholder="请输入旧密码"/>
							<input type="password" id = "oldpass" class = "ggg pasIE" placeholder="请输入旧密码"/>
						</span>
					</p>
					<p class="warn-box" id = "pass1"></p>
                </div>
                <div>
                    <p>
						<span class="tit">新密码</span>
						<span class="pasIE-box">
							<input type="text" class = "pasIE-bg" placeholder="请输入新密码"/>
							<input type="password" id = "newpass" class = "ggg pasIE" placeholder="请输入新密码"/>
						</span>
					</p>
					<p class="warn-box" id = "pass2"></p>
                </div>
                <div>
                    <p>
						<span class="tit">确认新密码</span>
						<span class="pasIE-box">
							<input type="text" class = "pasIE-bg" placeholder="请再次输入新密码"/>
							<input type="password" id = "newpass1" class = "ggg pasIE" placeholder="请再次输入新密码"/>
						</span>
					</p>
					<p class="warn-box" id = "pass3"></p>
                </div>
                    <p>
						<input type="button" onclick = "ckform()" class="next bg1 cfff" value="下一步"/>
					</p>
            </div>
        </div>
        </div>
    </div>
</body>
<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script src="public/html/js/js.js"></script>
<script>
//提示错误后，再获取焦点是，提示隐藏
	$(".gggx").each(function(){
		$(this).focus(function(){
			$(this).parents("p").siblings(".warn-box").hide().html("");
		})
	});
	function ckform(){
		var oldpass = $("#oldpass").val();
		var newpass = $("#newpass").val();
		var newpass1 = $("#newpass1").val();
		if(oldpass == ""){
			$("#pass1").show();
			$("#pass1").html("<span class='warn-txt'>旧密码不能为空</span>");
			return false;
		}else if(newpass == ""){
			$("#pass2").show();
			$("#pass2").html("<span class='warn-txt'>新密码不能为空</span>");
			return false;
		}else if(newpass1 == ""){
			$("#pass3").show();
			$("#pass3").html("<span class='warn-txt'>确认密码不能为空</span>");
			return false;
		}else if(newpass != newpass1){
			$("#pass3").show();
			$("#pass3").html("<span class='warn-txt'>两次新密码输入不一致</span>");
			return false;
		}
		$.ajax({
			type:"post",
			dataType:"text",
			data:{"oldpass":oldpass,"newpass":newpass},
			url:'<?php echo U('Portal/pinfo/wangjipass1');?>',
			success: function(msg){
				if(msg == 1){
					window.location.href='index.php?g=Portal&m=pinfo&a=wangjipass2';
					return false;
				}else{
					$("#pass3").show();
					$("#pass3").html("<span class='warn-txt'>"+msg+"</span>");
					return false;
				}
			}
		});
	}
</script>
</html>