<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;

/**
 * 轮播图
 */
class BannerController extends AdminbaseController
{

    private $_model;

    public function _initialize ()
    {
        parent::_initialize();
        $this->_model = D("Banner");
    }

    /**
     * 轮播图列表
     */
    public function index ()
    {
        $this->meta_title = "轮播图列表";
        $table = "{$this->prefix}banner AS b";
        $join = "{$this->prefix}stage AS s ON b.stage=s.id";
        $listData = $this->lists(M()->table($table)->join($join),array(),'b.id desc',"b.*,s.stage AS stages");
        $this->assign("listData", $listData);
        $this->setBackCookieUrl();
        $this->display();
    }
    
    // 幻灯片排序
    public function listorders ()
    {
        $status = parent::_listorders($this->_model);
        if ($status)
        {
            $this->success("排序更新成功！");
        } else
        {
            $this->error("排序更新失败！");
        }
    }

    /**
     * 增加页面
     */
    public function add ()
    {
        $this->meta_title = "添加轮播图";
        $this->_stageList();
        $this->_targetTypeList();
        $this->assign('backUrl', cookie('__forward__'));
        $this->display();
    }

    /**
     * 修改轮播图
     */
    public function edit ($id)
    {
        $this->meta_title = "修改轮播图";
        $info = $this->_model->where(array("id" => $id))->find();
        $this->_stageList($info['stage']);
        $this->assign('info', $info);
        $this->_targetTypeList($info['to_type']);
        $this->assign('backUrl', cookie('__forward__'));
        $this->display('add');
    }

    /**
     * 修改保存
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

    private function _targetTypeList ($type = 0)
    {
        $data = array();
        $data[1]['type'] = 1;
        $data[1]['name'] = "文章";
        $data[1]['title'] = "请选择文章";
        $data[1]['url'] = U('article');
        $data[2]['type'] = 2;
        $data[2]['name'] = "视频";
        $data[2]['title'] = "请选择视频";
        $data[2]['url'] = U('video');
        foreach ($data as &$v)
        {
            $v['checked'] = ($v['type'] == $type) ? "checked" : "";
        }
        $this->assign('tlist', $data);
    }

    /**
     * 文章 frame
     */
    public function article ($stages)
    {
        $table = "{$this->prefix}article AS a";
        $join = "LEFT JOIN {$this->prefix}article_stage AS ast ON a.id=ast.infoid";
        $where = array();
        $where['ast.stage'] = $stages;
        $field = "a.id,a.title";
        $model = M()->field($field)->table($table)->join($join);
        $listData = $this->lists($model, $where, 'a.id DESC', $field, 'a.id');
        $this->assign('listData', $listData);
        $this->display();
    }

    /**
     * 视频frame
     */
    public function video ($stages)
    {
        $table = "{$this->prefix}video AS v";
        $join = "LEFT JOIN {$this->prefix}video_stage AS vst ON v.id=vst.infoid";
        $where = array();
        $where['vst.stage'] = $stages;
        $field = "v.id,v.title";
        $model = M()->field($field)->table($table)->join($join);
        $listData = $this->lists($model, $where, 'v.id DESC', $field, 'v.id');
        $this->assign('listData', $listData);
        $this->display('article');
    }
}
