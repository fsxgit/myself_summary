var app = getApp()
var address = require('./city.js')

var app = getApp()
Page({
  data: {
    address: '', //详细收货地址（四级）
    value: [0, 0, 0], // 地址选择器省市区 暂存 currentIndex
    region: '', //所在地区
    regionValue: [0, 0, 0], // 地址选择器省市区 最终 currentIndex
    provinces: [], // 一级地址
    citys: [], // 二级地址
    areas: [], // 三级地址
    visible: false,
    addressId: '' // 数据库内地址编号
  },
  onLoad(options) {
    // 默认联动显示北京
    var id = address.provinces[0].id
    this.setData({
      provinces: address.provinces,
      citys: address.citys[id],
      areas: address.areas[address.citys[id][0].id]
    })
  },
  // 提交时由序号获取省市区id
  getRegionId(type) {
    let value = this.data.regionValue
    let provinceId = address.provinces[value[0]].id
    let townId = address.citys[provinceId][value[1]].id
    let areaId
    if (address.areas.length > 0) {
      areaId = address.areas[townId][value[2]].id
    } else {
      areaId = 0
    }

    if (type === 'provinceId') {
      return provinceId
    } else if (type === 'townId') {
      return townId
    } else {
      return areaId
    }
  },
  closePopUp() {
    this.setData({
      visible: false
    })
  },
  pickAddress() {
    this.setData({
      visible: true,
      value: [...this.data.regionValue]
    })
  },
  // 处理省市县联动逻辑 并保存 value
  cityChange(e) {
    var value = e.detail.value
    let {
      provinces,
      citys
    } = this.data
    var provinceNum = value[0]
    var cityNum = value[1]
    var areaNum = value[2]

    if (this.data.value[0] != provinceNum) {
      var id = provinces[provinceNum].id
      this.setData({
        value: [provinceNum, 0, 0],
        citys: address.citys[id],
        areas: address.areas[address.citys[id][0].id]
      })
    } else if (this.data.value[1] != cityNum) {
      var id = citys[cityNum].id
      this.setData({
        value: [provinceNum, cityNum, 0],
        areas: address.areas[citys[cityNum].id]
      })
    } else {
      this.setData({
        value: [provinceNum, cityNum, areaNum]
      })
    }
  },
  preventTouchmove() { },
  // 城市选择器
  // 点击地区选择取消按钮
  cityCancel(e) {
    this.setData({
      visible: false
    })
  },
  // 点击地区选择确定按钮
  citySure(e) {
    var value = this.data.value
    this.setData({
      visible: false
    })
    // 将选择的城市信息显示到输入框
    try {
      var region =
        (this.data.provinces[value[0]].name || '') +
        (this.data.citys[value[1]].name || '')
      if (this.data.areas.length > 0) {
        region = region + this.data.areas[value[2]].name || ''
      } else {
        this.data.value[2] = 0
      }
    } catch (error) {
      console.log('adress select something error')
    }

    this.setData({
      region: region,
      regionValue: [...this.data.value]
    })
  }
})
