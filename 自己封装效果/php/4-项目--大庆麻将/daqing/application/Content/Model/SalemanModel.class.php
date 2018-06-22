<?php
namespace Content\Model;
use Think\Model;

/**
 * 销售员
 * @author ihope99
 *
 */
class SalemanModel extends Model
{

    protected $_validate = array(
            array('realname','require','请输入销售员姓名',self::MUST_VALIDATE,'regex'),
            array('phone','require','请输入手机号',self::MUST_VALIDATE,'regex'),
            array('phone','/^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/','请输入正确的11位手机号码',self::VALUE_VALIDATE,'regex'),
            array('phone','','手机号已存在',self::EXISTS_VALIDATE,'unique'),
    );

    protected $_auto = array(
            array('add_time',NOW_TIME,self::MODEL_INSERT),
            array('update_time',NOW_TIME,self::MODEL_UPDATE));

    public function update ($data)
    {
        $tmp = $this->create($data);
        if (empty($tmp)) return false;
        if (! $tmp['id'])
        {
            $id = $this->add();
            if (! $id)
            {
                $this->error = "添加销售员失败";
                return false;
            }
        } else
        {
            $id = $this->save();
            if ($id === false)
            {
                $this->error = "修改销售员失败";
                return false;
            }
        }
        return $tmp;
    }
}	