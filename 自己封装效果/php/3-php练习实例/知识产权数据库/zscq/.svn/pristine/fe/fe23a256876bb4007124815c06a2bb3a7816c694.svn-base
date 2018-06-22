<?php
/**
 * 一路支付16个接口
 */
namespace Portal\Controller;
use Common\Controller\HomebaseController; 
header("content-type:text/html;charset=utf-8");
class OneroadpayController extends HomebaseController{
	//调用公共方法
	private function ceshi($sid,$data){
            $rs = request_api_xlb($sid,$data);//接口请求
            return $rs;
        }

	//一路财富支付接口秘钥 1800
	private function token(){
            $token = $_COOKIE['code'];
            $data = array(token => $token);
            return $this->ceshi(1800,$data);
	}
        
        //D19 一路财富钱包创建申请 1591
        public function shenqing(){
            $token = $_COOKIE['code'];
            $realName = I('realName');
            $identityNo = I('identityNo');
            $mobileNo = I('mobileNo');
            $bankNo = I('bankNo');
            $bankCardNo = I('bankCardNo');
            $data = array(
                token => $token,
                realName => $realName,
                identityNo => $identityNo,
                mobileNo => $mobileNo,
                bankCardNo => $bankCardNo,
                bankNo => $bankNo
            );
            $arr_info = $this->ceshi(1591,$data);
            if(!empty($arr_info['RESULT']['result']['data']['mobileToken'])){
                setcookie("shenqing",$arr_info['RESULT']['result']['data']['mobileToken']);
            }else{
                //银行卡信息有问题
                echo 2;
                exit;
            }
        }
            public function shenqing2(){
                $code = I('code');
                $pass = I('pass');
                $token = $_COOKIE['code'];
                $mobileToken = $_COOKIE['shenqing'];
                if($mobileToken == ""){
                    //银行卡信息问题
                    echo 2;
                    exit;
                }else{
                    //D20 一路财富钱包创建提交 1592
                    $data = array(
                        token => $token,
                        phoneCode => $code,
                        mobileToken => $mobileToken
                    );
                    $arr_info = $this->ceshi(1592,$data);
                    //判断返回的code 0成功，1失败
                   if($arr_info['RESULT']['result']['code'] == 0){
                       //D16 一路财富支付接口秘钥 1800
                       $datamd = array(
                           token => $token
                       );
                       $arrmd = $this->ceshi(1800,$datamd);
                       require 'simplewind/Lib/Util/JoDES.class.php';
                       $Des = new \JoDES();
                       $q = $Des->encode($pass,$arrmd['RESULT']['result']['payToken']);
                       //D24 一路财富设置交易密码 1596
                       $data = array(
                            token => $token,
                            tranPassword => $q
                        );
                       $arr_info = $this->ceshi(1596,$data);
                       if($arr_info['RESULT']['result']['code'] == 0){
                           //创建成功跳转到什么地方
                           echo 1;
                           exit;
                       }else{
                           //密码设置失败
                           echo 4;
                           exit;
                       }
                   }else{
                       //开通失败
                       echo 3;
                       exit;
                   }
                }
            }
            
        //我的钱包
        function qianbao(){
            
            $token = $_COOKIE['code'];
            //D18 一路财富用户银行卡列表 1590
            $kalistdata = array(
                token => $token,
            );
            $kalist = $this->ceshi(1590,$kalistdata);
            if(!empty($kalist['RESULT']['result']['data']['accountList'])){
                //D21 一路财富钱包余额 1593
                $yuedata = array(
                    token => $token,
                );
                //钱包余额
                $yue = $this->ceshi(1593,$yuedata);
                //D28 一路财富用户交易记录 1556
                $jiludata = array(
                    token => $token,
                    startDate =>"",
                    endDate => ""
                );
                $jilulist = $this->ceshi(1556,$jiludata);
                $this->assign("jilulist",$jilulist['RESULT']['result']['data']['transferRecord']);
                $this->assign("yue",$yue['RESULT']['result']['data']['wealth']);
                $this->assign("kalist",$kalist['RESULT']['result']['data']['accountList']);
                $this->display("my_qianbao");
            }else{
                $this->display("my-qianbao-hy");
            }
        }

