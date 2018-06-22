<?php
//1.定义应用名字 前台：Home   后台：Admin
define("APP_NAME","Home");
//2.确定应用路径：
define("APP_PATH","./Home/");
//3.开启调试模式
define("APP_DEBUG",true);
//开启调试模式后连接中的模块名首字母要大写例如：Index，User
//4.应用核心文件
require "./ThinkPHP/ThinkPHP.php";

?>
<!--

http://localhost/ThinkPHP/index.php?g=Index&m=Index&a=index
                                     ?g=模块名&m=控制器名&a=方法名
http://localhost/ThinkPHP/index.php/Index/Index
                                    控制器名/方法名

-->