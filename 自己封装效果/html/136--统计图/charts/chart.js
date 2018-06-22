function calculateMA(values, dayCount) {
    var result = [];
    for (var i = 0, len = values.length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += values[i - j][1];
        }
        result.push(sum / dayCount);
    }
    return result;
}

export function drawCandleStick(domElement, data) {

  var option = {
    title: {
      text: '',
      left: 0
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
        data: ['K线', 'MA5']
    },
    grid: {
      left: '15%',
      right: '5%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      /*
       * data 为一维数组，每个元素为日期字符串
       * 其 length 必须与下面的二维数组 length 一致
       */
      data: data.category,
      scale: true,
      boundaryGap : false,
      axisLine: {onZero: false},
      splitLine: {show: false},
      splitNumber: 20,
      min: 'dataMin',
      max: 'dataMax'
    },
    yAxis: {
      scale: true,
      splitArea: {
        show: true
      }
    },
    dataZoom: [
      {
        type: 'inside',
        start: 50,
        end: 100
      },
      {
        show: true,
        type: 'slider',
        y: '90%',
        start: 50,
        end: 100
      }
    ],
    series: [
      {
        name: 'K线',
        type: 'candlestick',
        /*
         * data 参数必须为二维数组。每个元素依次为4个数值：[开盘，收盘，最低，最高]
        */
        data: data.values,
        itemStyle: {
          normal: {
            // up color
            color: '#ec0000',
            // up border color
            borderColor: '#8A0000',

            // down color
            color0: '#00da3c',
            // down border color
            borderColor0: '#008F28'
          }
        }
      },
      {
          name: 'MA5',
          type: 'line',
          data: calculateMA(data.values, 5),
          smooth: true,
          lineStyle: {
              normal: {opacity: 0.5}
          }
      },
    ]
  }

  var chart = echarts.init(domElement)
  chart.setOption(option)
}
