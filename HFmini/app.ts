// app.ts
App({
  globalData: {
    userInfo: undefined,
    navObjct:{}
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
    try {
      const info = wx.getSystemInfoSync()
      const objc = {
        statusBarHeight: info.statusBarHeight,
        navBarHeight: info.system.includes('iOS') ? 44 : 48
      }
      Object.assign(this.globalData.navObjct,objc)
    } catch (error) {
      
    }
    

  },
})