<template>
  <div id="app">
    <keep-alive>
    <el-container>
      <el-aside width="202px" style="background-color:#EFF1F4;">
        <!-- 左侧导航 -->
        <el-row class="tac">
          <el-col :span="12">
            <img src="./assets/logo-index.png" alt />
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              @select="handleSelect"
            >
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>实时数据</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item
                    index="/p1"
                    style="padding-left: 30px; color: rgb(255, 255, 255); background-color: rgb(84, 92, 100);"
                  >
                  <router-link
                    :to="{
                      path:'/p1',
                      query:{
                        id:'gj01'
                      }
                    }"
                  >
                  <i class="el-icon-place"></i>
                  轨道交通1号线</router-link>
                  </el-menu-item>
                
                  <el-menu-item
                    index="/p2"
                    style="padding-left: 30px; color: rgb(255, 255, 255); background-color: rgb(84, 92, 100);"
                  >
                  <router-link
                    :to="{
                      path:'/p1',
                      query:{
                        id:'gj02'
                      }
                    }"
                  >
                  <i class="el-icon-place"></i>
                  轨道交通2号线</router-link>
                  </el-menu-item>
                  <el-menu-item
                    index="2-3"
                  
                    style="padding-left: 30px; color: rgb(255, 255, 255); background-color: rgb(84, 92, 100);"
                  >
                  <router-link
                    :to="{
                      path:'/p1',
                      query:{
                        id:'gj04'
                      }
                    }"
                  >
                  <i class="el-icon-place"></i>
                  轨道交通4号线</router-link>
                  </el-menu-item>
                  <el-menu-item
                    index="2-4"
                  
                    style="padding-left: 30px; color: rgb(255, 255, 255); background-color: rgb(84, 92, 100);"
                  >
                  <router-link
                    :to="{
                      path:'/p1',
                      query:{
                        id:'gj07'
                      }
                    }"
                  >
                  <i class="el-icon-place"></i>
                  轨道交通4号线支线</router-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">异常信息</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">系统日志</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
     
      <el-main>
        <!-- 右侧显示区域 -->
        <div style="border: 1px solid #A6A6A6;  background-color: white">
          <router-view />
        </div>
      </el-main>
    </el-container>
    </keep-alive>
  </div>
  
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>


<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
}
.el-menu-item-group .el-menu-item{
  text-align:left;
}
.el-menu-item{
  padding: 0px;
}
.el-col-12 {
  width: 100%;
}

.el-aside .el-row .el-col img {
  width: 201.8px;
  display: block;
}
.el-main > div {
  height: 487px;
  /* border: solid 1px gray;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04) */
}
.el-main {
  padding: 0px;
}
</style>
