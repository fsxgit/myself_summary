$(function(){
    $(function () {
        $('#demo').mobiscroll().select({
            preset: 'select',
            theme: 'android-ics light',
            lang: 'zh',
            setText: '确定', //确认按钮名称
            cancelText: '取消',//取消按钮名籍我
            minWidth: 200,
            mode: 'scroller',
            display: 'bottom'
        });

    });
});

$(function(){
    $("#scroller").mobiscroll().date();

    var currYear = (new Date()).getFullYear();

    //初始化日期控件
    var opt = {
        preset: 'datetime',
        theme: 'android-ics light',
        display: 'bottom',
        mode: 'scroller',
        dateFormat: 'yyyy-mm-dd',
        lang:'zh',
        setText: '确定',
        cancelText: '取消',

        dateOrder: 'yyyymmdd',
        timeFormat: 'HH:ii',
        timeWheels: 'HHii',
        stepMinute: 5,
        dayText: '日', monthText: '月', yearText: '年',
        showNow: false,
        nowText: "今",
        startYear:currYear,
        endYear:currYear + 100,
        minDate: new Date()

    };

    $("#scroller").mobiscroll(opt);
});