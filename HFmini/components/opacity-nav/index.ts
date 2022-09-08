// components/opacity-nav/index.ts
Component({
  options: {
    // 在组件定义时的选项中启用多 slot 支持
    multipleSlots: true 
  },
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
    navBarColor: {
      type: String,
      value: '#ffffff'
    },
    opacity: {
      type: Number,
      value: 0.0
    },
    titleViewOpacity: {
      // 导航中间组件是否跟随透明度
      type: Boolean,
      value: false
    }
    
  },

  observers:{
    'opacity': function(value) {
        this.changeOpacity(value)
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navBarHeight: getApp().globalData.navObjct.navBarHeight,
    pages: 0,
    navBarStyle: '',
    statusBarStyle: ''
  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      this.changeOpacity(this.properties.opacity)
      this.setData({
        pages: getCurrentPages().length
      })
      
    },

    detached() {
      // 在组件实例被从页面节点树移除时执行
    }
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

    changeOpacity(value: Number) {
      const statusBarHeight = getApp().globalData.navObjct.navBarHeight
      const statusBarStyle = `height: ${statusBarHeight}px; opacity: ${value}; background-color: ${this.properties.navBarColor}` 
      const navBarStyle = `opacity: ${value}; background-color: ${this.properties.navBarColor}` 
      this.setData({ statusBarStyle, navBarStyle })
    },

  }
})
