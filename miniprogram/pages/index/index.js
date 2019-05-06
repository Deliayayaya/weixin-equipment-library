//index.js
const app = getApp() //获取全局唯一的小程序实例
var util = require('../common/common.js');
Page({
  data: {},
  navigateTo(e) {
    var type = e.currentTarget.dataset.gid;
    console.log('跳转到', e, type);
    switch (type) {
      case 'login':
        wx.navigateTo({ url: '../login/login' });
        break;
      case 'swiper':
        wx.navigateTo({ url: '../swiper/swiper' });
        break;
      case 'picker':
        wx.navigateTo({ url: '../picker/picker' });
        break;
      case 'percent':
        wx.navigateTo({ url: '../percent/percent' });
        break;
      case 'media':
        wx.navigateTo({ url: '../multiMedia/multi-media' });
        break;
      default:
        wx.navigateTo({
          url: 'https://www.baidu.com',
          success(res) {
            console.log("res成功", res)
          },
          fail(res) {
            console.log("res失败", res)
          }
        })
        break;
    }
  },
  onLoad: function() {
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
  onPullDownRefresh() { //下拉刷新
    util.showToast({ title: '加载中...', icon: 'loading', duration: 1000 });
    setTimeout(function() {
      wx.hideToast();
    }, 1000);
    wx.stopPullDownRefresh();
  }

})
