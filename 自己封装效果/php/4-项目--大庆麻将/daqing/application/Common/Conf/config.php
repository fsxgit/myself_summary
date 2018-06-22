<?php
if(file_exists("data/conf/db.php")){
	$db=include "data/conf/db.php";
}else{
	$db=array();
}
if(file_exists("data/conf/config.php")){
	$runtime_config=include "data/conf/config.php";
}else{
    $runtime_config=array();
}

if (file_exists("data/conf/route.php")) {
    $routes = include 'data/conf/route.php';
} else {
    $routes = array();
}

$configs= array(
        "LOAD_EXT_FILE"=>"extend",
        'UPLOADPATH' => 'data/upload/',
        //'SHOW_ERROR_MSG'        =>  true,    // 显示错误信息
        'SHOW_PAGE_TRACE'		=> false,
        'TMPL_STRIP_SPACE'		=> false,// 是否去除模板文件里面的html空格与换行
        'THIRD_UDER_ACCESS'		=> false, //第三方用户是否有全部权限，没有则需绑定本地账号
        /* 标签库 */
        'TAGLIB_BUILD_IN' => THINKCMF_CORE_TAGLIBS,
        'MODULE_ALLOW_LIST'  => array('Admin','Portal','Asset','Api','User','Home'),
        'TMPL_DETECT_THEME'     => false,       // 自动侦测模板主题
        'TMPL_TEMPLATE_SUFFIX'  => '.html',     // 默认模板文件后缀
        'DEFAULT_MODULE'        =>  'Home',  // 默认模块
        'DEFAULT_CONTROLLER'    =>  'Index', // 默认控制器名称
        'DEFAULT_ACTION'        =>  'index', // 默认操作名称
        'DEFAULT_M_LAYER'       =>  'Model', // 默认的模型层名称
        'DEFAULT_C_LAYER'       =>  'Controller', // 默认的控制器层名称
        
        'DEFAULT_FILTER'        =>  'htmlspecialchars', // 默认参数过滤方法 用于I函数...htmlspecialchars
        
        'LANG_SWITCH_ON'        =>  true,   // 开启语言包功能
        'DEFAULT_LANG'          =>  'zh-cn', // 默认语言
        'LANG_LIST'				=>  'zh-cn,en-us,zh-tw',
        'LANG_AUTO_DETECT'		=>  true,
        'ADMIN_LANG_SWITCH_ON'        =>  false,   // 后台开启语言包功能
        
        'VAR_MODULE'            =>  'g',     // 默认模块获取变量
        'VAR_CONTROLLER'        =>  'm',    // 默认控制器获取变量
        'VAR_ACTION'            =>  'a',    // 默认操作获取变量
        
        'APP_USE_NAMESPACE'     =>   true, // 关闭应用的命名空间定义
        'APP_AUTOLOAD_LAYER'    =>  'Controller,Model', // 模块自动加载的类库后缀
        
    
        'SP_ADMIN_STYLE'		=> 'flat',
        'SP_ADMIN_TMPL_PATH'    => 'admin/themes/',       // 各个项目后台模板文件根目录
        'SP_ADMIN_DEFAULT_THEME'=> 'simplebootx',       // 各个项目后台模板文件
        'SP_ADMIN_TMPL_ACTION_ERROR' 	=> 'Admin/error.html', // 默认错误跳转对应的模板文件,注：相对于后台模板路径
        'SP_ADMIN_TMPL_ACTION_SUCCESS' 	=> 'Admin/success.html', // 默认成功跳转对应的模板文件,注：相对于后台模板路径
        'TMPL_EXCEPTION_FILE'   => SITE_PATH.'public/exception.html',
        
        'AUTOLOAD_NAMESPACE' => array('plugins' => './plugins/'), //扩展模块列表
        
        'ERROR_PAGE'            =>'',//不要设置，否则会让404变302
        
        'VAR_SESSION_ID'        => 'session_id',
        
        "UCENTER_ENABLED"		=>0, //UCenter 开启1, 关闭0
        "COMMENT_NEED_CHECK"	=>0, //评论是否需审核 审核1，不审核0
        "COMMENT_TIME_INTERVAL"	=>60, //评论时间间隔 单位s
        
        /* URL设置 */
        'URL_CASE_INSENSITIVE'  => true,   // 默认false 表示URL区分大小写 true则表示不区分大小写
        'URL_MODEL'             => 0,       // URL访问模式,可选参数0、1、2、3,代表以下四种模式：
        // 0 (普通模式); 1 (PATHINFO 模式); 2 (REWRITE  模式); 3 (兼容模式)  默认为PATHINFO 模式，提供最好的用户体验和SEO支持
        'URL_PATHINFO_DEPR'     => '/',	// PATHINFO模式下，各参数之间的分割符号
        'URL_HTML_SUFFIX'       => '',  // URL伪静态后缀设置
        
        'VAR_PAGE'				=>"page",
        
        'URL_ROUTER_ON'			=> true,
        'URL_ROUTE_RULES'       => $routes,
        		
        /*性能优化*/
        'OUTPUT_ENCODE'			=>true,// 页面压缩输出
        
        'HTML_CACHE_ON'         =>    false, // 开启静态缓存
        'HTML_CACHE_TIME'       =>    60,   // 全局静态缓存有效期（秒）
        'HTML_FILE_SUFFIX'      =>    '.html', // 设置静态缓存文件后缀
        
        'TMPL_PARSE_STRING'=>array(
        	'__UPLOAD__' => __ROOT__.'/data/upload/',
        	'__STATICS__' => __ROOT__.'/statics/',
            '__WEB_ROOT__'=>__ROOT__
        ),
        'RONGYUN_CONF' => array(
                'key' => '',
                'secret' => '',
        ),
        'JPUSH_CONF' => array(
                'key' => 'd8d96c7b3deb3c6e57647dde',
                'secret' => 'beaeb2a64f475e4b25f444d2',
        ),
        // 容联云短信
        'YUNTONGXUN' => array('AccountSid' => 'aaf98f89539b228f0153a64eeaa913a5',
                'AccountToken' => 'daf4ca9d68d545e39ddf0094a793b139',
                'AppId' => '8aaf07085aabcbbd015ac56634dc0748', // 应用Id
                'ServerIP' => 'app.cloopen.com', 
                'ServerPort' => '8883', 
                'SoftVersion' => '2013-12-26'),
        'TEMPID' => array(
            'captcha' => 159620,
        ),
        'CALLBACK_URL' => 'http://child.zai0312.com/pay/notify',
        'ALIPAY'=> array(
            'appid' => '2017041206664487',
            'publicKey' => 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAg9C/WztbpCPlI3WPswwYNNG2t9dnleSvuxSDHq2/e138K5+maZduqN0lwkfzug808BvYBHfjb8CE3ODcnsjDlI6FuojlT8xwwWoo6laoncklzx/+GbnTjCPq4wQP7bQT6xewiZxJLYIo3rOHw9z654atkiaEGEssJ0za9XHScxtDkAm+gFZ0ytO/0xzqxv7UFB/AY76fYooCf3pR0d6r2vyn9ieokbxdh9XOd6ZR7La+hOzFZovNZ9Mo3DIeYh2CBnpjrNc5e70y0yc2ZQNu8WCWC3eQ6FPKumEbrTCtfCuy/r0O+KQZafeGTMVAl18kf9i+TKfIhkAIMJgv/MxTEwIDAQAB',
            'privateKey' => 'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCD0L9bO1ukI+UjdY+zDBg00ba312eV5K+7FIMerb97Xfwrn6Zpl26o3SXCR/O6DzTwG9gEd+NvwITc4NyeyMOUjoW6iOVPzHDBaijqVqidySXPH/4ZudOMI+rjBA/ttBPrF7CJnEktgijes4fD3Prnhq2SJoQYSywnTNr1cdJzG0OQCb6AVnTK07/THOrG/tQUH8Bjvp9iigJ/elHR3qva/Kf2J6iRvF2H1c53plHstr6E7MVmi81n0yjcMh5iHYIGemOs1zl7vTLTJzZlA27xYJYLd5DoU8q6YRutMK18K7L+vQ74pBlp94ZMxUCXXyR/2L5Mp8iGQAgwmC/8zFMTAgMBAAECggEAa3C4qHonZhDD8jUencgb6uGM1yhCDFFMU2aSwWzJiJrAsiX9FFAUKJuo7USMinleot9vIaU+wpXfNdIqwVnO4MWShsqSboqq1VvcYbWk1odfxAXFrd5jafTUvZlQCmYfXh3/DQtQMkHHYk5fOOxjrld+HoQ6YzrSkG36gtj1uk+qNQDpGWvsp2DQJH1kiB5pWJsQs8RWmKo+oAabHx3ZvnLTSOgWENadUvzdTcshOdfxAiSji6iGxkiFZmyXGdslzUsbBhM+lsxiEFRoXZhBEh/TRdRvxhW18Cf/YrWY6K827eMpz5gCAejxytIjWZ8yR/eIhBffYni71dFl/pWRMQKBgQDkAv7S0a85hQ+Lnds0YrsEMOeo0o1tNZvBe/b4ZonqdweMVHz5gdWEfKFYIRZvpl8pbPw1mzQvVOCL/PIJnFKfeYKt/m/M71wvyhKQ26YGHcT/tDYn5mqH/uy59dMVX6KcB7K/SljpfxTdRj9QIpX43RwKrY52amVkULTBTNTwdQKBgQCT/uUbsNpT4Ug3q+Y9bxw/pp9EGBVcK9V/9x0y4VMfNHPZS+e0m3Zobx2mKb3UFao8zE7PdHwOh0WjQEIJ6TKQscm63t0GsM5Z12j4YLtlCe4WHgQ98zrRRx1kdEIAXSLofiC2W+ddEmOpzY+oTZdNIQIJIQ6gajMT1O/Jvi7EZwKBgQDDxw6mVgTujqHab6BYSq3p21QOUTu+GdmzOI3Gm8Sv3aRNif4E/sYnDBw9X6u0ElaDa2DjZnBYc7iaeoYYWnFXHS5n16CHhr7RCeEHIJJdjhIovMQDXoT6YJlC0yB7qbIl5zZDqcLOOp/fnwGd/RRoqvH4+Szp4FFO4T1S/HWaQQKBgHyfkSg/RaqKs3iF3YzwCpai5cy+hwYlt1RZsBHPYmKNldxuqcARhaUtpIbu8XYthDxMQzU4vtqxGHf/PV0BLV5hCCG/V9oxeqJ23WMCeer8cKvZPPM55dajDuIvcADEbQfgZgWJ4IskWB5+BjHQnM8LM56iYqG8rCRQFFgLOXCTAoGAKLLkaNf544BUjkntHZ6dcue+obUDDbb0J1gA+TvClJSYZpURsZMxBUwRyOO4vJCb1RTfROXzDKohjc3Xqpfq0NUBnR5n1TeZ2TS4fEHVU1ok33CP8burb6dbPXQCkGRiEZQK/8XRVYM4Sw8Lb7l94eTUItDHDsvWRs83dT0hrKE=',
            'getPublicKey' => 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw2A1zcPYyO7plT0t1XSYYjHFN2kH/kEccazW4of3MR7wgadTyJmU4QO/XBGNz5l0y6Etao1XAaQe9nRwy9HFIkBgy2+0PPPIK7RrL17IaWItTq/8sVKfiZEUT/W8PxlIjqz8cH6vmuz7BCL8y6TCxzly+8Ahuz6wIv3Qx+I/8QpfctU8F+5/kr7SOoGxWpemr5viXhJwR1Sy5uo7rikxR/xQxztGUbZeJwMggAXLqXZAXgaNGacwlmF05MJLeOvkvachXafjLAzdyV+ZZE62sdOfbRvq+O9vi/7YwZVErmfkmjIHhGnP+01JXQUdfHvm8uQqbU2OwJbkDN8mUmDoBwIDAQAB'
        )
);

return  array_merge($configs,$db,$runtime_config);
