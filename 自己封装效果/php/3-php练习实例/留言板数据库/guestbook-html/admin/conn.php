<?php
/**
 * Created by PhpStorm.
 * User: fsx
 * Date: 2015/12/24
 * Time: 9:39
 */
//连接数据库的固定语句   //域名  2  用户名   、、  密码
mysql_connect("localhost","root","root");
mysql_query("set names utf8"); //设置编码
mysql_query("use liuyanban");//使用的数据库名字


//字符串处理函数

function showHTMLTag($str){
    $str = str_replace("<","&lt",$str);//转换><,防止脚本出现错误
    $str = str_replace(">","&gt",$str);
    $str = str_replace("\n","<br />",$str);//转换换行符

    return $str;
}
?>