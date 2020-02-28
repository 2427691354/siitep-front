<template>
  <div class="head">
    <h1>校园疫情可疑排查与监测系统</h1>
    <div class="weather">
      <!-- <img src="../assets/picture/weather.png" /> -->
      <span>数据更新截取：</span>
      <span id="showTime">{{headInfo.currentTime}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headInfo: {
        weather: "",
        timer: "", //定义一个定时器的变量
        currentTime: "" // 获取当前时间
      },
      deadLine: ""
    };
  },
  created() {
    this.getWeather();
    this.getTime();
    this.getDeadline();
  },
  methods: {
    getWeather() {
      var self = this;
      //加载天气查询插件
      AMap.plugin("AMap.Weather", function() {
        //创建天气查询实例
        var weather = new AMap.Weather();
        //执行实时天气信息查询
        weather.getLive("泰州市", (err, data) => {
          self.headInfo.weather = data.weather;
        });
      });
    },
    getTime() {
      var self = this; //声明一个变量指向Vue实例this，保证作用域一致
      this.timer = setInterval(function() {
        self.headInfo.currentTime = //修改数据date
          new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          " " +
          new Date().getDate() +
          " " +
          new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          ":" +
          new Date().getSeconds();
      }, 1000);
    },
    getDeadline() {
      var self = this;
      self.$http
        .get(this.baseUrl + "")
        .then(function(response) {
          var res = response.data;
        })
        .catch(function(error) {
          console.log(error);
          // window.location.reload();
        });
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
};
</script>

<style scoped>
.head {
  height: 1.05rem;
  background: url(../assets/images/head_bg.png) no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  z-index: 100;
}
.head h1 {
  color: #fff;
  text-align: center;
  font-size: 0.4rem;
  line-height: 0.8rem;
}
.head h1 img {
  width: 1.5rem;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.2rem;
}
.weather {
  position: absolute;
  right: 0.3rem;
  top: 0;
  line-height: 0.75rem;
}
.weather img {
  width: 0.37rem;
  display: inline-block;
  vertical-align: middle;
}
.weather span {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.18rem;
  padding-right: 0.1rem;
}

</style>