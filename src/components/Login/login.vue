<template>
  <div class="page">
    <h3 class="title">校园疫情系统登录</h3>
    <div class="login">
      <h3 class="title_2">用户登录</h3>
      <div>
        <i class="iconfont icon-yonghuming1"></i>
        <el-input placeholder="请输入用户名" v-model="name" clearable class="input_style"></el-input>
        <span v-if="error.name" class="err-msg">{{error.name}}</span>
      </div>
      <div>
        <i class="iconfont icon-mima"></i>
        <el-input placeholder="请输入密码" v-model="pwd" show-password class="input_style"></el-input>
        <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
      </div>
      <div>
        <el-button @click="login" class="login_style">登录</el-button>
        <p @click="enter" class="enter_style">直接进入</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      name: "",
      pwd: "",
      error: {
        name: "",
        pwd: ""
      }
    };
  },
  methods: {
    check(name, pwd) {
      if (!name) {
        this.error.name = "请输入姓名";
        return false;
      }
      if (!pwd) {
        this.error.pwd = "请输入密码";
        return false;
      }
    },
    login() {
      if (!window.localStorage) {
        alert("浏览器不支持localStorage");
      } else {
        var storage = window.localStorage;
        storage.setItem("name", this.name);
        
        if (this.name == "admin" && this.pwd == "123") {
          this.$router.push({ name: "Index" });
        } 
        else if(this.name=="user" && this.pwd == "1234"){
          this.$router.push({ name: "Index" });
        }
        else {
          alert("用户名或密码错误");
        }
        console.log(typeof storage["name"]);
      }
    },
    enter(){
      if (!window.localStorage) {
        alert("浏览器不支持localStorage");
      } else {
        var storage = window.localStorage;
        storage.setItem("name", "");
        this.$router.push({ name: "Index" });
      }
    }
  }
};
</script>

<style>
.page {
  position: absolute;
  width: 100%;
  height: 100%;
}
.title {
  text-align: center;
  font-size: 0.4rem;
  margin-bottom: 2%;
  padding-top: 12%;
  color: #9ba1b2;
}
.title_2 {
  text-align: center;
  font-size: 0.3rem;
  color: #9ba1b2;
}
.login {
  position: absolute;
  width: 40%;
  height: 40%;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  margin-left: 30%;
  margin-top: -1.5%;
}
i {
  width: 5%;
  margin-left: 20%;
  color: #1834ec;
}
.input_style {
  width: 50%;
  margin-left: 5%;
  margin-bottom: 2%;
  margin-top: 3%;
  /* border: 1px solid #051994; */
}
.input_style .el-input__inner {
  border: 1px solid #051994;
  border-radius: 0px;
  background-color: transparent;
}
.login_style {
  width: 50%;
  margin-left: 28%;
  margin-top: 2%;
}
.el-button {
  border-radius: 0px;
  background: #051994;
  border: 0px;
  color: #9ba1b2;
}
.err-msg {
  color: crimson;
  font-size: 0.1rem;
}
.enter_style{
  color: #1834ec;
  font-size: 0.2rem;
  cursor: pointer;
}
</style>