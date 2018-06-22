document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法.
function subSomething() {
	if(document.readyState=="complete"){
		document.getElementById("loading").style.opacity = 0;
		document.getElementById("loading").style.visibility = 'hidden';
	}
}