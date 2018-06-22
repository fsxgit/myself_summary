<?php
namespace Content\Model;
use Think\Model;

class VideoModel extends Model
{

    protected $_validate = array(array('cname','require','请选择视频分类',self::MUST_VALIDATE,'regex'),
            array('title','require','请输入视频标题',self::MUST_VALIDATE,'regex'),
            array('title','','视频已存在',self::EXISTS_VALIDATE,'unique'),
            array('cover','require','请上传视频封面',self::MUST_VALIDATE,'regex'),
            array('video_url','checkVideo','请上传视频',self::MUST_VALIDATE,'callback'),
            array('content','require','请输入视频内容',self::MUST_VALIDATE,'regex'));

    /**
     * 验证是否上传图像
     * @param unknown $data
     * @return boolean
     */
    protected function checkVideo ($data)
    {
        return $data == null ? false : true;
    }

    protected $_auto = array(
            array('add_time',NOW_TIME,self::MODEL_INSERT),
            array('update_time',NOW_TIME,self::MODEL_UPDATE)
            
    );

    public function update ($data)
    {
        $tmp = $this->create($data);
        if (empty($tmp)) return false;
        if (! $tmp['id'])
        {
            $tmp['id'] = $this->add();
            if (! $tmp['id'])
            {
                $this->error = "发布视频失败";
                return false;
            }
        } else
        {
            $id = $this->save();
            if ($id === false)
            {
                $this->error = "修改视频失败";
                return false;
            }
        }
        return $tmp;
    }
}	