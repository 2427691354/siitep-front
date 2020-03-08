<template>
  <div>
    <Header></Header>
    <div class="mainbox">
      <ul class="clearfix">
        <li style="width: 20%;">
          <div class="boxall" style="height: 3.7rem">
            <div class="alltitle">发烧/隔离人数趋势变化</div>
            <div id="all_Num"></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 2.9rem">
            <div class="alltitle">苏城码颜色占比</div>
            <div id="main8"></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 3.0rem;">
            <div class="alltitle">返校/返苏人数趋势变化</div>
            <div id="allLine"></div>
            <div class="boxfoot"></div>
          </div>
        </li>
        <li style="width: 50%;">
          <div class="boxall1" style="height: 1rem;">
            <!-- <div class="alltitle">宏观指标（全校人数 返校人数 隔离人数 今日检测人数）</div> -->
            <div class="barbox">
              <ul class="clearfix">
                <li
                  class="pulll_left counter"
                  style="width:30%;"
                >{{ statistics.sumAll }} - {{ statistics.sumAll }}</li>
                <li
                  class="pulll_left counter"
                  style="width:30%;"
                >{{ statistics.stuinJiang }} - {{ statistics.stuinSuzhou }}</li>
                <li class="pulll_left counter" style="width:10%;">{{ statistics.sumIsolated }}</li>
                <li class="pulll_left counter" style="width:30%;">
                  <div id="fashao"></div>
                </li>
              </ul>
            </div>
            <div class="barbox2">
              <ul class="clearfix">
                <li class="pulll_left" style="width:30%;">系部人数 - 上报人数</li>
                <li class="pulll_left" style="width:30%;">返校人数（江苏-苏州）</li>
                <li class="pulll_left" style="width:10%;">隔离人数</li>
                <li class="pulll_left" style="width:30%;">今日检测人数</li>
              </ul>
            </div>
            <!-- <div class="boxfoot"></div> -->
          </div>
          <div style="height: 6.5rem;padding:0rem;margin-bottom:0.15rem">
            <div class="allnav" style="height: 100%;" id="echart1">
              <div id="container" style="width:100%;height: 100%;resize:both;"></div>
            </div>
            <div class="boxfoot"></div>
          </div>

          <div class="boxall" style="height: 2.1rem;">
            <div class="alltitle1">辅导员信息</div>
            <div class="allnav">
              <div id="lunbo">
                <div id="inlunbo">
                  <div id="inlunbo1">
                    <div class="lunboborder">
                      <div class="lunboimg">
                        <img src="../assets/picture/辅导员 居老师.png" alt width="100%" height="100%" />
                      </div>
                      <div class="lunbotext">
                        居晓玮
                        <br />19级辅导员
                        <br />联系方式：
                        <br />188-xxxx-xxxx
                      </div>
                    </div>
                    <div class="lunboborder">
                      <div class="lunboimg">
                        <img src="../assets/picture/辅导员 韩老师.png" alt width="100%" height="100%" />
                      </div>
                      <div class="lunbotext">
                        韩雪芳
                        <br />19级辅导员
                        <br />联系方式：
                        <br />188-xxxx-xxxx
                      </div>
                    </div>
                    <div class="lunboborder">
                      <div class="lunboimg">
                        <img src="../assets/picture/辅导员 彭书记.png" alt width="100%" height="100%" />
                      </div>
                      <div class="lunbotext">
                        彭 薇
                        <br />18级辅导员
                        <br />联系方式：
                        <br />188-xxxx-xxxx
                      </div>
                    </div>
                    <div class="lunboborder">
                      <div class="lunboimg">
                        <img src="../assets/picture/辅导员 薛老师.png" alt width="100%" height="100%" />
                      </div>
                      <div class="lunbotext">
                        薛慧敏
                        <br />18级辅导员
                        <br />联系方式：
                        <br />188-xxxx-xxxx
                      </div>
                    </div>
                  </div>
                  <div id="inlunbo2">
                    <div class="lunboborder">
                      <div class="lunboimg">
                        <img src="../assets/picture/辅导员 居老师.png" alt width="100%" height="100%" />
                      </div>
                      <div class="lunbotext">
                        居晓玮
                        <br />19级辅导员
                        <br />联系方式：
                        <br />188-xxxx-xxxx
                      </div>
                    </div>
                    <div class="lunboborder">
                      <div class="lunboimg">
                        <img src="../assets/picture/辅导员 韩老师.png" alt width="100%" height="100%" />
                      </div>
                      <div class="lunbotext">
                        韩雪芳
                        <br />19级辅导员
                        <br />联系方式：
                        <br />188-xxxx-xxxx
                      </div>
                    </div>
                    <div class="lunboborder">
                      <div class="lunboimg">
                        <img src="../assets/picture/辅导员 彭书记.png" alt width="100%" height="100%" />
                      </div>
                      <div class="lunbotext">
                        彭 薇
                        <br />18级辅导员
                        <br />联系方式：
                        <br />188-xxxx-xxxx
                      </div>
                    </div>
                    <div class="lunboborder">
                      <div class="lunboimg">
                        <img src="../assets/picture/辅导员 薛老师.png" alt width="100%" height="100%" />
                      </div>
                      <div class="lunbotext">
                        薛慧敏
                        <br />18级辅导员
                        <br />联系方式：
                        <br />188-xxxx-xxxx
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
        <li style="width: 30%;">
          <div class="boxall" style="height: 3.7rem">
            <div class="alltitle">实时监控</div>
            <div class="jiankong">
              <video-player
                class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :options="playerOptions"
              ></video-player>
            </div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 1.2rem">
            <div id="demo">
              <div id="indemo">
                <div id="demo1">
                  <img :src="staticUrl2 + item.img" v-for="item in this.noMask" :key="item.title" />
                </div>
                <div id="demo2">
                  <img :src="staticUrl2  + item.img" v-for="item in this.noMask" :key="item.title" />
                </div>
              </div>
            </div>

            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 4.7rem;">
            <div class="alltitle">发烧学生信息表</div>
            <div class="allnav" style="height:4rem">
              <el-table
                :data="stuInfo"
                stripe
                style="font-size: 10%"
                :row-style="{ height: '0.4rem' }"
                :cell-style="{ padding: '0px' }"
              >
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="class" label="班级"></el-table-column>
                <el-table-column prop="tem" label="体温(℃)"></el-table-column>
                <el-table-column prop="status" label="状态"></el-table-column>
                <el-table-column prop="address" label="隔离地点"></el-table-column>
              </el-table>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
