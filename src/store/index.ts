// store.ts
import {InjectionKey} from 'vue'
import {createStore, useStore as baseUseStore, Store} from 'vuex'

export interface State {
    count: number,
    menuStatus: boolean,
    tags: any
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        count: 0,
        menuStatus: false,
        tags: [
            {
                title: '首页',
                path: '/dashboard'
            },
            {
                title: '机构管理',
                path: '/system/department'
            },
            {
                title: '用户管理',
                path: '/system/userList'
            },
            {
                title: '角色管理',
                path: '/system/roleList'
            },
            {
                title: '权限管理',
                path: '/system/menuList'
            }
        ]
    },
    mutations: {
        setCount(state: State, count: number): void {
            state.count = count
        },
        setMenuStatus(state: State, status: boolean): void {
            state.menuStatus = status
        },
        setTags(state: State, tags: any[]): void {
            state.tags = tags
        },
        removeTags(state: State, index: number): void {
            state.tags.splice(index, 1)
        }
    },
    getters: {
        getCount(state: State): number {
            return state.count
        },
        getMenuStatus(state: State): boolean {
            return state.menuStatus
        },
        getTags(state: State): any {
            return state.tags
        }
    }
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
    return baseUseStore(key)
}
