<?php
namespace Home\Controller;

class RegisterController extends HomeController
{

    public function index ()
    {
		
        if (IS_POST)
        {
			
            $model = D("Member");
            $ret = $model->update();
            if ($ret)
            {
                /*$this->success('注册成功', U('/'));*/
				 $this->redirect('Home/Index/index');

            } else
            {
                $this->error($model->getError());
            }
        } else
        {
            $this->display();
        }
    }


    public function login ()
    {
        if (IS_POST)
        {
            $model = D("Member");
            $ret = $model->login();
            if ($ret)
            {
                /*$this->success('登录成功', U('/'));*/
				$this->redirect('Home/Index/index');
            } else
            {
                $this->error($model->getError());
            }
        } else
        {
            $this->display();
        }
    }

    public function loginout ()
    {
        session('userLoginS' , null);
        /*$this->success('退出成功',U('/'));*/
		$this->redirect('Home/Index/index');
    }
}  

