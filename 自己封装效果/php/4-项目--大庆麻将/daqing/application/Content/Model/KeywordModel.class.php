<?php
namespace Content\Model;
use Think\Model;

class KeywordModel extends Model
{

    protected $_validate = array(
            array('kds','require','请输入关键词',self::EXISTS_VALIDATE,'regex',self::MODEL_BOTH),
            array('kds','','关键词已经存在',self::VALUE_VALIDATE,'unique',self::MODEL_BOTH),
    );

    protected $_auto = array();

    public function update ()
    {
        $tmp = $this->create();
        if (empty($tmp)) return false;
        if (! $tmp['id'])
        {
            $id = $this->add();
            if (! $id)
            {
                $this->error = "添加关键词失败";
                return false;
            }
        } else
        {
            $id = $this->save();
            if ($id === false)
            {
                $this->error = "修改关键词失败";
                return false;
            }
        }
        return $tmp;
    }
}	