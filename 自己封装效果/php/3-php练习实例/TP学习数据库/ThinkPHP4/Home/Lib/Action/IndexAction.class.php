<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends Action {
    public function index(){
	$this->show('hello world!!');
        echo "<hr />";
        echo "id is ".$_GET['id'];
        echo "<br />";
        echo "num is ".$_GET['num'];
    }
}