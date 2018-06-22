function daijinquan(){
    var fxdiv = $('#huidiv');
    var fxbtn = $('.fxbtn');
    var isFirst = true;
    fxbtn.click(function(){
        if(isFirst){
            isFirst = false;
            fxdiv.css({"transformStyle":"preserve-3d","-webkitTransform":"rotateY(90deg)", "-webkitTransition":"all 0.6s"});
            setTimeout(function(){
                $('#mspan').show();
                $('#mspan').css({'transform':'rotateY(180deg)','display':'block'});
                fxdiv.css('background','none')
            },700);
            setTimeout(function(){
                fxdiv.css({"transformStyle":"preserve-3d","-webkitTransform":"rotateY(180deg)", "-webkitTransition":"all 0.6s"});
            },800);
        }

    });
}