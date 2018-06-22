<?php
namespace Content\Model;
use Think\Model;

/**
 * 订单提交
 */
class OrdersModel extends Model
{

    protected $_validate = array(
            array('user_id','require','缺少用户id',self::MUST_VALIDATE,'regex',self::MODEL_BOTH),
            array('sid','require','缺少业务员id',self::MUST_VALIDATE,'regex',self::MODEL_BOTH),
            array('consinge','require','请输入收货人',self::MUST_VALIDATE,'regex',self::MODEL_INSERT),
            array('mobile','require','请输入手机号',self::MUST_VALIDATE,'regex',self::MODEL_BOTH),
            array('mobile','/^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/','请输入正确的11位手机号码',self::VALUE_VALIDATE,'regex'),
            array('address','require','请选择收货地址',self::MUST_VALIDATE,'regex',self::MODEL_BOTH),
            array('total','require','缺少订单总价',self::MUST_VALIDATE,'regex',self::MODEL_BOTH)
    );

    protected $_auto = array(array('order_sn','makeOrderSn',self::MODEL_INSERT,'function'),
            array('add_time',NOW_TIME,self::MODEL_INSERT),
            array('update_time',NOW_TIME,self::MODEL_UPDATE));

    public function update ($data)
    {
        $tmp = $this->create($data);
        if (empty($tmp)) return false;
        // return $tmp;
        if (! $tmp['id'])
        {
            $id = $this->add();
            if (! $id)
            {
                $this->error = "订单增加失败";
                return false;
            }
        } else
        {
            $id = $this->save();
            if ($id === false)
            {
                $this->error = "订单修改失败";
                return false;
            }
        }
        return $tmp;
    }
}	