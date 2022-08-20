import '../css/style.css'
import "../css/content.less"
// 引入图片模块
import zzImgSrc from '../img/zznh.png'
const imgEl = document.createElement('img')
imgEl.src = zzImgSrc
document.body.append(imgEl)

const divEl = document.createElement('div')
divEl.textContent = '花里胡哨'
divEl.classList.add('content')

const spanEl = document.createElement('span')
spanEl.textContent = "我是content子元素span"
spanEl.className = "item"
divEl.append(spanEl)
document.body.append(divEl)



