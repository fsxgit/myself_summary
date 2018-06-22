<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>搜索功能的实现</title>
    <style>
        body{padding:30px 100px;}
        .fx_box{padding-bottom: 100px;}
        td,th{padding:4px 20px;}
        .addBtn{margin:20px 50px;}
        form{margin-bottom:40px;}
    </style>
    <script>
        function jump(){

//            window.location="/ThinkPHP/index.php/User/add";
            <!--模块名之前的部分可以用__URL__来代替避免了以后修改了项目目录名而引发的全部修改的问题, 全部链接都可以这样用-->
            window.location="__URL__/add";
        }
    </script>
</head>
<body>
<div class="fx_box">

<h1>hello 我是用户界面！！</h1>
<h2>下面是通过遍历把数据库里的数据读出来以表格形式呈现你出来的：</h2>
    <!--搜索功能的实现-->
    <form action="/ThinkPHP/index.php/User/searchDeal" method="post">
        用户名：<input type="text" name="username"/>性别：<input type="radio" name="sex" value="1"/>男<input type="radio" name="sex"  value="0"/>女
        <input type="submit"  value="搜索"/>
    </form>

    <!--搜索功能的实现 结束 -->
<table border="1" style="border-collapse:collapse; font-size:16px;" >
    <tr>
        <th>id</th>
        <th>username</th>
        <th>sex</th>
        <th>操作</th>
    </tr>
    <!--注意：这里的name和id是必须的；其中name的值必须与控制器中的自定义分配数组的名字保持一致；（例如：$this->assign('fx',$arr); //将数据分配给变量形参fx）；id随意-->
    <?php if(is_array($fx)): $i = 0; $__LIST__ = $fx;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr>
            <td><?php echo ($vo["id"]); ?></td>
            <td><?php echo ($vo["username"]); ?></td>
            <td><?php echo ($vo["sex"]); ?></td>
            <td><a href="/ThinkPHP/index.php/User/del/id/<?php echo ($vo["id"]); ?>">删除</a> || <a href="/ThinkPHP/index.php/User/modify/id/<?php echo ($vo["id"]); ?>">修改</a></td>
        </tr><?php endforeach; endif; else: echo "" ;endif; ?>

</table>
<div class="addBtn">
    <input type="button" onclick="jump()" value="添加新数据"/>
</div>

</div>
</body>
</html>