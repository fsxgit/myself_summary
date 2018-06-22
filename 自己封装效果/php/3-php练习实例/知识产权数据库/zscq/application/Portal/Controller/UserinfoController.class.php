<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>
// +----------------------------------------------------------------------
/**
 * 搜索结果页面
 */
namespace Portal\Controller;
use Common\Controller\CommonController;
header("content-type:text/html;charset=utf-8");
class UserinfoController extends CommonController {
    public function index() {
		$business_name = I("business_name");
        $zsid = $_COOKIE['zsid'];
        $information_model = M("information");
        $sum = $information_model->where("userid = $zsid and state = 0")->count();
        $type = I('get.type');
        $users_model = M("user");
        $result = $users_model->where("id = $zsid")->find();
		
        $this->assign($result);
		$this->assign("business_name",$business_name);
        $this->assign("sum",$sum);
        $this->assign('type',$type);
    	$this->display("index");
    }
    public function top() {
        $data = array(token => $_COOKIE['code']);
        $info = $this->ceshi(1563,$data);
        for($i=0;$i<count($info['RESULT']['result']['data']);$i++){
            $array1[] = $info['RESULT']['result']['data'][$i]['notReadCount'];
        }
        $count = array_sum($array1);
        $this->assign("sum",$count);
    	$this->display("header");
    }
	public function left() {
    	 $this->display("left");
    }
	public function right() {
    	 $this->display("brand-gk");
    }
	public function sd() {
    	 $this->display("brand-gl-bg");
    }
	/**
	*  商标概况
	*/
    function trademark_gk(){
        $zsid = $_COOKIE['zsid'];//
        $users_model = M("user");
        $result = $users_model->where("id = $zsid")->find();
        if($result['isclaimed'] == 1){
            $mark_model = M("mark");
            //所有
            $count = $mark_model->where("customerid = $zsid")->count();
            //成功
            $cgcount = $mark_model->where("customerid = $zsid and markstate=0")->count();
            //注册中
            $zzcount = $mark_model->where("customerid = $zsid and markstate=1")->count();
            //注册失败
            $sbcount = $mark_model->where("customerid = $zsid and markstate=2")->count();
            //无效
            $wxcount = $mark_model->where("customerid = $zsid and markstate=3")->count();
            //所有
            $this->assign("count",$count);
            //成功
            $this->assign("cgcount",$cgcount);
            //注册中
            $this->assign("zzcount",$zzcount);
            //注册失败
            $this->assign("sbcount",$sbcount);
            //无效的
            $this->assign("wxcount",$wxcount);
        }
        //顾问
        $adviser_model = M("adviser");
        $guwen = $adviser_model->where("customerid = $zsid")->find();
        $this->assign("guwen",$guwen);
        $this->assign("res",$result);
        $this->display("brand_gk");
    }
    
    //文件上传
    public function upload(){
        $zsid = $_COOKIE['zsid'];
        $type = 1;
        $leixing = I('leixing');
        $markid = I('markid');
        $upload = new \Think\Upload();// 实例化上传类
        //$upload->maxSize   =     3145728 ;// 设置附件上传大小
        //$upload->exts      =     array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
        $upload->rootPath  =      './Uploads/'; // 设置附件上传根目录
        $upload->saveName = time().rand(10000, 99999);
        //$upload->savePath  =      ''; // 设置附件上传（子）目录
        // 上传文件 
        $info   =   $upload->uploadOne($_FILES['myfile']);
        if(!$info) {// 上传错误提示错误信息
            $this->error($upload->getError());
        }else{// 上传成功 获取上传文件信息
            $users_model = M("adviser");
            $zsid = 662253;
            $result = $users_model->where("customerid=$zsid")->find();
            $datainfo = array(
                'userid' =>$zsid,
                'aid' =>$result['consultantid'],
                'type' =>$type,
                'leixing' =>$leixing,
                'filename' =>$info['name'],
                'url' =>"http://zscq.zai0312.com//Uploads/".$info['savename'],
                'size' =>$info['size'],
                'add_time' =>time(),
                'markid' =>$markid
                //'filename_ad' =>$info['savename']
            );
            $file = M("file");
            $file->add($datainfo);
            //echo("<script language='javascript'>window.top.location.href='index.php?g=portal&m=brand&a=brand_detail&id=$markid'</script>");
            redirect(U("Portal/brand/brand_detail?id=$markid"));
        }
    }
        //商标概括的搜索
    public function search_input(){
        $this->display("search_input");
    }
	//调用公共的接口
	private function ceshi($sid,$data){
            $rs = request_api_xlb($sid,$data);//接口请求
            return $rs;
        }

