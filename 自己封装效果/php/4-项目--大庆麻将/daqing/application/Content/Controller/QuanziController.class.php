<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;

/**
 * 圈子管理
 */
class QuanziController extends AdminbaseController
{

    private $_model;

    public function _initialize ()
    {
        parent::_initialize();
        $this->_model = D("Quanzi");
    }

    public function index ()
    {
        $this->meta_title = "圈子列表";
        $listData = $this->lists($this->_model);
        $this->assign("listData", $listData);
        $this->setBackCookieUrl();
        $this->display();
    }

    /**
     * 圈子 取消、设为精华
     * @param unknown $id
     * @param unknown $elite
     */
    public function setElite ($id, $elite)
    {
        $this->_model->where(array("id" => $id))->setField("elite", $elite) ? $this->success("操作成功") : $this->error("操作失败");
    }

    /**
     * 预览
     * @param unknown $id
     */
    public function view ($id)
    {
        $this->meta_title = "圈子预览";
        $info = $this->_model->where(array("id" => $id))->find();
        $this->assign('info', $info);
        $this->assign('backUrl', cookie('__forward__'));
        $this->display();
    }

    /**
     * 预览
     */
    public function comment ($id)
    {
        $this->meta_title = "查看圈子评论";
        $listData = $this->lists(M("quanzi_comments"), array('infoid' => $id));
        $this->assign("listData", $listData);
        $this->display();
    }

    /**
     * 删除小引导
     */
    public function commentdel ()
    {
        $id = array_unique((array) I('id', 0));
        if (in_array(0, $id))
        {
            $this->error('请选择要操作的数据!');
        }
        $map = array('id' => array('in',$id));
        $res = M("article_comments")->where($map)->delete();
        SQL();
        if ($res)
        {
            $this->success("删除成功!");
        } else
        {
            $this->error("删除失败");
        }
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