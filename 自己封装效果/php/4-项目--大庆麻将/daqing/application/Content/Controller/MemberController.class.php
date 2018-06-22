<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;

/**
 * 用户列表控制器
 */
class MemberController extends AdminbaseController
{

    private $_model;

    private $_agentID;

    public function _initialize ()
    {
        parent::_initialize();
        $this->_model = D("Member");
        $this->_agentID = session('ADMIN_ID');
    }

    /**
     * 用户列表
     */
    public function index ($sid = 0)
    {
        $this->meta_title = "用户列表";
        $where = array();
        if ($this->_agentID == 1)
        {
            if ($sid > 0) $where['sid'] = $sid;
        } else
        {
            if ($sid == 0)
            {
                $this->error("没有查看权限");
            } elseif ($sid > 0)
            {
                $saleman = M("saleman")->cache('agnet_saleman' . $this->_agentID . "_" . $sid, 1800)->where(array('id' => $sid,'agent_id' => $this->_agentID))->find();
                empty($saleman) ? $this->error("没有查看权限") : $where['sid'] = $sid;
            } else
            {
                $this->error("无效的销售员id");
            }
        }
        $listData = $this->lists($this->_model, $where);
        $this->assign("listData", $listData);
        $this->setBackCookieUrl();
        $this->display();
    }

    /**
     * 增加用户
     */
    public function add ()
    {
        $this->meta_title = "用户增加";
        $this->_getOrglist();
        $this->assign('backUrl', cookie('__forward__'));
        $this->_getTags();
        $this->display();
    }

    /**
     * 修改用户
     */
    public function edit ($id)
    {
        $this->meta_title = "用户修改";
        $info = $this->_model->where(array("id" => $id))->find();
        $this->assign('info', $info);
        $this->assign('backUrl', cookie('__forward__'));
        $this->display('add');
    }

    /**
     * 修改用户
     */
    public function detail ($id)
    {
        $this->meta_title = "用户详情";
        $info = $this->_model->where(array("id" => $id))->find();
        $this->assign('info', $info);
        $this->assign('backUrl', cookie('__forward__'));
        $this->display();
    }

    /**
     * 修改保存
     */
    public function update ()
    {
        $res = $this->_model->Member();
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
