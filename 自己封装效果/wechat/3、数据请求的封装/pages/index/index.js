//index.js
//获取应用实例
var $util = require("../../utils/util");
var $api = require('../../utils/api.js');
var APP = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gbData: APP.globalData,
    banner: ['img1.png', 'img1.png', 'img1.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    page:1,
    pageSize:50,
    currCommunity: null,
    bannerList: null,
    hotList: null,
    noticeList: null,
    tbList: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ApiOwnerSecretKey();
  },

  /**
   * 拨打电话
   * 
  */
  makephone: function () {
    wx.makePhoneCall({
      phoneNumber: '15531097316' //仅为示例，并非真实的电话号码
    })
  },

  /**
   * 二维码开门
   * 
  */
  mats: function (){
    wx.showToast({
      title: '暂未开放',
      icon: 'none',
      duration: 2000
    })
  },

  /**
   * 获取Owner秘钥
   */
  ApiOwnerSecretKey: function () {
    let This = this;
    $api.ApiOwnerSecretKey().then(function (res) {
      // console.log("获取秘钥");
      APP.globalData.__secretKey__ = res.key;
      This.ApiOwnerLogin();
    })
  },


  /**
   * 业主登录
   */
  ApiOwnerLogin: function () {
    let This = this;
    let data = {
      "mobile": $util.stringToHex("13693391786"),
      "pwd": $util.stringToHex("123456"),
      "registration": "",
      "secret_key": $util.stringToHex(APP.globalData.__secretKey__)
    }
    console.log("业主登录");
    console.log(data);
    $api.ApiOwnerLogin(data).then(function (res) {
      console.log("业主登录成功");
      This.setData({
        currCommunity: res.community_yan
      })
      APP.globalData.__currCommunity__ = res.community_yan;
      APP.globalData.__houseList__ = res.house;
      APP.globalData.__userinfo__ = res.owner;
      This.ApiIndexInfo();
    })
  },


  /**
   * 获取首页内容
   */
  ApiIndexInfo: function () {
    let This = this;
    let data = {
      "area": $util.stringToHex(APP.globalData.__houseList__[0].area),
      "area_name": $util.stringToHex(APP.globalData.__houseList__[0].area_name),
      "balance": $util.stringToHex(APP.globalData.__houseList__[0].balance),
      "btime": $util.stringToHex(APP.globalData.__houseList__[0].btime),
      "building_id": $util.stringToHex(APP.globalData.__houseList__[0].building_id),
      "ceng": $util.stringToHex(APP.globalData.__houseList__[0].ceng),
      "city": $util.stringToHex(APP.globalData.__houseList__[0].city),
      "city_name": $util.stringToHex(APP.globalData.__houseList__[0].city_name),
      "community_id": $util.stringToHex(APP.globalData.__houseList__[0].community_id),
      "community_name": $util.stringToHex(APP.globalData.__houseList__[0].community_name),
      "ctime": $util.stringToHex(APP.globalData.__houseList__[0].ctime),
      "floor": $util.stringToHex(APP.globalData.__houseList__[0].floor),
      "gepmessage_num": $util.stringToHex(APP.globalData.__houseList__[0].gepmessage_num),
      "home_key": $util.stringToHex(APP.globalData.__houseList__[0].home_key),
      "house_id": $util.stringToHex(APP.globalData.__houseList__[0].house_id),
      "house_property_id": $util.stringToHex(APP.globalData.__houseList__[0].house_property_id),
      "id": $util.stringToHex(APP.globalData.__houseList__[0].id),
      "is_ban": $util.stringToHex(APP.globalData.__houseList__[0].is_ban),
      "is_mo": $util.stringToHex(APP.globalData.__houseList__[0].is_mo),
      "login_key": $util.stringToHex(APP.globalData.__userinfo__.login_key),
      "nickname": $util.stringToHex(APP.globalData.__houseList__[0].nickname),
      "owner_bname": $util.stringToHex(APP.globalData.__houseList__[0].owner_bname),
      "owner_bphone": $util.stringToHex(APP.globalData.__houseList__[0].owner_bphone),
      "owner_cname": $util.stringToHex(APP.globalData.__houseList__[0].owner_cname),
      "owner_cphone": $util.stringToHex(APP.globalData.__houseList__[0].owner_cphone),
      "owner_id": $util.stringToHex(APP.globalData.__houseList__[0].owner_id),
      "owner_name": $util.stringToHex(APP.globalData.__houseList__[0].owner_name),
      "owner_phone": $util.stringToHex(APP.globalData.__houseList__[0].owner_phone),
      "ownerm_bid": $util.stringToHex(APP.globalData.__houseList__[0].ownerm_bid),
      "ownerm_id": $util.stringToHex(APP.globalData.__houseList__[0].ownerm_id),
      "page": $util.stringToHex(This.data.page),
      "page_size": $util.stringToHex(This.data.pageSize),
      "personid": $util.stringToHex(APP.globalData.__houseList__[0].personid),
      "pmessage_num": $util.stringToHex(APP.globalData.__houseList__[0].pmessage_num),
      "province": $util.stringToHex(APP.globalData.__houseList__[0].province),
      "province_name": $util.stringToHex(APP.globalData.__houseList__[0].province_name), 
      "qr_code": $util.stringToHex(APP.globalData.__houseList__[0].qr_code),
      "room_number": $util.stringToHex(APP.globalData.__houseList__[0].room_number), 
      "secret_key": $util.stringToHex(APP.globalData.__secretKey__),
      "shequ_id": $util.stringToHex(APP.globalData.__houseList__[0].shequ_id),
      "shequ_name": $util.stringToHex(APP.globalData.__houseList__[0].shequ_name),
      "type": $util.stringToHex(APP.globalData.__houseList__[0].type),
      "unb_time": $util.stringToHex(APP.globalData.__houseList__[0].unb_time),
      "unit": $util.stringToHex(APP.globalData.__houseList__[0].unit)
    }
    $api.ApiIndexInfo(data).then(function (res) {
      console.log("首页信息");
      This.setData({
        bannerList: res.banner,
        hotList: res.hot,
        noticeList: res.notice,
        tbList: res.tb,
      })
      return false;
      let page = This.data.page;
      if (res.length > 0) {
        var arr = This.data.dataList;
        arr = arr.concat(res);
        page++;
        This.setData({
          page: page,
          dataList: arr
        })
      }
    })
  },
})
