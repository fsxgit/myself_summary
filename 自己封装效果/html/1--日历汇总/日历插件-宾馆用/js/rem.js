// 给根元素设定标准,以rem为单位
var iWidth=document.documentElement.getBoundingClientRect().width;
if(iWidth>=540){
    document.getElementsByTagName("html")[0].style.fontSize=540/10+"px";
}else{
    document.getElementsByTagName("html")[0].style.fontSize=iWidth/10+"px";
}
