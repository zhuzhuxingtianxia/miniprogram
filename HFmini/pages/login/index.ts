// pages/login/index.js.ts

Page({
  /**
   * 页面的初始数据
   */
  data: {
    navObjct: getApp().globalData.navObjct,
    check: false,
    showbubble: true,
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // 登陆事件
  onLogin() {
    if (this.data.check == false) {
      const frames = Array(8).fill(0).map((_,index) => {
          return { translateY: index % 2 == 0 ? -2 : 2 }
      })
      this.animate('.bubble-box', frames, 100, ()=> {
        this.clearAnimation('.bubble-box', ()=> {
          console.log("清除了.bubble-box 上的所有动画属性")
        })
      })

      this.setData({
        showbubble: false
      })
      wx.vibrateLong()
      return
    }
    // 登录
    wx.login({
      success: res => {
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        const secret = "291177f7e76fabb503060b3222e63f9a"
        const code2Session = `https://api.weixin.qq.com/sns/jscode2session?appid=wxa2fd53cc1b7c76b8&secret=${secret}&js_code=${res.code}&grant_type=authorization_code`
        wx.request({
          url: code2Session,
          success (res) {
            console.log(res.data)
          }
        })
      },
    })
    if (wx.canIUse('button.open-type.getUserInfo')) {
      getApp().userInfoReadyCallback = (res: any) => {
        console.log('button.open-type.getUserInfo')
        console.log(res)
      }
    }
    wx.getUserProfile({
      desc: '展示用户信息', //后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log('getUserProfile')
        console.log(res)
      }
    })
    wx.getSetting({
      success: res => {
        console.log('getSetting')
        console.log(res)
        if (res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success: res => {
              console.log('getUserInfo')
              console.log(res)
            }
          })
        }
      }
    })

  },
  onAgreement() {
    this.setData({
      showbubble: true,
      check: !this.data.check
    })
  },
  onAgreementList() {
    wx.showToast({title: '协议列表', icon: 'none'})
  }

})