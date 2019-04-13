<template lang="html">
  <div>

  <table>
      <h1 align="center">人员信息表</h1>
    <el-row type="flex" class="row-bg" :gutter="10">
      <el-col :span="5" :offset="1">姓名<el-input type="text" v-model="ruleForm.name"></el-input></el-col>
      <el-col :span="6">性别<label><input type="radio" name="sex" value="男" v-model="ruleForm.sex" >男</label>
                           <label><input type="radio" name="sex" value="女" v-model="ruleForm.sex" >女</label></el-col>
      <el-col :span="4">出生年月<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date"></el-date-picker></el-col>
      <el-col :span="4">年龄<el-input type="text" v-model="ruleForm.age"></el-input></el-col>
      <el-col :span="3">民族<el-input type="text" v-model="ruleForm.mz"></el-input></el-col>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      </el-row>

      <el-row type="flex" class="row-bg" :gutter="10">
        <el-col :span="3" :offset="1">籍贯<el-input type="text" v-model="ruleForm.jg"></el-input></el-col>
        <el-col :span="4" >入党时间<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.rddate"></el-date-picker></el-col>
        <el-col :span="4">参工时间<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.cgdate"></el-date-picker></el-col>
        <el-col :span="4">入职时间<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.rzdate"></el-date-picker></el-col>
        <el-col :span="3">身份类别<el-input type="text" v-model="ruleForm.sf"></el-input></el-col>
      </el-row>

      <el-row type="flex" class="row-bg" :gutter="10">
        <el-col :span="5" :offset="1">现聘职务<el-input type="text" v-model="ruleForm.zw"></el-input></el-col>
        <el-col :span="5">职务级别<el-input type="text" v-model="ruleForm.jb"></el-input></el-col>
        <el-col :span="4">聘任时间<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.prdate"></el-date-picker></el-col>
        <el-col :span="4">取得时间<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.qddate"></el-date-picker></el-col>
        <el-col :span="3">学历<el-input type="text" v-model="ruleForm.xl"></el-input></el-col>
      </el-row>

      <el-row type="flex" class="row-bg" :gutter="10">
        <el-col :span="22" :offset="1">毕业院校及专业<el-input type="text" v-model="ruleForm.byyx"></el-input></el-col>
      </el-row>

      <el-row type="flex" class="row-bg" :gutter="10">
        <el-col :span="22" :offset="1">现任职务<el-input type="text" v-model="ruleForm.xrzw"></el-input></el-col>
      </el-row>
      <el-row> </el-row>
      <el-row> </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addData" v-show="btnDisplay=='add'">确 定</el-button>
        <el-button type="primary" @click="updateData" v-show="btnDisplay=='edit'">修 改</el-button>
      </span>
      <!-- <div slot="footer" class="dialog-footer">
            <el-button @click="changeActive">取 消</el-button>
            <el-button type="primary" @click="modify">保存</el-button>
      </div> -->
</table>

</div>
</template>

<script>
export default {
  props: ['ruleForm','dialogVisible'],
  computed: {
    ruleForm(){
      return this.ruleForm;
    }
  },
  methods:{
    addData() {
        this.$emit('addData', this.ruleForm);
    },
    updateData(){
      this.$emit('updateData');
    },

    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }

  }
}
</script>

<style lang="css">

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
