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
                        <?php
                        $id = $_GET['id'];
//                        echo $id;
//                        通过id,从数据库重新拿数据
                        require("conn.php");
                        $sql = "select * from liuyanbiao where id=$id";
                        $result = mysql_query($sql);
                        if($result == false){
                            echo "读取数据失败,失败原因是:".mysql_error();
                        }else{
                            $rec = mysql_fetch_array($result);//
                        }
                        $mingzi = $rec['xingming'];
                        $biaoti = $rec['biaoti'];
                        $neirong = $rec['neirong'];
                        ?>
                        <form action="xiugailiuyan.php" method="POST" style="margin:15px;">
                            <input type="hidden" name="id" value="<?php echo $id ?>"/>
                            昵称：<input type="text" value="<?php echo $mingzi ?>" name="xingming"/><br />
                            标题：<input type="text" value="<?php echo $biaoti ?>" name="biaoti"/><br />
                            内容：<br />
                            <textarea name="neirong"><?php echo $neirong ?></textarea><br />
                            <input class="c1" type="submit" value="提交" />
							<input class="c1" type="reset" value="重填" />
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