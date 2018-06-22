<?php
// 本类由系统自动生成，仅供测试用途
class CityAction extends Action {

    public function bj(){

//        $city =new Model("City");
//        $arr = $city->select();
//        $this->assign("list",$arr);
//	    $this->display();

        //代替上面的重复的代码
        $oi = new IndexAction();//调用Index类，实例化一个Index类
        $oi -> index();//调用Index类下面的index方法
    }
    public function sh(){
//        $city =new Model("City");
//        $arr = $city->select();
//        $this->assign("list",$arr);
//        $this->display();

        //代替上面的重复的代码
        $oi = new IndexAction();//调用Index类，实例化一个Index类
        $oi -> index();//调用Index类下面的index方法
    }
    public function gz(){
//        $city =new Model("City");
//        $arr = $city->select();
//        $this->assign("list",$arr);
//        $this->display();

        //代替上面的重复的代码
        $oi = new IndexAction();//调用Index类，实例化一个Index类
        $oi -> index();//调用Index类下面的index方法
    }
    public function xj(){
//        $city =new Model("City");
//        $arr = $city->select();
//        $this->assign("list",$arr);
//        $this->display();

        //代替上面的重复的代码
        $oi = new IndexAction();//调用Index类，实例化一个Index类
        $oi -> index();//调用Index类下面的index方法
    }

    public function _empty($name){
        $this->show("<p>$name 不存在</p> <a href='__APP__/Index/index'>返回首页</a>");
    }
}