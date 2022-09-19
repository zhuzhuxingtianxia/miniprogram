// app.ts
const registerNav = () => {
  wx.pushTo = (option = {url: '', login: false}) => {
      if (option.login && getApp().globalData.userInfo == undefined) {
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
    
    this.handleGetLocation()

  },
  handleGetLocation () {
    //获取位置
    wx.getLocation({
      type: 'gcj02', //默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标
      success: (res) => {
        console.log(res)
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  // 获取位置权限
  getLocationAuthorize() {
    //初始获取定位权限
    wx.authorize({
      scope: 'scope.userLocation',
      success: (res) => {
       console.log(res)
      },
      fail: (err) => {
       console.log(err)
      }
    })

  },

})