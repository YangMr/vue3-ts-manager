<template>
  <div class="tags">
    <div v-for="(item,index) in tagList" :key="index" :class="[$route.path === item.path ? 'active' : '']"
         class="tags-item" @click="handleTagItem(item)">
      <span>{{ item.title }}</span>
      <el-icon :size="8" @click.stop="handleRemoveTagItem(index)">
        <Close/>
      </el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed} from "vue"
import {useRouter} from "vue-router"
import {useStore} from "@/store"
import {Close} from "@element-plus/icons-vue"

const store = useStore()
const router = useRouter()
const tagList = computed(() => {
  return store.getters.getTags
})


const handleTagItem = (item: any) => {
  router.push({path: item.path})
}

const handleRemoveTagItem = (index: number) => {
  if (index === 0) return
  store.commit("removeTags", index)
  if (index === tagList.value.length) {
    const path = tagList.value[index - 1].path
    if (path) {
      router.push({path: path})
    }
  } else {
    const path = tagList.value[tagList.value.length - 1].path
    if (path) {
      router.push({path: path})
    }
  }

}
</script>

<style lang="scss" scoped>
.tags {
  padding: 2px 0;
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  display: flex;

  .tags-item:first-of-type {
    margin-left: 15px;
  }

  .tags-item.active {
    background-color: #42b983;
    color: #fff;
    border-color: #42b983;
  }

  .tags-item {
    font-size: 12px;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    padding: 0 5px;
    margin-top: 4px;
    margin-left: 5px;
    color: #495060;
    background: #fff;
    display: flex;
    align-items: center;

    .el-icon {
      margin-left: 5px;
      padding: 3px;
      border-radius: 50%;
    }

    .el-icon:hover {
      background-color: #ccc;

    }
  }
}

</style>
