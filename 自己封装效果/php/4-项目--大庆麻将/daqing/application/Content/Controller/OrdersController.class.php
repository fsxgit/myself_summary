<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;

/**
 * 订单管理
 */
class OrdersController extends AdminbaseController
{

    public function index ()
    {
        $this->meta_title = "订单列表";
        $listData = $this->lists(M("orders"));
        $this->assign('listData', $listData);
        $this->setBackCookieUrl();
        $this->display();
    }

    public function view ($id)
    {
        $this->meta_title = "查看订单";
        $info = M("orders")->where(array("id" => $id))->find();
        $info['data'] = json_decode($info['detail'], true);
        $this->assign('info', $info);
        $this->assign('backUrl', cookie('__forward__'));
        $this->display();
    }
}