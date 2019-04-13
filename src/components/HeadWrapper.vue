<template>
  <el-row class="headwrapper" type="flex" justify="space-between" align="middle">
    <el-col :span="13" >
      <span class="fa fa-institution"></span>
      <span id="head-icon">彭州市规划信息服务中心综合管理系统</span>
    </el-col>
    <el-col :span="11">
      <el-row type="flex" class="row-right" justify="end">
        <el-col :span="4">
          nihao
        </el-col>
        <el-col :span="2">
          lang
        </el-col>
        <el-col :span="2">
          qiehuan
        </el-col>
        <el-col :span="3">
          tuichu
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'head-wrapper'
}
</script>

<style scoped>
  .headwrapper {
    height: 60px;
    background-color: #409EFF;
  }

  #head-icon{
    color: white;
    font-family: 方正小标宋简体;
    font-size: 22px;
  }

  .fa{
    color: white;
    font-size: 24px;
    padding-left: 20px;
    padding-right: 10px;
  }
</style>
