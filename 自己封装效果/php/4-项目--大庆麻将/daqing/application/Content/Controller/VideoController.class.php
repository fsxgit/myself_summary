<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;

/**
 * 今日视频 管理
 */
class VideoController extends AdminbaseController
{

    private $_model;

    public function _initialize ()
    {
        parent::_initialize();
        $this->_model = D("Video");
    }

    private function _cateList ($cname = '')
    {
        $cate = array(array('cname' => '成长视频'),array('cname' => '讲座视频'));
        foreach ($cate as &$v)
        {
            $v['selected'] = $v['cname'] == $cname ? "selected" : "";
        }
        $this->assign('cate', $cate);
    }

    /**
     * 视频 列表
     */
    public function index ()
    {
        $this->meta_title = "视频列表";
        $where = array();
        $listData = $this->lists($this->_model, $where);
        $this->assign("listData", $listData);
        $this->setBackCookieUrl();
        $this->display();
    }

    /**
     * 增加视频 
     */
    public function add ()
    {
        $this->meta_title = "发布视频 ";
        $this->_stageList();
        $this->_cateList();
        $this->assign('backUrl', cookie('__forward__'));
        $this->display();
    }

    /**
     * 修改视频 
     */
    public function edit ($id)
    {
        $this->meta_title = "修改视频 ";
        $info = $this->_model->where(array("id" => $id))->find();
        $this->assign('info', $info);
        $stage = M("video_stage")->where(array("id" => $id))->getField('stage', true);
        $this->_stageList($stage);
        $this->_cateList($info['cname']);
        $this->assign('backUrl', cookie('__forward__'));
        $this->display('add');
    }

    /**
     * 修改/增加视频 保存
     */
    public function update ()
    {
        $stage = (array) I('stage', 0);
        $data = I('post.');
        $res = $this->_model->update($data);
        if ($res)
        {
            if (! in_array(0, $stage))
            {
                M("video_stage")->where(array('infoid' => $res['id']))->delete();
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
                M("video_stage")->addAll($dataList);
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
        $this->meta_title = "查看视频评论";
        $listData = $this->lists(M("video_comments"), array('infoid' => $id));
        $this->assign("listData", $listData);
        $this->display();
    }

    /**
     * 删除视频 
     */
    public function del ($id)
    {
        $data = $this->_model->where(array('id' => $id))->find();
        $res = $this->_model->where(array('id' => $id))->delete();
        if ($res)
        {
            M("video_stage")->where(array('infoid' => $id))->delete();
            $this->deleteIMG($data['cover']);
            $this->deleteIMG($data['video_url']);
            $this->success("删除成功!", cookie('__forward__'));
        } else
        {
            $this->error("删除失败");
        }
    }

    /**
     * 前台上传图片
     *
     * @return void|multitype:number
     */
    public function file ()
    {
        $savepath = 'video/';
        // 上传处理类
        $config = array('rootPath' => './' . C("UPLOADPATH"),'savePath' => $savepath,'saveName' => 'setFileName','exts' => array('mp4'),'autoSub' => false);
        // 实例化上传类
        $upload = new \Think\Upload($config);
        // 上传文件
        $info = $upload->upload();
        if (! $info)
        {
            $this->ajaxReturn($upload->getError());
        } else
        {
            $data = array();
            $data['url'] = sp_get_host() . '/' . C("UPLOADPATH") . $info['image']['savepath'] . $info['image']['savename'];
            $this->ajaxReturn($data);
        }
    }
}
