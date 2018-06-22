<?php
return array(
    //'配置项'=>'配置值'
    'URL_PATHINFO_DEPR'=>'/',//修改url的分隔符
//	'TMPL_L_DELIM'=>'<{',//修改左定界符
//	'TMPL_R_DELIM'=>'}>',//修改右定界符
//	'TMPL_TEMPLATE_SUFFIX'=>'.tpl',//修改模板文件后缀名
//	'TMPL_FILE_DEFR'=>'_',//修改模板文件的目录层次，目录结构:这样就可以访问Index_index.html的模板文件了

    //配置连接数据库
    'DB_TYPE'=>'mysql',//连接的数据库类型
    'DB_HOST'=>'localhost',//连接的主机名
    'DB_NAME'=>'thinkphp',//连接的数据库名字
    'DB_USER'=>'root',//连接的数据库用户名
    'DB_PWD'=>'root',//连接的数据库密码
    'DB_PORT'=>'3306',//连接的数据库的端口号
    'DB_PREFIX'=>'tp_',//连接的数据库的表前缀(为防止同名冲突)
    //也可使用DNS配置连接数据库
//	'DB_DSN'=>'mysql://root:@localhost:3306/thinkphp',


    'SHOW_PAGE_TRACE'=>true,//	开启页面TRACE的方法

/////////////////////////////////////////////////////////////////
//    如何动态修改模板主题、、也即模板组的实际运用延伸
//	'DEFAULT_THEME'=>'my',//设置默认模板主题使用my模板主题
//	'DEFAULT_THEME'=>'your',//设置默认模板主题使用you模板主题//
//    'TMPL_DETECT_THEME'=>true,//开启自动侦测模板主题,只有开启后才能够使用户更改主题
//    'THEME_LIST'=>'your,my',//设置支持的修改模板主题的组
//通过地址栏（url传递t=主题的参数your）切换到your主题               http://localhost/ThinkPHP/index.php/Index/index/t/your
//通过地址栏（url传递t=主题的参数my）切换到my主题               http://localhost/ThinkPHP/index.php/Index/index/t/my
/////////////////////////////////////////////////////////////////


//    配置url链接
//    'TMPL_PARSE_STRING'=>array(
//        '__CSS__'=>'/think/Public/css',
//        '__JS__'=>'/think/Public/js',
//    ),
//    __ROOT__ : 代表网站根目录，不管将来文件名命什么名字都开已找到根目录，故避免了上面的弊端，股上面可以改为

    'TMPL_PARSE_STRING'=>array(
        '__CSS__'=>__ROOT__.'/Public/css',
        '__JS__'=>__ROOT__.'/Public/js',
    ),

);
?>