// pages/device/device.js
var util = require('../common/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      brand: '', //设备品牌
      model: '', //设备型号
      language: '', //语言
      version: '', // 微信版本号
      system: '', // 操作系统及版本
      platform: '' // 客户端平台
    },
    netType: '',
    x: '',
    y: '',
    z: '',

  },
  getInfo() { //获取用户信息
    var _self = this;
    wx.getSystemInfo({
      success: function(res) {
        _self.setData({
          info: res
        })
      }
    })
  },
  getNet() { //获取网络状态
    var _self = this;
    wx.getNetworkType({
      success: function(res) {
        if (res.networkType == 'none') {
          _self.setData({ netType: '无网络' });
        } else {
          _self.setData({
            netType: res.networkType
          });
          if (res.networkType == '2g' || res.networkType == '3g' || res.networkType == '4g') {
            util.showToast({ title: '使用当前状态下载将产生高额费用', image: '../../images/问号.png', duration: 1000 });
          } else if (res.networkType == 'wifi') {
            util.showToast({ title: '当前为wifi状态', image: '../../images/问号.png', duration: 1000 });
          }
        }
      }
    })
  },
  jiasuji() {
    var self = this;

  },
  onLanch: function() {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
