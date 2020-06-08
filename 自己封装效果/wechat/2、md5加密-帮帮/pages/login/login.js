// pages/login/login.js
const $md5 = require('../../utils/md5.js');
var $api = require('../../utils/api.js');
var APP = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    __IMG__: APP.globalData.__IMG__,
    __HOST__: APP.globalData.__HOST__,
    __PAGESRC__: APP.globalData.__PAGESRC__,
    __UID__: APP.globalData.__UID__,
    showTelBtn: false,
    showSQ:false, // 是否显示授权按钮
    showLogin:false,// 是否显示登录页面
    account:'', // 手机号
    pass:'', // 密码
    code:'', // 手机验证码
    maTxt: "获取验证码",
    projectId: null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let This = this;
    if (options.id){
      This.setData({
        projectId: projectId
      });
    }
    console.log(APP.globalData.__UID__);
    if(APP.globalData.__UID__){
      wx.switchTab({
        url: '/pages/my/index/index',
      })
      return false;
    };
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log("初始化111");
        console.log(res);
        let data = {};
        let code = res.code;
        $api.getUnionid(data, code).then(function (res) {
          console.log(res);
          APP.globalData.unionid = res.unionid;
          APP.globalData.openid = res.openid;

          // 获取登录状态
          let data = {
            unionid: res.unionid
          };
          $api.getLoginState(data).then(function (res) {
            console.log("获取登录状态");
            console.log(res);
            if(res.code == 0){
                // 登录成功，储存用户信息
              APP.globalData.__UID__ = res.data.user_id;
              APP.globalData.userInfo = res.data;
              wx.switchTab({
                url: '/pages/my/index/index',
              })
            } else if (res.code == 1){
              // 提示错误信息
              console.log('提示错误信息');
              wx.showToast({
                title: res.desc,
                icon: 'none'
              });
              This.setData({
                showTelBtn:true
              })
            } else if (res.code == 3) {
              console.log("授权，绑定手机号");
              if(APP.globalData.userInfo){
                This.setData({
                  showTelBtn: true,
                  showSQ: false,
                  showLogin: true
                });
              }else{
                This.setData({
                  showSQ: true,
                  showLogin: false
                })
              }
            } 
          })
        })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 获取账号
   */
  getAccount: function (event) {
    this.data.account = event.detail.value;
  },

  /**
   * 获取密码
   */
  getPass: function (event) {
    this.data.pass = event.detail.value;
  },

  /**
   * 获取密码
   */
  getCode: function (event) {
    this.data.code = event.detail.value;
  },

  /**
   * 获取验证码
   */
  sendCode: function () {
    let This = this;
    let tel = This.data.account;
    if (!tel){
      wx.showToast({
        title: '请输入手机号',
        icon: 'none'
      })
      return false;
    }
    if (This.data.maTxt == "获取验证码"){
      let second = 60; // 发送验证码倒计时秒

      // 获取验证码
      let str = "bangbang" + tel.substr(0, 8) + "qwsxcgzgh";
      str = $md5.hexMD5(str);
      let data = {
        phone: tel,
        secretkey: str
      };
      $api.getCode(data).then(function (res) {
        console.log("发送验证码");
        console.log(res);
      });

      This.setData({
        maTxt: second + 's'
      })
      let timer = setInterval(function(){
        if (second > 1){
          second--;
          This.setData({
            second: second,
            maTxt: second + 's'
          })
        }else{
          This.setData({
            maTxt: "获取验证码"
          });
          clearInterval(timer);
        }
      }, 1000)
    }
  },

  /**
   * 登录
   * 
  */
  login: function (){
    let This = this; 
    console.log("账号:" + This.data.account);
    console.log("验证码:" + This.data.code);
    console.log("密码:" + This.data.pass);
    let account = This.data.account;
    let code = This.data.code;
    let pass = This.data.pass;
    if (!account || !code || !pass){
      wx.showToast({
        title: '请将信息输入完整',
        icon:'none'
      });
      return false;
    }
    let data = {
      phone: account,
      captcha:code,
      password: pass,
      unionid: APP.globalData.unionid,
      nickname: APP.globalData.userInfo.nickName,
      headimgurl: APP.globalData.userInfo.avatarUrl,
      sex: APP.globalData.userInfo.gender
    };
    $api.register(data).then(function (res) {
      console.log("登录/注册");
      console.log(res);
      APP.globalData.userInfo = res;
      APP.globalData.__UID__ = res.user_id;
      if (This.data.projectId) {
        wx.redirectTo({
          url: '/pages/detail/detail?id=' + This.data.projectId,
        })
      }else{
        wx.switchTab({
          url: '/pages/my/index/index',
        })
      }
    });
  },

  /**
   * 返回首页
   * 
  */
  gotoauthor: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  /**
   * 微信授权
   */
  getUserInfo: function (e) {
    console.log(e);
    let This = this;
    let res = e.detail.userInfo;
    if (res) {
      /**
       * 用户点击了“确定”按钮，同意授权
       * 授权的话，存储用户信息
       * 
      */
      APP.globalData.userInfo = e.detail.userInfo;
      This.setData({
        showTelBtn: true,
        showSQ:false,
        showLogin:true
      });
    } else {
      // 用户点击了“拒绝”按钮，拒绝授权
      console.log("用户点击了拒绝按钮");
    }
  },


  /**
   * 获取手机号
   * 
  */
  getPhoneNumber: function (e) {
    console.log(e);
    return false;
    let This = this;
    // 授权框出来一次后以后就不在出来了
    wx.setStorageSync('getTelState', true);


    if (e.detail.iv) {
      // 同意授权则去绑定手机号
      let session_key = APP.globalData.__userInfo__.session_key;
      let data = {
        "uid": APP.globalData.__UID__,
        "session_key": session_key,
        "encrypted_data": e.detail.encryptedData,
        "iv": e.detail.iv
      }
      $api.getBanApi(data).then(function (res) {
        console.log("绑定手机号成功");
        console.log(res);
        APP.globalData.__userInfo__.phone_number = res.phone_number;
        This.setData({
          isalert: true,
          jifen: res.num
        });
      });
    } else {
      // 拒绝授权则跳过
      console.log("拒绝授权");
      // wx.navigateBack({
      //   delat: 1
      // })
    }

  }
})