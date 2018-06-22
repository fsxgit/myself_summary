<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tuolaji <479923197@qq.com>
// +----------------------------------------------------------------------
/**
 * 吧币获得规则
 */
namespace Admin\Controller;
use Common\Controller\AdminbaseController;

class GoldController extends AdminbaseController
{
    
    // 吧币配置签到、发表帖子、看视频、发表评论、上传小任务、发咨询
    public function index ()
    {
        $this->display();
    }
    
    // SMTP配置处理
    public function index_post ()
    {
        $post = array_map('trim', I('post.'));
        
        if (in_array('', $post) && ! empty($post['smtpsecure'])) $this->error("不能留空！");
        
        $configs['QIANDAO'] = intval($post['qiandao']);
        $configs['SENDPOSTS'] = intval($post['sendposts']);
        $configs['WATCHVIDEO'] = intval($post['wacthvideo']);
        $configs['SENDCOMMENT'] = intval($post['sendcomment']);
        $configs['UPLOADTASK'] = intval($post['uploadtask']);
        $configs['SENDSEEK'] = intval($post['sendseek']);
        $configs['GOLD_DAY'] = intval($post['gold_day']);
        $result = sp_set_dynamic_config($configs);
        sp_clear_cache();
        if ($result)
        {
            $this->success("保存成功！");
        } else
        {
            $this->error("保存失败！");
        }
    }
}

