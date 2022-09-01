// components/opacity-nav/index.ts

const {statusBarHeight, navBarHeight} = getApp().globalData.navObjct

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
    navBarColor: {
      type: String,
      value: '#ffffff'
    },
    opacity: {
      type: Number,
      value: 0.0
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
    navBarHeight: navBarHeight,
    navBarStyle: '',
    statusBarStyle: ''
  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      this.changeOpacity(this.properties.opacity)
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
      const statusBarStyle = `height: ${statusBarHeight}px; opacity: ${value}; background-color: ${this.properties.navBarColor}` 
      const navBarStyle = `height: ${navBarHeight}px; opacity: ${value}; background-color: ${this.properties.navBarColor}` 
      this.setData({ statusBarStyle, navBarStyle })
    },

  }
})
