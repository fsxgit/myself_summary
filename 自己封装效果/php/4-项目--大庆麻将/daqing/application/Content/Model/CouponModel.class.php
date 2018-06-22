<?php
namespace Content\Model;
use Think\Model;

class CouponModel extends Model
{

    protected $_validate = array(
            array('num','require','请输入生成数量',self::EXISTS_VALIDATE,'regex',self::MODEL_BOTH),
            array('num', '/^\d+$/', '数量只能为正整数', self::VALUE_VALIDATE, 'regex'),
            array('remark','require','请输入备注信息',self::EXISTS_VALIDATE,'regex',self::MODEL_BOTH),
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
                $this->error = "生成优惠码失败";
                return false;
            }
        } else
        {
            $id = $this->save();
            if ($id === false)
            {
                $this->error = "修改优惠码失败";
                return false;
            }
        }
        return $tmp;
    }
}	