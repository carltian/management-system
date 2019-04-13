<template>
  <div>
  <el-container>
    <el-main>
    <!-- 添加和搜索按钮 -->
    <el-button type="primary" @click="addView" size="small" circle>添加<i class="el-icon-circle-plus-outline"></i></el-button>
    <el-button type="primary" @click="searchView" size="small" circle>查询<i class="el-icon-search"></i></el-button>
  <el-table
    :data="tableData"
    :default-sort="{prop:'id',order:'desending'}"
    max-height="570"
    style="width: 100%;">
    <el-table-column
      label="序号"
      prop="index"
      width="80">
    </el-table-column>
    <el-table-column
      label="时间"
      prop="time"
      width="180">
    </el-table-column>
    <el-table-column
      label="旧编号"
      prop="old_num"
      width="180">
    </el-table-column>
    <el-table-column
      label="新编号"
      prop="new_num"
      width="180">
    </el-table-column>
    <el-table-column
      label="档案柜编号"
      prop="box_num"
      width="180">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="updateDataView(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="deleteData(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div style="text-align: center;">
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="pageNumber"
    :page-sizes="[5, 10, 15, 20]"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="totalCount">
  </el-pagination>
  </div>
  <el-dialog
          :title="dialogTitle"
          :visible.sync="dialogVisible"
          :modal-append-to-body="true"
          width="80%"
        >
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <h1 align="center">信息表</h1>
        <el-row type="flex" class="row-bg" :gutter="10">
          <el-form-item label="时间" prop="time">
            <el-input type="text" v-model="ruleForm.time"></el-input></el-col>
          </el-form-item>
          <el-form-item label="旧档案号" prop="old_num">
            <el-input type="text" v-model="ruleForm.old_num"></el-input></el-col>
          </el-form-item>
          <el-form-item label="新档案号" prop="new_num">
            <el-input type="text" v-model="ruleForm.new_num"></el-input></el-col>
          </el-form-item>
          <el-form-item label="档案柜编号" prop="box_num">
            <el-input type="text" v-model="ruleForm.box_num"></el-input></el-col>
          </el-form-item>
          </el-row>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="addData" v-show="btnDisplay=='add'">确 定</el-button>
            <el-button type="primary" @click="updateData" v-show="btnDisplay=='edit'">修 改</el-button>
            <el-button type="primary" @click="searchData" v-show="btnDisplay=='search'">搜索</el-button>
          </span>
        </el-dialog>

</el-main>
</el-container>
</div>
</template>

<script>


  export default {
    data() {
      return {
        tableData: [],
        dialogVisible:false,
        dialogTitle:"操作",
        btnDisplay:'add',
        /*输入框集合*/
        ruleForm:{
          time: '',
          new_num:'',
          old_num:'',
          box_num:'',
          id:0
        },
        /*验证规则*/
        rules: {
                  // time: [
                  //   {required: true, message: '请输入时间', trigger: 'blur'},
                  // ],
                  new_num: [
                    {required: true, message: '请输入新档案号', trigger: 'blur'},
                  ],
                  // box_num: [
                  //   {required: true, message:'请输入档案柜号', trigger: 'blur'},
                  // ]
                },
        pageNumber: 1,
        pageSize: 10,
        totalCount: 3000,
        loading: false,
      }
    },

      methods: {
      /*查询数据回显*/
      searchView: function () {
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.btnDisplay = 'search';
          this.ruleForm.new_num = '';
        })
      },
      /*查询数据*/
      searchData: function () {
        this.$ajax.post('/test/search', {
          new_num: this.ruleForm.new_num,
        }).then(success => {
          this.dialogVisible = false;
          this.$message(success.data.$message);
          this.queryData()
        })
      },
      /*分页查询*/
      handleSizeChange(pageSize) {
        this.pageSize = pageSize;
        this.queryData();
      },
      handleCurrentChange(pageNumber) {
        this.pageNumber = pageNumber;
        this.queryData();
      },
      queryData: function () {
        this.loading = true;
        this.$ajax.post('/test/query', {
          pageSize: this.pageSize,
          pageNumber: this.pageNumber
        }).then(data => {
          this.loading = false;
          let resData = data.data.info;
          let tableData = [];
          resData.map((item, index) => {
            let obj = {};
            obj["index"] = item.id//(this.pageNumber - 1) * this.pageSize + index + 1;
            obj["time"] = item.time;
            obj["old_num"] = item.old_num;
            obj["new_num"] = item.new_num;
            obj["box_num"] = item.box_num;
            obj["id"] = item.id;
            tableData.push(obj)
          })
          this.tableData = tableData;
          this.totalCount = data.data.total;
        })
      },
      /*新增回显*/
      addView: function () {
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.btnDisplay = 'add';
          this.ruleForm.time = '';
          this.ruleForm.old_num = '';
          this.ruleForm.new_num = '';
          this.ruleForm.box_num = '';
        })
      },
      /*新增数据*/
      addData: function () {
        this.$ajax.post('/test/add', {
          time: this.ruleForm.time,
          old_num: this.ruleForm.old_num,
          new_num: this.ruleForm.new_num,
          box_num: this.ruleForm.box_num,
        }).then(success => {
          this.dialogVisible = false;
          this.tableData = success.body.message;
          this.$message(success.data.message);
          this.queryData()
        })
      },
      /*修改数据回显*/
      updateDataView: function (index, row) {
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.btnDisplay = 'edit';
          this.ruleForm.id = row.id;
          this.ruleForm.time = row.time;
          this.ruleForm.old_num = row.old_num;
          this.ruleForm.new_num = row.new_num;
          this.ruleForm.box_num = row.box_num;
        })
      },
      /*确认编辑*/
      updateData: function () {
        this.$ajax.post('/test/edit', {
          id: this.ruleForm.id,
          time: this.ruleForm.time,
          old_num: this.ruleForm.old_num,
          new_num: this.ruleForm.new_num,
          box_num: this.ruleForm.box_num,
        }).then(success => {
          this.$message(success.data.message);
          this.queryData();
          this.dialogVisible = false;
        })
      },
      /*删除数据*/
      deleteData: function (index, row) {
        this.$ajax.post('/test/delete', {
          id: row.id
        }).then(success => {
          this.$message(success.data.message);
          this.queryData()
        })
      },
      getDay: function (date) {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        return year + "-" + month + "-" + day;
      },
      /*上传文件,未配置路由和导入(待做)*/
      update(e){
        let file = e.target.files[0];
        let param = new FormData(); //创建form对象
        param.append('file', file);//通过append向form对象添加数据
//        console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          headers: {'Content-Type': 'multipart/form-data'}
        }; //添加请求头
        this.$ajax.post('/test/upload', param, config)
          .then(response => {
            console.log(response.data);
          })
        }
    },
    mounted: function () {
      this.queryData();
    }
}
</script>
<style media="screen">
[v-cloak] {
    display: none
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

.el-col {
 border-radius: 4px;
}
.bg-purple-dark {
 background: #99a9bf;
}
.bg-purple {
 background: #d3dce6;
}
.bg-purple-light {
 background: #e5e9f2;
}
.grid-content {
 border-radius: 4px;
 min-height: 36px;
}
</style>
