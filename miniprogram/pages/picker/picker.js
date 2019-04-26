// pages/picker/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pickerData: [{ index: 0, value: ['item1', 'item2', 'item3'], name: '项目一' }, { index: 0, value: ['item11', 'item22', 'item33'], name: '项目二' }, { index: 0, value: ['item111', 'item222', 'item333'], name: '项目三' }],
    time: '09:00',
    selectDate: '2019.4.23'

  },
  selectChange(e) {
    console.log('each', e);
    var i = e.target.dataset.mark;
    this.data.pickerData[i].index = e.detail.value;
    this.setData({
      pickerData: this.data.pickerData
    })
  },
  timeChange(e) {
    console.log("选择时间", e);
    this.setData({
      time: e.detail.value
    })

  },
  dateChange() {
    this.setData({
      selectDate: e.detail.value
    })
  },

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
