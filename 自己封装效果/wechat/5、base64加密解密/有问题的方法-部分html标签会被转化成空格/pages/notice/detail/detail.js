// pages/notice/detail/detail.js
//获取应用实例
/* 引入 */
var $base64 = require('../../../utils/base64.js');
var $util = require("../../../utils/util.js");
var $api = require('../../../utils/api.js');
var APP = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gbData: APP.globalData,
    detail:null, // 详情
    noticeId:null,
    title: null,
    time: null,
    mType: null,
    shoucang: null,
      

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let This = this;
    This.setData({
      noticeId: options.id
    })
    // 获取通知详情
    // This.ApiNoticeDetail();
    // 获取平台通知详情
    This.ApiPlatNoticeDetail();
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
   * 获取通知详情
   */
  ApiNoticeDetail: function () {
    let This = this;
    let data = {
      "id": $util.stringToHex(This.data.noticeId),
      "owner_id": $util.stringToHex(APP.globalData.__userinfo__.id),
      "House_property_id": $util.stringToHex(APP.globalData.__houseList__[0].house_property_id),
      "login_key": $util.stringToHex(APP.globalData.__userinfo__.login_key),
      "secret_key": $util.stringToHex(APP.globalData.__secretKey__)
    }
    $api.ApiNoticeDetail(data).then(function (res) {
      let detail = $base64.decode(res.con);
      console.log("解密");
      console.log(detail);
      detail = detail.replace(/<img /g, '<img class="rich_img" ');
      detail = detail.replace(/<p /g, '<p class="rich_p" ');
      This.setData({
        detail: detail,
        title: res.title,
        time: res.times,
        mType: res.m_type,
        shoucang: res.is_shoucang,
      })
      APP.globalData.__currCommunity__ = res.community_yan;
      APP.globalData.__houseList__ = res.house;
      APP.globalData.__userinfo__ = res.owner;
    })
  },

  /**
   * 获取平台通知详情
   */
  ApiPlatNoticeDetail: function () {
    let This = this;
    let data = {
      "id": $util.stringToHex(This.data.noticeId),
      "owner_id": $util.stringToHex(APP.globalData.__userinfo__.id),
      "House_property_id": $util.stringToHex(APP.globalData.__houseList__[0].house_property_id),
      "login_key": $util.stringToHex(APP.globalData.__userinfo__.login_key),
      "secret_key": $util.stringToHex(APP.globalData.__secretKey__)
    }
    $api.ApiPlatNoticeDetail(data).then(function (res) {
      let detail = $base64.decode(res.con);
      console.log("解密");
      console.log(detail);
      detail = detail.replace(/<img /g, '<img class="rich_img" ');
      detail = detail.replace(/<p /g, '<p class="rich_p" ');
      This.setData({
        detail: detail,
        title: res.title,
        time: res.times,
        mType: res.m_type,
        shoucang: res.is_shoucang,
      })
      APP.globalData.__currCommunity__ = res.community_yan;
      APP.globalData.__houseList__ = res.house;
      APP.globalData.__userinfo__ = res.owner;
    })
  }
})