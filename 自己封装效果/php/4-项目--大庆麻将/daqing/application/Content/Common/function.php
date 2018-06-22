<?php

// 分析枚举类型配置值 格式 a:名称1,b:名称2
function parse_config_attr ($string)
{
    $array = preg_split('/[,;\r\n]+/', trim($string, ",;\r\n"));
    if (strpos($string, ':'))
    {
        $value = array();
        foreach ($array as $val)
        {
            list ($k,$v) = explode(':', $val);
            $value[$k] = $v;
        }
    } else
    {
        $value = $array;
    }
    return $value;
}

/**
 * 试题选项转序列号数组
 * @param string $option
 * @return string
 */
function optionstoarray ($option)
{
    $data = explode("\n", $option);
    $keys = $values = array();
    foreach ($data as $k => $v)
    {
        if (trim($v) && strpos(trim($v), "|") !== false)
        {
            list ($keys[$k],$values[$k]) = explode("|", $v);
        }
    }
    return json_encode(array_combine($keys, $values));
}

/**
 * 试题选项数组转展示字符串
 * @param string $str
 * @return string
 */
function arraytooptions ($str)
{
    if (! $str) return "";
    $data = json_decode($str,1);
    $val = "";
    foreach ($data as $k => $v)
    {
        $val .= $k . "|" . $v . "\n";
    }
    return $val;
}