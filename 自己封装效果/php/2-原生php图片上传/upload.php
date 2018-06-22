<?php


    var_dump ($_FILES);

die;
$data1 = $_FILES['files'];

//要存放文件的文件夹名字、位置
$target_path = "./uploads/";


//1.文件的命名：可以用原始名字来命名
//$_FILES['files']['name'];

//2.也可以用自定义时间戳来命名，好处：防止重复被替换，但是记着定义后缀名（例如:.jpg）
//$time = time(); 时间戳

//把时间戳转换成年月日时分秒 例如20170518181756 即2017年5月18日18时17分56秒
$date = date('Ymdhis',time());

//文件完整路径
$target_path = $target_path .$date.".jpg";

//move_uploaded_file(files,newloc); 返回值为 true 或者 false
$m = move_uploaded_file($_FILES['files']['tmp_name'], $target_path);

if($m) {
    echo " 图片上传成功";

//    echo "<script>alert('图片上传成功');</script>";

} else{
    echo "图片上传失败";
}


die;

?>