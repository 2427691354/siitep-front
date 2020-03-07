<template>
  <div>
    <Header></Header>
    <div class="mainbox">
      <ul class="clearfix">
        <li style="width: 20%;">
          <div class="boxall"
               style="height: 3.7rem">
            <div class="alltitle">发烧/隔离人数趋势变化（一周）</div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall"
               style="height: 2.9rem">
            <div class="alltitle">苏城码颜色占比（绿码、黄码、红码、未注册）</div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall"
               style="height: 3.0rem;">
            <div class="alltitle">返校/返苏人数趋势变化（一周）</div>

            <div class="boxfoot"></div>
          </div>
        </li>
        <li style="width: 50%;">
          <div class="boxall"
               style="height: 1rem;">
            <div class="alltitle">宏观指标（全校人数 返校人数 隔离人数 今日检测人数）</div>
            <div class="boxfoot"></div>
          </div>
          <div style="height: 6.5rem;padding:0rem;margin-bottom:0.15rem">
            <div class="allnav"
                 style="height: 100%;"
                 id="echart1">
              <div id="container"
                   style="width:100%;height: 100%;resize:both;"></div>
            </div>
            <div class="boxfoot"></div>
          </div>

          <div class="boxall"
               style="height: 2.1rem;">
            <div class="alltitle">辅导员信息滚动</div>

            <div class="boxfoot"></div>
          </div>
        </li>
        <li style="width: 30%;">
          <div class="boxall"
               style="height: 3.7rem">
            <div class="alltitle"
                >实时监控</div>
            <div class="jiankong">
              <video-player class="video-player vjs-custom-skin"
                            ref="videoPlayer"
                            :options="playerOptions"></video-player>
            </div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall"
               style="height: 1.2rem">
            <div class="alltitle">未带口罩截图</div>

            <div class="boxfoot"></div>
          </div>
          <div class="boxall"
               style="height: 4.7rem;">
            <div class="alltitle">发烧学生信息表</div>

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
  data () {
    return {
      tianchouSrc:"rtmp://202.69.69.180:443/webcast/bshdlive-pc",
      tianzhangSrc:" rtmp://58.200.131.2:1935/livetv/hunantv",
      zhiboSrc:null,
      // "rtmp://202.69.69.180:443/webcast/bshdlive-pc",
      //视频流配置
       playerOptions: {
         // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        isVideo:true,//强制刷新使用 
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
            src: "rtmp://139.224.68.139:1935/play/mask.mp4"//默认播放地址
          }
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: false
      },
    };
  },
  components: {
    Header,
    videoPlayer
  },
  mounted () {
    this.mapInit();
    // this.initZhibosrc();
    // this.test();
  },
  methods: {
    mapInit () {
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
      var convertData = function (data) {
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
        backgroundColor: 'rgba(0,0,0,0)',//canvas的背景颜色
        environment: '../images/bg.png',//背景星空图,
        amap: {
          zoom: 18,
          pitch: 50,
          showIndoorMap: false,
          showLabel: false,
          mapStyle: "amap://styles/24e255725cd0137d5466051262519fb4",
          // mapStyle: 'amap://styles/light',
          center: [120.58962822, 31.21960967],
          features: ["bg", "point", "road"],
          viewMode: "3D",

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


      map.addControl(new AMap.ControlBar({
        showZoomBar: false, // 显示 zoom条控件
        // showControlButton:true,// 可以取消 倾斜旋转角度的按钮
        position: { //控件的定位
          right: '2%',
          top: '80%'
        }
      }));

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

      AMap.event.addListener(map, "zoomend", function () {
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
          symbol: 'image://static/img/ca_red.png',
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
              formatter: function (params) {
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
          symbol: 'image://static/img/ca_green.png',
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
              formatter: function (params) {
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
      myChart.on('click', function (params) {
        console.log(params.name);
        //逻辑控制
        switch(params.name){
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
      layer.render = function () {
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
      function bd_encrypt (gg_lng, gg_lat) {
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
    // mapInit() {
    //   var map;
    //   map = new AMap.Map("container", {
    //     resizeEnable: true,
    //     //通过rotateEnable和 pitchEnable 控制地图是否可以旋转和倾斜
    //     rotateEnable: true,
    //     pitchEnable: true,
    //     zoom: 17,
    //     pitch: 80,
    //     rotation: -15,
    //     viewMode: "3D", //开启3D视图,默认为关闭
    //     buildingAnimation: true, //楼块出现是否带动画
    //     expandZoomRange: true,
    //     zooms: [3, 20],
    //     center: [120.5905, 31.22063]
    //   });
    //   map.addControl(
    //     new AMap.ControlBar({
    //       showZoomBar: false,
    //       showControlButton: true,
    //       position: {
    //         right: "10px",
    //         top: "10px"
    //       }
    //     })
    //   );
    // }
    changeZhibosrc(zhiboSrc){
      // let myPlayer = this.$refs.videoPlayer.player;
      // console.log(myPlayer);
      // myPlayer.src("rtmp://202.69.69.180:443/webcast/bshdlive-pc")
    // this.url = this.zhiboSrc;
     this.playerOptions['sources'][0]['src'] = zhiboSrc;
    //  myPlayer.play();
      // this.zhiboSrc = "rtmp://202.69.69.180:443/webcast/bshdlive-pc";
      console.log(this.playerOptions);
    }
   
  
    
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
</style>
