<template>
  <div class="page">
    <h3 class="title">校园疫情系统登录</h3>
    <div class="login">
      <h3 class="title_2">用户登录</h3>
      <div>
        <i class="iconfont icon-yonghuming1"></i>
        <el-input placeholder="请输入用户名"
                  v-model="name"
                  clearable
                  class="input_style"></el-input>
        <span v-if="error.name"
              class="err-msg">{{error.name}}</span>
      </div>
      <div>
        <i class="iconfont icon-mima"></i>
        <el-input placeholder="请输入密码"
                  v-model="pwd"
                  show-password
                  class="input_style"></el-input>
        <span v-if="error.pwd"
              class="err-msg">{{error.pwd}}</span>
      </div>
      <div class="login_style">
        <el-button @click="toindex"
                   style="width:47%">返回主页</el-button>
        <el-button @click="login"
                   style="width:48%">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      name: "",
      pwd: "",
      error: {
        name: "",
        pwd: ""
      }
    };
  },
  mounted () {
  },
  methods: {
    check (name, pwd) {
      if (!name) {
        this.error.name = "请输入姓名";
        return false;
      }
      if (!pwd) {
        this.error.pwd = "请输入密码";
        return false;
      }
    },
    toindex () {
      this.$router.push({ path: "/" });
    },
    login () {
      if (!window.localStorage) {
        alert("浏览器不支持localStorage");
      } else {
        var storage = window.localStorage;

        var self = this;
        self.$http
          .get(this.baseUrl + "/teacher/teacherLogin", {
            params: {
              teacher_id: self.name,
              password: self.pwd
            }
          })
          .then(function (response) {
            var res = response.data;
            storage.setItem("res", res);
            if (res == "存在") {
              self.$router.push({ name: "studentstrajectory" });
            } else {
              alert("用户名或密码错误");
            }
          });
      }
    }
  }
};
</script>

<style>
.page {
  width: 50%;
  margin: 0 auto;
  height: 11rem;
}
.title {
  width: 100%;
  height: 1rem;
  float: left;
  text-align: center;
  font-size: 0.4rem;
  margin-top: 3rem;
  color: #9ba1b2;
}
.title_2 {
  text-align: center;
  font-size: 0.3rem;
  color: #9ba1b2;
}
.login {
  width: 100%;
  height: 4rem;
  padding: 0.5rem;
  float: left;
  background: rgba(0, 0, 0, 0.5);
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
  margin: 0 auto;
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
.page p {
  font-size: 0.2rem;
}
.el-input__inner {
  color: #fff;
}
</style>