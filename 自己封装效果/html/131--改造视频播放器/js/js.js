function indexfun(){
    $("#content").show();


    videoControl();
    function videoControl(){
        var videos = document.getElementsByClassName("video");
        var players = document.getElementsByClassName("player");
        var covers = document.getElementsByClassName("covers");
        var len = videos.length;
        var k = [];
        for (var i= 0; i< len; i++){
            k.push(0);

            videos[i].index = i;
            covers[i].index = i;
            players[i].index = i;

            var avideo = videos[i];

            avideo.onclick = function(){
                var j = this.index;
                if(k[j] == 0){
                    this.play();
                    k[j] = 1;
                }else{
                    this.pause();
                    k[j] = 0;
                }
            };
            avideo.onended = function(){
                var j = this.index;
                k[j] = 0;

                players[j].style.display = "block";
                covers[j].style.display = "block";
            };
        }
        $(".player").each(function(e){
            var This = $(this);
            This.click(function(e){
                var pbox = This.parents(".mp4_box");
                pbox.find(".player").hide();
                pbox.find(".covers").hide();
                pbox.find(".video").click();
                e.stopPropagation();
            });
        });

    }
}