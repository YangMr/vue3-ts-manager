import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"
import Layout from "@/layout/index.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: "/dashboard",
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: () => import("@/views/dashboard/index.vue"),
                meta: {
                    title: '首页',
                    icon: 'el-icon-s-home'
                }
            }
        ]
    },
    {
        path: "/system",
        name: 'system',
        component: Layout,
        redirect: '/system/department',
        meta: {
            title: '系统管理',
            icon: 'el-icon-document'
        },
        children: [
            {
                path: 'department',
                name: 'department',
                component: () => import("@/views/system/department/index.vue"),
                meta: {
                    title: '机构管理',
                    icon: 'el-icon-document'
                }
            },
            {
                path: 'userList',
                name: 'userList',
                component: () => import("@/views/system/userList/index.vue"),
                meta: {
                    title: '用户管理',
                    icon: 'el-icon-s-custom'
                }
            },
            {
                path: 'roleList',
                name: 'roleList',
                component: () => import("@/views/system/roleList/index.vue"),
                meta: {
                    title: '角色管理',
                    icon: 'el-icon-s-tools'
                }
            },
            {
                path: 'menuList',
                name: 'menuList',
                component: () => import("@/views/system/menuList/index.vue"),
                meta: {
                    title: '权限管理',
                    icon: 'el-icon-document'
                }
            }

        ]
    },
    {
        path: "/utils",
        name: 'utils',
        component: Layout,
        redirect: '/utils/log',
        meta: {
            title: '系统工具',
            icon: 'el-icon-document'
        },
        children: [
            {
                path: 'log',
                name: 'log',
                component: () => import("@/views/system/department/index.vue"),
                meta: {
                    title: '日志管理',
                    icon: 'el-icon-document'
                }
            },
            {
                path: 'document',
                name: 'document',
                component: () => import("@/views/system/userList/index.vue"),
                meta: {
                    title: '接口文档',
                    icon: 'el-icon-s-custom'
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
