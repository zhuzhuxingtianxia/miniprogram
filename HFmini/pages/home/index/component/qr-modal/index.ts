// pages/home/index/component/qr-modal/index.ts
import { QRData } from '../../data'
const drawQrcode = require('weapp-qrcode-canvas-2d')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
      type: Boolean,
      value: false
    },
    modalType: {
      // 0: 联系客服 1: 关注公众号 2: 添加顾问
      type: Number,
      value: -1,
      observer(value,old){
        console.log(value, old)
        const qrData = QRData[value]
        this.setData({qrData})
        console.log("qr:" + JSON.stringify(qrData))
        this.getQRcode(qrData.url)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    qrData: {},
    qrimg: ''
  },
  observers:{
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    closeClick(){
      this.triggerEvent('close')
    },
    getQRcode(text: String) {
      const size = 300
      const canvas = wx.createOffscreenCanvas({type: '2d', width: size, height: size})
      drawQrcode({
        canvas: canvas,
        width: size,
        background: '#ffffff',
        foreground: 'rgb(27, 94, 57)',
        text: text,
      })
      const context = canvas.getContext('2d')
      let base64 = context.canvas.toDataURL('image/png');
      this.setData({
        qrimg: base64
      })
      
    },
    getQRcode1(text: String) {
      const size = 300
      const canvas = wx.createOffscreenCanvas({type: '2d', width: size, height: size})
      // 调用方法drawQrcode生成二维码
      drawQrcode({
        canvas: canvas,
        width: size,
        background: '#ffffff',
        foreground: 'red',
        text: text,
      })
      const that = this
      // 获取临时路径（真机有问题）
      wx.canvasToTempFilePath({
          canvas: canvas,
          x: 0,
          y: 0,
          width: size,
          height: size,
          destWidth: size,
          destHeight: size,
          success(res) {
              console.log('二维码临时路径：', res.tempFilePath)
              that.setData({
                qrimg: res.tempFilePath
              })
          },
          fail(res) {
              console.error(res)
          }
      })

    },
    getQRcode2(text: String) {
      const size = 300
      const that = this
      const query = wx.createSelectorQuery().in(this)
      query.select('#myQrcode')
      .fields({ node: true,size: true })
      .exec((res) => {
        console.log(res)
          var canvas = res[0].node
          canvas.width = size
          canvas.height = size
          // 调用方法drawQrcode生成二维码
          drawQrcode({
              canvas: canvas,
              canvasId: 'myQrcode',
              width: size,
              background: '#ffffff',
              foreground: '#00ffff',
              text: text,
          })

          // 获取临时路径（真机有问题）
          wx.canvasToTempFilePath({
              canvasId: 'myQrcode',
              canvas: canvas,
              x: 0,
              y: 0,
              width: size,
              height: size,
              destWidth: size,
              destHeight: size,
              success(res) {
                  console.log('二维码临时路径：', res.tempFilePath)
                  that.setData({
                    qrimg: res.tempFilePath
                  })
              },
              fail(res) {
                  console.error(res)
              }
          })
      })
    }

  }
})
