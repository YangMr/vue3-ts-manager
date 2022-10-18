<template>
  <el-icon :size="22" class="icon" @click="handleChangeStatus">
    <Icon :icon="iconStatus ? 'Fold' : 'Expand'"></Icon>
  </el-icon>
</template>

<script lang="ts" setup>
import {ref} from "vue"

const iconStatus = ref(true)

const handleChangeStatus = () => {
  iconStatus.value = !iconStatus.value
}
</script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
}
</style>
