// pages/find/index/index.js
var $api = require('../../utils/api.js');
var util = require("../../utils/util.js");
var App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    __PORT__: App.globalData.__PORT__,
    __IMG__: App.globalData.__IMG__,
    identifyState: false,
    sendTxt: '发送验证码',
    isend: true, // 当前是否可以发送验证码
    count: 10, // 倒计时
    showSQInfo: false,
    showSQMobile: false,
    page: 1 , // 
    pageSize: 20,
    dataList: [],
    okRequest: true,
    session_key: '',
    code: '',
    openid: '',
    xjiv: '', // getuserinfo获取的用户信息
    xjencryptedData: '',// getuserinfo获取的用户信息
    pageShow: false,
    saoState: 0, // 扫码进入时携带的状态 1 添加核验员 2 邀请码 3 验票签到
    saoOrganId: 0, // 扫码进入时携带的组织机构id 仅 状态为1时有
    saoMeetId: 0,  // 扫码进入时携带的会议id 仅 状态为2、3时有
    saoTicketId: 0,  // 扫码进入时携带的门票id 仅 状态为3时有
    saoSQstate: false, // 扫码授权是否开启
    shareuid:0, //详情分享携带的uid
    shareMeetid: 0 //详情分享携带的uid
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
    wx.chooseInvoiceTitle({
      success(res) {
        console.log("获取发票头");
        console.log(res);
       }
    })
    return false;**/
    console.log("step1");
    console.log(options);
    console.log(options.q);
    let This = this;
    if (options.shareuid){
      This.setData({
        shareuid: options.shareuid,
        shareMeetid: options.id
      })
    }
    if (options.q) {
      var scene = decodeURIComponent(options.q) // 使用decodeURIComponent解析  获取当前二维码的网址
      var state = scene.split('&')[0].split('=')[1];
      This.setData({
        saoState: state
      })
      if (state == 1) {
        This.setData({
          saoOrganId: scene.split('&')[1].split('=')[1]
        })
      } else if (state == 2) {
        This.setData({
          meetId: scene.split('&')[1].split('=')[1]
        })
      } else if (state == 3) {
        This.setData({
          meetId: scene.split('&')[1].split('=')[1],
          ticketId: scene.split('&')[2].split('=')[1]
        })
      }
      console.log("step2");
      console.log("saoState="+This.data.saoState);
      console.log("saoOrganId=" + This.data.saoOrganId);
      console.log("meetId=" + This.data.meetId);
      console.log("ticketId=" + This.data.ticketId);
      
    }
    // wx.setStorage({
    //   key: 'uid',
    //   data: '1',
    // })
    This.getList();
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log("step3");
        console.log(res);
        let code = res.code;
        console.log("code=" + code);
        // return false;
        This.setData({
          code: code
        })
        // 用code去换取用户的信息（openid/session_key/userinfo），查看用户是否已经注册过
        console.log("11111111-去检查是否注册过");
        This.getUserRegInfo();
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
    let This = this;
    This.getList();
  },
  /**
   * 获取用户注册信息
   * 用code去换取用户的信息（openid/session_key/userinfo），查看用户是否已经注册过
   * 
  */
  getUserRegInfo: function () {
    let This = this;
    let code = This.data.code;
    let data = {
      "code": code
    }
    $api.getRegInfoApi(data).then(function (res) {
      console.log("step4");
      console.log("11111111-返回注册结果");
      console.log(res);
      This.setData({
        openid: res.openid.openid,
        session_key: res.openid.session_key
      })
     
      // 雪见测试
      // This.setData({
      //   showSQInfo: true,
      //   pageShow: true,
      //   showSQMobile: false
      // });
      // return false;
       // 雪见测试 end
      
      if (res.member){
        // 用户信息存在证明注册过
        console.log("step5");
        console.log("11111111-用户信息存在证明注册过1");
        // wx.setStorage("__userInfo__", res.member);
        App.globalData.__userInfo__ = res.member;
      
        console.log(res.member);
        let shareuid = This.data.shareuid;
        console.log("step6");
        console.log("shareuid=" + shareuid);
        if (shareuid != 0){
          // 查看用户是不是通过分享进来的,是的话进入对应详情页面
          console.log("step7");
          console.log("shareuid=" + shareuid);
          if (shareuid) {
            wx.redirectTo({
              url: '/pages/meet/detail/detail?id=' + This.data.shareMeetid + "&uid=" + App.globalData.__userInfo__.id,
            })
          }
        }else{
          // return false;
          // 如果用户信息存在则来判断用户是不是在进行（添加核验员、扫码签到、扫描邀请码）等操作之后进来的，如果是则应该进入相应逻辑页面
          let saoState = This.data.saoState;
          console.log("step8");
          console.log("saoState=" + saoState);


          if (saoState) {
            console.log("step9");
            if (saoState == 1){
              // 添加核验员
              This.addHe();
            } else if (saoState == 2) {
              // 扫秒邀请码 
              // wx.showToast({
              //   title: "扫秒邀请码" + This.data.meetId + "-" + App.globalData.__userInfo__.id,
              //   icon: 'none',
              //   duration: 2000,
              // });
              console.log("链接=" + '/pages/meet/detail/detail?id=' + This.data.meetId + "&uid=" + App.globalData.__userInfo__.id);
              wx.redirectTo({
                url: '/pages/meet/detail/detail?id=' + This.data.meetId + "&uid=" + App.globalData.__userInfo__.id,
              })
              
            } else  if (saoState == 3) {
              // 会议-签到
              This.signup();
            }
          } else {
            console.log("step10");
            console.log("11111111-跳转详情页");
            wx.redirectTo({
              url: '/pages/find/detail/detail?payend=0',
            })
            This.setData({
              showSQInfo: false,
              saoSQstate: false,
              showSQMobile: false
            });
          }
        }
      } else {
        console.log("step11");
        // 用户信息不存在，则去注册
        console.log("11111111-用户信息不存在，去注册");
        let saoState = This.data.saoState;
          // 如果用户信息存在则来判断用户是不是在进行（添加核验员、扫码签到、扫描邀请码）等操作之后进来的，如果是则应该显示相应的授权页面
        if (saoState) {
          This.setData({
            saoSQstate: true
          });
        }
        This.setData({
          showSQInfo: true,
          pageShow: true,
          showSQMobile: false
        });
      }
    });

  },

  /**
   * 点击“确定授权”按钮获取用户信息
   * 
  */
  getUserInfo: function (e) {
    console.log("step12");
    console.log("用户授权成功1");
    console.log(e);
    let This = this;
    let res = e.detail.userInfo;
    let code = '';
    let token = '';
    if (res) {
      /**
       * 用户点击了“确定”按钮，同意授权
       * 授权的话，存储用户信息
       * 
      */
      console.log("step13");
      console.log("储存值");
      console.log(res);
      // wx.setStorage("__userInfo__", res);
      App.globalData.__userInfo__ = res;
      This.setData({
        xjiv: e.detail.iv,
        xjencryptedData: e.detail.encryptedData,
        showSQInfo: false,
        saoSQstate: false,
        showSQMobile: true
      });

    } else {
      // 用户点击了“拒绝”按钮，拒绝授权
      console.log("step14");
      console.log("用户拒绝授权");

    }

  },

  /**
     * 获取手机号
     * 
    */
  getPhoneNumber: function (e) {
    console.log("step15");
    console.log(e);
    let This = this;
    if (e.detail.iv) {
      // 同意授权则去绑定手机号
      This.setData({
        showSQInfo: false,
        saoSQstate: false,
        showSQMobile: false
      });
      let __userInfo__ = App.globalData.__userInfo__;
      console.log("step16");
      console.log("用户信息");
      console.log(__userInfo__);
      // 雪见获取unionid
      let data2 = {
        "avatar_url": __userInfo__.avatarUrl,
        "sex": __userInfo__.gender,
        "nickname": __userInfo__.nickName,
        "session_key": This.data.session_key,
        "openid": This.data.openid,
        "encrypted_data": This.data.xjencryptedData,
        "iv": This.data.xjiv
      }
      $api.getUnionid(data2).then(function (res) {
        console.log(res);

        // 注册
        let data = {
          "avatar_url": __userInfo__.avatarUrl,
          "sex": __userInfo__.gender,
          "nickname": __userInfo__.nickName,
          "session_key": This.data.session_key,
          "openid": This.data.openid,
          "encrypted_data": e.detail.encryptedData,
          "iv": e.detail.iv,
          "unionid": res.unionId
        }
        console.log("step17");
        console.log("请求手机号参数");
        console.log("11111111-请求手机号参数");
        console.log(data);
        $api.getRegApi(data).then(function (res) {
          console.log("step18");
          console.log("注册成功");
          console.log("11111111-注册成功,跳转详情页");
          console.log(res);
          App.globalData.__userInfo__ = res;

          // 查看用户是不是通过分享进来的,是的话进入对应详情页面
          let shareuid = This.data.shareuid;
          if (shareuid != 0) {
            console.log("step19");
            wx.redirectTo({
              url: '/pages/meet/detail/detail?id=' + This.data.shareMeetid + "&uid=" + App.globalData.__userInfo__.id,
            })
          } else {
            console.log("step20");
            // 如果用户信息存在则来判断用户是不是在进行（添加核验员、扫码签到、扫描邀请码）等操作之后进来的，如果是则应该进入相应逻辑页面
            let saoState = This.data.saoState;
            if (saoState) {
              if (saoState == 1) {
                // 添加核验员
                This.addHe();
              } else if (saoState == 2) {
                // 扫秒邀请码

                // wx.showToast({
                //   title: "扫秒邀请码" + This.data.meetId + "-" + App.globalData.__userInfo__.id,
                //   icon: 'none',
                //   duration: 2000,
                // });
                wx.redirectTo({
                  url: '/pages/meet/detail/detail?id=' + This.data.meetId + "&uid=" + App.globalData.__userInfo__.id,
                })

              } else if (saoState == 3) {
                // 会议-签到
                This.signup();
              }
            } else {
              console.log("step21");
              // 不是核验员进来注册成功就直接跳转详情页
              wx.redirectTo({
                url: '/pages/find/detail/detail?payend=0',
              })
            }
          }
        });
        // 注册 end

      });
       // 雪见获取unionid end
    } else {
      // 拒绝授权则跳过
      This.setData({
        showSQInfo: false,
        saoSQstate: false,
        showSQMobile: true
      });
    }

  },

  /**
   * 获取手机验证码
   * 
  */
  getCode: function () {
    let This = this;
    if (This.data.isend) {
      This.setData({
        isend: false
      })
      if (timer) {
        clearInterval(timer);
      }
      let i = This.data.count;
      This.setData({
        sendTxt: i + 's'
      })
      let timer = setInterval(function () {
        if (i > 1) {
          i--;
          This.setData({
            sendTxt: i + 's'
          })
        } else {
          This.setData({
            isend: true,
            sendTxt: '发送验证码'
          });
          clearInterval(timer);
        }
      }, 1000)

    }
  },

  /**
   * 绑定手机号
   * 
  */
  bangMobile: function () {
    let This = this;
    This.setData({
      showSQInfo: false,
      saoSQstate: false,
      showSQMobile: false
    });
  },

  bangMobilecancel(){
    let This = this;
    This.setData({
      showSQInfo: true,
      saoSQstate: false,
      showSQMobile: false
    });
  },

  /**
   * 获取列表
   */
  getList: function () {
    let This = this;
    if (!This.data.okRequest) {
      return false;
    }
    This.setData({
      okRequest: false
    })
    let data = {
      "page": This.data.page,
      "page_size": This.data.pageSize
    }
    $api.getFindList(data).then(function (res) {
      console.log("发现列表");
      // console.log(res);
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
      var timer = setTimeout(function () {
        This.okRequest = true;
        This.setData({
          okRequest: true
        })
        clearTimeout(timer);
      }, 2000);
    })
  },

  /**
   * 去签到
   */
  signup: function () {
    let This = this;
    let member_id = App.globalData.__userInfo__.id;
    let sign_id = This.data.saoTicketId;
    let data = {
      'member_id': member_id,// 扫码人的uid
      'sign_id': sign_id, // 会议的签到id sign_id 
    }
    console.log(data);
    $api.getSignupApi(data).then(function (res) {
      console.log("签到返回");
      console.log(res);
      wx.showToast({
        title: '签到成功',
        icon: 'none',
        duration: 2000,
      });
    })
  },

  /**
   * 添加核验员
   */
  addHe: function () {
    let This = this;
    let member_id = App.globalData.__userInfo__.id;
    let organId = This.data.saoOrganId;
    let data = {
      'member_id': member_id,// 扫码人的uid
      'organ_id': organId, // 组织机构id 
    }
    console.log(data);
    $api.getaddHeApi(data).then(function (res) {
      console.log("添加核验员返回");
      if (res.code == 0) {
        // 添加核验员成功，进入添加成功页面
        console.log("11111222-跳转详情页");
        wx.showToast({
          title: "核验员添加成功",
          icon: 'none',
          duration: 2000,
        });
        console.log("step22");
        let timer = setTimeout(function(){
          wx.redirectTo({
            url: '/pages/find/detail/detail',
          })
        },1500)
        
        return false;
        // 跳转添加核验员成功页面
        wx.navigateTo({
          url: '/pages/addsucess/index',
        })
      } else if (res.code == 205) {
        console.log("step23");
        // 核验员已存在，直接进入详情页
        console.log("111113333-跳转详情页");
        wx.showToast({
          title: "核验员添加成功",
          icon: 'none',
          duration: 2000,
        });
        let timer = setTimeout(function () {
          wx.redirectTo({
            url: '/pages/find/detail/detail?payend=0',
          })
        }, 1500)
      }else{
        wx.showToast({
          title: res.message,
          icon: 'none',
          duration: 2000,
        });
      }
      console.log(res);
    })
  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    let This = this;

    let page = App.globalData.getPage();
    let param = {
      'uid': This.data.uid,
      'id': This.data.id
    };
    console.log(param);
    param = JSON.stringify(param);
    console.log("page=" + page);

    return {
      title: App.globalData.slogan,
      desc: App.globalData.slogan,
      path: "pages/find/index" + "?shareuid=" + 29 + "&id=" + 250
    };
    // 来自页面右上角转发按钮
    /**
    let page = App.globalData.getPage();
    let src = App.globalData.__IMG__ + "/cover.jpg";
    return {
      title: App.globalData.slogan,
      imageUrl: App.globalData.__IMG__ + "/cover.jpg",
      desc: App.globalData.slogan,
      path: page + "?token=" + App.globalData.token
    };**/
  },
})