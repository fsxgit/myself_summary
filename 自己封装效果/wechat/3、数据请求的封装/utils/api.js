/**
 * 所有接口文件
 * 
*/
// import md5 from 'utils/md5.js';
var App = getApp();
var __HOST__ = "http://demo.51shequapp.com/"; // 测试
// var __HOST__ = "https://qingningshequ.weiapp.net"; // 正式
console.log(__HOST__);
var $$http = require('./http.js');

// 获取接口 加密秘钥
export function ApiSecretKey(data) {
  return $$http.getdata(__HOST__ + 'api/Property/secret_key', data)
}

// 获取Owner接口类的密钥
export function ApiOwnerSecretKey(data) {
  return $$http.getdata(__HOST__ + 'api/Owner/secret_key', data)
}

// 业主登录
export function ApiOwnerLogin(data) {
  return $$http.getdata(__HOST__ + 'api/owner/login', data)
}

// 首页信息
export function ApiIndexInfo(data) {
  return $$http.getdata(__HOST__ + 'api/owner/home', data)
}

// 社区首页 通知公告详情
export function ApiNoticeDetail(data) {
  return $$http.getdata(__HOST__ + 'api/owner/tz_detail', data)
}

// 把接口暴漏出来
// module.exports = {
//   getdata: getdata
// }