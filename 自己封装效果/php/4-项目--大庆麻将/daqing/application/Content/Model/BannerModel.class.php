<?php
namespace Content\Model;
use Think\Model;

class BannerModel extends Model
{

    /**
     * 用户模型自动完成
     * @var unknown
     */
    protected $_auto = array(
            array('add_time',NOW_TIME,self::MODEL_INSERT),
            array('update_time',NOW_TIME,self::MODEL_BOTH));

    protected $_validate = array(
            array('cover','require','请上传图片',self::MUST_VALIDATE,'regex'),
            array('to_type','require','请选择跳转类型',self::MUST_VALIDATE,'regex'),
            array('title','require','请选择跳转内容',self::MUST_VALIDATE,'regex'),
            array('to_infoid','require','请选择跳转内容',self::MUST_VALIDATE,'regex')
           );

    /**
     * 验证考点
     * @param unknown $data
     */
    protected function checkPhotosUrl ($data)
    {
        return $data ? true : false;
    }

    public function update ()
    {
        $tmp = $this->create();
        if (! $tmp) return false;
        if ($tmp['id'])
        {
            $ret = $this->save();
            if ($ret === false)
            {
                $this->error = "修改轮播图失败";
                return false;
            }
        } else
        {
            $tmp['id'] = $this->add();
            if (! $tmp['id'])
            {
                $this->error = "增加轮播图失败";
                return false;
            }
        }
        return $tmp;
    }
}