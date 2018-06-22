/**
 * Created by Fsx on 2015/8/28.
 */
//定义图片数组
var WedImgs=[
    "images/big01.png",
    "images/big02.png",
    "images/big03.png",
    "images/big04.png",
    "images/big05.png"
            ];
var WedTexts=[
"六年行业专业摄影经验，善于控制<br/>光线，把握人体的线条和结构，在 <br/>他的镜头下不管是简单礼服，还是 <br/>奢华婚纱，都能在他的镜头下发挥 <br/>出惊人的美感。",
"摄影与我就是生活与艺术的完美结合，是表现个人认知，情感的有效方式。2005年一次偶然的机会踏上了摄影的道路，并越发感到摄影的乐趣和魅力。用手中的镜头记录每对新人的幸福瞬间，为之感动，曾考取了高级摄影师证。曾担任纽约国际婚纱摄影公司摄影总监一职。",
"七年行业专业摄影经验，美感好，悟性强。热爱影视业，知识面相当广阔，有较好的艺术表现力和良好的艺术节奏感，在自己的作品中也都有所体现。",
"六年行业专业摄影经验，服务超过千对客户满意度99%",
"04结构，在他的镜头下不管是简单礼服"

]
var LiImgs=[
    "images/big01.png",
    "images/big02.png",
    "images/big03.png",
    "images/big04.png",
    "images/big05.png"
];
var LiTexts=[
    "六年行业专业摄影经验，善于控制<br/>光线，把握人体的线条和结构，在 <br/>他的镜头下不管是简单礼服，还是 <br/>奢华婚纱，都能在他的镜头下发挥 <br/>出惊人的美感。",
    "摄影与我就是生活与艺术的完美结合，是表现个人认知，情感的有效方式。2005年一次偶然的机会踏上了摄影的道路，并越发感到摄影的乐趣和魅力。用手中的镜头记录每对新人的幸福瞬间，为之感动，曾考取了高级摄影师证。曾担任纽约国际婚纱摄影公司摄影总监一职。",
    "七年行业专业摄影经验，美感好，悟性强。热爱影视业，知识面相当广阔，有较好的艺术表现力和良好的艺术节奏感，在自己的作品中也都有所体现。",
    "六年行业专业摄影经验，服务超过千对客户满意度99%",
    "04结构，在他的镜头下不管是简单礼服"

]

var $WedLi = $("#WedImgList>li");
var $WedImgBox = $("#WedImgBox");
var $WedImgText = $("#WedImgText");
var $LiLi = $("#LiImgList>li");
var $LiImgBox = $("#LiImgBox");
var $LiImgText = $("#LiImgText");

$WedLi.each(function(){
    $(this).click(
        function(){
            i= $(this).index();
            $WedImgBox.attr("src",WedImgs[i]);
            $WedImgText.html(WedTexts[i]);
        }
    )
})
$LiLi.each(function(){
    $(this).click(
        function(){
            i= $(this).index();
            $LiImgBox.attr("src",LiImgs[i]);
            $LiImgText.html(LiTexts[i]);
        }
    )
})