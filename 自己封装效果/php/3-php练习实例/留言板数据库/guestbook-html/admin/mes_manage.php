<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
<head>
<title>瑞曼-留言本</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description" content="" />
<meta name="keywords" content="" />
<link rel="stylesheet" type="text/css" href="../style/skin.css" />
<script type="text/javascript">
    function deal(arg,n) {
        //var det = document.getElementsByClassName('detail')[n];
        if(arg == 'cha') {
			var det = document.getElementById('detail'+n)
            det.style.display = 'block';	//显示
        }
        if(arg == 'close') {
			var det = document.getElementById('detail'+n)
            det.style.display = 'none';		//隐藏
        }
        if(arg == 'del') {
            var s = window.confirm('您确定要删除吗？');	//确认对话框,返回true/false
			if(s == true)
			{
				//此时才真正去做删除工作。。。。。
				location.href = "deleteLiuyan.php?id=" + n;	//这里就是传说中的使用get方式传数据到另一个页面
			}
        }
    }
    function logout() {
        window.confirm('您确定要退出吗?');
        window.location.href = './login.html';
    }


    function zhuandao() {
        var o_shuruyema = document.getElementById("shuruyema");
        var o_pageBox = document.getElementsByClassName("pageBox")[0];
        var a_li = o_pageBox.getElementsByTagName("li");
        var len = a_li.length;
        var pageTolNum = len-4;
        var pageNum = o_shuruyema.value;
        if(pageNum){
            if(pageNum <= pageTolNum){
                location = "index.php?page="+pageNum;
            }else{
                alert("总页数为:"+pageTolNum);
            }
        }
    }
</script>

<style type="text/css">
    .nowPage{color: #cc3f1e !important; font-weight: bold; border:1px solid #cc3f1e; padding: 0 3px;}
    .LastPage{color:#ccc;}
    #shuruyema{width:30px;margin-left:10px; }
    .zhuandao{font-style:normal; color:#cc3f1e; cursor: pointer;}
</style>
</head>
    <body>
        <div id="body">

            <!--引用公共头部导航 开始-->
            <?php include("../public/header.php"); ?>
            <!--引用公共头部导航 结束-->

            <div id="cont" style="padding-bottom:0px;">
                <div class="mes">
                    <span id="del"><a href="#">!删除全部</a></span>

                    <?php
                        //一.连接数据库的固定语句
                        require("conn.php"); //将conn.php文件中的代码引入到此处来
                        $pageSize = 3; //认为设定/每页显示个数
                        if(isset($_GET['page'])){   //isset()用来判断一个变量是否有数据的函数
                            $page = $_GET['page'];  //第几页当前页码
                        }else{
                            $page = 1;  //第几页第几页当前页码
                        }

                        $beginLineNo = ($page-1)*$pageSize;  //每页开始显示的位置
                        $sql = "select * from liuyanbiao  order by id desc limit $beginLineNo,$pageSize;";// order by id desc使数据顺序倒过来
                        $result = mysql_query($sql);//如果成功返回所有数据集
                        //该数据集保存了所有select语句所查询到的数据
                        if($result == false)
                        {
                            echo "读取数据失败!原因可能是:". mysql_error();
                        }else{
                        $len = mysql_num_rows($result);//mysql_num_rows()用于取得数据集的条数
                        for($i = 0; $i < $len; $i++) {
                            $one = mysql_fetch_array($result);//取得$result数组集中的 "下" 一行数据,并转换成数组放入$rec中
                                                            //$rec就是一个数组,e其下标(键名)就是slect语句的字段名
                                                            //for循环控制次数
                //                            print_r($rec);//打印出来数组 包括数字下标和字符下标
                    ?>
                        <!-- 留言区域开始 -->
                        <div class="contr">
                            <div class="list">
                                <ul>
                                    <li>编号：<?php echo $one['id']; ?></li>
                                    <li>时间：<?php echo $one['fabushijian']; ?></li>
                                    <li>姓名：<?php echo showHTMLTag($one['xingming']); ?></li>
                                    <li>标题：<?php echo showHTMLTag($one['biaoti']); ?></li>
                                </ul>
                            </div>
                            <ul>
                                <li><a href="javascript:void(0)" onclick="deal('cha',<?php echo $one['id']; ?>);">查看内容</a></li>
                                <li><a href="mes_reply.php?id=<?php echo $one['id']; ?>">回复</a></li>
                                <li><a href="mes_modify.php?id=<?php echo $one['id']; ?>">修改</a></li>
                                <li><a href="javascript:void(0)" onclick="deal('del',<?php echo $one['id']; ?>);">删除</a></li>
                            </ul>
                            <div class="detail" id="detail<?php echo $one['id']; ?>">
                                <span onclick="deal('close',<?php echo $one['id']; ?>);">X关闭</span>
                                <p><?php echo showHTMLTag($one['neirong']); ?></p>
                            </div>
                        </div>
                        <!-- 留言区域止 -->
                    <?php
                        }
                        };
                    ?>

                </div>

<!--                      翻页开始-->
                <div id="page">
                    <span><a href="mes_manage.php?page=1">首页</a></span>
                    <ul class="pageBox">
                        <?php
                        if($page == 1) //是第一页
                        {
                            ?>
                            <li class="LastPage">上一页</li>
                        <?php
                        }else{ //不是最后一页
                            ?>
                            <li><a href="mes_manage.php?page=<?php echo $page-1; ?>">上一页</a></li>
                        <?php
                        };
                        ?>

                        <?php
                        $sql = "select * from liuyanbiao  order by id desc";// order by id desc使数据顺序倒过来
                        $result2 = mysql_query($sql);//如果成功返回所有数据集
                        $total = mysql_num_rows($result2);
                        $pageCount = ceil($total/$pageSize);  //总页数
                        for($i=1; $i<=$pageCount; $i++)
                        {
                            if($i==$page)
                            {
                                ?>
                                <li><a class="nowPage" href="mes_manage.php?page=<?php echo $i; ?>"><?php echo $i;
                                        ?></a></li>
                            <?php
                            }else{
                                ?>
                                <li><a href="mes_manage.php?page=<?php echo $i; ?>"><?php echo $i; ?></a></li>
                            <?php
                            }

                        }

                        if($page == $pageCount) //是最后一页
                        {
                            ?>
                            <li class="LastPage">下一页</li>
                        <?php
                        }else{ //不是最后一页
                            ?>
                            <li><a href="mes_manage.php?page=<?php echo $page+1; ?>">下一页</a></li>
                        <?php
                        };
                        ?>
                        <li>总共有:<?php echo $pageCount; ?>页</li>
                        <li>当前是第:<?php echo $page; ?>页</li>
                    </ul>
                    <span><a href="mes_manage.php?page=<?php echo $pageCount; ?>">最后一页</a></span>
                    <span>
                        <input type="text" name="shuruyema" id="shuruyema" value=""/>
                        <em class="zhuandao" onclick="zhuandao();">转到</em>
                    </span>
                </div>
<!--                    翻页结束 -->

            </div>
            <!--引用公共底部 开始-->
            <?php include("../public/footer.php"); ?>
            <!--引用公共底部 结束-->
        </div>
    </body>
</html>