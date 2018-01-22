// pages/发现/find/find.js

Page({
  /**
     * 点击tabar时，触发该函数
     */
  onTabItemTap(item) {
    console.log("隐藏小红点？？？")
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
    wx.hideTabBarRedDot({
      index: item.index,
      success: function (res) {
        console.log("隐藏小红点")
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("发现隐藏小红点")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.hideTabBarRedDot({
      index: 2,
      success: function (res) {
        console.log("隐藏小红点")
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})