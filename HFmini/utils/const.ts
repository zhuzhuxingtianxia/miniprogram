/* 定义全局常量、枚举值文件 */

// 首页跳转事件 0: 联系客服 1: 关注公众号 2: 添加顾问 3:医生就诊
const HomeEvent = {
  'service': 0,
  'public': 1,
  'adviser': 2,
  'see_doctor':3
}

enum TapEvent {
  service = 0,
  public = 1,
  adviser = 2,
  see_doctor = 3
}

export {
  HomeEvent,
  TapEvent
};

module.exports = {
  // 这种导出需要把代码直接写到里面
}