// pages/home/ai-face/index.ts
import Router from '../../../utils/router'
Router({

  /**
   * 页面的初始数据
   */
  data: {
    check: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },
  /*
    自定义事件
  */
  onMakePhoto() {
    if (!this.data.check) {
      wx.showToast({title:"请先阅读协议", icon:'error'})
      return
    }
  },
  onAgreement() {
    this.setData({
      check: !this.data.check
    })
  },
  onAgreementList() {
    wx.showToast({title:"查看协议"})
  }
  
  
}, true)