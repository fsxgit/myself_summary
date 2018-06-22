<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;

/**
 * 引导测评
 */
class TestController extends AdminbaseController
{

    private $_model;

    public function _initialize ()
    {
        parent::_initialize();
        $this->_model = D("Test");
    }

    /**
     * 试题列表
     */
    public function index ()
    {
        $this->meta_title = "试题列表";
        $where = array();
        $table = "{$this->prefix}test AS t";
        $join = "{$this->prefix}qizhi AS q ON t.qizhi_id=q.id";
        $field = "t.*,q.title AS qizhi";
        $listData = $this->lists(M()->table($table)->join($join), $where, 't.id ASC', $field);
        $this->assign("listData", $listData);
        $this->setBackCookieUrl();
        $this->display();
    }

    /**
     * 课程列表
     */
    private function _getQizhiList ($qizhiId = 0)
    {
        $qizhi = M("qizhi")->select();
        foreach ($qizhi as &$v)
        {
            $v['selected'] = $v['id'] == $qizhiId ? "selected" : "";
        }
        $this->assign('qizhi', $qizhi);
    }

    /**
     * 增加试题
     */
    public function add ()
    {
        $this->meta_title = "添加试题";
        $this->_getQizhiList();
        $this->display();
    }

    /**
     * 修改试题
     */
    public function edit ($id)
    {
        $this->meta_title = "修改试题";
        $info = $this->_model->where(array("id" => $id))->find();
        $this->assign('info', $info);
        $this->_getQizhiList($info['qizhi_id']);
        $this->assign('backUrl', cookie('__forward__'));
        $this->display('add');
    }

    /**
     * 修改/增加试题保存
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
     * 删除试题
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

