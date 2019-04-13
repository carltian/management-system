<template>
  <div class="persionInfo">
    <table>
      <tr>
        <td class="table-head" colspan="8">人员信息表</td>
      </tr>
      <tr>
        <td class="fcol">姓名</td>
        <td class="scol">{{name}}</td>
        <td class="fcol">性别</td>
        <td class="scol">男</td>
        <td class="fcol">出生年月<br>(___)岁</td>
        <td class="scol">1987.11<br>(31)岁</td>
        <td rowspan="4">照片</td>
      </tr>
      <tr>
        <td class="fcol">民族</td>
        <td class="scol">汉族</td>
        <td class="fcol">籍贯</td>
        <td class="scol">四川绵阳</td>
        <td class="fcol">出生地</td>
        <td class="scol">山东烟台</td>
      </tr>
      <tr>
        <td class="fcol">入党时间</td>
        <td class="scol">1998.02</td>
        <td class="fcol">参工时间</td>
        <td class="scol">2000.06</td>
        <td class="fcol">入职时间</td>
        <td class="scol">2010.10</td>
      </tr>
      <tr>
        <td class="fcol">身份类别</td>
        <td class="scol" style="font-size: 14px">事业干部<br>(专业技术)</td>
        <td class="fcol">现聘职务<br>（岗位级别）</td>
        <td class="scol" style="font-size: 14px">工程师<br>（专业技术10级）</td>
        <td class="fcol">聘任时间<br>（取得时间）</td>
        <td class="scol" style="font-size: 14px">2018.05<br>（2016.05）</td>
      </tr>
      <tr>
        <td class="fcol" rowspan="2">学历<br>学位</td>
        <td class="fcol">全日制教育</td>
        <td style="font-size: 14px">研究生工学硕士</td>
        <td class="fcol">毕业院校<br>系及专业</td>
        <td colspan="3" style="font-size: 14px">西南交通大学地球科学与测绘学院资源环境与城乡规划管理（城乡规划设计方向）</td>
      </tr>
      <tr>
        <td class="fcol">在职教育</td>
        <td style="font-size: 14px">工学硕士学位</td>
        <td class="fcol">毕业院校<br>系及专业</td>
        <td colspan="3" style="font-size: 14px">西南交通大学地球科学与测绘学院资源环境与城乡规划管理（城乡规划设计方向）</td>
      </tr>
      <tr>
        <td class="fcol" colspan="2">现任职务</td>
        <td colspan="5" style="font-size: 15px">彭州市城乡规划和建设局规划资源管理科副科长（挂职）（主持工作）<br>彭州市规划信息服务中心工程师（专业技术10级）</td>
      </tr>
      <tr>
        <td class="fcol" colspan="7">个人简历</td>
      </tr>
      <tr>
        <td colspan="7">
          <el-table :data="tableData" border height="250" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180" align="center" ></el-table-column>
            <el-table-column prop="process" label="经历" align="center" ></el-table-column>
          </el-table>
        </td>
      </tr>
      <tr>
        <td colspan="7">2</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'p-info',
  data () {
    return {
      name: '测试人员',
      tableData: [{
        date: '2016.05-2017.02',
        process: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        process: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        process: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        process: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-01',
        process: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        process: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        process: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        process: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        process: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        process: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        process: '上海市普陀区金沙江路 1519 弄'
      }]
    }
  }
}
</script>

<style scoped>
.persionInfo {
  margin: 0 auto;
  background-color: #ffffff;
  width: 800px;
  height: 100%;
}
  table {
    position: absolute;
    width: 790px;
    height: auto;
    margin: 20px 5px;
    border: 1px solid #d4d4d4;
    border-collapse: collapse;
  }

  td{
    text-align: center;
    height: 45px;
    border: 1px solid #d4d4d4;
  }

  tr{
    height: 45px;
  }

  .fcol {
    background-color: rgba(227, 227, 227, 0.54);
    width: 100px;
  }

  .scol {
    font-size: 15px;
    width: 120px;
  }

  .table-head {
    height: 50px;
    font-family: 方正小标宋简体;
    font-size: 24px;
  }

</style>
