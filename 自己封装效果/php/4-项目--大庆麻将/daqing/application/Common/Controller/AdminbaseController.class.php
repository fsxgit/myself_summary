<?php

/**
 * 后台Controller
 */
namespace Common\Controller;
use Common\Controller\AppframeController;
use JPush\Client as JPush;

class AdminbaseController extends AppframeController
{

    public function __construct ()
    {
        $admintpl_path = C("SP_ADMIN_TMPL_PATH") . C("SP_ADMIN_DEFAULT_THEME") . "/";
        C("TMPL_ACTION_SUCCESS", $admintpl_path . C("SP_ADMIN_TMPL_ACTION_SUCCESS"));
        C("TMPL_ACTION_ERROR", $admintpl_path . C("SP_ADMIN_TMPL_ACTION_ERROR"));
        parent::__construct();
        $time = time();
        $this->assign("js_debug", APP_DEBUG ? "?v=$time" : "");
    }

    protected $prefix;

    function _initialize ()
    {
        parent::_initialize();
        $this->load_app_admin_menu_lang();
        if (isset($_SESSION['ADMIN_ID']))
        {
            $users_obj = M("Users");
            $id = $_SESSION['ADMIN_ID'];
            $user = $users_obj->where("id=$id")->find();
            if (! $this->check_access($id))
            {
                $this->error("您没有访问权限！");
                exit();
            }
            $this->assign("admin", $user);
        } else
        {
            // $this->error("您还没有登录！",U("admin/public/login"));
            if (IS_AJAX)
            {
                $this->error("您还没有登录！", U("admin/public/login"));
            } else
            {
                header("Location:" . U("admin/public/login"));
                exit();
            }
        }
        $this->prefix = C("DB_PREFIX");
    }

    /**
     * 初始化后台菜单
     */
    public function initMenu ()
    {
        $Menu = F("Menu");
        if (! $Menu)
        {
            $Menu = D("Common/Menu")->menu_cache();
        }
        return $Menu;
    }

    /**
     * 消息提示
     * @param type $message
     * @param type $jumpUrl
     * @param type $ajax 
     */
    public function success ($message = '', $jumpUrl = '', $ajax = false)
    {
        parent::success($message, $jumpUrl, $ajax);
    }

    /**
     * 模板显示
     * @param type $templateFile 指定要调用的模板文件
     * @param type $charset 输出编码
     * @param type $contentType 输出类型
     * @param string $content 输出内容
     * 此方法作用在于实现后台模板直接存放在各自项目目录下。例如Admin项目的后台模板，直接存放在Admin/Tpl/目录下
     */
    public function display ($templateFile = '', $charset = '', $contentType = '', $content = '', $prefix = '')
    {
        parent::display($this->parseTemplate($templateFile), $charset, $contentType);
    }

    /**
     * 获取输出页面内容
     * 调用内置的模板引擎fetch方法，
     * @access protected
     * @param string $templateFile 指定要调用的模板文件
     * 默认为空 由系统自动定位模板文件
     * @param string $content 模板输出内容
     * @param string $prefix 模板缓存前缀*
     * @return string
     */
    public function fetch ($templateFile = '', $content = '', $prefix = '')
    {
        $templateFile = empty($content) ? $this->parseTemplate($templateFile) : '';
        return parent::fetch($templateFile, $content, $prefix);
    }

    /**
     * 自动定位模板文件
     * @access protected
     * @param string $template 模板文件规则
     * @return string
     */
    public function parseTemplate ($template = '')
    {
        $tmpl_path = C("SP_ADMIN_TMPL_PATH");
        define("SP_TMPL_PATH", $tmpl_path);
        // 获取当前主题名称
        $theme = C('SP_ADMIN_DEFAULT_THEME');
        
        if (is_file($template))
        {
            // 获取当前主题的模版路径
            define('THEME_PATH', $tmpl_path . $theme . "/");
            return $template;
        }
        $depr = C('TMPL_FILE_DEPR');
        $template = str_replace(':', $depr, $template);
        
        // 获取当前模块
        $module = MODULE_NAME . "/";
        if (strpos($template, '@'))
        { // 跨模块调用模版文件
            list ($module,$template) = explode('@', $template);
        }
        // 获取当前主题的模版路径
        define('THEME_PATH', $tmpl_path . $theme . "/");
        
        // 分析模板文件规则
        if ('' == $template)
        {
            // 如果模板文件名为空 按照默认规则定位
            $template = CONTROLLER_NAME . $depr . ACTION_NAME;
        } elseif (false === strpos($template, '/'))
        {
            $template = CONTROLLER_NAME . $depr . $template;
        }
        
        C("TMPL_PARSE_STRING.__TMPL__", __ROOT__ . "/" . THEME_PATH);
        
        C('SP_VIEW_PATH', $tmpl_path);
        C('DEFAULT_THEME', $theme);
        define("SP_CURRENT_THEME", $theme);
        
        $file = sp_add_template_file_suffix(THEME_PATH . $module . $template);
        $file = str_replace("//", '/', $file);
        if (! file_exists_case($file)) E(L('_TEMPLATE_NOT_EXIST_') . ':' . $file);
        return $file;
    }

