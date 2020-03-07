<template>
  <div id="app">
<el-menu
:default-active="this.$route.path"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
     
  text-color="#1bb4f6"
  active-text-color="#5bc0de">
  <el-menu-item index="/">首页</el-menu-item>
  <el-menu-item index="/campus">苏工院</el-menu-item>
  <el-menu-item index="/onlineCourse">网课</el-menu-item>
  <el-menu-item index="/epidemic">疫情</el-menu-item>
</el-menu>



    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{

    }
  },
  methods:{
    handleSelect(key, keyPath) {
        console.log(key);
        this.$router.push(key);
          
      }
  }
};
</script>

<style>
.el-menu.el-menu--horizontal{
  z-index: 9999;
  padding-left: 15px;
  background: #030e38 ;
  border-bottom:none;


}
.el-menu-item{
  padding: 0 25px;
}
.el-menu--horizontal>.el-menu-item{
  font-size: 16px;
}
.el-menu-item:hover{
  background-color: rgba(14, 221, 240, 0.32) !important;
}
.el-menu--horizontal>.el-menu-item.is-active{
  background-color:#030e38 !important;
}

</style>
