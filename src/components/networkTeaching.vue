<template>
  <div>
    <div class="canvas"
         style="opacity: .2">
      <canvas id="canv"
              width="1920"
              height="572"></canvas>
    </div>
    <Header></Header>
    <div class="mainbox">
      <ul class="clearfix">
        <li>
          <div class="boxall"
               style="height: 3.6rem">
            <div class="alltitle">课程讨论区</div>
            <div class="allnav">
              <div id="viewclass"></div>
            </div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall"
               style="height: 3rem">
            <div class="alltitle">添加资源分析</div>
            <div class="allnav">
              <div id="ziyuan"></div>
              <div id="shipin"></div>
              <div id="unit"></div>
            </div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall"
               style="height: 3rem;">
            <div class="alltitle">进入课程总数</div>
            <div class="allnav">
              <div id="fangwen"></div>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
        <li>
          <div class="boxall"
               style="height: 3.3rem;">
            <div class="alltitle">学习时长</div>
            <div class="allnav">
              <div id="duration"></div>
            </div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall"
               style="height: 3.3rem;">
            <div class="alltitle">课程被访问总数</div>
            <div class="allnav">
              <div id="course"></div>
            </div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall"
               style="height: 3rem">
            <div class="alltitle">阅读教学材料总数</div>
            <div class="allnav">
              <div id="material"></div>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
        <li>
          <div class="boxall"
               style="height:3.4rem">
            <div class="alltitle">作业\测试分析</div>
            <div class="allnav">
              <div id="task"></div>
            </div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall"
               style="height: 3.3rem;">
            <div class="alltitle">发布情况分析</div>
            <div class="allnav">
              <div id="release"></div>
            </div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall"
               style="height: 2.9rem;">
            <div class="alltitle">开课教师\选课学生总数</div>
            <div class="allnav">
              <div id="starttea"></div>
              <div id="startstu"></div>
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
import Header from "@/components/header";
export default {
  data () {
    return {
      // 图片父容器高度
      bannerHeight: 1000,
      // 浏览器宽度
      screenWidth: 0
    };
  },
  components: {
    Header
  },
  created () { },
  mounted () {
    this.resizeFontsize();
    //改变横屏竖屏执行效果更换
    window.addEventListener("orientationchange", this.resizeFontsize());
    //改变手机大小执行效果更换
    window.addEventListener("resize", this.resizeFontsize());
    this.canves();
    //添加资源总数
    this.resources();
    //添加播课单元数
    this.classunit();
    //添加播课单元视频数
    this.videos();
    //进入课程总数
    this.courseall();
    //学习总时长
    this.studytime();
    //课程被访问总数
    this.coursevisit();
    //阅读教学材料次数
    this.materialcount();
    //提交、批阅作业\测试
    this.marking();
    //发布作业、测试
    this.releasework();
    //开课教师
    this.selecttea();
    //选课学生
    this.selectstu();
    //课程讨论区
    this.courseview();
  },
  methods: {
    setSize: function () {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = (400 / 1920) * this.screenWidth;
    },
    resizeFontsize () {
      var width = document.documentElement.clientWidth;
      document.documentElement.style.fontSize = width / 20 + "px";
      //width/(效果图片宽度/文本字体大小(100))
    },
    canves () {
      var num = 200;
      var w = window.innerWidth;
      var h = window.innerHeight;
      var max = 100;
      var _x = 0;
      var _y = 0;
      var _z = 150;
      var dtr = function (d) {
        return (d * Math.PI) / 180;
      };

      var rnd = function () {
        return Math.sin((Math.floor(Math.random() * 360) * Math.PI) / 180);
      };
      var dist = function (p1, p2, p3) {
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
        upd: function () {
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
          sz: function (p, sz) {
            return {
              x: p.x * sz.x,
              y: p.y * sz.y,
              z: p.z * sz.z
            };
          },
          rot: {
            x: function (p, rot) {
              return {
                x: p.x,
                y: p.y * Math.cos(dtr(rot.x)) - p.z * Math.sin(dtr(rot.x)),
                z: p.y * Math.sin(dtr(rot.x)) + p.z * Math.cos(dtr(rot.x))
              };
            },
            y: function (p, rot) {
              return {
                x: p.x * Math.cos(dtr(rot.y)) + p.z * Math.sin(dtr(rot.y)),
                y: p.y,
                z: -p.x * Math.sin(dtr(rot.y)) + p.z * Math.cos(dtr(rot.y))
              };
            },
            z: function (p, rot) {
              return {
                x: p.x * Math.cos(dtr(rot.z)) - p.y * Math.sin(dtr(rot.z)),
                y: p.x * Math.sin(dtr(rot.z)) + p.y * Math.cos(dtr(rot.z)),
                z: p.z
              };
            }
          },
          pos: function (p, pos) {
            return {
              x: p.x + pos.x,
              y: p.y + pos.y,
              z: p.z + pos.z
            };
          }
        },
        pov: {
          plane: function (p) {
            return {
              x: p.x * cam.ang.cplane + p.z * cam.ang.splane,
              y: p.y,
              z: p.x * -cam.ang.splane + p.z * cam.ang.cplane
            };
          },
          theta: function (p) {
            return {
              x: p.x,
              y: p.y * cam.ang.ctheta - p.z * cam.ang.stheta,
              z: p.y * cam.ang.stheta + p.z * cam.ang.ctheta
            };
          },
          set: function (p) {
            return {
              x: p.x - cam.obj.x,
              y: p.y - cam.obj.y,
              z: p.z - cam.obj.z
            };
          }
        },
        persp: function (p) {
          return {
            x: ((p.x * cam.dist.z) / p.z) * cam.zoom,
            y: ((p.y * cam.dist.z) / p.z) * cam.zoom,
            z: p.z * cam.zoom,
            p: cam.dist.z / p.z
          };
        },
        disp: function (p, disp) {
          return {
            x: p.x + disp.x,
            y: -p.y + disp.y,
            z: p.z + disp.z,
            p: p.p
          };
        },
        steps: function (_obj_, sz, rot, pos, disp) {
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

      (function () {
        "use strict";
        var threeD = function (param) {
          this.transIn = {};
          this.transOut = {};
          this.transIn.vtx = param.vtx;
          this.transIn.sz = param.sz;
          this.transIn.rot = param.rot;
          this.transIn.pos = param.pos;
        };

        threeD.prototype.vupd = function () {
          this.transOut = trans.steps(
            this.transIn.vtx,
            this.transIn.sz,
            this.transIn.rot,
            this.transIn.pos,
            cam.disp
          );
        };

        var Build = function () {
          this.vel = 0.04;
          this.lim = 360;
          this.diff = 200;
          this.initPos = 100;
          this.toX = _x;
          this.toY = _y;
          this.go();
        };

        Build.prototype.go = function () {
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

        Build.prototype.add = function () {
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

        Build.prototype.upd = function () {
          cam.obj.x += (this.toX - cam.obj.x) * 0.05;
          cam.obj.y += (this.toY - cam.obj.y) * 0.05;
        };

        Build.prototype.draw = function () {
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
        Build.prototype.anim = function () {
          window.requestAnimationFrame = (function () {
            return (
              window.requestAnimationFrame ||
              function (callback, element) {
                window.setTimeout(callback, 1000 / 60);
              }
            );
          })();
          var anim = function () {
            this.upd();
            this.draw();
            window.requestAnimationFrame(anim);
          }.bind(this);
          window.requestAnimationFrame(anim);
        };

        Build.prototype.run = function () {
          this.anim();

          window.addEventListener(
            "mousemove",
            function (e) {
              this.toX = (e.clientX - this.canvas.width / 2) * -0.8;
              this.toY = (e.clientY - this.canvas.height / 2) * 0.8;
            }.bind(this)
          );
          window.addEventListener(
            "touchmove",
            function (e) {
              e.preventDefault();
              this.toX = (e.touches[0].clientX - this.canvas.width / 2) * -0.8;
              this.toY = (e.touches[0].clientY - this.canvas.height / 2) * 0.8;
            }.bind(this)
          );
          window.addEventListener(
            "mousedown",
            function (e) {
              for (var i = 0; i < 100; i++) {
                this.add();
              }
            }.bind(this)
          );
          window.addEventListener(
            "touchstart",
            function (e) {
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
        function () {
          canvas.width = w = window.innerWidth;
          canvas.height = h = window.innerHeight;
        },
        false
      );
    },
    resources () {
      var myChart = echarts.init(document.getElementById("ziyuan"));
      var option = {
        color: ['#FFCB89', '#005EA1', '#0AD5FF', '#1AFFFD', '#2E7CFF', '#FEB602', '#FF81CB', '#E15828', '#0AFF6C', '#FF7D0A'],
        title: {
          subtext: '添加资源总数',
          bottom: 0,
          left: 'center'
        },
        tooltip: {
          trigger: "item",
          formatter: "   {a} <br/>{b} : {c} ({d}%)"
        },
        legend: { // 图例-图上面的分类
          orient: 'vertical',
          left: 40,
          //   icon: 'rect',//长方形
          icon: 'circle',
          bottom: "center",
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 5,
          data: ['电子', '经贸', '机电', '软件', '建筑', '精密', '体育', '思政', '国教', '汽车'],
          right: '10%',
          textStyle: {
            fontSize: 10,
            color: '#B4B4B4',
          }
        },
        grid: {
          top: "1%",
          left: "1%",
          right: "1%",
          bottom: "1%",
          containLabel: true
        },
        series: [
          {
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            name: "苏工院",
            type: "pie",
            radius: "70%",
            center: ["50%", "50%"],
            data: [
              {
                value: 655,
                name: "电子"
              },
              {
                value: 123,
                name: "经贸"
              },
              {
                value: 939,
                name: "机电"
              },
              {
                value: 1111,
                name: "软件"
              },
              {
                value: 65,
                name: "建筑"
              },
              {
                value: 1211,
                name: "精密"
              },
              {
                value: 3,
                name: "体育"
              },
              {
                value: 72,
                name: "思政"
              },
              {
                value: 85,
                name: "国教"
              },
              {
                value: 167,
                name: "汽车"
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    classunit () {
      var myChart = echarts.init(document.getElementById("unit"));
      var option = {
        color: ['#FFCB89', '#005EA1', '#0AD5FF', '#1AFFFD', '#2E7CFF', '#FEB602', '#FF81CB', '#E15828', '#0AFF6C', '#FF7D0A'],
        title: {
          subtext: '添加播课单元数',
          bottom: 0,
          left: 'center'
        },
        tooltip: {
          trigger: "item",
          formatter: "   {a} <br/>{b} : {c} ({d}%)"
          // formatter: "   企业数：{c}"
        },
        legend: { // 图例-图上面的分类
          orient: 'vertical',
          left: 40,
          //   icon: 'rect',//长方形
          icon: 'circle',
          bottom: "center",
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 5,
          data: ['电子', '经贸', '机电', '软件', '建筑', '精密', '体育', '思政', '国教', '汽车'],
          right: '16%',
          textStyle: {
            fontSize: 10,
            color: '#B4B4B4',
          }
        },
        grid: {
          top: "1%",
          left: "1%",
          right: "1%",
          bottom: "1%",
          containLabel: true
        },

        series: [
          {
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            name: "苏工院",
            type: "pie",
            radius: "70%",
            center: ["50%", "50%"],
            data: [
              {
                value: 352,
                name: "电子"
              },
              {
                value: 0,
                name: "经贸"
              },
              {
                value: 139,
                name: "机电"
              },
              {
                value: 16,
                name: "软件"
              },
              {
                value: 37,
                name: "建筑"
              },
              {
                value: 57,
                name: "精密"
              },
              {
                value: 0,
                name: "体育"
              },
              {
                value: 4,
                name: "思政"
              },
              {
                value: 113,
                name: "国教"
              },
              {
                value: 40,
                name: "汽车"
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    videos () {
      var myChart = echarts.init(document.getElementById("shipin"));
      var option = {
        color: ['#FFCB89', '#005EA1', '#0AD5FF', '#1AFFFD', '#2E7CFF', '#FEB602', '#FF81CB', '#E15828', '#0AFF6C', '#FF7D0A'],
        title: {
          subtext: '添加播课单元视频数',
          bottom: 0,
          left: 'center'
        },
        tooltip: {
          trigger: "item",
          formatter: "   {a} <br/>{b} : {c} ({d}%)"
          // formatter: "   企业数：{c}"
        },
        legend: { // 图例-图上面的分类
          orient: 'vertical',
          left: 40,
          //   icon: 'rect',//长方形
          icon: 'circle',
          bottom: "center",
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 5,
          data: ['电子', '经贸', '机电', '软件', '建筑', '精密', '体育', '思政', '国教', '汽车'],
          right: '16%',
          textStyle: {
            fontSize: 10,
            color: '#B4B4B4',
          }
        },
        grid: {
          top: "1%",
          left: "1%",
          right: "1%",
          bottom: "1%",
          containLabel: true
        },
        series: [
          {
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            name: "苏工院",
            type: "pie",
            radius: "70%",
            center: ["50%", "50%"],
            data: [
              {
                value: 452,
                name: "电子"
              },
              {
                value: 0,
                name: "经贸"
              },
              {
                value: 341,
                name: "机电"
              },
              {
                value: 29,
                name: "软件"
              },
              {
                value: 65,
                name: "建筑"
              },
              {
                value: 109,
                name: "精密"
              },
              {
                value: 0,
                name: "体育"
              },
              {
                value: 1,
                name: "思政"
              },
              {
                value: 125,
                name: "国教"
              },
              {
                value: 56,
                name: "汽车"
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    courseall () {
      var myChart = echarts.init(document.getElementById("fangwen"));
      var option = {
        color: ["#388BFF", "#05C3FA", "#F6931C", "#FFD52E"],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          top: 0,
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            color: "#B4B4B4"
          },
          data: ["教师", "移动端教师", "学生", "移动端学生"]
        },
        grid: {
          //图表的位置
          top: "10%",
          left: "1%",
          right: "1%",
          bottom: "10%",
          containLabel: true
        },
        yAxis: [
          {
            type: "value",
            axisLabel: {
              show: true,
              interval: "auto",
              formatter: "{value} ",
              textStyle: {
                // fontSize: 10,
                color: "#00d4c7"
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: "dashed"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#03C5BC"
              }
            },
            show: true
          },
          {
            type: "value",
            axisLabel: {
              show: true,
              interval: "auto",
              formatter: "{value} ",
              textStyle: {
                // fontSize: 10,
                color: "#00d4c7"
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: "dashed"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#03C5BC"
              }
            },
            show: true
          }
        ],
        xAxis: [
          {
            type: "category",
            axisLabel: {
              interval: 0,
              show: true,
              splitNumber: 15,
              textStyle: {
                // fontSize: 10,
                color: "#00d4c7"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#03C5BC"
              }
            },
            data: [
              "电子",
              "经贸",
              "机电",
              "软件",
              "建筑",
              "精密",
              "体育",
              "思政",
              "国教",
              "汽车"
            ]
          }
        ],
        series: [
          {
            name: "教师",
            type: "bar",
            stack: "sum",
            barWidth: 10,
            data: [2075, 156, 2253, 1777, 177, 1208, 12, 227, 543, 397]
          },
          {
            name: "移动端教师",
            type: "bar",
            barWidth: 10,
            stack: "sum",
            data: [493, 29, 353, 264, 24, 219, 0, 6, 168, 100]
          },
          {
            name: "学生",
            type: "bar",
            yAxisIndex: 1,
            color: "#F6931C",
            stack: "sum1",
            barWidth: 10,
            data: [
              60771,
              6338,
              67862,
              47567,
              3893,
              29922,
              1023,
              8183,
              7723,
              7548
            ]
          },
          {
            name: "移动端学生",
            type: "bar",
            yAxisIndex: 1,
            color: "#FFD52E",
            stack: "sum1",
            barWidth: 10,
            data: [
              33183,
              2386,
              44673,
              11238,
              1317,
              21979,
              659,
              4016,
              4260,
              6115
            ]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    studytime () {
      var myChart = echarts.init(document.getElementById("duration"));
      var option = {
        grid: {
          //图表的位置
          top: "1%",
          left: "3%",
          right: "5%",
          bottom: "10%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          formatter: "{a}<br/>{b0}: {c0}"
        },
        xAxis: {
          show: true,
          type: "value",
          axisTick: {
            show: true
          },
          axisLabel: {
            show: true,
            // fontSize: 10,
            textStyle: {
              color: "#00d4c7"
            },
            formatter: function (val) {
              return `${val}`;
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#03C5BC"
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "rgba(255,255,255,0.2)"
            }
          }
        },
        yAxis: {
          type: "category",
          axisLabel: {
            show: true,
            // fontSize: 13,
            textStyle: {
              color: "#00d4c7"
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: "#03C5BC"
            }
          },
          data: [
            "电子",
            "经贸",
            "机电",
            "软件",
            "建筑",
            "精密",
            "体育",
            "思政",
            "国教",
            "汽车"
          ]
        },
        series: [
          {
            name: "学习总时长",
            type: "bar",
            itemStyle: {
              normal: {
                color: "#1AFFFD"
              }
            },
            barWidth: 13,
            data: [
              677434,
              53258,
              528380,
              630601,
              88018,
              175304,
              434,
              27471,
              78760,
              48063
            ]
          },
          {
            name: "外框",
            type: "bar",
            itemStyle: {
              normal: {
                color: "#444a58"
              }
            },
            barGap: "-100%",
            barWidth: 15,
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    coursevisit () {
      var myChart = echarts.init(document.getElementById("course"));
      var data_val = [
        62846,
        6494,
        70115,
        49344,
        4070,
        31130,
        1035,
        8410,
        8266,
        7945
      ];
      var data_val1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var option = {
        grid: {
          left: 10,
          top: 10,
          bottom: 20,
          right: 40,
          containLabel: true
        },
        tooltip: {
          show: true,
          backgroundColor: "#384157",
          borderColor: "#384157",
          borderWidth: 1,
          formatter: "{a}<br/>{b}:{c}",
          extraCssText: "box-shadow: 0 0 5px rgba(0, 0, 0, 1)"
        },

        xAxis: {
          data: [
            "电子",
            "经贸",
            "机电",
            "软件",
            "建筑",
            "精密",
            "体育",
            "思政",
            "国教",
            "汽车"
          ],
          boundaryGap: false,
          axisLabel: {
            show: true,
            interval: "auto",
            formatter: "{value} ",
            textStyle: {
              // fontSize: 10,
              color: "#00d4c7"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#00d4c7"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#00d4c7"
            }
          }
        },
        yAxis: {
          ayisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#00d4c7"
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#00d4c7"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#00d4c7"
            }
          }
        },

        series: [
          {
            type: "line",
            name: "距离",

            animation: false,
            symbol: "circle",

            hoverAnimation: false,
            data: data_val1,
            itemStyle: {
              normal: {
                color: "#f17a52",
                opacity: 0
              }
            },
            lineStyle: {
              normal: {
                width: 1,
                color: "#384157",
                opacity: 1
              }
            }
          },
          {
            type: "line",
            name: "课程访问",
            smooth: true,
            symbolSize: 10,
            animation: false,
            lineWidth: 1.2,
            hoverAnimation: false,
            data: data_val,
            symbol: "circle",
            lineStyle: {
              normal: {
                width: 3,
                color: "#01f8f3",
                shadowColor: "#01f8f3",
                shadowBlur: 15,
                shadowOffsetY: 0
              }
            },
            itemStyle: {
              normal: {
                color: "#ffda22",
                shadowBlur: 14,
                shadowColor: "#ffda22",
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    color: "#06efec"
                  }
                }
              }
            },

            areaStyle: {
              normal: {
                color: "#06efec",
                opacity: 0.08
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    materialcount () {
      var myChart = echarts.init(document.getElementById("material"));
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          top: "20%",
          right: "8%",
          left: "10%",
          bottom: "20%"
        },
        xAxis: [
          {
            type: "category",
            data: [
              "电子",
              "经贸",
              "机电",
              "软件",
              "建筑",
              "精密",
              "体育",
              "思政",
              "国教",
              "汽车"
            ],
            axisLine: {
              lineStyle: {
                color: "#00d4c7"
              }
            },
            axisLabel: {
              margin: 10,
              color: "#00d4c7",
              textStyle: {
                fontSize: 14
              }
            }
          }
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: "{value}",
              color: "#00d4c7"
            },
            axisLine: {
              show: false
            },
            axisTick: {
              lineStyle: {
                color: "#00d4c7"
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#00d4c7"
              }
            }
          }
        ],
        series: [
          {
            type: "bar",
            data: [
              73803,
              6934,
              67757,
              92995,
              12417,
              32715,
              215,
              3440,
              3536,
              12213
            ],
            barWidth: "30%",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0,244,255,1)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(0,77,167,1)" // 100% 处的颜色
                    }
                  ],
                  false
                ),
                barBorderRadius: [30, 30, 30, 30],
                shadowColor: "rgba(0,160,221,1)",
                shadowBlur: 4
              }
            },
            label: {
              normal: {
                show: true,
                lineHeight: 20,
                width: 80,
                height: 20,
                backgroundColor: "rgba(0,160,221,0.1)",
                borderRadius: 200,
                position: ["-10", "-45"],
                distance: 1,
                formatter: ["    {d|●}", " {a|{c}}     \n", "    {b|}"].join(
                  ","
                ),
                rich: {
                  d: {
                    color: "#3CDDCF"
                  },
                  a: {
                    color: "#fff",
                    align: "center"
                  },
                  b: {
                    width: 1,
                    height: 30,
                    borderWidth: 1,
                    borderColor: "#234e6c",
                    align: "left"
                  }
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    marking () {
      var myChart = echarts.init(document.getElementById("task"));
      var option = {
        grid: {
          left: "3%",
          right: "3%",
          top: "5%",
          bottom: "10%",
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: "item"
        },
        legend: {
          show: true,
          x: "center",
          top: 0,
          y: "35",
          icon: "stack",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#B4B4B4"
          },
          data: ["作业提交", "批阅作业", "测试提交", "批阅测试"]
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              color: "#30eee9"
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#397cbc"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#195384"
              }
            },
            data: [
              "电子",
              "经贸",
              "机电",
              "软件",
              "建筑",
              "精密",
              "体育",
              "思政",
              "国教",
              "汽车"
            ]
          }
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#2ad1d2"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#27b4c2"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#11366e"
              }
            }
          },
          {
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#186afe"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#186afe"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#11366e"
              }
            }
          }
        ],
        series: [
          {
            name: "作业提交",
            type: "line",
            stack: "总量",
            yAxisIndex: 1,
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
            data: [8672, 791, 6854, 7418, 871, 5938, 9, 754, 567, 607]
          },
          {
            name: "批阅作业",
            type: "line",
            stack: "总量",
            yAxisIndex: 1,
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
            data: [5260, 349, 2796, 1476, 366, 2802, 0, 38, 176, 122]
          },
          {
            name: "测试提交",
            type: "line",
            stack: "总量",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#aecb56",
                lineStyle: {
                  color: "#aecb56",
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
                      color: "rgba(114,144,89,0.9)"
                    }
                  ])
                }
              }
            },
            data: [4169, 3, 4406, 3839, 2, 1813, 0, 3, 439, 151]
          },
          {
            name: "批阅测试",
            type: "line",
            stack: "总量",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#3A44FB",
                lineStyle: {
                  color: "#3A44FB",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(7,46,101,0.3)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,166,246,0.9)"
                    }
                  ])
                }
              }
            },
            data: [766, 0, 2400, 0, 0, 401, 0, 0, 50, 31]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    releasework () {
      var myChart = echarts.init(document.getElementById("release"));
      var option = {
        tooltip: {
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "1%",
          right: "1%",
          bottom: "10%",
          top: "5%",
          containLabel: true
        },
        legend: {
          data: ["发布测试", "发布作业"],
          right: "center",
          top: 0,
          textStyle: {
            color: "#B4B4B4"
          },
          itemWidth: 12,
          itemHeight: 10
          // itemGap: 35
        },
        xAxis: {
          type: "category",
          data: [
            "电子",
            "经贸",
            "机电",
            "软件",
            "建筑",
            "精密",
            "体育",
            "思政",
            "国教",
            "汽车"
          ],
          axisLine: {
            lineStyle: {
              color: "#00d4c7"
            }
          },
          axisLabel: {
            margin: 15,
            textStyle: {
              fontFamily: "Microsoft YaHei",
              color: "#00d4c7",
              // fontSize: 10
            }
          },
          axisTick: {
            show: false
          }
        },

        yAxis: {
          type: "value",

          axisLine: {
            show: false,
            lineStyle: {
              color: "#00d4c7"
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "rgba(255,255,255,0.3)"
            }
          },
          axisLabel: {
            textStyle: {
              color: "#00d4c7",
              // fontSize: 10
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: "发布测试",
            type: "bar",
            barWidth: "20",
            itemStyle: {
              normal: {
                color: '#1AFFFD'
              }
            },
            data: [155, 2, 163, 154, 0, 108, 0, 5, 38, 12]
          },
          {
            name: "发布作业",
            type: "bar",
            barWidth: "20",
            itemStyle: {
              normal: {
                color: '#2E7CFF'
              }
            },
            data: [252, 19, 207, 218, 16, 184, 1, 19, 27, 15]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    selecttea () {
      var myChart = echarts.init(document.getElementById("starttea"));
      var option = {
        color: ['#FEB602', '#FF81CB', '#E15828', '#0AFF6C', '#FF7D0A', '#FFCB89', '#005EA1', '#0AD5FF', '#1AFFFD', '#2E7CFF'],
        title: {
          subtext: '开课教师人数',
          bottom: '10%',
          left: 'center'
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        grid: {
          top: "1%",
          left: "1%",
          right: "1%",
          bottom: "1%",
          containLabel: true
        },
        legend: {
          show: false,
          orient: "vertical",
          left: "left",
          data: [
            "电子",
            "经贸",
            "机电",
            "软件",
            "建筑",
            "精密",
            "体育",
            "思政",
            "国教",
            "汽车"
          ]
        },
        series: [
          {
            name: "开课教师",
            type: "pie",
            radius: "50%",
            center: ["50%", "40%"],
            data: [
              { value: 25, name: "电子" },
              { value: 2, name: "经贸" },
              { value: 35, name: "机电" },
              { value: 44, name: "软件" },
              { value: 9, name: "建筑" },
              { value: 49, name: "精密" },
              { value: 1, name: "体育" },
              { value: 6, name: "思政" },
              { value: 15, name: "国教" },
              { value: 3, name: "汽车" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    selectstu () {
      var myChart = echarts.init(document.getElementById("startstu"));
      var option = {
        color: ['#1AFFFD', '#2E7CFF', '#FEB602', '#FF81CB', '#FFCB89', '#005EA1', '#0AD5FF', '#E15828', '#0AFF6C', '#FF7D0A'],
        title: {
          subtext: '选课学生人数',
          bottom: '10%',
          left: 'center'
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        grid: {
          top: "1%",
          left: "1%",
          right: "1%",
          bottom: "1%",
          containLabel: true
        },
        legend: {
          show: false,
          orient: "vertical",
          left: "left",
          data: [
            "电子",
            "经贸",
            "机电",
            "软件",
            "建筑",
            "精密",
            "体育",
            "思政",
            "国教",
            "汽车"
          ]
        },
        series: [
          {
            name: "开课教师",
            type: "pie",
            radius: "50%",
            center: ["50%", "40%"],
            data: [
              { value: 5232, name: "电子" },
              { value: 3455, name: "经贸" },
              { value: 5832, name: "机电" },
              { value: 7351, name: "软件" },
              { value: 4513, name: "建筑" },
              { value: 6206, name: "精密" },
              { value: 5428, name: "体育" },
              { value: 13910, name: "思政" },
              { value: 3561, name: "国教" },
              { value: 1437, name: "汽车" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    courseview () {
      var myChart = echarts.init(document.getElementById("viewclass"));
      var option = {
        grid: {
          top: "10%",
          bottom: "20%" //也可设置left和right设置距离来控制图表的大小
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true
            }
          }
        },
        legend: {
          data: ["发表主题", "发文"],
          top: 0,
          textStyle: {
            color: "#B4B4B4"
          }
        },
        xAxis: {
          data: [
            "电子",
            "经贸",
            "机电",
            "软件",
            "建筑",
            "精密",
            "体育",
            "思政",
            "国教",
            "汽车"
          ],
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: "#01FCE3"
            }
          },
          axisTick: {
            show: true //隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#00d4c7" //X轴文字颜色
            }
          }
        },
        yAxis: [
          {
            type: "value",
            // name: "亿元",
            nameTextStyle: {
              color: "#ebf8ac"
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: true
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#01FCE3"
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#00d4c7"
              }
            }
          },
          {
            type: "value",
            // name: "同比",
            nameTextStyle: {
              color: "#ebf8ac"
            },
            position: "right",
            splitLine: {
              show: false
            },
            axisTick: {
              show: true
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#01FCE3"
              }
            },
            axisLabel: {
              show: true,
              formatter: "{value}", //右侧Y轴文字显示
              textStyle: {
                color: "#00d4c7"
              }
            }
          }
        ],
        series: [
          {
            name: "发表主题",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              color: "#058cff"
            },
            lineStyle: {
              color: "#058cff"
            },
            areaStyle: {
              color: "rgba(5,140,255, 0.2)"
            },
            data: [4796, 16, 153, 94, 4, 118, 0, 16, 27, 16]
          },
          {
            name: "发文",
            type: "bar",
            barWidth: 15,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#00FFE3"
                  },
                  {
                    offset: 1,
                    color: "#4693EC"
                  }
                ])
              }
            },
            data: [12139, 591, 1431, 4529, 5, 1282, 1, 66, 206, 182]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
};
</script>

<style lang="less">
@import "../assets/css/comon2.css";
#viewclass {
  width: 6rem;
  height: 100%;
}
#ziyuan {
  width: 2rem;
  height: 2rem;
  position: absolute;
}
#shipin {
  width: 2rem;
  height: 2rem;
  position: absolute;
  margin-left: 2rem;
}
#unit {
  width: 2rem;
  height: 2rem;
  position: absolute;
  margin-left: 4rem;
}
#fangwen {
  width: 6rem;
  height: 100%;
}
#duration {
  width: 6.2rem;
  height: 100%;
}
#course {
  width: 6.2rem;
  height: 100%;
}
#material {
  width: 6.2rem;
  height: 100%;
}
#task {
  width: 6rem;
  height: 100%;
}
#release {
  width: 6rem;
  height: 100%;
}
#starttea {
  width: 3rem;
  height: inherit;
  position: absolute;
}
#startstu {
  width: 3rem;
  height: inherit;
  margin-left: 3rem;
  position: absolute;
}
</style>
