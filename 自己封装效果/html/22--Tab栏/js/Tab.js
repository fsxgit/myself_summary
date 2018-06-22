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
"111111111111六年行业专业摄影经验，善于控制光线，把握人体的线条和结构，在他的镜头下不管是简单礼服，还是奢华婚纱，都",
"2222222222摄影与我就是生活与艺术的完美结合，是表现个人认知，情感的有效方式。2005年一次偶然的机会踏上了摄影的道路，",
"3333333333七年行业专业摄影经验，美感好，悟性强。热爱影视业，知识面相当广阔，有较好的艺术表现力和良好的艺术节奏感，",
"44444444444六年行业专业摄影经验，服务超过千对客户满意度99%",
"5555555555结构，在他的镜头下不管是简单礼服"

]


var $WedLi = $("#WedImgList>li");
var $WedImgBox = $("#WedImgBox");
var $WedImgText = $("#WedImgText");

$WedLi.each(function(){
    $(this).click(
        function(){
            i= $(this).index();
            $WedImgBox.attr("src",WedImgs[i]);
            $WedImgText.html(WedTexts[i]);
        }
    )
})
