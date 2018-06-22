<?php
namespace Admin\Controller;
use Common\Controller\AdminbaseController;
class BrandController extends AdminbaseController{
	//注册中
	public function zing(){
		$bname = trim(I("bname"));
		$state = I("state");
        $where =" 1 ";
		if($bname!=''){
            $where.=" and z.markname like '%$bname%'";  
			$con = "&bname=$bname";
        }

        if($state!=''){
			$where.=" and s.state={$state}";
			$con .= "&state=$state";
		}
	//	echo $state;
        $count = M("mark z")
			->join(" join ".C("DB_PREFIX")."zcorder_copy_copy s on z.id=s.markid")
			->where("$where and z.begindate is null and z.enddate is null and s.type='111222'")
			->count();
		$page = $this->page($count,10);

		$res = M("mark z")
			->join(" join ".C("DB_PREFIX")."zcorder_copy_copy s on z.id=s.markid")
			->where("$where and z.begindate is null and z.enddate is null and s.type='111222'")
			->limit("$page->firstRow,$page->listRows")
			->order("z.id desc")
			->field("z.id,z.markname,z.uniontypecode,z.markimage,z.marklogo,z.customerid,s.quer_no,s.state")
			->select();
		foreach($res as $k=>$v){
			$u = $v["customerid"];
			$r = M("adviser")->where("customerid=$u")->find();
			if($r){
				$res[$k]["adv"] = $r["consultantname"];
			}else{
				$res[$k]["adv"] = "无";
			}
		}
	//	var_dump($res);die;
		$this->assign("res",$res);
		$this->assign("state",$state);
		$this->assign("name",$bname);
		$this->assign("page",$page->show("Admin",$con));
		$this->display();
	}
	//注册成功
	public function zsuccess(){
		$bname = trim(I("bname"));
		$state = I("state");
		$where = " 1 and xiangmu not like '%已无效%'";
		if($bname!=''){
			$where.=" and z.markname like '%$bname%'";  
			$con = "&bname=$bname";
		}
		/*
		if($state!=''){
			$where.=" and state={$state}";
			$con .= "&state=$state";
		}*/
		$count = M("mark z")
			->join(" join ".C("DB_PREFIX")."zcorder_copy_copy s on z.id=s.markid")
			->where("$where and UNIX_TIMESTAMP(z.begindate)< unix_timestamp(now()) and UNIX_TIMESTAMP(z.enddate)> unix_timestamp(now()) and s.type='111222'")
			->count();
	//	echo M("mark z")->getlastsql();
		$page = $this->page($count,10);

		$res = M("mark z")
			->join(" join ".C("DB_PREFIX")."zcorder_copy_copy s on z.id=s.markid")
			->where("$where and UNIX_TIMESTAMP(begindate)< unix_timestamp(now()) and UNIX_TIMESTAMP(enddate)> unix_timestamp(now()) and s.type='111222'")
			->limit("$page->firstRow,$page->listRows")
			->order("z.id desc")
			->field("z.id,z.markcode_key,z.markname,z.uniontypecode,z.markimage,z.marklogo,z.customerid,s.quer_no,s.state")
			->select();
		foreach($res as $k=>$v){
			$u = $v["customerid"];
			$r = M("adviser")->where("customerid=$u")->find();
			if($r){
				$res[$k]["adv"] = $r["consultantname"];
			}else{
				$res[$k]["adv"] = "无";
			}
		}
	//	var_dump($res);die;
		$this->assign("res",$res);
		$this->assign("name",$bname);
		$this->assign("page",$page->show("Admin",$con));
		$this->display();
	}
	//注册失败
	public function zfail(){
		$bname = trim(I("bname"));
		
		$where =" 1 ";
		if($bname!=''){
				$where.=" and z.markname like '%$bname%'";  
				$con = "&bname=$bname";
		}
		$count = M("mark z")
			->join(" join ".C("DB_PREFIX")."zcorder_copy_copy s on z.id=s.markid")
			->where("$where and z.markstate=2")
			->count();
		$page = $this->page($count,10);

		$res = M("mark z")
			->join(" join ".C("DB_PREFIX")."zcorder_copy_copy s on z.id=s.markid")
			->where("$where and z.markstate=2")
			->limit("$page->firstRow,$page->listRows")
			->order("z.id desc")
			->field("z.id,z.markcode_key,z.markname,z.uniontypecode,z.markimage,z.marklogo,z.customerid,s.quer_no,s.state")
			->select();
		foreach($res as $k=>$v){
			$u = $v["customerid"];
			$r = M("adviser")->where("customerid=$u")->find();
			if($r){
				$res[$k]["adv"] = $r["consultantname"];
			}else{
				$res[$k]["adv"] = "无";
			}
		}
	//	var_dump($res);die;
		$this->assign("res",$res);
		$this->assign("name",$bname);
		$this->assign("page",$page->show("Admin",$con));
		$this->display();
	}
	//已失效
	public function zwu(){
		$bname = trim(I("bname"));
		
        $where = " 1 and z.xiangmu like '%已无效%'";
		if($bname!=''){
            $where.=" and z.markname like '%$bname%'";  
			$con = "&bname=$bname";
        }
		$count = M("mark z")
				->join(" join ".C("DB_PREFIX")."zcorder_copy_copy s on z.id=s.markid")
				->where("$where")->count();
		$page = $this->page($count,10);

		$res = M("mark z")
			->join(" join ".C("DB_PREFIX")."zcorder_copy_copy s on z.id=s.markid")
			->where("$where")
			->limit("$page->firstRow,$page->listRows")
			->order("z.id desc")
			->field("z.id,z.markcode_key,z.markname,z.uniontypecode,z.markimage,z.marklogo,z.customerid,s.quer_no,s.state")
			->select();
		foreach($res as $k=>$v){
			$u = $v["customerid"];
			$r = M("adviser")->where("customerid=$u")->find();
			if($r){
				$res[$k]["adv"] = $r["consultantname"];
			}else{
				$res[$k]["adv"] = "无";
			}
		}
	//	var_dump($res);die;
		$this->assign("res",$res);
		$this->assign("name",$bname);
		$this->assign("page",$page->show("Admin",$con));
		$this->display();
	}
	//详情
	public function detail(){
		$id = I("id");
	//	$r = M("mark")->where("id=$id")->find();

		$r = M("mark z")
			->join(" join ".C("DB_PREFIX")."zcorder_copy_copy s on z.id=s.markid")
			->where("z.id=$id")
			->field("z.entnameaddress,z.entname,z.appdate,z.markcode_key,z.uniontypecode,z.typedetaildes,z.checkdate,z.regdate,z.begindate,z.enddate,z.id,z.markcode_key,z.markname,z.uniontypecode,z.markimage,z.marklogo,z.customerid,s.quer_no,s.state")
			->find();


		$uid = $r["customerid"];
	//	$name = $r["entname"];
	//	$ad = M("enterprise")->where("entname='$name'")->find();
		$i = M("user")->where("id=$uid")->find();
		if($i["adviser"]==1){
			$g = M("adviser")->where("customerid=$uid")->find();
			$this->assign("g",$g);
		}
	//	$this->assign("ad",$ad);
		$this->assign("r",$r);
		$this->assign("i",$i);
		$this->display();
	}
}