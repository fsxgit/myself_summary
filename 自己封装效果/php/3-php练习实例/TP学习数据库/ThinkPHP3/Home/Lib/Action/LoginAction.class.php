<?php
// 本类由系统自动生成，仅供测试用途
class LoginAction extends Action {

    public function index(){
	    $this->display();
    }

    public function do_login(){

        $usename = $_POST['username'];
        $password = $_POST['password'];

        $user = M("User");
        $where['username'] = $usename;
        $where['password'] = $password;

        $i = $user->where($where) ->count();
        if($i>0){
            $_SESSION['username'] = $usename;
            $this->redirect("Index/index");
        }else{
            $this->error("账号/密码不对，用户不能登录");
        }
    }
}