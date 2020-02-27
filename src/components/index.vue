<template>
  <div>
    <div class="canvas" style="opacity: .2">
      <canvas id="canv" width="1920" height="572"></canvas>
    </div>
    <Header></Header>
    <div class="mainbox">
      <ul class="clearfix">
        <li>
          <div class="boxall" style="height: 3.7rem">
            <div class="alltitle">模块标题样式</div>
            <div class="allnav" id="echart1">
              <video-player
                class="video-player vjs-custom-skin"
                ref="videoPlayer1"
                :options="playerOptions1"
              ></video-player>
            </div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 1.2rem">
            <!-- <div class="alltitle">未带口罩人员截图区域</div> -->
            <div class="allnav" id="echart2" style="padding:12px 0px;">
              <img src="../assets/picture/未带口罩.png" alt style="width:calc(100% / 6 - 3px)" />
              <img src="../assets/picture/未带口罩.png" alt style="width:calc(100% / 6 - 3px)" />
              <img src="../assets/picture/未带口罩.png" alt style="width:calc(100% / 6 - 3px)" />
              <img src="../assets/picture/未带口罩.png" alt style="width:calc(100% / 6 - 3px)" />
              <img src="../assets/picture/未带口罩.png" alt style="width:calc(100% / 6 - 3px)" />
              <img src="../assets/picture/未带口罩.png" alt style="width:calc(100% / 6 - 3px)" />
            </div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 4.7rem;">
            <div class="alltitle">模块标题样式</div>
            <div class="allnav" id="echart3">
              <el-tabs v-model="activeName" @tab-click="handleClick" class="tab">
                <el-tab-pane label="热搜" name="first">热搜</el-tab-pane>
                <el-tab-pane label="知识" name="second">知识</el-tab-pane>
                <el-tab-pane label="辟谣" name="third">辟谣</el-tab-pane>
              </el-tabs>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
        <li>
          <div class="bar">
            <div class="barbox">
              <ul class="clearfix">
                <li class="pulll_left counter">{{ statistics.sumAll }}</li>
                <li class="pulll_left counter">{{ statistics. sumHever}}</li>
                <li class="pulll_left counter">{{ statistics.sumIsolated }}</li>
              </ul>
            </div>
            <div class="barbox2">
              <ul class="clearfix">
                <li class="pulll_left">系部人数</li>
                <li class="pulll_left">发烧人数</li>
                <li class="pulll_left">隔离人数</li>
              </ul>
            </div>
          </div>
          <div class="map">
            <div class="map4" id="map_1"></div>
          </div>
          <div class="boxallcard" style="height: 2.6rem">
            <!-- <div class="alltitle">停课不停学图片走马灯卡片式轮播</div> -->
            <div class="allnav" id="echart5">
              <el-carousel :interval="2000" type="card" height="2rem">
                <el-carousel-item v-for="item in this.img_list" :key="item.img">
                  <img :src="staticUrl+'/img/'+ item.img" />
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="boxfootcard"></div>
          </div>
        </li>
        <li>
          <div class="boxall" style="height:3.7rem">
            <div class="alltitle">防疫宣传视频</div>
            <div class="allnav" id="echart4">
              <video-player
                class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :options="playerOptions2"
              ></video-player>
            </div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxallinfo" style="height: 3.2rem">
            <!-- <div class="alltitle">模块标题样式</div> -->
            <div class="allnav" id="echart5">
              <el-table
                :data="stuInfo"
                stripe
                style="width: 100%;font-size: 10px"
                :row-style="{height:'0.4rem'}"
                :cell-style="{padding:'0px'}"
              >
                >
                <el-table-column prop="name" label="姓名" width="90"></el-table-column>
                <el-table-column prop="class" label="班级" width="100"></el-table-column>
                <el-table-column prop="tem" label="体温" width="70"></el-table-column>
                <el-table-column prop="status" label="状态"></el-table-column>
                <el-table-column prop="address" label="隔离地点"></el-table-column>
              </el-table>
            </div>
            <div class="boxfootinfo"></div>
          </div>
          <div class="boxall" style="height: 2.7rem">
            <div class="alltitle">模块标题样式</div>
            <div class="allnav" id="echart6"></div>
            <div class="boxfoot"></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="back"></div>
  </div>
</template>

