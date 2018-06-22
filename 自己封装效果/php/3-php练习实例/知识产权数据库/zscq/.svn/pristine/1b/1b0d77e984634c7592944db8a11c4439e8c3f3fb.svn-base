<?php
namespace Admin\Controller;
use Common\Controller\AdminbaseController;
header("Content-type: text/html; charset=utf-8"); 
class UserinfoController extends AdminbaseController{
	public function index(){
		$count = M("user")->count();
		$page = $this->page($count,10);

		$res = M("user")
			->limit("$page->firstRow,$page->listRows")
			->order("id asc")
			->select();
		$this->assign("res",$res);
		$this->assign("page",$page->show());
		$this->display();
	}

	public function userinfo_list(){
		$where = I("where");
		if($where == 1){
			$isClaimed = 1;
		}else if($where == 2){
			$isClaimed = 0;
		}
		$count = M("user")
			->where("isClaimed = $isClaimed")
			->count();
		$page = $this->page($count,10);
		$res = M("user")
			->where("isClaimed = $isClaimed")
			->limit("$page->firstRow,$page->listRows")
			->order("id asc")
			->select();
		//echo "<pre>";print_r($res);
		$this->assign("res",$res);
		$this->assign("page",$page->show());
		$this->display("index");
	}

	public function user_info(){
		$username = trim(I("username"));
		$company = trim(I("company"));
		$where = "1";
		if($username!=""){
			$where.=" and loginname like '%$username%'";
			$con="&username=".$username;
		}
		if($company!=""){
			$where .=" and companyName like '%$company%'";  
			$con.="&companyName=".$company;
		}
		$count = M("user")
			->where($where)
			->count();
		$page = $this->page($count,10);
		$res = M("user")
			->where($where)
			->limit("$page->firstRow,$page->listRows")
			->order("id asc")
			->select();
		//echo "<pre>";print_r($res);
		$this->assign("page",$page->show("admin",$con));
		$this->assign("res",$res);
		$this->assign("name",$username);
		$this->assign("company",$company);
		$this->display("index");
	}

	//����ҳ
	public function userinfo_content(){
		$id = I("id");
		$userinfo = M("user")
			->where("id = $id")
			->find();
		$infolist = M('enterprise')
			->where("user_id = $id")
			->find();
		
		$markcount = M('mark z')
			->join(" left join ".C("DB_PREFIX")."zcorder_copy_copy s on z.id=s.markid")
			->where("z.customerid = $id")
			->count();
		$page = $this->page($markcount,10);

		$marklist = M('mark z')
			->join(" left join ".C("DB_PREFIX")."zcorder_copy_copy s on z.id=s.markid")
			->where("z.customerid = $id")
			->limit("$page->firstRow,$page->listRows")
			->order("z.id asc")
			->field("z.id,z.markname,z.uniontypecode,z.markimage,z.marklogo,z.customerid,s.quer_no,s.state")
			->select();
	//	var_dump($marklist);
		foreach($marklist as $k=>$v){
			$u = $v["customerid"];
			$r = M("adviser")->where("customerid=$u")->find();
			if($r){
				$marklist[$k]["adv"] = $r["consultantname"];
			}else{
				$marklist[$k]["adv"] = "无";
			}
		}
		$this->assign("page",$page->show());
		//�û���Ϣ��
		$this->assign("userinfo",$userinfo);
		//��ҵ��Ϣ��
		$this->assign("infolist",$infolist);
		//�̱���ÿһ����ҵ���̱�����
		$this->assign("markcount",$markcount);
		//�̱���Ϣ��
		$this->assign("marklist",$marklist);
		$this->display();
	}
	//δ����
	public function userinfo_content2(){
		$id = I("id");
		$userinfo = M("user")
			->where("id = $id")
			->find();
		$infolist = M('enterprise')
			->where("user_id = $id")
			->find();
		
		$markcount = M('mark z')
			->join(" left join ".C("DB_PREFIX")."zcorder_copy_copy s on z.id=s.markid")
			->where("z.customerid = $id")
			->count();
		$page = $this->page($markcount,10);

		$marklist = M('mark z')
			->join(" left join ".C("DB_PREFIX")."zcorder_copy_copy s on z.id=s.markid")
			->where("z.customerid = $id")
			->limit("$page->firstRow,$page->listRows")
			->order("z.id asc")
			->field("z.id,z.markname,z.uniontypecode,z.markimage,z.marklogo,z.customerid,s.quer_no,s.state")
			->select();
		foreach($marklist as $k=>$v){
			$u = $v["customerid"];
			$r = M("adviser")->where("customerid=$u")->find();
			if($r){
				$marklist[$k]["adv"] = $r["consultantname"];
			}else{
				$marklist[$k]["adv"] = "无";
			}
		}
		$this->assign("page",$page->show());
		//�û���Ϣ��
		$this->assign("userinfo",$userinfo);
		//��ҵ��Ϣ��
		$this->assign("infolist",$infolist);
		//�̱���ÿһ����ҵ���̱�����
		$this->assign("markcount",$markcount);
		//�̱���Ϣ��
		$this->assign("marklist",$marklist);
		$this->display();
	}

	//���
	public function jie(){
		$id = I("id");

		$data["companyName"] = "";
		$data["isClaimed"] = 0;
		//$data["adviser"] = 0;

		M("user")->where("id=$id")->save($data);

		M("enterprise")->where("user_id=$id")->delete();

		M("mark")->where("customerid=$id")->delete();

		//M("adviser")->where("customerid=$id")->delete();

		$this->success("解绑成功",U('Userinfo/index'));
	}
}