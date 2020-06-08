//app.js
App({
  onLaunch: function () {
    var that = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // 修改全局变量；【根据后台选中的不同的风格，选用不通的图片路径】
    let style = 1; // 页面风格， 1 2 3
    that.globalData.__STYLEID__ = style;
    if (style == 1){
      return false;
      // 修改图片、颜色、底部导航
      that.globalData.__IMG__ = 'https://qingningshequ.weiapp.net/weChatStatics/images/theme_36ccbe/';
      that.globalData.__color__ = '#36ccbe';
      that.globalData.__bgcolor__ = '#36ccbe';

      wx.setTabBarStyle({
        selectedColor: '#36ccbe'
      })
      wx.setTabBarItem({
        index: 0,
        iconPath: '/statics/images/fot1.png',
        selectedIconPath: '/statics/images/fot1r.png'
      })
      wx.setTabBarItem({
        index: 1,
        iconPath: '/statics/images/fot2.png',
        selectedIconPath: '/statics/images/fot2r.png'
      })
    }
    
  },
  globalData: {
    userInfo: null,
    // __IMG__: 'http://od.wxImgs.com/qingningshequ/weChatStatics/images/theme_36ccbe/', // 本地图片链接
    __IMG__: 'https://qingningshequ.weiapp.net/weChatStatics/images/theme_36ccbe/', // 线上图片链接
    // __HOST__: 'https://qingningshequ.weiapp.net', // 正式接口域名
    __HOST__: 'http://demo.51shequapp.com/', // 正式接口域名
    __color__: '', // 主色调
    __bgcolor__: '', // 主背景色
    __STYLEID__: 1, //1、2、3、4、5、6 样式id，根据id来给每个页面的祖先级元素添加一个类名c_color+__STYLEID__的类名来控制页面颜色风格
    __uid__: 379, // 设置默认用户id
    __secretKey__: "", // 登录秘钥
    __currCommunity__: null, // 当前用户所选社区
    __houseList__: null, // 当前用户所有社区列表
    __userinfo__: null, // 当前用户信息
  }
})