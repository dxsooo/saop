import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import './assets/main.css'

import '@/mock'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

import { createPinia } from 'pinia'

const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(ElementPlus)
// app.use(ElementPlus, {
//     locale: zhCn,
// })

app.mount('#app')
