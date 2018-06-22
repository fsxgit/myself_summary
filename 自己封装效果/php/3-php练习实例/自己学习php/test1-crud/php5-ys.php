<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>个人信息</title>
    <style>
        .xxBox{width:1000px; margin:20px auto;}
        input[type="button"],input[type="submit"]{width:80px; height:30px; font-size: 16px;}
        .xxBox p span{color: #f0080b; display: none;}
        .shou{font-size: 12px; padding-left: 20px;}
        #localImag{display: none;}

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
    <form action="tj.php" method="post" id="sub" enctype="multipart/form-data">
        <h1>请输入个人的身份信息<a href="index.html" class="shou">返回首页</a></h1>
        <p>姓　　名：<input type="text" name="fname" class="name" placeholder="请输入联系人姓名"/>
            &nbsp<span class="span1">姓名不能为空</span>
            <span  class="span2">姓名格式不正确</span>
        </p>

        <p>性　　别：<input type="radio" name="sex" value="1" checked />男  <input type="radio" name="sex" value="0"/>女</p>

        <p>联系电话：<input type="tel" name="tel" class="tel" placeholder="请输入联系电话"/>
            &nbsp<span class="span1">电话不能为空</span>
            <span  class="span2">电话格式不正确</span>
        </p>

        <p>邮　　箱：<input type="text" name="email" class="email" placeholder="请输入常用邮箱"/>
            &nbsp<span class="span1">邮箱不能为空</span>
            <span  class="span2">邮箱格式不正确</span>
        </p>

        <p>家庭住址：<input type="text" name="site" class="site" placeholder="请输入家庭住址"/>
            &nbsp<span class="span1">家庭住址不能为空</span>
        </p>

        <p>身份证号：<input type="tel" name="idCard" class="idCard" placeholder="请输入身份证号"/>
            &nbsp<span class="span1">身份证号不能为空</span>
            <span  class="span2">身份证号格式不正确</span>
        </p>

        <p>上传头像：<input type="file" name="img" class="img" id="doc" onchange="javascript:setImagePreview();" /></p>
        <div id="localImag"><img id="preview" src="" width="150"  style="display: block; width: 150px; height: auto;"></div>

        <p><input type="button" value="提交" onclick="return check();"/></p>
    </form>
</div>


<script src="js/jquery-1.9.1.min.js"></script>
<script>
//    判断为空 则不提交

    var aP = $(".xxBox p");

//提示错误后，再获取焦点是，提示隐藏
    aP.each(function(){
        $(this).find("input").focus(function(){
            $(this).siblings("span").hide();
        })
    });


//提交时判断是否为空
function check(){
    var b = 1;
//    判断姓名格式是否正确
//姓名要求：数字，字母，汉字，长度不超过10；
    var oName = $(".name");
    var rName = /^[\da-zA-Z\u4E00-\u9FA5]{1,10}$/;
    var sName =oName .val();
    if(rName.test(sName)){

    }else{
       if(sName == ""){
           oName.siblings(".span1").show();
       }else{
           oName.siblings(".span2").show();
       }
        b = 2;
        return false;
    }

//    匹配电话号码
    var oTel = $(".tel");
    var rTel = /^[1][358][0-9]{9}$/;
    var sTel = oTel.val();
    if(rTel.test(sTel)){

    }else{
        if(sTel == ""){
            oTel.siblings(".span1").show();
        }else{
            oTel.siblings(".span2").show();
        }
        b = 2;
        return false;
    }

//    匹配邮箱
    var oEmail = $(".email");
    var rEmail = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    var sEmail = oEmail.val();
    if(rEmail.test(sEmail)){

    }else{
        if(sEmail == ""){
            oEmail.siblings(".span1").show();
        }else{
            oEmail.siblings(".span2").show();
        }
        b = 2;
        return false;
    }

//    判断地址
    var oSite = $(".site");
    var sSite = oSite.val();

    if(sSite == ""){
        oSite.siblings(".span1").show();
        b = 2;
        return false;
    }
//    匹配身份证号
    var oCard = $(".idCard");
    var rCard = /^\d{15}|\d{18}$/;
    var sCard = oCard.val();
    if(rCard.test(sCard)){

    }else{
        if(sCard == ""){
            oCard.siblings(".span1").show();
        }else{
            oCard.siblings(".span2").show();
        }
        b = 2;
        return false;
    }

//判断图片是否为空

    if($(".img").val() == ""){
        b=2;
        $(".img").siblings(".span1").show();
        return false;
    }else{
        alert(b);
    }

    if(b == 1){
        $("#sub").submit();
    }
}


//    图片预览功能



</script>
</body>
</html>