        //D17 一路财富银行卡列表 1589
        public function roadlist(){
            $token = $_COOKIE['code'];
            $data = array(token => $token);
            $arr_info = $this->ceshi(1589,$data);
            //支持的银行卡
            $arr_list = $arr_info['RESULT']['result']['bankList'];
            $this->assign("arrlist",$arr_list);
            $this->display("my_qianbao_kt");
        }
        
        //D22 一路财富钱包充值 1594
        public function chongzhi(){
            $this->display("my-qianbao-cz1");
        }
        public function chongzhi1(){
            $amount = I('money');
            $token = $_COOKIE['code'];
            $id = $_COOKIE['zsid'];
            $custOrderNo = $id.time();
            $time = date("Y-m-d H:i:s",time());
            //用户的银行卡列表1590
            $kalistdata = array(
                token => $token,
            );
            $kalist = $this->ceshi(1590,$kalistdata);
            $this->assign("kalist",$kalist['RESULT']['result']['data']['accountList']);
            $this->assign("amount",$amount);
            $this->assign("custOrderNo",$custOrderNo);
            $this->assign("time",$time);
            $this->display("my-qianbao-cz2");
        }
        public function chongzhi2(){
            $token = $_COOKIE['code'];
            $amount = I('amount');
            $custOrderNo = I('custOrderNo');
            $tranPassword = I('tranPassword');
            $bankCardNo = I('bankCardNo');
            $datamd = array(
                token => $token,
            );
            $arrmd = $this->ceshi(1800,$datamd);
            require 'simplewind/Lib/Util/JoDES.class.php';
            $Des = new \JoDES();
            $pass = $Des->encode($tranPassword,$arrmd['RESULT']['result']['payToken']);
            ////D22 一路财富钱包充值 1594
            $data = array(
                token => $token,
                amount => $amount,
                custOrderNo => $custOrderNo,
                tranPassword => $pass,
                bankCardNo => $bankCardNo
            );
            $arr_info = $this->ceshi(1594,$data);
            if($arr_info['RESULT']['result']['code'] == 0){
                //重置成功的跳转
                echo 1;
                exit;
            }else{
                //重置失败的跳转
                echo 2;
                exit;
            }
        }
        //充值成功跳转
        public function chongzhi3(){
            $this->display("my-qianbao-cz3");
        }
        //充值失败跳转
        public function chongzhi4(){
            $this->display("my-qianbao-cz4");
        }


        //D23 一路财富钱包提现 1595
        public function tixian(){
            $token = $_COOKIE['code'];
            //D21 一路财富钱包余额 1593
            $yuedata = array(
                token => $token,
            );
            //钱包余额
            $yue = $this->ceshi(1593,$yuedata);
            //D18 一路财富用户银行卡列表 1590
            $kalistdata = array(
                token => $token,
            );
            $kalist = $this->ceshi(1590,$kalistdata);
            $this->assign("yue",$yue['RESULT']['result']['data']['wealth']);
            $this->assign("kalist",$kalist['RESULT']['result']['data']['accountList']);
            $this->display("my-qianbao-tx");
        }
        public function tixian1(){
            $amount = I('amount');
            $bankCardNo = I('bankCardNo');
            $this->assign("amount",$amount);
            $this->assign("bankCardNo",$bankCardNo);
            $this->display("my-qianbao-tx2");
        }
        public function tixian2(){
            $token = $_COOKIE['code'];
            $amount = I('amount');
            $custOrderNo = $_COOKIE['zsid'].time();
            $tranPassword = I('tranPassword');
            $bankCardNo = I('bankCardNo');
            $datamd = array(
                token => $token,
            );
            $arrmd = $this->ceshi(1800,$datamd);
            require 'simplewind/Lib/Util/JoDES.class.php';
            $Des = new \JoDES();
            $pass = $Des->encode($tranPassword,$arrmd['RESULT']['result']['payToken']);
            //D23 一路财富钱包提现 1595
            $data = array(
                token => $token,
                amount => $amount,
                custOrderNo => $custOrderNo,
                tranPassword => $pass,
                bankCardNo => $bankCardNo
            );
            $arr_info = $this->ceshi(1595,$data);
            if($arr_info['RESULT']['result']['code'] == 0){
                //提现成功
                echo 1;
                exit;
            }else{
                //提现失败
                echo 2;
                exit;
            }
        }
        
