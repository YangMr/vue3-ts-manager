<template>
  <template v-for="(item,index) in menuList" :key="index">
    <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
      <template #title>
        <!--        <i :class="item.meta.icon"></i>-->
        <el-icon>
          <location/>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <menu-item :menuList="item.children"></menu-item>
    </el-sub-menu>

    <el-menu-item v-else :index="item.path">
      <!--      <i :class="item.meta.icon"></i>-->
      <el-icon>
        <setting/>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </template>

</template>

<script lang="ts" setup>
import {Location, Setting} from '@element-plus/icons-vue'
import {defineProps} from "vue"

defineProps(['menuList'])
</script>

<style scoped>

</style>
