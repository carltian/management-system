<template>
  <div class="gl-wrapper">
    <el-row class="el-headwrapper" type="flex" justify="center">
      <el-col :span="24" >
        <headview></headview>
      </el-col>
    </el-row>
  <el-row class="el-mainwrapper" type = "flex" justify="left" >
    <el-col :span="4" :class="{ topCollapsed: isCollapse }">
      <naviwrapper></naviwrapper>
    </el-col>
    <el-col :span="20" >
      <mainwrapper></mainwrapper>
    </el-col>
  </el-row>
  </div>
</template>

<script>
import naviwrapper from '@/components/NaviWrapper'
import mainwrapper from '@/components/MainWrapper'
import headview from '@/components/HeadWrapper'

export default {

  name: 'gridlayout-el',
  computed: {
    isCollapse () {
      return this.$store.state.common.isCollapse
    }
  },
  components: {
    'naviwrapper': naviwrapper,
    'mainwrapper': mainwrapper,
    'headview': headview
  }
}

</script>

<style scoped>
  .gl-wrapper {
    width: 100%;
    height: 100%;
  }
  .el-headwrapper{
    height: 60px;
  }

  .el-mainwrapper {
    height: 100%;
  }

  /*.el-col {*/
    /*border: 1px solid red;*/
  /*}*/

  .el-col.el-col-4 {
    width: 160px;
  }

  .el-col.el-col-4.topCollapsed {
    width:  64px;
  }

  .el-col.el-col-20 {
    width:  100%;
  }
</style>
