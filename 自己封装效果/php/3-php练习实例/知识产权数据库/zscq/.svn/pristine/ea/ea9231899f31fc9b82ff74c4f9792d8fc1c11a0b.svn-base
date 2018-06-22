<?php
namespace Admin\Controller;
use Common\Controller\AdminbaseController;
class OrderController extends AdminbaseController{
	public function order_no(){
		//未支付 0未支付1已支付2取消',
                $where = " 1 ";
                $orderno = trim(I("orderno"));
                $markname = trim(I("markname"));
                $source = I("source");
                if($orderno!=''){
                    $where.=" and z.order_no='$orderno'";  
                    $con = "&orderno=$orderno";
                 }if($markname!=''){
                    $where.=" and s.markname like '%$markname%'";
                    $con .= "&markname=$markname";
		}
                /*
                if($source!=''){
                    $where.=" and source=$source";
                    $con .= "&source=$source";
		}
                */
		$count = M("zcorder_copy z")
				->join(" join ".C("DB_PREFIX")."zcorder_copy_copy s on z.orderid=s.orderid")
				->where("$where and z.state=0")
				->count();
	//	echo M()->getlastsql();
		$page = $this->page($count,10);

		$res = M("zcorder_copy z")
			->join(" join ".C("DB_PREFIX")."zcorder_copy_copy s on z.orderid=s.orderid")
			->where("$where and z.state=0")
			->limit("$page->firstRow,$page->listRows")
			->order("z.orderid desc")
			->field("z.*,s.one_code,s.three_code,s.markname,s.markimage")
			->select();
	//	var_dump($res);die;
		$this->assign("orderno",$orderno);
		$this->assign("markname",$markname);
	//	$this->assign("source",$source);
		$this->assign("res",$res);
		$this->assign("page",$page->show("Admin",$con));
		$this->display();
	}
	//已支付
	public function order_pay(){
                $where = " 1 ";
                $wh = " 1 ";
                $orderno = trim(I("orderno"));
                $markname = trim(I("markname"));
                $source = I("source");
                if($orderno!=''){
                    $where.=" and z.order_no='$orderno'";  
                    $con = "&orderno=$orderno";
                 }if($markname!=''){
                    $wh.=" and s.markname like '%$markname%'";
                    $con .= "&markname=$markname";
		}
                /*
                if($source!=''){
                    $where.=" and source=$source";
                    $con .= "&source=$source";
		}*/
        $count = M("zcorder_copy z")
				->join(" join ".C("DB_PREFIX")."zcorder_copy_copy s on z.orderid=s.orderid")
				->where("$where and z.state=1")
				->count();

		$page = $this->page($count,10);

		$res = M("zcorder_copy z")
			->join(" join ".C("DB_PREFIX")."zcorder_copy_copy s on z.orderid=s.orderid")
			->where("$where and z.state=1")
			->limit("$page->firstRow,$page->listRows")
			->order("z.orderid desc")
			->select();
    //  var_dump($res);
		$this->assign("orderno",$orderno);
		$this->assign("markname",$markname);
	//	$this->assign("source",$source);
		$this->assign("res",$res);
		$this->assign("page",$page->show("Admin",$con));
		$this->display();
	}
        //已取消
        public function cancel(){
                $where = " 1 ";
                $orderno = trim(I("orderno"));
                $markname = trim(I("markname"));
                $source = I("source");
                if($orderno!=''){
                    $where.=" and z.order_no='$orderno'";  
                    $con = "&orderno=$orderno";
                 }if($markname!=''){
                    $where.=" and s.markname like '%$markname%'";
                    $con .= "&markname=$markname";
		}
                /*
                if($source!=''){
                    $where.=" and source=$source";
                    $con .= "&source=$source";
		}*/

        $count = M("zcorder_copy z")
				->join(" join ".C("DB_PREFIX")."zcorder_copy_copy s on z.orderid=s.orderid")
				->where("$where and z.state=0")
				->count();
		$page = $this->page($count,10);

		$res = M("zcorder_copy z")
			->join(" join ".C("DB_PREFIX")."zcorder_copy_copy s on z.orderid=s.orderid")
			->where("$where and z.state=2")
			->limit("$page->firstRow,$page->listRows")
			->order("z.orderid desc")
			->field("z.*,s.one_code,s.three_code,s.markname,s.markimage")
			->select();

		$this->assign("orderno",$orderno);
		$this->assign("markname",$markname);
		$this->assign("source",$source);
		$this->assign("res",$res);
		$this->assign("page",$page->show("Admin",$con));
		$this->display();
        }
	//订单详情
	public function order_detail(){
            $id = I("id");
            $r = M("zcorder_copy z")
			->join(" join ".C("DB_PREFIX")."zcorder_copy_copy s on z.orderid=s.orderid")
			->where("z.orderid=$id")
				->field("z.*,s.one_code,s.three_code,s.markname,s.markimage")
			->find();
            $this->assign("r",$r);
            $this->display();
	}
}