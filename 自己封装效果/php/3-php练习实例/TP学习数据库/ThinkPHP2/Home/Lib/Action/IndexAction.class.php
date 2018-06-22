<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends Action {
    public function index(){
//        分配方法一：
        $this->assign("name1","樊诗晓");
//        分配方法二：
        $n2 = "樊诗晓";
        $this->assign("name2",$n2);
//        分派方法三
        $n3 = array('樊诗晓','杜茜茜','李白','李师师','华容');
        $this->assign("name3",$n3);
        $this->assign("name3a",$n3[1]);
        $this->assign("name3b",$n3);
//        分配方法四：
        $n4 = array('k1'=>'樊诗晓','s2'=>'杜茜茜','c3'=>'李白','v4'=>'李师师','m5'=>'华容');
        $this->assign("name4",$n4[c3]);
        $this->assign("name4a",$n4);
        $this->assign("name4b",$n4);
//        分配方法五：
        import('ORG.My.Test');//找到设置的类
        $obj = new Test;//实例化Test类为对象
        $this->assign("NF",$obj);
//        分配方法六：
        $gname= $_GET['name'];
        $this->assign("name5",$gname);
//      分配方法七
        $this->assign("name6","abcdefg");
        $this->assign("name7",time());
        $this->assign("name8a",'樊诗晓');
        $this->assign("num",10);

        $this->display();
    }


    public function index2(){
        $this->assign("sex","女");
        $this->assign("age","24");
        $this->assign("num","2");
        $this->assign("num2","120");
        $this->assign("nn","28");
        $this->assign("month","6");
        $this->assign("cow","牛");


        $user = new Model("User");
        $arr=$user->select();
        var_dump($arr);
        $this->assign("data",$arr);
        $this->display();
    }

    public function muban(){

        $this->display();
    }
    public function muban1(){

        $this->display();
    }
    public function layout1(){

        $this->display();
    }
    public function layout2(){

        $this->display();
    }

}