<template>
    <div class="side-wrapper" :class="{ collapsed: isCollapse }">
      <!--<i :class="isCollapse" class="fa fa-bars" @click="toggleSiderBar"></i>-->
      <span class="navi-span">
        <i :class="[isCollapse? 'nav-rotate': '','fa fa-bars']" @click="toggleSiderBar"></i>
      </span>
      <el-menu default-active="1-4-1" class="navi-menu" :class="{ collapsed: isCollapse }"  background-color="#409EFF" text-color="#ffffff" active-text-color="#ffffff" @open="handleOpen" @close="handleClose" router="isRouter" mode="vertical" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">地理信息</span>
          </template>
          <el-menu-item-group>
            <span slot="title">图层</span>
            <el-menu-item index="/GridLayoutEL">图层一</el-menu-item>
            <el-menu-item index="/GridLayoutEL">图层二</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="功能">
            <el-menu-item index="/GridLayoutEL">功能一</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">点击跳转</span>
            <el-menu-item index="/GridLayoutEL">点击跳转</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">人事档案</span>
          </template>
          <el-submenu index="2-1">
            <span slot="title">科室分类</span>
            <el-menu-item index="/GridLayoutEL">法规科</el-menu-item>
            <el-menu-item index="/GridLayoutEL">规划科</el-menu-item>
            <el-menu-item index="/GridLayoutEL">风景科</el-menu-item>
          </el-submenu>
          <el-submenu index="2-2">
            <span slot="title">条件查询</span>
            <el-menu-item index="/Pinfo">姓名查询</el-menu-item>
            <el-menu-item index="/GridLayoutEL">年龄查询</el-menu-item>
            <el-menu-item index="/GridLayoutEL">教育程度查询</el-menu-item>
          </el-submenu>
          <el-menu-item index="/editpinfo">编辑档案</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'navi-wrapper',
  data () {
    return {
      isRouter: true
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.common.isCollapse
    }
  },
  methods: {
    toggleSiderBar () {
      console.log('click')
      this.$store.commit('toggleSiderBar')
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .side-wrapper {
    height: 100%;
    border: 0px;
    padding: 0px;
    margin: 0px;
  }
  .side-wrapper.collapsed {
    width:  64px;
  }

  .navi-menu.el-menu--collapse.el-menu.collapsed{
    width:  64px;
  }
  .el-submenu .el-menu-item {
    padding: 0 20px;
    min-width: 160px;
    padding-left: 20px !important;
  }
  .el-menu {
    width: 160px;
    height: 100%;
  }

  .navi-span{
    display:block;
    text-align: center;
    background-color: #42afff;
    width: 100%;
    /*与i一样*/
    height: 40px;
    transition: all 0.5s;
  }

  .nav-rotate.fa.fa-bars{
    transform: rotate(90deg);
  }

  i {
    color: white;
    font-size: 20px;
    line-height: 40px;
    text-align:center
  }

  .fa {
    color: white;
    font-size: 20px;
    transition: all 0.5s;
  }
  /*.fa.hover{*/
    /*cursor: pointer;*/
  /*}*/

  .el-submenu.is-active.is-opened{
    background-color: rgb(54, 103, 130) !important
  }
  .el-menu-item.is-active{
    background-color: #4479ff !important
  }
</style>
