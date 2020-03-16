<template>
  <div>
    <Header></Header>
    <div class="mainbox">
      <ul class="clearfix">
        <li class="titles" style="width: 100%;height: 0.7rem;float:left">
          <div class="title alltitle" style="margin-left:11%">口罩检测</div>
          <div class="depSelect alltitle">
            <el-dropdown @command="changeDep">
              <span class="el-dropdown-link">
                请选择
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="rw">软件与服务外包学院</el-dropdown-item>
                <el-dropdown-item command="jm">精密制造工程系</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            当前系部：{{this.current.dep}}
          </div>
          <div class="title alltitle" style="margin-right:8%">人脸识别</div>
        </li>

        <li style="width: 45%;height: 9.4rem;margin:0 2.4%">
          <div class="videoBox" style="height: 6.4rem;margin:0.1rem 0">
            <video-player
              class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :options="playerOptionsKZJC"
            ></video-player>
          </div>

          <div class="maskImg boxall" style="height: 2.2rem;margin-top:0.3rem">
            <img :src="staticUrl2 + item.img" v-for="item in this.noMask" :key="item.title" />
            <div class="boxfoot"></div>
          </div>
        </li>
        <div class="center" style="width:1px;"></div>
        <li style="width:45%;height: 9.4rem;margin:0 2.4%;padding:0">
          <div class="videoBox" style="height: 6.4rem;margin:0.1rem 0">
            <video-player
              class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :options="playerOptionsRLSB"
            ></video-player>
          </div>

          <div class="info boxall" style="height: 2.2rem;margin-top:0.4rem">
            <div id="result">
              <div id="inresult">
                <div id="inresult1">
                  <div class="resultBorder" v-for="item in this.result" :key="item.name">
                    <div class="resultImg">
                      <img :src="item.imgsrc" alt width="100%" height="100%" />
                    </div>
                    <div class="resultText">
                      姓名：{{item.name}}
                      <br />
                      当前体温：{{item.tem}}℃
                      <br />系别：
                      <br />
                      {{item.department}}
                      <br />班级：
                      <br />
                      {{item.class}}
                    </div>
                  </div>
                </div>
                <div id="inresult2">
                  <div class="resultBorder" v-for="item in this.result" :key="item.name">
                    <div class="resultImg">
                      <img :src="item.imgsrc" alt width="100%" height="100%" />
                    </div>
                    <div class="resultText">
                      姓名：{{item.name}}
                      <br />
                      当前体温：{{item.tem}}℃
                      <br />系别：
                      <br />
                      {{item.department}}
                      <br />班级：
                      <br />
                      {{item.class}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="back"></div>
  </div>
</template>
<script>
import echarts from "echarts";
import "videojs-flash";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
import { videoPlayer } from "vue-video-player";
import Header from "@/components/header";
import axios from "axios";

export default {
  data() {
    return {
      //口罩检测
      playerOptionsKZJC: {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "15:11", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        techOrder: ["flash", "html5"], // 兼容顺序
        flash: {
          hls: { withCredentials: false },
          swf: "static/video-js.swf" // 引入静态文件swf
        },
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            // 流配置，数组形式，会根据兼容顺序自动切换
            type: "rtmp/mp4",
            src: "rtmp://139.224.68.139:1935/play/mask.mp4"
          }
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: false
      },
      //人脸识别
      playerOptionsRLSB: {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "15:11", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        techOrder: ["flash", "html5"], // 兼容顺序
        flash: {
          hls: { withCredentials: false },
          swf: "static/video-js.swf" // 引入静态文件swf
        },
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            // 流配置，数组形式，会根据兼容顺序自动切换
            type: "rtmp/mp4",
            src: "rtmp://139.224.68.139:1935/play/mask.mp4"
          }
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: false
      },
      //未带口罩列表
      noMask: [],
      //定时器名称
      timer: null,
      result: [
        {
          imgsrc: "static/img/人脸识别1.png",
          name: "张xx",
          tem: 36.8,
          department: "软件与服务外包学院",
          class: "软件18C2"
        },
        {
          imgsrc: "static/img/人脸识别2.png",
          name: "陈xx",
          tem: 36.8,
          department: "软件与服务外包学院",
          class: "软件18C1"
        },
        {
          imgsrc: "static/img/人脸识别3.png",
          name: "吴xx",
          tem: 36.8,
          department: "建筑工程与艺术系",
          class: "造价18C1"
        },
        {
          imgsrc: "static/img/人脸识别4.png",
          name: "王xx",
          tem: 36.8,
          department: "精密制造工程系",
          class: "xxxx"
        }
      ],

      current: {
        dep: "软件与服务外包学院"
      },
      rw: {
        KZsrc: "rtmp://139.224.68.139:1935/play/mask.mp4",
        RLsrc: "rtmp://139.224.68.139:1935/play/mask.mp4",
        noMaskList: [],
        result: [
          {
            imgsrc: "static/img/人脸识别1.png",
            name: "张xx",
            tem: 36.8,
            department: "软件与服务外包学院",
            class: "软件18C2"
          },
          {
            imgsrc: "static/img/人脸识别2.png",
            name: "陈xx",
            tem: 36.8,
            department: "软件与服务外包学院",
            class: "软件18C1"
          },
          {
            imgsrc: "static/img/人脸识别3.png",
            name: "吴xx",
            tem: 36.8,
            department: "建筑工程与艺术系",
            class: "造价18C1"
          },
          {
            imgsrc: "static/img/人脸识别4.png",
            name: "王xx",
            tem: 36.8,
            department: "精密制造工程系",
            class: "xxxx"
          }
        ]
      },
      jm: {
        KZsrc: "rtmp://202.69.69.180:443/webcast/bshdlive-pc",
        RLsrc: "rtmp://202.69.69.180:443/webcast/bshdlive-pc",
        noMaskList: [],
        result: [
          {
            imgsrc: "static/img/人脸识别5.png",
            name: "李xx",
            tem: 36.8,
            department: "xxxxxxxxx",
            class: "xxxxxx"
          },
          {
            imgsrc: "static/img/人脸识别6.png",
            name: "刘xx",
            tem: 36.8,
            department: "xxxxxxxx",
            class: "xxxx"
          },
          {
            imgsrc: "static/img/人脸识别7.png",
            name: "孙xx",
            tem: 36.8,
            department: "xxxxxxx",
            class: "xxxxxx"
          },
          {
            imgsrc: "static/img/人脸识别8.png",
            name: "钱xx",
            tem: 36.8,
            department: "xxxxxxx",
            class: "xxxx"
          }
        ]
      }
    };
  },
  components: {
    Header,
    videoPlayer
  },
  created() {
    //获取未带口罩图片
    this.noMaskList();
  },
  mounted() {
    //play实现图片自动滚动
    this.play();
    this.gundongRes();
    // this.speak('测试');
  },
  methods: {
    //获取未带口罩图片
    noMaskList() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/pictures/selectByType?type=3")
        .then(function(response) {
          var res = response.data;
          self.noMask = res;
          self.rw.noMaskList = res;
          self.jm.noMaskList = res;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //play实现图片自动滚动
    play() {
      this.timer = setInterval(this.gundongNomask, 1500);
    },
    gundongNomask() {
      this.noMask.push(this.noMask[0]);
      this.noMask.shift();
    },
    gundongRes() {
      var speed = 12;
      var tab = document.getElementById("result");
      var tab1 = document.getElementById("inresult1");
      var tab2 = document.getElementById("inresult2");
      //   tab2.innerHTML = tab1.innerHTML;
      function Marquee() {
        if (tab2.offsetWidth - tab.scrollLeft <= 0) {
          tab.scrollLeft -= tab1.offsetWidth;
        } else {
          tab.scrollLeft++;
        }
      }
      var MyMar = setInterval(Marquee, speed);
      tab.onmouseover = function() {
        clearInterval(MyMar);
      };
      tab.onmouseout = function() {
        MyMar = setInterval(Marquee, speed);
      };
    },

    //调用百度api接口实现文字合成语音的方法
    speak(str) {
      var url =
        "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&vol=15&per=3&spd=6&text=" +
        encodeURI(str);
      var n = new Audio(url);
      n.src = url;
      if (str) {
        n.play();
      } else {
        n.pause();
      }
    },
    //切换页面数据
    changeDep(command) {
      switch (command) {
        case "rw":
          this.current.dep = "软件与服务外包学院";

          this.playerOptionsKZJC["sources"][0]["src"] = this.rw.KZsrc;
          console.log(this.playerOptionsKZJC);
          this.playerOptionsRLSB["sources"][0]["src"] = this.rw.RLsrc;
          console.log(this.playerOptionsRLSB);
          this.noMask = this.rw.noMaskList;
          console.log(this.noMask);
          this.result = this.rw.result;
          console.log(this.result);
          break;
        case "jm":
          this.current.dep = "精密制造工程系";

          this.playerOptionsKZJC["sources"][0]["src"] = this.jm.KZsrc;
          console.log(this.playerOptionsKZJC);
          this.playerOptionsRLSB["sources"][0]["src"] = this.jm.RLsrc;
          console.log(this.playerOptionsRLSB);
          this.noMask = this.jm.noMaskList;
          console.log(this.noMask);
          this.result = this.jm.result;
          console.log(this.result);
          break;

          console.log(this.result);
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer); // 清除定时器
    this.timer = null;
  }
};
</script>
<style lang="less" >
.maskVideo {
  width: 100%;
  height: 100%;
  float: left;
}
.maskImg {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
}
.maskImg img {
  height: 100%;
  width: 25%;
}

#result {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
#inresult {
  float: left;
  width: 610%;
  height: 100%;
}

#inresult1 {
  float: left;
  height: 100%;
  width: 25%;
}

#inresult2 {
  float: left;
  height: 100%;
  width: 25%;
}
.resultBorder {
  width: 24%;
  height: 100%;
  margin-right: 1%;
  float: left;
  background: rgba(16, 54, 87, 0.4);
  border: 1px solid #345f92;
}
.resultImg {
  width: 50%;
  height: 100%;
  float: left;
}
.resultText {
  width: 50%;
  height: 100%;
  padding: 8% 1%;
  float: left;
  font-size: 0.16rem;
  color: #00c4ca;
}
.center {
  float: left;
  height: 8rem;
  margin-top: 1rem;
  background-color: rgba(63, 152, 160, 0.6);
}
.titles {
  float: left;
}
.title {
  width: 28%;
  height: 100%;
  padding-top: 0.1rem;
  float: left;
}
.depSelect {
  width: 22%;
  height: 100%;
  padding-top: 0.1rem;
  float: left;
}
.el-dropdown-link {
  cursor: pointer;
  color: #1bb4f6;
  font-size: 0.2rem;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>