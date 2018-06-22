<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;

/**
 * 专家控制器
 */
class ExpertController extends AdminbaseController
{

    private $_model;

    public function _initialize ()
    {
        parent::_initialize();
        $this->_model = D("Expert");
    }

    /**
     * 专家列表
     */
    public function index ()
    {
        $this->meta_title = "专家列表";
        $where = array();
        $listData = $this->lists($this->_model, $where);
        $this->assign("listData", $listData);
        $this->setBackCookieUrl();
        $this->display();
    }

    /**
     * 增加专家
     */
    public function add ()
    {
        $this->meta_title = "增加专家";
        $this->assign('backUrl', cookie('__forward__'));
        $this->display();
    }

    /**
     * 修改专家
     */
    public function edit ($id)
    {
        $this->meta_title = "修改专家";
        $info = $this->_model->where(array("id" => $id))->find();
        $this->assign('info', $info);
        $this->assign('backUrl', cookie('__forward__'));
        $this->display('add');
    }

    /**
     * 修改专家保存
     */
    public function update ()
    {
        $res = $this->_model->update();
        if ($res)
        {
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
