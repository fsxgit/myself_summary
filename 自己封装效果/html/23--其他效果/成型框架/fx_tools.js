// JavaScript Document
//产品部分轮播框架
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

function timeMove(obj,json,times,fx,fn){
	//linear,easeInStrong,easeOutStrong,backOut,backBoth,elasticOut,bounceOut;
	if(typeof times=='undefined'){
		times=400; fx='easeOutStrong';
	}
	if(typeof times=='string'){
		if(typeof fx=='function')fn=fx;
		fx=times; times=400; 
	}else if(typeof times=='function'){
		fn=times; times=400; fx='easeOutStrong';
	}else if(typeof times=='number'){
		if(typeof fx=='function'){
			fn=fx; fx='easeOutStrong';
		}else if(typeof fx=='undefined'){
			fx='easeOutStrong';
		}
	}
	var Tween = {
		linear: function (t, b, c, d){return c*t/d + b;},
		easeInStrong: function(t, b, c, d){return c*(t/=d)*t*t*t + b;},
		easeOutStrong: function(t, b, c, d){return -c * ((t=t/d-1)*t*t*t - 1) + b;},
		backOut: function(t, b, c, d, s){
			if (typeof s == 'undefined') s = 2.30158;  //回缩的距离 
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		},
		backBoth: function(t, b, c, d, s){
			if (typeof s == 'undefined') s = 1.70158; //回缩的距离
			if ((t /= d/2 ) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		},
		elasticOut: function(t, b, c, d, a, p){
			if (t === 0) return b;
			if ( (t /= d) == 1 ) return b+c;
			if (!p) p=d*0.4;  //弹性的幅度
			if (!a || a < Math.abs(c)) {
				a = c; var s = p / 4;
			} else {
				var s = p/(2*Math.PI) * Math.asin (c/a);
			}
			return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
		},
		bounceOut: function(t, b, c, d){
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
			}
			return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
		}
	};
	var iCur={};
	for(var attr in json){
		iCur[attr]=0;
		if(attr=='opacity'){
			iCur[attr]=Math.round(parseFloat(getStyle(obj,attr))*100);
		}else{
			iCur[attr]=parseInt(getStyle(obj,attr));
		}
	}
	var startTime=(new Date()).getTime();
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var changeTime=(new Date()).getTime();
		var t=times-Math.max(0,startTime-changeTime+times);
		for(var attr in json){
			var value=Tween[fx](t,iCur[attr],json[attr]-iCur[attr],times);
			if(attr=='opacity'){
				obj.style['filter']='alpha(opacity:'+value+')';
				obj.style['opacity']=value/100;
			}else{
				obj.style[attr]=value+'px';
				if(typeof fn=='object'){
					fn.style.left=-obj.offsetLeft+'px';
				}
			}
		}
		if(t==times){
			clearInterval(obj.timer);
			if(typeof fn=='function')fn.call(obj);
		}
	},15);
}

function getPos( obj ){
	var pos = {};
	pos.left = 0;
	pos.top = 0;
	while( obj ){
		pos.left += obj.offsetLeft;
		pos.top += obj.offsetTop;
		obj = obj.parentNode;
		if( obj.nodeName.toLowerCase() == 'html' ){
			break;
		}
	}
	return pos;
}  

function changeCss( obj, json ){
	for( attr in json ){
		if( attr != 'opacity' ){
			obj.style[attr] = json[attr] + 'px';
		}else{
			obj.style[attr] = json[attr];
		}
	}
}

function toRotate(obj, deg, time, boolean){
	boolean = boolean || null;
	time = time || 400;
	obj.timer = null;
	var iDeg = 0;
	var a = null, b = null, c = null, d = null;
	clearInterval(obj.rotateTimer);
	obj.rotateTimer = setInterval(function(){
		iDeg += deg/(time/15);
		if(Math.abs(deg) - Math.abs(iDeg) < deg/(time/15))iDeg = deg;
		a = Math.round(Math.cos(iDeg/180*Math.PI)*100)/100;
		b = Math.round(Math.sin(iDeg/180*Math.PI)*100)/100;
		c = -b; d = a;
		obj.style.WebkitTransform = 'matrix('+a+','+b+','+c+','+d+',0,0)';
		obj.style.MozTransform = 'matrix('+a+','+b+','+c+','+d+',0,0)';
		obj.style.transform = 'matrix('+a+','+b+','+c+','+d+',0,0)';
		obj.style.filter = 'progid:DXImageTransform.Microsoft.Matrix( M11='+a+', M12='+c+', M21='+b+' , M22='+d+',SizingMethod="auto expand")';
		obj.style.left = (obj.parentNode.offsetWidth-obj.offsetWidth)/2 +'px';
		obj.style.top = (obj.parentNode.offsetHeight-obj.offsetHeight)/2 +'px';
		if(iDeg == deg){
			clearInterval(obj.rotateTimer);
			if( !boolean ) toRotate( obj, deg, time);
		}
	},15);
}

function getClass(parentObj,tagName,className){
	var arr=[];
	var aTags=parentObj.getElementsByTagName(tagName);
	for(var i=0; i<aTags.length; i++){
		var aClassName=aTags[i].className.split(' ');
		for(var j=0; j<aClassName.length; j++){
			if(aClassName[j]==className){
				arr.push(aTags[i]);
				break;
			}
		}
	}
	return arr;
}

function backTop(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var speed = Math.floor( scrollTop / -3 );
    var backTime = setTimeout( backTop, 15 );
    if( scrollTop == 0 ){
        clearTimeout(backTime);
    };
    document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed;
}

function addEvent(obj,evName,fn){
	if(obj.addEventListener){
		obj.addEventListener(evName,fn,false);
	}else{
		obj.attachEvent('on'+evName,fn);
	}
}
function removeEvent(obj,evName,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(evName,fn,false)
	}else{
		obj.detachEvent('on'+evName,fn);
	}
}

function addMouseWheel(obj,fn){
	obj.onmousewheel=fn;
	if(obj.addEventListener){
		obj.addEventListener('DOMMouseScroll',fn,false);
	}
}	
function upOrDown(ev){
	//调用此函数需传值ev；
	var oEv=ev||event;
	if(oEv.wheelDelta){
		return oEv.wheelDelta>0?true:false;
	}else{
		return oEv.detail<0?true:false;
	}
}


