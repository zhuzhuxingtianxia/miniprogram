// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer: null,
    countDown: "发送验证码",
    codeBtnEnable: false,//发送验证码按钮是否可点击
    validPhone: false,//是否有效的手机号
    phoneNumber: "",
    codeText: "",
    selectAgree: true,//是否选中协议
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 输入手机号事件
   */
  bindInputPhone(e) {
    console.log("输入值：", e.detail)
    let number = e.detail.value
    if (number.length >= 11) {
      if (this.isPhoneAvailable(number)) {
        console.log("有效的额手机号")
        this.setData({
          codeBtnEnable: true,
          validPhone: true
        })
      } else {
        console.log("手机号无效")
        wx.showToast({
          title: '手机号无效',
          icon: 'none',
          duration: 2000
        })
      }
    } else {
      this.setData({
        codeBtnEnable: false,
        validPhone: false
      })
    }
  },
  /**
   * 获取验证码
   */
  getVerCode(e) {
    this.onCountDown()
    console.log("获取验证码")
  },
  /**
   * 输入验证码事件
   */
  bindInputVerCode(e) {
    this.setData({
      codeText: e.detail.value
    })
  },
  //倒计时
  onCountDown: function () {
    const that = this;
    if (!that.data.codeBtnEnable) return;
    var second = 59;
    this.setData({
      countDown: second + "秒",
      codeBtnEnable: false
    })
    that.timer = setInterval(function () {
      console.log('倒计时')
      second = second - 1;
      if (second <= 0) {
        clearInterval(that.timer);
        that.setData({
          countDown: "重获验证码",
          codeBtnEnable: true
        })

      } else {
        that.setData({
          countDown: second + "秒",
        })

      }
    }, 1000);
  },
  /**
   * 选择协议事件
   */
  selectAgreeeAction(e) {
    this.setData({
      selectAgree: !this.data.selectAgree
    })
  },
  /**
   * 登录事件
   */
  loginAction(event) {
    console.log("登录操作")
    wx.switchTab({
      url: '../index/index',
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //取消定时任务
    clearInterval(this.data.timer);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //手机号验证
  isPhoneAvailable: function (str) {
    var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!reg.test(str)) {
      return false;
    } else {
      return true;
    }
  },
})