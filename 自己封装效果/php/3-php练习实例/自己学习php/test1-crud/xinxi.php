<?php
//  1.链接数据库
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "fsx";
mysql_connect($servername,$username,$password);
mysql_select_db($dbname);
mysql_query("set names utf8");
//  书写sql语句
//$sql = "select * from information WHERE id IN(1,2,3,4,5,6) ORDER BY FIND_IN_SET(id,'1,2,3,4,5,6');"; //从中取出什么按照什么排列
//$sql = "select * from information ORDER BY id DESC;"; //倒叙排列
$sql = "select * from information ORDER BY id ASC;";
//    执行sql语句
$res = mysql_query($sql);
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>信息列表</title>
    <style>
        table{margin:0 auto}
        td{border:1px solid #000; border-collapse: collapse; padding:10px 20px;}
        td img{width: 60px; height: auto;}
        h1{text-align:center;}
        .shou{font-size: 12px; padding-left: 20px;}
    </style>
</head>
<body>
<h1>请修改所需要的修改信息<a href="index.html" class="shou">返回首页</a></h1>
<table>
    <tr>
        <td>编号</td>
        <td>姓名</td>
        <td>性别</td>
        <td>联系电话</td>
        <td>邮箱</td>
        <td>家庭住址</td>
        <td>身份证号</td>
        <td>头像</td>
        <td>操作</td>
    </tr>
    <?php
    while($row=mysql_fetch_assoc($res))//将result结果集中查询结果取出一条
    {
        echo"<tr><td>".$row["id"]."</td><td>".$row["name"]."</td><td class='sex'>".$row["sex"]."</td><td>".$row["tel"]."</td><td>".$row["email"]."</td><td>".$row["site"]."</td><td>".$row["idCard"]."</td><td><img src='".$row["img"]."' /></td><td><a href='xg.php?id=".$row["id"]."'>修改</a>||<a href='del.php?id=".$row["id"]."'>删除</a></td><tr>";
    }


    ?>
</table>
</body>
</html>