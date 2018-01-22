//index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: "初始数据"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log("生命周期开始")
    //设置角标
    wx.setTabBarBadge({
      index: 3,
      text: '3'
    })
  },
  onShow: function (){
    wx.showTabBarRedDot({
      index: 2,
      success: function (res) {
        console.log("显示小红点")
      }
    })
  },
  
  //事件处理
  bindViewAction: function (pram) {
    wx.navigateTo({
      url: '../组件/view/view'
    })
  },
  bindScrollViewAction: function (pram) {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateTo({
            url: '../组件/scroll-view/scroll-view'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  bindTestAction: function (pram) {
    console.log("练习")
    wx.navigateTo({
      url: '../组件/wxTest/page1'
    })
  },
  bindLoginAction: function () {
    console.log("登陆")
    //加载状态
    wx.showLoading({
      title: '登陆中...',
    }),
      setTimeout(function () {
        wx.hideLoading(),
          //push到登陆界面
          wx.navigateTo({
            url: '../login/login'
          })
      }, 2000)

  }

})
