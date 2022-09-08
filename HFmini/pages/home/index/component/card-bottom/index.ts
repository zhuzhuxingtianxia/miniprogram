// pages/home/index/component/cart-bottom/index.ts
const QR = require('qrcode-base64')
const publicLink = "https://work.weixin.qq.com/u/vc04f06b3135fedecd?v=4.0.8.19637"
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
    myQrcode:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 自定义事件
    onButtonClick() {
      this.triggerEvent('click',{tag: 0})
    },
    onImgClick() {
      this.triggerEvent('click',{tag: 1})
    },
  },
  lifetimes: {
    ready() {
      console.log('生命周期')

    }
  },
  pageLifetimes: {
    show() {
      const imgData = QR.drawImg(publicLink, {
        typeNumber: 4,
        errorCorrectLevel: 'L',
        size: 500
      })
      this.setData({
        myQrcode: imgData
      })

    }
  }
  

})
