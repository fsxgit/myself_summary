<?php
namespace Content\Model;
use Think\Model;

class KechengModel extends Model
{

    protected $_validate = array(
            array('title','require','请输入课程名称',self::MUST_VALIDATE,'regex'),
           );

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
                $this->error = "添加课程失败";
                return false;
            }
        } else
        {
            $id = $this->save();
            if ($id === false)
            {
                $this->error = "修改课程失败";
                return false;
            }
        }
        return $tmp;
    }
}	