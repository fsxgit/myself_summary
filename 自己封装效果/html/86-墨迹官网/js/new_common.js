$(window).ready(function() {
    //天气数据
    getWeather();

    function getWeather() {
        $.ajax({
            url: '/mojiweather/forecast.php',
            success: function(data) {
                var result = JSON.parse(data);
                var res = result.data;
                // console.log(result.data.city);
                //头部城市  
                var head = '<span>' + res.city.pname + ' ' + res.city.name + '</span>';
                head += '<b>' + res.condition.Ftemp + '</b>';
                head += '<i class="top_weather_wea"><img src="/templets/mojichina/images/weather/weather/w' + res.condition.Ficon + '.png"></i>';
                $("#head_weather_city").html(head);
                //预警部分 +农历
                var title = '<b>' + res.time.monthG + '</b><span>农历 ' + res.time.monthN + '</span><a target="_blank" href="http://tianqi.moji.com">更多</a>';
                var alert = '';
                if (res.alerts != false) {
                    alert += '<i class="level_' + res.alerts[0]['level_no'] + '" ><img src="/templets/mojichina/images/weather/warn/' + res.alerts[0]['name_no'] + '.png"></i>';
                    alert += '<b>' + res.alerts[0]['title'] + '</b>';
                }
                $("#head_weather_title").html(alert + title);
                //预报数据部分
                var aqi = res.forecastaqi;
                var body = '';
                if (res.forecastDayList != false) {
                    for (var x in res.forecastDayList) {
                        var val = res.forecastDayList[x];
                        body += '<a href="http://tianqi.moji.com" target="_blank">';
                        body += '<li>';
                        body += '<div class="top_forecast_date"><p>' + aqi[val['Fpredict_date']]['week'] + '</p><span>' + aqi[val['Fpredict_date']]['day'] + '</span><p class="top_forecast_temp">' + val.Ftemp_high + '</p></div>';
                        body += '<div class="top_forecast_wea"><i><img src="/templets/mojichina/images/weather/weather/w' + val['Ficon_day'] + '.png"></i><p>' + val['Fcondition_day'] + '</p><span>' + val['Fwind_dir_day'] + '</span><b class="level_' + aqi[val['Fpredict_date']]['level'] + '">' + aqi[val['Fpredict_date']]['desc'] + '</b></div>';
                        body += '</li>';
                        body += '</a>';
                    }
                }
                $("#head_weather_forecast").html(body);

            },
            error: function(error) {
                console.log(error);
            }
        }, 'json');
    };



    // // foot 建议反馈
    // $("#feedback_click").click(function() {
    //     $("#feedback_hide").show();
    //     getMsg("open");
    // })
    // $("#feedback_close").click(function() {
    //     $("#feedback_hide").hide();
    // })

    // //意见反馈 发送消息
    // $("#feedback_btn").click(function() {

    //     var msg = $("#txt_message").val();
    //     //alert(txt);
    //     getMsg(msg);

    // })

    // function getMsg(msg) {
    //     var sendDate = {};
    //     sendDate.msg = msg;

    //     $.ajax({
    //         url: '/mojiweather/message.php',
    //         type: 'POST', //GET
    //         data: sendDate,
    //         success: function(data) {
    //             data = [{
    //                 contant: "aaaaa",
    //                 time: "22:22:22"
    //             }, {
    //                 contant: "bbbb",
    //                 time: "11:11:11"
    //             }, {
    //                 contant: "cccc",
    //                 time: "33:33:33"
    //             }];
    //             // var result = JSON.parse(data);
    //             // var res = result.data;
    //             var html = '';
    //             if (sendDate.msg !== "open") {
    //                 for (var i = 0; i <= data.length - 1; i++) {
    //                     html += '<li class="clearfix"><b>' + data[i].time + '</b><p><i></i><span>' + data[i].contant + '</span></p></li>';
    //                 }
    //             } else {
    //                 html = '<li class="clearfix"><b>' + data[0].time + '</b><p><i></i><span>欢迎您。。。</span></p></li>';
    //             }
    //             $("#feedback_content ul").html(html);
    //             $("#txt_message").focus().val("");
    //             //$("#head_weather_forecast").html(body);

    //         },
    //         error: function(error) {
    //             console.log(error);
    //         }
    //     }, 'json');
    // }



});