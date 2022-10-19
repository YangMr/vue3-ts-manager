<template>
  <el-breadcrumb separator="/">
    <template v-for="(item,index) in breadcrumbList">
      <el-breadcrumb-item v-if="index <= 1 " :to="{path : item.path}">
        {{ item.meta.title }}
      </el-breadcrumb-item>
      <el-breadcrumb-item v-else>{{ item.meta.title }}</el-breadcrumb-item>
    </template>

  </el-breadcrumb>
</template>

<script lang="ts" setup>
import {ref, Ref, watch} from "vue"
import {useRoute, RouteLocationMatched} from "vue-router"

const route = useRoute()

let breadcrumbList: Ref<RouteLocationMatched[]> = ref([])

const getBreadCrumb = () => {
  let matched = route.matched.filter(item => item.meta && item.meta.title)
  const firstData = matched[0]
  if (firstData.path !== '/dashboard') {
    matched = [{path: '/dashboard', meta: {title: '首页'}} as any].concat(matched)
  }
  breadcrumbList.value = matched
}
getBreadCrumb()

watch(() => route.path, () => getBreadCrumb())

</script>

<style scoped>

</style>
