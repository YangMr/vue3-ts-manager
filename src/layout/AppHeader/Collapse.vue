<template>
  <el-icon :size="22" class="icon" @click="handleChangeStatus">
    <Icon :icon="iconStatus ? 'Fold' : 'Expand'"></Icon>
  </el-icon>
</template>

<script lang="ts" setup>
import {ref} from "vue"
import {useStore} from "@/store"

// 初始化store
const store = useStore()

// 初始化按钮的状态
const iconStatus = ref(true)

// 点击展开收起按钮执行的方法
const handleChangeStatus = () => {
  iconStatus.value = !iconStatus.value
  store.commit("setMenuStatus", !iconStatus.value)

}
</script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
  margin-right: 10px;
}
</style>
