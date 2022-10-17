import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入路由
import router from "./router/index"
// 导入vuex
import { store, key } from './store/index'

const app = createApp(App)
app.use(router)
app.use(store, key)
app.use(ElementPlus)
app.mount('#app')
