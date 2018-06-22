<?php
//设定编码，防止乱码
header("content-Type: text/html; charset=UTF-8");
//1.链接数据库fsx information 数据库
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "fsx";
// 创建链接

//   $conn = new mysqli($servername, $username, $password, $dbname);//这种方式连接数据库写入数据库的数据会出现乱码现象
mysql_connect($servername, $username, $password);
mysql_select_db($dbname);
mysql_query("set names utf8");


$id = $_GET["id"];
//var_dump($id);
//die;


$sql = "select * from information where id=$id";
$res = mysql_query($sql); //执行$sql语句
//var_dump($res);
$row=mysql_fetch_array($res);
//var_dump($row);
//判断传过来的id是否存在
if( $row == ""){

    echo "<script>alert('您查询的信息不存在');location.href='php5-search.php';</script>"; //$url就是你的跳转路径
    die;
}

//echo $row;
//echo $row['name'];
$name = $row['name'];
$sex = $row['sex'];
$email = $row['email'];
$tel = $row['tel'];
$site = $row['site'];
$idCard = $row['idCard'];
$img = $row['img'];

echo "<script>location.href='php5-search.php?name=$name&sex=$sex&email=$email&tel=$tel&site=$site&idCard=$idCard&img=$img';</script>"; //$url就是你的跳转路径


?>