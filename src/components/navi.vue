<template>
  <div :class="{ topCollapsed: isCollapse }">
    <h3 class="logo">
      <i :class="[isCollapse? 'nav-rotate': '','fa fa-bars']" @click="toggleSiderBar"></i>
      <!--<i :class='fa fa-bars' @click="toggleSiderBar"></i>-->
    </h3>
    <el-menu text-color="#ffffff" :unique-opened="isUnique" :router="isRouter" mode="vertical" :collapse="isCollapse">
      <el-submenu index="1">

        <template slot="title">
          <i class="el-icon-time"></i>
          <span slot="title">项目管理</span>
        </template>
        <el-menu-item index="/project-info">
          <i class="el-icon-menu"></i>
          <span slot="title">项目信息</span>
        </el-menu-item>
        <el-menu-item index="/project-path">
          <i class="el-icon-share"></i>
          <span slot="title">项目路径</span>
        </el-menu-item>
        <el-menu-item index="/enroll-list">
          <i class="el-icon-document"></i>
          <span slot="title">报名列表</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/operation-log">
        <i class="el-icon-date"></i>
        <span slot="title">操作日志</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'navi',
  data () {
    return {
      isUnique: true,
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
      this.$store.commit('toggleSiderBar')
    }
  }
}
</script>

<style scoped>
  .logo {
    background-color: rgba(46, 101, 138, 0.85);
    color: #ffffff;
    font-weight: bold;
    line-height: 40px;
    margin: 0;
    letter-spacing: 1px;
  }

  .el-menu {
    background-color: #3c8dbc;
    text-color: #ffffff
  }

  .el-menu-item {
    background-color: #3c8dbc;
  }

  i{
    color: white;
  }

  /*动态改变左侧导航包裹层宽度*/
  #wrapper.collapsed {
    grid-template-columns: 64px minmax(50px, auto);
  }

  .title {
    color: #dddddd;
  }
</style>
