<?php
namespace Common\Controller;
use Common\Controller\HomebaseController;
class CommonController extends HomebaseController {
	
	function _initialize() {
		if(empty($_COOKIE['code'])){ //已经登录时直接跳到首页
            redirect(U("Portal/register/index"));   
	    }
	}
}