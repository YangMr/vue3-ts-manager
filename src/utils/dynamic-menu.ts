// 过滤出包含子路由的父路由数据
// const filterParentAndChildren = (routes: any) => {
//     return routes.filter(item => item && item.children && item.children.length > 0)
// }
//
// // 匹配出菜单所需要的数据
// const filterMenu = (hasChildren) => {
//     const newMenuArray: any = []
//     if (hasChildren && hasChildren.length > 0) {
//         hasChildren.forEach(item => {
//             if (item.path === "/") {
//                 let data = {
//                     path: item.path + item.children[0].path,
//                     component: 'Layout',
//                     meta: {},
//                     children: []
//                 }
//                 if (item.children && item.children.length > 0) {
//                     data.meta = item.children[0].meta
//                 }
//                 newMenuArray.push(data)
//             } else {
//                 let data = {
//                     path: item.path,
//                     component: 'Layout',
//                     name: item.name,
//                     meta: item.meta,
//                     children: []
//                 }
//                 if (item.children && item.children.length > 0) {
//                     item.children.forEach(child => {
//                         data.children.push({
//                             meta: child.meta,
//                             name: child.name,
//                             path: item.path + "/" + child.path,
//                         })
//                     })
//                     filterMenu(item.children)
//                 }
//                 newMenuArray.push(data)
//             }
//         })
//     }
//     return newMenuArray
// }
//
// // 将完整路由表的数据转化成菜单所需要的数据
// const dynamicMenu = (routes: any) => {
//     const hasChildren = filterParentAndChildren(routes)
//     const menuList = filterMenu(hasChildren)
//     return menuList
// }
//
// export default dynamicMenu
// @ts-ignore
