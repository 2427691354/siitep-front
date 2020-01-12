<template>
  <div class="bg">
    <el-row :gutter="20">
      <el-col :span="8">
        <!-- 气瓶左 -->
        <div class="grid-content bg-purple">
          <!-- 左上 -->
          <div class="top">
            <!-- 左上左 -->
            <div class="top_left">气瓶（{{this.sensordata.length}}）</div>
            <!-- 左上右 -->
            <div class="top_right">
              <img src="../assets/greenSensor-S.png" alt width="15px" />
              正常
              <img src="../assets/yellowSensor-S.png" alt width="15px" />
              低压
              <img src="../assets/redSensor-S.png" alt width="15px" />
              高压
            </div>
          </div>
          <!-- 气瓶左主体 -->
          <div class="main">
            <!-- 一行 -->
            <!-- <div class="main_item_line"> -->
            <!-- 行左 -->
            <div class="main_item left" v-for="sdata in sensordata" :key="sdata">
              <div v-if="sdata.ptype==0 && sdata.wtype==0">
                <router-link :to="{path: '/sensorHistorical', query: {deviceID: sdata.deviceID,  sensorID: sdata.sensorID}}">
                  <div class="main_item_img yellow"></div>
                </router-link>
              </div>
              <div v-else-if="sdata.ptype==0 && sdata.wtype==2">
                <router-link :to="{path: '/sensorHistorical', query: {deviceID: sdata.deviceID,  sensorID: sdata.sensorID}}">
                  <div class="main_item_img green"></div>
                </router-link>
              </div>
              <div v-else-if="sdata.ptype==0 && sdata.wtype==1">
                <router-link :to="{path: '/sensorHistorical', query: {deviceID: sdata.deviceID,  sensorID: sdata.sensorID}}">
                  <div class="main_item_img red"></div>
                </router-link>
              </div>

              <div v-else-if="sdata.ptype==1 && sdata.wtype==0">
                <router-link :to="{path: '/sensorHistorical', query: {deviceID: sdata.deviceID,  sensorID: sdata.sensorID}}">
                  <div class="main_item_img yellowc"></div>
                </router-link>
              </div>
              <div v-else-if="sdata.ptype==1 && sdata.wtype==2">
                <router-link :to="{path: '/sensorHistorical', query: {deviceID: sdata.deviceID,  sensorID: sdata.sensorID}}">
                  <div class="main_item_img greenc"></div>
                </router-link>
              </div>
              <div v-else-if="sdata.ptype==1 && sdata.wtype==1">
                <router-link :to="{path: '/sensorHistorical', query: {deviceID: sdata.deviceID,  sensorID: sdata.sensorID}}">
                  <div class="main_item_img redc"></div>
                </router-link>
              </div>

              <div class="main_item_text">
                <span class="name">
                  <div v-if="sdata.ptype==0">启动瓶</div>
                  <div v-else-if="sdata.ptype==1">储气瓶</div>
                  {{sdata.sensorID}}</span>
                <br />
                <strong class="allowance">{{sdata.parValue}}Mpa</strong>
              </div>
            </div>
            <!-- 行右 -->

            <!-- 一行 -->
            {{data}}
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <!-- 气瓶右 -->
        <div class="grid-content bg-purple">
          <!-- 右上 -->
          <div class="top">
            <div class="top_left">趋势图</div>
          </div>
          <!-- 右下趋势图 -->
          <router-view />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getSensorNewInfoByStationID } from "@/api/api";
export default {
  data() {
    return {
      sensordata: [],
      sdata: {}
    };
  },
  created() {
    var params = {
      stationID: this.$route.query.stationid //站点名称
    };
    getSensorNewInfoByStationID(params).then(res => {
      if (res.status === 200) {
        this.sensordata = res.data.data;
        alert(this.$route.query.stationid)
        // console.log(res.data.data)
        // console.log(this.sensor[1]);
      } else {
      }
    });

    // for(var i = 0;i<this.sensordata.length;i++){
    //   if(this.sensordata[i].ptype = "0"){
    //     this.sensordata[i] = "启动瓶";
    //   }
    //   if(this.sensordata[i].ptype = "1"){
    //     this.sensordata[i] = "储气瓶";
    //   }
    // }
  }
};
</script>
<style  scoped>
.allowance {
  color: #686766;
}
.name {
  color: #a6a6a6;
}
.main_item_img {
  float: left;
  width: 50px;
  height: 60px;

  background-repeat: initial;
  background-size: cover;
}
.green {
  background-image: url("../assets/greenSensor-L.png");
}
.yellow {
  background-image: url("../assets/yellowSensor-L.png");
}
.red {
  background-image: url("../assets/redSensor-S.png");
}
.greenc {
  background-image: url("../assets/greenSensor-C-L.png");
}
.yellowc {
  background-image: url("../assets/yellowSensor-C-L.png");
}
.redc {
  background-image: url("../assets/yellowSensor-C-L.png");
}
.main_item_text {
  width: 70px;
  float: left;
  padding-top: 10px;
}
.right {
  float: right;
}
.left {
  float: left;
}
.main_item_line {
  width: 100%;
}
.main_item {
  width: 45%;
  height: 80px;
  padding-top: 20px;
  padding-left: 10px;
}
.main {
  padding: 10px 20px;
  overflow: auto;
  width: 90%;
  height: 400px;
}
.top_right {
  height: 50px;
  padding-top: 15px;
  padding-right: 20px;
  float: right;
}
.top_left {
  height: 50px;
  padding-top: 15px;
  padding-left: 20px;
  float: left;
}

.top {
  height: 50px;
  border-bottom: 1px solid #e7ecf6;
}
.bg {
  width: 100%;
  height: 100%;
  background: #eff1f4;
  position: fixed;
}
.el-row {
  margin: 20px 0;
}
.el-col {
  border-radius: 1px;
  margin: 0 10px;
}

.bg-purple {
  background: #ffffff;
  height: 500px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  box-shadow: 5px 5px 5px #b6b4b6;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>