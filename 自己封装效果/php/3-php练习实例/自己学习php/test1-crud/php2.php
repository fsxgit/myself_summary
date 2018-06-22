<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<?php

echo("<h1>变量，echo,print,数组,字符传的链接，变量的呈现方式：</h1>");
    $a = 9;
    $b = 13;
    $c = $a + $b;

echo("<h3>echo的三种使用方法：</h3>");
    echo "$c <br />";
    echo( "$b <br />");
    echo( $a. "<br />");
    print($c."<br />");
    print($a."<br />");
    print($a."<br />");
        print("<br />");

    $car = array("红旗","宝马","奔驰");

    echo("我最喜欢的车是".$car[1]."<br />");
    echo("我最喜欢的车是{$car[1]}<br />");

echo("<h1>定义常量：</h1>");
    define("FSX","我的名字是樊诗晓！！");
    define("CL","常量是全局的！！");
    echo FSX;
        print("<br />");
    echo CL;
        print("<br />");
echo("<h1>字符串及运算：</h1>");
    $txt = "China is the hometown of China! ";
    $len = strlen($txt);
    $pos = strpos($txt,"hometown");

    echo $txt;
        print("<br />");
    echo $len;
        print("<br />");
    echo $pos;
        print("<br />");
echo("<h1>php魔术变量：</h1>");
    echo "这是第".__LINE__."行";
        print("<br />");
    echo "这个文件的路径是:".__FILE__;
        print("<br />");
    echo "这个文件所在目录是:".__DIR__;
        print("<br />");


echo("<h1>时间：</h1>");
    $t = date("Y/m/d/H/i/s");
    echo $t;
        print("<br />");


















?>
</body>
</html>