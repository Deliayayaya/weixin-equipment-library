// miniprogram/pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSubmit: true

  },
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("about页面初始化");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // wx.hideNavigationBarLoading();
    // console.log("about页面初次渲染完成");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // wx.setNavigationBarTitle();
    // wx.showNavigationBarLoading();
    // console.log('页面显示完成');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('页面隐藏');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log('页面卸载');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log('下拉状态');
    this.setData({ msg: '....' });

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("上拉触底部");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
    console.log("from", res.from, res.target, res.webViewUrl)
    return {
      title: 'www',
      path: '/pages/about/about'
    }

  },
  change: function() {
    this.setData({
      msg: ++this.data.msg
    });

  },

  timeChange(e) {
    this.setData({
      time: e.detail.value
    })

  },
  dateChange(e) {
    this.setData({
      selectDate: e.detail.value
    })
  },
  selectChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  chooseChange(e) {
    this.setData({
      index2: e.detail.value
    })
  },
  pickerChange(e) {
    var index = e.target.dataset.current;
    console.log("eeeee", index, this.data.pickerData[index], this.data.pickerData[index].index);
    this.data.pickerData[index].index = e.detail.value;
    this.setData({
      pickerData: this.data.pickerData
    })
  }
})
