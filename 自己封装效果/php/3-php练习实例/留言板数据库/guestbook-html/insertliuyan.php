<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
<head>
    <title>瑞曼-留言本</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
</head>
<body>
<?php
//一.连接数据库的固定语句
require("admin/conn.php"); //将conn.php文件中的代码引入到此出来

//二.获取用户信息
$xingming = addslashes($_POST['nicheng']);
$biaoti = addslashes($_POST['biaoti']);
$neirong = addslashes($_POST['neirong']);//addcslashes()是为了处理某些冲突的特殊字符" ' \,以使我们能够正确使用sql语法

//三.构建 sql语句
$sql="insert into liuyanbiao(xingming, biaoti, fabushijian, neirong )values('$xingming', '$biaoti', now(),
'$neirong')";
//四.插入sql语句/执行sql语句
$result = mysql_query($sql);
if($result == true)
{
//    echo "留言成功!";
    header("location:index.php");//让执行流程进入到index.php这个页面
                                //也就是说本页面完全没有机会显示给用户了
}else{
    echo "留言失败!失败原因是:". mysql_error();
}
?>
</body>
</html>