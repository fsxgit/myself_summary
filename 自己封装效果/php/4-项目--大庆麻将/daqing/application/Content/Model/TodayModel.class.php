<?php
namespace Content\Model;
use Think\Model;

class TodayModel extends Model
{

    protected $_validate = array(
            array('title','require','请输入小引导标题',self::MUST_VALIDATE,'regex'),
            array('title','','标题已存在',self::EXISTS_VALIDATE,'unique'),
            array('cover','require','请上传小引导封面',self::MUST_VALIDATE,'regex'),
            array('content','require','请输入小引导内容',self::MUST_VALIDATE,'regex')
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
            $tmp['id'] = $this->add();
            if (! $tmp['id'])
            {
                $this->error = "发布小引导失败";
                return false;
            }
        } else
        {
            $id = $this->save();
            if ($id === false)
            {
                $this->error = "修改小引导失败";
                return false;
            }
        }
        return $tmp;
    }
}	