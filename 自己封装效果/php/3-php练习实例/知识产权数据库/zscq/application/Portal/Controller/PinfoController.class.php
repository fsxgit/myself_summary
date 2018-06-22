<?php
/**
 * 获取个人信息   手机邮箱头像修改与绑定
 */
namespace Portal\Controller;
use Common\Controller\HomebaseController; 
class PinfoController extends HomebaseController {
    
    //个人中心主页
    public function index(){
        if(empty($_COOKIE['code'])){
            //$this->success("请登录",U("Portal/register/index"));
            redirect(U("Portal/register/index"));
            exit;
        }else{
            $zsid = $_COOKIE['zsid'];
            $users_model = M("user");
            $result = $users_model->where("id=$zsid")->find();
            if($result['isclaimed'] == 1){
                $this->assign("res",$result);
                $this->display("perCenter");
            }else{
                $this->assign("res",$result);
                $this->display("perCenter");
            }
        }
    }
 /*
  *   消息通知列表
  * */
    function xiaoxilst(){
        $this->display();
    }

    //调用公共方法的私有化的方法
    private function ceshi($sid,$data){
	$rs = request_api_xlb($sid,$data);//接口请求
	return $rs;
    }
    private function ceshi1($sid,$data){
	$rs = request_api_xlb($sid,$data);//接口请求
    }
        
    public function telcode(){
        $tel = I("tel");
        $data = array(phone => $tel);
        $this->ceshi(1513,$data);
    }
    
    //绑定个人邮箱 1524
    public function ckemail(){
        $this->display("perCenter-email");
    }
    public function bdemail(){
        $code = I("code");
        if(!self::check_verify($code)){  
            echo 0;
            exit;
        }else{
            $id = $_COOKIE['zsid'];
            $email = I('email');
            $data = array(email=>$email,token=>$_COOKIE['code']);
            $arrinfo = $this->ceshi(1524,$data);
            json_decode($arrinfo);
            if($arrinfo['RESULT']['result']['code'] == 0){
                //等于0是修改成功
                $datainfo = array(
                    'email' =>$email
                );
                $users_model = M("user");
                $users_model->where(array('id' => $id))->save($datainfo);
                echo 1;
                exit;
            }else{
                echo $arrinfo['RESULT']['result']['msg'];
                exit;
            }
        }
    }
    
    //修改绑定手机号 1526
    public function cktel(){
        $id = $_COOKIE['zsid'];
        $users_model = M("user");
        $result = $users_model->where("id = $id")->find();
        $this->assign("res",$result);
        $this->display("xiugaibangding");
    }
    public function uptel(){
        $id = $_COOKIE['zsid'];
        $oldPhone = I('oldtel');
        $oldcode = I('oldcode');
        $newPhone = I('newtel');
        $newCode = I('newcode');
        
        $data = array(oldPhone=>$oldPhone,oldCode=>$oldcode,newPhone=>$newPhone,newCode=>$newCode,token=>$_COOKIE['code']);
        $arrinfo = $this->ceshi(1526,$data);
        json_decode($arrinfo);
        if($arrinfo['RESULT']['result']['code'] == 0){
            //等于0是修改成功
            $datainfo = array(
                    'phone' =>$newPhone
                );
            $users_model = M("user");
            $users_model->where(array('id' => $id))->save($datainfo);
            echo 1;
            exit;
        }else{
            echo $arrinfo['RESULT']['result']['msg'];
            exit;
        }
    }
    
    

    //用户每次修改手机号 或者邮箱之后做表修改操作
    private function upuser(){
        $data = array(token=>$_COOKIE['code']);
        $arrinfo = $this->ceshi(1522,$data);
        $datainfo = array(
            'id' =>$arrinfo['RESULT']['result']['id'],
            'imgPath' =>$arrinfo['RESULT']['result']['imgPath'],
            'loginName' =>$arrinfo['RESULT']['result']['loginName'],
            'phone' =>$arrinfo['RESULT']['result']['phone'],
            'email' =>$arrinfo['RESULT']['result']['email'],
            'kyjf' =>$arrinfo['RESULT']['result']['kyjf'],
            'djjf' =>$arrinfo['RESULT']['result']['djjf'],
            'lsdjjf' =>$arrinfo['RESULT']['result']['lsdjjf'],
            'ljxfjf' =>$arrinfo['RESULT']['result']['ljxfjf'],
            'companyName' =>$arrinfo['RESULT']['result']['companyName'],
            'linkMan' =>$arrinfo['RESULT']['result']['linkMan'],
            'isClaimed' =>$arrinfo['RESULT']['result']['isClaimed'],
        );
        $users_model = M("user");
        $result = $users_model->where($arrinfo['RESULT']['result']['id'])->count();
        if($result){
            $users_model->save($datainfo);
        }else{
            echo "信息表里没有这个用户的ID";
        }
    }
    
