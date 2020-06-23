const app = getApp()

Page({
  data: {

  },
  onLoad: function (options) {
    console.log("options-index");
    console.log(options);
  },

  /**
   * 加载完毕
   */
  loadingend: function () {
    console.log("加载完毕");
  },

  /**
   * 加载失败
   */
  loadingerr: function () {
    console.log("加载失败");
  },

  /**
   * 
   */
  getmessages: function (res) {
    console.log("获取到网页传递过来的消息");
    console.log(res);
    let length = res.detail.data.length;
    this.setData({
      href: res.detail.data[length - 1]
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    let This = this;
    console.log("webview传递过来的数据");
    console.log(this.data.href);
    return {
      path: '/log/index?type=666&data=' + this.data.href,
    }

  }
})
