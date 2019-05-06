// pages/duomeiti/audio.js
const app = getApp();
var util = require('../common/common.js');
var dmContent = '';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //音频
    audioPoster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    audioSrc: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    //视频
    playing_progress: '', //播放进度
    danmuList: [{ time: 2, text: 'hello', color: 'red' }],
    //地图
    scale: 10,
    markers: [],
    polygons: [],
    nikeName: '',
    avatarUrl: '',
    selectedMarker: ''
  },
  /*音频处理事件*/
  audioplay() {
    console.log("开始/继续播放")
  },
  audiopause() {
    console.log("暂停");
  },
  sliderchange(e) {
    this.audioCtx.seek(e.detail.value);
    this.audioCtx.play();
  },
  /*视频处理事件*/
  writeDanmu(e) { //输入弹幕
    this.dmContent = e.detail.value;

  },
  sendDanmu() { //点击发送弹幕
    console.log("=====", this.dmContent);
    if (this.dmContent) {
      this.videoCtx.sendDanmu({ text: this.dmContent, color: 'pink' })
    }
  },
  /*地图处理事件*/
  markertap(e) { //点击选中的markers
    // console.log(e);
    this.options.selectedMarker = e.markerId;

  },
  chooseLocation: function() { //添加地点
    var that = this;
    wx.chooseLocation({
      success: function(res) {
        that.options.markers.push({
          id: res.name,
          iconPath: "../../images/位置(1).png",
          latitude: res.latitude,
          longitude: res.longitude,
          name: res.name,
          width: 25,
          height: 30
        })
        that.setData({
          markers: that.options.markers,
        });
        app.markers = that.options.markers;
      },
    })
  },
  delToLocation: function() { //删除地点
    var that = this;
    var markers = this.options.markers;
    if (markers !== undefined && markers.length != 0) {
      if (this.options.selectedMarker == undefined || this.options.selectedMarker.length == 0) {
        util.showToast({ title: '请点击要删除的位置!', icon: 'none', });
      }
      for (let i = 0; i < markers.length; i++) {
        if (markers[i].name == this.options.selectedMarker) {
          this.options.markers.splice(i, 1);
        }
      }
      this.setData({
        markers: this.options.markers,
      })
    } else {
      util.showToast({ title: '请先选择位置', icon: 'none', })
    }
  },
  makeMap: function() {
    var points = [];
    var markers = this.options.markers;
    if (markers == undefined || markers.length <= 1) {
      this.setData({
        polygons: []
      })
      util.showToast({
        title: '请选择位置!',
        icon: 'none',
        duration: 2000
      })
    } else {
      for (var i = 0; i < markers.length; i++) {
        points.push({ longitude: markers[i].longitude, latitude: markers[i].latitude });
      }
      this.setData({
        polygons: [{
          points: points,
          strokeColor: "#FF0000DD",
          strokeWidth: 2,
          fillColor: '#FF0000DD'
        }]
      })
      console.log("this.polygons==", points)
      wx.getLocation({
        succcess(res) {
          console.log('获取当前地理位置', res)
        }
      })
    }
  },
  // getHeight: function() {
  //   var that = this;
  //   var height = wx.getSystemInfoSync().windowHeight;

  //   wx.getSystemInfo({
  //     success: function(res) {
  //       console.log("res----", res)
  //       //设置map高度，根据当前设备宽高满屏显示
  //       that.setData({
  //         Height: res.windowHeight
  //       });
  //     }
  //   })
  // },
  getNickName: function() { //获取登录昵称
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        // console.log('res===', res);
        that.nickName = res.userInfo.nickName;
      },
    })
  },
  onShareAppMessage: function(opts) { //转发分享
    // console.log("opts==", this.nickName);
    return {
      title: this.nickName + '的位置',
      desc: '这是我选择的位置!',
      // path: '/page/user?id=123'
    }
  },






  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.audioCtx = wx.createAudioContext('myAudio');
    this.videoCtx = wx.createVideoContext('myVideo');
    this.mapCtx = wx.createMapContext('myMap');
    this.options.markers = [];
    this.getNickName();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */




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
