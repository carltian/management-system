<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="less">
  // 这里是坑啊，文件路径中好像不能用@符号
  // 引入全局样式
  @import "./assets/styles/global.less";
</style>
