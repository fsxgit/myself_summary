<?php
namespace Admin\Controller;
use Common\Controller\AdminbaseController;
class MarknameController extends AdminbaseController{
	//行业分类
	public function industry_sort_lst(){
		$count = M("industry")->count();
		$page = $this->page($count,10);

		$res = M("industry")
			->limit("$page->firstRow,$page->listRows")
			->order("id asc")
			->select();
		foreach($res as $k=>$v){
			$t = $v["querytype"];
			if($t){
				$r = M("nice_first")->where("id in($t)")->select();

				foreach($r as $kk=>$vv){
					$res[$k]["cname"][] = $vv["code"].$vv["name"];
				}
			}
		}
	//	var_dump($res);die;
		$this->assign("res",$res);
		$this->assign("page",$page->show());
		$this->display();
	}
	//添加行业分类
	public function add_lst(){
		$res = M("nice_first")->where("pid=0")->select();
		foreach($res as $k=>$v){
			$r = M("nice_first")->where("pid=".$v["code"])->select();
			$res[$k]["second"] = $r;
			foreach($res[$k]["second"] as $kk=>$vv){
				$rq = M("nice_first")->where("pid=".$vv["code"])->select();
				$res[$k]["second"][$kk]["third"] = $rq;
			}
		}
   
		$this->assign("res",$res);
		$this->display();
	}
        public function nice_add(){
       //     var_dump($_POST);

            $data["industry_name"] = I("cate");
            $data["sort"] = I("sort");
            $data["pid"] = 0;
            $id = M("industry")->add($data);
            
            $names = I("names");
            $go = I("go");
            
            foreach($names as $k=>$v){
                $da["industry_name"] = $v;
                $da["pid"] = $id;
                $da["querytype"] = $go[$k];
                
                M("industry")->add($da);
            }
            $this->success("添加成功",U("Markname/industry_sort_lst"));
        }
	//获取数据
	public function getdata(){
		$id = I("id");
		$r = M("nice_first")->where("id=$id")->find();
		$res["id"] = $r["id"];
		$res["code"] = $r["code"];
		$res["name"] = $r["name"];
		echo json_encode($res);
	}
	
	//删除
	public function del_act(){
		$id = I("id");
		$reg=M("industry")->where("id=".$id)->delete();
		if($reg){
			$this->success("删除成功",U('markname/industry_sort_lst'));
		}else{
			$this->error("删除失败");
		}
	}
	//修改
	public function upd_act(){
		if(IS_POST){
		/*	var_dump($_POST);die;
			$id = I("id");

			$info['class_num'] = I("num");
			$info['class_name'] = I("name");
			$info["class_desc"] = I("area");

			$reg=M("nice_first")->where("id=".$id)->save($info);
		
			$this->success("更新成功",U('markname/industry_sort_lst'));*/
		}else{
			$id=$_GET["id"];
			$res=M("industry")->where("id=".$id)->find();
			$this->assign("res",$res);
			if($res["pid"]==0){
				//一级分类
				$this->display();
			}else{
				$re=M("industry")->where("id=".$res["pid"])->find();
				$this->assign("re",$re);
				$this->display("second");
			}
		}
	}
        //详情
        public function detail(){
            $id = I("id");
            $res=M("industry")->where("id=".$id)->find();
      //      var_dump($res);
            if($res["pid"]==0){
                $r = M("industry")->where("pid=".$res["id"])->select();//二级分类
            }else{
                $r = M("industry")->where("pid=".$res["id"])->select();//二级分类
                $d = $res["querytype"];
                 
                $rs = M("nice_first")->where("id in($d)")->select();
           //    echo M("nice_first")->getlastsql();
            }
            $this->assign("r",$r);
            $this->assign("rs",$rs);
            $this->assign("res",$res);
            
            $this->display();
        }
}