        //D25 一路财富钱包重置密码第一步 1597
        public function czpass(){
            $this->display("find-pass1");
        }
        
        public function czpass1(){
            $token = $_COOKIE['code'];
            $realName = I('realName');
            $identityNo = I('identityNo');
            $mobileNo = I('mobileNo');
            ////D25 一路财富钱包重置密码第一步 1597
            $data = array(
                token => $token,
                realName => $realName,
                identityNo => $identityNo,
                mobileNo => $mobileNo
            );
            $arr_info = $this->ceshi(1597,$data);
            setcookie("czpass",$arr_info['RESULT']['result']['data']['mobileToken']);
        }
        
        //D26 一路财富钱包重置密码第二步 1598
        public function czpass2(){
            $token = $_COOKIE['code'];
            $czpass = $_COOKIE['czpass'];
            $code = I('code');
            $data = array(
                token => $token,
                phoneCode => $code,
                mobileToken => $czpass
            );
            $arr_info = $this->ceshi(1598,$data);
            if($arr_info['RESULT']['result']['code'] == 0){
                //可以跳转进入到下一个页面
                echo 1;
                exit;
            }else{
                //提示失败就行
                echo 2;
                exit;
            }
        }
        
        //D27 一路财富钱包重置密码第三步 1599
        public function czpass3(){
            $this->display("find-pass2");
        }
        public function czpass4(){
            $pass = I('pass');
            $token = $_COOKIE['code'];
            //D16 一路财富支付接口秘钥 1800
            $datamd = array(
                token => $token,
            );
            $arrmd = $this->ceshi(1800,$datamd);
            require 'simplewind/Lib/Util/JoDES.class.php';
            $Des = new \JoDES();
            $q = $Des->encode($pass,$arrmd['RESULT']['result']['payToken']);
            //D24 一路财富设置交易密码 1596
            $data = array(
                token => $token,
                tranPassword => $q
            );
            $arr_info = $this->ceshi(1599,$data);
            if($arr_info['RESULT']['result']['code'] == 0){
                echo 1;
                exit;
            }else{
                echo 2;
                exit;
            }
        }
        public function czpass5(){
            $this->display("find-pass3");
        }

    function shoupay1(){
        $orderid = I('orderid');
        exit('<script>top.location.href="index.php?g=Portal&m=Oneroadpay&a=shoupay&orderid='.$orderid.'"</script>');
    }
        /*
         *  收银台支付页面
        */
        function shoupay(){
            $orderid = I('orderid');
            $token = $_COOKIE['code'];
            //D18 一路财富用户银行卡列表 1590
            $kalistdata = array(
                token => $token,
            );
            $kalist = $this->ceshi(1590,$kalistdata);
            //D21 一路财富钱包余额 1593
            $yuedata = array(
                token => $token,
            );
            //钱包余额
            $yue = $this->ceshi(1593,$yuedata);
            $arr = M("zcorder_copy")->where("orderid = {$orderid}")->find();
            $this->assign("arr",$arr);
            $this->assign("yue",$yue['RESULT']['result']['data']['wealth']);
            $this->assign("kalist",$kalist['RESULT']['result']['data']['accountList']);
            $this->display("shoyintai");
	}
        
        //D15 一路财富支付接口 1587
        public function oneroad(){
            $token = $_COOKIE['code'];
            $totalOrdersNo = I('totalOrdersNo');
            $tranPassword = I('tranPassword');
            $bankCardNo = I('bankCardNo');
            //支付类型   0 是余额   1是银行卡
            $payType = I('payType');
            $amount = I('amount');
            $totalOrdersNo = 's20160918144514417533';
            $amount = 0.1;
            //D16 一路财富支付接口秘钥 1800
            $datamd = array(
                token => $token
            );
            $arrmd = $this->ceshi(1800,$datamd);
            require 'simplewind/Lib/Util/JoDES.class.php';
            $Des = new \JoDES();
            $q = $Des->encode($tranPassword,$arrmd['RESULT']['result']['payToken']);
            $data = array(
                token => $token,
                totalOrdersNo => $totalOrdersNo,
                tranPassword => $q,
                bankCardNo => $bankCardNo,
                payType => $payType,
                amount =>$amount
            );
            $arr_info = $this->ceshi(1819,$data);
            if($arr_info['RESULT']['result']['amount'] == $amount){
                $this->payorder($totalOrdersNo);
            }else{
                //支付失败
                echo 2;
                exit;
            }
        }
        
