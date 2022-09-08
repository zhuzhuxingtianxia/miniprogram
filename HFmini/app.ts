// app.ts
const registerNav = () => {
  wx.pushTo = (option = {url: '', login: false}) => {
      if (option.login) {
        option.url = '/pages/login/index'
      }
      return wx.navigateTo(option)
  }

}

App({
  globalData: {
    userInfo: undefined,
    navObjct:{
      statusBarHeight:0,
      navBarHeight: 44
    }
  },
  onLaunch() {
    registerNav()
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

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