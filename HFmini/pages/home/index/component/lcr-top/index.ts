// pages/home/index/component/lcr-top/index.ts

const datas = [
  {'left': 'Hi~', 'center': '轻松4步', 'hasbg':true},
  {'left': '与', 'center': '1000+', 'right':'用户的治愈陪伴', 'hasbg':true},
  {'center': '10秒', 'right': 'AI智能测肤定制', 'hasbg':true},
  {'left': 'Hi~', 'center': '宝贝', 'right':'，美并不是偶然', 'hasbg':true},
]

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mode: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    data: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    attached() {
      this.setData({
        data: datas[this.properties.mode]
      })
    }
  }


})
