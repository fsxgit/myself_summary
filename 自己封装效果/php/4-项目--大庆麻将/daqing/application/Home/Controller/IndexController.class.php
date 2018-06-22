<?php
namespace Home\Controller;

class IndexController extends HomeController
{

    public function index ()
    {
        $this->display();
    }

    /*public function page ($name)
    {
        $this->display($name);
    }*/



	public function introduce ()
    {
        $this->display();
    }

	public function product ()
    {
        $this->display();
    }

	public function tel ()
    {
        $this->display();
    }
	public function xy1 ()
    {
        $this->display();
    }
	public function xy2 ()
    {
        $this->display();
    }
	public function xy3 ()
    {
        $this->display();
    }
    public function pay ()
    {
        $this->display();
    }
	public function custody ()
    {
        $this->display();
    }
    public function biao ()
    {
        $file = 'http://www.zai0312.com/game/biao.zip';
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

