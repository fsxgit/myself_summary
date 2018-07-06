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
        var str = '';
        str +='<div class="mint-indicator">';
        str +='<div class="mint-indicator-wrapper" style="padding: 15px;">';
        str +='<span class="mint-indicator-spin">';
        str +='<div class="mint-spinner-snake"></div>';
        str +='</span>';
        if(txt){
            str +='<span class="mint-indicator-text">'+txt+'</span>';
        }
        str +='</div>';
        str +='<div class="mint-indicator-mask"></div>';
        str +='</div>';

        $("body").append(str);
    }else{
        $(".mint-indicator").remove();
        //$(".mint-indicator").css("display","none");
    }
}