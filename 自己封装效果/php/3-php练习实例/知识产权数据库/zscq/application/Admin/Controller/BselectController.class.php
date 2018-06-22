<?php
namespace Admin\Controller;
use Common\Controller\AdminbaseController;
class BselectController extends AdminbaseController{
	//待查询
	public function waiting(){
		$mobile = trim(I("mobile"));
		$time11 = I("time1");
		$time22 = I("time2");
		$source = I("source");
                $where =" 1 ";
		if($mobile!=''){
                $where.=" and customermobile like '%$mobile%'";  
			$con = "&mobile=$mobile";
                 }
                 /*
                 if($source!=''){
			$where.=" and source={$source}";
			$con .= "&source=$source";
		}*/
                if($time11!='' && $time22!=''){
                    if($time11 == $time22){
                        $where.=" and FROM_UNIXTIME(addtime,'%Y-%m-%d')='$time11'";
			$con .= "&time1=$time1&time2=$time2";
                    }else{
                      $where.=" and FROM_UNIXTIME(addtime,'%Y-%m-%d')>='$time11' and FROM_UNIXTIME(addtime,'%Y-%m-%d')<='$time22'";
                        $con .= "&time1=$time1&time2=$time2";  
                    }
		}else{
			if($time11!=''){
				$where.=" and FROM_UNIXTIME(addtime,'%Y-%m-%d')='$time11'";
				$con .= "&time1=$time1";
			}
			if($time22!=''){
				$where.=" and FROM_UNIXTIME(addtime,'%Y-%m-%d')='$time22'";
				$con .= "&time2=$time2";
			}
		}

		$count = M("inquire")->where("$where and state=0")->count();
	//	echo M("inquire")->getlastsql();
		$page = $this->page($count,10);

		$res = M("inquire")->where("$where and state=0")
			->limit("$page->firstRow,$page->listRows")
			->order("queryid desc")
			->select();
	//	var_dump($res);die;
		$this->assign("res",$res);
		$this->assign("name",$bname);
		$this->assign("time1",$time11);
		$this->assign("time2",$time22);
		$this->assign("mobile",$mobile);
		$this->assign("page",$page->show());
		$this->display();
	}
	//已查询
	public function already(){
		$mobile = trim(I("mobile"));
		$time11 = I("time1");
		$time22 = I("time2");

		$source = I("source");
        $where =" 1 ";
		if($mobile!=''){
                        $where.=" and customermobile like '%$mobile%'";  
			$con = "&mobile=$mobile";
                }
                /*
                if($source!=''){
			$where.=" and source={$source}";
			$con .= "&source=$source";
		}*/
                if($time11!='' && $time22!=''){
                    if($time11 == $time22){
                        $where.=" and FROM_UNIXTIME(addtime,'%Y-%m-%d')='$time11'";
			$con .= "&time1=$time1&time2=$time2";
                    }else{
			$where.=" and FROM_UNIXTIME(addtime,'%Y-%m-%d')>='$time11' and FROM_UNIXTIME(addtime,'%Y-%m-%d')<='$time22'";
			$con .= "&time1=$time1&time2=$time2";
                    }
		}else{
			if($time11!=''){
				$where.=" and FROM_UNIXTIME(addtime,'%Y-%m-%d')='$time11'";
				$con .= "&time1=$time1";
			}
			if($time22!=''){
				$where.=" and FROM_UNIXTIME(addtime,'%Y-%m-%d')='$time22'";
				$con .= "&time2=$time2";
			}
		}		
		$count = M("inquire")->where("$where and state!=0")->count();
	//	echo M("inquire")->getlastsql();
		$page = $this->page($count,10);

		$res = M("inquire")->where("$where and state!=0")
			->limit("$page->firstRow,$page->listRows")
			->order("queryid desc")
			->select();
		
	//	var_dump($res);die;
		$this->assign("res",$res);
		$this->assign("name",$bname);
		$this->assign("time1",$time11);
		$this->assign("time2",$time22);
		$this->assign("mobile",$mobile);
		$this->assign("page",$page->show());
		$this->display();
	}
	//待查询 详情
	public function waiting_detail(){
		$id = I("id");
		$r = M("inquire")->where("queryid=$id")->find();
		
		$s = M("user")->where("id=".$r["customerid"])->find();
		$d = M("enterprise")->where("user_id=".$r["customerid"])->find();
		$g = M("adviser")->where("customerid=".$r["customerid"])->find();
	//	var_dump($g);
		$this->assign("r",$r);
		$this->assign("s",$s);
		$this->assign("d",$d);
		$this->assign("g",$g);
		if($r["type"]==1 || $r["type"]==2){
			$this->display("zhi_detail");
		}else{
			$c = $r['querytype'];
			if($c){
				$nice = M("nice_first")->where("id in($c)")->field("describe,level",true)->select();
				$two = array();
				foreach($nice as $k=>$v){
					if(!in_array($v['pid'], $two)){
						$two[] = $v['pid'];
					}
				}
				$two = implode(',',$two); 
				$nicef = M("nice_first")->where("code in($two)")->field("describe,level",true)->select();
				$one = array();
				foreach($nicef as $k=>$v){
					if(!in_array($v['pid'], $one)){
						$one[] = $v['pid'];
					}
					foreach($nice as $ks=>$vs){
						if($v['code']==$vs['pid']){
							$nicef[$k]['items'][] = $vs;
						}
					}
				}
				$one = implode(',',$one);
				$nicecalss = M("nice_first")->where("code in($one)")->field("describe,level",true)->select();
				foreach($nicecalss as $k=>$v){
					foreach($nicef as $ks=>$vs){
						if($v['code']==$vs['pid']){
							$nicecalss[$k]['items'][] = $vs;
						}
					}
				}
			}
		//	print_r($nicecalss);
			$this->assign("nicecalss",$nicecalss);
			$this->display("zi_detail");
		}
	}
	//已查询 详情
	public function already_detail(){
		$id = I("id");
		$r = M("inquire")->where("queryid=$id")->find();
		
		$s = M("user")->where("id=".$r["customerid"])->find();
		$d = M("enterprise")->where("user_id=".$r["customerid"])->find();
		$g = M("adviser")->where("customerid=".$r["customerid"])->find();
		$time = $r["endtime"]-$r["addtime"];
		  //计算小时数
		  $remain = $time%86400;
		  $hours = intval($remain/3600);
		  //计算分钟数
		  $remain = $remain%3600;
		  $mins = intval($remain/60);
		  //计算秒数
		  $secs = $remain%60;
		$r["addtime"] = date("Y.m.d",$r["addtime"]);
		$r["endtime"] = date("Y.m.d",$r["endtime"]);

			$c1 = $r['okquerytype'];
			if($c1){
				$nice1 = M("nice_first")->where("id in($c1)")->field("describe,level",true)->select();
				$two1 = array();
				foreach($nice1 as $k=>$v){
					if(!in_array($v['pid'], $two1)){
						$two1[] = $v['pid'];
					}
				}
				$two1 = implode(',',$two1); 
				$nicef1 = M("nice_first")->where("code in($two1)")->field("describe,level",true)->select();

				$one1 = array();
				foreach($nicef1 as $k=>$v){
					if(!in_array($v['pid'], $one1)){
						$one1[] = $v['pid'];
					}
					foreach($nice1 as $ks=>$vs){
						if($v['code']==$vs['pid']){
							$nicef1[$k]['items1'][] = $vs;
						}
					}
				}
				$one1 = implode(',',$one1);
				$nicecalss1 = M("nice_first")->where("code in($one1)")->field("describe,level",true)->select();

				foreach($nicecalss1 as $k=>$v){
					foreach($nicef1 as $ks=>$vs){
						if($v['code']==$vs['pid']){
							$nicecalss1[$k]['items1'][] = $vs;
						}
					}
				}
			}
			$c2 = $r['suggestedtype'];
			if($c2){
				$nice2 = M("nice_first")->where("id in($c2)")->field("describe,level",true)->select();
				$two2 = array();
				foreach($nice2 as $k=>$v){
					if(!in_array($v['pid'], $two2)){
						$two2[] = $v['pid'];
					}
				}
				$two2 = implode(',',$two2); 
				$nicef2 = M("nice_first")->where("code in($two2)")->field("describe,level",true)->select();
				$one2 = array();
				foreach($nicef2 as $k=>$v){
					if(!in_array($v['pid'], $one2)){
						$one2[] = $v['pid'];
					}
					foreach($nice2 as $ks=>$vs){
						if($v['code']==$vs['pid']){
							$nicef2[$k]['items2'][] = $vs;
						}
					}
				}
				$one2 = implode(',',$one2);
				$nicecalss2 = M("nice_first")->where("code in($one2)")->field("describe,level",true)->select();
				foreach($nicecalss2 as $k=>$v){
					foreach($nicef2 as $ks=>$vs){
						if($v['code']==$vs['pid']){
							$nicecalss2[$k]['items2'][] = $vs;
						}
					}
				}
				$this->assign("nicecalss2",$nicecalss2);
			}

		$this->assign("nicecalss1",$nicecalss1);
		
		$this->assign("mins",$mins);
		$this->assign("secs",$secs);
		$this->assign("r",$r);
		$this->assign("s",$s);
		$this->assign("d",$d);
		$this->assign("g",$g);
		if($r["type"]==1 || $r["type"]==2){
			$this->display("zhi_already_detail");
		}else{
			$c = $r['querytype'];
			if($c){
				$nice = M("nice_first")->where("id in($c)")->field("describe,level",true)->select();
				$two = array();
				foreach($nice as $k=>$v){
					if(!in_array($v['pid'], $two)){
						$two[] = $v['pid'];
					}
				}
				$two = implode(',',$two); 
				$nicef = M("nice_first")->where("code in($two)")->field("describe,level",true)->select();
				$one = array();
				foreach($nicef as $k=>$v){
					if(!in_array($v['pid'], $one)){
						$one[] = $v['pid'];
					}
					foreach($nice as $ks=>$vs){
						if($v['code']==$vs['pid']){
							$nicef[$k]['items'][] = $vs;
						}
					}
				}
				$one = implode(',',$one);
				$nicecalss = M("nice_first")->where("code in($one)")->field("describe,level",true)->select();
				foreach($nicecalss as $k=>$v){
					foreach($nicef as $ks=>$vs){
						if($v['code']==$vs['pid']){
							$nicecalss[$k]['items'][] = $vs;
						}
					}
				}
			}
			$this->assign("nicecalss",$nicecalss);
			$this->display("zi_already_detail");
		}
	}
        //已失效
	public function no(){
		$mobile = trim(I("mobile"));
		$time11 = I("time1");
		$time22 = I("time2");

		$source = I("source");
        $where =" 1 ";
		if($mobile!=''){
			$where.=" and customermobile like '%$mobile%'";  
			$con = "&mobile=$mobile";
		}
        /*
        if($source!=''){
			$where.=" and source={$source}";
			$con .= "&source=$source";
		}*/
                if($time11!='' && $time22!=''){
                    if($time11 == $time22){
                        $where.=" and FROM_UNIXTIME(addtime,'%Y-%m-%d')='$time11'";
			$con .= "&time1=$time1&time2=$time2";
                    }else{
			$where.=" and FROM_UNIXTIME(addtime,'%Y-%m-%d')>='$time11' and FROM_UNIXTIME(addtime,'%Y-%m-%d')<='$time22'";
			$con .= "&time1=$time1&time2=$time2";
                    }
		}else{
			if($time11!=''){
				$where.=" and FROM_UNIXTIME(addtime,'%Y-%m-%d')='$time11'";
				$con .= "&time1=$time1";
			}
			if($time22!=''){
				$where.=" and FROM_UNIXTIME(addtime,'%Y-%m-%d')='$time22'";
				$con .= "&time2=$time2";
			}
		}		

		$count = M("inquire")->where("$where and state!=0 and endtime is not null and zhuce=0 and datediff(now(),FROM_UNIXTIME(endtime,'%y-%m-%d'))>3")->count();
	//	echo M("inquire")->getlastsql();
		$page = $this->page($count,10);

		$res = M("inquire")
			->where("$where and state!=0 and endtime is not null and zhuce=0 and datediff(now(),FROM_UNIXTIME(endtime,'%y-%m-%d'))>3")
			->limit("$page->firstRow,$page->listRows")
			->order("queryid desc")
			->select();
		$this->assign("res",$res);
		$this->assign("name",$bname);
		$this->assign("time1",$time11);
		$this->assign("time2",$time22);
		$this->assign("mobile",$mobile);
		$this->assign("page",$page->show());
        $this->display();
	}
	//已失效 详情
	public function no_detail(){
		$id = I("id");
		$r = M("inquire")->where("queryid=$id")->find();
		
		$s = M("user")->where("id=".$r["customerid"])->find();
		$d = M("enterprise")->where("user_id=".$r["customerid"])->find();
		$g = M("adviser")->where("customerid=".$r["customerid"])->find();
		$time = $r["endtime"]-$r["addtime"];
		  //计算小时数
		  $remain = $time%86400;
		  $hours = intval($remain/3600);
		  //计算分钟数
		  $remain = $remain%3600;
		  $mins = intval($remain/60);
		  //计算秒数
		  $secs = $remain%60;
		$r["addtime"] = date("Y.m.d",$r["addtime"]);
		$r["endtime"] = date("Y.m.d",$r["endtime"]);

			$c1 = $r['okquerytype'];
			if($c1){
				$nice1 = M("nice_first")->where("id in($c1)")->field("describe,level",true)->select();
				$two1 = array();
				foreach($nice1 as $k=>$v){
					if(!in_array($v['pid'], $two1)){
						$two1[] = $v['pid'];
					}
				}
				$two1 = implode(',',$two1); 
				$nicef1 = M("nice_first")->where("code in($two1)")->field("describe,level",true)->select();

				$one1 = array();
				foreach($nicef1 as $k=>$v){
					if(!in_array($v['pid'], $one1)){
						$one1[] = $v['pid'];
					}
					foreach($nice1 as $ks=>$vs){
						if($v['code']==$vs['pid']){
							$nicef1[$k]['items1'][] = $vs;
						}
					}
				}
				$one1 = implode(',',$one1);
				$nicecalss1 = M("nice_first")->where("code in($one1)")->field("describe,level",true)->select();

				foreach($nicecalss1 as $k=>$v){
					foreach($nicef1 as $ks=>$vs){
						if($v['code']==$vs['pid']){
							$nicecalss1[$k]['items1'][] = $vs;
						}
					}
				}
			}
			$c2 = $r['suggestedtype'];
			if($c2){
				$nice2 = M("nice_first")->where("id in($c2)")->field("describe,level",true)->select();
				$two2 = array();
				foreach($nice2 as $k=>$v){
					if(!in_array($v['pid'], $two2)){
						$two2[] = $v['pid'];
					}
				}
				$two2 = implode(',',$two2); 
				$nicef2 = M("nice_first")->where("code in($two2)")->field("describe,level",true)->select();
				$one2 = array();
				foreach($nicef2 as $k=>$v){
					if(!in_array($v['pid'], $one2)){
						$one2[] = $v['pid'];
					}
					foreach($nice2 as $ks=>$vs){
						if($v['code']==$vs['pid']){
							$nicef2[$k]['items2'][] = $vs;
						}
					}
				}
				$one2 = implode(',',$one2);
				$nicecalss2 = M("nice_first")->where("code in($one2)")->field("describe,level",true)->select();
				foreach($nicecalss2 as $k=>$v){
					foreach($nicef2 as $ks=>$vs){
						if($v['code']==$vs['pid']){
							$nicecalss2[$k]['items2'][] = $vs;
						}
					}
				}
				$this->assign("nicecalss2",$nicecalss2);
			}

		$this->assign("nicecalss1",$nicecalss1);
		
		$this->assign("mins",$mins);
		$this->assign("secs",$secs);
		$this->assign("r",$r);
		$this->assign("s",$s);
		$this->assign("d",$d);
		$this->assign("g",$g);
		if($r["type"]==1 || $r["type"]==2){
			$this->display("zhi_no_detail");
		}else{
			$c = $r['querytype'];
			if($c){
		
				$nice = M("nice_first")->where("id in($c)")->field("describe,level",true)->select();
				$two = array();
				foreach($nice as $k=>$v){
					if(!in_array($v['pid'], $two)){
						$two[] = $v['pid'];
					}
				}
				$two = implode(',',$two); 
				$nicef = M("nice_first")->where("code in($two)")->field("describe,level",true)->select();
				$one = array();
				foreach($nicef as $k=>$v){
					if(!in_array($v['pid'], $one)){
						$one[] = $v['pid'];
					}
					foreach($nice as $ks=>$vs){
						if($v['code']==$vs['pid']){
							$nicef[$k]['items'][] = $vs;
						}
					}
				}
				$one = implode(',',$one);
				$nicecalss = M("nice_first")->where("code in($one)")->field("describe,level",true)->select();
				foreach($nicecalss as $k=>$v){
					foreach($nicef as $ks=>$vs){
						if($v['code']==$vs['pid']){
							$nicecalss[$k]['items'][] = $vs;
						}
					}
				}
			}
			$this->assign("nicecalss",$nicecalss);
			$this->display("zi_no_detail");
		}
	}
}