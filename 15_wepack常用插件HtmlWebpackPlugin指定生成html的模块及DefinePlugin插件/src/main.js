// import {createApp} from 'vue'
// import Hello from './vue_demo/Hello.vue'
// import {foo} from './js/foo.js'
// import "./js/components.js"
// import "utils/nba/cba/ncaa.js"
// import "./bar/bar.js"


import {createApp} from 'vue'
import Hello from './vue_demo/Hello'
import {foo} from './js/foo'
import "./js/components"
import "utils/nba/cba/ncaa"

// 注意：import "./bar" 这种写法
//拿不到bar文件中的bar.js
import "./bar/bar" 


createApp(Hello).mount("#app")
foo('main')

console.log("----------",lykName)//---------- kobe




