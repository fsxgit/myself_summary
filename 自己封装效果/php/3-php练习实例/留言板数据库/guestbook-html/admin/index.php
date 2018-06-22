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

            <div id="cont">
                <!-- 留言区域开始 -->
                <div id="info">
                    <div class="info">
                        <h4>官方信息：</h4>
                        <p>RainMan-留言本 e-mail:zyc521008@sina.com<br />Powered by 瑞曼留言本 V1.0 瑞曼科技 www.rain-man.cn</p>
                    </div>
                    <div class="info">
                        <h4>信息汇总：</h4>
                        <ul>
                            <li>家家留言本版本:家家留言本 V1.0</li>
                            <li>管理员用户:admin </li>
                            <li>网站信箱:zyc521008@sina.com</li>
                            <li>网站首页地址:http://localhost/ttian/index.php</li>
                            <li>IP地址： 127.0.0.1</li>
                            <li>留言本的名称: RainMan</li>
                        </ul>
                    </div>
                    <div class="info">
                        <h4>相关说明：</h4>
                        <ul>
                            <li>本系统全部开源，是家家留言本的最初版本，大家可以二次开发利用。</li>
                            <li>如果觉得不错记得推荐给朋友哦，非常感谢您的支持。</li>
                            <li>也非常欢迎各位php爱好者与作者联系、共同交流学习php。</li>
                        </ul>
                    </div>
                    <div class="info">
                        <h4>关于我们：</h4>
                        <p>RainMan-留言本系统属于RainMan个人作品。如有建议请联系 email:zyc521008@sina.com<br /><br />
                        官方网站:http://JJabc.com ©2008</p>
                    </div>
                </div>
                <!-- 留言区域止 -->
            </div>
            <!--引用公共底部 开始-->
            <?php include("../public/footer.php"); ?>
            <!--引用公共底部 结束-->
        </div>
    </body>
</html>