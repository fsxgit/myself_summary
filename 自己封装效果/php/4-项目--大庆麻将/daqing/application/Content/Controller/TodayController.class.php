<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;

/**
 * 今日小引导管理
 */
class TodayController extends AdminbaseController
{

    private $_model;

    public function _initialize ()
    {
        parent::_initialize();
        $this->_model = D("Today");
    }

    /**
     * 小引导列表
     */
    public function index ()
    {
        $this->meta_title = "小引导列表";
        $where = array();
        $listData = $this->lists($this->_model, $where);
        $this->assign("listData", $listData);
        $this->setBackCookieUrl();
        $this->display();
    }

    /**
     * 增加小引导
     */
    public function add ()
    {
        $this->meta_title = "发布小引导";
        $this->_stageList();
        $this->assign('backUrl', cookie('__forward__'));
        $this->display();
    }

    /**
     * 修改小引导
     */
    public function edit ($id)
    {
        $this->meta_title = "修改小引导";
        $info = $this->_model->where(array("id" => $id))->find();
        $this->assign('info', $info);
        $stage = M("today_stage")->where(array("id" => $id))->getField('stage', true);
        $this->_stageList($stage);
        $this->assign('backUrl', cookie('__forward__'));
        $this->display('add');
    }

    /**
     * 修改/增加小引导保存
     */
    public function update ()
    {
        $stage = (array) I('stage', 0);
        $res = $this->_model->update();
        if ($res)
        {
            if (! in_array(0, $stage))
            {
                M("today_stage")->where(array('infoid' => $res['id']))->delete();
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
                M("today_stage")->addAll($dataList);
            }
            $this->success("操作成功", U('index'));
        } else
        {
            $this->error($this->_model->getError());
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
            M("today_stage")->where(array('infoid' => $id))->delete();
            $this->deleteIMG($data['cover']);
            $this->success("删除成功!", cookie('__forward__'));
        } else
        {
            $this->error("删除失败");
        }
    }
}
