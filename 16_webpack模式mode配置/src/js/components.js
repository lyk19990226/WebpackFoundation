// import '@/css/style.css'
// import "@/css/content.less"
// import {createApp} from 'vue'
// import Demo from '@/vue_demo/demo.vue'
// // 引入图片模块
// import zzImgSrc from '@/img/zznh.png'


import '@/css/style'
import "@/css/content"
import {createApp} from 'vue'
import Demo from '@/vue_demo/demo'
// 引入图片模块
import zzImgSrc from '@/img/zznh'

createApp(Demo).mount(".demo_lyk")

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





