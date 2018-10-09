function ts(data){
    $(".ts_box").remove();
    console.log(data);
    var htm = '';
    htm += '<div class="ts_box">';
    htm += '<div class="ts_center">';
    htm += '<img src="./ts'+data.state+'.png" alt="">';
    htm += '<p>'+data.txt+'</p>';
    if(data.kind == 1){
        htm += '<button>确定</button>';
    }else{
        htm += '<div class="ts2_btn">';
        htm += '<button>取消</button>';
        htm += '<button>确定</button>';
        htm += '</div>';
    }
    htm += '</div>';
    htm += '</div>';
    $("body").append(htm);
    if(data.kind == 1){
        $(".ts_box button").click(function(){
            $(".ts_box").hide();
            if(data.sure){data.sure();}
        })
    }else{
        $(".ts2_btn button:nth-of-type(1)").click(function(){
            $(".ts_box").hide();
            if(data.sure){data.cancel();}
        });
        $(".ts2_btn button:nth-of-type(2)").click(function(){
            $(".ts_box").hide();
            if(data.sure){data.sure();}
        });
    }

}