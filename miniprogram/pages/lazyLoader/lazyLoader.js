// pages/lazyLoader/lazyLoader.js
Page({
  /**
   * 组件的初始数据
   */
  data: {
    imgArr: [{
        title: 'picture1',
        src: '../../images/timg.gif',
        realSrc: '../../images/1.jpg'
      },
      {
        title: 'picture2',
        src: '../../images/timg.gif',
        realSrc: '../../images/2.jpg'
      },
      {
        title: 'picture3',
        src: '../../images/timg.gif',
        realSrc: '../../images/3.jpg'
      }, {
        title: 'picture4',
        src: '../../images/timg.gif',
        realSrc: '../../images/4.jpg'
      }
    ]
  },
  onLoad(options) {
    // const obs = wx.createIntersectionObserver(this);
    // obs.relativeTo('.contain').observe('.img', function(res) {
    //   console.log("rres", res);
    // })
    // const obs = wx.createIntersectionObserver(this);
    // obs.relativeToViewport({ bottom: 100 }).observe('.img-contain', res => {
    //   console.log("res", res)
    // });
    // var imgs = document.querySelectorAll('.img-contain');
    // console.log("imgs", imgs);

  },
  /**
   * 组件的方法列表
   */
  methods: {

  }

})
