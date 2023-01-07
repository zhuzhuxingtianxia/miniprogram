// 文本数据配置
interface IFace {
  title: String,
  text: String,
  placeholder: String,
  img: String
}
const Configs = [
  {title: '正脸', text: '手机与面部平行\n平时摄像头表情放松',placeholder: 'face-c.png', img:''},
  {title: '左脸', text: '面部向右侧方向旋转45°',placeholder: 'face-l.png',img:''},
  {title: '右脸', text: '面部向左侧方向旋转45°',placeholder: 'face-r.png', img:''}
]
export {
  Configs
}