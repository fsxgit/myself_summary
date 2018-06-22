<?php
namespace Content\Model;
use Think\Model;

class TestModel extends Model
{

    protected $_validate = array(array('qizhi_id','require','请选择试题关联气质',self::MUST_VALIDATE,'regex'),
            array('title','require','请输入试题名称',self::MUST_VALIDATE,'regex'),
            array('title','','试题已经存在',self::VALUE_VALIDATE,'unique',self::MODEL_BOTH),
            array('options','require','请输入试题选项',self::MUST_VALIDATE,'regex'),
            array('options','checkOptions','无效的试题选项',self::MUST_VALIDATE,'callback'));

    protected $_auto = array(array('options','optionstoarray',self::MODEL_BOTH,'function'),
            array('add_time',NOW_TIME,self::MODEL_INSERT),
            array('update_time',NOW_TIME,self::MODEL_UPDATE));

    protected function checkOptions ($options)
    {
        $data = explode("\n", $options);
        $keys = $values = array();
        foreach ($data as $k => $v)
        {
            if (trim($v) && strpos(trim($v), "|") !== false)
            {
                list ($keys[$k],$values[$k]) = explode("|", $v);
                if (strval(floor($keys[$k])) != $keys[$k])
                {
                    return false;
                }
            }
        }
        return (empty($keys) || empty($values)) ? false : true;
    }

    public function update ()
    {
        $tmp = $this->create();
        if (empty($tmp)) return false;
        if (! $tmp['id'])
        {
            $id = $this->add();
            if (! $id)
            {
                $this->error = "添加试题失败";
                return false;
            }
        } else
        {
            $id = $this->save();
            if ($id === false)
            {
                $this->error = "修改试题失败";
                return false;
            }
        }
        return $tmp;
    }
}	