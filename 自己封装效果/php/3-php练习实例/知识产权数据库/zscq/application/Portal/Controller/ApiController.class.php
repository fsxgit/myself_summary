<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>
// +----------------------------------------------------------------------
namespace Portal\Controller;
use Common\Controller\HomebaseController; 
header("content-type:text/html;charset=utf-8");
/**
 *  协同接口对接
 */
class ApiController extends HomebaseController {
    function guwen(){
        $re = M("user")->where("id='662357'")->find();

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

    /*
     *   测试
     * */
    function  cece(){
            $order_no = "s20160919161315311981-1";
            $nextstep = I('get.state');
            $orderstate['content']  = "你好";
            $orderstate['regdate']  = "2016-04-21";
            $orderstate['tzscode']  = "1231321";
            $orderstate['zccode']  = "83214802";
            $orderstate['validity']  = "10";
            $orderstate['enddate']  = "2016-02-12";
            $orderstate['express']  = "顺风";
            $orderstate['expresscode']  ="20171625318336187238";
            $orderstate['begindate']  ="2016-05-12";
            if($order_no==''){
                json('10002','参数缺少');
            }

            if($nextstep==''){
                json('10002','参数缺少');
            }
            $zcorder = M("zcorder_copy_copy")->where("quer_no='$order_no'")->find();
            $orderstate['moid']  = $zcorder['id'];
            if(empty($zcorder)){
                json('10005','没有该订单');
            }
            if ($nextstep == '2') {
                M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '2', 'time2' => time()));
            }
            if ($nextstep == '3') {
                M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '3', 'time3' => time()));
                $orderstate['state']  = '3';
                M('mark_state_order')->add($orderstate);
            }
            if ($nextstep == '4') {
                M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '4', 'time4' => time()));
                $orderstate['state']  = '4';
                M('mark_state_order')->add($orderstate);
                //记录注册号和申请日期
                M('mark')->where("id = {$zcorder['markid']}")->save(array('markcode_key'=>$orderstate['zccode'],'appdate'=>$orderstate['regdate']));
            }
            if ($nextstep == '5') {
                M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '6', 'time6' => time()));
                $orderstate['state']  = '6';
                M('mark_state_order')->add($orderstate);
                $bhfs = M("zcorder_copy_copy")->where("porderid={$zcorder['id']}")->find();
                if(!empty($bhfs)){
                    M("zcorder_copy_copy")->where("porderid={$zcorder['id']}")->save(array('state'=>'3','time3'=>time()));

                    $fsbhqq = array(
                        'order_no'=>$bhfs['quer_no'],
                        'now_step'=>'2',
                        'next_step'=>'3'
                    );
                    request_api_xt("intel_property/customer_choose",$fsbhqq);
                }
                //记录初审号和初审日期
                M('mark')->where("id = {$zcorder['markid']}")->save(array('checkdate_code'=>$orderstate['zccode'],'checkdate'=>$orderstate['begindate']));

            }
            if ($nextstep == '573') {
                M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '6', 'sctg' => time()));
                $orderstate['state']  = '6';
                M('mark_state_order')->add($orderstate);
                M("zcorder_copy_copy")->where("porderid={$zcorder['id']} and type='2'")->save(array('state'=>'3','time3'=>time()));
                $bhfs = M("zcorder_copy_copy")->where("porderid={$zcorder['id']} and type='2'")->find();
                $fsbhqq = array(
                    'order_no'=>$bhfs['quer_no'],
                    'now_step'=>'2',
                    'next_step'=>'3'
                );
                request_api_xt("intel_property/customer_choose",$fsbhqq);
            }
            if ($nextstep == '55') {
                M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '5', 'time5' => time()));
                $orderstate['state']  = '5';
                M('mark_state_order')->add($orderstate);
            }
            if ($nextstep == '65') {
                M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '7', 'time7' => time()));
                $orderstate['state']  = '7';
                M('mark_state_order')->add($orderstate);
            }
            if ($nextstep == '99') {
                M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '8', 'time8' => time()));
                $orderstate['state']  = '8';
                M('mark_state_order')->add($orderstate);
                M("zcorder_copy_copy")->where("porderid={$zcorder['id']} and type='5'")->save(array('state'=>'3','time3'=>time()));
                $bhfs = M("zcorder_copy_copy")->where("porderid={$zcorder['id']} and type='5'")->find();
                $fsbhqq = array(
                    'order_no'=>$bhfs['quer_no'],
                    'now_step'=>'2',
                    'next_step'=>'3'
                );
                request_api_xt("intel_property/customer_choose",$fsbhqq);
                //记录初审号和初审日期
                M('mark')->where("id = {$zcorder['markid']}")->save(array('begindate'=>$orderstate['begindate'],'enddate'=>$orderstate['enddate'],'regdate'=>$orderstate['regdate'],'regdate_code'=>$orderstate['zccode']));
            }
            if ($nextstep == '100') {
                M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '9', 'time9' => time()));
                $orderstate['state']  = '9';
                M('mark_state_order')->add($orderstate);
            }
            if ($nextstep == '101') {
                M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '10', 'time10' => time()));
                $orderstate['state']  = '10';
                M('mark_state_order')->add($orderstate);
            }
            if ($nextstep == '67') {
                if($zcorder['state']=='5'){
                    M("zcorder_copy_copy")->where("porderid={$zcorder['id']} and type='2'")->save(array('state'=>'4','time4'=>time()));
                    $orderstate['state']  = '4';
                    M('mark_state_order')->add($orderstate);
                    $bhfs = M("zcorder_copy_copy")->where("porderid={$zcorder['id']} and type='2'")->find();
                    $fsbhqq = array(
                        'order_no'=>$bhfs['quer_no'],
                        //'now_step'=>'2',
                        'next_step'=>'4'
                    );
                    request_api_xt("intel_property/customer_choose",$fsbhqq);
                }
                if($zcorder['state']=='7'){
                    M("zcorder_copy_copy")->where("porderid={$zcorder['id']} and type='5'")->save(array('state'=>'4','time4'=>time()));
                    $orderstate['state']  = '4';
                    M('mark_state_order')->add($orderstate);
                    $bhfs = M("zcorder_copy_copy")->where("porderid={$zcorder['id']} and type='5'")->find();
                    $fsbhqq = array(
                        'order_no'=>$bhfs['quer_no'],
                        //'now_step'=>'2',
                        'next_step'=>'4'
                    );
                    request_api_xt("intel_property/customer_choose",$fsbhqq);
                }

            }

            json('10001','SUCCESS');
    }
    /*
     *   计划任务定时推送失败的查询单
     * */
    function false_dan(){
        $arr = M("false")->where("type = '1'")->select();
    }

    /*
    *  其他订单详情
    **/
    function order_information(){
        $key = "fde37affb714df9241fd661b676dd6c3";
        $pc_key = I('get.pc_key');
        $param = I('get.param');
        $param = str_replace(" ", "+",$param);
        $sign = I('get.sign');
        $ysign = md5($pc_key.$param);
        if(empty($pc_key)||empty($param)||empty($sign)){
            json('10002','参数缺少');
        }
        if($sign!=$ysign){
            json('10003','签名错误');
        }
        if($key!=$pc_key){
            json('10004','秘钥错误');
        }
        $param = base64_decode($param);
        $param = json_decode($param,true);
        $order_no = $param['otherOrderNo'];
        if($order_no==''){
            json('10002','参数缺少');
        }
       try {
           $arr = M("zcorder_copy_copy")->where("quer_no ='$order_no'")->find();
           if(empty($arr)){
               json('10006',"没有该单号");
           }

           $mark = M("mark")->where("id in({$arr['markid']})")->find();

           $order = M("zcorder_copy")->where("orderid in({$arr['orderid']})")->find();
           $return['mark']['markname'] = $mark['markname'];
           if(strtotime($mark['begindate'])==''){
               $return['mark']['begindate'] = "--";
           }else{
               $return['mark']['begindate'] = $mark['begindate'];
           }
           if(strtotime($mark['enddate'])==''){
                $return['mark']['enddate'] = "--";
           }else{
                $return['mark']['enddate'] = $mark['enddate'];
           }
           $return['mark']['entname'] = $mark['entname'];
           $return['mark']['entnameaddress'] = $mark['entnameaddress'];
           $return['mark']['marktype'] = $mark['marktype'];
           if($mark['markimage']==''){
                 $return['mark']['markimage'] = $mark['marklogo'];
                 $return['mark']['imagetype'] = '2';
            }else{
                $return['mark']['markimage'] = $mark['markimage'];
                $return['mark']['imagetype'] = '1';
           }
           $return['mark']['uniontypecode'] = $mark['uniontypecode'];
           $return['mark']['typedetaildes'] = $mark['typedetaildes'];
           $return['info']['order_no'] = $arr['quer_no'];
           if($arr['type']=='111666'||$arr['type']=='111888'){//驳回和异议
               if($arr['type']=='111666'){
                   $return['info']['file'][] = array('filename'=>'驳回商标注册申请复审申请书','a'=>'15','b'=>'2','c'=>'5');
                   $return['info']['file'][] = array('filename'=>'商 标 评 审 代 理 委 托 书','a'=>'14','b'=>'2','c'=>'3');
               }else{
                   $return['info']['file'][] = array('filename'=>'商 标 代 理 委 托 书','a'=>'13','b'=>'1','c'=>'6');
               }

            }
            if($arr['type']=='111555'||$arr['type']=='111333'){//变更转让
                $detail = M("zcorder_detail")->where("orderid ={$arr['orderid']}")->find();
                $return['info']['applicantname'] = $detail['applicantname'];
                $return['info']['applicantaddress'] = $detail['applicantaddress'];
                $return['info']['code'] = $detail['code'];
                $return['info']['customername'] = $detail['customername'];
                $return['info']['customermobile'] = $detail['customermobile'];
            }
           if($arr['type']=='111444'){//
               $detail = M("permit")->where("pid ={$arr['id']}")->select();
               $return['permit'] = $detail;
           }
            json('10001',$return);
        } catch (\Exception $e) {
            json('10009',"程序异常出错！！！未知原因");
        }

    }
    /*
     *   其他订单状态的修改
     * */
    function ortherorderstatesave(){
        $key = "fde37affb714df9241fd661b676dd6c3";
        $pc_key = I('get.pc_key');
        $param = I('get.param');
        $param = str_replace(" ", "+",$param);
        $sign = I('get.sign');
        $ysign = md5($pc_key.$param);
        if(empty($pc_key)||empty($param)||empty($sign)){
            json('10002','参数缺少');
        }
        if($sign!=$ysign){
            json('10003','签名错误');
        }
        if($key!=$pc_key){
            json('10004','秘钥错误');
        }
        $param = base64_decode($param);
        $param = json_decode($param,true);
        $order_no = $param['order_no'];
        $currentstep = $param['currentstep'];
        $upperstep = $param['upperstep'];
        $orderstate['content']  = $param['leaving'];
        if($order_no==''){
            json('10002','参数缺少');
        }
        if($currentstep==''){
            json('10002','参数缺少');
        }
        if($upperstep==''){
            json('10002','参数缺少');
        }
        try {
            $arr = M("zcorder_copy_copy")->where("quer_no='$order_no'")->find();
            $orderstate['moid']  = $arr['id'];
            if(empty($arr)){
                json('10005','没有该订单');
            }
                if ($currentstep == '1') {
                    M("zcorder_copy_copy")->where("id={$arr['id']}")->save(array('state' => '2', 'time2' => time()));
                    $orderstate['state']  = '2';
                    M('mark_state_order')->add($orderstate);
                }
                if ($currentstep == '2' and  $upperstep == '3') {
                    M("zcorder_copy_copy")->where("id={$arr['id']}")->save(array('state' => '3', 'time3' => time()));
                    $orderstate['state']  = '3';
                    M('mark_state_order')->add($orderstate);
                }
                if ($currentstep == '2' and  $upperstep == '4') {
                    M("zcorder_copy_copy")->where("id={$arr['id']}")->save(array('state' => '4', 'time4' => time()));
                    $orderstate['state']  = '4';
                    M('mark_state_order')->add($orderstate);
                }
            json('10001',"SUCCESS");
        } catch (\Exception $e) {
            json('10009',"程序异常出错！！！未知原因");
        }

    }
	/**
	*  下载页面
	*/
	function download(){
		$id = I('get.aa');
        $type = I('get.bb');
        $leixing = I('get.cc');
        $aid = I('get.consultantid');
		if($id==''||$type==''||$leixing==''||$aid==''){
			json('10002','参数缺少');
		}
        $file = M("file")->where("id = {$id} and type={$type} and leixing={$leixing} and aid={$aid}")->find();
        if(empty($file)){
            json('10003','没有找到该文件');
        }
        $file_name=$file['url'];//需要下载的文件
        $file_name=iconv("utf-8","GB2312//IGNORE","$file_name");
        $fp=fopen($file_name,"r+");//下载文件必须先要将文件打开，写入内存
        if(!file_exists($file_name)){//判断文件是否存在
            echo "文件不存在";         //如果不存在
            exit();                              //直接退出
        }                                         //如果存在，继续执行下载
        $file_size=filesize($file_name);//判断文件大小
//返回的文件
        Header("Content-type: application/octet-stream");
//按照字节格式返回
        Header("Accept-Ranges: bytes");
//返回文件大小
        Header("Accept-Length: ".$file_size);
//弹出客户端对话框，对应的文件名
        Header("Content-Disposition: attachment; filename=".$file['filename']);
//防止服务器瞬时压力增大，分段读取
        $buffer=1024;
        while(!feof($fp)){
            $file_data=fread($fp,$buffer);
            echo $file_data;
        }
//关闭文件
        fclose($fp);
        /*$content = file_get_contents($file['url']);
        $info['text'] = base64_encode($content);
        $info['filename'] = $file['filename'];
       json('1001',$info);
        */
        /*
        $handle = fopen($file['url'], "r");//读取二进制文件时，需要将第二个参数设置成'rb'
        $content = '';
        while(!feof($handle)){
            $content .= fread($handle, 8080);
        }
        echo $content;
        fclose($handle);
        $myfile = fopen("我的文档.doc", "w");
        fwrite($myfile, $content);
        fclose($myfile);*/
	}
    /**
     *  上传页面
     */
    function upload(){
        $order_no = I('get.order_no');
        $state = I('get.nextstep');
        $aid = I('get.consultantid');
        if($order_no==''||$state==''||$aid==''){
            json('10002','参数缺少');
        }
        $this->order_no = $order_no;
        $this->state = $state;
        $this->aid = $aid;
        $this->display("alert2");
    }
    /*
     *   文件上传
     * */
    function file_add(){
        $order_no = I('post.order_no');
        $state = I('post.state');
        $arr['aid'] = I('post.aid');
        $arr['type'] = '2';
        $arr['aid'] = I('post.aid');
        $arr['filename'] = $_FILES["myfile"]['name'];
        $arr['size'] = $_FILES["myfile"]['size'];
        $arr['add_time'] = time();
        $copy = M("zcorder_copy_copy")->where("quer_no='$order_no'")->find();
        $arr['userid'] = $copy["customerid"];
        $arr['markid'] = $copy["markid"];
        if($state=='55'){
            $arr['leixing'] = '5';
        }
        if($state=='65'){
            $arr['leixing'] = '7';
        }
        $upload = new \Think\Upload();// 实例化上传类
        $upload->maxSize   =     3145728 ;// 设置附件上传大小
        $upload->exts      =     array('doc','docx', 'pdf');// 设置附件上传类型
        $upload->savePath  =     "./"; // 设置附件上传目录
        // 上传文件
        $info   =   $upload->upload();
        if(!$info) {// 上传错误提示错误信息
            $this->error($upload->getError());
        }else{// 上传成功
            foreach($info as $file){
                $a = $file['savepath'].$file['savename'];
                $b =  ltrim($a, ".");
                $arr['url'] = 'http://'.$_SERVER['HTTP_HOST'].'/Uploads'.$b;
                M("file")->add($arr);
                echo "SUCCESS";
            }
        }
    }
	/**
	*  订单状态的改变
	*/
	function order_state_save(){
		$key = "fde37affb714df9241fd661b676dd6c3";
		$pc_key = I('get.pc_key');
		$param = I('get.param');
		$param = str_replace(" ", "+",$param);
		$sign = I('get.sign');
		$ysign = md5($pc_key.$param);
		if(empty($pc_key)||empty($param)||empty($sign)){
			 json('10002','参数缺少');
		}
		if($sign!=$ysign){
			 json('10003','签名错误');
		}
		if($key!=$pc_key){
			 json('10004','秘钥错误');
		}
		$param = base64_decode($param);
		$param = json_decode($param,true);
		$order_no = $param['order_no'];
		$currentstep = $param['currentstep'];
		$nextstep = $param['nextstep'];
        $orderstate['content']  = $param['leaving'];
        $orderstate['regdate']  = $param['regdate'];
        $orderstate['tzscode']  = $param['tzscode'];
        $orderstate['zccode']  = $param['zccode'];
        $orderstate['validity']  = $param['validity'];
        $orderstate['enddate']  = $param['enddate'];
        $orderstate['express']  = $param['express'];
        $orderstate['expresscode']  = $param['expresscode'];
        $orderstate['begindate']  = $param['begindate'];
        //json($param);
		if($order_no==''){
			json('10002','参数缺少');
		}

        if($nextstep==''){
            json('10002','参数缺少');
        }
		$zcorder = M("zcorder_copy_copy")->where("quer_no='$order_no'")->find();
        $orderstate['moid']  = $zcorder['id'];
		if(empty($zcorder)){
			json('10005','没有该订单');
		}
            if ($nextstep == '2') {
                M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '2', 'time2' => time()));
            }
            if ($nextstep == '3') {
                M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '3', 'time3' => time()));
                $orderstate['state']  = '3';
                M('mark_state_order')->add($orderstate);
            }
        if ($nextstep == '4') {
            M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '4', 'time4' => time()));
            $orderstate['state']  = '4';
            M('mark_state_order')->add($orderstate);
            //记录注册号和申请日期
            M('mark')->where("id = {$zcorder['markid']}")->save(array('markcode_key'=>$orderstate['zccode'],'appdate'=>$orderstate['regdate']));
        }
        if ($nextstep == '5') {
            M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '6', 'time6' => time()));
            $orderstate['state']  = '6';
            M('mark_state_order')->add($orderstate);
            $bhfs = M("zcorder_copy_copy")->where("porderid={$zcorder['id']}")->find();
            if(!empty($bhfs)){
                M("zcorder_copy_copy")->where("porderid={$zcorder['id']}")->save(array('state'=>'3','time3'=>time()));

                $fsbhqq = array(
                    'order_no'=>$bhfs['quer_no'],
                    'now_step'=>'2',
                    'next_step'=>'3'
                );
                request_api_xt("intel_property/customer_choose",$fsbhqq);
            }
            //记录初审号和初审日期
            M('mark')->where("id = {$zcorder['markid']}")->save(array('checkdate_code'=>$orderstate['zccode'],'checkdate'=>$orderstate['begindate']));

        }
        if ($nextstep == '573') {
            M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '6', 'sctg' => time()));
            $orderstate['state']  = '6';
            M('mark_state_order')->add($orderstate);
            M("zcorder_copy_copy")->where("porderid={$zcorder['id']} and type='2'")->save(array('state'=>'3','time3'=>time()));
            $bhfs = M("zcorder_copy_copy")->where("porderid={$zcorder['id']} and type='2'")->find();
            $fsbhqq = array(
                'order_no'=>$bhfs['quer_no'],
                'now_step'=>'2',
                'next_step'=>'3'
            );
            request_api_xt("intel_property/customer_choose",$fsbhqq);
        }
        if ($nextstep == '55') {
            M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '5', 'time5' => time()));
            $orderstate['state']  = '5';
            M('mark_state_order')->add($orderstate);
        }
        if ($nextstep == '65') {
            M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '7', 'time7' => time()));
            $orderstate['state']  = '7';
            M('mark_state_order')->add($orderstate);
        }
        if ($nextstep == '99') {
            M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '8', 'time8' => time()));
            $orderstate['state']  = '8';
            M('mark_state_order')->add($orderstate);
            M("zcorder_copy_copy")->where("porderid={$zcorder['id']} and type='5'")->save(array('state'=>'3','time3'=>time()));
            $bhfs = M("zcorder_copy_copy")->where("porderid={$zcorder['id']} and type='5'")->find();
            $fsbhqq = array(
                'order_no'=>$bhfs['quer_no'],
                'now_step'=>'2',
                'next_step'=>'3'
            );
            request_api_xt("intel_property/customer_choose",$fsbhqq);
            //记录初审号和初审日期
            M('mark')->where("id = {$zcorder['markid']}")->save(array('begindate'=>$orderstate['begindate'],'enddate'=>$orderstate['enddate'],'regdate'=>$orderstate['regdate'],'regdate_code'=>$orderstate['zccode']));
        }
        if ($nextstep == '100') {
            M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '9', 'time9' => time()));
            $orderstate['state']  = '9';
            M('mark_state_order')->add($orderstate);
        }
            if ($nextstep == '101') {
                 M("zcorder_copy_copy")->where("id={$zcorder['id']}")->save(array('state' => '10', 'time10' => time()));
                $orderstate['state']  = '10';
                M('mark_state_order')->add($orderstate);
            }
           if ($nextstep == '67') {
               if($zcorder['state']=='5'){
                   M("zcorder_copy_copy")->where("porderid={$zcorder['id']} and type='2'")->save(array('state'=>'4','time4'=>time()));
                   $orderstate['state']  = '4';
                   M('mark_state_order')->add($orderstate);
                   $bhfs = M("zcorder_copy_copy")->where("porderid={$zcorder['id']} and type='2'")->find();
                   $fsbhqq = array(
                       'order_no'=>$bhfs['quer_no'],
                       //'now_step'=>'2',
                       'next_step'=>'4'
                   );
                   request_api_xt("intel_property/customer_choose",$fsbhqq);
               }
               if($zcorder['state']=='7'){
                   M("zcorder_copy_copy")->where("porderid={$zcorder['id']} and type='5'")->save(array('state'=>'4','time4'=>time()));
                   $orderstate['state']  = '4';
                   M('mark_state_order')->add($orderstate);
                   $bhfs = M("zcorder_copy_copy")->where("porderid={$zcorder['id']} and type='5'")->find();
                   $fsbhqq = array(
                       'order_no'=>$bhfs['quer_no'],
                       //'now_step'=>'2',
                       'next_step'=>'4'
                   );
                   request_api_xt("intel_property/customer_choose",$fsbhqq);
               }

           }

		json('10001','SUCCESS');
	}

	/**
	*   注册订单按照订单号查询数据
	*/
	function order_no_query(){
		$key = "fde37affb714df9241fd661b676dd6c3";
		$pc_key = I('get.pc_key');
		$param = I('get.param');
		$param = str_replace(" ", "+",$param);
		$sign = I('get.sign');
		$ysign = md5($pc_key.$param);
		if(empty($pc_key)||empty($param)||empty($sign)){
			 json('10002','参数缺少');
		}
		if($sign!=$ysign){
			 json('10003','签名错误');
		}
		if($key!=$pc_key){
			 json('10004','秘钥错误');
		}
		$param = base64_decode($param);
		$param = json_decode($param,true);
		$order_no = $param['order_no'];
		if($order_no==''){
			json('10002','参数缺少');
		}
		try {
		 $arr = M("zcorder_copy_copy")->where("quer_no ='$order_no'")->find();
		 $mark = M("mark")->where("id in({$arr['markid']})")->find();
         $order = M("zcorder_copy")->where("orderid in({$arr['orderid']})")->find();
         $info['customerid'] = $mark['customerid'];
         $info['applicantname'] = $mark['entname'];
         $info['applicantaddress'] = $mark['entnameaddress'];
         $info['order_no'] = $order_no;
         $info['customername'] = $order['customername'];
         $info['customermobile'] = $order['customermobile'];
         $info['paytime'] = $order['paytime'];
         $info['query_no'] = $order['query_no'];
         $info['markname'] = $mark['markname'];
         $info['markpicture'] = $mark['marklogo'];
         $info['registetype'] = $mark['typedetaildes'];
		 json('10001',$info);
		} catch (\Exception $e) {
		    json('10009',"程序异常出错！！！未知原因");
        }
	}
	/**
	*  按照查询单id查询数据
	*/
	function inquire_details(){
		$key = "fde37affb714df9241fd661b676dd6c3";
		$pc_key = I('get.pc_key');
		$param = I('get.param');
		$param = str_replace(" ", "+",$param);
		$sign = I('get.sign');
		$ysign = md5($pc_key.$param);
		if(empty($pc_key)||empty($param)||empty($sign)){
			 json('10002','参数缺少');
		}
		if($sign!=$ysign){
			 json('10003','签名错误');
		}
		if($key!=$pc_key){
			 json('10004','秘钥错误');
		}
		$param = base64_decode($param);
		$param = json_decode($param,true);
		$number = $param['query_no'];
		if($number==''){
			json('10002','参数缺少');
		}
		
		try {
		    $arr = M("inquire")->where("number ='$number'")->field("queryid,field_id,industry_id",true)->find();
		    json('10001',$arr);
		} catch (\Exception $e) {   
		    json('10009',"程序异常出错！！！未知原因");
        }
	}
	/**
	*  请求尼斯分类接口按照code查询
	*/
	function nice_calss(){
		$key = "fde37affb714df9241fd661b676dd6c3";
		$pc_key = I('get.pc_key');
		$param = I('get.param');
		$param = str_replace(" ", "+",$param);
		$sign = I('get.sign');
		$ysign = md5($pc_key.$param);
		if(empty($pc_key)||empty($param)||empty($sign)){
			 json('10002','参数缺少');
		}
		if($sign!=$ysign){
			 json('10003','签名错误');
		}
		if($key!=$pc_key){
			 json('10004','秘钥错误');
		}
		$param = base64_decode($param);
		$param = json_decode($param,true);
		$code = $param['code'];
		if($code==''){
			json('10002','参数缺少');
		}
		try {
		    $arr = M("nice_first")->where("pid ={$code}")->select();
			json('10001',$arr);
		} catch (\Exception $e) {   
		    json('10009',"程序异常出错！！！未知原因");
        }
	}
	/**
	*  请求尼斯分类接口按照级别查询
	*/
	function nice_level(){
		$key = "fde37affb714df9241fd661b676dd6c3";
		$pc_key = I('get.pc_key');
		$param = I('get.param');
		$param = str_replace(" ", "+",$param);
		$sign = I('get.sign');
		$ysign = md5($pc_key.$param);
		if(empty($pc_key)||empty($param)||empty($sign)){
			 json('10002','参数缺少');
		}
		if($sign!=$ysign){
			 json('10003','签名错误');
		}
		if($key!=$pc_key){
			 json('10004','秘钥错误');
		}
		$param = base64_decode($param);
		$param = json_decode($param,true);
		$code = $param['code'];
		try {
		if($code=='1'){
			$arr = M("nice_first")->where("level='1'")->field("id,describe",true)->select();
		}
		if($code=='2'){
			$arr = M("nice_first")->where("level='1'")->field("id,describe",true)->select();
			$two = M("nice_first")->where("level='2'")->field("id,describe",true)->select();
			foreach($arr as $k=>$v){
				foreach($two as $ks=>$vs){
				    if($v['code']==$vs['pid']){
						$arr[$k]['subset'][] = $vs;
					}
			    }
			}
		}
		if($code=='3'){
			$arr = M("nice_first")->where("level='1'")->field("id,describe",true)->select();
			$two = M("nice_first")->where("level='2'")->field("id,describe",true)->select();
			$three = M("nice_first")->where("level='3'")->field("id,describe",true)->select();
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
		}
		    json('10001',$arr);
		} catch (\Exception $e) {   
		    json('10009',"程序异常出错！！！未知原因");
        }
	}
	/**
	*   尼斯分类批量查询
	*/
	function nice_piliang(){
		$key = "fde37affb714df9241fd661b676dd6c3";
		$pc_key = I('get.pc_key');
		$param = I('get.param');
		$param = str_replace(" ", "+",$param);
		$sign = I('get.sign');
		$ysign = md5($pc_key.$param);
		if(empty($pc_key)||empty($param)||empty($sign)){
			 json('10002','参数缺少');
		}
		if($sign!=$ysign){
			 json('10003','签名错误');
		}
		if($key!=$pc_key){
			 json('10004','秘钥错误');
		}
		$param = base64_decode($param);
		$param = json_decode($param,true);
		$code = $param['code'];
		$level = $param['level'];
		if($code==''||$level==''){
			 json('10002','参数缺少');
		}
		try {
		if($level=='2'){
			$nicef = M("nice_first")->where("id in($code)")->field("describe,level",true)->select();
			$one = array();
			foreach($nicef as $k=>$v){
				if(!in_array($v['pid'], $one)){
					$one[] = $v['pid'];
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
		if($level=='3'){
			$nice = M("nice_first")->where("id in($code)")->field("describe,level",true)->select();
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
		
		json('10001',$nicecalss);
		} catch (\Exception $e) {   
		    json('10009',"程序异常出错！！！未知原因");
        }
	}
    /**
	*  更换顾问
	*/
    public function replace_adviser(){
	    $key = "fde37affb714df9241fd661b676dd6c3";
		$pc_key = I('get.pc_key');
		$param = I('get.param');
		$param = str_replace(" ", "+",$param);
		$sign = I('get.sign');
		$ysign = md5($pc_key.$param);
		if(empty($pc_key)||empty($param)||empty($sign)){
			 json('10002','参数缺少');
		}
		if($sign!=$ysign){
			 json('10003','签名错误');
		}
		if($key!=$pc_key){
			 json('10004','秘钥错误');
		}
		try {
		
		$param = base64_decode($param);
		$param = json_decode($param,true);
		$id = $param['customerid'];
		$oldconsultantid = $param['oldconsultantid'];
		$adviser = M("adviser")->where("customerid={$id} and consultantid={$oldconsultantid}")->find();
        if(!empty($adviser)){
			$info['consultantid'] = $param['consultantid'];
			$info['consultantname'] = $param['consultantname'];
			$info['consultantmobile'] = $param['consultantmobile'];
			$info['consultantdept'] = $param['consultantdept'];
			$info['consultantaddress'] = $param['consultantaddress'];
			M("adviser")->where("customerid={$id}")->save($info);
			json('10001','成功');
		}
		json('10005','没有该用户');
		} catch (\Exception $e) {   
		    json('10009',"程序异常出错！！！未知原因");
        }
		
    }
	/**
	*  查询单查询结果返回
	*/
	function query_result(){
		$key = "fde37affb714df9241fd661b676dd6c3";
		$pc_key = I('get.pc_key');
		$param = I('get.param');
		$param = str_replace(" ", "+",$param);
		$sign = I('get.sign');
		$ysign = md5($pc_key.$param);
		if(empty($pc_key)||empty($param)||empty($sign)){
			 json('10002','参数缺少');
		}
		if($sign!=$ysign){
			 json('10003','签名错误');
		}
		
		if($key!=$pc_key){
			 json('10004','秘钥错误');
		}
		try {
		$param = base64_decode($param);
		$param = json_decode($param,true);
		$query_no = $param['query_no'];
		$customerid = $param['customerid'];
		$inquire = M("inquire")->where("number='$query_no' and customerid={$customerid}")->find();
        if(empty($inquire)){
			json('10005','没有该查询单');
		}
		if($inquire['state']!='0'){
			json('10005','该查询单已有查询结果');
		}
		$info['endtime'] = time();
		$info['newmarkname'] = $param['newmarkname'];
		$info['suggestedtype'] = $param['suggestedtype'];
		$info['okquerytype'] = $param['querytype'];
		$info['state'] = "1";
		M("inquire")->where("number='$query_no' and customerid={$customerid}")->save($info);
		json('10001','成功');
		} catch (\Exception $e) {   
		    json('10009',"程序异常出错！！！未知原因");
        }
	}
}