    /**
     *  排序 排序字段为listorders数组 POST 排序字段为：listorder
     */
    protected function _listorders ($model)
    {
        if (! is_object($model))
        {
            return false;
        }
        $pk = $model->getPk(); // 获取主键名称
        $ids = $_POST['listorders'];
        foreach ($ids as $key => $r)
        {
            $data['listorder'] = $r;
            $model->where(array($pk => $key))->save($data);
        }
        return true;
    }

    /**
     *  排序 排序字段为listorders数组 POST 排序字段为：listorder
     */
    protected function _listSort ($model)
    {
        if (! is_object($model))
        {
            return false;
        }
        $pk = $model->getPk(); // 获取主键名称
        $ids = $_POST['listorders'];
        foreach ($ids as $key => $r)
        {
            $data['sort'] = $r;
            $model->where(array($pk => $key))->save($data);
        }
        return true;
    }

    /**
     * 后台分页
     * 
     */
    protected function page ($total_size = 1, $page_size = 0, $current_page = 1, $listRows = 6, $pageParam = '', $pageLink = '', $static = FALSE)
    {
        if ($page_size == 0)
        {
            $page_size = C("PAGE_LISTROWS");
        }
        
        if (empty($pageParam))
        {
            $pageParam = C("VAR_PAGE");
        }
        
        $Page = new \Page($total_size, $page_size, $current_page, $listRows, $pageParam, $pageLink, $static);
        $Page->SetPager('Admin', '{first}{prev}&nbsp;{liststart}{list}{listend}&nbsp;{next}{last}', 
                array("listlong" => "9","first" => "首页","last" => "尾页","prev" => "上一页","next" => "下一页","list" => "*","disabledclass" => ""));
        return $Page;
    }

    private function check_access ($uid)
    {
        // 如果用户角色是1，则无需判断
        if ($uid == 1)
        {
            return true;
        }
        
        $rule = MODULE_NAME . CONTROLLER_NAME . ACTION_NAME;
        $no_need_check_rules = array("AdminIndexindex","AdminMainindex");
        
        if (! in_array($rule, $no_need_check_rules))
        {
            return sp_auth_check($uid);
        } else
        {
            return true;
        }
    }

    private function load_app_admin_menu_lang ()
    {
        if (C('LANG_SWITCH_ON', null, false))
        {
            $admin_menu_lang_file = SPAPP . MODULE_NAME . "/Lang/" . LANG_SET . "/admin_menu.php";
            if (is_file($admin_menu_lang_file))
            {
                $lang = include $admin_menu_lang_file;
                L($lang);
            }
        }
    }

