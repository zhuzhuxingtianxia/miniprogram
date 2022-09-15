// pages/report/index.ts
//css进度条：http://www.webkaka.com/tutorial/html/2021/1028198/ 
const report = {
  "userId":19,
  "leftFace":"https://huifuaiobs1.obs.cn-east-3.myhuaweicloud.com/ai/374bd0c4eb5b4bed9cc4d6f46a8492a2.jpg",
  "frontFace":"https://huifuaiobs1.obs.cn-east-3.myhuaweicloud.com/ai/ef74fb9c2f034d74be5e72ce5d39268a.jpg",
  "rightFace":"https://huifuaiobs1.obs.cn-east-3.myhuaweicloud.com/ai/a77ac333913344e3b2a16b20c125065e.jpg",
  "skinDetectionCount":17,
  "createDate":"2022-09-08",
  "createTime":"2022-09-08 16:03:24",
  "gender":undefined,
  "birthday":undefined,
  "inquiryFlag":0,
  "leftFaceMergeImage":"https://ai-algorithm.obs.cn-east-3.myhuaweicloud.com/StudyAcneAnalyBeforteen/AI-SkinDetection-1.0-anyone-100-1.0-1567771001742163968.5c-01.f9/face-left-overall-vis_image.png",
  "frontFaceMergeImage":"https://ai-algorithm.obs.cn-east-3.myhuaweicloud.com/StudyAcneAnalyBeforteen/AI-SkinDetection-1.0-anyone-100-1.0-1567771001742163968.5c-01.f9/face-front-overall-vis_image.png",
  "rightFaceMergeImage":"https://ai-algorithm.obs.cn-east-3.myhuaweicloud.com/StudyAcneAnalyBeforteen/AI-SkinDetection-1.0-anyone-100-1.0-1567771001742163968.5c-01.f9/face-right-overall-vis_image.png",
  "lvScore":48,
  "lvRank":"重度痘痘",
  "result":"您的痘痘问题有一点点严重哦，一定要重视起来了，别让痘痘继续“蔓延”发展。大量的研究表明，及时就医可以从“减少新痘痘的发生”、“减少新的疤痕”和“提升个人的情绪和自尊”三个方面受益。",
  "suggest":"不如让医生给您线上支招，安排好您所需要的完整治疗方案，解决您关于痘痘的困惑。生活习惯上也请务必杜绝熬夜和不健康的饮食习惯，补充适量的维生素，清洁、保湿和防晒工作都要做好。从饮食、皮肤护理、再到专业医生全程的战痘陪伴，专业的疗程才能彻底和痘痘说拜拜~",
  "id":722
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    report,
    faceReports: [
      {face: report.leftFace, faceMergeImage: report.leftFaceMergeImage},
      {face: report.frontFace, faceMergeImage: report.frontFaceMergeImage},
      {face: report.rightFace, faceMergeImage: report.rightFaceMergeImage}
    ],
    showHistory: false,
    showLevel: false
    
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
    this.animate('.slider-bar', [
      {width: 0},
      {width: `${report.lvScore}%`}
    ], 500, ()=> {
      this.clearAnimation('.slider-bar', ()=> {
        console.log("清除了.slider-bar上的所有动画属性")
      })
    })
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },
  /*
    自定义事件
  */
  onCheckFace() {
    wx.navigateTo({url: '../home/ai-face/index', login: true})
  },
  //查看等级
  onLookLevel() {
    console.log('查看等级')
    this.setData({
      showLevel: true
    })
  },
  //历史列表
  onHistoryList() {
    console.log('历史列表')
    this.setData({
      showHistory: true
    })
  },
  onCloseHistoryList(){
    this.setData({
      showHistory: false
    })
  }

})