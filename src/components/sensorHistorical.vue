<template>
  <div class="main">
    {{this.$route.query.sensorID}}
    <ve-line :data="chartData" :settings="chartSettings" height="400px"></ve-line>
  </div>
</template>
<style  scoped>
</style>
<script>
import VeLine from "v-charts/lib/line";
import { findWeeklyPressureDataBySensorId } from "@/api/api";
export default {
  data() {
    return {
      data: [],
      deviceID: this.$route.query.deviceID,
      sensorID: this.$route.query.sensorID,
     
      chartData: {
        columns: ["stime", "parValue"],
        rows: []
      },
      chartSettings: {
        yAxisName: ["Mpa"],
      }
    };
  },
  components: { VeLine },
  methods: {
    changeSensor() {
      var params = {
        deviceID: this.$route.query.deviceID, //站点名称
        sensorID: this.$route.query.sensorID
      };
      findWeeklyPressureDataBySensorId(params).then(res => {
        if (res.status === 200) {
          // this.data = res.data.data;
          
          this.chartData.rows = res.data.data.map(obj => {
            return {
              stime: obj.stime,
              parValue: obj.parValue
            };
          });
        } else {
        }
      });
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log(this.$route.query.sensorID)
    if (to.fullPath != from.fullPath) {
      next();
      this.changeSensor();
    }
  },
  created(){
    var params = {
        deviceID: this.$route.query.deviceID, //站点名称
        sensorID: this.$route.query.sensorID
      };
      findWeeklyPressureDataBySensorId(params).then(res => {
        if (res.status === 200) {
          // this.data = res.data.data;
          this.chartData.rows = res.data.data.map(obj => {
            return {
              stime: obj.stime,
              parValue: obj.parValue
            };
          });
        } else {
        }
      });
  }
};
</script>