var $score = $("#score");
var $scoreList = $(".scoreList");
var $aLi = $("#score li");
//var $nav = $("#score li a");
//var $nav = $("#score>li>a");
//alert( $nav.length);
$aLi.each(function(){
	var aNav = $(this).find("a");
	//alert(aNav.length);
	aNav.each(function(){
		$(this).click(function(){

			alert($(this).index());
			for(var i=0;i<=aNav.length;i++){
				if(i<=$(this).index())
				{
					aNav.eq(i).addClass("active");
				}
				else
				{
					aNav.eq(i).removeClass("active");
				}
			}

		})
	})
})