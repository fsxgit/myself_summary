// 给根元素设定标准,以rem为单位,比如psd给定的width=640px; 则html的font-size = 64px; 及10rem = 640px;
var iWidth=document.documentElement.getBoundingClientRect().width;
document.getElementsByTagName("html")[0].style.fontSize=iWidth/10+"px";
/*
** html {font-size:64px; }先设定一个根元素标注,防止设定根元素标准的js没加载进来时页面布局混乱的现象以rem为单位,此标准与设计稿相同尺寸10rem = 640px;
即表示：html {font-size:64px; }
 **
  */