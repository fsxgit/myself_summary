
//此函数只需要给定一个天数的参数,则会自动返回当前日期到天数日期之间的所有日期值
function soso(dayNum){

    var myDate  = new Date();
    var yy = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    var mm = myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
    var dd = myDate.getDate();
    var ymd = yy+"-"+mm+"-"+dd;
    //alert(ymd);
    //获取当前年月日


//33333333******************************************************
//    三、应用：

    var flag = Array();//年月日数组全局变量
    var fdays = Array();//日数组全局变量

    var start = ymd;
    var end;
    var days = dayNum;
    AddDaysYMD(start,days);

    //alert("结尾"+end);
    //alert(end);
    SetFlag(start,end);

//4444444**********************************************************
//设置周期内的日期(数组)
//参数格式var start = "2016-01-01";   var end = "2016-01-03";
//返回的时两个日期之间的 所有日期
    function SetFlag(start,end){
        var cdate = Array();
        cdate = start.split("-");
        var cd = cdate[1]+"/"+cdate[2]+"/"+cdate[0];
        var dayNum = DateDiff(end,start);
        //alert(cd);
        for(var i=0; i<=dayNum; i++){

            flag.push(AddDaysYMD(cd,i));//返回年月日数组
            fdays.push(AddDaysDay(cd,i));//返回日数组

        }
    }//end fun

//6666666666****************************************************************
    //日期加上天数后的新日期.
//参数格式 var date = 12/30/2015; var days = 3 返回的是 var d2 = 2016-01-02;
    function AddDaysYMD(date,days){
        var nd = new Date(date);
        nd = nd.valueOf();
        nd = nd + days * 24 * 60 * 60 * 1000;
        nd = new Date(nd);
//        alert(nd.getFullYear() + "年" + (nd.getMonth() + 1) + "月" + nd.getDate() + "日");
        var y = nd.getFullYear();
        var m = nd.getMonth()+1;
        var d = nd.getDate();
        if(m <= 9) m = "0"+m;
        if(d <= 9) d = "0"+d;
//      返回年月日
        var cdate = y+"-"+m+"-"+d;
//      返回日
//      var cdate =d;
        end = cdate;
        return cdate;
    }

    function AddDaysDay(date,days){
        var nd = new Date(date);
        nd = nd.valueOf();
        nd = nd + days * 24 * 60 * 60 * 1000;
        nd = new Date(nd);
//        alert(nd.getFullYear() + "年" + (nd.getMonth() + 1) + "月" + nd.getDate() + "日");
        var y = nd.getFullYear();
        var m = nd.getMonth()+1;
        var d = nd.getDate();
        if(m <= 9) m = "0"+m;
        if(d <= 9) d = "0"+d;
////      返回年月日
//        var cdate = y+"-"+m+"-"+d;
//      返回日
        var cdate =d;

        return cdate;
    }


//77777777777777**************************************************************
//两个日期的差值(d1 - d2).
//参数格式 var d1 = 12/30/2015;  var d2 = 12/31/2015;  返回的是天数差值 1
    function DateDiff(d1,d2){
        var day = 24 * 60 * 60 *1000;
        try{
            var dateArr = d1.split("-");
            var checkDate = new Date();
            checkDate.setFullYear(dateArr[0], dateArr[1]-1, dateArr[2]);
            var checkTime = checkDate.getTime();

            var dateArr2 = d2.split("-");
            var checkDate2 = new Date();
            checkDate2.setFullYear(dateArr2[0], dateArr2[1]-1, dateArr2[2]);
            var checkTime2 = checkDate2.getTime();

            var cha = (checkTime - checkTime2)/day;
            return cha;
        }catch(e){
            return false;
        }
    }//end fun
/*
    alert(flag);//年月日数组
    alert(fdays); //日数组*/
    //555555**************************************************************
/*
//打印出所需要的数据
    for(var i=0; i<flag.length; i++){
        document.write("<p style='padding:4px;'>"+flag[i]+"\n\r</p>");

    }

    document.write("<div style='padding:4px 0; width:100%; background: #ccc;'>"+"年月日:"+flag+"</div>");
    document.write("<div style='padding:4px 0; width:100%; background: #ccc;'>"+"只是日:"+fdays+"</div>");
*/




    var innerfday = "";
    for(var i=0; i<flag.length; i++){
        innerfday += "<p class='hideDiv'>"+flag[i]+"</p>";
    }
    //document.write(innerTxt);
    $(".fff").html(innerfday);



    var innerTxt = "";
    for(var i=0; i<fdays.length; i++){
        innerTxt += "<li><p class='fday'>"+fdays[i]+"日</p><p class='fweek'></p></li>";
    }
    //document.write(innerTxt);
    $("#kk").html(innerTxt);
       bian();
       function bian(){
           var afweek =$(".fweek");
           var hideDiv =$(".hideDiv");
           var NewArray = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
           afweek.each(function(index){

               var KingVal = hideDiv.eq(index).text();
               DateYear = parseInt(KingVal.split("-")[0]);
               DateMonth = parseInt(KingVal.split("-")[1]);
               DateDay = parseInt(KingVal.split("-")[2]);
               var NewDate = new Date(DateYear,DateMonth-1,DateDay);
               var NewWeek = NewDate.getDay();
               $(this).html(NewArray[NewWeek]);
           })


       }
}