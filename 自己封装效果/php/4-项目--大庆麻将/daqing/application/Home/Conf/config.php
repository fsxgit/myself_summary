<?php
return array(
    'SHOW_PAGE_TRACE' =>0,
    'URL_MODEL'            => 0, //URL模式
    'URL_ROUTER_ON' => true, // 是否开启URL路由
    'URL_ROUTE_RULES' => array(
        'Index/:name'    => 'Index/page',
    ),
    // 预先加载的标签库
    'URL_HTML_SUFFIX' => 'html',
    /* 模板相关配置 */
    'TMPL_PARSE_STRING' => array(
            '__IMG__'    => __ROOT__ . '/static/images',
            '__CSS__'    => __ROOT__ . '/static/css',
            '__JS__'     => __ROOT__ . '/static/js',
    ),
    'HOME_LIST_ROWS' => 9,
    /* 提示模版 */
//     'TMPL_ACTION_ERROR'     =>  'Public/tips',
//     'TMPL_ACTION_SUCCESS'   =>  'Public/tips',
    'DETAIL_MAX_CACHE' => 100,
    'COOKIE_PREFIX' => 'web_home_',
);