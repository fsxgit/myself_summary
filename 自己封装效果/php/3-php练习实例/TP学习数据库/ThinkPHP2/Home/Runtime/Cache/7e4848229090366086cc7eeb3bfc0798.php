<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html><html><head lang="en"><meta charset="UTF-8"><title></title></head><body><p>标量输出</p><h1>hello my name is <?php echo ($name1); ?></h1><h1>hello my name is <?php echo ($name2); ?></h1><p>数组输出</p><h1>hello my name is <?php echo ($name3); ?></h1><h1>hello my name is <?php echo ($name3a); ?></h1><h1>hello my name is <?php echo ($name3b[1]); ?></h1><h1>hello my name is <?php echo ($name4); ?></h1><h1>hello my name is <?php echo ($name4a); ?></h1><h1>hello my name is <?php echo ($name4b[c3]); ?></h1><h1>hello my name is <?php echo ($name4b["c3"]); ?></h1><p>对象输出</p><h1>hello my name is <?php echo ($NF->f); ?></h1><h1>hello my name is <?php echo ($NF->f); ?></h1><p>系统变量</p><p>首先要有get的值</p><h1>hello my name is <?php echo ($name5); ?></h1><h1>hello my name is <?php echo ($_GET['name']); ?></h1><h1>hello 浏览器的版本是 <?php echo (THINK_VERSION); ?></h1><h1>hello 获取常量是 <?php echo (APP_NAME); ?></h1><p>使用函数</p><h1>hello 这里是经过md5加密的数据 <?php echo (md5($name6)); ?></h1><h1>hello 这里是变为大写 <?php echo (strtoupper($name6)); ?></h1><h1>hello 这里是时间戳 <?php echo ($name7); ?></h1><h1>hello 这里是设置过格式的时间 <?php echo (date("Y m d H:i:s",$name7)); ?></h1><h1>hello 这里是设置过格式的时间 <?php echo (date("Y-m-d",$name7)); ?></h1><p>设置默认值</p><h1>hello 这里是设置默认值的方法 <?php echo (($name8)?($name8):"我是默认值"); ?></h1><h1>hello 这里是设置默认值的方法 <?php echo (($name8a)?($name8a):"我是默认值"); ?></h1><p>运算符使用</p><h1>hello 这里是运算符的使用 <?php echo ($num+1); ?></h1><h1>hello 这里是运算符的使用 <?php echo ($num-1); ?></h1><h1>hello 这里是运算符的使用 <?php echo ($num*3); ?></h1></body></html>