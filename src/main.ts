import {createApp, createVNode} from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// 引入Icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 方式一
// Object.keys(ElementPlusIconsVue).forEach((key) => {
//     app.component(key, ElementPlusIconsVue[key as keyof typeof ElementPlusIconsVue])
// });

// 方式二
const Icon = (props: { icon: string }) => {
    const {icon} = props;
    return createVNode(ElementPlusIconsVue[icon as keyof typeof ElementPlusIconsVue]);
};
app.component('Icon', Icon);


// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入路由
import router from "./router/index"
// 导入vuex
import {store, key} from './store/index'


app.use(router)
app.use(store, key)
app.use(ElementPlus)
app.mount('#app')
