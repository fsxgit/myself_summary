function resize(){
    var w=document.body.clientWidth;
    document.querySelector("html").style.fontSize=w*100/1336+'px';
    //rem与px没有实际的关系，根据情况不同比例不同的，这里说的根据情况，实际上就是自己设定比例
	//假设1rem=20px;那么关系就是(屏幕宽度*20/设计稿宽度)，设计稿的字体大小是16px，那么就等于16/20rem;
	//假设1rem=16px;那么关系就是(屏幕宽度*16/设计稿宽度)，设计稿的字体大小是16px，那么就等于16/16rem;
	//注意，谷歌浏览器最小字体为12px,定义关系的时候，不要小于12px;极限是1rem=12px；
};
document.body.οnresize=resize;
resize();