require("echarts-amap");
import Header from "@/components/header";
import "videojs-flash";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
import { videoPlayer } from "vue-video-player";
export default {
  data() {
    return {
      animate:false,
      staticUrl2: this.staticUrl2,
      noMask: [],
      noMaskCount: null,
      tianchouSrc: "rtmp://202.69.69.180:443/webcast/bshdlive-pc",
      tianzhangSrc: " rtmp://58.200.131.2:1935/livetv/hunantv",

      // "rtmp://202.69.69.180:443/webcast/bshdlive-pc",
      //视频流配置
      playerOptions: {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        isVideo: true, //强制刷新使用
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
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
            src: "rtmp://139.224.68.139:1935/play/mask.mp4" //默认播放地址
          }
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: false
      },
      Num_geli: [],
      Num_fashao: [],
      days2: [],

      Num_suzhou: [],
      Num_js: [],
      days: [],

      //重点关注学生信息
      stuInfo: [],

      //苏城码
      pingtai: [[12, 13, 11, 7, 9, 11, 4]],
      //宏观信息
      statistics: {
        sumAll: 0,
        sumIsolated: 0,
        sumHever: 0,
        stuinSuzhou: 0,
        stuinJiang: 0
      }
    };
  },
  components: {
    Header,
    videoPlayer
  },
  created() {
    //表格自动滚动
    this.play();
    // 获取未带口罩的图片
    this.noMaskList();
  },
  mounted() {
    this.mapInit();
    //隔离、发烧人数趋势
    this.trendNum();
    //返苏、在江苏人数趋势
    this.suzhouStu();
    //重点关注学生
    this.focusStu();
    //辅导员信息滚动
    this.gundong();
    //绘制雷达图
    this.drawLeida();
    // 宏观统计 总人数、隔离人数、发烧人数
    this.initSum();

    this.resizeFontsize();
    //改变横屏竖屏执行效果更换
    window.addEventListener("orientationchange", this.resizeFontsize());
    //改变手机大小执行效果更换
    window.addEventListener("resize", this.resizeFontsize());

    this.canves();
    
  },
  methods: {
    mapInit() {
      var self = this;
      var green = "#7ce757";
      var orange = "#ffb034";
      var blue = "#3fbeff";
      var red = "#db4d4c";
      var green = "green";
      var labelColor = "#e0e0e0";

      var buildingLayer = new AMap.Buildings({
        zIndex: 130,
        merge: false,
        sort: false,
        zooms: [17, 20]
      });
      var options = {
        hideWithoutStyle: false, //是否隐藏设定区域外的楼块
        areas: [
          {
            //围栏1
            //visible:false,//是否可见
            rejectTexture: true, //是否屏蔽自定义地图的纹理
            color1: "ffffff00", //楼顶颜色
            color2: "ffffcc00", //楼面颜色
            path: [
              [120.58580875, 31.22204565],
              [120.58564246, 31.22120155],
              [120.58474123, 31.22137129],
              [120.58494508, 31.22216492],
              [120.58573902, 31.22205941],
              [120.58584094, 31.22271083],
              [120.5832231, 31.22312369],
              [120.58272958, 31.22072904],
              [120.5895102, 31.21977941],
              [120.59088349, 31.21641666],
              [120.59431672, 31.21881143],
              [120.59343696, 31.22080244]
            ]
          },
          {
            //围栏2
            color1: "ff99ff00",
            color2: "ff999900",
            path: [
              [120.5883944, 31.21815081],
              [120.58918834, 31.21804071],
              [120.58939219, 31.21767369],
              [120.59003592, 31.2177838],
              [120.59078693, 31.21635243],
              [120.58990717, 31.21604964],
              [120.58959603, 31.21672863],
              [120.588094, 31.21708647]
            ]
          }
        ]
      };
      buildingLayer.setStyle(options); //此配色优先级高于自定义mapStyle

      var d = [
        {
          brakeType: "发烧",
          elevatorBrakeList: [
            {
              brakeCreateTime: "15:00:00",
              brakeStatus: "0",
              elevatorAddress: "小明",
              elevatorBrakeTypeName: "39",
              registerCode: "30101401852014050007",
              wbUnitName: "山西测试公司有限公司",
              wbUnitPhone: "18636671234"
            }
          ],
          housingAddress: "江苏省苏州市吴中区一川街",
          housingLatitude: "31.2201400000",
          housingLongitude: "120.5900800000",
          housingName: "天筹楼",
          wyUnitName: "山西测试公司有限公司",
          wyUnitPhone: "18935112562"
        },
        {
          brakeType: "正常",
          elevatorBrakeList: [
            // {
            //   brakeCreateTime: "15:00:00",
            //   brakeStatus: "0",
            //   elevatorAddress: "小红",
            //   elevatorBrakeTypeName: "40",
            //   registerCode: "30101401852014050007",
            //   wbUnitName: "山西测试公司有限公司",
            //   wbUnitPhone: "18636671234"
            // }
          ],
          housingAddress: "江苏省苏州市吴中区一川街",
          housingLatitude: "31.2211143900",
          housingLongitude: "120.5889523000",
          housingName: "天章楼",
          wyUnitName: "山西测试公司有限公司",
          wyUnitPhone: "18935112562"
        }
      ];

      var option = null;
      var data = [];
      var data1 = [];
      var geoCoordMap = {};
      for (var p = 0; p < d.length; p++) {
        var color = "";

        if (d[p].brakeType == "发烧") {
          data.push({
            name: d[p].housingName,
            // value: d[p].elevatorBrakeList.length,
            value: 700,
            color: red,
            obj: d[p]
          });
        } else {
          data1.push({
            name: d[p].housingName,
            value: 111,
            color: green,
            obj: d[p]
          });
        }

        var pos = bd_encrypt(
          parseFloat(d[p].housingLongitude),
          parseFloat(d[p].housingLatitude)
        );
        geoCoordMap[d[p].housingName] = [
          parseFloat(d[p].housingLongitude),
          parseFloat(d[p].housingLatitude)
        ];
      }
      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
              obj: data[i].obj,
              itemStyle: {
                color: data[i].color
              }
            });
          }
        }
        return res;
      };
      var myChart = echarts.init(document.getElementById("container"));
      myChart.setOption({
        backgroundColor: "rgba(0,0,0,0)", //canvas的背景颜色
        environment: "../images/bg.png", //背景星空图,
        amap: {
          zoom: 18,
          pitch: 50,
          showIndoorMap: false,
          showLabel: false,
          mapStyle: "amap://styles/24e255725cd0137d5466051262519fb4",
          // mapStyle: 'amap://styles/light',
          center: [120.58962822, 31.21960967],
          features: ["bg", "point", "road"],
          viewMode: "3D"

          // layers: [new AMap.TileLayer({}), buildingLayer]
        },
        animation: false,
        series: []
      });

      //上面的部分是echarts的配置，需要注意的是amap，这里的配置就是针对 高德地图 的配置了，而支持哪些配置
      //可以去高德地图的开发平台去查看
      var map = myChart
        .getModel()
        .getComponent("amap")
        .getAMap();
      var layer = myChart
        .getModel()
        .getComponent("amap")
        .getLayer();

      map.addControl(
        new AMap.ControlBar({
          showZoomBar: false, // 显示 zoom条控件
          // showControlButton:true,// 可以取消 倾斜旋转角度的按钮
          position: {
            //控件的定位
            right: "2%",
            top: "80%"
          }
        })
      );

      map.add(buildingLayer);
      new AMap.Polygon({
        bubble: true,
        fillOpacity: 0.4,
        strokeWeight: 1,
        path: options.areas[0].path,
        map: map
      });
      new AMap.Polygon({
        bubble: true,
        fillColor: "green",
        fillOpacity: 0.2,
        strokeWeight: 1,
        path: options.areas[1].path,
        map: map
      });

      AMap.event.addListener(map, "zoomend", function() {
        console.log("当前缩放级别：" + map.getZoom());
        console.log("俯视视角" + map.getPitch());
        console.log("俯视视角" + map.getPitch());
      });

      // AMap.event.addListener(map,'click',function (e) {
      //   //添加点击事件,传入对象名，事件名，回调函数
      //     // alert('click');
      //      console.log("x：" + e.lnglat.getLng());
      //      console.log("y：" + e.lnglat.getLat());
      //   })

      var series = [
        {
          type: "effectScatter",
          coordinateSystem: "amap",
          data: convertData(data),
          symbol: "image://static/img/ca_red.png",
          symbolSize: 5,
          showEffectOn: "render",
          rippleEffect: {
            period: 4,
            brushType: "fill",
            scale: 8
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: function(params) {
                if (params.data.obj.elevatorBrakeList.length > 0) {
                  // return (
                  //   "{fline| " +
                  //   params.data.name +
                  //   "} \n {tline| ! ! ! 检测到发烧人员 xxx" +
                  //   params.data.obj.elevatorBrakeList[0].elevatorAddress +
                  //   " ：" +
                  //   params.data.obj.elevatorBrakeList[0].elevatorBrakeTypeName +
                  //   " ℃} "
                  // );
                  return (
                    "{fline| " + params.data.name + "  ! ! ! 检测到发烧人员}"
                  );
                } else {
                  return (
                    "{fline| " +
                    params.data.name +
                    "} {tline|累计检测人数：" +
                    params.data.value[2] +
                    "} "
                  );
                }
              },
              position: "top",
              backgroundColor: red,
              padding: [0, 0],
              borderRadius: 3,
              lineHeight: 32,
              color: "#ffffff",
              rich: {
                fline: {
                  padding: [10, 10, 10, 10],
                  color: "#ffffff"
                },
                tline: {
                  padding: [10, 10, 10, 10],
                  color: "#ffffff"
                }
              },
              show: true
            }
          },
          zlevel: 1
        },
        {
          type: "scatter",
          coordinateSystem: "amap",
          data: convertData(data1),
          symbol: "image://static/img/ca_green.png",
          symbolSize: 20,
          showEffectOn: "render",
          rippleEffect: {
            period: 4,
            brushType: "fill",
            scale: 8
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: function(params) {
                return (
                  "{fline| " +
                  params.data.name +
                  " 累计检测人数：" +
                  params.data.value[2] +
                  "} "
                );
              },
              position: "top",
              backgroundColor: green,
              padding: [0, 0],
              borderRadius: 3,
              lineHeight: 32,
              color: "#ffffff",
              rich: {
                fline: {
                  padding: [10, 10, 10, 10],
                  color: "#ffffff"
                },
                tline: {
                  padding: [10, 10, 0, 10],
                  color: "#ffffff"
                }
              },
              show: true
            }
          },
          zlevel: 1
        }
      ];
      myChart.setOption({
        series: series
      });
      //点击散点切换视频流
      myChart.on("click", function(params) {
        console.log(params.name);
        //逻辑控制
        switch (params.name) {
          case "天筹楼":
            self.changeZhibosrc(self.tianchouSrc);
            break;
          case "天章楼":
            self.changeZhibosrc(self.tianzhangSrc);
            break;
          default:
            self.changeZhibosrc(self.tianchouSrc);
        }
      });

      //下面是确保高德地图渲染的时候，echarts同时也需要再次渲染一次，保持位置的同步
      layer.render = function() {
        myChart.setOption({
          series: series
        });
      };
      /**
       * 高德坐标转百度坐标
       * @param gg_lng
       * @param gg_lat
       * @returns {{bd_lat: number, bd_lng: number}}
       */
      function bd_encrypt(gg_lng, gg_lat) {
        var X_PI = (Math.PI * 3000.0) / 180.0;
        var x = gg_lng,
          y = gg_lat;
        var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * X_PI);
        var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * X_PI);
        var bd_lng = z * Math.cos(theta) + 0.0065;
        var bd_lat = z * Math.sin(theta) + 0.006;
        return {
          bd_lat: bd_lat,
          bd_lng: bd_lng
        };
      }
    },
    setSize: function() {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = (400 / 1920) * this.screenWidth;
    },
    changeZhibosrc(src) {
      this.playerOptions["sources"][0]["src"] = src;
    },
    trendNum() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/dayrpt/getFeverTrend")
        .then(function(response) {
          var res = response.data;
          for (var i = 0; i < res.length; i++) {
            self.Num_fashao.push(res[i].stuFeverTrend);
            self.days2.push(res[i].time.substring(6) + "日");
          }
          console.log(self.Num_fashao);
          self.totalNum();
        });

      self.$http
        .get(this.baseUrl + "/dayrpt/getStuIsolated")
        .then(function(response) {
          var res = response.data;
          for (var i = 0; i < res.length; i++) {
            self.Num_geli.push(res[i].stuFeverTrend);
          }
          self.totalNum();
        });
    },
    totalNum() {
      var myChart = echarts.init(document.getElementById("all_Num"));
      // Generate data
      var option = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255,255,255,0.1)",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              backgroundColor: "#7B7DDC"
            }
          }
        },
        legend: {
          data: ["隔离人数趋势", "发烧人数趋势"],
          textStyle: {
            color: "#B4B4B4"
          },
          top: "2%"
        },
        grid: {
          left: 0,
          right: "1%",
          top: "15%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: {
          data: this.days2,
          axisLine: {
            lineStyle: {
              color: "#03C5BC"
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#03C5BC"
              }
            },

            axisLabel: {
              formatter: "{value} "
            }
          }
          // {
          //   splitLine: { show: false },
          //   axisLine: {
          //     lineStyle: {
          //       color: "#03C5BC"
          //     }
          //   },
          //   axisLabel: {
          //     formatter: "{value} "
          //   }
          // }
        ],
        series: [
          {
            name: "隔离人数趋势",
            type: "line",
            stack: "总量",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#0092f6",
                lineStyle: {
                  color: "#0092f6",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(7,44,90,0.3)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,146,246,0.9)"
                    }
                  ])
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: "red"
                }
              }
            },
            data: this.Num_geli
          },

          {
            name: "发烧人数趋势",
            type: "line",
            stack: "总量",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#00d4c7",
                lineStyle: {
                  color: "#00d4c7",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(7,44,90,0.3)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,212,199,0.9)"
                    }
                  ])
                }
              }
            },
            data: this.Num_fashao
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    suzhouStu() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/dayrpt/getStuInSuZhou?province=江苏")
        .then(function(response) {
          var res = response.data;
          for (var i = 0; i < res.length; i++) {
            self.Num_js.push(res[i].stuinSuZhou);
          }
          self.stuInsz();
        });
      self.$http
        .get(this.baseUrl + "/dayrpt/getStuInSuZhou?city=苏州")
        .then(function(response) {
          var res = response.data;
          for (var i = 0; i < res.length; i++) {
            self.Num_suzhou.push(res[i].stuinSuZhou);
            self.days.push(res[i].time.substring(6) + "日");
          }
          self.stuInsz();
        });
    },
    stuInsz() {
      var myChart = echarts.init(document.getElementById("allLine"));
      var option = {
        tooltip: {
          //提示框组件
          trigger: "axis",
          formatter: "{b}<br />{a0}: {c0}<br />{a1}: {c1}",
          axisPointer: {
            type: "shadow",
            label: {
              backgroundColor: "#333"
            }
          },
          textStyle: {
            color: "#fff",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: "150%"
          }
        },
        grid: {
          left: 0,
          right: 0,
          top: "20%",
          bottom: "3%",
          // padding: "0 0 10 0",
          containLabel: true
        },
        legend: {
          data: ["苏州人数趋势", "江苏人数趋势"],
          textStyle: {
            color: "#B4B4B4"
          },
          top: "1%"
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true, //坐标轴两边留白
            data: this.days,
            axisLine: {
              lineStyle: {
                color: "#03C5BC"
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#03C5BC"
              }
            },

            axisLabel: {
              formatter: "{value} "
            }
          },
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#03C5BC"
              }
            },
            axisLabel: {
              formatter: "{value} "
            }
          }
        ],
        series: [
          {
            name: "苏州人数趋势",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 1,
                      color: "rgba(127, 128, 225, 0.7)"
                    },
                    {
                      offset: 0.9,
                      color: "rgba(72, 73, 181, 0.7)"
                    },
                    {
                      offset: 0.25,
                      color: "rgba(226, 99, 74, 0.7)"
                    },
                    {
                      offset: 0,
                      color: "rgba(253, 200, 106, 0.7)"
                    }
                  ],
                  false
                )
              }
            },
            data: this.Num_suzhou
          },
          {
            name: "江苏人数趋势",
            type: "bar",
            data: this.Num_js,
            yAxisIndex: 1,
            barWidth: 10,
            barGap: 0.5, //柱间距离
            label: {
              //图形上的文本标签
              normal: {
                show: false,
                position: "top",
                textStyle: {
                  color: "#a8aab0",
                  fontStyle: "normal",
                  fontFamily: "微软雅黑",
                  fontSize: "150%"
                }
              }
            },
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 1,
                      color: "rgba(127, 128, 225, 0.7)"
                    },
                    {
                      offset: 0.9,
                      color: "rgba(72, 73, 181, 0.7)"
                    },
                    {
                      offset: 0.31,
                      color: "rgba(0, 208, 208, 0.7)"
                    },
                    {
                      offset: 0.15,
                      color: "rgba(0, 208, 208, 0.7)"
                    },
                    {
                      offset: 0,
                      color: "rgba(104, 253, 255, 0.7)"
                    }
                  ],
                  false
                )
              }
            }
          }
        ]
      };

      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
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
            } else {
              res[i].quarantine = "无";
            }
            if (res[i].s_name[0] != "undefined") {
              res[i].s_name = res[i].s_name[0] + "**";
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
    },
    //change,play实现表格自动滚动
    change() {
      //把第一条数据插入数组最后一条
      this.stuInfo.push(this.stuInfo[0]);
      //删除数组中第一条数据
      this.stuInfo.shift();
    },
    play() {
      //每两秒执行一次插入删除操作
      setInterval(this.change, 1000);
      setInterval(this.gundong1, 500);
    },
    //辅导员信息滚动
    gundong() {
      var speed = 12;
      var tab = document.getElementById("lunbo");
      var tab1 = document.getElementById("inlunbo1");
      var tab2 = document.getElementById("inlunbo1");
      tab2.innerHTML = tab1.innerHTML;
      function Marquee() {
        if (tab2.offsetWidth - tab.scrollLeft <= 0){
          tab.scrollLeft -= tab1.offsetWidth;
        }else {
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
    //苏城码
    drawLeida() {
      var myChart = echarts.init(document.getElementById("main8"));
      const option = {
        color: ["#eb2100", "#33FFCC", "#F8F106", "#33CCFF"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: "苏城码",
            type: "pie",
            radius: ["45%", "70%"],
            center: ["50%", "50%"],
            roseType: "angle",
            data: [
              { value: 10, name: "红码" },
              { value: 20, name: "绿码" },
              { value: 30, name: "黄码" },
              { value: 25, name: "未注册" }
            ]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
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
          self.statistics.stuinSuzhou = res.stuinSuzhou;
          self.statistics.stuinJiang = res.stuinJiang;
          // window.location.reload();
        })
        .catch(function(error) {
          console.log(error);
          // window.location.reload();
        });
    },
    resizeFontsize() {
      var width = document.documentElement.clientWidth;
      document.documentElement.style.fontSize = width / 20 + "px";
      //width/(效果图片宽度/文本字体大小(100))
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
    gundong1() {
      if(this.noMask.length>=this.noMaskCount){
        this.animate = true
        setTimeout(() =>{
          this.noMask.push(this.noMask[0]);
          this.noMask.shift();
          this.animate = false;
        },500)
      }
    },
    noMaskList() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/pictures/selectByType?type=3")
        .then(function(response) {
          var res = response.data;
          self.noMask = res;
          self.noMaskCount = res.length;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  }
};
</script>

<style>
/* .amap-logo {
  display: none;
  bottom: -1000px;
} */

/* 定义 my-red 主题 */

.amap-luopan,
.amap-luopan-bg {
  background: url(../assets/images/a33f94.png) 11px 16px no-repeat !important;
}
.amap-compass {
  width: 94px !important;
  background: url(../assets/images/d1b1de.png) 7px 8px no-repeat !important;
}
.jiankong {
  height: 3rem;
  width: 100%;
}
#all_Num {
  width: 3.5rem;
  height: 3.2rem;
}
#allLine {
  width: 3.5rem;
  height: 2.5rem;
}
.el-table {
  height: inherit;
  width: 100% !important;
  background-color: transparent !important;
  color: #00d4c7 !important;
  font-size: 160% !important;
}

.el-table thead {
  color: #dcdcdc !important;
  background-color: #1b3565;
}
/* 设置table header的背景颜色 */
.el-table th,
.el-table tr,
.el-table td {
  background-color: transparent !important;
  padding: 4px 0 !important;
  text-align: center !important;
}

.el-table td,
.el-table th.is-leaf {
  border-bottom: 0px solid #05a4b8 !important;
}

.el-table--border,
.el-table--group {
  border: 1px solid #05a4b8 !important;
}

.el-table::after {
  width: 0% !important;
  height: 0% !important;
}
.el-table::before {
  width: 0% !important;
  height: 0% !important;
}
.el-table .cell {
  line-height: 100% !important;
  padding-left: 0 !important;
}
#lunbo {
  overflow: hidden;
  /* margin-top: 3%; */
  width: 100%;
  height: 100%;
}
#inlunbo {
  float: left;
  width: 400%;
  height: 100%;
}

