<?php
namespace Home\Controller;

class DownloadController extends HomeController
{

    public function _initialize ()
    {
        parent::_initialize();
        $user = session('userLoginS');
        empty($user) && $this->error("只有认证用户才能下载", U('register/login'));
    }

    public function bashi ()
    {
        $file = 'http://www.zai0312.com/game/80.apk';
        header("Content-Description: File Transfer");
        header('Content-type: apk');
        // header('Content-Length: ' . filesize($file));
        if (preg_match('/MSIE/', $_SERVER['HTTP_USER_AGENT']))
        { // for IE
            header('Content-Disposition: attachment; filename="' . rawurlencode($file) . '"');
        } else
        {
            header('Content-Disposition: attachment; filename="' . $file . '"');
        }
        readfile($file);
        return true;
    }

    public function fruit ()
    {
        $file = 'http://www.zai0312.com/game/FruitNinjia.zip';
        header("Content-Description: File Transfer");
        header('Content-type: zip');
        // header('Content-Length: ' . filesize($file));
        if (preg_match('/MSIE/', $_SERVER['HTTP_USER_AGENT']))
        { // for IE
            header('Content-Disposition: attachment; filename="' . rawurlencode($file) . '"');
        } else
        {
            header('Content-Disposition: attachment; filename="' . $file . '"');
        }
        readfile($file);
        return true;
    }
}  