	//优惠劵
	public function yhjuan(){
            $token = $_COOKIE['code'];
            $type = I('type');

            //类型(0未使用;1已使用;2已过期)
            if($type == 0){
                $data = array(token => $token,pageSize => 10,pageNumber => 0,tab =>$type);
                $res = $this->ceshi(1520,$data);
                $res['RESULT']['result']['list'] = 1;
                if($res['RESULT']['result']['list'] == ""){
                    $this->display("youhuiquan_wu");
                }else{
                    $arr = array(id=>1,amount=>0,name=>'鬼知道',conditions=>1,startDate=>1,endDate=>2,shopType=>0,goods=>0,goodsTypes=>'我TM哪知道');
                    $this->assign("arr",$arr);
                    $this->display("youhuiquan");
                }
            }else if($type == 1){
                $data = array(token => $token,pageSize => 10,pageNumber => 0,tab =>$type);
                $res = $this->ceshi(1520,$data);
                $res['RESULT']['result']['list'] = 1;
                if($res['RESULT']['result']['list'] == ""){
                    $this->display("youhuiquan_wu");
                }else{
                    $arr = array(id=>1,amount=>1,name=>'鬼知道',conditions=>1,startDate=>1,endDate=>2,shopType=>0,goods=>0,goodsTypes=>'我TM哪知道');
                    $this->assign("arr",$arr);
                    $this->display("youhuiquan1");
                }
            }else if($type == 2){
                $data = array(token => $token,pageSize => 10,pageNumber => 0,tab =>$type);
                $res = $this->ceshi(1520,$data);
                $res['RESULT']['result']['list'] = 1;
                if($res['RESULT']['result']['list'] == ""){
                    $this->display("youhuiquan_wu");
                }else{
                    $arr = array(id=>1,amount=>2,name=>'鬼知道',conditions=>1,startDate=>1,endDate=>2,shopType=>0,goods=>0,goodsTypes=>'我TM哪知道');
                    $this->assign("arr",$arr);
                    $this->display("youhuiquan2");
                }
            }
	}
        
