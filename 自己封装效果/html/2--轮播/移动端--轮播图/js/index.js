// JavaScript Document
function id(obj) {
	return document.getElementById(obj);
}
function bind(obj, ev, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(ev, fn, false);
	} else {
		obj.attachEvent('on' + ev, function() {
			fn.call(obj);
		});
	}
}
function view() {
	return {
		w: document.documentElement.clientWidth,
		h: document.documentElement.clientHeight
	};
}
function addClass(obj, sClass) {
	var aClass = obj.className.split(' ');
	if (!obj.className) {
		obj.className = sClass;
		return;
	}
	for (var i = 0; i < aClass.length; i++) {
		if (aClass[i] === sClass) return;
	}
	obj.className += ' ' + sClass;
}

function removeClass(obj, sClass) {
	var aClass = obj.className.split(' ');
	if (!obj.className) return;
	for (var i = 0; i < aClass.length; i++) {
		if (aClass[i] === sClass) {
			aClass.splice(i, 1);
			obj.className = aClass.join(' ');
			break;
		}
	}
}
function fnTab()
{
	var oTab=id("tabPic");
	var oList=id("picList");
	var aNav=oTab.getElementsByTagName("nav")[0].children;
	var iNow=0;
	var iX=0;
	var iW=view().w;
	var oTimer=0;
	var iStartTouchX=0;
	var iStartX=0;
	bind(oTab,"touchstart",fnStart);
	bind(oTab,"touchmove",fnMove);
	bind(oTab,"touchend",fnEnd);
	auto();
	function auto()
	{
		oTimer=setInterval(function(){
			iNow++;
			iNow=iNow%aNav.length;
			tab();
		},2000);
	}
	function fnStart(ev)
	{
		oList.style.transition="none";
		ev=ev.changedTouches[0];
		iStartTouchX=ev.pageX;
		iStartX=iX;
		clearInterval(oTimer);
	}
	function fnMove(ev)
	{
		ev=ev.changedTouches[0];
		var iDis=ev.pageX-iStartTouchX;
		iX=iStartX+iDis;
		oList.style.WebkitTransform=oList.style.transform="translateX("+iX+"px)";
	}
	function fnEnd()
	{
		iNow=iX/iW;
		iNow=-Math.round(iNow);
		if(iNow<0)
		{
			iNow=0;
		}
		if(iNow>aNav.length-1)
		{
			iNow=aNav.length-1;
		}
		tab();
		auto();
	}
	function tab()
	{
		iX=-iNow*iW;
		oList.style.transition="0.5s";
		oList.style.WebkitTransform=oList.style.transform="translateX("+iX+"px)";
		for(var i=0;i<aNav.length;i++)
		{
			removeClass(aNav[i],"active");
		}
		addClass(aNav[iNow],"active");
	}
}