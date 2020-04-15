<template>
  <div class="trajectory">
    <Header></Header>
    <h3 class="title_3">学生轨迹查询</h3>
    <div class="checkform">
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="学生学号">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-col :span="11">
            <el-form-item prop="starttime">
              <el-date-picker
                type="datetime"
                v-model="ruleForm.starttime"
                style="width: 100%;"
                value-format="yyyy-MM-dd HH:mm:ss"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="0.5">—</el-col>
          <el-col :span="11">
            <el-form-item prop="endtime">
              <el-date-picker
                type="datetime"
                v-model="ruleForm.endtime"
                style="width: 100%;"
                value-format="yyyy-MM-dd HH:mm:ss"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button class="checksearch" @click="submitForm('ruleForm')">查询</el-button>
          <el-button class="checksearch" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="stuinfos">
      <div class="boxall" style="height: 4rem">
        <div class="allnav">
          <!-- 搜索学生信息 -->
          <div class="studentInfo">
            <span><span class="font_style">学号为</span>{{this.ruleForm.xuehao}}</span>
            <span><span class="font_style">,同学</span>{{this.ruleForm.student}}</span>
            <span>{{this.ruleForm.day}}<span class="font_style">日行程如下：</span></span>
          </div>
          <!--时间线-->
          <div class="timeLine">
            <div class="ul_box">
              <ul class="my_timeline">
                <li class="my_timeline_item" v-for="(item,index) in timeLineList" :key="index">
                  <!--圈圈节点-->
                  <div
                    class="my_timeline_node"
                    @click="changeActive(index)"
                    :class="{active: index == timeIndex}"
                  ></div>
                  <!--线-->
                  <div class="my_timeline_item_line"></div>
                  <!--标注-->
                  <div class="my_timeline_item_content_2">{{item.city}}{{item.tem}}</div>
                  <div class="my_timeline_item_content">{{item.timestamp}}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="boxfoot"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header";
export default {
  data() {
    return {
      ruleForm: {
        name: "1924031116",
        starttime: "2020-04-01 00:00:00",
        endtime: "2020-04-13 24:00:00",
        xuehao: "",
        student: "",
        day: ""
      },
      timeIndex: 2,
      timeLineList: []
    };
  },
  components: {
    Header
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var self = this;
          self.$http
            .get(this.baseUrl + "/teacher/getStudentTrip", {
              params: {
                endtime: self.ruleForm.endtime,
                sId: self.ruleForm.name,
                starttime: self.ruleForm.starttime,
              }
            })
            .then(function(response) {
              var res = response.data[0].result;
              self.ruleForm.xuehao = res[0].sid;
              self.ruleForm.student = res[0].sname;
              self.ruleForm.day = res.length+1;
              // console.log(res[0].sid);
              // console.log(self.ruleForm.endtime);
              // console.log(res.length);
              for(var i=0;i<res.length;i++){
                self.timeLineList.push({
                  timestamp:res[i].upTime.slice(6,7)+"月"+res[i].upTime.slice(9,10)+"日",
                  tem:res[i].temperature,
                  city:res[i].locationCity+"市"
                })
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    changeActive(index) {
      this.timeIndex = index;
    }
  }
};
</script>
<style>
.trajectory {
  position: absolute;
  width: 100%;
  height: 100%;
}
.checkform {
  position: absolute;
  width: 40%;
  height: 30%;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  margin-left: 30%;
  margin-top: -1.5%;
  /* margin-bottom: 3%; */
}
.title_3 {
  text-align: center;
  font-size: 0.4rem;
  margin-bottom: 2%;
  padding-top: 1%;
  color: #9ba1b2;
}
.el-input__inner {
  border: 1px solid #051994;
  border-radius: 0px;
  background-color: transparent;
}
.el-form-item__label {
  text-align: right;
  color: #9ba1b2;
}
.checksearch {
  margin-left: 25%;
  margin-top: 1%;
}
.line {
  color: #051994;
}
.el-button:nth-child(1) {
  border-radius: 0px;
  background: #051994;
  border: 0px;
  color: #9ba1b2;
}
.el-button:nth-child(2) {
  border-radius: 0px;
  border: 0px;
  color: #9ba1b2;
}
.stuinfos {
  position: absolute;
  width: 50%;
  height: 5%;
  margin-top: 22%;
  margin-left: 25%;
}
.ul_box {
  width: 100%;
  height: auto;
  display: inline-block;
  float: left;
  margin-top: 2%;
  /* overflow: auto; */
}
.my_timeline li {
  width: 10%;
  height: 1rem;
  margin-top: 3%;
}
.my_timeline_item {
  display: inline-block;
  width: 20%;
  margin-left: 2%;
}
.my_timeline_node {
  /* box-sizing: border-box; */
  width: 30%;
  height: 30%;
  border-radius: 50%;
  background-color: #87fe02;
  cursor: pointer;
}
.my_timeline_node.active {
  /* background-color: #ff0000 !important; */
  /* border: 3px solid #f68720; */
}
.my_timeline_item_line {
  width: 100%;
  height: 0.06rem;
  margin: -12% 0 0 35%;
  border-top: 1px solid #ffffff;
  border-left: none;
}
.my_timeline_item_content {
  color: aqua;
  font-size: 0.15rem;
  margin: 30px 0 0 1px;
}
.my_timeline_item_content_2 {
  width: 100%;
  color: aqua;
  font-size: 0.15rem;
  margin: -40px 0 0 0;
}
.studentInfo {
  color: aqua;
  font-size: 0.25rem;
  /* padding-top: 2%; */
  /* margin-top: -5%; */
  margin-bottom: 2%;
}
.font_style{
  color: #ffffff;
}
</style>