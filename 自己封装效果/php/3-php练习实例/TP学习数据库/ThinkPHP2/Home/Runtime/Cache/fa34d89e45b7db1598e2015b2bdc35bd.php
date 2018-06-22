<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html><html><head lang="en"><meta charset="UTF-8"><title>block演示</title><!--这里是block的父级模板页面是承载内容的床--><style>        *{margin:0; padding:0;}
        body{font-size: 30px; color: #000;}
        a{text-decoration: none; color:#fff;}
        .m{width:100%; height:100px; background: #f00ebf; text-align: center; color: #fff; line-height: 100px;}
        .box{width: 100%; height:auto; overflow: hidden;}
        .l{width:20%; height:200px; background: #f0ae03; float:left; text-align: center; color: #fff; line-height: 200px;}
        .c{width:60%; height:200px; background: #f0080b; float:left; text-align: center; color: #fff; line-height: 200px;}
        .r{width:20%; height:200px; background: #0516f0; float:left; text-align: center; color: #fff; line-height: 200px;}
        .f{width:100%; height:200px; background: #03f02f; float:right; text-align: center; color: #fff; line-height: 200px;}
        .ad{background: #ccc; font-size: 40px; color: #ff1010; width: 100%; text-align: center; height:120px; line-height: 120px;}
    </style></head><body><div class="m"><a href="">手机 </a><a href="">电脑 </a><a href="">平板 </a><a href="">电视 </a><a href="">电话 </a><a href="">电磁炉 </a></div><div class="ad">这里是广告部分</div><div class="box"><div class="l">        我是左边的区块
    </div><div class="c">        我是中间的内容
    </div><div class="r">        我是右边的区块
    </div></div><div class="ad">这里也是广告部分</div><div class="f">        我是底部的内容
    </div></body></html>