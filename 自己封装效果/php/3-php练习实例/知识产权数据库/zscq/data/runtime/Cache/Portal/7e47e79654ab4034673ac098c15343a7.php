<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>个人中心</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/perCenter.css"/>
</head>
<body>
    <div class="perCenter-box ">
        <div class="bgl-nav bb main-hou">
            <a href="index.php?g=Portal&m=pinfo&a=index" class="active">安全设置</a>
            <a href="index.php?g=Portal&m=pinfo&a=lianxiren">联系人设置</a>
            <a href="index.php?g=Portal&m=pinfo&a=xiaoxitz">消息通知</a>
        </div>
        <div class="per-tab-box main-hou">
            <div class="tab-mode active mt20">
                <!--安全设置 -->
                <div class="aq-user brand-guwen">
                    <div class="guwen-right oh">
                        <div class="fl mr20 ml30">
							<img src="public/html/images/img9.png" alt=""/>
						</div>
                        <div class="tel txt fl f12">
						
                            <p>
								<span class="tit">登录账号：</span><?php echo ($res["phone"]); ?>
							</p>
                            <p>
								<span class="tit">联系人：</span><?php echo ($res["linkman"]); ?>
							</p>
                            <p>	
								<span class="tit">联系电话：</span><?php echo ($res["phone"]); ?>
							</p>
                        </div>
                        <div class="site txt fl f12">
                            <p>
								<span class="tit">所属企业：</span><?php echo ($res["companyname"]); ?>
								<a href = "index.php?g=Portal&m=pinfo&a=xq_qiye&names=<?php echo ($res["companyname"]); ?>">
									<span class="kan fc1 fb">查看</span>
								</a>
							</p>
                            <p>
								<span class="tit">联系地址：</span><?php echo ($res["address"]); ?>
							</p>
                        </div>
                    </div>
                </div>
                <div class="aq-items">
                    <div class="items">
						<?php if($res['safetylevel'] == "1"){ ?>
							<div class="icon fl">
								<div class="ji">低级</div>
							</div>
							<div class="fl">
								<p class="it-tit">低级</p>
								<p class="it-txt">绑定手机、邮箱并将密码修改复杂一点</p>
							</div>
						<?php }else if($res['safetylevel'] == "2"){ ?>
							<div class="icon fl">
								<div class="ji">中级</div>
							</div>
							<div class="fl">
								<p class="it-tit">您的账户安全级别非常低</p>
								<p class="it-txt">中级</p>
							</div>
						<?php }else if($res['safetylevel'] == "3"){ ?>
							<div class="icon fl">
								<div class="ji">高级</div>
							</div>
							<div class="fl">
								<p class="it-tit">高级</p>
								<p class="it-txt">高级</p>
							</div>
						<?php } ?>
							<div class="fr">
								<a href="index.php?g=Portal&m=pinfo&a=anquan" class="blue-big-btn">重新检测</a>
							</div>
                    </div>
                    <div class="items">
                        <div class="icon fl">
							<img src="public/html/images/icon34.png" width="26" height="40" alt=""/>
						</div>
                        <div class="fl">
                            <p class="it-tit">手机绑定</p>
                            <p class="it-txt">绑定手机，更安全，您可以使用手机号进行登录，您绑定的手机：
								<span class="tel" ><?php echo ($res["phone"]); ?></span>
							</p>
                        </div>
                        <div class="fr">
							<a href="<?php echo U('Portal/pinfo/cktel');?>" class="blue-big-btn">修改</a>
						</div>
                    </div>

                    <div class="items">
                        <div class="icon fl">
							<img src="public/html/images/icon33.png" width="40" height="39" alt=""/>
						</div>
                        <div class="fl">
                            <p class="it-tit">邮箱绑定</p>
                            <p class="it-txt">绑定您常用的邮箱，你可以使用邮箱登录。
							<?php if($res["email"]==""){?>
							
								<span class="email">您的邮箱还未做绑定快去绑定吧！</span>
							<?php }else{?>
								<span class="email"><?php echo $res["email"];?></span>
							<?php }?>
							</p>
                        </div>
                        <div class="fr">
						<?php if($res["email"]==""){?>
							<a href="index.php?g=Portal&m=pinfo&a=ckemail" class="blue-big-btn">绑定</a>
						<?php }else{?>
							<a href="index.php?g=Portal&m=pinfo&a=ckemail" class="blue-big-btn">修改</a>
						<?php } ?>
						</div>
                    </div>

                    <div class="items bdn">
                        <div class="icon fl">
							<img src="public/html/images/icon32.png" width="34" height="40" alt=""/>
						</div>
                        <div class="fl">
                            <p class="it-tit">登录密码</p>
                            <p class="it-txt">互联网账号存在被盗风险，建议您定期更改密码以保护账户安全。</p>
                        </div>
                        <div class="fr">
							<a href="<?php echo U('Portal/pinfo/wangjipass');?>" class="blue-big-btn">修改</a>
						</div>
                    </div>
                </div>
                <!--安全设置 end-->
            </div>
        </div>
    </div>
</body>
</html>