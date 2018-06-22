<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;

/**
 * 标签
 */
class TagsController extends AdminbaseController
{

    private $_model;

    public function _initialize ()
    {
        parent::_initialize();
        $this->_model = D("Tags");
    }

    /**
     * 标签列表
     */
    public function index ()
    {
        $this->meta_title = "标签列表";
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
        $this->meta_title = "增加标签";
        $this->assign('backUrl', cookie('__forward__'));
        $this->display();
    }

    /**
     * 修改标签
     */
    public function edit ($id)
    {
        $this->meta_title = "修改标签";
        $info = $this->_model->where(array("id" => $id))->find();
        $this->assign('info', $info);
        $this->assign('backUrl', cookie('__forward__'));
        $this->display('add');
    }

    /**
     * 修改保存
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

    public function listorders() {
        $status = parent::_listorders($this->_model);
        if ($status) {
            $this->success("排序更新成功！");
        } else {
            $this->error("排序更新失败！");
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
