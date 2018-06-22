<?php
namespace Content\Model;
use Think\Model;

class BookModel extends Model
{

    /**
     * 用户模型自动完成
     * @var unknown
     */
    protected $_auto = array(array('photos_url','arr2str',self::MODEL_BOTH,'function'),
            array('add_time',NOW_TIME,self::MODEL_INSERT),
            array('update_time',NOW_TIME,self::MODEL_BOTH));

    protected $_validate = array(
            array('title','require','请输入标题',self::MUST_VALIDATE,'regex'),
            array('cover','require','请上传封面',self::MUST_VALIDATE,'regex'),
            array('market_price','require','请输入市场价',self::MUST_VALIDATE,'regex'),
            array('price','require','请输入现价',self::MUST_VALIDATE,'regex'),
            array('freight','require','请输入运费',self::MUST_VALIDATE,'regex'),
            array('stock','require','请输入库存',self::MUST_VALIDATE,'regex'),
            array('stock', '/^\d+$/', '库存只能为正整数', self::VALUE_VALIDATE, 'regex'),
            array('supplier','require','请输入供货商',self::MUST_VALIDATE,'regex'),
            array('content','require','请输入内容',self::MUST_VALIDATE,'regex'),
            array('photos_url','checkPhotosUrl','请上传轮播图',self::MUST_VALIDATE,'callback'));

    /**
     * 验证考点
     * @param unknown $data
     */
    protected function checkPhotosUrl ($data)
    {
        return $data ? true : false;
    }

    public function update ()
    {
        $tmp = $this->create();
        if (! $tmp) return false;
        if ($tmp['id'])
        {
            $ret = $this->save();
            if ($ret === false)
            {
                $this->error = "修改报考失败";
                return false;
            }
        } else
        {
            $tmp['id'] = $this->add();
            if (! $tmp['id'])
            {
                $this->error = "增加报考失败";
                return false;
            }
        }
        return $tmp;
    }
}