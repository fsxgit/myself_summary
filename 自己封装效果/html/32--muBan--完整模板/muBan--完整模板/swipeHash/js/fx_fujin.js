//带hash的头部导航 开始
function hashSwipe(){
	//到头导航
	var hash = window.location.href.split('#')[1];
	var  mySwiper = new Swiper ('.swiper-container', {
		direction: 'horizontal', //水平方向
		grabCursor : true, //指针形状
		freeMode : false,//自动粘合
		slidesPerView : 'auto',//按设置的宽高自由分配显示的个数
		preventClicks : false,
		initialSlide :hash //当前显示块的位置
	});
//    var $aNav = $("#nav div");
//
//    $aNav.click(function(){
//        $(this).addClass("active").siblings().removeClass("active");
//    })
	var aSwiperSlide = $('.swiper-slide');
	if(hash){
		//页面加载进来时  通过判断hash 来设定当前显示块
		aSwiperSlide.each(function(){
			$(this).removeClass('swiper-slide-active active');
		});
		aSwiperSlide.eq( hash ).addClass('swiper-slide-active active');
//       aMode是各个不同模块  等待后台传如数据
//        aMode.eq(hash).show().siblings(".mode").hide();
	}else{
//        aMode.eq(0).show();
		aSwiperSlide.eq(0).addClass("active swiper-slide-active");
	};
	aSwiperSlide.each(function(){
		$(this).on("click",function(){
			var i = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
//            aMode.eq(i).show().siblings(".mode").hide();
		})
	});
}
//底部背景转换 fj_index.html js开始
function footswitch(){
	var $Img = $(".footList img");
	$Img.each(function(){
		$(this).click(function(){
			var str=$(this).attr("src").split("_")[0];
			$Img.each(function(){
				$(this).attr("src",$(this).attr("src").split("_")[0]+"_n.png");
			})
			$(this).attr("src",str+'_o.png');
		})
	})
}
//底部背景转换 fj_index.html js结束

//banner 图片 轮播 js 开始
function tabPic(){
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
	fnTab();
}
//下拉 列表  js 开始/
function MSslect(){
	var aSpan = $("#MSselectBox .selectNav");
	var aArea = $(".area");
	aSpan.each(function(){
		$(this).click(function(){
			var i = $(this).index();
			aArea.eq(i).slideToggle().siblings().hide();
		})
	})
}

function alt(){
	//会员弹出框 js 开始
	$(".vip").each(function(){
		$(this).click(function(){
			$(this).find(".vipTan").toggleClass("show");
		})
	})

}
//banner  轮播图片 开始
//banner 图片 轮播 js 开始
function MSDtabPic(){
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
		var oTab=id("MSDtabPic");
		var oList=id("MSDpicList");
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
	fnTab();
}
//事物 图片 轮播 js 开始
function foodtabPic(){
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
		var oTab=id("foodtabPic");
		var oList=id("foodpicList");
		var aLi=$("#foodpicList li");
		var aNav=oTab.getElementsByTagName("nav")[0].children;
		var iNow=0;
		var iX=0;
		var iW=aLi.width();
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
	fnTab();
}

//美食 MeiShi.html  js  结束
//美食 MeiShiDetail.html  js  开始
//分享弹出框
function shareAlert(){
	var oBtn = $("#shareBtn");
	var oBox = $("#shareBox");
	var cBtn = $(".closeBox");
	oBtn.click(function(){
		oBox.show();
		ShowDiv();
		document.body.style.height="100%";document.body.style.overflow="hidden";
	})
	function ShowDiv(){
        window.ontouchmove=function(e){
			e.preventDefault && e.preventDefault();
			e.returnValue=false;
			e.stopPropagation && e.stopPropagation();
			return false;
		}
	};
	cBtn.click(function(){
		oBox.hide();
		CloseDiv();
		document.body.style.height="";document.body.style.overflow="";
	})
	function CloseDiv()
	{
        window.ontouchmove=function(e){
			e.preventDefault && e.preventDefault();
			e.returnValue=true;
			e.stopPropagation && e.stopPropagation();
			return true;
		}

	};
}
//美食 MeiShiDetail.html  js  结束
