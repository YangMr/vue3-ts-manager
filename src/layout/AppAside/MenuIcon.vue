<template>
  <i v-if="icon && icon.includes('icon-')" :class="item.meta.icon" class="iconfont"></i>
  <Icon v-else :icon="icon" class="icons"/>
</template>

<script lang="ts" setup>
defineProps(['icon'])
</script>

<style scoped>
.icons {
  width: 16px;
  height: 16px;
  font-size: 16px;
  margin-right: 5px;
}
</style>
