<?php
return array(
	//'配置项'=>'配置值'
    "URL_case_INSENSITIVE"=>true,//url不区分大小写
    "URl_HTML_SUFFIX"=>"html|xml|shtml",//限制伪静态的后缀
//    URl路由的配置
    "URL_ROUTER_ON"=>true,
    "URl_ROUTE_RULES"=>array(


//        【1】 规则路由
//        "my"=>"Index/index", //使my可以代替 Index/index//静态地址路由
//        http://localhost/ThinkPHP4/index.php/my 可以代替：http://localhost/ThinkPHP4/index.php/Index/index

//        ":id/:num"=>"Index/index", //使my可以代替 Index/index//动态地址路由
//        http://localhost/ThinkPHP4/index.php/10/1000 (id为10；num为1000) 可以代替：http://localhost/ThinkPHP4/index.php/Index/index


          "my/:num"=>"Index/index", //动静态混合的地址路由
//        http://localhost/ThinkPHP4/index.php/my/100  可以$_GET['num'] 值为100
//        "my/:num$"=>"Index/index", //  $是结束符  加上$ 则表明后面不能加多余的东西
//        http://localhost/ThinkPHP4/index.php/my/100/a  就会显示语法错误


//        "year/:year/:month/:day"=>"Index/index", //动静态混合的地址路由
//        "year/:year\d/:month\d/:day\d"=>"Index/index", //强制必须全为数字http://localhost/ThinkPHP4/index.php/year/2016/10/1
//         可以通过GET传值获取：$_GET['year']   $_GET['month']  $_GET['day']


    ),

);
?>