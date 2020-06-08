// pages/home/index/index.js
var $api = require('../../../utils/api.js');
var $util = require('../../../utils/util.js');
var App = getApp();
var page = 1;
var page_size = 10;
var news = [];
var code = null;
var token = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    __PORT__: App.globalData.__PORT__,
    __IMG__: App.globalData.__IMG__,
    news0: null,
    news: [], // 广告列表
    banners: [],
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 500,
    products: [], // 产品列表
    is_vote:0 , // 0 不显示成长型社区， 1 显示成长型社区
    showNum: 3.2, // 轮播一次显示的个数  数据多于两条，值设为2.2 ; 等于2条 值设为2; 小于两条 值设为1,
    hasUserInfo:true // 是否是新用户，或者说是否之前授权过微信头像和昵称
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 隐藏底部导航
    wx.hideTabBar({});

    page = 1;
    page_size = 10;
    news = [];
    this.setData({
      news: [], // 广告列表
      banners: [],
      products: [], // 产品列表
    })
    this.getHomeCont();
    this.getSysSet();

    let This = this;
    token = options.token;
    // 登录
    wx.login({
      success: res => {
        console.log(res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        code = res.code;
        console.log("code=" + code);
        // 获取用户信息
        wx.getSetting({
          success: res => {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: res => {
                  console.log("已经授权，获取用户信息1");
                  /**
                   * 已经授权，获取用户信息
                   * 授权的话，存储用户信息
                   * 
                  */
                  This.setData({
                    hasUserInfo: true
                  });
                  console.log("是否显示2：")
                  console.log(This.data.hasUserInfo);
                  // 显示底部导航
                  wx.showTabBar({});
                  let data = {
                    "code": code,
                    "avatar_url": res.userInfo.avatarUrl,
                    "nickname": res.userInfo.nickName
                  }
                  $api.getVInfoApi(data).then(function (res) {
                    console.log("设置用户信息3:");
                    App.globalData.__userInfo__ = res;
                    App.globalData.__UID__ = res.id;
                  });

                }
              })
            } else {
              // 没有授权，则显示授权按钮
              This.setData({
                hasUserInfo: false
              });
              console.log("是否显示4：")
              console.log(This.data.hasUserInfo);
            }
          }
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    page = 1;
    page_size = 10;
    news = [];
    this.setData({
      news: [], // 广告列表
      banners: [],
      products: [], // 产品列表
    })
    this.getHomeCont();
    this.getSysSet();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getHomeCont();
  },

  /**
   * 用户点击右上角分享  文章分享
  */
  onShareAppMessage: function (res) {
    let This = this;
    let page = App.globalData.getPage();
    let src = App.globalData.__IMG__ + "/cover.jpg";
    return {
      title: App.globalData.__slogan__,
      path: page,
      imageUrl: src
    }
  },

  /**
   * 获取首页内容
   */
  getHomeCont: function () {
    var This = this;
    let uid = App.globalData.__UID__;
    let data = {
      "uid":uid,
      "page":page,
      "page_size": page_size
    }
    $api.getHomeApi(data).then(function (res) {
      if (page == 1) {
        let banners = res["banner"];
        let products = res["onecp"];
        if (products.length > 3){
          This.setData({
            showNum:3.1
          })
        } else{
          This.setData({
            showNum: products.length
          })
        }
        This.setData({
          banners,
          products,
        })
      }

      let newsArr = [];
      newsArr = res["new"];
      if (newsArr.length > 0){
        // 除掉第一项
        if (page == 1) {
          let news0 = newsArr.splice(0, 1);
          news = news.concat(newsArr);
          news0[0].created_at = news0[0].created_at.replace(/-/g, "/");
          for (let i = 0; i < news.length;i++){
            news[i].created_at = news[i].created_at.replace(/-/g, "/");
          }

          This.setData({
            news0,
            news
          })
        } else {
          news = news.concat(newsArr);
          for (let i = 0; i < news.length; i++) {
            news[i].created_at = news[i].created_at.replace(/-/g, "/");
          }
          This.setData({
            news
          })
        }
        page++;
        // 隐藏加载
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      } 
    });
  },

  /**
  * 获取系统配置
  */
  getSysSet: function () {
    var This = this;
    let data = {}
    $api.getHtmlApi(data).then(function (res) {
      This.setData({
        is_vote: res.is_vote
      })
    });
  },

  /**
   * 点击“确定授权”按钮获取用户信息
   * 
  */
  getUserInfo: function (e) {
    console.log(e);
    let This = this;
    let res = e.detail.userInfo;
    console.log("获取结果5=");
    console.log(res);
    if (res) {
      /**
       * 用户点击了“确定”按钮，同意授权
       * 授权的话，存储用户信息
       * 
      */
      App.globalData.userInfo = e.detail.userInfo
      This.setData({
        hasUserInfo: true
      });
      console.log("是否显示6：")
      console.log(This.data.hasUserInfo);
      // 显示底部导航
      wx.showTabBar({});

      if (!token) {
        token = "";
      }
      let data = {
        "code": code,
        "avatar_url": res.avatarUrl,
        "nickname": res.nickName,
        "token": token
      }
      $api.getVInfoApi(data).then(function (res) {
        console.log("设置用户信息7:");
        App.globalData.__userInfo__ = res;
        App.globalData.__UID__ = res.id;

      });
    } else {
      // 用户点击了“拒绝”按钮，拒绝授权
      This.setData({
        hasUserInfo: false
      });
      console.log("是否显示8：")
      console.log(This.data.hasUserInfo);
    }

  }
})