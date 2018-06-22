<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;

/**
 * 今日课程管理
 */
class KechengController extends AdminbaseController
{

    private $_model;

    public function _initialize ()
    {
        parent::_initialize();
        $this->_model = D("Kecheng");
    }

    /**
     * 课程列表
     */
    public function index ()
    {
        $this->meta_title = "课程列表";
        $listData = $this->lists($this->_model);
        $this->assign("listData", $listData);
        $this->setBackCookieUrl();
        $this->display();
    }

    /**
     * 增加课程
     */
    public function add ()
    {
        $this->meta_title = "发布课程";
        $this->assign('backUrl', cookie('__forward__'));
        $this->display();
    }

    /**
     * 修改课程
     */
    public function edit ($id)
    {
        $this->meta_title = "修改课程";
        $info = $this->_model->where(array("id" => $id))->find();
        $this->assign('info', $info);
        $this->assign('backUrl', cookie('__forward__'));
        $this->display('add');
    }

    /**
     * 修改/增加课程保存
     */
    public function update ()
    {
        $stage = (array) I('stage', 0);
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
     * 删除课程
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

    /**
     * 具体课程
     */
    public function day ($kid)
    {
        $this->meta_title = "课程内容列表";
        $listData = M("kecheng_day")->where(array("kc_id" => $kid))->select();
        $this->assign('kid', $kid);
        $this->assign('listData', $listData);
        $this->setBackCookieUrl();
        $this->display();
    }

    /**
     * 具体课程
     */
    public function create ($kid)
    {
        ! $kid && $this->error("请选择课程");
        $this->meta_title = "添加课程内容";
        $this->assign('kid', $kid);
        $this->assign('backUrl', cookie('__forward__'));
        $this->display();
    }

    /**
     * 具体课程
     */
    public function save ($id)
    {
        $this->meta_title = "修改课程内容";
        $info = M("kecheng_day")->where(array("id" => $id))->find();
        $this->assign('info', $info);
        $this->assign('kid', $info['kc_id']);
        $this->assign('backUrl', cookie('__forward__'));
        $this->display('create');
    }

    /**
     * 具体课程更新、保存
     */
    public function dayupdate ()
    {
        if (IS_POST)
        {
            $data = I("post.");
            ! $data['sign'] && $this->error('请输入英文标识');
            ! $data['intro'] && $this->error('请输入简介');
            ! $data['cover'] && $this->error('请上传封面');
            $model = M("kecheng_day");
            if ($data['id'])
            {
                $ret = $model->save($data);
            } else
            {
                $ret = $model->add($data);
            }
            if ($ret)
            {
                $this->success('操作成功', U('day', array('kid' => $data['kc_id'])));
            } else
            {
                $this->error("操作失败");
            }
        }
    }

    /**
     * 课程内容删除
     */
    public function daydel ($id)
    {
        $info = M("kecheng_day")->where(array("id" => $id))->find();
        $ret = M("kecheng_day")->where(array("id" => $id))->delete();
        if ($ret)
        {
            $this->deleteIMG($info['cover']);
            $this->success('删除成功');
        } else
        {
            $this->error("删除失败");
        }
    }

    /**
     * 课程申请
     */
    public function apply ()
    {
        $this->meta_title = "课程申请列表";
        $listData = $this->lists(M("kecheng_apply"));
        $this->assign('listData', $listData);
        $this->display();
    }
}
