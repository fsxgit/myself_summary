$(document).ready(function(){

		if(!document.getElementsByClassName){
			document.getElementsByClassName = function(className, element){
				var children = (element || document).getElementsByTagName('*');
				var elements = new Array();
				for (var i=0; i<children.length; i++){
					var child = children[i];
					var classNames = child.className.split(' ');
					for (var j=0; j<classNames.length; j++){
						if (classNames[j] == className){
							elements.push(child);
							break;
						}
					}
				}
				return elements;
			};
		}


		var width = window.screen.width,
			height = $(window).height(),
			bgHei = 0,
			bottomHei = 0;
		bgHei = width/2.4;
		bottomHei = (height - bgHei)/2;
		if(bottomHei>70){
			$('.wrap').css('bottom',bottomHei-7+'px');
		}
		// console.log(width);
		// console.log(height);

		function IsPC(){
			var userAgentInfo = navigator.userAgent;
			var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
			var flag = true;
			for (var v = 0; v < Agents.length; v++) {
				if (userAgentInfo.indexOf(Agents[v]) > 0){
					flag = false;
					break;
				}
			}
			return flag;
		}

		function IsIE(){
			var browser=navigator.appName,
				b_version=navigator.appVersion,
				version=b_version.split(";");
			if(version[1]){
				var	trim_Version=version[1].replace(/[ ]/g,"");
				var Agents = new Array("MSIE8.0", "MSIE7.0", "MSIE6.0");
				var flag = false;
				for (var v = 0; v < Agents.length; v++) {
					if (browser == "Microsoft Internet Explorer" && trim_Version == Agents[v]){
						flag = true;
						break;
					}
				}
				return flag;
			}
		}

		var bindEvent = IsPC() ? 'click' : 'touchend';

	/*  menu  */
		function startMenu(obj){
			var activeLi = obj,
				activeLiOffset = activeLi.offset();
			$('#menu_bar').stop().animate({'width':90,'left':activeLiOffset.left},200);
		}
		function endMenu(obj){
			$('#menu_bar').stop().animate({'width':'100%','left':0},200);
		}

		$('menu .spe_li').bind('mouseover',function(){
			startMenu($(this));
		})
		.bind('mouseout',function(){
			endMenu($(this));
		});

	/*  menu end  */

	/*  轮播  */
		if(IsPC()){
			var checkImgCount = 0,
				imgTimer = null,
				bigTimer = null,
				clickTimer = null,
				animateTime = 1000,//每个动画运行持续时间
				checkTime = 5000;
			//初始化
			var checkWindoWidth = $(window).width();

			//运行动画
			function moveImgBg(index, moveTime){
				if(!$('.didi_check_bg').hasClass('no_animate')){
					$('#check_img_btns a').eq(index).addClass('active').siblings().removeClass('active');
					$('.didi_check_bg .img_bg').fadeOut(moveTime);
					$('.didi_check_bg .img_bg').eq(index).fadeIn(moveTime);
				}
			}

			//定时器运作
			function imgCheck(){
				checkImgCount ++;
				if(checkImgCount > 3){
					checkImgCount = 0;
				}
				moveImgBg(checkImgCount, animateTime);
			}

			bigTimer = window.setInterval(imgCheck,checkTime);

			//绑定点击动画
			$('#check_img_btns a').bind('click',function(){
				window.clearInterval(bigTimer);
				window.clearInterval(clickTimer);
				var thisIndex = $(this).index();
				moveImgBg(thisIndex, animateTime);
				checkImgCount = thisIndex;
				clickTimer = window.setInterval(imgCheck,checkTime);
			});
		}
	/*  轮播 end  */

	/*  二屏动画切换  */
		var blockCount = 0,
			iconCount = 0,
			ulWidth = $('#img_outer').width(),
			imgLength = $('#img_outer img').length,
			eachLiWidth = ulWidth / imgLength,
			imgTimer = null,
			imgTimer2 = null;
			
		function imgMove(){
			blockCount ++;
			iconCount ++;
			if(blockCount == imgLength){
				blockCount = 1;
				$('#img_outer').css({'left':0});	
			}
			if(blockCount == (imgLength - 1)){
				iconCount = 0;	
			}
			$('#img_outer').stop().animate({'left': -blockCount * eachLiWidth},500);
			$('#icon_outer a').eq(iconCount).addClass('active').siblings().removeClass('active');
			$('.block_mess_outer .block_mess_each').eq(iconCount).show().siblings().hide();
			$('.phone_check_title p').eq(iconCount).show().siblings().hide();
		}
		
		imgTimer = window.setInterval(imgMove,5000);
		
		$('.block_inner_btn').bind(bindEvent,function(){
			if($(this).hasClass('btn_left')){
				//左按钮
				blockCount --;
				iconCount --;
				if(blockCount == -1){
					blockCount = imgLength - 2;
					iconCount = imgLength - 2;
					$('#img_outer').css({'left': -eachLiWidth * (imgLength - 1)});		
				}
				$('#img_outer').stop().animate({'left': -blockCount * eachLiWidth},500);
			}
			else{
				//右按钮
				blockCount ++;
				iconCount ++;
				if(blockCount == imgLength){
					blockCount = 1;
					$('#img_outer').css({'left':0});	
				}
				$('#img_outer').stop().animate({'left': -blockCount * eachLiWidth},500);
			}
			if(blockCount == (imgLength - 1)){
				iconCount = 0;	
			}
			$('#icon_outer a').eq(iconCount).addClass('active').siblings().removeClass('active');
			$('.block_mess_outer .block_mess_each').eq(iconCount).show().siblings().hide();
			$('.phone_check_title p').eq(iconCount).show().siblings().hide();
		});
		
		$('#icon_outer a').bind(bindEvent,function(){
			var thisIndex = $(this).index();
			blockCount = thisIndex;
			iconCount = thisIndex;
			$(this).addClass('active').siblings().removeClass('active');
			$('#img_outer').stop().animate({'left': -thisIndex * eachLiWidth},500);	
			$('.block_mess_outer .block_mess_each').eq(thisIndex).show().siblings().hide();
		});
		
		$('#icon_outer').bind('mouseover',function(){
			window.clearInterval(imgTimer);
			window.clearInterval(imgTimer2);
		}).bind('mouseout',function(){
			imgTimer2 = window.setInterval(imgMove,5000);	
		});
	/*  二屏动画切换end  */
	
	/*  司机端注册切换动画  */
		$('.step_btn_outer a').bind(bindEvent,function(){
			var thisIndex = $(this).index(),
				thisWidth = $(this).width();
			$(this).addClass('active').siblings().removeClass('active');
			$('.step_btn_bg').stop().animate({'left': ((thisWidth - 2) * thisIndex + 5)},300);
			$('.each_step').each(function(){
				$(this).find('.step_icon_mess').eq(thisIndex).show().siblings('.step_icon_mess').hide();
			});
			if(thisIndex == 1){
				$('.ih-item a').addClass('active');	
			}
			else{
				$('.ih-item a').removeClass('active');
			}
		});
	/*  司机端注册切换动画 end  */
	
	/*  IE 菜单效果  */
	if(IsIE()){
		$('menu .spe_li').bind('click',function(ev){
			ev.stopPropagation();
			if(!$(this).attr('isclick')){
				$(this).attr('isclick','true').children('.sec_menu').animate({'height':65},300);
			}
			else{
				$(this).removeAttr('isclick').children('.sec_menu').animate({'height':0},300);
			}
		});
		
		$(document).bind('click',function(){
			$('menu .spe_li').removeAttr('isclick');
			$('.sec_menu').animate({'height':0},300);	
		});
        $("#icon_outer").hide();
        $(".is_ie_hide").show();
        $(".ie_not_bg").css("background",'');
	}
	/*  IE 菜单效果 end  */
	
	/*  手机下滑  */
		$('.scroll_down').bind('click',function(){
			$('html,body').stop().animate({'scrollTop':windowHeight},300);	
		});
	
	/*  console  */
		if (!window.console) console = {};
		console.log = console.log || function(){};
	
		console.log("hello，程序员哥哥，又见到这个彩蛋是不是很开心？\n我知道你此刻想吐槽，想攻击我们官网；\n更重要的是你想优化，想改变这个网站，甚至是整个滴滴。\n找到了合适了你的起点了么？\n从这扇门开始改变滴滴，改变世界，改变自己。\n");
		console.log("芝麻开门:发送简历至 %c hr@diditaxi.com.cn（ 邮件标题请以“姓名-应聘XX职位-来自console”命名）","color:#ff8800");
		console.log("你创造世界的舞台：：http://www.xiaojukeji.com/website/recruitment.html");
	
	
	
	
});

