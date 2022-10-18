<template>
  <div class="logo">
    <img alt="logo" src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png">
    <!--    <span class="title">Vue3+TypeScript实战</span>-->
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.logo {
  padding: 5px 0;
  background-color: #2b2f3a;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  //padding-left: 15px;

  img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }

  span {
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    vertical-align: middle;
  }
}
</style>
