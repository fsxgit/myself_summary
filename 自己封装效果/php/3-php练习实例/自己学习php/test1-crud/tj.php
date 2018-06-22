<?php
//
header("content-Type: text/html; charset=UTF-8");


//插入文件时的方法：
//var_dump($_FILES);//测试是否获取数据
//获取的数据信息：
//array(1) {
//    ["img"]=>
//  array(5) {
//        ["name"]=>
//    string(5) "4.jpg" //文件的本地名称
//    ["type"]=>
//    string(10) "image/jpeg"   //文件的类型
//    ["tmp_name"]=>
//    string(53) "C:\Users\Administrator\AppData\Local\Temp\phpE594.tmp"   //文件的暂时名称
//    ["error"]=>
//    int(0)
//    ["size"]=>
//    int(125530)   //文件的大小
//  }
//}


//终止程序的运行
//die;
$url = "./upload/".time().".jpg"; //文件路径 用时间来命名字防止重复命名
move_uploaded_file($_FILES["img"]["tmp_name"],$url);//$_FILES["img"]["tmp_name"] 获取的文件的暂时的名字,用新的名字$url代替后存放在新的路径里面
//插入文件时的方法 end


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


//2.写入数据    把数据写入数据库中的数据表 information 中
    $fname = $_POST["fname"];
    $sex = $_POST["sex"];
    $tel = $_POST["tel"];
    $email = $_POST["email"];
    $site = $_POST["site"];
    $idCard = $_POST["idCard"];
    $img= $url;

echo $tel;
echo $idCard;


    $sql = "INSERT INTO information (name, sex, tel, email, site, idCard, img)
    VALUES ('$fname', '$sex', '$tel', '$email', '$site', '$idCard', '$img')";





//判断数据是否插入成功
    if(mysql_query($sql))//插入成功后返回true，失败返回false

//        echo "数据插入成功";
        echo "<script>
                alert('数据插入成功！');
                location.href='index.html';
                </script>"; //$url就是你的跳转路径
    else
        echo "数据插入失败！";




?>