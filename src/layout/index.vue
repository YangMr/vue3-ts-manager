<template>
  <el-container>
    <el-aside class="aside" width="200px">
      <app-aside></app-aside>
    </el-aside>
    <el-container>
      <el-header class="header">
        <app-header></app-header>
      </el-header>
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

</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  
  .aside {
    background-color: #304156;
  }

  .header {
    background-color: chocolate;
  }

  .main {
    background-color: darkcyan;
  }

}
</style>
