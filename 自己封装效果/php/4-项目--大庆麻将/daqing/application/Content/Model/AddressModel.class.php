<?php
namespace Content\Model;
use Think\Model;

class AddressModel extends Model
{

    protected $_validate = array(
            array('user_id','require','缺少用户id',self::MUST_VALIDATE,'regex'),
            array('consinge','require','请输入收货人',self::MUST_VALIDATE,'regex'),
            array('mobile','require','请输入手机号',self::MUST_VALIDATE,'regex'),
            array('mobile','/^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/','请输入正确的11位手机号码',self::VALUE_VALIDATE,'regex'),
            array('address','require','请输入详细收货地址',self::MUST_VALIDATE,'regex')
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
                $this->error = "添加地址失败";
                return false;
            }
        } else
        {
            $id = $this->save();
            if ($id === false)
            {
                $this->error = "修改地址失败";
                return false;
            }
        }
        return $tmp;
    }
}	