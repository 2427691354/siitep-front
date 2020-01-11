<template>
  <div>
    <div class="mark">
      <img src="../assets/formal.png" alt />正常
      <img src="../assets/error.png" alt />警告
    </div>
    <div class="route">
      <el-steps :active="1">
        <el-step title="车辆段" icon="el-icon-success"></el-step>
        <el-step title="木渎" icon="el-icon-warning"></el-step>
        <el-step title="金枫路" icon="el-icon-success"></el-step>
        <el-step title="汾湖路" icon="el-icon-success"></el-step>
        <el-step title="汾湖路" icon="el-icon-success"></el-step>
        <el-step title="汾湖路" icon="el-icon-success"></el-step>
        <el-step title="汾湖路" icon="el-icon-success"></el-step>
        <el-step title="汾湖路" icon="el-icon-success"></el-step>
      </el-steps>

      <el-steps :active="1">
        <el-step title="车辆段" icon="el-icon-success"></el-step>
        <el-step title="木渎" icon="el-icon-warning"></el-step>
        <el-step title="金枫路" icon="el-icon-success"></el-step>
        <el-step title="汾湖路" icon="el-icon-success"></el-step>
        <el-step title="汾湖路" icon="el-icon-success"></el-step>
        <el-step title="汾湖路" icon="el-icon-success"></el-step>
        <el-step title="汾湖路" icon="el-icon-success"></el-step>
        <el-step title="汾湖路" icon="el-icon-success"></el-step>
      </el-steps>
      <el-steps :active="1">
        <el-step title="车辆段" icon="el-icon-success"></el-step>
        <el-step title="木渎" icon="el-icon-warning"></el-step>
        <el-step title="金枫路" icon="el-icon-success"></el-step>
        <el-step title="汾湖路" icon="el-icon-success"></el-step>
        <el-step title="汾湖路" icon="el-icon-success"></el-step>
        <el-step title="汾湖路" icon="el-icon-success"></el-step>
        <el-step title="汾湖路" icon="el-icon-success"></el-step>
        <el-step title="汾湖路" icon="el-icon-success"></el-step>
      </el-steps>
    </div>
    <router-view></router-view>
  </div>
</template>
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
</style>