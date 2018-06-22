<?php
namespace Content\Model;
use Think\Model;

class ExpertModel extends Model
{

    protected $_validate = array(array('realname','require','请输入专家姓名',self::MUST_VALIDATE,'regex'),
            array('titles','require','请输入专家头衔',self::MUST_VALIDATE,'regex'),
            array('avatar','require','请上传专家头像',self::MUST_VALIDATE,'regex'),
            array('intro','require','请输入专家简介',self::MUST_VALIDATE,'regex'));

    protected $_auto = array(array('add_time',NOW_TIME,self::MODEL_INSERT),array('update_time',NOW_TIME,self::MODEL_UPDATE));

    public function update ()
    {
        $tmp = $this->create();
        if (empty($tmp)) return false;
        if (! $tmp['id'])
        {
            $id = $this->add();
            if (! $id)
            {
                $this->error = "添加专家失败";
                return false;
            }
        } else
        {
            $id = $this->save();
            if ($id === false)
            {
                $this->error = "修改专家失败";
                return false;
            }
        }
        return $tmp;
    }
}	