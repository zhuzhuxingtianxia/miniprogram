// pages/user/my/index.ts
const {visitOrder, shopOrder, moreItems } = require('./data')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visitOrder,
    shopOrder,
    moreItems,
    userInfo: undefined
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
    const userInfo = getApp().globalData.userInfo
    if (userInfo) {
      this.setData({userInfo})
    }
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
    // wx.pushTo({url: '/pages/login/index', login: true})
    wx.showToast({title: '完善信息'})
  },
  //问诊订单
  onVisitOrder(e: any) {
    const type = e.currentTarget.dataset
    console.log(type)
    wx.pushTo({url: `../order-list/index?type=${type.index}`, login: true})
  },
  //商品订单
  onShopOrder(e: any) {
    const type = e.currentTarget.dataset
    console.log(type)
    wx.pushTo({url: `../order-list/index?type=${type.index}`, login: true})
  },
  // 更多
  onMoreFunction(e: any) {
    const type = e.currentTarget.dataset.index | 0
    console.log(type)
    let msg = ''
    if (type == 1) {
      msg = '我的报告'
    }else if(type == 2){
      msg = '治疗方案'
    }else if(type == 3){
      msg = '我的地址'
    }
    
    wx.showToast({title: msg})

  }

})