#inlunbo1 {
  float: left;
  height: 100%;
  width: 25%;
}

#inlunbo2 {
  float: left;
  height: 100%;
  width: 25%;
}
.lunboborder {
  width: 24%;
  height: 100%;
  margin-right: 0.9%;
  float: left;
  background: rgba(16, 54, 87, 0.5);
  border: 1px solid #345f92;
}
.lunboimg {
  width: 55%;
  height: 100%;
  float: left;
}
.lunbotext {
  width: 45%;
  height: 100%;
  padding: 15% 5%;
  float: left;
  font-size: 0.15rem;
  color: #00d4c7;
}
#main8 {
  width: 100%;
  height: 90%;
  /* padding-bottom: 0.2rem; */
}
.barbox li {
  font-size: 0.35rem;
  color: #ffeb7b;
  font-family: electronicFont;
  font-weight: bold;
}
element.style {
  /* width: 400px; */
}
.el-table__header {
  padding: 0;
  height: 5%;
}
.el-table__body,
.el-table__footer,
.el-table__header {
  table-layout: fixed;
  border-collapse: separate;
  width: auto !important;
}
.barbox {
  border: 1px solid rgba(25, 186, 139, 0.17);
  position: relative;
  margin-top: 0.1rem;
}
.barbox2 li {
  font-size: 0.05rem;
  color: rgba(255, 255, 255, 0.7);
  /* padding-top: 0.1rem; */
}
#demo {
  overflow: hidden;

  width: 100%;
  height: 100%;
}

#demo img {
  height: 100%;
  margin-right: 3px;
}

#indemo {
  float: left;
  width: 800%;
  height: 100%;
}

#demo1 {
  float: left;
  height: 100%;
}

#demo2 {
  float: left;

  height: 100%;
}
.alltitle1 {
  font-size: 0.2rem;
  color: #fff;
  text-align: center;
  line-height: 0.3rem;
}
</style>
