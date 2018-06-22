<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;

/**
 * 今日提问管理
 */
class AskController extends AdminbaseController
{

    private $_model;

    public function _initialize ()
    {
        parent::_initialize();
        $this->_model = D("Ask");
    }

    /**
     * 提问列表
     */
    public function index ()
    {
        $this->meta_title = "提问列表";
        $where = array();
        $table = "{$this->prefix}ask AS a";
        $join = "LEFT JOIN {$this->prefix}expert AS e ON a.expert_id=e.id";
        $filed = "a.*,e.realname AS expert_name";
        $listData = $this->lists(M()->table($table)->join($join), $where, 'a.id', $filed);
        $this->assign("listData", $listData);
        $this->setBackCookieUrl();
        $this->display();
    }

    /**
     * 查看并回复
     */
    public function reply ()
    {
        if (IS_POST)
        {
            $data = I("post.");
            ! $data['id'] && $this->error("缺少id");
            ! isset($data['expert_id']) && $this->error("请选择专家");
            ! $data['reply'] && $this->error("请输入回复内容");
            $data['status'] = 1;
            if ($this->_model->save($data) !== false)
            {
                // 更新专家提问数量
                M("expert")->where(array("id" => $data['expert_id']))->setInc('ask_nums');
                $this->success("操作成功", U('index'));
            } else
            {
                $this->error("操作失败");
            }
        } else
        {
            $id = I("id", 0, 'intval');
            ! $id && $this->error("请选择要回复的内容");
            $this->meta_title = "提问处理";
            $info = M("ask")->where(array('id' => $id))->find();
            $this->_expertsList($info['expert_id']);
            $this->assign('info', $info);
            $this->assign('backUrl', cookie('__forward__'));
            $this->display();
        }
    }

    /**
     * 查看
     */
    public function view ($id)
    {
        $this->meta_title = "查看提问";
        $info = M("ask")->where(array('id' => $id))->find();
        $this->assign('info', $info);
        $this->display();
    }

    /**
     * 专家列表
     */
    private function _expertsList ($expertid)
    {
        $experts = M("expert")->field('id,realname')->select();
        $data = array();
        foreach ($experts as &$v)
        {
            $v['checked'] = $v['id'] == $expertid ? "checked" : "";
        }
        $this->assign('experts', $experts);
    }

    /**
     * 删除提问
     */
    public function del ($id)
    {
        $res = $this->_model->where(array('id' => $id))->delete();
        if ($res)
        {
            $this->success("删除成功!", cookie('__forward__'));
        } else
        {
            $this->error("删除失败");
        }
    }
}
