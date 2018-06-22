<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
<head>
<title>瑞曼-留言本</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description" content="" />
<meta name="keywords" content="" />
<link rel="stylesheet" type="text/css" href="../style/skin.css" />
<script type="text/javascript">
    function logout() {
        window.confirm('您确定要退出吗?');
        window.location.href = './login.html';
    }
</script>

<style type="text/css">

</style>
</head>
    <body>
        <div id="body">
            <!--引用公共头部导航 开始-->
            <?php include("../public/header.php"); ?>
            <!--引用公共头部导航 结束-->
            <div id="cont" style="padding-bottom:10px;">
                <div class="mes" style="padding-bottom:0px;">
                    <div id="lev" style="display:block;border:none;">
                        <form action="" method="POST" style="margin:15px;">
                            管理员账号：<input type="text" value="" /><br />
                            管理员密码：<input type="password" value="" /><br />
                            管理员密码：<input type="password" value="" /><br />
                            <input class="c1" type="submit" value="提交" /><input class="c1" type="reset" value="重填" />
                        </form>
                    </div>
                </div>
            </div>
            <!--引用公共底部 开始-->
            <?php include("../public/footer.php"); ?>
            <!--引用公共底部 结束-->
        </div>
    </body>
</html>