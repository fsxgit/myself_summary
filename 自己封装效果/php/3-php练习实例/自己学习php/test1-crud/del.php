<?php
//设定编码
//【第一步】 设定编码，防止乱码
header("content-Type: text/html; charset=UTF-8");

$id = $_GET['id'];
//var_dump($id);

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "fsx";
mysql_connect($servername,$username,$password);
mysql_select_db($dbname);
mysql_query("set names utf8");


$sql = "delete from information  where id=$id";

$res = mysql_query($sql);

if ($res = false){
    echo "删除数据失败！失败原因是:".mysql_error();
}else{
//    echo "删除数据成功！";
    header("location:xinxi.php");//让执行流程进入到:mess_manage.php这个页面
    //也就是说本页面完全没有机会显示给用户了
}


?>


