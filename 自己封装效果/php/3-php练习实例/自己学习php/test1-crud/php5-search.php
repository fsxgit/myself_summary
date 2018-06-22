<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>查询</title>
    <style>
        .xxBox{width:1000px; margin:20px auto;}
        .shou{font-size: 12px; padding-left: 20px;}
    </style>
    <script>
       window.onload=function(){
           var m = <?php echo $_GET['sex'];  ?>;
           if( m == 0){
               document.getElementById("sex").value = "女";
           }else if( m == 1){
               document.getElementById("sex").value = "男";
           }else{

           }
       }
    </script>
</head>
<body>
<div class="xxBox">
    <form action="cx.php" method="get" id="sub">
        <h1>请输入查询信息<a href="index.html" class="shou">返回首页</a></h1>
        <input type="text" placeholder="请输入查询人的id" name="id" id="sid"/><input type="button" onclick="return check();"  value="查询"/>

        <p>姓　　名：<input type="text"  value="<?php if (!empty($_GET['name'])) { echo $_GET['name']; }   ?>"/></p>
        <p>性　　别：<input type="text" id="sex" value=""/></p>
        <p>联系电话：<input type="tel" value="<?php if (!empty($_GET['tel'])) { echo $_GET['tel']; }   ?>"/></p>
        <p>邮　　箱：<input type="text" value="<?php if (!empty($_GET['email'])) { echo $_GET['email']; }   ?>"/></p>
        <p>家庭住址：<input type="text" value="<?php if (!empty($_GET['site'])) { echo $_GET['site']; }   ?>"/></p>
        <p>身份证号：<input type="tel" value="<?php if (!empty($_GET['idCard'])) { echo $_GET['idCard']; }   ?>"/></p>
        <p>头像：<img src="<?php if (!empty($_GET['img'])) { echo $_GET['img']; }  ?>" width="200px"  alt=""/></p>
    </form>
</div>


<script src="js/jquery-1.9.1.min.js"></script>
<script>
    function check(){
        var a = $("#sid").val();
        var b=1;
        if(a == ""){
            alert("请您输入需要查询的ID");
            b=2;
            return false;
        }

        if( b == 1 ){
            $("#sub").submit();
        }
    }
</script>
</body>
</html>

