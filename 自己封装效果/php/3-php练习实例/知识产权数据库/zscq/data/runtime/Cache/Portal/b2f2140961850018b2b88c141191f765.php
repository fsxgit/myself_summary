<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>知识产权</title>
    <link rel="stylesheet" href="public/html/css/base.css"/>
    <link rel="stylesheet" href="public/html/css/color.css"/>
    <link rel="stylesheet" href="public/html/css/common.css"/>
    <link rel="stylesheet" href="public/html/css/qiye.css"/>
	<style type="text/css">
		.ren-main-box{ border-bottom:1px solid #eee; border-left:1px solid #eee; overflow:hidden; color:#333; border-bottom: none;}
		.ren-main-box .hang{ float:left; height:48px;line-height:48px;border-top:1px solid #eee;border-bottom:1px solid #eee; border-right: 1px solid #eee; width:49.5%; font-size: 0;}
		.ren-main-box .tit{ font-size:14px; background: #f8f8f8; color: #999; display:inline-block; width:50%; text-align:center; border-right:1px solid #eee; }
		.ren-main-box .cont{ font-size:14px; display:inline-block; width:48%;  text-align:center; }
        .qy-xq-table .table-cont {
            width: auto; margin-left: 108px;
        }
        .sb-table{width: 100%;}
        .qy-xq-data .bot .brand {width: auto; margin-left: 380px;}
        .qy-xq-data .bot .brand .yj{width: auto;}
    </style>
</head>
<style>

</style>
<body>

    <!--公用header end-->
<div id="wrap">
    <!--公用右侧浮动导航-->

    <!--公用右侧浮动导航 end-->

    <div class="qiye-xq-top">
        <div class="main-hou oh">
            <div class="logo fl"><img src="public/img/logo.png" alt=""/></div>
            <div class="gs-xx fl">
                <p class="h1 oh"><span class="name fl"><?php echo ($rs["entname"]); ?></span></p>
               
                <p class=" pp c333"><span class="c999">地址：</span><?php echo ($rs["dom"]); ?></p>
            </div>
            <div class="rl-btn fr">
				<?php if($is_ren==1){?>
				<img src="public/html/images/pet2.png" class="img" width="76" height="127" alt=""/>
                <input type="button" class="btn" value="你已认领该企业"/>
				<?php }else{?>
				<img src="public/html/images/pet2.png" class="img" width="76" height="127" alt=""/>
                <input type="button" class="btn" value="认领你的企业" onclick="renling('<?php echo $rs['entname'];?>','<?php echo $name;?>')"/>
				<?php }?>
                
            </div>
        </div>
    </div>
    <div class="qy-xq-cont main-hou">
        <div class="qy-xq-data">
            <div class="top oh">
                <div class="data-mode fl">
					<?php if($year<=1){?>
					初创期
					<?php }else if($year<=2 and $year>1){?>
					成长期
					<?php }else if($year<=4 and $year>2){?>
					成熟期
					<?php }else if($year>4){?>
					<p><span class="data-num"><?php echo $year;?></span>年的坚持</p>
					<?php }?>
                    
                    <p class="txt"><?php echo substr($rs['esdate'],0,4);?>年<?php echo substr($rs['esdate'],5,2);?>月-2016年01月</p>
                </div>
                <div class="data-mode fl">
                    <p><span class="data-num"><?php echo ($rs["regcap"]); ?></span>万<?php echo ($rs["regcapcur"]); ?></p>
                    <p class="txt">这只是开始，梦想没有终点</p>
                </div>
                <div class="data-mode fl">
                    <p><span class="data-bs"><?php echo ($rs["frdb"]); ?></span>大BOSS</p>
                    <p class="txt">没有他，梦想永远都是那么遥远</p>
                </div>
            </div>
            <div class="bot oh">
                <div class="img fl"><img src="public/html/images/img15.png" alt=""/></div>
                <div class="brand">
                    <div class="yj oh">
					<?php if($is_ren==1){?>
                    <div class="sb-tit fl">
                            <p class="jing">商标预警：</p>
                            <p class="gong">当前企业共有</p>
                        </div>
                        <div class="sb-name fl oh">
                            <div class="xu fl">
                                <div class="num"><?php echo $c1;?></div>
                                <span>续展<br />商标</span>
                            </div>
                            <div class="kuan fl">
                                <div class="num"><?php echo $c2;?></div>
                                <span>宽展<br />商标</span>
                            </div>
                        </div>
                    </div>
					<?php }else{?>
					<div class="sb-tit fl">
                            <p class="jing">商标预警：</p>
                            <p class="gong">当前企业共有</p>
                        </div>
                        <div class="sb-name fl oh">
                            <div class="xu fl">
                                <div class="num">0</div>
                                <span>续展<br />商标</span>
                            </div>
                            <div class="kuan fl">
                                <div class="num">0</div>
                                <span>宽展<br />商标</span>
                            </div>
                        </div>
                    </div>
					<div class="yj-txt">如果这是您的企业请赶快认领，对商标进行管理。</div>
					<?php }?>
                </div>
            </div>
        </div>
        <div class="qy-xq-table oh">
            <div class="tree fl"><img src="public/html/images/tree2.png" alt=""/></div>
            <div class="table-cont">
                <div class="table-box1">
                    <div class="jiben">基本信息 <img src="public/html/images/down1.png" class="down" width="15" height="9" alt=""/></div>
                    <!--基本信息 -->
                    <div class="xinxi-box">
                        <table class="xinxi-table c333">
                            <tr>
                                <td class="td1  c999">统一社会信用码</td>
                                <td style="width:266px;">
								<?php
 if($rs["shxydm"]){ echo $rs["shxydm"]; }else{ echo "--"; } ?>
								</td>
								<td class="td1  c999">登记机关</td>
                                <td style="width:266px;"><?php echo ($rs["regorg"]); ?></td>
                            </tr>
                            <tr>
                                <td class="td1  c999">注册号</td>
                                <td><?php echo ($rs["regno"]); ?></td>
                                <td class="td1  c999">营业状态</td>
                                <td><?php echo ($rs["entstatus"]); ?></td>
                            </tr>
                            <tr>
                                <td class="td1  c999">企业类型</td>
                                <td><?php echo ($rs["enttype"]); ?></td>
                                <td class="td1  c999">成立日期</td>
                                <td><?php echo ($rs["esdate"]); ?></td>
                            </tr>
                            <tr>
                                <td class="td1  c999">法定代表人</td>
                                <td ><?php echo ($rs["frdb"]); ?></td>
                                <td class="td1  c999">注册成本</td>
                                <td ><?php echo ($rs["regcap"]); ?>万人民币</td>
                            </tr>
                            <tr class="last">
                                <td class="td1  c999">经营范围</td>
                                <td colspan="3"><?php echo ($rs["opscope"]); ?></td>
                            </tr>
                        </table>
                    </div>
                    <!--基本信息 end-->
                    <!--股东信息 -->
                    <div class="gu-box">
                        <div class="table-tit"><span class="tit">股东信息</span><span class="num">1</span> </div>
                        <table class="gu-table" width="100%">
                            <tr class="tr1">
                                <td>股东类型</td>
                                <td>股东</td>
                            </tr>
							<tr>
                                <td>法人股东</td>
                                <td>青海明胶股份有限公司</td>
                            </tr>
                        </table>

                    </div>
                    <!--股东信息 end-->
                    <!--主要人员 -->
                    <div class="zhu-box">
                        <div class="table-tit"><span class="tit">主要管理人员</span></div>
						<div  class="ren-main-box">
							<?php if(is_array($pers)): foreach($pers as $key=>$vo): ?><div class="hang">
								<span class="tit"><?php echo ($vo["position"]); ?></span>
								<span class="cont"><?php echo ($vo["name"]); ?></span>
							</div><?php endforeach; endif; ?> 
						</div>
                    </div>
                    <!--主要人员 end-->
                </div>
                <!--商标信息-->
                <div class="table-box2 sb-box">
                    <div class="table-tit">
                        <span class="tit">商标(<?php echo ($count); ?>枚)</span>
                  <!--  <span class="tit">商标信息</span>
                        <span></span>
                        <span onclick='already_reg("<?php echo ($rs["entname"]); ?>")' style="cursor:pointer;">已注册（<?php echo ($count); ?>）</span>
                        <span onclick='reging("<?php echo ($rs["entname"]); ?>")' style="cursor:pointer;">注册中</span>
                        <span onclick='out_reg("<?php echo ($rs["entname"]); ?>")' style="cursor:pointer;">已失效</span>
                        <span>续展商标</span>
                        <span>宽展商标</span>
                        <span class="down"><img src="public/html/images/down2.png" alt=""/></span> -->
                    </div>
                    <table class="sb-table">
                        <tr class="tr1">
                            <td style="width: 100px;">商标</td>
                            <td style="width: 100px;">商标名</td>
                            <td style="width: 82px;">状态</td>
                            <td style="width: 106px;">申请时间</td>
                            <td style="width: 88px;">注册号</td>
                            <td style="width: 102px;">类别</td>
                        </tr>
                        <?php if(is_array($arr1)): foreach($arr1 as $key=>$v): ?><tr>
                            <td align="center" valign="middle"><img src="data:png;base64,<?php echo ($v["markimage"]); ?>" alt="" width='100' height="100"/></td>
                            <td style="text-align:center"><?php echo ($v["markname"]); ?></td>
							<td style="text-align:center">使用中</td>
                            <td style="text-align:center"><?php echo ($v["appdate"]); ?></td>
                            <td style="text-align:center"><?php echo ($v["markcode_key"]); ?></td>
                            <td style="text-align:center"><?php echo ($v["marktype"]); ?></td>
                        </tr><?php endforeach; endif; ?>
                    </table>
                    <!--翻页按钮-->
                    <div class="fx_box" style="margin-top:10px;">

						<div class="c-pages tc">
							<span>共<?php echo ($count); ?>条记录，<?php echo ($totalpage); ?>页</span>
							<span><?php echo ($page); ?></span>
						</div>
                    </div>
        </div>
    </div>

</div>
<script src="public/html/js/jquery-1.9.1.min.js"></script>
<script src="public/html/js/js.js"></script>
<script>
    var name = $("#business_name").val();
/*
    function renling(nam){
    //   location.href="index.php?g=Portal&m=Index&a=qiye_renling&name="+name+'&names='+nam; 
		$.ajax({
             type: "POST",
             url: "index.php?g=Portal&m=Index&a=is_renling",
             dataType: "json",
             success: function(msg){
				if(msg==0){
					go1(nam);
				}else{
					alert("您已认证为"+msg["companyname"]+"企业用户,如果您想认领其他企业,请联系您的顾问");
					return false;
				}
			 }
         });
    }

	function go1(na){
		location.href="index.php?g=Portal&m=Index&a=qiye_renling&name="+name+'&names='+na; 
	}*/
	function renling(nam,name){
		location.href="index.php?g=Portal&m=Userinfo&a=qiye_renling2&name="+name+'&names='+nam;
	}
</script>
</body>
</html>