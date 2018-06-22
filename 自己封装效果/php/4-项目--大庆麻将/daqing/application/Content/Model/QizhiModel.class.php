<?php
namespace Content\Model;
use Think\Model;

class QizhiModel extends Model
{

    protected $_validate = array(
            array('title','require','请输入气质名称',self::EXISTS_VALIDATE,'regex',self::MODEL_BOTH),
            array('title','','气质已经存在',self::VALUE_VALIDATE,'unique',self::MODEL_BOTH),
    );

    protected $_auto = array(
            array('add_time',NOW_TIME,self::MODEL_INSERT),
            array('update_time',NOW_TIME,self::MODEL_UPDATE)
    );

    public function update ()
    {
        $tmp = $this->create();
        if (empty($tmp)) return false;
        if (! $tmp['id'])
        {
            $id = $this->add();
            if (! $id)
            {
                $this->error = "增加气质失败";
                return false;
            }
        } else
        {
            $id = $this->save();
            if ($id === false)
            {
                $this->error = "修改气质失败";
                return false;
            }
        }
        return $tmp;
    }
}	