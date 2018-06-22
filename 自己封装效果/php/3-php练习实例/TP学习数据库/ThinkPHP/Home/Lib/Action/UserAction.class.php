<?php

//第一步:在D:\phpstudy\WWW\ThinkPHP\Home\Lib\Action建立可以跳转goods页面的控制文件UserAction.class.php
class UserAction extends Action {
    public function index(){

    echo "<br/><h2>这些是var_dump()出来的数据数组：</h2><br/>";

    $m=new Model('User');//调用数据库中的数据表，去掉前缀名的数据表名字
//  $m=new M('User');
	$arr=$m->select();
	var_dump($arr);

    $this->assign('fx',$arr); //将数据分配给变量形参fx，前台volist的name值必须也是fx与此保持一致

	$this -> show();
    }

//    删除的方法：
    public function del(){
        $m = new Model('User');
        $id = $_GET['id'];
        $count=$m->delete($id);
        if($count>0){
            $this->success('数据删除成功');
        }else{
            $this->error('数据删除失败');
        }
    }

    //修改的方法
    public function modify(){
        $m = new Model('User');
        $id = $_GET['id'];
        $arr = $m->find($id);
        $this->assign('data',$arr);

        $this -> show();
    }
//    修改后添加到数据库的方法
    public function update(){
        $m = new Model('User');
        $data['id'] = $_POST['id'];
        $data['username']= $_POST['username'];
        $data['sex']= $_POST['sex'];
        $count = $m->save($data);
        if($count>0){
            $this->success('数据修改成功','index');//跳转到index页面，如果不添加这个参数则跳转到上一级页面
//            $this->display('index');//跳转到index页面
        }else{
            $this->error('数据修改失败');
        }
    }

//    添加数据
    public function add(){
        $this->display();
    }
    //    添加数据
    public function create(){
        $m =new Model('User');
        $m->username=$_POST['username'];
        $m->sex=$_POST['sex'];
        $idNum=$m->add();
        if($idNum>0){
            $this->success('数据添加成功','index');//跳转到index页面，如果不添加这个参数则跳转到上一级页面
        }else{
            $this->error('数据添加失败');
        }
    }


//添加搜索功能
    public function search(){


        $m=new Model('User');//调用数据库中的数据表，去掉前缀名的数据表名字
//  $m=new M('User');
        $arr=$m->select();

        $this->assign('fx',$arr); //将数据分配给变量形参fx，前台volist的name值必须也是fx与此保持一致

        $this -> show();
    }

    public function searchDeal(){
        var_dump($_POST);//查看post传值是否传过来了

    }
}
