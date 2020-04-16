<template>
  <div>
    <div class="head">
      <div class="nav">
        <el-menu :default-active="this.$route.path"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect"
                 text-color="#1bb4f6"
                 active-text-color="#5bc0de">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/campus">校园防疫</el-menu-item>
          <!-- <el-menu-item index="/onlineCourse">停课不停学</el-menu-item> -->
          <!-- <el-menu-item index="/epidemic">疫情分析</el-menu-item> -->
          <el-menu-item index="/networkTeaching">网络教学</el-menu-item>
          <el-menu-item index="/monitor">实时监控</el-menu-item>
          <el-menu-item index="/studentstrajectory"
                        v-show="studentstrajectory">学生轨迹</el-menu-item>
        </el-menu>
      </div>
      <h1>校园疫情防控与网络教学可视化平台</h1>
      <div class="nav2"
           v-show="bottonenter">
        <el-menu :default-active="this.$route.path"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect"
                 text-color="#1bb4f6"
                 active-text-color="#5bc0de">
          <el-menu-item index="/login">教师登录</el-menu-item>
        </el-menu>
      </div>
      <div class="nav2"
           v-show="showmeauinfo">
        <el-menu class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect"
                 text-color="#1bb4f6"
                 active-text-color="#5bc0de">
          <el-menu-item index="/"
                        @click.native="loginout">退出登录</el-menu-item>
        </el-menu>
      </div>

      <div class="weather">
        <img src="../assets/images/time4.png"
             alt="时间截止" />
        <span>数据更新截止：</span>
        <span id="showTime"
              v-if="this.$route.path=='/networkTeaching'">{{dateline}}</span>
        <span id="showTime"
              v-else>{{deadLine}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data () {
    return {
      deadLine: "",
      dateline: "",
      showmeauinfo: "",
      bottonenter: "",
      studentstrajectory: false,
      res: localStorage.getItem("res")
    };
  },
  created () {
    this.getDeadline();
    this.showmeau();
    if (this.res != null) {
      this.studentstrajectory = true
    }
    else {
      this.studentstrajectory = false
    }
  },
  mounted () {
    this.date();
  },
  methods: {
    getDeadline () {
      var self = this;
      self.$http
        .get(this.baseUrl + "/students/getNewTime")
        .then(function (response) {
          var res = response.data;
          self.deadLine = res;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleSelect (key, keyPath) {
      this.$router.push(key);
    },
    date () {
      axios.get("static/json/data.json").then(res => {
        this.dateline = res.data.deadline;
      });
    },
    showmeau () {
      if (
        localStorage.getItem("res") != "存在" ||
        localStorage.getItem("res") == ""
      ) {
        this.bottonenter = true;
        this.showmeauinfo = false;
      } else {
        this.bottonenter = false;
        this.showmeauinfo = true;
      }
    },
    showMenus () {
      this.$router.push({ name: "studentstrajectory" });
    },
    loginout () {
      localStorage.removeItem("res");
      this.bottonenter = true;
      this.showmeauinfo = false;
    }
  },
  beforeDestroy () {
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
  /* color: #fff; */
  text-align: center;
  font-size: 0.4rem;
  line-height: 0.8rem;
  padding-top: 0.1rem;
  background-image: -webkit-gradient(
    linear,
    left 0,
    right 0,
    from(rgb(8, 115, 245)),
    to(rgb(120, 245, 222))
  );
  /*必需加前缀 -webkit- 才支持这个text值 */
  -webkit-background-clip: text;
  /*text-fill-color会覆盖color所定义的字体颜色： */
  -webkit-text-fill-color: transparent;
}
.head h1 img {
  width: 1.5rem;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.2rem;
}
.weather {
  position: absolute;
  right: 1.3rem;
  top: 0;
  line-height: 0.75rem;
}
.botton {
  position: absolute;
  top: 0.25rem;
  right: 3rem;
}
.botton .el-button {
  line-height: 0.5;
  border: 0;
  background: #051994;
  color: #fff;
}
.weather img {
  width: 0.3rem;
  display: inline-block;
  vertical-align: middle;
  padding-top: 0.04rem;
  padding-right: 0.05rem;
}
.weather span {
  /* color: rgba(255, 255, 255, 0.7); */
  color: #00e6fd;
  font-size: 0.17rem;
  vertical-align: middle;
  padding-right: 0.01rem;
}
.nav {
  position: absolute;
  left: 0rem;
  top: 0;
  line-height: 0.75rem;
  height: 65%;
}
.nav2 {
  position: absolute;
  right: 0rem;
  top: 0;
  line-height: 0.75rem;
  height: 65%;
}
.el-menu.el-menu--horizontal {
  z-index: 9999;
  /* padding-left: 15px; */
  background: transparent;
  border-bottom: none;
  height: 100% !important;
}
/* .el-menu-item{
  padding: 0 25px;
  
} */
.el-menu--horizontal > .el-menu-item {
  font-size: 0.2rem;
  height: 100% !important;
}
.el-menu-item:hover {
  background-color: rgba(14, 221, 240, 0.32) !important;
  height: 100% !important;
}
.el-menu--horizontal > .el-menu-item.is-active {
  background-color: transparent !important;
  height: 100%;
}
.showdropmenu {
  position: absolute;
  top: 0.25rem;
  right: 3rem;
}
.showdropmenu .el-dropdown-link {
  cursor: pointer;
  color: #00e6fd;
}
.showdropmenu .el-icon-arrow-down {
  font-size: 0.1rem;
  color: #00e6fd;
}
</style>
