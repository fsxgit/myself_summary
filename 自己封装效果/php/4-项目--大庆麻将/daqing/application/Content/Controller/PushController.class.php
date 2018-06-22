<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;

/**
 * 推送
 */
class PushController extends AdminbaseController
{

    private $_model;

    public function _initialize ()
    {
        parent::_initialize();
        $this->_model = D("Push");
    }

    /**
     * 单页列表
     */
    public function index ()
    {
        $this->meta_title = "历史推送";
        $listData = $this->lists($this->_model);
        $this->assign("listData", $listData);
        $this->setBackCookieUrl();
        $this->display();
    }

    /**
     * 增加页面
     */
    public function add ()
    {
        $this->meta_title = "推送消息";
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
            $this->dopush($res['content']);
            $this->success("操作成功", U('index'));
        } else
        {
            $this->error($this->_model->getError());
        }
    }

    /**
     * 删除
     */
    public function del ()
    {
        $id = array_unique((array) I('id', 0));
        if (in_array(0, $id))
        {
            $this->error('请选择要操作的数据!');
        }
        $map = array('id' => array('in',$id));
        $res = $this->_model->where($map)->delete();
        if ($res)
        {
            $this->success("删除成功!", cookie('__forward__'));
        } else
        {
            $this->error("删除失败");
        }
    }
}
