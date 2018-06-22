<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1" />
    <title>选择城市页面</title>
    <script src="js/fx_common.js"></script>
    <link rel="stylesheet" href="css/swiper.3.1.2.min.css">
    <link rel="stylesheet" href="css/fx_base.css"/>
    <style>
        input{width:80%; height:40px; background: #ccc; margin:20px 10px;}
        #ip{font-size: 20px; padding-left:20px;}
        .ipBox{text-align: center;}
    </style>
    <script src="//cdn.bootcss.com/jquery/1.8.3/jquery.js"></script>
    <script src="http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js"></script>
</head>
<body>

<div class="ipBox">
    <input type="text" placeholder="选择城市" id="ip" value="<?php
    $id = empty($_GET['id']);
    if($id){

    }else{
        echo $_GET['id'];
    };
    ?>" readonly class="btn"/>
</div>
<script src="js/jquery-1.9.1.min.js"></script>
<script>
    $(".btn").on("click",function(){
        window.location.href = "citys.php";
    })

//<!-- 请求获取IP地址//网络定位 -->
    $(function () {
        var getip = $("#ip").val();
        //IP定位
        var gprsip = $("#ip").val(remote_ip_info.province);

        if(getip && gprsip){
            $("#ip").val(getip);
        }else{
            gprsip;
//            alert(gprsip);
        }

    });




</script>
</body>
</html>