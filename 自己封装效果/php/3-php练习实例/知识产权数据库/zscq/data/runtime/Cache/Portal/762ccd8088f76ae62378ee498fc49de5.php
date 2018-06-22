<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>知识产权-搜索结果</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/qiye.css"/>
</head>
<body>
<div id="wrap">
    <!--公用header-->
   
    <!--公用header end-->
    <!--公用右侧浮动导航-->

    <!--公用右侧浮动导航 end-->
<!--s-content内容存放的地方-->
    <div class="search-cont main-hou oh">
        <div class="search-cont2">
            <div class="qiye-search-box  pr">
                <div class="zhn-search bb">智能筛选</div>
                <!--公用结果 查询列表-->
                <div class="res-list-choose">
                    <div class="choose-mode c333 oh">
                        <div class="choose-title fl">注册成本</div>
                        <div class="choose-item choose-item1 fl">
                            <span class="active" data-id=''>全部</span>
                            <span data-id='100'>0-100万</span>
                            <span data-id='100-200'>100-200万</span>
                            <span data-id='200-500'>200-500万</span>
                            <span data-id='500-1000'>500-1000万</span>
                            <span data-id='1000'>1000万以上</span>
                        </div>
                    </div>
                    <div class="choose-mode choose-year c333 oh">
                        <div class="choose-title fl">成立年限</div>
                        <div class="choose-item choose-item2 fl">
                            <span class="active" data-year=''>全部</span>
                            <span data-year='1'>成立1年内</span>
                            <span data-year='1-5'>成立1-5年</span>
                            <span data-year='5-10'>成立5-10年</span>
                            <span data-year='10-15'>成立10-15年</span>
                            <span data-year='15'>成立15年以上</span>
                        </div>
                    </div>
                </div>
                <div class="s-result-list">
                    <div class="res-list-Title bc c333 f12">为您搜索到<span class="c333"><?php echo ($count); ?></span>家符合条件的企业， 用时 <span><?php echo ($time); ?></span>秒</div>
                    <!--搜索到的企业-->
                    <div class="res-list-mode c333">
                       <div class="search-list-box">
                           <?php if(is_array($re)): foreach($re as $key=>$vo): ?><div class="list-mode-center">
                               <div class="list-mode-img fl"><a><img src="public/html/images/img1.png" alt=""/></a></div>
                               <div class="list-mode-txt fl">
                                   <div class="list-txt-top oh">
                                       <span class="fl"><a><?php echo ($vo["ENTNAME"]); ?></a></span>
                                       <span class="num fr">39293</span>
                                   </div>
                                   <div class="list-txt-center c999">
                                       <p>
                                           <span class="name"><?php echo ($vo["frdb"]); ?></span>
                                           <span>法定代表人</span>
                                           <span>成立<?php echo ($vo["esdate"]); ?></span>
                                           <span>注册资本：<?php echo ($vo["regcap"]); ?>万<?php echo ($rs["regcapcur"]); ?></span>
                                           <span>持有商标：<?php echo ($vo["shangbiao"]); ?>枚</span>
                                        <span class="renLing ">
                                            <img src="public/html/images/dot.png" class="dot" alt=""/>
                                            <a href="javascript:;"  class="renBtn" onclick='detail("<?php echo ($vo["ENTNAME"]); ?>","<?php echo ($name); ?>")'>企业详情</a>
                                        </span>
                                       </p>
                                       <p>
                                           <span class="">企业地址：</span>
                                           <span><?php echo ($vo["dom"]); ?></span>
                                       </p>
                                   </div>
                               </div>
                           </div><?php endforeach; endif; ?> 
                       </div>


                    </div>
                    <!--搜索到的企业-->
                </div>
                <!--公用结果 end-->

            </div>
        </div>
        <!--<div class="search-cont-right fr">-->
            <!--<img src="public/html/images/img13.png" width="100%" alt=""/>-->
            <!--<div class="qita">看看其他公司</div>-->
            <!--<div class="qita-gs">-->
                <!--<p>杭州铂零科技有限公司</p>-->
                <!--<p class="name">张勇</p>-->
            <!--</div>-->
            <!--<div class="qita-gs">-->
                <!--<p>杭州铂零科技有限公司</p>-->
                <!--<p class="name">张勇</p>-->
            <!--</div>-->
            <!--<div class="qita-gs">-->
                <!--<p>杭州铂零科技有限公司</p>-->
                <!--<p class="name">张勇</p>-->
            <!--</div>-->
            <!--<div class="qita-gs">-->
                <!--<p>杭州铂零科技有限公司</p>-->
                <!--<p class="name">张勇</p>-->
            <!--</div>-->
            <!--<div class="qita-gs">-->
                <!--<p>杭州铂零科技有限公司</p>-->
                <!--<p class="name">张勇</p>-->
            <!--</div>-->
        <!--</div>-->
    </div>
    <!--翻页按钮
    <div class="c-pages main  tl ">
        <span>共 <span class="col">100</span>条记录，<span class="col">20</span>页</span>
        <span>
            <a href="#">首页</a>
            <a href="#">上一页</a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#" class="active">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">下一页</a>
            <a href="#">末页</a>
        </span>
    </div>
    翻页按钮 end-->
<!--s-content内容存放的地方-->



<!--公用底部-->

<!--公用底部 end-->

</div>
<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script src="public/html/js/js.js"></script>
<script>
    var year = "<?php echo $year;?>";
    var money = "<?php echo $money;?>";
    var name = $("#business_name").val();
    $(function(){
//      二维码的显示隐藏
//        maTab();
    
        var itemSpan = $(".choose-item1 span");
        itemSpan.each(function(){
            var dataId = $(this).data("id");
            if(dataId == money){
                $(this).addClass("active").siblings().removeClass("active");
            }
            $(this).click(function(){
                $(this).addClass("active").siblings().removeClass("active");
                var id = $(this).data("id");
           //     alert(id);
           //     window.location.href='index.php?g=Portal&m=Index&a=search&business_name='+name+'&money='+id+'&year='+year;
                
            })
        })
        
        var itemSpan2 = $(".choose-item2 span");
        itemSpan2.each(function(){
            var datay = $(this).data("year");
            if(datay == year){
                $(this).addClass("active").siblings().removeClass("active");
            }
            $(this).click(function(){
                $(this).addClass("active").siblings().removeClass("active");
                var year = $(this).data("year");
            //    alert(year);
           //     window.location.href='index.php?g=Portal&m=Index&a=search&business_name='+name+'&money='+money+'&year='+year;
            })
        })

    })
    
    function detail(names,name){
	//	$names = encodeURI(names);
       location.href="index.php?g=Portal&m=Userinfo&a=qiye_detail&name="+name+'&names='+names+'&ty='+1;
    }
    
    
</script>
</body>
</html>