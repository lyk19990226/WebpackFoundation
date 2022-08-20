import '../css/style.css'
import "../css/content.less"

const divEl = document.createElement('div')
divEl.textContent = '花里胡哨'
divEl.classList.add('content')

const spanEl = document.createElement('span')
spanEl.textContent = "我是content子元素span"
spanEl.className = "item"
divEl.append(spanEl)
document.body.append(divEl)


