<?php
namespace Admin\Controller;
use Common\Controller\AdminbaseController;
class GoodsController extends AdminbaseController{
	public function goods_lst(){
		$count = M("service")->count();
		$page = $this->page($count,10);

		$res = M("service")
			->limit("$page->firstRow,$page->listRows")
			->order("id desc")
			->select();
	//	var_dump($res);die;
		$this->assign("res",$res);
		$this->assign("page",$page->show());
		$this->display();
	}
	public function goods_add(){
		if(IS_POST){
			$data["service_name"] = I("goods_name");
			$data["price_large"] = I("large");
			$data["price_small"] = I("small");
			$data["price_service"] = I("service");
			$data["price_market"] = I("market");
			$data["describe"] = I("area");
                        $data["type"] = I("type");
			if(M("service")->add($data)){
				$this->success("添加成功",U("Goods/goods_lst"));
			}else{
				$this->error("请重新添加");
			}
		}else{
			$this->display();
		}
		
	}
	//删除
	public function del(){
		$id = I("id");
		$reg=M("service")->where("id=".$id)->delete();
		if($reg){
			$this->success("删除成功",U('goods/goods_lst'));
		}else{
			$this->error("删除失败");
		}
	}
	//修改
	public function upd_act(){
		if(IS_POST){
		//	var_dump($_POST);die;
			$id = I("id");
			$data["service_name"] = I("goods_name");
			$data["price_large"] = I("large");
			$data["price_small"] = I("small");
			$data["price_service"] = I("service");
			$data["price_market"] = I("market");
			$data["describe"] = I("area");
			$reg=M("service")->where("id=".$id)->save($data);
			$this->success("更新成功",U('goods/goods_lst'));
		}else{
			$id=$_GET["id"];
			$res=M("service")->where("id=".$id)->find();
			$this->assign("res",$res);
			$this->display();
		}
	}
	//检测
	public function check(){
		$type = I("type");
		$r = M("service")->where("type=$type")->select();
		if($r){
			echo 1;
		}else{
			echo 0;
		}
	}
	//状态
	public function change_state(){
		$id = I("id");
		$state = I("state");
		$data["state"] = I("state");
		$arr = M("service")->where("id=".$id)->save($data);
		if($arr){
			$this->success("更改状态成功",U('Goods/goods_lst'));
        }else{
            $this->error("更改状态失败");
        }
	}
}