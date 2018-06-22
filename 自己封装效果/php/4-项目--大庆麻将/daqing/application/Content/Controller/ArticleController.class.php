<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;

/**
 * 今日文章管理
 */
class ArticleController extends AdminbaseController
{

    private $_model;

    public function _initialize ()
    {
        parent::_initialize();
        $this->_model = D("Article");
    }

    private function _cateList ($cname = '')
    {
        $cate = array(array('cname' => '学习管理'),array('cname' => '情商管理'),array('cname' => '生命教育'),array('cname' => '品格教育'));
        foreach ($cate as &$v)
        {
            $v['selected'] = $v['cname'] == $cname ? "selected" : "";
        }
        $this->assign('cate', $cate);
    }

    /**
     * 文章列表
     */
    public function index ()
    {
        $this->meta_title = "文章列表";
        $where = array();
        $listData = $this->lists($this->_model, $where);
        $this->assign("listData", $listData);
        $this->setBackCookieUrl();
        $this->display();
    }

    /**
     * 增加文章
     */
    public function add ()
    {
        $this->meta_title = "发布文章";
        $this->_stageList();
        $this->_cateList();
        $this->assign('backUrl', cookie('__forward__'));
        $this->display();
    }

    /**
     * 修改文章
     */
    public function edit ($id)
    {
        $this->meta_title = "修改文章";
        $info = $this->_model->where(array("id" => $id))->find();
        $this->assign('info', $info);
        $stage = M("article_stage")->where(array("infoid" => $id))->getField('stage', true);
        $this->_stageList($stage);
        $this->_cateList($info['cname']);
        $this->assign('backUrl', cookie('__forward__'));
        $this->display('add');
    }

    /**
     * 修改/增加文章保存
     */
    public function update ()
    {
        $stage = (array) I('stage', 0);
        $res = $this->_model->update();
        if ($res)
        {
            if (! in_array(0, $stage))
            {
                M("article_stage")->where(array('infoid' => $res['id']))->delete();
                // 年龄段文本
                $stagetext = $this->_stagetText();
                // 年龄段保存数据
                $stages = "";
                // 批量保存数据
                $dataList = array();
                foreach ($stage as $k => $v)
                {
                    $stages .= $stagetext[$v] . "|";
                    $dataList[$k]['infoid'] = $res['id'];
                    $dataList[$k]['stage'] = $v;
                    // 自动清缓存
                    S("app_growup_" . $v, null);
                }
                $this->_model->where(array("id" => $res['id']))->setField("stages", substr($stages, 0, - 1));
                M("article_stage")->addAll($dataList);
            }
            $this->success("操作成功", U('index'));
        } else
        {
            $this->error($this->_model->getError());
        }
    }

    /**
     * 查看评论
     */
    public function comment ($id)
    {
        $this->meta_title = "查看文章评论";
        $listData = $this->lists(M("article_comments"), array('infoid' => $id));
        $this->assign("listData", $listData);
        $this->display();
    }

    /**
     * 删除文章
     */
    public function del ($id)
    {
        $data = $this->_model->where(array('id' => $id))->find();
        $res = $this->_model->where(array('id' => $id))->delete();
        if ($res)
        {
            M("article_stage")->where(array('infoid' => $id))->delete();
            $this->deleteIMG($data['cover']);
            $this->success("删除成功!", cookie('__forward__'));
        } else
        {
            $this->error("删除失败");
        }
    }
}
