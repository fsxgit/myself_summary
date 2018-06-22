<?php
namespace Content\Model;
use Think\Model;

class MemberModel extends Model
{

    protected $_validate = array(array('phone','require','请输入手机号',self::MUST_VALIDATE,'regex'),
            array('phone','/^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/','请输入正确的11位手机号码',self::VALUE_VALIDATE,'regex'),
            array('phone','','手机号已存在',self::EXISTS_VALIDATE,'unique'),
            array('captcha','require','验证码不能为空',self::MUST_VALIDATE,'regex'),
            array('captcha,phone','checkCaptcha','验证码错误',self::MUST_VALIDATE,'callback'),
            array('password','require','请输入密码',self::MUST_VALIDATE,'regex',self::MODEL_INSERT),
            array('service_code','require','请输入服务码',self::MUST_VALIDATE,'regex',self::MODEL_INSERT));

    protected $_auto = array(array('password','think_user_md5',self::MODEL_INSERT,'function',UC_AUTH_KEY),
            array('avatar','http://child.zai0312.com/data/upload/face.png',self::MODEL_INSERT),
            array('add_time',NOW_TIME,self::MODEL_INSERT),
            array('token','createToken',self::MODEL_INSERT,'callback'),
            array('update_time',NOW_TIME,self::MODEL_UPDATE));

    protected function createToken ()
    {
        return think_user_md5(date("Ymdhis"));
    }

    public function update ($data)
    {
        $tmp = $this->create($data);
        if (empty($tmp)) return false;
        if (! $tmp['id'])
        {
            $tmp['id'] = $this->add();
            if (! $tmp['id'])
            {
                $this->error = "用户注册失败";
                return false;
            }
        } else
        {
            $id = $this->save();
            if ($id === false)
            {
                $this->error = "用户修户失败";
                return false;
            }
        }
        return $tmp;
    }

    /**
     * app 登录
     */
    public function login ()
    {
        $rules = array(array('phone','require','请输入手机号',self::MUST_VALIDATE,'regex'),
                array('phone','/^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/','请输入正确的11位手机号码',self::VALUE_VALIDATE,'regex'),
                array('password','require','请输入密码',self::MUST_VALIDATE,'regex'));
        
        $tmp = $this->validate($rules)->create();
        if (! $tmp) return false;
        $field = "*,";
        $field .= "CASE WHEN (DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(child_birthday, '%Y'))<=3 THEN 1 WHEN (DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(child_birthday, '%Y'))<=6 THEN 2 WHEN (DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(child_birthday, '%Y'))<=9 THEN 3 WHEN (DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(child_birthday, '%Y'))<=12 THEN 4 WHEN (DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(child_birthday, '%Y'))<=15 THEN 5 WHEN (DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(child_birthday, '%Y'))<=18 THEN 6 ELSE 0 END AS stage,";
        $field .= "CASE WHEN to_days(FROM_UNIXTIME(last_sign_time,'%Y%m%d')) - to_days(current_date())   >= - 1 THEN days  ELSE 0 END AS days,";
        $field .= "CASE WHEN to_days(current_date())-to_days(FROM_UNIXTIME(add_time,'%Y%m%d')) >7 THEN 0  ELSE 1 END AS freevip";
        $member = $this->field($field)->where(array('phone' => $tmp['phone']))->find();
        if (empty($member))
        {
            $this->error = "用户不存在";
            return false;
        }
        if ($member['password'] != $tmp['password'])
        {
            $this->error = "密码不正确";
            return false;
        }
        if ($member['is_lock'])
        {
            $this->error = "账号已锁定";
            return false;
        }
        $member['token'] = think_user_md5(date("Ymdhis"));
        // 更新逻辑
        $tmpData = array();
        if ($tmp['regid'])
        {
            $tmpData['regid'] = $tmp['regid'];
            $this->where(array('regid' => $tmp['regid']))->setField('regid', '');
        }
        $tmpData['token'] = $member['token'];
        $this->where(array('phone' => $tmp['phone']))->save($tmpData);
        return $member;
    }

    /**
     * 找回密码
     */
    public function userGetPwd ()
    {
        $rules = array(array('phone','require','手机号不能为空',self::MUST_VALIDATE,'regex'),
                array('phone','/^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/','请输入正确的11位手机号码',self::VALUE_VALIDATE,'regex'),
                array('phone','isPhoneExist','手机号未注册',self::VALUE_VALIDATE,'callback'),
                array('captcha','require','验证码不能为空',self::MUST_VALIDATE,'regex'),
                array('captcha,phone','checkCaptcha','验证码错误',self::MUST_VALIDATE,'callback'),
                array('password','require','请输入您的密码',self::MUST_VALIDATE,'regex'));
        // array('repassword','password','两次密码输入不一致',self::EXISTS_VALIDATE,'confirm')
        
        $tmp = $this->validate($rules)->create();
        if (! $tmp) return false;
        $res = $this->where(array("phone" => $tmp['phone']))->setField('password', $tmp['password']);
        if ($res === false)
        {
            $this->error = "找回验证码失败,请联系管理员";
            return false;
        }
        return true;
    }

    /**
     * 验证手机号是否存在
     * @param string $phone 找回密码的用户手机号
     * @return boolean
     */
    protected function isPhoneExist ($phone)
    {
        $user = $this->where(array('phone' => $phone))->find();
        return (empty($user) ? false : true);
    }

    /**
     * 验证手机验证码
     */
    protected function checkCaptcha ($data)
    {
        return $data['captcha'] == S($data['phone']) ? true : false;
    }
}	