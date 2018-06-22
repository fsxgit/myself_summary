$(document).ready(function(){
	/**
	 * 返回顶部处理
	 *
	 *
	 *
	 */
		//返回顶部动画
	$(".c-back").click(function(){
		$("html, body").animate({
			scrollTop: 0 }, {duration: 500,easing: "swing"});
		return false;
	});



	var _objscroll = {
		win:$(window),
		doc:$(document),
		gotopdiv:$('.c-back')
	};

	_objscroll.win.scroll(function(){
		if(_objscroll.win.scrollTop() > _objscroll.win.height()){
			_objscroll.gotopdiv.show();
		}else{
			_objscroll.gotopdiv.hide();
		}

	});

	//返回顶部点击
	_objscroll.gotopdiv.click(function(){//控制返回顶部
//            _objscroll.win.scrollTop(0);
		return false;

	});





	//    跳转锚点
	$("body").on("click","#fxnav a",function(){
		var $to = $(this).data("to");
		if($to){
			$(".navbar-toggle").click();
			$("html, body").animate({
				scrollTop: $("#"+$to).offset().top-50 }, {duration: 500,easing: "swing"});
			return false;
		}
	});

});