    /**
     * 通用分页列表数据集获取方法
     *
     *  可以通过url参数传递where条件,例如:  index.html?name=asdfasdfasdfddds
     *  可以通过url空值排序字段和方式,例如: index.html?_field=id&_order=asc
     *  可以通过url参数r指定每页数据条数,例如: index.html?r=5
     *
     * @param sting|Model  $model   模型名或模型实例
     * @param array        $where   where查询条件(优先级: $where>$_REQUEST>模型设定)
     * @param array|string $order   排序条件,传入null时使用sql默认排序或模型属性(优先级最高);
     *                              请求参数中如果指定了_order和_field则据此排序(优先级第二);
     *                              否则使用$order参数(如果$order参数,且模型也没有设定过order,则取主键降序);
     *
     * @param array        $base    基本的查询条件
     * @param boolean      $field   单表模型用不到该参数,要用在多表join时为field()方法指定参数
     * @author 朱亚杰 <xcoolcc@gmail.com>
     *
     * @return array|false
     * 返回数据集
     */
    protected function lists ($model, $where = array(), $order = '', $field = true, $distinctField = "")
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
            $listRows = C('LIST_ROWS') > 0 ? C('LIST_ROWS') : 10;
        }
        // 开始分页
        $page = new \Think\Page($total, $listRows, $REQUEST);
        if ($total > $listRows)
        {
            $page->setConfig('header', '');
            $page->setConfig('prev', '上一页');
            $page->setConfig('next', '下一页');
            $page->setConfig('theme', '%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% %HEADER%');
        }
        $p = $page->show();
        $this->assign('page', $p ? $p : '');
        $this->assign('total', $total);
        $options['limit'] = $page->firstRow . ',' . $page->listRows;
        $model->setProperty('options', $options);
        // 去重复
        if (empty($distinctField))
        {
            return $model->field($field)->select();
        } else
        {
            return $model->field($field)->group($distinctField)->select();
        }
    }

    /**
     * 设置返回cookie
     */
    protected function setBackCookieUrl ($sign = "__forward__")
    {
        cookie($sign, $_SERVER['REQUEST_URI'], 1800);
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

    /**
     * 删除图片
     * @param string $path 图片路径
     */
    protected function deleteIMG ($file)
    {
        $path = SITE_PATH . str_replace(sp_get_host(), '', $file);
        $pathThumb = $path . "!thumb.jpg";
        is_file($path) && unlink($path);
        is_file($pathThumb) && unlink($pathThumb);
    }

    /**
     * 年龄段
     * @param number $stage
     */
    protected function _stageList ($stage = 0)
    {
        $data = M("stage")->cache('stage')->select();
        $stageStr = "";
        foreach ($data as &$v)
        {
            if (is_array($stage))
            {
                $v['checked'] = in_array($v['id'], $stage) ? "checked" : "";
            } else
            {
                $v['checked'] = $v['id'] == $stage ? "checked" : "";
            }
        }
        $this->assign('stage', $data);
    }

    /**
     * 年龄段文本
     */
    protected function _stagetText ()
    {
        $stageCache = S("stagetext");
        if (! $stageCache)
        {
            $stageCache = array();
            $stage = M("stage")->select();
            foreach ($stage as $v)
            {
                $stageCache[$v['id']] = $v['stage'];
            }
            S('stagetext', $stageCache);
        }
        return $stageCache;
    }
    
    /**
     * 推送消息-后台
     * @param string $content 推送的内容
     * @param boolean $toAll 全部用户or指定用户
     * @param array $regids 指定用户regid
     * @param array $extras 扩展字段
     */
    protected function dopush ($content, $toAll = true, $regids = array(), $extras = array())
    {
        vendor("jPush.autoload");
        $app_key = C('JPUSH_CONF.key');
        $master_secret = C('JPUSH_CONF.secret');
        if (empty($extras))
        {
            $extras['from'] = 'jiguang';
        } else
        {
            array_push($extras, array('from' => 'jiguang'));
        }
        $client = new JPush($app_key, $master_secret);
        if ($toAll)
        {
            $push_payload = $client->push()->setPlatform('all')->addAllAudience()->iosNotification($content, 
                    array('sound' => 'sound','badge' => '+1','extras' => $extras))->androidNotification($content, array('extras' => $extras));
        } else
        {
            if (empty($regids)) return;
            $push_payload = $client->push()->setPlatform('all')->addRegistrationId($regids)->iosNotification($content, 
                    array('sound' => 'sound','badge' => '+1','extras' => $extras))->androidNotification($content, array('extras' => $extras));
        }
        
        $response = $push_payload->send();
    }

    /**
     * $path = "/data/upload/20170224/58afd57e9acaa.jpg";
     $this->thinkImage($path, 3);
     * 图像裁切
     * @param 裁切图片的路径 $path
     * @param 裁切图片的路径 方式   $style
     * 1 ;等比例缩放类型
     * 2 ;缩放后填充类型  宽高固定，不足用白色填充
     * 3 ;居中裁剪类型
     * 4 ;左上角裁剪类型
     * 5 ;右下角裁剪类型
     * 6 ;固定尺寸缩放类型
     * @param 裁切图片的路径宽  $width
     * @param 裁切图片的路径高   $height
     * @param 是否保留原图 $original
     */
    protected function thinkImage ($path, $style = 1, $width = 300, $height = 300, $original = true)
    {
        $image = new \Think\Image();
        $path = '.' . $path;
        $image->open($path);
        if ($original) $path = $path . "!thumb.jpg";
        switch ($style)
        {
            case 1:
                $image->thumb($width, $height, \Think\Image::IMAGE_THUMB_SCALE)->save($path);
                break;
            case 2:
                $image->thumb($width, $height, \Think\Image::IMAGE_THUMB_FILLED)->save($path);
                break;
            case 3:
                $image->thumb($width, $height, \Think\Image::IMAGE_THUMB_CENTER)->save($path);
                break;
            case 4:
                $image->thumb($width, $height, \Think\Image::IMAGE_THUMB_NORTHWEST)->save($path);
                break;
            case 5:
                $image->thumb($width, $height, \Think\Image::IMAGE_THUMB_SOUTHEAST)->save($path);
                break;
            case 6:
                $image->thumb($width, $height, \Think\Image::IMAGE_THUMB_FIXED)->save($path);
                break;
        }
    }
}

    