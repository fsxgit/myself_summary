<?php
namespace Portal\Controller;
use Common\Controller\CommonController;
header("content-type:text/html;charset=utf-8");
class CostController extends CommonController {
	/*
	*  我的订单列表
	*/
	function orderlst(){
		$user_id = $_COOKIE['zsid'];
		$date['markname'] = I('post.markname');
		$date['type'] = I('post.type');
		$date['state'] = I('state');
		$where = "customerid = {$user_id}";
		if($date['state']!=''){
			$where .=" and state={$date['state']}";
		}
		if($date['type']!=''){
			$where .=" and type={$date['type']}";
		}
		$count = M("zcorder_copy")->where($where)->count();
		$page = $this->page($count,10);
		$zcorder = M("zcorder_copy")->where($where)->limit("$page->firstRow,$page->listRows")->order("orderid desc")->select();
		if(!empty($zcorder)){
            foreach($zcorder as $k=>$v){
                if($v['orderid']!=''){
                    $orderid[] = $v['orderid'];
                }

            }
            $orderid = implode(',',$orderid);
            $mark = M("zcorder_copy_copy")->where("orderid in($orderid)")->select();
            foreach($zcorder as $k=>$v){
                foreach($mark as $ki=>$vi){
                    if($v['orderid']==$vi['orderid']){
                         $zcorder[$k]['mark'][] = $vi;
                     }
                }
                $zcorder[$k]['num'] = count($zcorder[$k]['mark']);
            }
		}
		$this->assign("zcorder",$zcorder);
		$this->assign("count",$count);
		$this->assign("page",$page->show("admin",array('state'=>$state,$date)));
		$this->assign("num",ceil($count/10));
		$this->display("my-dingdan");
	}
	/**
	*   查看订单详情
	*/
	function orderpay_details(){
		$orderid = I('get.orderid');
		$zcorder = M("zcorder_copy")->where("orderid={$orderid}")->find();
	    $mark = M("zcorder_copy_copy")->where("orderid ={$orderid}")->select();
		foreach($mark as $k=>$v){
            $mark[$k]['three_code'] = explode(',',$v['three_code']);
		}
		$this->assign("zcorder",$zcorder);
		$this->assign("nice",$mark);
		$this->display("xq-order");
	}
    /**
     *   查看订单详情
     */
    function orderpay_details_zhifu(){
        $orderid = I('get.orderid');
        $this->assign("orderid",$orderid);
        $this->display("index");
    }
}