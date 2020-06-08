/**
 * 所有请求接口
 * data: json
 *  *   * 0        成功
     * 1        参数缺少
     * 2        参数类型不对
     * 3        图片上传失败,请重新上传
     * 4        接口请求失败
     * 5        数据不存在
     * 6        包含敏感词
     * 7        用户已冻结
     * 8        未授权，请重新登录
     * 9       图片格式错误,请重新上传
     * 10       接口请求太频繁了
     * 10001    该手机号已存在
     * 10002    验证吗不存在
     * 10003    用户不存在
     * 10004    您已经关注过了
*/
function getdata(url,data){
  // console.log("step1:开始请求接口");
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url, // 仅为示例，并非真实的接口地址
      data: data,
      method:"POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(response) {
        console.log('step2:数据请求成功，检查请求成功的返回状态');
        console.log(response);
        if (response.data.code == '0') {
          // 数据获取成功
          // console.log('step3:返回获取到的数据结果给页面');
          // console.log(response.data.data);
          let datas;
          if (response.data.data){
            datas = response.data.data
          }else{
            datas = response.data;
          }
          resolve(datas); // 这个不能省，省了之后的then方法就不走了
        } else {
          console.log('step3:出现错误');
          console.log(data);
          console.log(response);
          // 请求接口成功，但是出现错误的提示
          var msg = response.data.message
          wx.showToast({
            title: msg,
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail(error) {
        // reject(error); // 这个不能省，省了之后的then方法就不走了
        fail(error);
      }
    })
  })
}

// 接口请求失败提示
function fail(response) {
  console.log('step2:数据请求失败');
  // console.log(response);
  wx.showToast({
    title: '数据请求失败',
    icon: 'none',
    duration: 2000
  })
}

// 把接口暴漏出来
module.exports = {
  getdata: getdata
}