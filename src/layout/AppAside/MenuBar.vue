<template>
  <el-menu
      :default-active="$route.path"
      active-text-color="#ffd04b"
      background-color="#304156"
      router
      text-color="#fff"
      unique-opened
  >
    <MenuItem :menuList="menuList"></MenuItem>
  </el-menu>
</template>

<script lang="ts" setup>
import {reactive} from "vue"
import {useRouter} from "vue-router"
import MenuItem from "./MenuItem.vue"
import dynamicMenu from "@/utils/dynamic-menu"

const router = useRouter()

// 定义菜单数据
// const menuList = reactive([
//   {
//     path: '/dashboard',
//     component: "Layout",
//     meta: {
//       title: "首页",
//       icon: "el-icon-s-home",
//       roles: ["sys:manage"]
//     },
//     children: []
//   },
//   {
//     path: "/system",
//     component: "Layout",
//     alwaysShow: true,
//     name: "system",
//     meta: {title: "系统管理", icon: "el-icon-menu", roles: ["sys:manage"], parentId: 0,},
//     children: [{
//       path: "/system/department",
//       component: "/system/department/department",
//       alwaysShow: false,
//       name: "department",
//       meta: {title: "机构管理", icon: "el-icon-document", roles: ["sys:dept"], parentId: 17,},
//     }, {
//       path: "/system/userList",
//       component: "/system/User/UserList",
//       alwaysShow: false,
//       name: "userList",
//       meta: {title: "用户管理", icon: "el-icon-s-custom", roles: ["sys:user"], parentId: 17,},
//     }, {
//       path: "/system/roleList",
//       component: "/system/Role/RoleList",
//       alwaysShow: false,
//       name: "roleList",
//       meta: {title: "角色管理", icon: "el-icon-s-tools", roles: ["sys:role"], parentId: 17,},
//     }, {
//       path: "/system/menuList",
//       component: "/system/Menu/MenuList",
//       alwaysShow: false,
//       name: "menuList",
//       meta: {title: "权限管理", icon: "el-icon-document", roles: ["sys:menu"], parentId: 17,},
//     },],
//   }, {
//     path: "/goods",
//     component: "Layout",
//     alwaysShow: true,
//     name: "goods",
//     meta: {title: "商品管理", icon: "el-icon-document", roles: ["sys:goods"], parentId: 0,},
//     children: [{
//       path: "/goodCategory",
//       component: "/goods/goodsCategory/goodsCategoryList",
//       alwaysShow: false,
//       name: "goodCategory",
//       meta: {
//         title: "商品分类",
//         icon: "el-icon-document", roles: ["sys:goodsCategory"], parentId: 34,
//       },
//     },],
//   }, {
//     path: "/systenConfig",
//     component: "Layout",
//     alwaysShow: true,
//     name: "systenConfig",
//     meta: {title: "系统工具", icon: "el-icon-document", roles: ["sys:systenConfig"], parentId: 0,},
//     children: [{
//       path: "/document",
//       component: "/system/config/systemDocument",
//       alwaysShow: false,
//       name: "http://42.193.158.170:8089/swagger-ui/index.html",
//       meta: {title: "接口文档", icon: "el-icon-document", roles: ["sys:document"], parentId: 42,},
//     },],
//   },
// ])

let menuList = reactive([])

// 1. 获取路由表的完整的数据  不仅可以获取到静态路由， 还可以获取到动态添加的路由
const newRoutes = router.getRoutes()

// 2. 将获取到的完整的路由表数据 转化成 菜单所需要的数据
const newMenuList = dynamicMenu(newRoutes)
console.log(newMenuList)
menuList = newMenuList
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
