<template>
  <div>
    <div class="mark">
      <img src="../assets/formal.png" alt />正常
      <img src="../assets/error.png" alt />警告
      
    </div>
    <div class="route">
      <div class="main">
      <div class="div1"></div>
      <img src="../assets/error.png" alt="警告" title="车辆段" />
      <img src="../assets/formal.png" alt="正常" title="木渎" @click="mudu"/>
      <img src="../assets/formal.png" alt="正常" title="木渎" />
      </div>
      
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    mudu() {
      this.$router.push({ name: "sensorHistorical" });
    }
  }
};
</script>
<style  scoped>
.mark {
  width: 1200px;
  height: 35px;
  background-color: gainsboro;
  margin: 50px 0 0 23px;
  padding: 8px;
  border-radius: 8px;
  letter-spacing: 3px;
}
.mark img {
  height: 20px;
  margin-top: 5px;
}
.route {
  width: 1000px;
  height: 300px;
  margin: 50px 0 0 80px;
}
.el-step.is-horizontal .el-step__line {
  height: 4px;
}
.el-steps {
  margin: 25px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.main {
  width: 900px;
  height: 300px;
}
.main img {
  height: 30px;
  margin-top: -20px;
  margin-left: 50px;
}
.div1 {
  margin-top: 100px;
  width: 900px;
  border-bottom: 3px solid #bababa;
}
</style>