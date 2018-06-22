 
$(window).ready(function() {
    //新闻数据
    getWeather();
    function getWeather() {
        $.ajax({
            url: '/mojiweather/news.php',
            success: function(data) {

                var result = JSON.parse(data);
                var res    = result.data;           
                var html ='';
                for (var i = 0; i < res.length; i++) {
                    var y = i + 1;
                    var val =res[i];
                    html+='<a href="'+val['url']+'" target="_blank">';
                    html+='<div class="info_img info_img_'+y+'">';
                    html+='<i><img src="'+val['img']+'"></i>';
                    html+='<h2>'+val['title']+'</h2>';
                    html+='<span>'+val['date']+'</span>';
                    html+='<p>'+val['description']+'......</p>';   
                    html+='</div>';
                    html+='</a>';  
                }
                $("#index_news").html(html); 
            },
            error: function(error) {
                console.log(error);
            }
        },'json');
    };
});
 /*
$(window).ready(function() {
    //新闻数据
    getWeather();
    function getWeather() {
        $.ajax({
            url: '/mojiweather/news.php',
            success: function(data) {

                var result = JSON.parse(data);
                var res    = result.data;           
                var html ='';
                for (var i = 0; i < res.length; i++) {
                    var y = i + 1;
                    var val =res[i];
                    //console.log(res[i]);
                    var time =  val['public_date'].substring(0, 10); 
                    //console.log(time);
                    html+='<a href="https://tianqi.moji.com/news/detail/moji/'+val['id']+'" target="_blank">';
                    html+='<div class="info_img info_img_'+y+'">';
                    html+='<i><img src="https://cdn.moji.com/page5/images/uploads/'+val['shareBigImage']+'"></i>';
                    html+='<h2>'+val['subtitle']+'</h2>';
                    html+='<span>'+time+'</span>';
                    html+='<p>'+val['content']+'......</p>';   
                    html+='</div>';
                    html+='</a>';  
                }
                $("#index_news").html(html); 
            },
            error: function(error) {
                console.log(error);
            }
        },'json');
    };
});
*/