        //商标检测
        public function jiance(){
            $id = $_COOKIE['zsid'];
        //    $id = 662357;
            $users_model = M("mark");
            $result = $users_model->where("customerid = $id and markcode_key!=''")->select();
            //echo "<pre>";print_r($result);
            $time = 60*60*24*365;
            foreach($result as $k=>$v){
                if(strtotime($v["enddate"]) - time() < $time){
                    $new_arr[$k] = $result[$k];
                    //echo 1;
                }
            }
            if(empty($new_arr)){
                $this->display("jiance_wu");
            }else{
                $this->assign("arr",$new_arr);
                $this->display("jiance");
            }
            //echo "<pre>";print_r($new_arr);
        }

//搜索页
    public function search(){
    //    var_dump($_POST);
	
        $name = I("business_name");
        $money = I("money");
        $year = I("year");
        if($money!=""){
           
        }if($year!=""){
            
        }
        $time_start = self::getmicrotime();
        $arr = array('entName'=>$name);
		$rs = request_api_xt('api/findEnterpriseList.do',$arr);
  //      var_dump($rs);
        $time_end = self::getmicrotime();//结束计时, 放在尾部 
        $time = $time_end - $time_start; 
        $t = number_format($time,5);
        $count = count($rs["data"]);
        foreach($rs["data"] as $k=>$v){
            $n = $v["ENTNAME"];
            $ar = array('entName'=>$n);
            $r = request_api_xt('api/findEnterpersInfo.do',$ar);
            $arr = request_api_xt('api/findTrademarkList.do',$ar);//商标信息
            $c = $arr['data']["totalSize"];
            
            $rs["data"][$k]["frdb"] = $r["data"]["frdb"];//法定代表人
            $rs["data"][$k]["regcap"] = $r["data"]["regcap"];//注册资本
            $rs["data"][$k]["dom"] = $r["data"]["dom"];//企业地址
            $rs["data"][$k]["esdate"] = $r["data"]["esdate"];//成了日期
            $rs["data"][$k]["shangbiao"] = $c;//商标
        }
    //    var_dump($rs["data"]);die;
        $this->assign("time",$t);
        $this->assign("name",$name);
  //      $this->assign("year",$year);
  //      $this->assign("money",$money);
        $this->assign("count",$count);
	//	var_dump($rs);
		if($rs["data"]){
			$this->assign("re",$rs["data"]);
			$this->display("search2");
		}else{
			$this->display("search-wu2");
		}

    }
    //搜索页
    public function search1(){
        $name = I("business_name");
        $money = I("money");
        $year = I("year");
        if($money!=""){

        }if($year!=""){

        }
        $time_start = self::getmicrotime();
        $arr = array('entName'=>$name);
        $rs = request_api_xt('api/findEnterpriseList.do',$arr);
        //      var_dump($rs);
        $time_end = self::getmicrotime();//结束计时, 放在尾部
        $time = $time_end - $time_start;
        $t = number_format($time,5);
        $count = count($rs["data"]);
        foreach($rs["data"] as $k=>$v){
            $n = $v["ENTNAME"];
            $ar = array('entName'=>$n);
            $r = request_api_xt('api/findEnterpersInfo.do',$ar);
            $arr = request_api_xt('api/findTrademarkList.do',$ar);//商标信息
            $c = $arr['data']["totalSize"];

            $rs["data"][$k]["frdb"] = $r["data"]["frdb"];//法定代表人
            $rs["data"][$k]["regcap"] = $r["data"]["regcap"];//注册资本
            $rs["data"][$k]["dom"] = $r["data"]["dom"];//企业地址
            $rs["data"][$k]["esdate"] = $r["data"]["esdate"];//成了日期
            $rs["data"][$k]["shangbiao"] = $c;//商标
        }
        //    var_dump($rs["data"]);die;
        $this->assign("time",$t);
        $this->assign("name",$name);
        //      $this->assign("year",$year);
        //      $this->assign("money",$money);
        $this->assign("count",$count);
        //	var_dump($rs);
        if($rs["data"]){
            $this->assign("re",$rs["data"]);
            $this->display("search2");
        }else{
            $this->display("search-wu2");
        }

    }
	function getmicrotime(){ 
        list($usec, $sec) = explode(" ",microtime()); 
        return ((float)$usec + (float)$sec); 
    }
	public function qiye_detail(){
    //    $url = $_SERVER["REQUEST_URI"];
    //    setcookie("url",$url,time()+3600*24);
	$ty = I("ty");
        $name = I("name");
        $names = I("names");
       
		

        $p = I("p");
        if(empty($p)){
             $p=0;
        }else{
			$p = $p-1;
		}
        $pageSize = 10;
  
        $array = array('entName'=>$names);
  
        $ar = array('entName'=>$names,'page'=>$p,'pageSize'=>$pageSize);
		$rs = request_api_xt('api/findEnterpersInfo.do',$array);//企业信息
		$arr = request_api_xt('api/findTrademarkList.do',$ar);//商标信息
		$gudong = request_api_xt('api/enterprise/getShareHolderInfo.do',$ar);//股东信息
		$per = request_api_xt('api/enterprise/findEnterpriseMainManagerList.do',$array);//管理人员
    //    var_dump($per["data"]);

		$start_time = $rs["data"]["esdate"];
		$end_time = '2016-01';
		//下面计算出的是秒
		$time = strtotime($end_time )-strtotime($start_time);
		$years = floor($time/31556926);


        $rs["data"]["esdate"] = str_replace("-", ".",$rs["data"]["esdate"]);
      



        
   //     var_dump($arr["data"]);die;
        $cou = $arr["data"]["totalSize"];//总条数
  //      echo $cou;
        $totalpage = ceil($cou/$pageSize);

        $page = $this->page($cou,$pageSize);
        $this->assign("rs",$rs["data"]);
		$this->assign("pers",$per["data"]);
		$this->assign("gudong",$gudong["data"]);
        $this->assign("name",$name);
		$this->assign("year",$years);
        $this->assign('arr1',$arr["data"]["data"]);
        $this->assign("count",$cou);
        $this->assign("totalpage",$totalpage);
        $this->assign("page",$page->show());
		$uid = $_COOKIE["zsid"];
		$r = M("user")->where("id=$uid")->field("companyname")->find();
		if($names == $r["companyname"]){
			$this->assign("is_ren",1);
			$ma = M("mark")->where("customerid=$uid")->select();

			foreach($ma as $k=>$v){
				//2026-03-20
				$last = strtotime($v["enddate"]) - (3600*24*30*12);//到期时间前一年
				
				if($last < time() && time() < strtotime($v["enddate"])){
                    $new_arr[$k] = $ma[$k];
                }

				$now = strtotime($v["enddate"]); 
				$date_ms = date('Y-m-d',$now+3600*24*30*12/2); //到期时间半年后
				if($now < time() && time() < $now+3600*24*30*12/2){
                    $new_arr2[$k] = $ma[$k];
                }
			}
		}
		$c1 = count($new_arr);
		$c2 = count($new_arr2);
		$this->assign("c1",$c1);
		$this->assign("c2",$c2);
	//	var_dump($new_arr);die;
		if($ty){
			$this->display("qiye_detail2");
		}else{
			 $this->display();
		}
	}
	//判断是否认领
	public function is_renling(){
		if($_COOKIE["zsid"]){
			$zid = $_COOKIE["zsid"];
			$re = M("user")->where("id=$zid")->field("isClaimed,companyName")->find();
	   //     var_dump($re);
			if($re["isclaimed"]==1){
				echo json_encode($re);
			}else{
				echo 0;
			}
		}else{
			echo 2;
		}
	}

    
	//企业认领
    public function qiye_renling2(){
		$name = I("name");//企业
		$names = I("names");//公司
		$arr = array('entName'=>$names);
		$rs = request_api_xt('api/findEnterpersInfo.do',$arr);
//		var_dump($rs);
			
		$zid = $_COOKIE["zsid"];
		$re = M("user")->where("id=$zid")->find();
   //     var_dump($re);
		if($re["isclaimed"]==1){
			$n = $re["companyname"];
			echo "<script>alert('你已经认领了".$re['companyname']."企业');window.history.back(-1);</script>";
		}else{  
			$this->assign("name",$name);
			$this->assign("names",$names);
			$this->assign("rs",$rs["data"]);
			$this->display();
		}
    }
    public function qiye_add(){
		$ty = I("ty");
        $name = I("names");
   
		$id = $_COOKIE["zsid"];


		$arr = array('entName'=>$name);
        $rs = request_api_xt('api/findEnterpersInfo.do',$arr);
		
		//var_dump($rs);die;
        $p=0;
        $pageSize = 10000;
        $ar = array('entName'=>$name,'page'=>$p,'pageSize'=>$pageSize);
        $ls = request_api_xt('api/findTrademarkList.do',$ar);//商标信息
		



        $data["companyName"] = $name;
        $data["isClaimed"] = 1;
        M("user")->where("id=$id")->save($data);

   		$re = M("user")->where("id=$id")->find();
        if($re['adviser']=='0'){
            $dat = array(
                "customerid"=>$re['id'],
                "customername"=>$re['loginname'],
                "customermobile"=>$re['phone'],
                "customerentname"=>$re['companyname']
            );
            //	var_dump($dat);
            $guwen = request_api_xt("intel_property/auto_fenpei_guwen",$dat);
            //var_dump($guwen);die;
            M("adviser")->add($guwen['data']);

            M("user")->where("id = {$re['id']}")->save(array('adviser'=>'1'));

        }
		
        
//		var_dump($gunwen);

   //   var_dump($rs["data"]);
        $d["entname"] = $rs["data"]["entname"];
        $d["regno"] = $rs["data"]["regno"];
        $d["frdb"] = $rs["data"]["frdb"];
        $d["esdate"] = $rs["data"]["esdate"];
        $d["entstatus"] = $rs["data"]["entstatus"];
        $d["regcap"] = $rs["data"]["regcap"];
        $d["enttype"] = $rs["data"]["enttype"];
        $d["dom"] = $rs["data"]["dom"];
        $d["opscope"] = $rs["data"]["opscope"];
        $d["regorg"] = $rs["data"]["regorg"];
        $d["regcapcur"] = $rs["data"]["regcapcur"];
        $d["shxydm"] = $rs["data"]["shxydm"];  
        $d["user_id"] = $id;

		M("enterprise")->add($d);
		

	//	var_dump($ls["data"]["data"]);die;
        foreach($ls["data"]["data"] as $k=>$v){
			unset($ls["data"]["data"][$k]["id"]);
			$ls["data"]["data"][$k]["customerid"] = $_COOKIE["zsid"];
            $ls["data"]["data"][$k]["entnameaddress"] = $rs["data"]["dom"];

			if($v["appdate"]=="0000-00-00" || $v["appdate"]==""){
				$ls["data"]["data"][$k]["appdate"] = null;
			}
			if($v["begindate"]=="0000-00-00" || $v["begindate"]==""){
				$ls["data"]["data"][$k]["begindate"] = null;
			}
			if($v["checkdate"]=="0000-00-00" || $v["checkdate"]==""){
				$ls["data"]["data"][$k]["checkdate"] = null;
			}
			if($v["enddate"]=="0000-00-00" || $v["enddate"]==""){
				$ls["data"]["data"][$k]["enddate"] = null;
			}
			if($v["regdate"]=="0000-00-00" || $v["regdate"]==""){
				$ls["data"]["data"][$k]["regdate"] = null;
			}
		}
		M("mark")->addAll($ls["data"]["data"]);

	


		if($ty){
			echo("<script language='javascript'>window.top.location.href='index.php?g=Portal&m=Userinfo&a=index'</script>");
		}else{
			$this->redirect('Portal/Userinfo/index');
		}
		
    }
}
