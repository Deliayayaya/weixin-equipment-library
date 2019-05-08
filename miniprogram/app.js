//app.js
App({
  name: 'apiTest',
  onLaunch: function(res) {
    console.log("小程序初始化", res);
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  },
  onShow: function() {
    console.log('小程序从后台切入到前台');
  },
  onHide: function() {
    console.log('小程序从前台切入到后台');
  },

})
