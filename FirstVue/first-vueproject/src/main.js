import '@/assets/global.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'

const app= createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.mount('#app')
