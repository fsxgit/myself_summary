<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;

/**
 * 图书
 */
class BookController extends AdminbaseController
{

    private $_model;

    public function _initialize ()
    {
        parent::_initialize();
        $this->_model = D("Book");
    }

    /**
     * 图书列表
     */
    public function index ()
    {
        $this->meta_title = "图书列表";
        $where = array();
        $field = "*";
        $listData = $this->lists($this->_model);
        $this->assign("listData", $listData);
        $this->setBackCookieUrl();
        $this->display();
    }

    /**
     * 增加图书
     */
    public function add ()
    {
        $this->meta_title = "添加图书";
        $this->assign('backUrl', cookie('__forward__'));
        $this->display();
    }

    /**
     * 修改图书
     */
    public function edit ($id)
    {
        $this->meta_title = "修改图书";
        $info = $this->_model->where(array("id" => $id))->find();
        $this->assign('info', $info);
        $this->assign('backUrl', cookie('__forward__'));
        $this->display('add');
    }

    /**
     * 修改保存
     */
    public function update ()
    {
        $res = $this->_model->update();
        if ($res)
        {
            $url = sp_get_host() . "/book/" . $res['id'];
            $fileName = "." . C('QRCODE_PATH') . md5($res['id'] . 'book') . '.png';
            $this->makeQrcode($url, $fileName);
            $this->success("操作成功", U('index'));
        } else
        {
            $this->error($this->_model->getError());
        }
    }

    /**
     * 删除
     */
    public function del ()
    {
        $id = array_unique((array) I('id', 0));
        if (in_array(0, $id))
        {
            $this->error('请选择要操作的数据!');
        }
        $map = array('id' => array('in',$id));
        $images = $this->_model->field('cover,photos_url')->where($map)->select();
        $res = $this->_model->where($map)->delete();
        if ($res)
        {
            foreach ($images as $v)
            {
                $this->deleteIMG($v['cover']);
                if ($v['photos_url'])
                {
                    $img = str2arr($v['photos_url']);
                    foreach ($img as $val)
                    {
                        $this->deleteIMG($val);
                    }
                }
            }
            $this->success("删除成功!", cookie('__forward__'));
        } else
        {
            $this->error("删除失败");
        }
    }
}
