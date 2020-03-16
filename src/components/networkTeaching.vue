<template>
  <div>
    <Header></Header>
    <div class="mainbox">
      <ul class="clearfix">
        <li style="width: 33%;">
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
        <li style="width:34%">
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
        <li style="width: 33%;">
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
import axios from "axios";
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
    // this.canves();
    //添加资源总数
    this.resources();
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
    resources () {
      var myChart = echarts.init(document.getElementById("ziyuan"));
      var option = {
        color: [
          "#FFCB89",
          "#005EA1",
          "#0AD5FF",
          "#1AFFFD",
          "#2E7CFF",
          "#FEB602",
          "#FF81CB",
          "#E15828",
          "#0AFF6C",
          "#FF7D0A"
        ],
        tooltip: {
          trigger: "item",
          formatter: "   {a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          // 图例-图上面的分类
          orient: "vertical",
          left: 0,
          right: 0,
          icon: "circle",
          bottom: "25%",
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 5,
          data: [],

          textStyle: {
            fontSize: 11,
            color: "#B4B4B4"
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
            name: "添加资源总数",
            type: "pie",
            radius: "50%",
            center: ["25%", "40%"],
            data: [],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          },
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
            name: "添加播课单元视频数",
            type: "pie",
            radius: "50%",
            center: ["55%", "40%"],
            data: [],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          },
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
            name: "添加播课单元课",
            type: "pie",
            radius: "50%",
            center: ["85%", "40%"],
            data: [],
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
      //获取数据
      axios.get("static/json/data.json").then(res => {
        myChart.setOption({
          //json里数据
          series: [
            {
              data: res.data.resource
            },
            {
              data: res.data.video
            },
            {
              data: res.data.unit
            }
          ],
          legend: [
            {
              data: res.data.department
            }
          ]
        });
      });
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
            data: []
          }
        ],
        series: [
          {
            name: "教师",
            type: "bar",
            stack: "sum",
            barWidth: 10,
            data: []
          },
          {
            name: "移动端教师",
            type: "bar",
            barWidth: 10,
            stack: "sum",
            data: []
          },
          {
            name: "学生",
            type: "bar",
            yAxisIndex: 1,
            color: "#F6931C",
            stack: "sum1",
            barWidth: 10,
            data: []
          },
          {
            name: "移动端学生",
            type: "bar",
            yAxisIndex: 1,
            color: "#FFD52E",
            stack: "sum1",
            barWidth: 10,
            data: []
          }
        ]
      };
      myChart.setOption(option);
      //获取数据
      axios.get("static/json/data.json").then(res => {
        myChart.setOption({
          //json里数据
          series: [
            {
              data: res.data.teaenter
            },
            {
              data: res.data.moveteaenter
            },
            {
              data: res.data.stuenter
            },
            {
              data: res.data.movestuenter
            }
          ],
          xAxis: [
            {
              data: res.data.department
            }
          ]
        });
      });
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
          data: []
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
            data: []
          }
        ]
      };
      myChart.setOption(option);
      //获取数据
      axios.get("static/json/data.json").then(res => {
        myChart.setOption({
          //json里数据
          series: [
            {
              data: res.data.studytime
            }
          ],
          yAxis: [
            {
              data: res.data.department
            }
          ]
        });
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    coursevisit () {
      var myChart = echarts.init(document.getElementById("course"));
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
          data: [],
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
            name: "课程访问",
            smooth: true,
            symbolSize: 10,
            animation: false,
            lineWidth: 1.2,
            hoverAnimation: false,
            data: [],
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
      //获取数据
      axios.get("static/json/data.json").then(res => {
        myChart.setOption({
          //json里数据
          series: [
            {
              data: res.data.data_val
            }
          ],
          xAxis: [
            {
              data: res.data.department
            }
          ]
        });
      });
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
            data: [],
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
            data: [],
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
      //获取数据
      axios.get("static/json/data.json").then(res => {
        myChart.setOption({
          series: [
            {
              data: res.data.materialdata
            }
          ],
          xAxis: [
            {
              data: res.data.department
            }
          ]
        });
      });
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
            data: []
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
            data: []
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
            data: []
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
            data: []
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
            data: []
          }
        ]
      };
      myChart.setOption(option);
      //获取数据
      axios.get("static/json/data.json").then(res => {
        myChart.setOption({
          series: [
            {
              data: res.data.worksubmit
            },
            {
              data: res.data.workread
            },
            {
              data: res.data.testsubmit
            },
            {
              data: res.data.testread
            }
          ],
          xAxis: [
            {
              data: res.data.department
            }
          ]
        });
      });
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
          data: [],
          axisLine: {
            lineStyle: {
              color: "#00d4c7"
            }
          },
          axisLabel: {
            margin: 15,
            textStyle: {
              fontFamily: "Microsoft YaHei",
              color: "#00d4c7"
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
              color: "#00d4c7"
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
                color: "#1AFFFD"
              }
            },
            data: []
          },
          {
            name: "发布作业",
            type: "bar",
            barWidth: "20",
            itemStyle: {
              normal: {
                color: "#2E7CFF"
              }
            },
            data: []
          }
        ]
      };
      myChart.setOption(option);
      //获取数据
      axios.get("static/json/data.json").then(res => {
        myChart.setOption({
          series: [
            {
              data: res.data.issuework
            },
            {
              data: res.data.issuetest
            }
          ],
          xAxis: [
            {
              data: res.data.department
            }
          ]
        });
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    selecttea () {
      var myChart = echarts.init(document.getElementById("starttea"));
      var option = {
        color: [
          "#FEB602",
          "#FF81CB",
          "#E15828",
          "#0AFF6C",
          "#FF7D0A",
          "#FFCB89",
          "#005EA1",
          "#0AD5FF",
          "#1AFFFD",
          "#2E7CFF"
        ],
        title: {
          subtext: "开课教师人数",
          bottom: "10%",
          left: "center"
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
          data: []
        },
        series: [
          {
            name: "开课教师",
            type: "pie",
            radius: "50%",
            center: ["50%", "40%"],
            data: [],
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
      //获取数据
      axios.get("static/json/data.json").then(res => {
        myChart.setOption({
          series: [
            {
              data: res.data.classtea
            }
          ],
          legend: [
            {
              data: res.data.department
            }
          ]
        });
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    selectstu () {
      var myChart = echarts.init(document.getElementById("startstu"));
      var option = {
        color: [
          "#1AFFFD",
          "#2E7CFF",
          "#FEB602",
          "#FF81CB",
          "#FFCB89",
          "#005EA1",
          "#0AD5FF",
          "#E15828",
          "#0AFF6C",
          "#FF7D0A"
        ],
        title: {
          subtext: "选课学生人数",
          bottom: "10%",
          left: "center"
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
          data: []
        },
        series: [
          {
            name: "选课学生",
            type: "pie",
            radius: "50%",
            center: ["50%", "40%"],
            data: [],
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
      //获取数据
      axios.get("static/json/data.json").then(res => {
        myChart.setOption({
          series: [
            {
              data: res.data.classstu
            }
          ],
          legend: [
            {
              data: res.data.department
            }
          ]
        });
      });
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
          data: [],
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
            data: []
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
            data: []
          }
        ]
      };
      myChart.setOption(option);
      //获取数据
      axios.get("static/json/data.json").then(res => {
        myChart.setOption({
          series: [
            {
              data: res.data.theme
            },
            {
              data: res.data.article
            }
          ],
          xAxis: [
            {
              data: res.data.department
            }
          ]
        });
      });
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
#viewclass {
  width: 6rem;
  height: 100%;
}
#ziyuan {
  width: 6rem;
  height: 100%;
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