<script>
import "videojs-flash";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
import { videoPlayer } from "vue-video-player";
import Header from "@/components/header";
export default {
  data() {
    return {
      staticUrl: this.staticUrl,
      activeName: "first",
      statistics: {
        sumAll: 0,
        sumIsolated: 0,
        sumHever: 0
      },
      //轮播图图片
      img_list: [],
      // 图片父容器高度
      bannerHeight: 1000,
      // 浏览器宽度
      screenWidth: 0,
      playerOptions1: {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        techOrder: ["flash", "html5"], // 兼容顺序
        flash: {
          hls: { withCredentials: false },
          swf: "../../static/video-js.swf" // 引入静态文件swf
        },
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            // 流配置，数组形式，会根据兼容顺序自动切换
            type: "rtmp/hls",
            src: "rtmp://58.200.131.2:1935/livetv/hunantv"
          }
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      },
      playerOptions2: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        techOrder: ["flash", "html5"], // 兼容顺序
        flash: {
          hls: { withCredentials: false },
          swf: "../../static/video-js.swf" // 引入静态文件swf
        },
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            // 流配置，数组形式，会根据兼容顺序自动切换
            type: "video/mp4",
            src: this.staticUrl + "/video/fangyishipin.mp4" //url地址
          }
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      },
      //学生总人数
      data_alllist: [],
      //学生隔离人数
      data_gelilist: [],
      //学生发烧人数
      data_fashaolist: [],
      //重点关注学生信息
      stuInfo: []
    };
  },
  components: {
    Header,
    videoPlayer
  },
  created() {
    //学生隔离人数
    this.insulateNum();
    //学生发烧人数
    this.feverNum();
    //表格自动滚动
    //this.play();
  },
  mounted() {
    this.$refs.videoPlayer.player.play();
    this.$refs.videoPlayer1.player.play();
    // 宏观统计 总人数、隔离人数、发烧人数
    this.initSum();
    this.resizeFontsize();
    //改变横屏竖屏执行效果更换
    window.addEventListener("orientationchange", this.resizeFontsize());
    //改变手机大小执行效果更换
    window.addEventListener("resize", this.resizeFontsize());
    this.map();
    this.canves();
    //学生各省物理分布人数
    this.allNum();
    //轮播图
    this.slideShow();
    //重点关注学生
    this.focusStu();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleClick2(row) {
      alert(row);
    },
    setSize: function() {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = (400 / 1920) * this.screenWidth;
    },
    initSum() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/dayrpt/sum")
        .then(function(response) {
          var res = response.data;
          self.statistics.sumAll = res.sum;
          self.statistics.sumIsolated = res.sumisolated;
          self.statistics.sumHever = res.sumhever;
          // window.location.reload();
        })
        .catch(function(error) {
          console.log(error);
          // window.location.reload();
        });
    },
    slideShow() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/pictures/selectByType?type=1")
        .then(function(response) {
          var res = response.data;
          self.img_list = res;
        })
        .catch(function(error) {
          console.log(error);
          // window.location.reload();
        });
    },
    allNum() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/dayrpt/getStuInProvince")
        .then(function(response) {
          var dd = [];
          var res = response.data;
          // console.log(res);      *****
          for (var i = 0; i < res.length; i++) {
            dd.push({
              name: res[i].location_province,
              value: res[i].count
            });
          }
          self.map(dd);
        });
    },
    insulateNum() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/dayrpt/getStuIsolatedInProvince")
        .then(function(response) {
          var res = response.data;
          self.data_gelilist = res;
        });
    },
    feverNum() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/dayrpt/getStuHotInProvince")
        .then(function(response) {
          var res = response.data;
          self.data_fashaolist = res;
          // console.log(res);
        });
    },
    resizeFontsize() {
      var width = document.documentElement.clientWidth;
      document.documentElement.style.fontSize = width / 20 + "px";
      //width/(效果图片宽度/文本字体大小(100))
    },
    map(datalist) {
      var myChart = this.$echarts.init(document.getElementById("map_1"));

      var geoCoordMap = {};
      var mapFeatures = this.$echarts.getMap("china").geoJson.features;
      mapFeatures.forEach(function(v) {
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;
      });
      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].location_province];
          if (geoCoord) {
            res.push({
              name: data[i].location_province,
              value: geoCoord.concat(data[i].count)
            });
          }
        }
        return res;
      };
      var option = {
        title: {
          text: "学生地理分布",
          subtext: "数据来源 苏工院",
          sublink: "#",
          left: "center",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            if (typeof params.value[2] == "undefined") {
              return (
                option.series[0].name +
                "<br/>" +
                params.name +
                " : " +
                params.value
              );
            } else {
              return params.name + " : " + params.value[2];
            }
          }
        },
        legend: {
          data: ["隔离人数", "发烧人数"],
          icon: "pin", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，
          orient: "vertical",
          right: "28%",
          bottom: "40%",
          textStyle: {
            color: "#fff"
          }
        },
        //是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
        visualMap: {
          show: false,
          min: 0, //最小值
          max: 100, //最大值
          left: "25%",
          bottom: "5%",
          calculable: true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
          seriesIndex: [0], //不会覆盖其他type颜色
          inRange: {
            color: ["#edfbfb", "#b7d6f3", "#40a9ed", "#3598c1", "#215096"] //颜色
          },
          textStyle: {
            color: "#fff"
          }
        },
        geo: {
          map: "china",
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: "#4c60ff",
              borderColor: "#002097"
            },
            emphasis: {
              areaColor: "#293fff"
            }
          }
        },
        series: [
          {
            name: "学生人数",
            type: "map",
            geoIndex: 0,
            showLegendSymbol: false,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#3B5077"
              },
              emphasis: {
                areaColor: "#2B91B7"
              }
            },
            animation: false,
            data: datalist
          },
          {
            name: "隔离人数",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin", //气泡
            symbolSize: 30,
            label: {
              normal: {
                show: false,
                textStyle: {
                  color: "#fff",
                  fontSize: 9
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#FF5000" //标志颜色
              }
            },
            zlevel: 6,
            data: convertData(this.data_gelilist)
          },
          {
            name: "发烧人数",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(this.data_fashaolist),
            symbolSize: 20,
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true,
                textStyle: {
                  color: "#fff"
                },
                backgroundColor: "rgba(0,0,0,0.5)"
              }
            },
            itemStyle: {
              show: true,
              normal: {
                color: "yellow",
                shadowBlur: 10,
                shadowColor: "yellow"
              }
            },
            zlevel: 1
          }
        ]
      };
      // console.log(convertData(this.data_fashaolist));
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    canves() {
      var num = 200;
      var w = window.innerWidth;
      var h = window.innerHeight;
      var max = 100;
      var _x = 0;
      var _y = 0;
      var _z = 150;
      var dtr = function(d) {
        return (d * Math.PI) / 180;
      };

      var rnd = function() {
        return Math.sin((Math.floor(Math.random() * 360) * Math.PI) / 180);
      };
      var dist = function(p1, p2, p3) {
        return Math.sqrt(
          Math.pow(p2.x - p1.x, 2) +
            Math.pow(p2.y - p1.y, 2) +
            Math.pow(p2.z - p1.z, 2)
        );
      };

      var cam = {
        obj: {
          x: _x,
          y: _y,
          z: _z
        },
        dest: {
          x: 0,
          y: 0,
          z: 1
        },
        dist: {
          x: 0,
          y: 0,
          z: 200
        },
        ang: {
          cplane: 0,
          splane: 0,
          ctheta: 0,
          stheta: 0
        },
        zoom: 1,
        disp: {
          x: w / 2,
          y: h / 2,
          z: 0
        },
        upd: function() {
          cam.dist.x = cam.dest.x - cam.obj.x;
          cam.dist.y = cam.dest.y - cam.obj.y;
          cam.dist.z = cam.dest.z - cam.obj.z;
          cam.ang.cplane =
            -cam.dist.z /
            Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z);
          cam.ang.splane =
            cam.dist.x /
            Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z);
          cam.ang.ctheta =
            Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z) /
            Math.sqrt(
              cam.dist.x * cam.dist.x +
                cam.dist.y * cam.dist.y +
                cam.dist.z * cam.dist.z
            );
          cam.ang.stheta =
            -cam.dist.y /
            Math.sqrt(
              cam.dist.x * cam.dist.x +
                cam.dist.y * cam.dist.y +
                cam.dist.z * cam.dist.z
            );
        }
      };

      var trans = {
        parts: {
          sz: function(p, sz) {
            return {
              x: p.x * sz.x,
              y: p.y * sz.y,
              z: p.z * sz.z
            };
          },
          rot: {
            x: function(p, rot) {
              return {
                x: p.x,
                y: p.y * Math.cos(dtr(rot.x)) - p.z * Math.sin(dtr(rot.x)),
                z: p.y * Math.sin(dtr(rot.x)) + p.z * Math.cos(dtr(rot.x))
              };
            },
            y: function(p, rot) {
              return {
                x: p.x * Math.cos(dtr(rot.y)) + p.z * Math.sin(dtr(rot.y)),
                y: p.y,
                z: -p.x * Math.sin(dtr(rot.y)) + p.z * Math.cos(dtr(rot.y))
              };
            },
            z: function(p, rot) {
              return {
                x: p.x * Math.cos(dtr(rot.z)) - p.y * Math.sin(dtr(rot.z)),
                y: p.x * Math.sin(dtr(rot.z)) + p.y * Math.cos(dtr(rot.z)),
                z: p.z
              };
            }
          },
          pos: function(p, pos) {
            return {
              x: p.x + pos.x,
              y: p.y + pos.y,
              z: p.z + pos.z
            };
          }
        },
        pov: {
          plane: function(p) {
            return {
              x: p.x * cam.ang.cplane + p.z * cam.ang.splane,
              y: p.y,
              z: p.x * -cam.ang.splane + p.z * cam.ang.cplane
            };
          },
          theta: function(p) {
            return {
              x: p.x,
              y: p.y * cam.ang.ctheta - p.z * cam.ang.stheta,
              z: p.y * cam.ang.stheta + p.z * cam.ang.ctheta
            };
          },
          set: function(p) {
            return {
              x: p.x - cam.obj.x,
              y: p.y - cam.obj.y,
              z: p.z - cam.obj.z
            };
          }
        },
        persp: function(p) {
          return {
            x: ((p.x * cam.dist.z) / p.z) * cam.zoom,
            y: ((p.y * cam.dist.z) / p.z) * cam.zoom,
            z: p.z * cam.zoom,
            p: cam.dist.z / p.z
          };
        },
        disp: function(p, disp) {
          return {
            x: p.x + disp.x,
            y: -p.y + disp.y,
            z: p.z + disp.z,
            p: p.p
          };
        },
        steps: function(_obj_, sz, rot, pos, disp) {
          var _args = trans.parts.sz(_obj_, sz);
          _args = trans.parts.rot.x(_args, rot);
          _args = trans.parts.rot.y(_args, rot);
          _args = trans.parts.rot.z(_args, rot);
          _args = trans.parts.pos(_args, pos);
          _args = trans.pov.plane(_args);
          _args = trans.pov.theta(_args);
          _args = trans.pov.set(_args);
          _args = trans.persp(_args);
          _args = trans.disp(_args, disp);
          return _args;
        }
      };

      (function() {
        "use strict";
        var threeD = function(param) {
          this.transIn = {};
          this.transOut = {};
          this.transIn.vtx = param.vtx;
          this.transIn.sz = param.sz;
          this.transIn.rot = param.rot;
          this.transIn.pos = param.pos;
        };

        threeD.prototype.vupd = function() {
          this.transOut = trans.steps(
            this.transIn.vtx,
            this.transIn.sz,
            this.transIn.rot,
            this.transIn.pos,
            cam.disp
          );
        };

        var Build = function() {
          this.vel = 0.04;
          this.lim = 360;
          this.diff = 200;
          this.initPos = 100;
          this.toX = _x;
          this.toY = _y;
          this.go();
        };

        Build.prototype.go = function() {
          this.canvas = document.getElementById("canv");
          this.canvas.width = window.innerWidth;
          this.canvas.height = window.innerHeight;
          this.$ = canv.getContext("2d");
          this.$.globalCompositeOperation = "source-over";
          this.varr = [];
          this.dist = [];
          this.calc = [];

          for (var i = 0, len = num; i < len; i++) {
            this.add();
          }

          this.rotObj = {
            x: 0,
            y: 0,
            z: 0
          };
          this.objSz = {
            x: w / 5,
            y: h / 5,
            z: w / 5
          };
        };

        Build.prototype.add = function() {
          this.varr.push(
            new threeD({
              vtx: {
                x: rnd(),
                y: rnd(),
                z: rnd()
              },
              sz: {
                x: 0,
                y: 0,
                z: 0
              },
              rot: {
                x: 20,
                y: -20,
                z: 0
              },
              pos: {
                x: this.diff * Math.sin((360 * Math.random() * Math.PI) / 180),
                y: this.diff * Math.sin((360 * Math.random() * Math.PI) / 180),
                z: this.diff * Math.sin((360 * Math.random() * Math.PI) / 180)
              }
            })
          );
          this.calc.push({
            x: 360 * Math.random(),
            y: 360 * Math.random(),
            z: 360 * Math.random()
          });
        };

        Build.prototype.upd = function() {
          cam.obj.x += (this.toX - cam.obj.x) * 0.05;
          cam.obj.y += (this.toY - cam.obj.y) * 0.05;
        };

        Build.prototype.draw = function() {
          this.$.clearRect(0, 0, this.canvas.width, this.canvas.height);
          cam.upd();
          this.rotObj.x += 0.1;
          this.rotObj.y += 0.1;
          this.rotObj.z += 0.1;

          for (var i = 0; i < this.varr.length; i++) {
            for (var val in this.calc[i]) {
              if (this.calc[i].hasOwnProperty(val)) {
                this.calc[i][val] += this.vel;
                if (this.calc[i][val] > this.lim) this.calc[i][val] = 0;
              }
            }

            this.varr[i].transIn.pos = {
              x: this.diff * Math.cos((this.calc[i].x * Math.PI) / 180),
              y: this.diff * Math.sin((this.calc[i].y * Math.PI) / 180),
              z: this.diff * Math.sin((this.calc[i].z * Math.PI) / 180)
            };
            this.varr[i].transIn.rot = this.rotObj;
            this.varr[i].transIn.sz = this.objSz;
            this.varr[i].vupd();
            if (this.varr[i].transOut.p < 0) continue;
            var g = this.$.createRadialGradient(
              this.varr[i].transOut.x,
              this.varr[i].transOut.y,
              this.varr[i].transOut.p,
              this.varr[i].transOut.x,
              this.varr[i].transOut.y,
              this.varr[i].transOut.p * 2
            );
            this.$.globalCompositeOperation = "lighter";
            g.addColorStop(0, "hsla(255, 255%, 255%, 1)");
            g.addColorStop(0.5, "hsla(" + (i + 2) + ",85%, 40%,1)");
            g.addColorStop(1, "hsla(" + i + ",85%, 40%,.5)");
            this.$.fillStyle = g;
            this.$.beginPath();
            this.$.arc(
              this.varr[i].transOut.x,
              this.varr[i].transOut.y,
              this.varr[i].transOut.p * 2,
              0,
              Math.PI * 2,
              false
            );
            this.$.fill();
            this.$.closePath();
          }
        };
        Build.prototype.anim = function() {
          window.requestAnimationFrame = (function() {
            return (
              window.requestAnimationFrame ||
              function(callback, element) {
                window.setTimeout(callback, 1000 / 60);
              }
            );
          })();
          var anim = function() {
            this.upd();
            this.draw();
            window.requestAnimationFrame(anim);
          }.bind(this);
          window.requestAnimationFrame(anim);
        };

        Build.prototype.run = function() {
          this.anim();

          window.addEventListener(
            "mousemove",
            function(e) {
              this.toX = (e.clientX - this.canvas.width / 2) * -0.8;
              this.toY = (e.clientY - this.canvas.height / 2) * 0.8;
            }.bind(this)
          );
          window.addEventListener(
            "touchmove",
            function(e) {
              e.preventDefault();
              this.toX = (e.touches[0].clientX - this.canvas.width / 2) * -0.8;
              this.toY = (e.touches[0].clientY - this.canvas.height / 2) * 0.8;
            }.bind(this)
          );
          window.addEventListener(
            "mousedown",
            function(e) {
              for (var i = 0; i < 100; i++) {
                this.add();
              }
            }.bind(this)
          );
          window.addEventListener(
            "touchstart",
            function(e) {
              e.preventDefault();
              for (var i = 0; i < 100; i++) {
                this.add();
              }
            }.bind(this)
          );
        };
        var app = new Build();
        app.run();
      })();
      window.addEventListener(
        "resize",
        function() {
          canvas.width = w = window.innerWidth;
          canvas.height = h = window.innerHeight;
        },
        false
      );
    },
    //change,play实现表格自动滚动
    // change(){
    //   //把第一条数据插入数组最后一条
    //   this.tableData.push(this.tableData[0]);
    //   //删除数组中第一条数据
    //   this.tableData.shift();
    // },
    // play(){
    //   //每两秒执行一次插入删除操作
    //   setInterval(this.change,1000);
    // },
    focusStu() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/dayrpt/getFocusStu")
        .then(function(response) {
          var dd = [];
          var res = response.data;
          self.stuInfo = dd;
          for (var i = 0; i < res.length; i++) {
            // 判断
            if (res[i].STATUS == "隔离") {
              if (res[i].quarantine == 0) {
                res[i].quarantine = "在家";
              } else {
                res[i].quarantine = "医院";
              }
            }else{
              res[i].quarantine = "";
            }
            dd.push({
              name: res[i].s_name,
              class: res[i].c_name,
              tem: res[i].temperature,
              status: res[i].STATUS,
              address: res[i].quarantine
            });
          }
        })
        .catch(function(error) {
          console.log(error);
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

<style lang="less" scoped>
.myvideo {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.tab {
  color: red;
}
</style>
