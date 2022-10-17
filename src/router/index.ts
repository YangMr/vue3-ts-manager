import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"
import Layout from "../components/test.vue"

const routes : Array<RouteRecordRaw> = [
    {
        path : '/home',
        name : 'home',
        component : Layout
    }
]

const router = createRouter({
    history : createWebHashHistory(),
    routes
})

export default router
