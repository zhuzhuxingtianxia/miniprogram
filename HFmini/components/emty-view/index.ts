// components/emty-view/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img: {
      type: String,
      value: '/sources/default/a.png'
    },
    title: {
      type: String,
      value: '暂无检测报告'
    },
    subtitle: {
      type: String,
      value: '您当前还未进行过皮肤检测，请完成检测后查看'
    },
    btnText: {
      // 按钮文本，为空则不显示按钮，可自定义按钮
      type: String,
      value: '皮肤检测' 
    },
    style: {
      type: String,
      value: 'background: #fff; height: 100%;'
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
    onTap() {
      this.triggerEvent('button')
    }
  }
})
