/**
 * 所有接口文件
 * 
*/
var App = getApp();
var __PORT__ = App.globalData.__PORT__;
console.log(__PORT__);
var $$http = require('./http.js');

//微信授权
export function getVInfoApi(data) {
  return $$http.getdata(__PORT__ + '/authorize', data)
}

//获取验证码
export function getCodeApi(data) {
  return $$http.getdata(__PORT__ +'/phone_code', data)
}

//获取系统配置
export function getHtmlApi(data) {
  return $$http.getdata(__PORT__ + '/sys_config', data)
}

//登录
export function getLoginApi(data) {
  return $$http.getdata(__PORT__ + '/login', data)
}

//获取首页内容
export function getHomeApi(data) {
  return $$http.getdata(__PORT__ + '/home', data)
}

//获取新闻详情
export function getNewsDetailApi(data) {
  return $$http.getdata(__PORT__ + '/one_detail', data)
}

//新闻点赞
export function getNewsZanApi(data) {
  return $$http.getdata(__PORT__ + '/new_zan', data)
}

//新闻取消点赞
export function getNewsZanDelApi(data) {
  return $$http.getdata(__PORT__ + '/new_zan_del', data)
}

//获取banner详情
export function getBannersDetailApi(data) {
  return $$http.getdata(__PORT__ + '/banner_detail', data)
}

//获取社区列表
export function getCommunityListApi(data) {
  return $$http.getdata(__PORT__ + '/vote', data)
}

//获取社区选项
export function getCommunityItemsApi(data) {
  return $$http.getdata(__PORT__ + '/vote_option', data)
}

//社区投票
export function getCommunityTouApi(data) {
  return $$http.getdata(__PORT__ + '/vote_option_tou', data)
}

//获取发现列表
export function getFindApi(data) {
  return $$http.getdata(__PORT__ + '/find', data)
}

/**
 * 获取发现->好ONE地带列表和ONE享未来列表以及首页-》ONE产品列表
 * type:类型1首页新闻；2one产品；3好one地带；4one未来
*/
export function getOnesListApi(data) {
  return $$http.getdata(__PORT__ + '/one', data)
}

//私宴信息
export function getSiyanInfoApi(data) {
  return $$http.getdata(__PORT__ + '/private_banquet', data)
}

//私宴菜品选项
export function getSiyanItemsApi(data) {
  return $$http.getdata(__PORT__ + '/private_x', data)
}

//私宴预约
export function getSiyanOrderApi(data) {
  return $$http.getdata(__PORT__ + '/private_y', data)
}

//私宴预约_取消
export function getSiyanCancelApi(data) {
  return $$http.getdata(__PORT__ + '/private_qu', data)
}

//我预约的私宴详情
export function getSiyanMyOrderDetailApi(data) {
  return $$http.getdata(__PORT__ + '/wo_private_detail', data)
}

//评论列表
export function getCommentListApi(data) {
  return $$http.getdata(__PORT__ + '/comment_lst', data)
}

//评论添加
export function getCommentAddApi(data) {
  return $$http.getdata(__PORT__ + '/comment_add', data)
}

//好物列表
export function getGoodsListApi(data) {
  return $$http.getdata(__PORT__ + '/shop', data)
}

//好物详情
export function getGoodsDetailApi(data) {
  return $$http.getdata(__PORT__ + '/shop_detail', data)
}

//获取自提点
export function getSendSiteApi(data) {
  return $$http.getdata(__PORT__ + '/self_mp', data)
}

//加入购物车
export function getPutInCarApi(data) {
  return $$http.getdata(__PORT__ + '/cart_add', data)
}

//商品-下单-单个商品 ,下完单 算是未支付，需要下一步兑换，之后才成功
export function getOrderGoodApi(data) {
  return $$http.getdata(__PORT__ + '/down_order', data)
}

//商品-下单-多个商品 ,下完单 算是未支付，需要下一步兑换，之后才成功
export function getOrderMoreGoodsApi(data) {
  return $$http.getdata(__PORT__ + '/down_order_duo', data)
}

//商品-下单-购物车商品下单,下完单 算是未支付，需要下一步兑换，之后才成功
export function getOrderGoodsApi(data) {
  return $$http.getdata(__PORT__ + '/down_orders', data)
}


//订单兑换
export function getBuyGoodApi(data) {
  return $$http.getdata(__PORT__ + '/order_exchange', data)
}

//活动列表
export function getActivityListApi(data) {
  return $$http.getdata(__PORT__ + '/activity', data)
}

//活动详情
export function getActivityDetailApi(data) {
  return $$http.getdata(__PORT__ + '/activity_detail', data)
}

//活动报名
export function getActivityOrderApi(data) {
  return $$http.getdata(__PORT__ + '/activity_sign', data)
}

//我报名的活动
export function getWoActivityApi(data) {
  return $$http.getdata(__PORT__ + '/wo_activity', data)
}

//我预约的私宴
export function getWoSiyanApi(data) {
  return $$http.getdata(__PORT__ + '/wo_private', data)
}

//我的家人
export function getWoFamilyApi(data) {
  return $$http.getdata(__PORT__ + '/members', data)
}

//我的家人_添加
export function getWoFamilyAddApi(data) {
  return $$http.getdata(__PORT__ + '/member_add', data)
}

//我的家人_删除
export function getWoFamilDelApi(data) {
  return $$http.getdata(__PORT__ + '/member_del', data)
}

//获取积分流水
export function getJifenListApi(data) {
  return $$http.getdata(__PORT__ + '/wallet_water', data)
}

//获取用户信息
export function getUserInfoApi(data) {
  return $$http.getdata(__PORT__ + '/user_info', data)
}

//修改用户信息
export function getUserInfoSaveApi(data) {
  return $$http.getdata(__PORT__ + '/user_save', data)
}

//修改手机号
export function getModifyTelApi(data) {
  return $$http.getdata(__PORT__ + '/mobile_save', data)
}

//购物车列表
export function getCarListApi(data) {
  return $$http.getdata(__PORT__ + '/cart_list', data)
}

//购物车删除
export function getCarDelApi(data) {
  return $$http.getdata(__PORT__ + '/cart_del', data)
}

//我的订单列表
export function getMyOrderListApi(data) {
  return $$http.getdata(__PORT__ + '/order_list', data)
}

//我的订单_取消兑换
export function getMyOrderCancelApi(data) {
  return $$http.getdata(__PORT__ + '/order_qu', data)
}

//我的订单_确认收货
export function getMyOrderSureApi(data) {
  return $$http.getdata(__PORT__ + '/order_que', data)
}

//我的兑换列表
export function getMyOrderChangeListApi(data) {
  return $$http.getdata(__PORT__ + '/exchange_list', data)
}

//签到
export function getSignApi(data) {
  return $$http.getdata(__PORT__ + '/sign', data)
}

//搜索
export function getSearchApi(data) {
  return $$http.getdata(__PORT__ + '/shop_search', data)
}

//绑定手机号
export function getBanApi(data) {
  return $$http.getdata(__PORT__ + '/ban', data)
}


//获取订单详情
export function getOrderDetailApi(data) {
  return $$http.getdata(__PORT__ + '/order_detail', data)
}


// 把接口暴漏出来
// module.exports = {
//   getdata: getdata
// }