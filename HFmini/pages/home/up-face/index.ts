// pages/home/up-face/index.ts
import Router from '../../../utils/router'
const { Configs } = require('./data')
Router({

  /**
   * 页面的初始数据
   */
  data: {
    configs: Configs,
    check: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /*
    自定义事件
  */
  clickAction(e:any) {
    const that = this
    console.log(e.currentTarget.dataset)
    const {index} = e.currentTarget.dataset
    wx.navigateTo({
      url:`../ai-camera/index?face=${index}`,
      events: {
        acceptImgData: (data: any)=> {
           console.log(`size:${(data.src.length / 1024.0).toFixed(0)}kb`)
           if (data.src) {
             const confs = that.data.configs
             confs[index].img = data.src
             that.setData({
                configs: confs
             })
           }
        }
      }
    })
  },
  // 提交图片
  commitClick() {
    console.log('commitClick')
    const check = this.data.configs.some((i: { img: string | any[] }) => { return i.img.length == 0 })
    if (check) {
      this.setData({
        check: check
      })
      return
    }
    
    wx.showLoading({title: '上传中', success: ()=> {
        setTimeout(()=>{
          wx.hideLoading()
          wx.showToast({title: '上传成功',success:()=> {
            wx.navigateBack({delta: 1})
          }})
        },3000)
    }})
  }

  
}, false)