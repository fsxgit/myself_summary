<?php
namespace Content\Model;
use Think\Model;

class PushModel extends Model
{

    protected $_validate = array(array('title','require','请输入消息标题',self::EXISTS_VALIDATE,'regex',self::MODEL_BOTH),
            array('title','','消息已经存在',self::VALUE_VALIDATE,'unique',self::MODEL_BOTH),
            array('content','require','请输入消息内容',self::MUST_VALIDATE,'regex'));

    protected $_auto = array(array('add_time',NOW_TIME,self::MODEL_INSERT),array('update_time',NOW_TIME,self::MODEL_UPDATE));

    public function update ()
    {
        $tmp = $this->create();
        if (empty($tmp)) return false;
        $id = $this->add();
        if (! $id)
        {
            $this->error = "推送消息失败";
            return false;
        }
        return $tmp;
    }
}	