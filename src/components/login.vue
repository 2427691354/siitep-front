<template>
  <el-row>
    <el-row style="padding:100px">
      <el-col
        span="8"
        :offset="8"
        style="background:#ffffff;border-radius:5px;height:400px;box-shadow: 10px 10px 5px #919191"
      >
        <h1>欢迎登录！</h1>
        <el-form ref="form" label-width="80px" style="width:80%;padding:20px;">
          <el-form-item label="用户名：">
            <el-input placeholder="请输入您的用户名" v-model="name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="请输入您的密码" v-model="pwd" type="password"></el-input>
          </el-form-item>
        </el-form>
        <p>
          没有账号？
          <router-link :to="{path:'/register'}">去注册</router-link>
        </p>
        <el-button type="primary" round style="width:200px;background-color:#B3C0F7;border:none" @click="login">登录</el-button>
      </el-col>
    </el-row>
    <el-col>{{data}}</el-col>
  </el-row>
</template>
<style scoped>
h1 {
  color: #b3c0f7;
}
</style>
<script>
import { loginUser } from "@/api/api";
export default {
  data() {
    return {
      name: null,
      pwd: null,
      data:[]
    };
  },
  methods: {
    login() {
    //   alert(this.name + ":" + this.pwd);
      if (this.name == "" || this.name == null) {
        alert("用户名不能为空！");
      } else {
        if (this.pwd == "" || this.pwd == null) {
          alert("密码不能为空！");
        }else{
            var params = {
                username:this.name,
                pwd:this.pwd
            };
            loginUser(params).then(res=>{
                console.log(res);
                if(res.status === 200){
                    this.data = res.data.data
                }else{
                    
                }
            }

            )
        }
      }
    }
  }
};
</script>