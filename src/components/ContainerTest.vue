<template>
    <div>
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
export default {
  name: 'container-test'
}
</script>

<style scoped>
  .el-header {
    position: inherit;
    height: 60px;
    width: 100%;
    background-color: #4aaaff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    margin: 20px;
    position: inherit;
    width: 200px;
    background-color: #5ae63f;
    color: #333;
    text-align: center;
    line-height: 200px;
    z-index: 1000;
  }

  .el-main {
    position: inherit;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
