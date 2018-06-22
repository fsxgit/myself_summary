// 代码提供：脚本之家 jb51.net
function $id(o){
 return document.getElementById(o);
}
function $class(className) {
  var parent = arguments[1] || document;  
     if(parent.length && parent !== window && parent.tagName !== "select") {
      var nodes =[];
   for(var i=0, l = parent.length; i < l; i++){
    var elms = get(parent[i]);
    for (var j = elms.length - 1; j >= 0; j--) {
     nodes.push(elms[j])
    };
   }
   return nodes;
  }else{
   return get(parent);
  };
     function get(parent){
   if(parent.getElementsByClassName){ 
          return  parent.getElementsByClassName(className);
      }else{   
         var tag = arguments[2] || '*'; 
          var returnElements = []
          var els =  parent.getElementsByTagName(tag);
          className = className.replace(/\-/g, "\\-");
          var pattern = new RegExp("(^|\\s)"+className+"(\\s|$)");
    var i = 0;
          while(i < els.length){
              if (pattern.test(els[i].className) ) {
                  returnElements.push(els[i]);
              }
     i++;
          }
          return returnElements;
      }
  }
 }
//随机数据
var myMetro = $id("myMetro"),
 colorList = ['f4b300','78ba00','2673ec','ae113d','632f00','b01e00','4e0038','c1004f','7200ac','2d004e','006ac1','001e4e','008287','004d60','004a00','00c13f','15992a','ff981d','e56c19','b81b1b','ff1d77','b81b6c','aa40ff','691bb8','1faeff','1b58b8','56c5ff','569ce3','00d8cc','00aaaa','91d100','b81b6c','e1b700','d39d09','ff76bc','e064b7','00a4a4','ff7d23','4cafb5','044d91','832772','d15a44','de971b','017802','6e2ea0'],
 color = colorList[0];
function createTestData(n){
 var spanWrap = document.createElement("span"),
  content = "";
 for(i = 0; i < n; i++) {
  color = colorList[(colorList.length * Math.random())>>0];
  if(!(Math.random()*3 >> 0)){ //输出大模块测试数据。宽高在一个范围内都是随意的，未做其他限制
   height = Math.floor(Math.random()*200 + 100);
   width = Math.floor(Math.random()*200 + 100);
   content += '<div class="MBox"><div class="widgetBox bigBox" style="background:#'+color+'"><div style="width:' + width +'px;height:' + height +'px;margin:0 auto;" class="innerBox"><a href="/" target="_blank">&nbsp;</a></div></div></div>';
  }else{ //输出普通模块数据
   content += '<div class="MBox"><div class="widgetBox" style="background:#'+color+'"></div></div>';
  }
 };
 spanWrap.innerHTML = content;
 myMetro.appendChild(spanWrap);
 return spanWrap;
}
window.onload = function(){
 createTestData(35);
 metro.init(myMetro);
};
window.onresize = function(){
 metro.resort(myMetro);
};
window.onscroll=function(){
 var scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
  windowHeight = document.documentElement.clientHeight,
  documentHeight = document.body.offsetHeight;
 if(windowHeight + scrollTop > documentHeight - 50){
  metro.putData(createTestData(15));
 }
}