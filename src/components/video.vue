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
            <el-tab-pane label="excel导入"
                         name="first">
              <el-upload class="upload-demo"
                         ref="upload1"
                         :limit="1"
                         :on-success="handleAvatarSuccess"
                         :on-preview="handlePreview"
                         :on-remove="handleRemove"
                         :file-list="fileList1"
                         action="http://localhost:8089/import"
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
            <el-tab-pane label="停学不停课图片上传"
                         name="second">
              <el-select v-model="value"
                         size="small"
                         placeholder="请选择">
                <el-option v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
              <br><br><br>
              <el-upload class="upload-demo"
                         ref="upload"
                         :action="'http://47.101.33.200:8089/addImage?type='+this.value"
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
            <el-tab-pane label="防疫知识管理"
                         name="three">
            </el-tab-pane>
            <el-tab-pane label="谣言管理"
                         name="four">
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
      fileList1: [],
      activeName: 'second',
      options: [{
        value: '1',
        label: '停学不停课'
      }, {
        value: '2',
        label: '辅导员'
      }, {
        value: '3',
        label: '未戴口罩人员'
      }],
      value: '1'
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
      this.$refs.upload.clearFiles();
    },
    submitUpload1 () {
      this.$refs.upload1.submit();
      this.$refs.upload1.clearFiles();
    },
    handleClick (tab, event) {
      console.log(tab, event);
    },
    handleAvatarSuccess (response, file, fileList) {
      console.log(response)
    },
  }
};
</script>
<style>
.el-tabs__item {
  color: #fff;
}
</style>
