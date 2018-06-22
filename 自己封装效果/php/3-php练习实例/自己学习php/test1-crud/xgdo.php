<?php
//设定编码
//【第一步】 设定编码，防止乱码
header("content-Type: text/html; charset=UTF-8");




$id = $_GET['id'];
//var_dump($id);

$name = $_POST["name"];
$sex = $_POST["sex"];
$tel = $_POST["tel"];
$email = $_POST["email"];
$site = $_POST["site"];
$idCard = $_POST["idCard"];




//性别的特殊处理
//echo $sex;
if($sex == "男"){
    $sexNum = 1;
}else{
    $sexNum = 0;
}

//echo $sexNum;


//用于判断是否修改了图片
$imgpd = $_FILES["img"]["name"];
//echo $imgpd;

//图片的特殊处理
//var_dump($_FILES);//测试是否获取数据;
$uploaddir = "./upload/";//设置文件保存目录 注意包含/
$type=array("jpg","gif","bmp","jpeg","png");//设置允许上传文件的类型
$url = "./upload/".time().".jpg"; //文件路径 用时间来命名字防止重复命名
move_uploaded_file($_FILES["img"]["tmp_name"],$url);//$_FILES["img"]["tmp_name"] 获取的文件的暂时的名字,用新的名字$url代替后存放在新的路径里面
//插入文件时的方法 end


$img = $url;


$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "fsx";
mysql_connect($servername,$username,$password);
mysql_select_db($dbname);
mysql_query("set names utf8");


//判断是否上传了新的图片，来选择不同的sql语句
if( !$imgpd ){
    $sql = "update information set name='$name',tel='$tel',email='$email',site='$site',idCard='$idCard',sex='$sexNum' where id=$id";
}else{
    $sql = "update information set name='$name',tel='$tel',email='$email',site='$site',idCard='$idCard',sex='$sexNum',img='$img' where id=$id";
}

$res = mysql_query($sql);

if ($res = false){
    echo "更新数据失败！失败原因是:".mysql_error();
}else{
//    echo "更新数据成功！";
    header("location:xinxi.php");//让执行流程进入到:mess_manage.php这个页面
    //也就是说本页面完全没有机会显示给用户了
}


?>


