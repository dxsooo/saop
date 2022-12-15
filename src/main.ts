import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import './assets/main.css'

import '@/mock'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
// app.use(ElementPlus, {
//     locale: zhCn,
// })

app.mount('#app')
