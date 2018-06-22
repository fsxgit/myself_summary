<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends Action {



//    前置操作
    public function _before_index(){
        //做判断，如果没有登录，跳转到登陆页面去。
        if(!$_SESSION['username'] || $_SESSION['username']=='' ){
            $this->redirect("Login/index");
        }
    }



    public function index(){
        $city =new Model("City");
        $arr = $city->select();
//        var_dump($arr);
        $this->assign("list",$arr);

	    $this->display();
    }




//    后置操作
    public function _after_index(){
        echo "<script> alert('欢迎访问我的网站！！') </script>";
    }


}