// pages/plan/index.ts
Page({

  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.setNavigationBarTitle({'title': '治疗方案'})
    wx.setNavigationBarColor({'backgroundColor':'#fff','frontColor':'#333'})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },
  /*
    自定义事件
  */
  onCheckFace() {
    wx.navigateTo({url: '../home/ai-face/index', login: true})
  }
  
})