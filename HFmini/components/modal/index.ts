// components/modal/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
    },
    showCloseBtn:{
      type:Boolean
    }
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
    closeAction(){
      this.triggerEvent('close')
    },
    modal_click_Hidden(){
      this.triggerEvent('close')
    }
  }
})
