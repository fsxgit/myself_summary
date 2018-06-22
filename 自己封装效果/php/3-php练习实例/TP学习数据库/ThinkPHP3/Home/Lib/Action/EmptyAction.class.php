<?php
// 本类由系统自动生成，仅供测试用途
class EmptyAction extends Action {

    public function index(){
        $name = MODULE_NAME; //获取模块名
//        echo $name;
	    $this->show("<p>$name 此模块不存在</p>");

//        $this->display("City:$name");
    }
}