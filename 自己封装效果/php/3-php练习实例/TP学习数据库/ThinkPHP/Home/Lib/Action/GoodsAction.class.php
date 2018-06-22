<?php

//第二次整体测试,以商品模块为例

//第一步:在D:\phpstudy\WWW\ThinkPHP\Home\Lib\Action建立可以跳转goods页面的控制文件GoodsAction.class.php
class GoodsAction extends Action {
    public function goods(){
//	$name = '豁阿黑臣';
//	$this ->assign('fsx',$name);
//new 一个新模型的方法：也可以这样$m = M('Fsx');
	$m=new Model('Fsx');//调用数据库中的数据表，去掉前缀名的数据表名字
	$arr=$m->select();
	var_dump($arr);
	$this->assign('fsxName',$arr[0]['username']);//传数据的方法
	$this->assign('fsxSex',$arr[0]['sex']);//传数据的方法
	$this->assign('fsxName2',$arr[1]['username']);//传数据的方法
	$this->assign('fsxSex2',$arr[1]['sex']);//传数据的方法
	$this->show();
    }
}

//第二步:在D:\phpstudy\WWW\ThinkPHP\Home\Tpl建立可以跳转goods页面的控制
//	建立Good文件夹，并建立goods.html

//注意对应名字都是goods且注意大小写