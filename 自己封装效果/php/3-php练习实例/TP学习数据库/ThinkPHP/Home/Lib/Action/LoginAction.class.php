<?php

//第二次整体测试,以商品模块为例

//第一步:在D:\phpstudy\WWW\ThinkPHP\Home\Lib\Action建立可以跳转goods页面的控制文件GoodsAction.class.php
class LoginAction extends Action {
    function index(){

        $this->display();
    }
    function do_login(){
//        获取用户名和密码，和数据库进行对比，有用户则登录没有则输出错误页面
//        dump($_POST);//查看是否获取到数据
//        dump($_SESSION);//查看是否获取到验证码

        $username = $_POST['username'];
        $password = $_POST['password'];
        $code = $_POST['code'];
        if($_SESSION['verify'] !== md5($code) ){
            $this->error("验证码错误");
        }
        $m = M('User');
        $where['username'] = $username;
        $where['password'] = $password;

        $i=$m->where($where)->count();
        if($i>0){
            $this->redirect('User/index');
        }else{
            $this->error("该用户不存在");
        }
    }
}