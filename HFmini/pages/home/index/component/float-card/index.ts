// pages/home/index/component/float-card/index.ts
// 悬浮卡按钮
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e: any) {
      const {index} = e.currentTarget.dataset
      this.triggerEvent('click',index)
    }
  }
})
