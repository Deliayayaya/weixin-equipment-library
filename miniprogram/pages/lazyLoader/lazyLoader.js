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
    var _self = this;
    var obs = wx.createIntersectionObserver(this,{observeAll:true});
    obs.relativeToViewport({bottom:0}).observe('.img',function(res){
        _self.data.imgArr.forEach(function(item){
          if(res.dataset.src == item.realSrc){
            if(res.intersectionRatio > 0){
              item.src = res.dataset.src;
            }else{
                item.src = '../../images/timg.gif';
              }
            _self.setData({imgArr:_self.data.imgArr});
          }
        })
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }

})
