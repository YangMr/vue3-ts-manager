<template>
  <h1 class="home">{{count}}</h1>

  <hr />

  <button @click="handleClick">click me</button>

  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>


</template>



<script setup lang="ts">
import { ref, computed } from 'vue'

// 引入useStore
import { useStore } from "@/store"

// 初始化一个变量
const num = ref(0)

// 初始化store
const store = useStore()

// 获取vuex getters里面的count
const count = computed(()=>{
  return store.getters.getCount
})

// 点击按钮会触发的方法
const handleClick = ()=> {
  num.value += 1
  store.commit("setCount",num.value)
}

</script>



<style lang="scss" scoped>
.home{
  color : red;
}
</style>