    //CK验证码
    public function check_verify($code, $id = ''){
        $verify = new \Think\Verify();
        return $verify->check($code, $id);       
    }
    
    //修改密码    系列方法1-6
    public function uppass1(){
        $this->display("find-pass1");
    }
    
    public function uppass2(){
        $code = I("code");
        if(!self::check_verify($code)){
            //验证码不正确
            echo 0;
            exit;
        }else{
            $tel = I('tel');
            $users_model = M("user");
            $result = $users_model->where("loginName=$tel")->count();
            if($result){
                //有这个手机号
                echo 1;
                exit;
            }else{
                //没有这个手机号
                echo 2;
                exit;
            }
        }
    }
    
    public function telcode1(){
        $tel = I("tel");
        if(empty($tel)){
            echo 100;
            exit;
        }else{
            $users_model = M("user");
            $result = $users_model->where("loginName=$tel")->count();
            if($result){
                $data = array(phone => $tel);
                $this->ceshi1(1513,$data);
                exit;
            }else{
                echo 222;
                exit;
            }
        }
    }
        public function uppass3(){
            $this->display("find-pass2");
        }
        public function uppass4(){
            $user = I('user');
            $telcode = I('telcode');
            setcookie("zhuser",$user);
            setcookie("zhtelcode",$telcode);
            $this->display("find-pass3");
        }
        
        public function uppass5(){
            $pwd = I('newpass');
            $phone = $_COOKIE['zhuser'];
            $code = $_COOKIE['zhtelcode'];
            $data = array(
                phone=>$phone,
                pwd=>md5($pwd),
                code=>$code
            );
            $arrinfo = $this->ceshi(1516,$data);
            print_r($arrinfo);
            exit;
            if($arrinfo['RESULT']['result']['code'] == 0){
                //找回成功
                echo 1;
                exit;
            }else{
                //找回失败
                echo 2;
                exit;
            }
        }
        public function uppass6 (){
                $this->display("find-pass4");
        }
        
        
        
        
        //
        public function wangjipass(){
            $this->display("perCenter-xgpass");
        }
        
        public function wangjipass1(){
            $oldpass = I('oldpass');
            $newpass = I('newpass');
            $code = $_COOKIE['code'];
            $data = array(token => $code,oldPwd => md5($oldpass),newPwd => md5($newpass));
            $arrinfo = $this->ceshi(1525,$data);
            if($arrinfo['RESULT']['result']['code'] ==  0){
                echo 1;
                exit;
            }else{
                echo $arrinfo['RESULT']['result']['msg'];
                exit;
            }
        }
        public function wangjipass2(){
                $this->display("perCenter-cel1");
            
        }
        
        public function uppass7(){
            setcookie("code", '');
            setcookie("zsid", '');
            echo("<script language='javascript'>window.top.location.href='index.php?g=Portal&m=Register&a=index'</script>");
            exit;
        }
        public function shishi(){
            $data = array(
                token => $_COOKIE['code']
            );
            $info = $this->ceshi(1560,$data);
            print_r($info);
            exit;
            for($i=0;$i<count($info['RESULT']['result']['data']);$i++){
                $array1[] = $info['RESULT']['result']['data'][$i]['notReadCount'];
            }
            var_dump(array_sum($array1));
        }
        
        //E42设定联系人 1558
        public function lianxiren(){
            $zsid = $_COOKIE['zsid'];
            $token = $_COOKIE['code'];
            $users_model = M("user");
            $result = $users_model->where("id=$zsid")->find();
            $this->assign("result",$result);
            $this->display("lianxiren");
        }
        public function lianxiren1(){
            $zsid = $_COOKIE['zsid'];
            $lianxi = I('lianxi');
            $dizhi = I('dizhi');
            M('user')->where(array('id'=>$zsid))->setField('linkMan',$lianxi);
            M('user')->where(array('id'=>$zsid))->setField('address',$dizhi);
            $data = array(
                token => $_COOKIE['code'],
                name => $lianxi
                );
            $this->ceshi(1558,$data);
            $resu =  M('user')->where(array('id'=>$zsid))->find();
            if($resu['linkman'] == $lianxi){
                echo 1;
                exit;
            }else{
                echo 2;
                exit;
            }
        }

