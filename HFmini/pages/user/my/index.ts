// pages/user/my/index.ts
const {visitOrder, shopOrder, moreItems } = require('./data')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visitOrder,
    shopOrder,
    moreItems
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    
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

  /*
    自定义事件
  */
  goLogin() {
    wx.navigateTo({url: '/pages/login/index'})
  },
  //完善信息
  onFullInfo() {
    wx.pushTo({url: '/pages/login/index', login: true})
  },
  //问诊订单
  onVisitOrder(e: any) {
    console.log(e.currentTarget.dataset)
  },
  //商品订单
  onShopOrder(e: any) {
    console.log(e.currentTarget.dataset)
  },
  // 更多
  onMoreFunction(e: any) {
    console.log(e.currentTarget.dataset)
  }

})