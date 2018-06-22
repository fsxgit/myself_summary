<?php
namespace Admin\Controller;
use Common\Controller\AdminbaseController;
class BcheckController extends AdminbaseController{
	//续展检测
	public function xuzhan(){
		$bname = I("bname");
		$qiye = I("qiye");
		$time = I("time");
		$where = " 1 and xiangmu not like '%已无效%'";
		if($bname!=''){
			$where.=" and markname like '%$bname%'";  
			$con = "&bname=$bname";
		}
		if($qiye!=''){
			$where.=" and entname like '%$qiye%'";  
			$con .= "&qiye=$qiye";
		}
		if($time!=''){
			if($time==1){
				//1年
				$where .= " and (UNIX_TIMESTAMP(enddate) - unix_timestamp(now())) < 365*24*60*60";
				$con .= "&time=1";
			}
			if($time==2){
				//半年
				$where .= " and (UNIX_TIMESTAMP(enddate) - unix_timestamp(now())) < 365*24*60*60/2";
				$con .= "&time=1";
			}
		}
		$count = M("mark")
			->where("$where and UNIX_TIMESTAMP(begindate)< unix_timestamp(now()) and UNIX_TIMESTAMP(enddate)> unix_timestamp(now())")
			->count();
	//	echo M("mark")->getlastsql();
		$page = $this->page($count,10);

		$res = M("mark")
			->where("$where and UNIX_TIMESTAMP(begindate)< unix_timestamp(now()) and UNIX_TIMESTAMP(enddate)> unix_timestamp(now())")
			->limit("$page->firstRow,$page->listRows")
			->order("id desc")
			->select();
		foreach($res as $k=>$v){
			$uid = $v["customerid"];
			$r = M("adviser")->where("customerid=$uid")->find();
			$res[$k]["adv"] = $r["consultantname"];
		}
	//	var_dump($res);die;
		$this->assign("res",$res);
		$this->assign("bname",$bname);
		$this->assign("qiye",$qiye);
		$this->assign("time",$time);
		$this->assign("page",$page->show("Admin",$con));
		$this->display();
	}
	public function detail(){
		$id = I("id");
		$r = M("mark")->where("id=$id")->find();
		$uid = $r["customerid"];
		$name = $r["entname"];
		$ad = M("enterprise")->where("entname='$name'")->find();
		$i = M("user")->where("id=$uid")->find();
		if($i["adviser"]==1){
			$g = M("adviser")->where("customerid=$uid")->find();
			$this->assign("g",$g);
		}
		$this->assign("ad",$ad);
		$this->assign("r",$r);
		$this->assign("i",$i);
		$this->display();
	}
}