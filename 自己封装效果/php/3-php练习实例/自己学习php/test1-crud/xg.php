<?php

$id = $_GET['id'];
//var_dump($id);

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "fsx";

mysql_connect($servername,$username,$password);
mysql_select_db($dbname);
mysql_query("set names utf8");

$sql = "select * from information where id=$id";
$res = mysql_query($sql);
$row = mysql_fetch_assoc($res);

$sex = $row['sex'];



?>
<script>
    window.onload = function(){
        var sexId = document.getElementById("sex");
        var sex = <?php  echo $sex ?>;

        if (sex == 0){
            sexId.value = "女";
        }else{
            sexId.value = "男";
        }
    }
</script>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>查询</title>
    <style>
        .xxBox{width:1000px; margin:20px auto;}
        .shou{font-size: 12px; padding-left: 20px;}
    </style>
    <script type="text/javascript">
        //下面用于图片上传预览功能
        function setImagePreview(avalue) {
            var docObj=document.getElementById("doc");

            var imgObjPreview=document.getElementById("preview");
            var imgObjDiv=document.getElementById("localImag");
            if(docObj.files &&docObj.files[0])
            {
//火狐下，直接设img属性
                imgObjPreview.style.display = 'block';
                imgObjDiv.style.display = 'block';
//                imgObjPreview.style.width = '150px';
//                imgObjPreview.style.height = '180px';
//imgObjPreview.src = docObj.files[0].getAsDataURL();

//火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
                imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
            }
            else
            {
//IE下，使用滤镜
                docObj.select();
                var imgSrc = document.selection.createRange().text;
                var localImagId = document.getElementById("localImag");
//必须设置初始大小
                localImagId.style.width = "150px";
                localImagId.style.height = "180px";
//图片异常的捕捉，防止用户修改后缀来伪造图片
                try{
                    localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                    localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
                }
                catch(e)
                {
                    alert("您上传的图片格式不正确，请重新选择!");
                    return false;
                }
                imgObjPreview.style.display = 'none';
                imgObjDiv.style.display = 'none';
                document.selection.empty();
            }
            return true;
        }

    </script>
</head>
<body>
<div class="xxBox">
    <form action="xgdo.php?id=<?php echo $id; ?>" method="post" enctype="multipart/form-data">
        <h1>请修改所需要的修改信息<a href="index.html" class="shou">返回首页</a></h1>
        <p>编　　号：<input type="text" name="id" disabled value="<?php echo $row['id']; ?>"/></p>
        <p>姓　　名：<input type="text" name="name" value="<?php echo $row['name']; ?>"/></p>
        <p>性　　别：<input type="text" name="sex" id="sex" value=""/></p>
        <p>联系电话：<input type="tel" name="tel" value="<?php echo $row['tel']; ?>"/></p>
        <p>邮　　箱：<input type="text" name="email" value="<?php echo $row['email']; ?>"/></p>
        <p>家庭住址：<input type="text" name="site" value="<?php echo $row['site']; ?>"/></p>
        <p>身份证号：<input type="tel" name="idCard" value="<?php echo $row['idCard']; ?>"/></p>
        <div>头像：
            <div id="localImag" style="padding-top: 20px;">
                <img id="preview"  src="<?php echo $row['img']; ?>" width="150px" style="display: block; width: 150px; height: auto;"  alt=""/>
            </div>
            <div style="padding:20px 0;">
                <input type="file" name="img"  id="doc" onchange="javascript:setImagePreview();" value=""/>
                <input type="hidden" name="MAX_FILE_SIZE" value="2000000">
            </div>
        </div>
        <input type="submit" value="确认修改"/>
    </form>
</div>
</body>
</html>

