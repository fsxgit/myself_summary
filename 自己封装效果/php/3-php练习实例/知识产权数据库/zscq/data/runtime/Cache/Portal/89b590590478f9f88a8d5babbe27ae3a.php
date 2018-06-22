<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>商标管理-商标列表</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/brand.css"/>
</head>
<body>
    <div class="main-hou">
        <div class="brand-gl c333">
            <div class="bgl-nav  bb">
                <a href="javascript:;" class="active">续展监测</a>
            </div>
        </div>
        <!--/*提示说明*//-->
        <div class="c-ts-common mt20 mb20">
            <p>注册商标的有效期是10年，有效期满后需要继续使用的，必须在期满前的十二个月内办理续展手续；如果在此期间未能办理，还会有六个月的宽展期。期满未办理续展手续的，注册商标将会被注销。</p>
        </div>
        <!--/*提示说明* end//-->
        <div class="brand-box">
            <table class="brand-table c333">
                <tr class="bt-tr1 bg5 c999">
                    <td class="xz-quan active" style="width: 5%;">
                        <img class="img1" style="vertical-align:middle;"  src="public/html/images/xz-n.png" alt=""/>
                        <img class="img2" style="vertical-align:middle;"  src="public/html/images/xz-y.png" alt=""/>
                    </td>
                    <td style="width:9%;">商标图形</td>
                    <td style="width:16%;">商标名称</td>
                    <td style="width:10%;">国际分类</td>
                    <td style="width:10%;">注册号</td>
                    <td style="width:8%;">注册日期/</td>
                    <td style="width:8%;">到期日期</td>
                    <td style="width:12%;">剩余时间</td>
                    <td style="width:12%;">状态</td>
                    <td style="width:10%;">操作</td>
                </tr>
                <tr>
                    <td colspan="10" class="jc-mei">
                         <span class="oh">
                            <span class="fl mr10"><img src="public/html/images/icon2.png" width="52" height="80" alt=""/></span>
                            <span class="fl">您还没有需要续展的商标</span>
                        </span>
                    </td>
                </tr>
            </table>
        </div>
        <!--商标 end-->
    </div>
<script src="../js/jquery-1.9.1.min.js"></script>
<script>

    $(".bgl-nav a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })

    //弹出框选项选择
    //    单选
    $(".xz-choose").click(function(){
        $(this).toggleClass("active");
        var is = 1;
        $(".xz-choose").each(function(){
            if($(this).hasClass("active")){
                is = 1;
            }else{
                is = 2;
                return false;
            }
        })
        if(is == 1){
            $(".xz-quan").addClass("active");
        }else{
            $(".xz-quan").removeClass("active");
        }
    });
    //    全选
    $(".xz-quan").click(function(){
        $(this).toggleClass("active");
        if($(this).hasClass("active")){
            $(".xz-choose").each(function(){
                $(this).addClass("active");
            })
        }else{
            $(".xz-choose").each(function(){
                $(this).removeClass("active");
            })
        }
    })
    $(".xuzhan-choose").click(function(){
        $(this).toggleClass("active");
    })
</script>
</body>
</html>