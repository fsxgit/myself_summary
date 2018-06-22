<?php
namespace Content\Model;
use Think\Model;

class ArticleModel extends Model
{

    protected $_validate = array(
            array('cname','require','请选择文章分类',self::MUST_VALIDATE,'regex'),
            array('title','require','请输入文章标题',self::MUST_VALIDATE,'regex'),
            array('title','','文章已存在',self::EXISTS_VALIDATE,'unique'),
            array('cover','require','请上传文章封面',self::MUST_VALIDATE,'regex'),
            array('content','require','请输入文章简介',self::MUST_VALIDATE,'regex'),
            array('content','require','请输入文章内容',self::MUST_VALIDATE,'regex')
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
                $this->error = "发布文章失败";
                return false;
            }
        } else
        {
            $id = $this->save();
            if ($id === false)
            {
                $this->error = "修改文章失败";
                return false;
            }
        }
        return $tmp;
    }
}	