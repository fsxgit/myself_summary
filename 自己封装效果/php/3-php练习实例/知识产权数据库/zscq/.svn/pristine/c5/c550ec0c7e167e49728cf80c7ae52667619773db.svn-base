<?php
$filename = "./" . date ( 'YmdH' ) . ".zip"; // 最终生成的文件名（含路径）
// 生成文件
$zip = new ZipArchive (); // 使用本类，linux需开启zlib，windows需取消php_zip.dll前的注释
if ($zip->open ( $filename, ZIPARCHIVE::CREATE ) !== TRUE) {
    exit ( '无法打开文件，或者文件创建失败' );
}

//$fileNameArr 就是一个存储文件路径的数组 比如 array('/a/1.jpg,/a/2.jpg....');
$fileNameArr = array('./2.pdf','./2.doc','./3.pdf','./4.pdf','./5.pdf','./3.doc');
foreach ( $fileNameArr as $val ) {
    $zip->addFile ( $val, basename ( $val ) ); // 第二个参数是放在压缩包中的文件名称，如果文件可能会有重复，就需要注意一下
}
$zip->close (); // 关闭

//下面是输出下载;
header ( "Cache-Control: max-age=0" );
header ( "Content-Description: File Transfer" );
header ( 'Content-disposition: attachment; filename=' . basename ( $filename ) ); // 文件名
header ( "Content-Type: application/zip" ); // zip格式的
header ( "Content-Transfer-Encoding: binary" ); // 告诉浏览器，这是二进制文件
header ( 'Content-Length: ' . filesize ( $filename ) ); // 告诉浏览器，文件大小
@readfile ( $filename );//输出文件;

?>