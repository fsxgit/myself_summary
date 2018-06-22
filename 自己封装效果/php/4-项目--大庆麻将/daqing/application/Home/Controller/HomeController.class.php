<?php
namespace Home\Controller;
use Think\Controller;

/**
 * 前台公共控制器
 * 为防止多分组Controller名称冲突，公共Controller名称统一使用分组名称
 */
class HomeController extends Controller
{

    /**
     * 表前缀 
     * @var String
     */
    protected $prefix;

    public function _initialize ()
    {
        $this->prefix = C("DB_PREFIX");
    }

    /**
     * 空操作，用于输出404页面
     */
    public function _empty ()
    {
        redirect(U('/'));
    }

    /**
     * 通用列表
     * @param string $model 模型
     * @param array $where 查询条件
     * @param string $order 排序方式
     * @param string $field 查询字段
     * @param number $limit 查询数据限制
     * @return boolean|multitype:number multitype: unknown |multitype:unknown \Think\mixed number
     */
    protected function selectLists ($model, $where = array(), $order = '', $field = true, $distinctField = "", $router = "")
    {
        $options = array();
        $REQUEST = (array) I('');
        if (is_string($model))
        {
            $model = M($model);
        }
        
        $OPT = new \ReflectionProperty($model, 'options');
        $OPT->setAccessible(true);
        
        $pk = $model->getPk();
        if ($order === null)
        {
            // order置空
        } else 
            if (isset($REQUEST['_order']) && isset($REQUEST['_field']) && in_array(strtolower($REQUEST['_order']), array('desc','asc')))
            {
                $options['order'] = '`' . $REQUEST['_field'] . '` ' . $REQUEST['_order'];
            } elseif ($order === '' && empty($options['order']) && ! empty($pk))
            {
                $options['order'] = $pk . ' desc';
            } elseif ($order)
            {
                $options['order'] = $order;
            }
        unset($REQUEST['_order'], $REQUEST['_field']);
        // 查询条件
        $options['where'] = array_filter(array_merge((array) $where), 
                function  ($val)
                {
                    if ($val === '' || $val === null)
                    {
                        return false;
                    } else
                    {
                        return true;
                    }
                });
        // 查询条件为空时
        $options['where'] = empty($options['where']) ? array() : $options['where'];
        $options = array_merge((array) $OPT->getValue($model), $options);
        // 是否去重复
        $total = 0;
        if (empty($distinctField))
        {
            $total = $model->where($options['where'])->count();
        } else
        {
            $total = $model->where($options['where'])->count("distinct({$distinctField})");
        }
        // 每页显示数量
        if (isset($REQUEST['r']))
        {
            $listRows = (int) $REQUEST['r'];
        } else
        {
            $listRows = C('HOME_LIST_ROWS') > 0 ? C('HOME_LIST_ROWS') : 10;
        }
        $page = new \Think\Page($total, $listRows, $REQUEST);
        // 开始分页
        if (! empty($router))
        {
            $page = new \Think\Page($total, $listRows, $REQUEST, $router);
        }
        if ($total > $listRows)
        {
            $page->setConfig('header', '');
            $page->setConfig('first', '首页');
            $page->setConfig('last', '尾页');
            $page->setConfig('prev', '上一页');
            $page->setConfig('next', '下一页');
            $page->setConfig('theme', '%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% %HEADER%');
            $page->rollPage = 5;
        }
        $p = $page->showLi();
        $this->assign('page', $p ? $p : '');
        $this->assign('total', $total);
        $options['limit'] = $page->firstRow . ',' . $page->listRows;
        $model->setProperty('options', $options);
        $totalPage = $page->totalPages > 1 ? $page->totalPages : 1;
        // 去重复
        $listData = array();
        if (empty($distinctField))
        {
            $listData = $model->field($field)->select();
        } else
        {
            $listData = $model->field($field)->group($distinctField)->select();
        }
        return $listData;
    }

    /**
     * 发送HTTP请求方法，目前只支持CURL发送请求
     * @param  string $url    请求URL
     * @param  array  $param  GET/POST参数数组
     * @param  string $method 请求方法GET/POST
     * @return array          响应数据
     * CURLOPT_TIMEOUT => 60,
     CURLOPT_RETURNTRANSFER => 1,
     CURLOPT_SSL_VERIFYPEER => false,
     CURLOPT_SSL_VERIFYHOST => false
     */
    protected function httpRequest ($url, $param, $header = array(), $method = 'GET')
    {
        $opts = array(CURLOPT_TIMEOUT => 60,CURLOPT_RETURNTRANSFER => 1,CURLOPT_SSL_VERIFYPEER => false,CURLOPT_SSL_VERIFYHOST => false);
        if (! empty($header))
        {
            $opts[CURLOPT_HTTPHEADER] = $header;
        }
        // 请求方式 get
        if (strtoupper($method) == 'GET')
        {
            $opts[CURLOPT_URL] = $url . '?' . http_build_query($param);
        } elseif (strtoupper($method) == 'POST')
        {
            $opts[CURLOPT_URL] = $url;
            $opts[CURLOPT_POST] = 1;
            $opts[CURLOPT_POSTFIELDS] = $param;
        }
        // 初始化并执行curl请求
        $ch = curl_init();
        curl_setopt_array($ch, $opts);
        $data = curl_exec($ch);
        $error = curl_error($ch);
        curl_close($ch);
        // 发生错误，抛出异常
        if ($error) throw new \Exception('请求发生错误：' . $error);
        return $data;
    }
}
