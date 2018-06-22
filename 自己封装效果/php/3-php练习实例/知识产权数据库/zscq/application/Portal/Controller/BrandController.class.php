<?php
namespace Portal\Controller;
use Common\Controller\CommonController;
header("content-type:text/html;charset=utf-8");
class BrandController extends CommonController {

		/*
	*  商标预览图片
	*/
	function preview(){
		$str = I('post.markname');
        $sum = mb_strlen($str,"utf-8");
		/*$url = "public/shagnbiao_logo/".md5($str).createKey(time()).".jpg";
		$im = imagecreate(400,400);
		$white = imagecolorallocate($im,255,255,255);//图片大小和颜色
		imagecolortransparent($im,$white);
		$black = imagecolorallocate($im,0,0,0);
		imagettftext($im,50,0,100,150,$black,"C:\windows\Fonts\simhei.ttf",$str);
		header("Content-type:image/png");
		imagepng($im,$url);
		echo $url;die;*/
        header('Content-type: image/png');
        $im = imagecreatetruecolor(400, 400);
        $white = imagecolorallocate($im, 255, 255, 255);
        $black = imagecolorallocate($im, 0, 0, 0);
        imagefilledrectangle($im, 0, 0, 1200, 600, $white);
        $font = "C:\windows\Fonts\simhei.ttf";
        //////////
        if($sum<6){
            $size = '45';
            $gao = '220';
        }
        if($sum==1){
            $kuan = '170';
        }
        if($sum==2){
            $kuan = '140';
        }
        if($sum==3){
            $kuan = '110';
        }
        if($sum==4){
            $kuan = '80';
        }
        if($sum==5){
            $kuan = '50';
        }
        if(5<$sum && $sum<10){
            $size = '30';
            $gao = '220';
        }
        if($sum==6){
            $kuan = '75';
        }
        if($sum==7){
            $kuan = '45';
        }
        if($sum==8){
            $kuan = '45';
        }
        if($sum==9){
            $kuan = '25';
        }
        if(9<$sum && $sum<14){
            $size = '20';
            $gao = '220';
        }
        if($sum==10){
            $kuan = '75';
        }
        if($sum==11){
            $kuan = '45';
        }
        if($sum==12){
            $kuan = '45';
        }
        if($sum==13){
            $kuan = '25';
        }
        if(13<$sum && $sum<20){
            $size = '15';
            $gao = '220';
        }
        if($sum==14){
            $kuan = '55';
        }
        if($sum==15){
            $kuan = '45';
        }
        if($sum==16){
            $kuan = '35';
        }
        if($sum==17){
            $kuan = '25';
        }
        if($sum==18){
            $kuan = '25';
        }
        if($sum==19){
            $kuan = '25';
        }
        if($sum==20){
            $kuan = '10';
            $size = '14';
            $gao = '220';
        }
        /////////
        imagettftext($im,$size, 0, $kuan, $gao, $black, $font, $str);
        $url = "public/shagnbiao_logo/".md5($str).createKey(time()).".jpg";
        imagepng($im,$url);
        echo $url;die;
    }
	/**
	* 上传图片
	*/
	function sheng(){
		$img = I('post.img'); 
        $url = "public/shagnbiao_logo/".md5($img).createKey(time()).".jpg";
		if(preg_match('/^(data:\s*image\/(\w+);base64,)/', $img, $result)){
		$image_name = uniqid().'.jpg';
        $image_file = "./upload/test/{$image_name}";
        //服务器文件存储路径
        file_put_contents($url,base64_decode(str_replace($result[1],'',$img)));
         echo $url;die; 
	    }
	}
	/*
	*	 商标管理 注册中
	*/
	function brand_lst(){
		$name = I("name");
		$state = I("state");
		$uid = $_COOKIE["zsid"];
		$p = I("p");
		if($p==""){
			$p=0;
		}else{
			$p = $p-1;
		}
		$size = $p*10;
		$where = " 1 ";
		if($state!=""){
			$where.=" and state=".$state;
			$con.="&state=".$state;
		}if($type!=""){
			$where.=" and source=".$type;
			$con.="&source=".$type;
		}if($name!=""){
			$where.=" and markname like '%$name%'";
			$con.="&name=".$name;
		}
		$count = M("mark")->where("$where and begindate is null and enddate is null and customerid=$uid")->count();
		$totalpage = ceil($count/10);
		$page = $this->page($count,10);
		$res = M("mark")->where("$where and begindate is null and enddate is null and customerid=$uid")->limit("$page->firstRow,$page->listRows")->order("id desc")->select();
		foreach($res as $k=>$v){
			$arr = $v["uniontypecode"];

			$arr1 = preg_split("/([a-zA-Z0-9]+)/", $arr, 0, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE);  


			$res[$k]["uniontypecode"] = implode("-",$arr1);
		}
		$this->assign("size",$size);
		$this->assign("count",$count);
		$this->assign("totalpage",$totalpage);
		$this->assign("name",$name);
		$this->assign("state",$state);
		$this->assign('res',$res);
		$this->assign("page",$page->show("portal",$con));
		$this->display();
	}
	//已注册
	function brand_already_lst(){
		//var_dump($_POST);
		$name = I("name");
		$state = I("state");
		$uid = $_COOKIE["zsid"];
		$p = I("p");
		if($p==""){
			$p=0;
		}else{
			$p = $p-1;
		}
		$size = $p*10;
		$where = " 1 and xiangmu not like '%已无效%'";
		if($state!=""){
			$where.=" and state=".$state;
			$con.="&state=".$state;
		}if($type!=""){
			$where.=" and source=".$type;
			$con.="&source=".$type;
		}if($name!=""){
			$where.=" and markname like '%$name%'";
			$con.="&name=".$name;
		}
		$count = M("mark")->where("$where and UNIX_TIMESTAMP(begindate)< unix_timestamp(now()) and UNIX_TIMESTAMP(enddate)> unix_timestamp(now()) and customerid=$uid")->count();
	//	echo M("mark")->getlastsql();
		$totalpage = ceil($count/10);
		$page = $this->page($count,10);

		$res = M("mark")->where("$where and UNIX_TIMESTAMP(begindate)< unix_timestamp(now()) and UNIX_TIMESTAMP(enddate)> unix_timestamp(now()) and customerid=$uid")->limit("$page->firstRow,$page->listRows")->order("id desc")->select();
foreach($res as $k=>$v){
			$arr = $v["uniontypecode"];

			$arr1 = preg_split("/([a-zA-Z0-9]+)/", $arr, 0, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE);  


			$res[$k]["uniontypecode"] = implode("-",$arr1);
		}
		$this->assign("size",$size);
		$this->assign("count",$count);
		$this->assign("totalpage",$totalpage);
		$this->assign("name",$name);
		$this->assign("state",$state);
		$this->assign('res',$res);
		$this->assign("page",$page->show("portal",$con));
		$this->display();
	}
	//注册失败
	function brand_fail(){
		//var_dump($_POST);
		$name = I("name");
//		$type = I("type");
//		$state = I("state");
$uid = $_COOKIE["zsid"];
		$p = I("p");
		if($p==""){
			$p=0;
		}else{
			$p = $p-1;
		}
		$size = $p*10;
		$where = " 1 ";
		if($name!=""){
			$where.=" and markname like '%$name%'";
			$con.="&name=".$name;
		}
		$count = M("mark")->where("$where and markstate=2 and state=1 and customerid=$uid")->count();
		$totalpage = ceil($count/10);
		$page = $this->page($count,10);

		$res = M("mark")->where("$where and markstate=2 and state=1 and customerid=$uid")->limit("$page->firstRow,$page->listRows")->order("id desc")->select();
foreach($res as $k=>$v){
			$arr = $v["uniontypecode"];

			$arr1 = preg_split("/([a-zA-Z0-9]+)/", $arr, 0, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE);  


			$res[$k]["uniontypecode"] = implode("-",$arr1);
		}
		$this->assign("size",$size);
		$this->assign("count",$count);
		$this->assign("totalpage",$totalpage);
		$this->assign("name",$name);
		
		$this->assign('res',$res);
		$this->assign("page",$page->show("portal",$con));
		$this->display();
	}
	//已无效
	function brand_no(){
		//var_dump($_POST);
		$name = I("name");
//		$type = I("type");
//		$state = I("state");
$uid = $_COOKIE["zsid"];
		$p = I("p");
		if($p==""){
			$p=0;
		}else{
			$p = $p-1;
		}
		$size = $p*10;
		$where = " 1 and xiangmu like '%已无效%'";
		if($name!=""){
                    $where.=" and markname like '%$name%'";
			$con.="&name=".$name;
		}
		$count = M("mark")->where("$where and customerid=$uid")->count();
		$totalpage = ceil($count/10);
		$page = $this->page($count,10);

		$res = M("mark")->where("$where and customerid=$uid")->limit("$page->firstRow,$page->listRows")->order("id desc")->select();
		foreach($res as $k=>$v){
			$arr = $v["uniontypecode"];

			$arr1 = preg_split("/([a-zA-Z0-9]+)/", $arr, 0, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE);  


			$res[$k]["uniontypecode"] = implode("-",$arr1);
		}
		$this->assign("size",$size);
		$this->assign("count",$count);
		$this->assign("totalpage",$totalpage);
		$this->assign("name",$name);
	
		$this->assign('res',$res);
		$this->assign("page",$page->show("portal",$con));
		$this->display();
	}
	//商标详情
	public function brand_detail(){
		$zhu = I("zhuce");
		$id = I("id");//商标id
		$user_id = $_COOKIE['zsid'];
		$mark = M("mark")->where("id=$id")->find();
        if($mark['registetype']==''){
            $mark['typedetaildes'] = explode('；',$mark['typedetaildes']);
        }else{
            $mark['typedetaildes'] = explode(',',$mark['typedetaildes']);
        }
		$mark["begindate"] = str_replace("-", ".",$mark["begindate"]);
		$mark["appdate"] = str_replace("-", ".",$mark["appdate"]);
		$mark["checkdate"] = str_replace("-", ".",$mark["checkdate"]);
		$mark["regdate"] = str_replace("-", ".",$mark["regdate"]);
		$mark["enddate"] = str_replace("-", ".",$mark["enddate"]);
		$user = M("user")->where("id='$user_id'")->find();
		$order = M("zcorder_copy_copy")->where("markid={$id} and type='111222'")->find();

        if(!empty($order)){
            $order1 = M("zcorder_copy")->where("orderid = {$order['orderid']}")->find();
            $mark_state_order = M("mark_state_order")->where("moid = {$order['id']}")->select();
            $order2 = M("zcorder_copy_copy")->where("porderid={$order['id']} and type='111666' and (state='0' or state>'0')")->find();
            $order3 = M("zcorder_copy_copy")->where("porderid={$order['id']} and type='111888' and (state='0' or state>'0')")->find();
            if(!empty($order2)){
                $order4 = M("zcorder_copy")->where("orderid={$order2['orderid']} ")->find();
            }
            if(!empty($order3)){
                $order5 = M("zcorder_copy")->where("orderid={$order3['orderid']} ")->find();
            }
		}

		$adviser = M("adviser")->where("customerid=$user_id")->find();
		$this->assign("adviser",$adviser);
		$this->assign("mark_state_order",$mark_state_order);
        $this->assign("zhu",$zhu);
		$this->assign("mark",$mark);
		$this->assign("user",$user);
		$this->assign("order",$order);
        $this->assign("order1",$order1);
        $this->assign("order2",$order2);
        $this->assign("order3",$order3);
        $this->assign("order4",$order4);
        $this->assign("order5",$order5);
		$this->display("brand_detail2");
	}
    /*
     *   商标注册流程状态修改
     * */
    function brand_query_order_state(){
        $orderid =I('post.orderid');
        $state =I('post.state');
        $user_id = $_COOKIE['zsid'];
        $zcorder = M("zcorder")->where("orderid={$orderid} and customerid={$user_id}")->find();
        if(empty($zcorder)){
            echo "对不起该订单您无权操作";die;
        }
        if($state=='1'){
            M("mark_zc_state")->where("orderid={$orderid} ")->save(array('zhucestate'=>'11'));
            $fenpei_guwen = array(
                "order_no"=> $zcorder['order_no'],
                "now_step"=>'100',
                "next_step"=>'101'
            );
            $state = request_api_xt("/intel_property/customer_choose",$fenpei_guwen);
            json($state) ;die;
        }
        if($state=='2'){
            M("mark_zc_state_copy")->add(array('orderid'=>$orderid,'zhucestate'=>'1'));
            $fenpei_guwen = array(
                "order_no"=> $zcorder['order_no'],
                "now_step"=>'56',
                "next_step"=>'57'
            );
            $state = request_api_xt("/intel_property/customer_choose",$fenpei_guwen);
            json($state) ;die;
        }

    }
    /*
         *   商标驳回时调用此数据
         * */
    function brand_bh_ym(){
        $orderid =I('post.orderid');
        $user_id = $_COOKIE['zsid'];
        $zcorder = M("zcorder_copy_copy")->where("id={$orderid} and customerid={$user_id}")->find();
        if(empty($zcorder)) {
           return false;die;
        }
        $mark_zc_state = M("mark_state_order")->where("moid={$zcorder['id']} and state={$zcorder['state']}")->find();
        $time = time();
        $two = strtotime($mark_zc_state['regdate']);
        $endtime = (5*24*60*60-($time-$two));
        $days=floor($endtime/86400);
        $shi=floor(($endtime-86400*$days)/3600);
        $fen=floor(($endtime-86400*$days-3600*$shi)/60);
        $sytime =  $days."天".$shi."小时".$fen."分钟内";
        $jl['add_time'] = date('Y-m-d H:i:s',$two);
        $jl['endtime'] = $sytime;
        $service = M("service")->where("type='111666'")->find();
        $jl['price_large'] = $service['price_large'];
        $jl['price_service'] = $service['price_service'];
        $jl['orderid'] =  $orderid;
        $jl['content'] =  $mark_zc_state['content'];
        echo json_encode($jl);
    }
    /*
     * 商标注册详情异议处理
     * */
    function brand_bh_yy(){
        $orderid =I('post.orderid');
        $user_id = $_COOKIE['zsid'];
        $zcorder = M("zcorder_copy_copy")->where("id={$orderid} and customerid={$user_id}")->find();
        if(empty($zcorder)) {
            return false;die;
        }
        $mark_zc_state = M("mark_state_order")->where("moid={$zcorder['id']} and state={$zcorder['state']}")->find();
        $time = time();
        $two = strtotime($mark_zc_state['regdate']);
        $endtime = (5*24*60*60-($time-$two));
        $days=floor($endtime/86400);
        $shi=floor(($endtime-86400*$days)/3600);
        $fen=floor(($endtime-86400*$days-3600*$shi)/60);
        $sytime =  $days."天".$shi."小时".$fen."分钟内";
        $jl['add_time'] = date('Y-m-d H:i:s',$two);
        $jl['endtime'] = $sytime;
        $service = M("service")->where("type='111888'")->find();
        $jl['price_large'] = $service['price_large'];
        $jl['price_service'] = $service['price_service'];
        $jl['orderid'] =  $orderid;
        $jl['content'] =  $mark_zc_state['content'];
        //print_r($jl);die;
        echo json_encode($jl);
    }




