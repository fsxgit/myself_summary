<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;

/**
 * 轨迹管理
 */
class TrailController extends AdminbaseController
{

    private $_model;

    public function _initialize ()
    {
        parent::_initialize();
        $this->_model = D("Trail");
    }

    public function index ()
    {
        $this->meta_title = "用户轨迹列表";
        $table = "{$this->prefix}trail AS t";
        $join = "{$this->prefix}member AS m ON t.user_id=m.id";
        $listData = $this->lists(M()->table($table)->join($join), array(), 't.id desc', "t.*,m.child_name");
        $this->assign("listData", $listData);
        $this->setBackCookieUrl();
        $this->display();
    }

    /**
     * 预览
     * @param unknown $id
     */
    public function view ($id)
    {
        $this->meta_title = "用户轨迹预览";
        $table = "{$this->prefix}trail AS t";
        $join = "{$this->prefix}member AS m ON t.user_id=m.id";
        $info = M()->field("t.*,m.child_name")->table($table)->join($join)->where(array("t.id" => $id))->find();
        $this->assign('info', $info);
        $this->assign('backUrl',cookie('__forward__'));
        $this->display();
    }

    /**
     * 删除小引导
     */
    public function del ($id)
    {
        $data = $this->_model->where(array('id' => $id))->find();
        $res = $this->_model->where(array('id' => $id))->delete();
        if ($res)
        {
            $thumb = str2arr($data['thumb'], '|');
            foreach ($thumb as $v)
            {
                $this->deleteIMG($v);
            }
            $this->deleteIMG($data['cover']);
            $this->success("删除成功!", cookie('__forward__'));
        } else
        {
            $this->error("删除失败");
        }
    }
}