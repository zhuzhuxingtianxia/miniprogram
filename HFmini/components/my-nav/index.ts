// components/my-nav/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: undefined
    },
    back: {
      type: String,
      value: "true"
    },
    backImg: {
      // 返回按钮图片路径，用于替换组件默认的返回按钮
      type: String 
    },
    home: {
      type: String,
      value: "true"
    },
    navBarColor: {
      type: String,
      value: '#ffffff'
    },
    style: {
      type: String,
      value: 'position: fixed;'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navBarStyle: '',
    statusBarStyle: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 返回事件
    backClick() {
      this.triggerEvent('backTap')
      wx.navigateBack({delta: 1})
    },
    // 返回首页事件
    homeClick() {
      this.triggerEvent('homeTap')
      wx.navigateBack({delta: 999})
    }
  },
  lifetimes: {
    attached() {
      const {statusBarHeight, navBarHeight} = getApp().globalData.navObjct
      const statusBarStyle = `height: ${statusBarHeight}px; background-color: ${this.properties.navBarColor}` 
      const navBarStyle = `height: ${navBarHeight}px; background-color: ${this.properties.navBarColor}` 
      this.setData({ statusBarStyle, navBarStyle })
    },
    detached() {
      // 组件实例移除时执行
    }

  }

})
