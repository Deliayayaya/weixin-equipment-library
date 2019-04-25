//index.js
const app = getApp() //获取全局唯一的小程序实例
var ComJS = require('../common/common.js');
var num = 0;
Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    is_auto: false,
    icon_type: ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'],
    percent: num,
    isSubmit: true
  },

  onLoad: function() {

    this.setData({ name: app.name });
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  bindscrolltoupper() {
    console.log("滚动到顶部");
  },
  bindscroll(e) {
    // console.log('滚动了', e);
  },
  bindSwiper(e) {
    // console.log("滑动时间", e);

  },
  swiperChange(e) {


  },
  // switchChange(e) { //switch开关
  //   console.log('switch事件', e, this.data.is_auto);
  //   this.setData({ is_auto: !this.data.is_auto })
  // },
  checkboxChange(e) { //checkbox是否同意协议
    console.log("是否选中checkbox", e);
    console.log("ssss", this.data.isSubmit)
    this.setData({
      isSubmit: !this.data.isSubmit
    })
  },
  bindSubmit(e) { //from submit提交事件
    console.log("submit", e.detail.value);
  },
  bindReset(e) { //重置表单
    console.log("reset", e);
  },
})
