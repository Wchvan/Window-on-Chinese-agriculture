import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NavMenu from '@/components/NavMenu/NavMenu.vue'
import '@/mock/index'
import '@/assets/font/font.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'



var app = createApp(App)

app.component(NavMenu.name,NavMenu)
app.use(store).use(router).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }