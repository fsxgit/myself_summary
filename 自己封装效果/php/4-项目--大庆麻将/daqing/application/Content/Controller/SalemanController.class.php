<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;

/**
 * 销售员
 */
class SalemanController extends AdminbaseController
{

    private $_model;

    private $_agentID;

    public function _initialize ()
    {
        parent::_initialize();
        $this->_model = D("Saleman");
        $this->_agentID = session('ADMIN_ID');
    }

    /**
     * 销售员列表
     */
    public function index ()
    {
        $this->meta_title = "销售员列表";
        $where = array();
        if ($this->_agentID > 1) $where['agent_id'] = $this->_agentID;
        $listData = $this->lists($this->_model, $where);
        $this->assign("listData", $listData);
        $this->setBackCookieUrl();
        $this->display();
    }

    /**
     * 增加页面
     */
    public function add ()
    {
        if ($this->_agentID == 1)
        {
            echo ('只有代理才能修改销售员');
            return true;
        }
        $this->meta_title = "添加销售员";
        $this->assign('backUrl', cookie('__forward__'));
        $this->display();
    }

    /**
     * 修改销售员
     */
    public function edit ($id)
    {
        if ($this->_agentID == 1)
        {
            echo ('只有代理才能修改销售员');
            return true;
        }
        $this->meta_title = "修改销售员";
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
        $data = I("post.");
        $data['agent_id'] = $this->_agentID;
        $code = $recreate = 0;
        while (! $recreate)
        {
            $code = mt_rand(100000, 999999);
            $count = $this->_model->where(array("code" => $code))->count();
            $recreate = $count ? 0 : 1;
        }
        $data['code'] = $code;
        $res = $this->_model->update($data);
        if ($res)
        {
            if (! $data['id'])
            {
                // 更新用户销售员
                M("member")->where(array('phone' => $res['phone']))->setField("saleman_id", $res['id']);
            }
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
