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

		var bindEvent = IsPC() ? 'click' : 'touchend';

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
	/*  二屏动画切换end  */
});

