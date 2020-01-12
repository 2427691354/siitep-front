<template>
  <div>

    <div class="mark">
      <img src="../assets/formal.png" alt />正常
      <img src="../assets/error.png" alt />警告
      
    </div>
    <div class="route">
      <div class="main">
        
      <div class="div1"></div>

      
      <router-link
        v-for="item in data" :key="item"
        :to="{
          path:'/sensor',
          query:{
            stationid:item.stationid
          }
        }"
      >
     
      <img src="../assets/formal.png" alt="正常" :title="item.stationname" />
      </router-link>
      

      <!-- <img src="../assets/error.png" alt="警告" title="车辆段" /> -->
      <div class="div2"></div>
      <div class="div3"></div>
      </div>
      
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { selectStationByLineID } from "@/api/api";
export default {
  data(){
    return{
      data:[],
      item:{}
    }
  },
  created(){
    var params1={
      lineID:this.$route.query.id,
      
    };
    selectStationByLineID(params1).then(res=>{
      if(res.status===200){
        this.data = res.data.data
        console.log(this.data)
        console.log(res.data.data)
      }else{

      }
    });
  }
  ,
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
  margin-bottom: 80px;
}
.div1 {
  margin-top: 100px;
  width: 900px;
  border-bottom: 3px solid #bababa;
}
.div2 {
  margin-top: -100px;
  width: 900px;
  border-bottom: 3px solid #bababa;
}
.div3 {
  margin-top: -100px;
  width: 900px;
  border-bottom: 3px solid #bababa;
}
</style>