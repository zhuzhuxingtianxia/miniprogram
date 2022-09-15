// components/modal/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      observer: function(newVal, oldVal){
        if (newVal == oldVal) { return }
        if (newVal) {
          this.setData({_show: newVal})
        }else {
          const that = this
          setTimeout(function(){
            that.setData({_show: newVal})
          },250)
        }
        
      }
    },
    showCloseBtn:{
      type:Boolean
    },
    mode: {
      type: String,// center;bottom
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _show: false
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
