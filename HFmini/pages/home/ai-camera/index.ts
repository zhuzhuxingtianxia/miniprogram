// pages/home/ai-camera/index.ts

const flashs = [
  {text:'自动', icon: 'flash-auto.png', code: 'auto'},
  {text:'打开', icon: 'flash-on.png', code: 'on'},
  {text:'关闭', icon: 'flash-off.png', code: 'off'},
  {text:'常亮', icon: 'flash-torch.png', code: 'torch'}
]
const flashsFront = [
  {text:'打开', icon: 'flash-on.png', code: 'on'},
  {text:'关闭', icon: 'flash-off.png', code: 'off'},
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flashs,
    flash: flashs[0],
    showFlashs: false,
    src: '',
    cameraPosition: false,
    facepos: '0',
    limitImg: 'outline-front.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options: any) {
    console.log(options)
    const { face='0' } = options
    this.setData({
      facepos: face
    })
    this.getLimitImg()
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
  /* 自定义事件 */
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality:'high',
      success: res => {
        console.log(res.tempImagePath)
        this.setData({
          src: res.tempImagePath
        })
      },
      fail: err => {
        console.log(err)
      }
    })
    
  },
  onError(e: any) {
    console.log(e.detail)
  },
  //打开相册
  openAlbum(){
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album'],
      maxDuration: 30,
      camera: 'front',
      success: res => {
        const files = res.tempFiles
        console.log(files)
        if (files.length > 0) {
          this.setData({
            src: files[0].tempFilePath
          })
        }
        
      }
    })
  },
  //切换摄像头
  changeCamera() {
    const res = !this.data.cameraPosition
    const _flashs = res ? flashsFront : flashs
    this.setData({
      cameraPosition: res,
      flashs: _flashs
    })
    this.getLimitImg()
  },
  // 获取图框
  getLimitImg() {
    let img = 'outline-front.png'
    if (this.data.facepos == '1') {
      if (this.data.cameraPosition) {
        img = 'outline-right.png'
      }else {
        img = 'outline-left.png'
      }
    } else if (this.data.facepos == '2') {
      if (this.data.cameraPosition) {
        img = 'outline-left.png'
      }else {
        img = 'outline-right.png'
      }
    }
    this.setData({
      limitImg: img
    })
    
  },
  //拍照设置
  onShowFlashs() {
    this.setData({
      showFlashs:true
    })
  },
  onChangeFlash(e:any) {
    console.log(e)
    const { item } = e.currentTarget.dataset
    this.setData({
      flash: item,
      showFlashs: false
    })
    
  },
  //重新拍照
  resetTakePhoto() {
    this.setData({src:''})
  },
  // 确认照片
  onConfirm() {
    const fs = wx.getFileSystemManager()
    fs.readFile({
      filePath: this.data.src,
      encoding: 'base64',
      success: res => {
        const eventChannel = this.getOpenerEventChannel()
        eventChannel.emit('acceptImgData', {
          src: `data:image/png;base64,${res.data}`, 
          face: this.data.facepos
        })
        wx.navigateBack({delta:1})
        
      },
      fail: (error)=> {
        console.log(error);
        wx.showToast({title:'提交失败', icon: 'error'})
      }
      
    })
    
    
  },
  //取消
  closePage() {
    wx.navigateBack()
  }

})