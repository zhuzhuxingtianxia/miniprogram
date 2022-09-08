// pages/home/home.ts
import { swipers, swiperList, stepList } from './data'

Page({
  data: {
    swipers: swiperList,
    stepList: stepList,
    examples: swipers,
    headerOpacity: 0,
    showModal: false,
    modalType: 0  //0: 联系客服 1: 关注公众号 2: 添加顾问
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log('onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('onReady')
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
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('onReachBottom')
  },
  /*
    以下为自定义事件:
  */
  // 滑动监听
  onPageScroll({ scrollTop }){
    // console.log(`scrollTop:${scrollTop}`)
    const opacity = Math.min(1.0, Math.max(0, scrollTop / 100.0)) 
    // console.log(`opacity:${opacity}`)
    this.setData({
      headerOpacity: opacity
    })
  },
  onSwiperItem(e: any) {
    const item = e.currentTarget.dataset.item
    wx.showToast({title: item.text, icon: 'none'})
  },
  onCheckClick() {
    console.log('去测肤')
    wx.pushTo({url: '../ai-face/index', login: true})
  },
  floatClick(e: any){
    const index = e.detail
    console.log(index)
    if(index == 1) {
      this.setData({
        showModal: true,
        modalType: 0
      })
    }
  },
  onCareClick(e:any) {
    //添加关注/扫码
    const { tag } = e.detail
    const modalType = tag == 0 ? 1 : 2
    this.setData({
      showModal: true,
      modalType
    })
  },
  closeModal() {
    this.setData({
      showModal: false
    })
  }

})