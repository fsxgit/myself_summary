<?php
namespace Home\Model;
use Think\Model;

class MemberModel extends Model
{

    /**
     * 用户模型自动完成
     * @var unknown
     */
    protected $_auto = array(array('password','think_user_md5',self::MODEL_INSERT,'function',UC_AUTH_KEY),
            array('add_time',NOW_TIME,self::MODEL_INSERT),
            array('update_time',NOW_TIME,self::MODEL_BOTH));

    public function update ()
    {
        $rules = array(array('username','require','请输入用户名',self::MUST_VALIDATE,'regex'),
                array('username','6,32','用户名长度在6~32位之间',self::MUST_VALIDATE,'length'),
                array('username','','用户名已存在',self::EXISTS_VALIDATE,'unique'),
                array('password','require','请输入密码',self::MUST_VALIDATE,'regex'),
                array('realname','require','请输入您的真实姓名',self::MUST_VALIDATE,'regex'),
                array('idcard','require','请输入身份证号码',self::MUST_VALIDATE,'regex'),
                array('idcard','checkIDcard','请输入有效的身份证号码',self::MUST_VALIDATE,'callback'));
        
        $tmp = $this->validate($rules)->create();
        if (! $tmp) return false;
        if ($tmp['id'])
        {
            $ret = $this->save();
            if ($ret === false)
            {
                $this->error = "用户修改失败";
                return false;
            }
        } else
        {
            $tmp['id'] = $this->add();
            if (! $tmp['id'])
            {
                $this->error = "用户注册失败";
                return false;
            }
        }
        return $tmp;
    }

    /**
     * 验证身份证号有效信息
     * @param unknown $idcard
     */
    protected function checkIDcard ($idcard)
    {
        vendor("IDValidator.IDValidator");
        $idCheck = new \IDValidator();
        $ret = $idCheck::getInstance()->isValid($idcard);
        return $ret ? true : false;
    }

    /**
     * app 登录
     */
    public function login ()
    {
        $rules = array(array('username','require','请输入用户名',self::MUST_VALIDATE,'regex'),
                array('username','6,32','用户名长度在6~32位之间',self::MUST_VALIDATE,'length'),
                array('password','require','请输入您的密码',self::MUST_VALIDATE,'regex',self::MODEL_INSERT));
        $tmp = $this->validate($rules)->create();
        if (! $tmp) return false;
        $member = $this->where(array('username' => $tmp['username']))->find();
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
        session('userLoginS', $member, 7200);
        return $member;
    }

    /**
     * 找回密码
     */
    public function memberGetPwd ()
    {
        $rules = array(array('mobile','require','手机号不能为空',self::MUST_VALIDATE,'regex'),
                array('mobile','/^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/','请输入正确的11位手机号码',self::VALUE_VALIDATE,'regex'),
                array('mobile','isPhoneExist','手机号未注册',self::VALUE_VALIDATE,'callback'),
                array('captcha','require','验证码不能为空',self::MUST_VALIDATE,'regex'),
                array('captcha,mobile','checkCaptcha','验证码错误',self::MUST_VALIDATE,'callback'),
                array('password','require','请输入您的密码',self::MUST_VALIDATE,'regex'));
        // array('repassword','password','两次密码输入不一致',self::EXISTS_VALIDATE,'confirm')
        
        $tmp = $this->validate($rules)->create();
        if (! $tmp) return false;
        $res = $this->where(array("mobile" => $tmp['mobile']))->setField('password', $tmp['password']);
        if ($res === false)
        {
            $this->error = "找回密码失败,请联系管理员";
            return false;
        }
        return true;
    }

    public function changePwd ()
    {
        $rules = array(array('oldpassword','require','请输入原密码',self::MUST_VALIDATE,'regex'),
                array('id,oldpassword','checkOldPassword','原密码错误',self::MUST_VALIDATE,'callback'),
                array('password','require','请输入您的密码',self::MUST_VALIDATE,'regex'),
                array('repassword','password','两次密码输入不一致',self::EXISTS_VALIDATE,'confirm'));
        $this->_auto[] = array('password','think_user_md5',self::MODEL_UPDATE,'function',UC_AUTH_KEY);
        $tmp = $this->validate($rules)->create();
        
        if (! $tmp) return false;
        $res = $this->save($tmp);
        if ($res === false)
        {
            $this->error = "密码修改失败,请联系管理员";
            return false;
        }
        return true;
    }

    /**
     * 验证旧密码
     */
    protected function checkOldPassword ($data)
    {
        $pwd = $this->where(array("id" => $data['id']))->getField("password");
        $opwd = think_user_md5($data['oldpassword'], UC_AUTH_KEY);
        return $pwd == $pwd ? true : false;
    }
}