/**
 * Created by MyPC on 2015/8/30.
 */
function getId(id)
{
    return document.getElementById(id);
};

function getEle(){
    if(arguments.length === 1)
    {
        return document.getElementsByTagName(arguments[0]);
    }else{
        return document.getElementById(arguments[0]).getElementsByTagName(arguments[1]);
    };
};

function css(obj,attr)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    };
};

function randomColor()
{
    var color = Math.ceil(Math.random()*256*256*256).toString(16);

    if(color.length < 6)
    {
        return "0"+color;
    }

    return color;
};

function scrollTop()
{
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    return scrollTop;
};

function clientWidth()
{
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    return clientWidth;
};

function clientHeight()
{
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    return clientHeight;
};

//获取物体距离问题顶部的值
function getTop(obj)
{
    var iTop = 0;
    while(obj)
    {
        iTop += obj.offsetTop;
        obj = obj.offsetParent;
    };
    return iTop;
};