        public function shibai(){
            $this->display("shoyintai-shibai");
        }






        /**
		*  支付订单
		*/
		function payorder(){
			$orderid = I('orderid');
			$arr = M("zcorder_copy")->where("orderid = {$orderid}")->find();
			M("zcorder_copy")->where("orderid = {$orderid}")->save(array('state'=>'1','actual_price'=>$arr['summary_price'],'paytime'=>time()));
            M("zcorder_copy_copy")->where("orderid = {$orderid}")->save(array('state'=>'0'));
            if($arr['type']=='111222'){//注册
                $new = M("zcorder_copy_copy")->where("orderid = {$orderid}")->select();
                foreach($new as $k=>$v){
                    $info['query_no'] = $arr['query_no'];
                    $info['order_no'] = $v['quer_no'];
                    $info['customerid'] = $arr['customerid'];
                    $info['customername'] = $arr['customername'];
                    $info['customermobile'] = $arr['customermobile'];
                    $info['applicantname'] = $arr['applicantname'];
                    $info['applicantaddress'] = $arr['applicantaddress'];
                    $info['markname'] = $v['markname'];
                    $info['markpicture'] = $v['markimage'];
                    $info['registetype'] = $v['three_id'];
                    request_api_xt("intel_property/trademark_regist_order_to_xtpt",$info);
                    unset($info);
                    $mark['customerid'] = $arr['customerid'];
                    $mark['markname'] = $v['markname'];
                    $mark['uniontypecode'] = $v['one_code'];
                    $mark['typedetaildes'] = $v['three_code'];
                    $mark['one_code'] = $v['one_id'];
                    $mark['registetype'] = $v['three_id'];
                    $mark['marktype'] = '一般';
                    $mark['note'] = '否';
                    $mark['xiangmu'] = '未入注册流程';
                    $mark['marklogo'] = $v['markimage'];
                    $mark['entname'] = $arr['applicantname'];
                    $mark['markstate'] = '1';
                    $mark['entnameaddress'] = $arr['applicantaddress'];
                    $markid = M('mark')->add($mark);
                    M("zcorder_copy_copy")->where("id = {$v['id']}")->save(array('markid'=>$markid));
                    unset($mark);
                    unset($markid);
                }
            }
            if($arr['type']=='111666'){//驳回
                $newinfo = M("zcorder_copy_copy")->where("orderid = {$orderid}")->find();
                $quer_no = M("zcorder_copy_copy")->where("id = {$newinfo['porderid']}")->find();
                $adviser = M("adviser")->where("customerid = {$arr['customerid']}")->find();
                $info['other_order_no'] = $newinfo['quer_no'];
                $info['order_no'] = $quer_no['quer_no'];
                $info['markname'] = $newinfo['markname'];
                $info['markpicture'] = $newinfo['markimage'];
                $info['applicantname'] = $arr['applicantname'];
                $info['customerid'] = $newinfo['customerid'];
                $info['customername'] = $arr['customername'];
                $info['customermobile'] = $arr['customermobile'];
                $info['consultantid'] = $adviser['consultantid'];
                $info['order_type'] = '57';
                request_api_xt("intel_property/other_order_to_xtpt",$info);
                $fsbhqq = array(
                    'order_no'=>$info['order_no'],
                    'now_step'=>'56',
                    'next_step'=>'57'
                );
                request_api_xt("intel_property/customer_choose",$fsbhqq);
            }
            if($arr['type']=='111333'){//转让
                $newinfo = M("zcorder_copy_copy")->where("orderid = {$orderid}")->select();
                $adviser = M("adviser")->where("customerid = {$arr['customerid']}")->find();
                foreach($newinfo as $k=>$v){
                    $info['other_order_no'] = $v['quer_no'];
                    $info['markname'] = $v['markname'];
                    $info['markpicture'] = $v['markimage'];
                    $info['applicantname'] = $arr['applicantname'];
                    $info['customerid'] = $v['customerid'];
                    $info['customername'] = $arr['customername'];
                    $info['customermobile'] = $arr['customermobile'];
                    $info['consultantid'] = $adviser['consultantid'];
                    $info['order_type'] = '11';
                    request_api_xt("intel_property/other_order_to_xtpt",$info);
                }
            }
            if($arr['type']=='111555'){//变更
                $newinfo = M("zcorder_copy_copy")->where("orderid = {$orderid}")->select();
                $adviser = M("adviser")->where("customerid = {$arr['customerid']}")->find();
                foreach($newinfo as $k=>$v){
                    $info['other_order_no'] = $v['quer_no'];
                    $info['markname'] = $v['markname'];
                    $info['markpicture'] = $v['markimage'];
                    $info['applicantname'] = $arr['applicantname'];
                    $info['customerid'] = $v['customerid'];
                    $info['customername'] = $arr['customername'];
                    $info['customermobile'] = $arr['customermobile'];
                    $info['consultantid'] = $adviser['consultantid'];
                    $info['order_type'] = '12';
                    request_api_xt("intel_property/other_order_to_xtpt",$info);
                }
            }
            if($arr['type']=='111888'){//异议
                $newinfo = M("zcorder_copy_copy")->where("orderid = {$orderid}")->find();
                $quer_no = M("zcorder_copy_copy")->where("id = {$newinfo['porderid']}")->find();
                $adviser = M("adviser")->where("customerid = {$arr['customerid']}")->find();
                $info['other_order_no'] = $newinfo['quer_no'];
                $info['order_no'] = $quer_no['quer_no'];
                $info['markname'] = $newinfo['markname'];
                $info['markpicture'] = $newinfo['markimage'];
                $info['applicantname'] = $arr['applicantname'];
                $info['customerid'] = $newinfo['customerid'];
                $info['customername'] = $arr['customername'];
                $info['customermobile'] = $arr['customermobile'];
                $info['consultantid'] = $adviser['consultantid'];
                $info['order_type'] = '67';
                request_api_xt("intel_property/other_order_to_xtpt",$info);
                $fsbhqq = array(
                    'order_no'=>$info['order_no'],
                    'now_step'=>'66',
                    'next_step'=>'67'
                );
                request_api_xt("intel_property/customer_choose",$fsbhqq);
            }
            if($arr['type']=='111777'){//续展
                $newinfo = M("zcorder_copy_copy")->where("orderid = {$orderid}")->select();
                $adviser = M("adviser")->where("customerid = {$arr['customerid']}")->find();
                foreach($newinfo as $k=>$v){
                    $a = M('mark')->where("id={$v['markid']}")->find();
                    $info['other_order_no'] = $v['quer_no'];
                    $info['markname'] = $v['markname'];
                    $info['markpicture'] = $v['markimage'];
                    $info['applicantname'] = $arr['applicantname'];
                    $info['customerid'] = $v['customerid'];
                    $info['customername'] = $arr['customername'];
                    $info['customermobile'] = $arr['customermobile'];
                    $info['end_date'] = strtotime($a['enddate']);
                    $info['consultantid'] = $adviser['consultantid'];
                    $info['order_type'] = '10';
                    request_api_xt("intel_property/other_order_to_xtpt",$info);//die;
                    unset($a);
                }
            }
            if($arr['type']=='111444'){//许可
                $newinfo = M("zcorder_copy_copy")->where("orderid = {$orderid}")->select();
                $adviser = M("adviser")->where("customerid = {$arr['customerid']}")->find();
                foreach($newinfo as $k=>$v){
                    $info['other_order_no'] = $v['quer_no'];
                    $info['markname'] = $v['markname'];
                    $info['markpicture'] = $v['markimage'];
                    $info['applicantname'] = $arr['applicantname'];
                    $info['customerid'] = $v['customerid'];
                    $info['customername'] = $arr['customername'];
                    $info['customermobile'] = $arr['customermobile'];
                    $info['consultantid'] = $adviser['consultantid'];
                    $info['order_type'] = '13';
                    request_api_xt("intel_property/other_order_to_xtpt",$info);
                }
            }

			$this->assign("orderid",$orderid);
			$this->display("shoyintai-suc");
		}
}