	/**
	*  请求尼斯分类接口按照级别查询
	*/
	function nice_level(){	
		$code = I('post.code');
	    $arr['a'] = M("nice_first")->where("id={$code}")->field("describe",true)->find();
		$a['b'] = M("nice_first")->where("code={$arr['a']['pid']}")->field("describe",true)->find();
		$arr['b'] = M("nice_first")->where("code={$a['b']['pid']}")->field("describe",true)->find();
		echo json_encode($arr);
	}
	/*
	*    商标查询
	*/
	function brand_query(){
		if($_POST){
			$user_id = $_COOKIE['zsid'];
			$user = M("user")->where("id = {$user_id}")->find();
			$arr = $_POST;
			$arr['markpicture'] = 'http://'.$_SERVER['HTTP_HOST'].'/'.$arr['image'];
			unset($arr['image']);
			$arr['customerid'] = $user['id'];
			$arr['customername'] = $user['loginname'];
			$arr['customermobile'] = $user['phone'];
			$arr['addtime'] = time();

			$time = date("YmdHis");
			$arr['number'] = "c".$time.rand(100000,999999);
			if($arr['type']=='3'){
				$nice = M("nice_first")->where("id in({$arr['str']})")->field("describe,level",true)->select();
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
				
				$str2 = explode(',',$arr['str2']);
				foreach($str2 as $k=>$v){
					foreach($nicecalss as $ko=>$vo){
					     if($v==$vo['id']){
							 $newnice[] = $vo;
						 }
				    }
				}
				foreach($newnice as $k=>$v){
					foreach($v['items'] as $ks=>$vs){
					    foreach($vs['items'] as $ko=>$vo){
					       $query[] = $vo['id'];
				        }
				    }
				}
				$arr['querytype'] = implode(',',$query);
			}
			if($arr['type']=='1'){

               $arr['querytype'] = $arr['str2'];
                $a112 = M("industry")->where("id={$arr['industry_id']}")->find();
                $a221 = M("industry")->where("id={$arr['industry_id2']}")->find();
                $arr['field'] = $a112['industry_name'];
                $arr['industry'] = $a221['industry_name'];
                $arr['field_id'] = $a112['id'];
                $arr['industry_id'] = $a221['id'];
               // print_r($arr);die;
			}
			/*
			如果没有顾问则请求顾问接口分配顾问
			*/
			if($user['companyname']==''){
				$user['companyname']=='';
			}
			if($user['adviser']=='0') {
                $data = array(
                    "customerid" => $user['id'],
                    "customername" => $user['loginname'],
                    "customermobile" => $user['phone'],
                    "customerentname" => $user['companyname']
                );
                $guwen = request_api_xt("intel_property/auto_fenpei_guwen", $data);
                M("adviser")->add($guwen['data']);
                M("user")->where("id = {$user['id']}")->save(array('adviser' => '1'));
            }
		   $guwenadviser = M("adviser")->where("customerid={$user['id']}")->find();
			/*
			   查询单传送至协同顾问端开始
			*/
			$fenpei_guwen = array(
				                 "customerid"=>$user['id'],
						         "customername"=>$user['loginname'],
						         "customermobile"=>$user['phone'],
							     "customerentname"=>$user['companyname'],
								 "markname"=>$arr['markname'],
								 "markpicture"=>$arr['markpicture'],
								 "querytype"=>$arr['querytype'],
								 "consultantid"=>$guwenadviser['consultantid'], 
								 "query_no"=>$arr['number']
				              );
		    $turn_or_false =  request_api_xt("intel_property/chaxundan_submit",$fenpei_guwen);

			/*
			   查询单传送至协同顾问端结束
			*/
            $arr['consultantid'] = $guwenadviser['consultantid'];
            $arr['consultantname'] = $guwenadviser['consultantname'];
            //print_R($arr);die;
			$id = M("inquire")->add($arr);
            if($turn_or_false['returnCode']!='200'){
               M("false")->add(array('type'=>'1','fuwuid'=>$id));
            }
			M("user")->where("id = {$user_id}")->setInc('chasum');
			echo $id;die;
		}else{
			$arr = M("nice_first")->where("level='1'")->field("describe",true)->select();
			$two = M("nice_first")->where("level='2'")->field("describe",true)->select();
			$three = M("nice_first")->where("level='3'")->field("describe",true)->select();
			foreach($two as $k=>$v){
				foreach($three as $ks=>$vs){
				    if($v['code']==$vs['pid']){
						$two[$k]['subset'][] = $vs;
					}
			    } 
			}
			foreach($arr as $k=>$v){
				foreach($two as $ks=>$vs){
				    if($v['code']==$vs['pid']){
						$arr[$k]['subset'][] = $vs;
					}
			    } 
			}
			$industry = M("industry")->where("pid='0'")->field("id,industry_name,pid")->order("sort")->select();
            foreach($industry as $k=>$v){
                $inid[] = $v['id'];
            }
            $iid = implode(',',$inid);
            $industry2 = M("industry")->where("pid in ({$iid})")->field("id,industry_name,querytype,pid")->select();

            foreach($industry2 as $ki=>$vi){
                if(empty($vi['querytype'])){
                    unset($industry2[$ki]);
                }
            }
            //json($industry2);
            foreach($industry as $k=>$v){
                foreach($industry2 as $ki=>$vi){
                    if($v['id'] == $vi['pid']){
                        $industry[$k]['items'] = $vi;
                    }
                }
            }
            foreach($industry as $k=>$v){
                if(empty($v['items'])){
                   unset($industry[$k]);
                }
            }
			$this->assign('arr',$arr);
			$this->assign('industry',$industry);
			$this->display();
		}
	}
	/**
	*  查询领域和行业
	*/
	function industry(){
		$id = I('post.id');
		$industry = M("industry")->where("pid={$id}")->field("id,industry_name,pid")->order("id")->select();
		echo json_encode($industry);
	}
	function indu(){
		$id = I('post.id');
		$industry = M("industry")->where("id={$id}")->field("querytype")->find();
		$nice = M("nice_first")->where("id in({$industry['querytype']})")->field("describe,level",true)->select();
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
        //print_r($nicecalss);die;
		$this->assign('nicecalss',$nicecalss);
		$this->display("hangyelingyu");
	}
	/**
	* 商标查询列表
	*/
	function brand_query_lst(){
		$state = I('post.state');
		$number = I('post.number');
		$start_time = I('post.start_time');
		$end_time = I('post.end_time');		
		$user_id = $_COOKIE['zsid'];
		$where = "customerid = {$user_id}";
		if($state!=''){
			$where .=" and state={$state}";
		}
		if($number!=''){
			$where .=" and number like '%$number%'";
		}
		if($start_time!=''&&$end_time!=''){
			$start_time = strtotime($start_time);
			$end_time = strtotime($end_time);
			$where .=" and addtime>{$start_time} and addtime<{$end_time}";
		}
		
		$count = M("inquire")->where($where)->count();
		$page = $this->page($count,10);
		$arr = M("inquire")->where($where)->order("addtime desc")->limit("$page->firstRow,$page->listRows")->select();
		$user = M("user")->where("id = {$user_id}")->find();
		$this->assign('arr',$arr);
		$this->assign("count",$count);
		$this->assign("user",$user);
		$this->assign("page",$page->show("admin",array('state'=>$state,'number'=>$number,'start_time'=>$start_time,'end_time'=>$end_time,'state'=>$state)));
		$this->assign("num",ceil($count/10));
		$this->assign("state",$state);
		$this->assign("number",$number);
		$this->assign("start_time",$start_time);
		$this->assign("end_time",$end_time);	
		$this->display();
	}
	/**
	*  商标查询详情
	*/
	function brand_query_details(){
		$queryid = I('get.queryid');
		$user_id = $_COOKIE['zsid'];
		$arr = M("inquire")->where("queryid = {$queryid} and customerid={$user_id}")->find();
		$user = M("user")->where("id = {$user_id}")->find();
		if($user['isclaimed']=='1'){
			$enterprise = M("enterprise")->where("user_id = {$user_id}")->find();
		    $user['dom'] = $enterprise['dom'];
		}
		if($user['adviser']=='1'){
			$adviser = M("adviser")->where("customerid = {$user_id}")->find();
		    $user['consultantid'] = $adviser['consultantid'];
			$user['consultantname'] = $adviser['consultantname'];
			$user['consultantmobile'] = $adviser['consultantmobile'];
			$user['consultantimage'] = '';
		}
		if($arr['okquerytype']!=''){
			$nice = M("nice_first")->where("id in({$arr['okquerytype']})")->field("describe,level",true)->select();
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
			$arr['okquerytype'] = $nicecalss;
			unset($nicecalss);
		}
		if($arr['noquerytype']!=''){
			$nice1 = M("nice_first")->where("id in({$arr['noquerytype']})")->field("describe,level",true)->select();
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
						$nicef1[$k]['items'][] = $vs;
					}
				}
			}
			$one1 = implode(',',$one1);
			$nicecalss1 = M("nice_first")->where("code in($one1)")->field("describe,level",true)->select();
			foreach($nicecalss1 as $k=>$v){
				foreach($nicef1 as $ks=>$vs){
					if($v['code']==$vs['pid']){
						$nicecalss1[$k]['items'][] = $vs;
					}
				}
			}
			$arr['noquerytype'] = $nicecalss1;
			unset($nicecalss1);
		}
		if($arr['suggestedtype']!=''){
		    $nice2 = M("nice_first")->where("id in({$arr['suggestedtype']}) ")->field("describe,level",true)->select();
			$two2 = array();
			$one2 = array();
			foreach($nice2 as $k=>$v){
				if(!in_array($v['pid'], $two2)){
					$two2[] = $v['pid'];
					$one2[] = $v['code'];
				}
			}
			$two2 = implode(',',$two2);
            $one2 = implode(',',$one2);
            $nicecalss2 = M("nice_first")->where("code in($two2)")->field("describe,level",true)->select();
            $nicecalss3 = M("nice_first")->where("pid in($one2)")->field("describe,level",true)->select();
            foreach($nice2 as $k=>$v){
				foreach($nicecalss3 as $ki=>$vi){
					if($v['code']==$vi['pid']){
						$nice2[$k]['items'][] = $vi;
					}
			    }
			}
            foreach($nicecalss2 as $k=>$v){
				foreach($nice2 as $ki=>$vi){
					if($v['code']==$vi['pid']){
						$nicecalss2[$k]['items'][] = $vi;
					}
			    }
			}	
            $arr['suggestedtype'] = $nicecalss2;
			unset($nicecalss2);			
		}
		$this->assign("arr",$arr);
		$this->assign("user",$user);
		$this->display();
	}
	/**
	*  添加注册订单
	*/
	function brand_register_add(){
		$queryid = I('post.queryid');
		$oneid = I('post.oneid');
		$info['customerid'] = $_COOKIE['zsid'];
		$enterprise = M("enterprise")->where("user_id={$info['customerid']}")->find();
		$oneid = implode(',',$oneid);
		$user = M("user")->where("id={$info['customerid']}")->find();
		$inquire = M("inquire")->where("queryid={$queryid}")->find();
		if(empty($inquire['newmarkname'])){
			$markname = $inquire['markname'];
		}else{
			$markname = $inquire['newmarkname'];
		}
        $info['type'] = '111222';
		//计算费用开始
        $nice = M("nice_first")->where("id in($oneid)")->field("describe,level",true)->select();
        $two = array();
        foreach($nice as $k=>$v){
            $xiaonoce[] = $v['name'];
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
                    foreach($vs['items'] as $ki=>$vi){
                        $nicecalss[$k]['items'][] = $vi;
                    }
                }
            }
        }
        //查询商品价格
        $service = M("service")->where("type='111222'")->find();
        $mark = array();
        foreach($nicecalss as $k=>$v){
            if(count($v['items'])>10){
                $shu = count($vs['items'])-10;
                $mark[$k]['official_price'] = bcadd($service['price_large'],bcmul($service['price_small'],$shu,2),2);
                //$mark[$k]['official_price'] = $service['price_large']+$service['price_small']*(count($vs['items'])-10);
                unset($shu);
            }else{
                $mark[$k]['official_price'] = $service['price_large'];
            }
            $mark[$k]['service_price'] = $service['price_service'];
            $mark[$k]['one_code'] = $v['code'].$v['name'];
            $mark[$k]['one_id'] = $v['id'];
            foreach($v['items'] as $ko=>$vo){
                $mark[$k]['three_code'][] = $vo['code'].$vo['name'];
                $mark[$k]['three_id'][] = $vo['id'];
            }
        }
        $price1 = 0;
        $price2 = 0;
        foreach($mark as $k=>$v){
            $mark[$k]['three_code'] = implode(',',$v['three_code']);
            $mark[$k]['three_id'] = implode(',',$v['three_id']);
            $mark[$k]['markname'] = $markname;
            $mark[$k]['markimage'] = $inquire['markpicture'];
            $mark[$k]['type'] = $info['type'];
            $mark[$k]['customerid'] = $info['customerid'];
            //$price1 =    $price1+$v['official_price'];
            //$price2 =    $price2+$v['service_price'];
            $price1 = bcadd($price1,$v['official_price'],2);
            $price2 = bcadd($price2,$v['service_price'],2);
        }
        //计算费用结束
        $info['applicantname'] = $enterprise['entname'];
        $info['applicantaddress'] = $enterprise['dom'];
        $info['query_no'] = $inquire['number'];
        $info['customername'] = $user['linkman'];
        $info['customermobile'] = $user['phone'];
        $info['type'] = '111222';
        $info['addtime'] = time();
        $time = date("YmdHis");
        $info['order_no'] = "s".$time.rand(100000,999999);
        //$money = $price1+$price2;
        $money = bcadd($price1,$price2,2);
        $info['official_price'] = $price1;
        $info['service_price'] = $price2;
        $info['summary_price'] = $money;
        # 开启事务
        M()->startTrans();
        $key = M("zcorder_copy")->add($info);
        foreach($mark as $k=>$v){
            $mark[$k]['orderid'] = $key;
            $num = $k+1;
            $mark[$k]['quer_no'] = $info['order_no'].'-'.$num;
            unset($num);
        }
        $key2 = M("zcorder_copy_copy")->addAll($mark);
        $key3 = M("inquire")->where("queryid = {$queryid}")->save(array('zhuce'=>'1'));
        if($key!='' && $key2!="" && $key3!="1" ){
            #事件提交
            M()->commit();

        }else{
            # 事件回滚
            M()->rollback();
        }
        exit('<script>top.location.href="index.php?g=Portal&m=brand&a=brand_register_show&key='.$key.'"</script>');
	}
	/**
	*   确认订单
	*/
	function brand_register_show(){
		$key = I('get.key');
		$order = M("zcorder_copy")->where("orderid={$key}")->find();
		$arr = M("zcorder_copy_copy")->where("orderid ={$key}")->select();
		$service = M("service")->where("type={$order['type']}")->find();
            $markid = array();
            $new = $arr;
            foreach($arr as $k=>$v){
               if(!in_array($v['markid'], $markid)){
                   $markid[] = $v['markid'];
               }else{
                   unset($arr[$k]);
               }
            }
            foreach($arr as $k=>$v){
                $arr[$k]['onecode'][] = $v['one_id'];
                foreach($new as $ki=>$vi){
                    if($v['markid']==$vi['markid']&&$v['id']!=$vi['id']){
                        $arr[$k]['onecode'][] = $vi['one_id'];
                        //$arr[$k]['official_price'] = $arr[$k]['official_price']+$vi['official_price'];
                        //$arr[$k]['service_price'] = $arr[$k]['service_price']+$vi['service_price'];
                        $arr[$k]['official_price'] = bcadd($arr[$k]['official_price'],$vi['official_price'],2);
                        $arr[$k]['service_price'] = bcadd($arr[$k]['service_price'],$vi['service_price'],2);
                    }
                }
            }
            foreach($arr as $k=>$v){
                  //$arr[$k]['summary_price'] = $v['official_price']+$v['service_price'];
                $arr[$k]['summary_price'] = bcadd($v['official_price'],$v['service_price'],2);
            }
		/*
		    查询优惠券信息
		*/
		$this->assign("arr",$arr);
        $this->assign("info",$order);
		$this->assign("service",$service);
		$this->display("order-brand");
	}
    /*
     *   查看确认订单详情
     * */
    function brand_register_show_details(){
        $nice = I('post.nice');
        $orderid = I('post.orderid');
        $arr = M("zcorder_copy_copy")->where("orderid ={$orderid} and one_id={$nice}")->find();
        $arr['three']  = explode(',',$arr['three_code']);
        echo json_encode($arr);
    }
    /*
     *   添加驳回订单
     * */
    function brand_query_bohui(){
        $id = I('post.id');
        $user_id = $_COOKIE['zsid'];
        $enterprise = M("enterprise")->where("user_id={$user_id}")->find();
        $user = M("user")->where("id={$user_id}")->find();
        $service = M("service")->where("type='111666'")->find();
        $info['customerid'] = $user_id;
        $info['applicantname'] = $enterprise['entname'];
        $info['applicantaddress'] = $enterprise['dom'];
        $info['customername'] = $user['linkman'];
        $info['customermobile'] = $user['phone'];
        $info['type'] = '111666';
        $info['addtime'] = time();
        $time = date("YmdHis");
        $info['order_no'] = "s".$time.rand(100000,999999);
        $info['official_price'] =  $service['price_large'];
        $info['service_price'] = $service['price_service'];
        $info['summary_price'] = bcadd($service['price_large'],$service['price_service'],2);
        $key = M("zcorder_copy")->add($info);
        $data = M("zcorder_copy_copy")->where("id={$id}")->find();
        $data['orderid'] =  $key;
        $data['quer_no'] =   $info['order_no'].'-'.'1';;
        $data['type'] =  $info['type'];
        $data['official_price'] =  $service['price_large'];
        $data['service_price'] =  $service['price_service'];
        $data['porderid'] =  $id;
        unset($data['id']);
        M("zcorder_copy_copy")->add($data);
        exit('<script>top.location.href="index.php?g=Portal&m=brand&a=brand_register_show&key='.$key.'"</script>');
    }
    /*
    *   添加异议订单
    * */
    function shangbiaoyiyi(){
        $id = I('post.orderid');
        $user_id = $_COOKIE['zsid'];
        $enterprise = M("enterprise")->where("user_id={$user_id}")->find();
        $user = M("user")->where("id={$user_id}")->find();
        $service = M("service")->where("type='111888'")->find();
        $info['customerid'] = $user_id;
        $info['applicantname'] = $enterprise['entname'];
        $info['applicantaddress'] = $enterprise['dom'];
        $info['customername'] = $user['linkman'];
        $info['customermobile'] = $user['phone'];
        $info['type'] = '111888';
        $info['addtime'] = time();
        $time = date("YmdHis");
        $info['order_no'] = "s".$time.rand(100000,999999);
        $info['official_price'] =  $service['price_large'];
        $info['service_price'] = $service['price_service'];
       // $info['summary_price'] = $service['price_large']+$service['price_service'];
        $info['summary_price'] = bcadd($service['price_large'],$service['price_service'],2);
        $key = M("zcorder_copy")->add($info);
        $data = M("zcorder_copy_copy")->where("id={$id}")->find();
        $data['orderid'] =  $key;
        $data['quer_no'] =   $info['order_no'].'-'.'1';;
        $data['type'] =  $info['type'];
        $data['official_price'] =  $service['price_large'];
        $data['service_price'] =  $service['price_service'];
        $data['porderid'] =  $id;
        unset($data['id']);
        M("zcorder_copy_copy")->add($data);
        exit('<script>top.location.href="index.php?g=Portal&m=brand&a=brand_register_show&key='.$key.'"</script>');
    }
	/**
	*  下注册订单是修改个人信息
	*/
	function order_info_save(){
		$orderid = I('post.orderid');
		$customername = I('post.customername');
		$customermobile = I('post.customermobile');
		$applicantname = I('post.applicantname');
		$applicantaddress = I('post.applicantaddress');
		$type = I('post.type');
		if($type=='1'){
			M("zcorder_copy")->where("orderid={$orderid}")->save(array('customername'=>$customername));
		}
		if($type=='2'){
			M("zcorder_copy")->where("orderid={$orderid}")->save(array('customermobile'=>$customermobile));
		}
		if($type=='3'){
			M("zcorder_copy")->where("orderid={$orderid}")->save(array('applicantname'=>$applicantname));
		}
		if($type=='2'){
			M("zcorder_copy")->where("orderid={$orderid}")->save(array('applicantaddress'=>$applicantaddress));
		}
		echo 1;die;
		
	}
    /*
   *   商标详情概况
   **/
    function sbgk(){
        $zhu = I("zhuce");
        $id = I('post.markid');//商标id
        $user_id = $_COOKIE['zsid'];
        $mark = M("mark")->where("id=$id")->find();
        if($mark['registetype']==''){
            $mark['typedetaildes'] = explode('；',$mark['typedetaildes']);
        }else{
            $mark['typedetaildes'] = explode(',',$mark['typedetaildes']);
        }
        $mark["begindate"] = str_replace("-", ".",$mark["begindate"]);
        $mark["appdate"] = str_replace("-", ".",$mark["appdate"]);
        $mark["checkdate"] = str_replace("-", ".",$mark["checkdate"]);
        $mark["regdate"] = str_replace("-", ".",$mark["regdate"]);
        $mark["enddate"] = str_replace("-", ".",$mark["enddate"]);
        $user = M("user")->where("id='$user_id'")->find();
        $order = M("zcorder_copy_copy")->where("markid={$id} and type='111222'")->find();

        if(!empty($order)){
            $order1 = M("zcorder_copy")->where("orderid = {$order['orderid']}")->find();
            $mark_state_order = M("mark_state_order")->where("moid = {$order['id']}")->select();
            $order2 = M("zcorder_copy_copy")->where("porderid={$order['id']} and type='111666' and (state='0' or state>'0')")->find();
            $order3 = M("zcorder_copy_copy")->where("porderid={$order['id']} and type='111888' and (state='0' or state>'0')")->find();
            if(!empty($order2)){
                $order4 = M("zcorder_copy")->where("orderid={$order2['orderid']} ")->find();
            }
            if(!empty($order3)){
                $order5 = M("zcorder_copy")->where("orderid={$order3['orderid']} ")->find();
            }
        }

        $adviser = M("adviser")->where("customerid=$user_id")->find();
        $this->assign("adviser",$adviser);
        $this->assign("mark_state_order",$mark_state_order);
        $this->assign("zhu",$zhu);
        $this->assign("mark",$mark);
        $this->assign("user",$user);
        $this->assign("order",$order);
        $this->assign("order1",$order1);
        $this->assign("order2",$order2);
        $this->assign("order3",$order3);
        $this->assign("order4",$order4);
        $this->assign("order5",$order5);
        $this->display("sbgk");
    }
    /*
    *  商标详情转让
    **/
    function shxq_zhuanrang(){
        $markid = I('post.markid');
        $user_id = $_COOKIE['zsid'];
        $mark = M("mark")->where("id={$markid} ")->find();
        $state = M("mark")->where("id={$markid} and xiangmu like '%已无效%'")->find();
        if(empty($state)){
            $markstate = '1';
        }else{
            $markstate = '2';
        }
        $order = M("zcorder_copy_copy")->where("markid = {$markid} and type='111333' and state is not null")->find();
        if(!empty($order)){
            $order1 = M("zcorder_copy")->where("orderid = {$order['orderid']}")->find();
            $detail = M("zcorder_detail")->where("orderid = {$order['orderid']}")->find();
        }
        $this->assign("detail",$detail);
        $this->assign("markstate",$markstate);
        $this->assign("markid",$markid);
        $this->assign("order",$order);
        $this->assign("order1",$order1);
        $this->assign("state",$state);
        $this->display();
    }
    /*
     *   商标转让下单
     * */
    function zhunragndigndan(){
        $new['applicantname'] = I('post.applicantname');
        $new['applicantaddress'] = I('post.applicantaddress');
        $new['code'] = I('post.code');
        $new['customermobile'] = I('post.customermobile');
        $new['customername'] = I('post.customername');
        $user_id = $_COOKIE['zsid'];
        $markid = I('post.markid');
        $mark = M("mark")->where("id = {$markid}")->find();
        $enterprise = M("enterprise")->where("user_id={$user_id}")->find();
        $user = M("user")->where("id={$user_id}")->find();
        $service = M("service")->where("type='111333'")->find();
        $info['customerid'] = $user_id;
        $info['applicantname'] = $enterprise['entname'];
        $info['applicantaddress'] = $enterprise['dom'];
        $info['customername'] = $user['linkman'];
        $info['customermobile'] = $user['phone'];
        $info['type'] = '111333';
        $info['addtime'] = time();
        $time = date("YmdHis");
        $info['order_no'] = "s".$time.rand(100000,999999);
        $info['official_price'] =  $service['price_large'];
        $info['service_price'] = $service['price_service'];
        //$info['summary_price'] = $service['price_large']+$service['price_service'];
        $info['summary_price'] = bcadd($service['price_large'],$service['price_service'],2);
        $info['one_code'] = $mark['one_code'];
        $key = M("zcorder_copy")->add($info);
        $data['customerid'] = $user_id;
        $data['markid'] =  $markid;
        $data['orderid'] =  $key;
        $data['quer_no'] =   $info['order_no'].'-'.'1';;
        $data['one_code'] =  $mark['uniontypecode'];
        $data['three_code'] =  $mark['typedetaildes'];
        $data['one_id'] =  $mark['one_code'];
        $data['three_id'] =  $mark['registetype'];
        $data['markname'] =  $mark['markname'];
        $data['type'] =  $info['type'];
        $data['markimage'] = $mark['marklogo'];
        $data['official_price'] =  $service['price_large'];
        $data['service_price'] =  $service['price_service'];
        //json($data);
        M("zcorder_copy_copy")->add($data);
        $new['markid'] = $markid;
        $new['orderid'] = $key;
        M("zcorder_detail")->add($new);
        exit('<script>top.location.href="index.php?g=Portal&m=brand&a=brand_register_show&key='.$key.'"</script>');
    }
    /*
   *  商标详情变更
   **/
    function biangeng(){
        $markid = I('post.markid');
        $user_id = $_COOKIE['zsid'];
        $mark = M("mark")->where("id={$markid} ")->find();
        $state = M("mark")->where("id={$markid} and xiangmu like '%已无效%'")->find();
        if(empty($state)){
            $markstate = '1';
        }else{
            $markstate = '2';
        }
        $order = M("zcorder_copy_copy")->where("markid = {$markid} and type='111555' and (state='1' or state='0' or state='2')")->find();
        if(!empty($order)){
            $order1 = M("zcorder_copy")->where("orderid = {$order['orderid']}")->find();
            $detail = M("zcorder_detail")->where("orderid = {$order['orderid']}")->find();
        }
        $jl = M("zcorder_copy_copy")->where("markid = {$markid} and type='111555' and state='3'")->select();
        if(!empty($jl)){
            foreach($jl as $k=>$v){
                $orderid[] = $v['orderid'];
            }
            $orderid = implode(",",$orderid);
            $detailnew = M("zcorder_detail")->where("orderid in({$orderid}) and markid={$markid}")->select();
            foreach($detailnew as $k=>$v){
                foreach($jl as $ki=>$vi){
                    if($v['orderid']==$vi['orderid']) {
                        $detailnew[$k]['time3'] = $vi['time3'];
                    }
                }
            }
        }
        $this->assign("markstate",$markstate);
        $this->assign("markid",$markid);
        $this->assign("order",$order);
        $this->assign("order1",$order1);
        $this->assign("detail",$detail);
        $this->assign("jl",$jl);
        $this->assign("detailnew",$detailnew);
        $this->display();
    }
    /*
    *   商标变更下单
    * */
    function biangengdingdan(){
        $new['applicantname'] = I('post.applicantname');
        $new['applicantaddress'] = I('post.applicantaddress');
        $user_id = $_COOKIE['zsid'];
        $markid = I('post.markid');
        $mark = M("mark")->where("id = {$markid}")->find();
        $enterprise = M("enterprise")->where("user_id={$user_id}")->find();
        $user = M("user")->where("id={$user_id}")->find();
        $service = M("service")->where("type='111555'")->find();
        $info['customerid'] = $user_id;
        $info['applicantname'] = $enterprise['entname'];
        $info['applicantaddress'] = $enterprise['dom'];
        $info['customername'] = $user['linkman'];
        $info['customermobile'] = $user['phone'];
        $info['type'] = '111555';
        $info['addtime'] = time();
        $time = date("YmdHis");
        $info['order_no'] = "s".$time.rand(100000,999999);
        $info['official_price'] =  $service['price_large'];
        $info['service_price'] = $service['price_service'];
        //$info['summary_price'] = $service['price_large']+$service['price_service'];
        $info['summary_price'] = bcadd($service['price_large'],$service['price_service'],2);
        $info['one_code'] = $mark['one_code'];
        $key = M("zcorder_copy")->add($info);
        $data['customerid'] = $user_id;
        $data['markid'] =  $markid;
        $data['orderid'] =  $key;
        $data['quer_no'] =   $info['order_no'].'-'.'1';;
        $data['one_code'] =  $mark['uniontypecode'];
        $data['three_code'] =  $mark['typedetaildes'];
        $data['one_id'] =  $mark['one_code'];
        $data['three_id'] =  $mark['registetype'];
        $data['markname'] =  $mark['markname'];
        $data['type'] =  $info['type'];
        $data['markimage'] = $mark['marklogo'];
        $data['official_price'] =  $service['price_large'];
        $data['service_price'] =  $service['price_service'];
        M("zcorder_copy_copy")->add($data);
        $new['markid'] = $markid;
        $new['orderid'] = $key;
        M("zcorder_detail")->add($new);
        exit('<script>top.location.href="index.php?g=Portal&m=brand&a=brand_register_show&key='.$key.'"</script>');
    }
    /*
   *  商标详情许可备案
   **/
    function xukebeian(){
        $markid = I('post.markid');
        $user_id = $_COOKIE['zsid'];
        $mark = M("mark")->where("id={$markid} ")->find();
        $permit = M("permit")->where("markid={$markid} ")->select();
        //json($permit);
        if(!empty($permit)){
            $this->assign("permit",$permit);
        }
        $this->assign("mark",$mark);

        $this->display();
    }
    //删除许可备案
    function delxuke(){
        $id = I('post.id');
        $user_id = $_COOKIE['zsid'];
        $permit = M("permit")->where("id={$id} and userid={$user_id}")->delete();
        if($permit==''){
            echo 1;
        }else{
            echo 2;
        }
    }
    /*
     *   许可备案详情
      * */
    function xukebeianxq(){
        $id = I('post.id');
        $user_id = $_COOKIE['zsid'];
        $permit = M("permit")->where("id={$id} and userid={$user_id}")->find();
        $mark = M("mark")->where("id = {$permit['markid']}")->find();
        $permit['markcode_key'] = $mark['markcode_key'];
        $permit['note'] = $mark['note'];
        if($permit['type']=='1'){
            $permit['type'] = "普通许可";
        }
        if($permit['type']=='2'){
            $permit['type'] = "排他许可";
        }
        if($permit['type']=='3'){
            $permit['type'] = "独占许可";
        }
        $permit['riqi'] = date('Y年m月d日',$permit['begindate'])."至".date('Y年m月d日',$permit['enddate']);
        //print_R($permit);die;
        echo json_encode($permit);

    }
    /*
     *  添加许可信息
     * */
    function addxuke(){
        $info['markid'] = I('post.markid');
        $info['applicantname'] = I('post.applicantname');
        $info['applicantaddress'] = I('post.applicantaddress');
        $info['code'] = I('post.code');
        $info['customername'] = I('post.customername');
        $info['customermobile'] = I('post.customermobile');
        $info['begindate'] = strtotime(I('post.star_date'));
        $info['enddate'] = strtotime(I('post.end_date'));
        $info['type'] = I('post.xklx');
        $info['fenlei'] = I('post.fenlei');
        $info['userid'] =  $_COOKIE['zsid'];
        $info['id'] = M("permit")->add($info);
        echo json_decode($info);

    }
  /*
   *   许可下单
   * */
    function xukexiadans(){
        $xkid = I('post.xkid');
        $id = implode(',',$xkid);
        $markid = I('post.markid');
        $user_id = $_COOKIE['zsid'];
        $markid = I('post.markid');
        $mark = M("mark")->where("id = {$markid}")->find();
        $enterprise = M("enterprise")->where("user_id={$user_id}")->find();
        $user = M("user")->where("id={$user_id}")->find();
        $service = M("service")->where("type='111444'")->find();
        $info['customerid'] = $user_id;
        $info['applicantname'] = $enterprise['entname'];
        $info['applicantaddress'] = $enterprise['dom'];
        $info['customername'] = $user['linkman'];
        $info['customermobile'] = $user['phone'];
        $info['type'] = '111444';
        $info['addtime'] = time();
        $time = date("YmdHis");
        $info['order_no'] = "s".$time.rand(100000,999999);
        $info['official_price'] =  $service['price_large'];
        $info['service_price'] = $service['price_service'];
        //$info['summary_price'] = $service['price_large']+$service['price_service'];
        $info['summary_price'] = bcadd($service['price_large'],$service['price_service'],2);
        $info['one_code'] = $mark['one_code'];
        $key = M("zcorder_copy")->add($info);
        $data['customerid'] = $user_id;
        $data['markid'] =  $markid;
        $data['orderid'] =  $key;
        $data['quer_no'] =   $info['order_no'].'-'.'1';;
        $data['one_code'] =  $mark['uniontypecode'];
        $data['three_code'] =  $mark['typedetaildes'];
        $data['one_id'] =  $mark['one_code'];
        $data['three_id'] =  $mark['registetype'];
        $data['markname'] =  $mark['markname'];
        $data['type'] =  $info['type'];
        $data['markimage'] = $mark['marklogo'];
        $data['official_price'] =  $service['price_large'];
        $data['service_price'] =  $service['price_service'];
       $fuwuid =  M("zcorder_copy_copy")->add($data);
        M("permit")->where("id in({$id})")->save(array('pid'=>$fuwuid,'state'=>'1'));
        exit('<script>top.location.href="index.php?g=Portal&m=brand&a=brand_register_show&key='.$key.'"</script>');
    }
    /*
     *   查询二级信息
     * */
    function erjiindu(){
        $id = I('post.id');
        $nice = M("nice_first")->where("id = {$id}")->find();
        $ppid = M("nice_first")->where("code = {$nice['pid']}")->find();
        $niceclass = M("nice_first")->where("pid = {$nice['code']}")->select();
        foreach($niceclass as $k=>$v){
            $niceclass[$k]['ppid'] = $ppid['id'];
        }
        //$three = M("nice_first")->where("pid = {$niceclass['0']['code']}")->select();
        $arr['nice'] = $nice;
        $arr['niceclass'] = $niceclass;
       // $arr['three'] = $three;
        echo json_encode($niceclass);
    }
    /*
  *  商标详情续展
  **/
    function xuzhanz(){
        $markid = I('post.markid');
        $user_id = $_COOKIE['zsid'];
        $mark = M("mark")->where("id={$markid} ")->find();
        $state = M("mark")->where("id={$markid} and xiangmu like '%已无效%'")->find();
        if(!empty($state)){
            $markstate = '1';
        }
        $begindate = strtotime($mark['enddate']);
        if($begindate==''){
            $markstate = '2';
        }
        $shijiancha = time_difference($mark['enddate'],date('Y-m-d'));
        $time = time();
        $enddate = strtotime($mark['enddate']);
        if($time>$enddate){
            $markstate = '1';
        }else{
            $num = ($enddate-$time)/3600/24/365;
            if($num<'1'){
                $markstate = '3';
                $ornew = M("zcorder_copy_copy")->where("markid={$markid} and type='111777' and (state='0' or state>'0')")->find();
                if(!empty($ornew)) {
                    $statetime = M("zcorder_copy")->where("orderid={$ornew['orderid']}")->find();
                    $ymd = date('Y.m.d',$statetime['paytime']);
                    $ymd1 = explode(".",$ymd);
                    $ymd1['0'] = $ymd1['0']+10;
                    $ymd2 = implode(".",$ymd1);
                    $markstate = '5';
                }
            }
            if($num>'1'){
                $markstate = '4';

            }
        }

        $ntime = explode("-",$mark['enddate']);
        $ntime['0'] = $ntime['0']+10;
        $nntime = implode("-",$ntime);
        $mtime = strtotime($nntime)-3600*24;
        $this->assign("markstate",$markstate);
        $this->assign("markid",$markid);
        $this->assign("mtime",$mtime);
        $this->assign("shijiancha",$shijiancha);
        $this->assign("ornew",$ornew);
        $this->assign("statetime",$statetime);
        $this->assign("ymd",$ymd);
        $this->assign("ymd2",$ymd2);
        $this->display();
    }
    /*
     *   商标续展下单
     * */
    function xuzhanxiadan(){
        $user_id = $_COOKIE['zsid'];
        $markid = I('post.markid');
        $mark = M("mark")->where("id = {$markid}")->find();
        $enterprise = M("enterprise")->where("user_id={$user_id}")->find();
        $user = M("user")->where("id={$user_id}")->find();
        $service = M("service")->where("type='111777'")->find();
        $info['customerid'] = $user_id;
        $info['applicantname'] = $enterprise['entname'];
        $info['applicantaddress'] = $enterprise['dom'];
        $info['customername'] = $user['linkman'];
        $info['customermobile'] = $user['phone'];
        $info['type'] = '111777';
        $info['addtime'] = time();
        $time = date("YmdHis");
        $info['order_no'] = "s".$time.rand(100000,999999);
        $info['official_price'] =  $service['price_large'];
        $info['service_price'] = $service['price_service'];
        //$info['summary_price'] = $service['price_large']+$service['price_service'];
        $info['summary_price'] = bcadd($service['price_large'],$service['price_service'],2);
        $info['one_code'] = $mark['one_code'];
        $key = M("zcorder_copy")->add($info);
        $data['customerid'] = $user_id;
        $data['markid'] =  $markid;
        $data['orderid'] =  $key;
        $data['quer_no'] =   $info['order_no'].'-'.'1';;
        $data['one_code'] =  $mark['uniontypecode'];
        $data['three_code'] =  $mark['typedetaildes'];
        $data['one_id'] =  $mark['one_code'];
        $data['three_id'] =  $mark['registetype'];
        $data['markname'] =  $mark['markname'];
        $data['type'] =  $info['type'];
        $data['markimage'] = $mark['marklogo'];
        $data['official_price'] =  $service['price_large'];
        $data['service_price'] =  $service['price_service'];
        M("zcorder_copy_copy")->add($data);
        exit('<script>top.location.href="index.php?g=Portal&m=brand&a=brand_register_show&key='.$key.'"</script>');
    }
    /*
  *  商标详情资料列表
  **/
    function ziliaoliebiao(){
        $id = I('markid');
        $zsid = $_COOKIE['zsid'];
        $zsid = 662253;
        $file = M("file");
        $result = $file->where("userid = $zsid")->select();
        $this->assign("file",$result);
        $this->assign("id",$id);
        $this->display();
    }
    /*
     *   商标不驳回
     * */
    function bbh(){
        $id = I('post.orderid');
        $arr = M("zcorder_copy_copy")->where("id={$id}")->find();
        $fsbhqq = array(
            'order_no'=>$arr['quer_no'],
            'now_step'=>'56',
            'next_step'=>'0'
        );
        request_api_xt("intel_property/customer_choose",$fsbhqq);
        M("zcorder_copy_copy")->where("id={$id}")->save(array('shibai'=>'1','time11'=>time()));
        echo 1;
    }
    /*
    *   商标不答辩
    * */
    function bsb(){
        $id = I('post.orderid');
        $arr = M("zcorder_copy_copy")->where("id={$id}")->find();
        $fsbhqq = array(
            'order_no'=>$arr['quer_no'],
            'now_step'=>'66',
            'next_step'=>'0'
        );
        request_api_xt("intel_property/customer_choose",$fsbhqq);
        M("zcorder_copy_copy")->where("id={$id}")->save(array('shibai'=>'1','time11'=>time()));
        echo 1;
    }
    /*
     *  商标批量变更
     * */
    function brand_biangeng(){
        $zsid = $_COOKIE['zsid'];
        $arr = M("mark")->where("customerid={$zsid} ")->select();
        $this->assign("arr",$arr);
        $this->display('bianggeng');
    }
    /*
     *   批量变更下单
     * */
    function xiliangbiangeng(){
        $new['applicantname'] = I('post.applicantname');
        $new['applicantaddress'] = I('post.applicantaddress');
        $user_id = $_COOKIE['zsid'];
        $markidarray = I('post.markid');////
        $mar = implode(',',$markidarray);
        $mark = M("mark")->where("id in({$mar})")->select();
        json($mark);
        $enterprise = M("enterprise")->where("user_id={$user_id}")->find();
        $user = M("user")->where("id={$user_id}")->find();
        $service = M("service")->where("type='111555'")->find();
        $info['customerid'] = $user_id;
        $info['applicantname'] = $enterprise['entname'];
        $info['applicantaddress'] = $enterprise['dom'];
        $info['customername'] = $user['linkman'];
        $info['customermobile'] = $user['phone'];
        $info['type'] = '111555';
        $info['addtime'] = time();
        $time = date("YmdHis");
        $info['order_no'] = "s".$time.rand(100000,999999);
        $info['official_price'] =  $service['price_large'];
        $info['service_price'] = $service['price_service'];
        //$info['summary_price'] = $service['price_large']+$service['price_service'];
        $info['summary_price'] = bcadd($service['price_large'],$service['price_service'],2);
        $info['one_code'] = $mark['one_code'];
        $key = M("zcorder_copy")->add($info);
        $data['customerid'] = $user_id;
        $data['markid'] =  $markid;
        $data['orderid'] =  $key;
        $data['quer_no'] =   $info['order_no'].'-'.'1';;
        $data['one_code'] =  $mark['uniontypecode'];
        $data['three_code'] =  $mark['typedetaildes'];
        $data['one_id'] =  $mark['one_code'];
        $data['three_id'] =  $mark['registetype'];
        $data['markname'] =  $mark['markname'];
        $data['type'] =  $info['type'];
        $data['markimage'] = $mark['marklogo'];
        $data['official_price'] =  $service['price_large'];
        $data['service_price'] =  $service['price_service'];
        M("zcorder_copy_copy")->add($data);
        $new['markid'] = $markid;
        $new['orderid'] = $key;
        M("zcorder_detail")->add($new);
        exit('<script>top.location.href="index.php?g=Portal&m=brand&a=brand_register_show&key='.$key.'"</script>');
    }
    /*
     *  资料下载
     * */
    function ziliaoxiazai(){
        $orderid = I('post.orderid');
        $arr = M("zcorder_copy")->where("orderid = {$orderid}")->find();
        if($arr['type']=='111333'){
        $file = M("moban")->where("type = '111333'")->select();
            echo json_encode($file);
        }
        if($arr['type']=='111222'){
            $file = M("moban")->where("type = '111222'")->select();
            echo json_encode($file);
        }
    }
    function baocin(){
        $id = I('get.id');
        $file = M("moban")->where("id = {$id}")->find();
        $file_name=$file['url'];//需要下载的文件
        $file_name=iconv("utf-8","GB2312//IGNORE","$file_name");
        $fp=fopen($file_name,"r+");//下载文件必须先要将文件打开，写入内存
        if(!file_exists($file_name)){//判断文件是否存在
            echo "文件不存在";         //如果不存在
            exit();                              //直接退出
        }                                         //如果存在，继续执行下载
        $file_size=filesize($file_name);//判断文件大小
        Header("Content-type: application/octet-stream");
        Header("Accept-Ranges: bytes");
        Header("Accept-Length: ".$file_size);
        Header("Content-Disposition: attachment; filename=".$file['name']);
        $buffer=1024;
        while(!feof($fp)){
            $file_data=fread($fp,$buffer);
            echo $file_data;
        }
        fclose($fp);
    }
    /*
     *  批量下载
     */
    function addxiazai(){
        $id = I('get.type');
        $orderid = I('get.orderid');
        $file = M("moban")->where("type = {$id}")->select();
        $count = count($file);
        if($count == '1'){
            $this->redirect('Wordpdf/shangbiaozhuceweituo', array('orderid' =>$orderid));
        }
        /* $handler=opendir("./Public/moban"); //打开当前文件夹由$path指定。
                while(($filename=readdir($handler))!==false){
                    if($filename != "." &amp;&amp; $filename != ".."){//文件夹文件名字为'.'和‘..’，不要对他们进行操作
                        if(is_dir($path."/".$filename)){// 如果读取的某个对象是文件夹，则递归
                            addFileToZip($path."/".$filename, $zip);
                        }else{ //将文件加入zip对象
                            $zip->addFile($path."/".$filename);
                        }
                    }
            }
                @closedir($path);
            }
        $zip=new \ZipArchive();
        if($zip->open('images.zip', ZipArchive::OVERWRITE)=== TRUE){
        addFileToZip('images/', $zip); //调用方法，对要打包的根目录进行操作，并将ZipArchive的对象传递给方法
        $zip->close(); //关闭处理的zip文件*/
    }
    //提交注册弹出
    function state_info(){
        $id = I('post.id');
        $arr = M("mark_state_order")->where("moid = {$id} and state='3'")->find();
        echo json_encode($arr);
    }
    //手里通知弹出
    function state_info2(){
        $id = I('post.id');
        $arr = M("mark_state_order")->where("moid = {$id} and state='4'")->find();
        echo json_encode($arr);
    }
    //通过实质审查
    function state_info3(){
        $id = I('post.id');
        $arr = M("mark_state_order")->where("moid = {$id} and state='6'")->find();
        $arr['num'] = date('m',strtotime($arr['enddate']))-date('m',strtotime($arr['begindate']));
        $arr['enddate'] = date('Y年m月d日',strtotime($arr['enddate']));
        $arr['begindate'] = date('Y年m月d日',strtotime($arr['begindate']));
        echo json_encode($arr);
    }
    //收到注册正
    function state_info4(){
        $id = I('post.id');
        $arr = M("mark_state_order")->where("moid = {$id} and state='8'")->find();
        echo json_encode($arr);
    }
    //收到注册正
    function state_info5(){
        $id = I('post.id');
        $arr = M("mark_state_order")->where("moid = {$id} and state='9'")->find();
        echo json_encode($arr);
    }
    //成功
    function state_info6(){
        $id = I('post.id');
        $arr = M("mark_state_order")->where("moid = {$id} and state='10'")->find();
        echo json_encode($arr);
    }

}