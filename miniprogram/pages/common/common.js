 function showToast(options) {
   options.duration = 2000;
   console.log("options==", options)
   wx.showToast(options)
 }

 function showModal() {
   wx.showModal({
     title: '提示',
     content: '这是一个模态弹窗',
     success(res) {
       if (res.confirm) {
         console.log('用户点击确定');
       } else if (res.cancel) {
         console.log('用户点击取消');
       }
     }
   })
 }

 function showLoading() {
   wx.showLoading({
     title: '加载中',
     mask: true, //是否显示透明蒙层
     success(res) {
       // if (res.confirm) {
       //   console.log('用户点击确定')
       // } else if (res.cancel) {
       //   console.log('用户点击取消')
       // }
     },
     fail(res) {
       console.log("showloading fail", res);
     }
   })
   setTimeout(function() {
     wx.hideLoading();
   }, 2000)
 }

 function showActionSheet() {
   wx.showActionSheet({
     itemList: ['返回', '微信支付', '支付宝支付', '其他'],
     success(res) {
       console.log("showActionSheet success", res);
     },
     fail(err) {
       console.log("showActionSheet fail", err);
     }
   })
 }
 module.exports = {
   showToast: showToast,
   showModal: showModal,
   showLoading: showLoading,
   showActionSheet: showActionSheet
 }
