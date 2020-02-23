<template>
  <div class="box">
    <el-button type="primary" icon="edit" @click="submit($event)"
      >excel导入</el-button
    >
    <input type="file" @change="getFile($event)" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    getFile(event) {
      this.file = event.target.files[0];
      this.file.name;
    },
    submit(event) {
      if (this.file == null) {
        alert("文件为空,请选择文件进行导入");
      }
      //阻止元素发生默认的行为
      event.preventDefault();
      let formData = new FormData();
      formData.append("file", this.file);
      this.$http
        .post(this.baseUrl + "import", formData)
        .then(function(response) {
          alert(response.data);
          // window.location.reload();
        })
        .catch(function(error) {
          alert("上传失败,请核对excel表格数据");
          alert(error);
          // window.location.reload();
        });
    }
  }
};
</script>
<style scoped></style>
