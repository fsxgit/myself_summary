<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>从数据库调用数据</title>
    <style>
        *{margin:0; padding: 0;}
        input{border:none; background: none; outline: none;}
        .box{padding:40px;}
        .xx_box img{width: 100px; height:auto;}
        td{border:1px solid #000; padding:10px 20px;}
        h1,h2{text-align: center;}
    </style>
</head>
<body>

<div class="wrap">
    <h1>从数据库调用数据呈现在页面上</h1>
    <div class="box">
        <table>
            <tr>
                <td>编号</td>
                <td>姓名</td>
                <td>性别</td>
                <td>民族</td>
                <td>出生日期</td>
            </tr>

            <?php
            //【第一步】 设定编码，防止乱码
            header("content-Type: text/html; charset=UTF-8");


            //【第二步】 链接数据库 // 创建链接
            $servername = "localhost";  //域名
            $username = "root";         //用户名
            $password = "root";         //密码
            $dbname = "fsx";            //数据库名
            mysql_connect($servername,$username,$password);     //创建链接
            mysql_select_db($dbname);                           //选择链接的数据库
            mysql_query("set names utf8");                      //设定表编码


            //【第三步】 书写sql语句
            $sql = "select * from xinxi";                       //书写sql语句


            //【第四步】 执行SQL，获取结果是一个对象
            $res = mysql_query($sql);                           //执行$sql语句
//            var_dump($res);
//            die;

            //【第五步】 对象转数组【有各种方式】
//            $row=mysql_fetch_assoc($res);                     //对象转数组   //取数据
//            var_dump($row);           //只显示第一条数据

            //【第六步】 循环数组 展示数据
            while($row=mysql_fetch_assoc($res))//将result结果集中查询结果取出一条
            {
                echo"<tr><td>".$row["id"]."</td><td>".$row["name"]."</td><td class='sex'>".$row["sex"]."</td><td>".$row["minzu"]."</td><td>".$row["date"]."</td><tr>";

            }



//            取出id=3的数据
            $sql = "select * from xinxi where id=3";
            $res = mysql_query($sql);
            $row=mysql_fetch_array($res);
//            var_dump($row);
            echo "<h3>单独取出id为3的数据：</h3>";
            echo "我是".$row['id']."号，我的名字是".$row['name']."，性别：".$row['sex']."，出生年月是：".$row['date'];

            ?>


        </table>
    </div>
</div>
<script src="js/jquery-1.9.1.min.js"></script>
<script>
    $(function(){
        $(".sex").each(function(){
            var sex = $(this).text();
            if(sex == 1){
                $(this).text("男");
            }else{
                $(this).text("女");
            }
        })
    })
</script>
</body>
</html>