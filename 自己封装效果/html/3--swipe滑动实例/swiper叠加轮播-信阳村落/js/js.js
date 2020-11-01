/**
 * loading 数据请求loading【区别于页面加载loading】
 * state: 0 关闭loading, 1 打开loading
 * txt: 要提示的文字
 *
 * 例如：
 * loading("1","");  打开loading
 * loading("0","");  关闭loading
 * */

function loading(state,txt){
    if(state == 1){
       $(".loader").show();
    }else{
        $(".loader").hide();
    }
}

/**
 * 移动端鼠标滑动事件
 * obj1：滑动的对象【即在谁的上面进行的触摸滑动】的id
 * state：状态； 1,2,3,4  1向上滑动，2向下滑动， 3向右滑动，4 向左滑动
 * fun：滑动操作之后想要做的事情
 *
 * */

function touchEvent(obj1,state,fun){
    var div1 = document.getElementById(obj1);
    if(!div1){
        div1 = document.getElementsByClassName(obj1)[0];
    }
    //滑动处理
    var startX, startY;
    console.log(div1);
    div1.addEventListener('touchstart',function (ev) {
        startX = ev.touches[0].pageX;
        startY = ev.touches[0].pageY;
    }, false);

    div1.addEventListener('touchend',function (ev) {
        var endX, endY;
        endX = ev.changedTouches[0].pageX;
        endY = ev.changedTouches[0].pageY;
        var direction = GetSlideDirection(startX, startY, endX, endY);
        switch(direction) {
            case 0:
                // alert("无操作");
                break;
            case 1:
                // 向上
                // alert("up");
                if(state == 1){
                    fun();
                }
                break;
            case 2:
                // 向下
                // alert("down");
                if(state == 2){
                    fun();
                }
                break;
            case 3:
                // 向右
                // alert("right");
                if(state == 3){
                    fun();
                }
                break;
            case 4:
                // 向左
                // alert("left");
                if(state == 4){
                    fun();
                }
                break;

            default:
        }
    }, false);
    function GetSlideDirection(startX, startY, endX, endY) {
        var dy = startY - endY;
        var dx = endX - startX;
        var result = 0;
        //设定10度以内不属于移动
        if(dy>10) {
            result=1;
            //console.log("向上滑动");
        }else if(dy<-10){
            result=2;
            //console.log("向下滑动");
        } else {
            if(dx>10){
                result=3;
                //console.log("向右滑动");
            }else if(dx<-10){
                result=4;
                //console.log("向左滑动");
            }else{
                result=0;
                //console.log("无操作");
            }
        }
        return result;
    }
}