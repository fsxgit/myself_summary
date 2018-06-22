<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;

/**
 * 优惠码
 */
class CouponController extends AdminbaseController
{

    private $_model;

    public function _initialize ()
    {
        parent::_initialize();
        $this->_model = D("Coupon");
    }

    /**
     * 优惠码列表
     */
    public function index ()
    {
        $this->meta_title = "优惠码生成记录";
        $where = array();
        $field = "*";
        $listData = $this->lists($this->_model);
        $this->assign("listData", $listData);
        $this->setBackCookieUrl();
        $this->display();
    }

    /**
     * 增加优惠码
     */
    public function add ()
    {
        $this->meta_title = "生成优惠码";
        $this->assign('backUrl', cookie('__forward__'));
        $this->display();
    }

    /**
     * 修改保存
     */
    public function update ()
    {
        $res = $this->_model->update();
        if ($res)
        {
            @ini_set('max_execution_time', 0);
            $dataList = array();
            for ($i = 0; $i < $res['num']; $i ++)
            {
                $a = makeCode(3);
                $b = makeCode(3);
                $c = makeCode(3);
                $dataList[$i]['code'] = $a . $b . $c;
                $dataList[$i]['coupon_id'] = $res['id'];
            }
            M("coupon_code")->addAll($dataList);
            $this->success("操作成功", U('index'));
        } else
        {
            $this->error($this->_model->getError());
        }
    }

    public function del ($id)
    {
        $ret = $this->_model->where(array("id" => $id))->delete();
        if ($ret)
        {
            M("coupon_code")->where(array("coupon_id" => $id))->delete();
            $this->success('删除成功');
        } else
        {
            $this->error("删除失败");
        }
    }

    public function code ($cid)
    {
        $this->meta_title = "查看优惠码";
        C("LIST_ROWS", 100);
        $listData = $this->lists(M("coupon_code"), array('coupon_id' => $cid));
        $this->assign('listData', $listData);
        $this->display();
    }
}
