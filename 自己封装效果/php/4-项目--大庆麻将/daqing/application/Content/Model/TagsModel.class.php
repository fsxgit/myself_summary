<?php
namespace Content\Model;
use Think\Model;

class TagsModel extends Model
{

    protected $_validate = array(
            array('tags_name','require','请输入定制标签名称',self::EXISTS_VALIDATE,'regex',self::MODEL_BOTH),
            array('tags_name','','定制标签已经存在',self::VALUE_VALIDATE,'unique',self::MODEL_BOTH),
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
                $this->error = "增加定制标签失败";
                return false;
            }
        } else
        {
            $id = $this->save();
            if ($id === false)
            {
                $this->error = "修改定制标签失败";
                return false;
            }
        }
        return $tmp;
    }
}	