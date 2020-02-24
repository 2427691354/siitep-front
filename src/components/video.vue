<template>
  <div>
    <Header></Header>
    <div class="mainbox">
      <div class="boxall"
           style="height: 8.95rem;">
        <div class="alltitle">模块标题样式</div>
        <div class="allnav"
             id="echart1">
          <el-tabs v-model="activeName"
                   @tab-click="handleClick">
            <el-tab-pane label="用户管理"
                         name="first">
              <el-upload class="upload-demo"
                         ref="upload1"
                         :limit="1"
                         :on-preview="handlePreview"
                         :on-remove="handleRemove"
                         :file-list="fileList1"
                         action="http://localhost:8088/import"
                         :auto-upload="false">
                <el-button slot="trigger"
                           size="small"
                           type="primary">选择excel</el-button>
                <el-button style="margin-left: 10px;"
                           size="small"
                           type="success"
                           @click="submitUpload1">excel导入</el-button>
              </el-upload>
            </el-tab-pane>
            <el-tab-pane label="配置管理"
                         name="second">
              <el-upload class="upload-demo"
                         ref="upload"
                         action="http://localhost:8088/addImage"
                         :on-preview="handlePreview"
                         :on-remove="handleRemove"
                         :file-list="fileList"
                         list-type="picture"
                         :auto-upload="false">
                <el-button slot="trigger"
                           size="small"
                           type="primary">图片选取文件</el-button>
                <el-button style="margin-left: 10px;"
                           size="small"
                           type="success"
                           @click="submitUpload">图片上传到服务器</el-button>
              </el-upload>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="boxfoot"></div>
      </div>
    </div>

  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  data () {
    return {
      fileList: [],
      fileList1: []
    };
  },
  components: {
    Header
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePreview (file) {
      console.log(file);
    },
    submitUpload () {
      this.$refs.upload.submit();
    },
    submitUpload1 () {
      this.$refs.upload1.submit();
    },
  }
};
</script>
<style>
</style>
