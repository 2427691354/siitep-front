<template>
  <div>
    <Header></Header>
    <div class="mainbox">
      <ul class="clearfix">
        <li style="width: 58%;height: 5.2rem">
          <div class="boxall" style="height: 5.2rem">
            <div class="alltitle" >口罩检测</div>
            <div class="allnav" style="padding-bottom:0.2rem">
              <div class="maskVideo">
                <video-player
                  class="video-player vjs-custom-skin"
                  ref="videoPlayer"
                  :options="playerOptionsKZJC"
                ></video-player>
              </div>
              <div class="maskImg maskBox">
                <img :src="staticUrl2 + item.img" v-for="item in this.noMask" :key="item.title" />
                <div class="maskboxfoot"></div>
              </div>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
        <li style="width:42%;height: 5.2rem">
          <div class="boxall" style="height: 5.2rem;">
            <div class="alltitle">人脸检测</div>
            <div class="allnav" style="padding-bottom:0.2rem">
              <video-player
                class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :options="playerOptionsRLJC"
              ></video-player>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
        <li style="width:100%;height: 4.5rem;padding-right:0;margin-top:0.15rem">
          <div class="boxall" style="height: 4.5rem;">
            <!-- <div class="alltitle">人脸识别</div> -->
            <div class="allnav" style="padding:0.2rem 0;height:100%">
              <div class="recognitionTitle">
                人
                <br />脸
                <br />识
                <br />别
              </div>
              <div class="recognitionVideo">
                <video-player
                  class="video-player vjs-custom-skin"
                  ref="videoPlayer"
                  :options="playerOptionsRLSB"
                ></video-player>
              </div>
              <div class="recognitionInfo">
                <div class="info maskBox" style="margin-bottom:4%">
                  <div id="result">
                    <div id="inresult">
                      <div id="inresult1">
                        <div class="resultBorder" v-for="item in this.result1" :key="item.name">
                          <div class="resultImg">
                            <img :src="item.imgsrc" alt width="100%" height="100%" />
                          </div>
                          <div class="resultText">
                            姓名：{{item.name}}
                            <br />系别：
                            <br />
                            {{item.department}}
                            <br />班级：
                            <br />
                            {{item.class}}
                          </div>
                        </div>
                      </div>
                      <div id="inresult2"></div>
                    </div>
                  </div>
                  <div class="maskboxfoot"></div>
                </div>
                <div class="info maskBox">
                  <div id="result_1">
                    <div id="inresult_1">
                      <div id="inresult1_1">
                        <div class="resultBorder_1" v-for="item in this.result2" :key="item.name">
                          <div class="resultImg_1">
                            <img :src="item.imgsrc" alt width="100%" height="100%" />
                          </div>
                          <div class="resultText_1">
                            姓名：{{item.name}}
                            <br />系别：
                            <br />
                            {{item.department}}
                            <br />班级：
                            <br />
                            {{item.class}}
                          </div>
                        </div>
                      </div>
                      <div id="inresult2_1"></div>
                    </div>
                  </div>
                  <div class="maskboxfoot"></div>
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
      //人脸检测
      playerOptionsRLJC: {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "30:17", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
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
      //口罩检测
      playerOptionsKZJC: {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "25:13", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
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
        aspectRatio: "25:13", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
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
      result1: [
        {
          imgsrc: "static/img/人脸识别1.png",
          name: "张xx",
          department: "软件与服务外包学院",
          class: "软件18C2"
        },
        {
          imgsrc: "static/img/人脸识别2.png",
          name: "陈xx",
          department: "软件与服务外包学院",
          class: "软件18C1"
        },
        {
          imgsrc: "static/img/人脸识别3.png",
          name: "吴xx",
          department: "建筑工程与艺术系",
          class: "造价18C1"
        },
        {
          imgsrc: "static/img/人脸识别4.png",
          name: "王xx",
          department: "精密制造工程系",
          class: "xxxx"
        }
      ],
      result2: [
        {
          imgsrc: "static/img/人脸识别5.png",
          name: "李xx",
          department: "xxxxxxxxx",
          class: "xxxxxx"
        },
        {
          imgsrc: "static/img/人脸识别6.png",
          name: "刘xx",
          department: "xxxxxxxx",
          class: "xxxx"
        },
        {
          imgsrc: "static/img/人脸识别7.png",
          name: "孙xx",
          department: "xxxxxxx",
          class: "xxxxxx"
        },
        {
          imgsrc: "static/img/人脸识别8.png",
          name: "钱xx",
          department: "xxxxxxx",
          class: "xxxx"
        }
      ]
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
    this.gundongRes_1();
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
      tab2.innerHTML = tab1.innerHTML;
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
    gundongRes_1() {
      var speed = 12;
      var tab = document.getElementById("result_1");
      var tab1 = document.getElementById("inresult1_1");
      var tab2 = document.getElementById("inresult2_1");
      tab2.innerHTML = tab1.innerHTML;
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
    speak(str){
        var url = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&vol=15&per=3&spd=6&text="+encodeURI(str);
        var n= new Audio(url);
        n.src = url;
        if(str){
            n.play();
        }else{
            n.pause();
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
  width: 80%;
  margin-right: 4%;
  height: 100%;
  float: left;
}
.maskImg {
  width: 15%;
  height: 98%;
  float: left;
  overflow: hidden;
}
.maskImg img {
  width: 100%;
  height: 25%;
}
.recognitionTitle {
  width: 3%;
  height: 100%;
  margin-right: 1%;
  float: left;
  font-size: 0.2rem;
  color: #fff;
  text-align: center;
  line-height: 0.5rem;
  padding: 0.9rem 0;
}
.recognitionVideo {
  width: 40%;
  margin-right: 2%;
  height: 99%;
  float: left;
}
.recognitionInfo {
  width: 53%;
  height: 99%;
  float: left;
}
.recognitionInfo .info {
  width: 100%;
  height: 45%;
}

#result,
#result_1 {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
#inresult,
#inresult_1 {
  float: left;
  width: 510%;
  height: 100%;
}

#inresult1,
#inresult1_1 {
  float: left;
  height: 100%;
  width: 25%;
}

#inresult2,
#inresult2_1 {
  float: left;
  height: 100%;
  width: 25%;
}
.resultBorder,
.resultBorder_1 {
  width: 24%;
  height: 100%;
  margin-right: 1%;
  float: left;
  background: rgba(16, 54, 87, 0.4);
  border: 1px solid #345f92;
}
.resultImg,
.resultImg_1 {
  width: 50%;
  height: 100%;
  float: left;
}
.resultText,
.resultText_1 {
  width: 50%;
  height: 100%;
  padding: 8% 1%;
  float: left;
  font-size: 0.16rem;
  color: #00c4ca;
}
</style>