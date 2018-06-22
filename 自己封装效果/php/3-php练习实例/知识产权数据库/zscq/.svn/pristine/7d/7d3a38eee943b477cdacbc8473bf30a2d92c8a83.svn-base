<?php
namespace Admin\Controller;
use Common\Controller\AdminbaseController;
class GunwenController extends AdminbaseController{
	//顾问
	public function lst(){
                $where = " 1 ";
                $uname = trim(I("uname"));
                $mobile = trim(I("mobile"));
                if($uname!=''){
                    $where .=" and consultantname like '%$uname%'";
                    $con = "&uname=$uname";
                 }if($mobile!=''){
                    $where.=" and consultantmobile like '%$mobile%'";
                    $con .= "&mobile=$mobile";
		}
                
		$c = M("adviser")->where($where)
                         ->group("consultantid")
                        ->select();
               $count = count($c);
            //   echo $count;
		$page = $this->page($count,10);

		$res = M("adviser")
                        ->where($where)
			->limit("$page->firstRow,$page->listRows")
			->order("id asc")
                       ->group("consultantid")
			->select();
               
                $this->assign("uname",$uname);
                $this->assign("mobile",$mobile);
		$this->assign("res",$res);
		$this->assign("page",$page->show());
		$this->display();
	}
	//详情
	public function detail(){
            $id = I("id");
            $uname = I("uname");
            $bname = I("bname");
            $where =" 1 ";
            if($uname!=''){
                $where.=" and u.loginname like '%$uname%'";    
		$con = "&uname=$uname";
            }if($bname!=''){
                $where.=" and u.companyname like '%$bname%'";    
		$con = "&bname=$bname";
            }
            $r = M("adviser")->where("id=$id")->find();
            $gid = $r["consultantid"];//顾问id
            
            $count = M("adviser a")
                    ->join(" join ".C("DB_PREFIX")."user u on a.customerid=u.id")
                    ->where("$where and a.consultantid=".$gid)
                    ->count();
            $page = $this->page($count,10);
            
            $user = M("adviser a")
                    ->join(" join ".C("DB_PREFIX")."user u on a.customerid=u.id")
                    ->where("$where and a.consultantid=".$gid)
                    ->limit("$page->firstRow,$page->listRows")
                    ->field("a.consultantname,a.consultantmobile,u.*")
                    ->select();
        //    var_dump($user);
            $this->assign("r",$r);
            $this->assign("user",$user);
            $this->assign("uname",$uname);
            $this->assign("bname",$bname);
            $this->assign("page",$page->show("Admin",$con));
            $this->display();
	}
        //用户详情
        public function user(){
		$id = I("id");
		$userinfo = M("user")
			->where("id = $id")
			->find();
		$infolist = M('enterprise')
			->where("user_id = $id")
			->find();
		
		$markcount = M('mark')
			->where("customerid = $id")
			->count();
		$page = $this->page($markcount,5);

		$marklist = M('mark')
			->where("customerid = $id")
			->limit("$page->firstRow,$page->listRows")
			->order("id asc")
			->select();
		$this->assign("page",$page->show());
		//用户信息表
		$this->assign("userinfo",$userinfo);
		//企业信息表
		$this->assign("infolist",$infolist);
		//商标表的每一个企业的商标总数
		$this->assign("markcount",$markcount);
		//商标信息表
		$this->assign("marklist",$marklist);
		if($userinfo["isclaimed"]==1){
			$this->display("userinfo_content");
		}else{
		   $this->display("userinfo_content2");
		}
		
	}
	//解绑
	public function jie(){
		$id = I("id");

		$data["companyName"] = "";
		$data["isClaimed"] = 0;

		M("user")->where("id=$id")->save($data);

		M("enterprise")->where("user_id=$id")->delete();

		M("mark")->where("customerid=$id")->delete();

		M("adviser")->where("customerid=$id")->delete();

		$this->success("解绑成功",U('Gunwen/lst'));
	}
}