        //消息通知
        public function xiaoxitz(){
            $this->display("xiaoxilst");
        }
        
        //测试用
        public function info111(){
            $data = array(token => $_COOKIE['code']);
            $a = $this->ceshi(1522,$data);
            print_r($a);
            exit;
        }
        
        //判断安全的等级
        public function anquan(){
            $token = $_['code'];
            $data = array(token => $_COOKIE['code']);
            $arrinfo = $this->ceshi(1522,$data);
            if($arrinfo['RESULT']['result']['safetyLevel'] == "低级"){
                $safetyLevel = 1;
            }else if($arrinfo['RESULT']['result']['safetyLevel'] == "中级"){
                $safetyLevel = 2;
            }else if($arrinfo['RESULT']['result']['safetyLevel'] == "高级"){
                $safetyLevel = 3;
            }
            $datainfo = array(
                'id' =>$arrinfo['RESULT']['result']['id'],
                'imgPath' =>$arrinfo['RESULT']['result']['imgPath'],
                'loginName' =>$arrinfo['RESULT']['result']['loginName'],
                'phone' =>$arrinfo['RESULT']['result']['phone'],
                'email' =>$arrinfo['RESULT']['result']['email'],
                'kyjf' =>$arrinfo['RESULT']['result']['kyjf'],
                'djjf' =>$arrinfo['RESULT']['result']['djjf'],
                'lsdjjf' =>$arrinfo['RESULT']['result']['lsdjjf'],
                'ljxfjf' =>$arrinfo['RESULT']['result']['ljxfjf'],
                'companyName' =>$arrinfo['RESULT']['result']['companyName'],
                'emailBindFlag' =>$arrinfo['RESULT']['result']['emailBindFlag'],
                'phoneBindFlag' =>$arrinfo['RESULT']['result']['phoneBindFlag'],
                'safetyLevel' =>$safetyLevel,
           //   'linkMan' =>$arrinfo['RESULT']['result']['linkMan'],
           //   'isClaimed' =>$arrinfo['RESULT']['result']['isClaimed'],
            );
            $users_model = M("user");
            $users_model->save($datainfo);
            $this->index();
        }
        //企业详情
    public function xq_qiye(){
    //    $url = $_SERVER["REQUEST_URI"];
    //    setcookie("url",$url,time()+3600*24);
		$ty = I("ty");
                $ty = 1;
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
 //       var_dump($rs["data"]);

		$start_time = $rs["data"]["esdate"];
		$end_time = '2016-01';
		//下面计算出的是秒
		$time = strtotime($end_time )-strtotime($start_time);
		$years = floor($time/31556926);


        $rs["data"]["esdate"] = str_replace("-", ".",$rs["data"]["esdate"]);
      



        $arr = request_api_xt('api/findTrademarkList.do',$ar);//商标信息
		$gudong = request_api_xt('api/enterprise/getShareHolderInfo.do',$array);//股东信息
		$per = request_api_xt('api/enterprise/findEnterpriseMainManagerList.do',$array);//管理人员
   //     var_dump($arr["data"]);die;
   $uid = $_COOKIE["zsid"];
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
			$c1 = count($new_arr);
		$c2 = count($new_arr2);
		$this->assign("c1",$c1);
		$this->assign("c2",$c2);
        $cou = $arr["data"]["totalSize"];//总条数
  //      echo $cou;
        $totalpage = ceil($cou/$pageSize);

        $page = $this->page($cou,$pageSize);
		$this->assign("pers",$per["data"]);
		$this->assign("gudong",$gudong["data"]);
        $this->assign("rs",$rs["data"]);
        $this->assign("name",$name);
		$this->assign("year",$years);
        $this->assign('arr1',$arr["data"]["data"]);
        $this->assign("count",$cou);
        $this->assign("totalpage",$totalpage);
        $this->assign("page",$page->show());
		if($ty){
			$this->display("qiye_detail2");
		}else{
			 $this->display();
		}
       
    }
}