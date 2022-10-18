<template>
  <el-container>
    <el-aside class="aside" width="auto">
      <app-aside></app-aside>
    </el-aside>
    <el-container>
      <el-header class="header">
        <app-header></app-header>
      </el-header>
      <TagsView></TagsView>
      <el-main class="main">
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import AppHeader from "@/layout/AppHeader/index.vue"
import AppAside from "@/layout/AppAside/index.vue"
import AppMain from "@/layout/AppMain/index.vue"
import TagsView from "@/layout/TagsView/index.vue"
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;

  .aside {
    background-color: #304156;
  }

  .header {
    height: 50px;
    //border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
  }

  .main {
    //background-color: darkcyan;
  }

}
</style>
