
import {createApp} from 'vue'
import Hello from './vue_demo/Hello.vue'

import {foo} from './js/foo.js'

import "./js/components.js"

createApp(Hello).mount("#app")

foo('main')



