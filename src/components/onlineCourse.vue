<template>
  <div>
    <div class="canvas" style="opacity: .2">
      <canvas id="canv" width="1920" height="572"></canvas>
    </div>
    <Header></Header>
    <div class="mainbox">
      <ul class="clearfix">
        <li style="width:30%">
          <div class="boxall" style="height: 4.8rem">
            <div class="alltitle">值班教师表</div>
            <div class="todayteacher">
              当日值班教师：
              <span>{{this.zhiban}}</span>
              联系方式：
              <span>{{this.zhibantel}}</span>
            </div>
            <div class="allnav">
              <div class="zhibantable">
                <el-table
                  :data="zhibanInfo"
                  stripe
                  style="font-size: 10%"
                  :row-style="{ height: '0.45rem' }"
                  :cell-style="{ padding: '0px' }"
                >
                  <el-table-column prop="dutydate" label="值班日期"></el-table-column>
                  <el-table-column prop="t_name" label="教师姓名"></el-table-column>
                  <el-table-column prop="t_tel" label="联系方式"></el-table-column>
                  <el-table-column prop="department" label="部门"></el-table-column>
                </el-table>
              </div>
            </div>
            <div class="boxfoot"></div>
          </div>

          <div class="boxall" style="height: 4.8rem;">
            <div class="alltitle" style="height: 12%;">
              <div class="kebiaotitle">{{this.class}}课程信息</div>
              <div class="select">
                <el-dropdown @command="handleCommand1">
                  <span class="el-dropdown-link">
                    18级
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="rj18c2">软件18C2</el-dropdown-item>
                    <el-dropdown-item command="rj18c1">软件18C1</el-dropdown-item>
                    <el-dropdown-item command="dsj18c1">大数据18C1</el-dropdown-item>
                    <el-dropdown-item command="dl18c1">动联18C1</el-dropdown-item>
                    <el-dropdown-item command="wl18c1">网络18C1</el-dropdown-item>
                    <el-dropdown-item command="wl18d1">网络18D1</el-dropdown-item>
                    <el-dropdown-item command="xg18h1">信管18H1</el-dropdown-item>
                    <el-dropdown-item command="xx18d1">信息18D1</el-dropdown-item>
                    <el-dropdown-item command="yjs18c1">云计算18C1</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>

                <el-dropdown @command="handleCommand2">
                  <span class="el-dropdown-link">
                    19级
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="rj19c1">软件19C1</el-dropdown-item>
                    <el-dropdown-item command="rj19c2">软件19C2</el-dropdown-item>
                    <el-dropdown-item command="dsj19c1">大数据19C1</el-dropdown-item>
                    <el-dropdown-item command="dl19c1">动联19C1</el-dropdown-item>
                    <el-dropdown-item command="wl19c1">网络19C1</el-dropdown-item>
                    <el-dropdown-item command="wl19d1">网络19D1</el-dropdown-item>
                    <el-dropdown-item command="xx19c1">信息19C1</el-dropdown-item>
                    <el-dropdown-item command="xx19d1">信息19D1</el-dropdown-item>
                    <el-dropdown-item command="yjs19c1">云计算19C1</el-dropdown-item>
                    <el-dropdown-item command="yjs19c2">云计算19C2</el-dropdown-item>
                    <el-dropdown-item command="jqr19c1">机器人19C1</el-dropdown-item>
                    <el-dropdown-item command="jqr19c2">机器人19C2</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <div class="allnav" id="kebiao"></div>
            <div class="boxfoot"></div>
          </div>
        </li>
        <li style="width:40%">
          <div class="bar" style="height: 1.6rem;margin-bottom:0.15rem;">
            <div class="barbox" style="height: 1rem">
              <ul class="clearfix">
                <li class="pulll_left counter" style="width:15%;">{{this.sumAll}}</li>
                <li
                  class="pulll_left counter"
                  style="width:35%;"
                >{{this.sumYingdao}}-{{this.sumShidao}}</li>
                <li class="pulll_left counter" style="width:15%;">{{this.sumChidao}}</li>
                <li class="pulll_left counter" style="width:35%;">
                  <div class="queqinrenshu">{{this.sumQueqin}}</div>
                  <div id="queqin"></div>
                </li>
              </ul>
            </div>
            <div class="barbox2">
              <ul class="clearfix">
                <li class="pulll_left" style="width:15%;">系部人数</li>
                <li class="pulll_left" style="width:35%;">当天上课-实际上课</li>
                <li class="pulll_left" style="width:15%;">迟到人数</li>
                <li class="pulll_left" style="width:35%;">缺勤人数</li>
              </ul>
            </div>
          </div>
          <div class="boxall" style="height: 5rem;">
            <div class="alltitle">课程直播</div>
            <div class="allnav">
              <video-player
                class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :options="playerOptions"
              ></video-player>
            </div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 2.85rem;">
            <div class="alltitle">辅导员信息</div>
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
        <li style="width:30%">
          <div class="boxall" style="height:3.2rem">
            <div class="alltitle">授课平台分析</div>
            <div class="allnav" id="main8"></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height:3.05rem">
            <div class="alltitle">网课初体验</div>
            <div class="allnav" id="main9"></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height:3.2rem">
            <div class="alltitle">网课出勤Top5</div>
            <div class="allnav" id="main10"></div>
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
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
import "videojs-flash";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
import { videoPlayer } from "vue-video-player";
import Header from "@/components/header";
export default {
  data() {
    return {
      staticUrl: this.staticUrl,
      //学校总人数
      sumAll: null,
      //应到
      sumYingdao: null,
      //实到
      sumShidao: null,
      //迟到
      sumChidao: null,
      //缺勤
      sumQueqin: null,
      //请假
      sumQingjia: null,
      //旷课
      sumKuangke: null,
      //当前时间
      currentTime: null,

      //直播配置
      playerOptions: {
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
          swf: "static/video-js.swf" // 引入静态文件swf
        },
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            // 流配置，数组形式，会根据兼容顺序自动切换
            type: "video/mp4",
            src: this.staticUrl + "/video/1.mp4" //url地址
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
      //课表数据
      rj18c2: [
        [
          1,
          4,
          1,
          "伊雯雯",
          "框架编程技术",
          "5-8",
          "职教云平台进行授课,完成相关任务",
          "全班46人正常签到45人"
        ],
        [
          1,
          5,
          1,
          "伊雯雯",
          "框架编程技术",
          "5-8",
          "职教云平台进行授课,完成相关任务",
          "全班46人正常签到45人"
        ],
        [
          1,
          6,
          1,
          "伊雯雯",
          "框架编程技术",
          "5-8",
          "职教云平台进行授课,完成相关任务",
          "全班46人正常签到45人"
        ],
        [
          1,
          7,
          1,
          "伊雯雯",
          "框架编程技术",
          "5-8",
          "职教云平台进行授课,完成相关任务",
          "全班46人正常签到45人"
        ],

        [
          2,
          0,
          1,
          "郝爱语",
          "软件质量保证与测试",
          "1-4",
          "共享教学资源至班级群,自主学习",
          "46"
        ],
        [
          2,
          1,
          1,
          "郝爱语",
          "软件质量保证与测试",
          "1-4",
          "共享教学资源至班级群,自主学习",
          "46"
        ],
        [
          2,
          2,
          1,
          "郝爱语",
          "软件质量保证与测试",
          "1-4",
          "共享教学资源至班级群,自主学习",
          "46"
        ],
        [
          2,
          3,
          1,
          "郝爱语",
          "软件质量保证与测试",
          "1-4",
          "共享教学资源至班级群,自主学习",
          "46"
        ]
      ],
      rj19c1: [
        [
          0,
          0,
          1,
          "芮文艳",
          "JavaScript程序设计",
          "1-4",
          "企业微信会议音频课 ",
          "43"
        ],
        [
          0,
          1,
          1,
          "芮文艳",
          "JavaScript程序设计",
          "1-4",
          "企业微信会议音频课 ",
          "43"
        ],
        [
          0,
          2,
          1,
          "芮文艳",
          "JavaScript程序设计",
          "1-4",
          "企业微信会议音频课 ",
          "43"
        ],
        [
          0,
          3,
          1,
          "芮文艳",
          "JavaScript程序设计",
          "1-4",
          "企业微信会议音频课 ",
          "43"
        ],

        [
          0,
          4,
          1,
          "朱东",
          "关系数据库基础与应用",
          "5-6",
          "企业微信会议直播",
          "47"
        ],
        [
          0,
          5,
          1,
          "朱东",
          "关系数据库基础与应用",
          "5-6",
          "企业微信会议直播",
          "47"
        ],

        [
          1,
          0,
          1,
          "刘文军",
          "JAVA面向对象编程",
          "1-4",
          "企业微信音频会议,共享屏幕讲课",
          "47"
        ],
        [
          1,
          1,
          1,
          "刘文军",
          "JAVA面向对象编程",
          "1-4",
          "企业微信音频会议,共享屏幕讲课",
          "47"
        ],
        [
          1,
          2,
          1,
          "刘文军",
          "JAVA面向对象编程",
          "1-4",
          "企业微信音频会议,共享屏幕讲课",
          "47"
        ],
        [
          1,
          3,
          1,
          "刘文军",
          "JAVA面向对象编程",
          "1-4",
          "企业微信音频会议,共享屏幕讲课",
          "47"
        ],

        [
          3,
          4,
          1,
          "刘文军",
          "JAVA面向对象编程",
          "5-6",
          "教学平台资源发布、企业微信会议辅导和答疑",
          "47"
        ],
        [
          3,
          5,
          1,
          "刘文军",
          "JAVA面向对象编程",
          "5-6",
          "教学平台资源发布、企业微信会议辅导和答疑",
          "47"
        ],

        [
          4,
          0,
          1,
          "吴阅帆",
          "Linux系统管理C",
          "1-4",
          "多平台远程指导学生安装虚拟机及Linux",
          "45"
        ],
        [
          4,
          1,
          1,
          "吴阅帆",
          "Linux系统管理C",
          "1-4",
          "多平台远程指导学生安装虚拟机及Linux",
          "45"
        ],
        [
          4,
          2,
          1,
          "吴阅帆",
          "Linux系统管理C",
          "1-4",
          "多平台远程指导学生安装虚拟机及Linux",
          "45"
        ],
        [
          4,
          3,
          1,
          "吴阅帆",
          "Linux系统管理C",
          "1-4",
          "多平台远程指导学生安装虚拟机及Linux",
          "45"
        ]
      ],
      dsj18c1: [
        [
          0,
          0,
          1,
          "黄金晶",
          "软件工程与建模",
          "1-4",
          "网络平台不太稳定，后续在群里发送资源进行学习",
          "平台不稳定，未签到"
        ],
        [
          0,
          1,
          1,
          "黄金晶",
          "软件工程与建模",
          "1-4",
          "网络平台不太稳定，后续在群里发送资源进行学习",
          "平台不稳定，未签到"
        ],
        [
          0,
          2,
          1,
          "黄金晶",
          "软件工程与建模",
          "1-4",
          "网络平台不太稳定，后续在群里发送资源进行学习",
          "平台不稳定，未签到"
        ],
        [
          0,
          3,
          1,
          "黄金晶",
          "软件工程与建模",
          "1-4",
          "网络平台不太稳定，后续在群里发送资源进行学习",
          "平台不稳定，未签到"
        ],

        [
          1,
          0,
          1,
          "艾旭升",
          "大数据实时应用开发",
          "1-2",
          "企业微信直播与网络平台结合上课",
          "39"
        ],
        [
          1,
          1,
          1,
          "艾旭升",
          "大数据实时应用开发",
          "1-2",
          "企业微信直播与网络平台结合上课",
          "39"
        ],

        [
          2,
          0,
          1,
          "李良",
          "数据可视化编程和操作",
          "1-4",
          "QQ群直播",
          "应到44人,迟到2人"
        ],
        [
          2,
          1,
          1,
          "李良",
          "数据可视化编程和操作",
          "1-4",
          "QQ群直播",
          "应到44人,迟到2人"
        ],
        [
          2,
          2,
          1,
          "李良",
          "数据可视化编程和操作",
          "1-4",
          "QQ群直播",
          "应到44人,迟到2人"
        ],
        [
          2,
          3,
          1,
          "李良",
          "数据可视化编程和操作",
          "1-4",
          "QQ群直播",
          "应到44人,迟到2人"
        ],

        [
          3,
          0,
          1,
          "郝爱语",
          "大数据应用测试技术和工具",
          "1-2",
          "共享教学资源至班级群,自主学习,不懂的地方及时联系教师",
          "44"
        ],
        [
          3,
          1,
          1,
          "郝爱语",
          "大数据应用测试技术和工具",
          "1-2",
          "共享教学资源至班级群,自主学习,不懂的地方及时联系教师",
          "44"
        ]
      ],
      dsj19c1: [
        [
          0,
          0,
          1,
          "艾旭升",
          " Linux系统管理C",
          "1-4",
          "网络平台，完成任务提交作业",
          "完成作业8人"
        ],
        [
          0,
          1,
          1,
          "艾旭升",
          " Linux系统管理C",
          "1-4",
          "网络平台，完成任务提交作业",
          "完成作业8人"
        ],
        [
          0,
          2,
          1,
          "艾旭升",
          " Linux系统管理C",
          "1-4",
          "网络平台，完成任务提交作业",
          "完成作业8人"
        ],
        [
          0,
          3,
          1,
          "艾旭升",
          " Linux系统管理C",
          "1-4",
          "网络平台，完成任务提交作业",
          "完成作业8人"
        ],

        [
          0,
          4,
          1,
          "杨小英",
          "关系数据库基础与应用",
          "5-6",
          "网络平台，企业微信群、QQ群上答疑",
          "31"
        ],
        [
          0,
          5,
          1,
          "杨小英",
          "关系数据库基础与应用",
          "5-6",
          "网络平台，企业微信群、QQ群上答疑",
          "31"
        ],

        [1, 0, 1, "杨小英", "Web前端技术基础", "1-4", "企业微信直播", "31"],
        [1, 1, 1, "杨小英", "Web前端技术基础", "1-4", "企业微信直播", "31"],
        [1, 2, 1, "杨小英", "Web前端技术基础", "1-4", "企业微信直播", "31"],
        [1, 3, 1, "杨小英", "Web前端技术基础", "1-4", "企业微信直播", "31"],

        [
          2,
          0,
          1,
          "杨小英",
          "关系数据库基础与应用",
          "1-4",
          "企业微信直播、互动交流",
          "32"
        ],
        [
          2,
          1,
          1,
          "杨小英",
          "关系数据库基础与应用",
          "1-4",
          "企业微信直播、互动交流",
          "32"
        ],
        [
          2,
          2,
          1,
          "杨小英",
          "关系数据库基础与应用",
          "1-4",
          "企业微信直播、互动交流",
          "32"
        ],
        [
          2,
          3,
          1,
          "杨小英",
          "关系数据库基础与应用",
          "1-4",
          "企业微信直播、互动交流",
          "32"
        ]
      ],
      dl18c1: [
        [0, 4, 1, "雷晖", " 框架编程技术", "5-6", "QQ视频完成教学", "42"],
        [0, 5, 1, "雷晖", " 框架编程技术", "5-6", "QQ视频完成教学", "42"],

        [
          2,
          0,
          1,
          "罗颖",
          " 微信小程序开发",
          "1-4",
          "企业微信音频会议、屏幕分享、讲解重点互动",
          "44"
        ],
        [
          2,
          1,
          1,
          "罗颖",
          " 微信小程序开发",
          "1-4",
          "企业微信音频会议、屏幕分享、讲解重点互动",
          "44"
        ],
        [
          2,
          2,
          1,
          "罗颖",
          " 微信小程序开发",
          "1-4",
          "企业微信音频会议、屏幕分享、讲解重点互动",
          "44"
        ],
        [
          2,
          3,
          1,
          "罗颖",
          " 微信小程序开发",
          "1-4",
          "企业微信音频会议、屏幕分享、讲解重点互动",
          "44"
        ],

        [
          3,
          2,
          1,
          "李春华",
          " Linux系统管理B",
          "3-4",
          "企业微信语音会议、屏幕分享",
          "44"
        ],
        [
          3,
          3,
          1,
          "李春华",
          " Linux系统管理B",
          "3-4",
          "企业微信语音会议、屏幕分享",
          "44"
        ]
      ],
      dl19c1: [
        [
          0,
          0,
          1,
          "张伟华",
          " 关系数据库基础与应用",
          "1-4",
          "智慧职教平台,QQ答疑",
          "24"
        ],
        [
          0,
          1,
          1,
          "张伟华",
          " 关系数据库基础与应用",
          "1-4",
          "智慧职教平台,QQ答疑",
          "24"
        ],
        [
          0,
          2,
          1,
          "张伟华",
          " 关系数据库基础与应用",
          "1-4",
          "智慧职教平台,QQ答疑",
          "24"
        ],
        [
          0,
          3,
          1,
          "张伟华",
          " 关系数据库基础与应用",
          "1-4",
          "智慧职教平台,QQ答疑",
          "24"
        ],

        [
          1,
          0,
          1,
          "栾咏红",
          " 面向对象程序设计（JAVA）",
          "1-4",
          "观看教学视频,PDF文档资料,QQ在线答疑",
          "27"
        ],
        [
          1,
          1,
          1,
          "栾咏红",
          " 面向对象程序设计（JAVA）",
          "1-4",
          "观看教学视频,PDF文档资料,QQ在线答疑",
          "27"
        ],
        [
          1,
          2,
          1,
          "栾咏红",
          " 面向对象程序设计（JAVA）",
          "1-4",
          "观看教学视频,PDF文档资料,QQ在线答疑",
          "29"
        ],
        [
          1,
          3,
          1,
          "栾咏红",
          " 面向对象程序设计（JAVA）",
          "1-4",
          "观看教学视频,PDF文档资料,QQ在线答疑",
          "29"
        ],

        [
          2,
          0,
          1,
          "陈莉莉",
          " Web前端技术基础",
          "1-4",
          "企业微信音频会议+屏幕共享,云班课互动,教学资源学习",
          "28人，3人睡过，1人家里没有网络"
        ],
        [
          2,
          1,
          1,
          "陈莉莉",
          " Web前端技术基础",
          "1-4",
          "企业微信音频会议+屏幕共享,云班课互动,教学资源学习",
          "28人，3人睡过，1人家里没有网络"
        ],
        [
          2,
          2,
          1,
          "陈莉莉",
          " Web前端技术基础",
          "1-4",
          "企业微信音频会议+屏幕共享,云班课互动,教学资源学习",
          "28人，3人睡过，1人家里没有网络"
        ],
        [
          2,
          3,
          1,
          "陈莉莉",
          " Web前端技术基础",
          "1-4",
          "企业微信音频会议+屏幕共享,云班课互动,教学资源学习",
          "28人，3人睡过，1人家里没有网络"
        ],

        [
          4,
          0,
          1,
          "李春华",
          " Linux系统管理C",
          "1-2",
          "企业微信语音会议+网络教学平台+优慕课APP",
          "32"
        ],
        [
          4,
          1,
          1,
          "李春华",
          " Linux系统管理C",
          "1-2",
          "企业微信语音会议+网络教学平台+优慕课APP",
          "32"
        ],
        [
          4,
          4,
          1,
          "李春华",
          " Linux系统管理C",
          "5-6",
          "企业微信语音会议+网络教学平台+优慕课APP",
          "30"
        ],
        [
          4,
          5,
          1,
          "李春华",
          " Linux系统管理C",
          "5-6",
          "企业微信语音会议+网络教学平台+优慕课APP",
          "30"
        ]
      ],
      rj18c1: [
        [
          0,
          0,
          1,
          "郝爱语",
          " 软件质量保证与测试",
          "1-4",
          "发放教学资源至班级QQ群,规定当日12点之前提交作业任务",
          "45"
        ],
        [
          0,
          1,
          1,
          "郝爱语",
          " 软件质量保证与测试",
          "1-4",
          "发放教学资源至班级QQ群,规定当日12点之前提交作业任务",
          "45"
        ],
        [
          0,
          2,
          1,
          "郝爱语",
          " 软件质量保证与测试",
          "1-4",
          "发放教学资源至班级QQ群,规定当日12点之前提交作业任务",
          "45"
        ],
        [
          0,
          3,
          1,
          "郝爱语",
          " 软件质量保证与测试",
          "1-4",
          "发放教学资源至班级QQ群,规定当日12点之前提交作业任务",
          "45"
        ],

        [
          1,
          0,
          1,
          "王喜",
          " 框架编程技术",
          "1-2",
          "网络教学平台发布资源,企业微信群解答",
          "未说明"
        ],
        [
          1,
          1,
          1,
          "王喜",
          " 框架编程技术",
          "1-2",
          "网络教学平台发布资源,企业微信群解答",
          "未说明"
        ],

        [
          3,
          0,
          1,
          "王喜",
          " 框架编程技术",
          "1-2",
          "企业微信直播,直播间讨论",
          "38"
        ],
        [
          3,
          1,
          1,
          "王喜",
          " 框架编程技术",
          "1-2",
          "企业微信直播,直播间讨论",
          "38"
        ]
      ],
      rj19c2: [
        [0, 0, 1, "栾咏红", " Java程序设计", "1-4", "QQ留言解答问题", "34"],
        [0, 1, 1, "栾咏红", " Java程序设计", "1-4", "QQ留言解答问题", "34"],
        [0, 2, 1, "栾咏红", " Java程序设计", "1-4", "QQ留言解答问题", "42"],
        [0, 3, 1, "栾咏红", " Java程序设计", "1-4", "QQ留言解答问题", "42"],

        [
          0,
          4,
          1,
          "胡霞",
          " 关系数据库基础与应用",
          "5-6",
          "云班课完成课程",
          "45"
        ],
        [
          0,
          5,
          1,
          "胡霞",
          " 关系数据库基础与应用",
          "5-6",
          "云班课完成课程",
          "45"
        ],

        [
          1,
          0,
          1,
          "芮文艳",
          " JavaScript程序设计",
          "1-4",
          "企业微信音频会议,共享屏幕讲课",
          "44"
        ],
        [
          1,
          1,
          1,
          "芮文艳",
          " JavaScript程序设计",
          "1-4",
          "企业微信音频会议,共享屏幕讲课",
          "44"
        ],
        [
          1,
          2,
          1,
          "芮文艳",
          " JavaScript程序设计",
          "1-4",
          "企业微信音频会议,共享屏幕讲课",
          "44"
        ],
        [
          1,
          3,
          1,
          "芮文艳",
          " JavaScript程序设计",
          "1-4",
          "企业微信音频会议,共享屏幕讲课",
          "44"
        ],

        [
          1,
          4,
          1,
          "吴阅帆",
          " Linux系统管理C",
          "5-6",
          "多平台指导学生安装虚拟机及Linux",
          "未签到"
        ],
        [
          1,
          5,
          1,
          "吴阅帆",
          " Linux系统管理C",
          "5-6",
          "多平台指导学生安装虚拟机及Linux",
          "未签到"
        ],

        [
          3,
          4,
          1,
          "栾咏红",
          " JAVA面向对象编程",
          "5-6",
          "观看教学资料,QQ在线答疑",
          "27"
        ],
        [
          3,
          5,
          1,
          "栾咏红",
          " JAVA面向对象编程",
          "5-6",
          "观看教学资料,QQ在线答疑",
          "29"
        ],

        [
          3,
          0,
          1,
          "吴阅帆",
          " Linux系统管理C",
          "1-2",
          "多平台远程指导学生",
          "43"
        ],
        [
          3,
          1,
          1,
          "吴阅帆",
          " Linux系统管理C",
          "1-2",
          "多平台远程指导学生",
          "43"
        ],

        [
          4,
          0,
          1,
          "胡霞",
          " 关系数据库基础与应用",
          "1-4",
          "微信会议共享屏幕语音讲解,云班课讨论",
          "实到43人,缺席2人"
        ],
        [
          4,
          1,
          1,
          "胡霞",
          " 关系数据库基础与应用",
          "1-4",
          "微信会议共享屏幕语音讲解,云班课讨论",
          "实到43人,缺席2人"
        ],
        [
          4,
          2,
          1,
          "胡霞",
          " 关系数据库基础与应用",
          "1-4",
          "微信会议共享屏幕语音讲解,云班课讨论",
          "实到43人,缺席2人"
        ],
        [
          4,
          3,
          1,
          "胡霞",
          " 关系数据库基础与应用",
          "1-4",
          "微信会议共享屏幕语音讲解,云班课讨论",
          "实到43人,缺席2人"
        ]
      ],
      wl18c1: [
        [
          0,
          0,
          1,
          "刘宝莲",
          " AutoCAD A",
          "1-4",
          "云班课线上学习PPT和视频,轻视频讨论和作业交流",
          "45"
        ],
        [
          0,
          1,
          1,
          "刘宝莲",
          " AutoCAD A",
          "1-4",
          "云班课线上学习PPT和视频,轻视频讨论和作业交流",
          "45"
        ],
        [
          0,
          2,
          1,
          "刘宝莲",
          " AutoCAD A",
          "1-4",
          "云班课线上学习PPT和视频,轻视频讨论和作业交流",
          "45"
        ],
        [
          0,
          3,
          1,
          "刘宝莲",
          " AutoCAD A",
          "1-4",
          "云班课线上学习PPT和视频,轻视频讨论和作业交流",
          "45"
        ],

        [
          0,
          4,
          1,
          "刘文军",
          " Python程序设计A",
          "5-6",
          "职教云平台在线学习,企业微信直播、答疑",
          "未签到"
        ],
        [
          0,
          5,
          1,
          "刘文军",
          " Python程序设计A",
          "5-6",
          "职教云平台在线学习,企业微信直播、答疑",
          "未签到"
        ],

        [1, 0, 1, "王东海", " 网络安全技术", "1-4", "网络教学平台", "37"],
        [1, 1, 1, "王东海", " 网络安全技术", "1-4", "网络教学平台", "37"],
        [1, 2, 1, "王东海", " 网络安全技术", "1-4", "网络教学平台", "37"],
        [1, 3, 1, "王东海", " 网络安全技术", "1-4", "网络教学平台", "37"],

        [
          2,
          0,
          1,
          "顾红燕",
          " 云计算架构技术与实践",
          "1-4",
          "云班课学习PPT和视频、完成作业,企业微信会议直播",
          "48人，2人未到"
        ],
        [
          2,
          1,
          1,
          "顾红燕",
          " 云计算架构技术与实践",
          "1-4",
          "云班课学习PPT和视频、完成作业,企业微信会议直播",
          "48人，2人未到"
        ],
        [
          2,
          2,
          1,
          "顾红燕",
          " 云计算架构技术与实践",
          "1-4",
          "云班课学习PPT和视频、完成作业,企业微信会议直播",
          "48人，2人未到"
        ],
        [
          2,
          3,
          1,
          "顾红燕",
          " 云计算架构技术与实践",
          "1-4",
          "云班课学习PPT和视频、完成作业,企业微信会议直播",
          "48人，2人未到"
        ],

        [
          3,
          0,
          1,
          "王东海",
          " 综合布线技术",
          "1-2",
          "微课、PPT学习、练习，在线答疑",
          "43"
        ],
        [
          3,
          1,
          1,
          "王东海",
          " 综合布线技术",
          "1-2",
          "微课、PPT学习、练习，在线答疑",
          "46"
        ],
        [
          3,
          2,
          1,
          "刘文军",
          " Python程序设计A",
          "3-4",
          "职教云学习、企业微信语言会议辅导和答疑",
          "50"
        ],
        [
          3,
          3,
          1,
          "刘文军",
          " Python程序设计A",
          "3-4",
          "职教云学习、企业微信语言会议辅导和答疑",
          "50"
        ]
      ],
      wl18d1: [
        [
          0,
          0,
          1,
          "顾红艳",
          " 云计算架构技术与实践",
          "1-4",
          "云班课学习PPT和视频，网络平台上传作业",
          "43"
        ],
        [
          0,
          1,
          1,
          "顾红艳",
          " 云计算架构技术与实践",
          "1-4",
          "云班课学习PPT和视频，网络平台上传作业",
          "43"
        ],
        [
          0,
          2,
          1,
          "顾红艳",
          " 云计算架构技术与实践",
          "1-4",
          "云班课学习PPT和视频，网络平台上传作业",
          "43"
        ],
        [
          0,
          3,
          1,
          "顾红艳",
          " 云计算架构技术与实践",
          "1-4",
          "云班课学习PPT和视频，网络平台上传作业",
          "43"
        ],

        [
          2,
          0,
          1,
          "王东海",
          " 网络安全技术",
          "1-4",
          "看视频,成练习提交平台,在线答疑",
          "38人，1人未到"
        ],
        [
          2,
          1,
          1,
          "王东海",
          " 网络安全技术",
          "1-4",
          "看视频,成练习提交平台,在线答疑",
          "38人，1人未到"
        ],
        [
          2,
          2,
          1,
          "王东海",
          " 网络安全技术",
          "1-4",
          "看视频,成练习提交平台,在线答疑",
          "38人，1人未到"
        ],
        [
          2,
          3,
          1,
          "王东海",
          " 网络安全技术",
          "1-4",
          "看视频,成练习提交平台,在线答疑",
          "38人，1人未到"
        ],

        [
          3,
          0,
          1,
          "时荣",
          " WEB安全渗透",
          "1-4",
          "企业微信直播,视频,完成实验报告一份",
          "44"
        ],
        [
          3,
          1,
          1,
          "时荣",
          " WEB安全渗透",
          "1-4",
          "企业微信直播,视频,完成实验报告一份",
          "44"
        ],
        [
          3,
          2,
          1,
          "时荣",
          " WEB安全渗透",
          "1-4",
          "企业微信直播,视频,完成实验报告一份",
          "44"
        ],
        [
          3,
          3,
          1,
          "时荣",
          " WEB安全渗透",
          "1-4",
          "企业微信直播,视频,完成实验报告一份",
          "44"
        ],

        [4, 0, 1, "刘宝莲", " 综合布线技术", "1-2", "云班课线上学习学习", "44"],
        [4, 1, 1, "刘宝莲", " 综合布线技术", "1-2", "云班课线上学习学习", "44"]
      ],
      wl19c1: [
        [
          0,
          0,
          1,
          "何亮",
          "  Linux系统管理C",
          "1-4",
          "QQ答疑，企业微信视频20分钟",
          "30"
        ],
        [
          0,
          1,
          1,
          "何亮",
          "  Linux系统管理C",
          "1-4",
          "QQ答疑，企业微信视频20分钟",
          "30"
        ],
        [
          0,
          2,
          1,
          "何亮",
          "  Linux系统管理C",
          "1-4",
          "QQ答疑，企业微信视频20分钟",
          "30"
        ],
        [
          0,
          3,
          1,
          "何亮",
          "  Linux系统管理C",
          "1-4",
          "QQ答疑，企业微信视频20分钟",
          "30"
        ],

        [
          0,
          4,
          1,
          "孙伟",
          "  关系数据库基础与应用",
          "5-8",
          "网络教学平台，但是效果不太好",
          "30"
        ],
        [
          0,
          5,
          1,
          "孙伟",
          "  关系数据库基础与应用",
          "5-8",
          "网络教学平台，但是效果不太好",
          "30"
        ],
        [
          0,
          6,
          1,
          "孙伟",
          "  关系数据库基础与应用",
          "5-8",
          "网络教学平台，但是效果不太好",
          "30"
        ],
        [
          0,
          7,
          1,
          "孙伟",
          "  关系数据库基础与应用",
          "5-8",
          "网络教学平台，但是效果不太好",
          "30"
        ],

        [
          1,
          0,
          1,
          "陈园园",
          " Web前端技术基础",
          "1-4",
          "网络教学平台学习,企业微信答疑",
          "31"
        ],
        [
          1,
          1,
          1,
          "陈园园",
          " Web前端技术基础",
          "1-4",
          "网络教学平台学习,企业微信答疑",
          "31"
        ],
        [
          1,
          2,
          1,
          "陈园园",
          " Web前端技术基础",
          "1-4",
          "网络教学平台学习,企业微信答疑",
          "31"
        ],
        [
          1,
          3,
          1,
          "陈园园",
          " Web前端技术基础",
          "1-4",
          "网络教学平台学习,企业微信答疑",
          "31"
        ],

        [
          2,
          0,
          1,
          "朱亮",
          " Windows Server配置与管理",
          "1-4",
          "企业微信语音会议",
          "31"
        ],
        [
          2,
          1,
          1,
          "朱亮",
          " Windows Server配置与管理",
          "1-4",
          "企业微信语音会议",
          "31"
        ],
        [
          2,
          2,
          1,
          "朱亮",
          " Windows Server配置与管理",
          "1-4",
          "企业微信语音会议",
          "31"
        ],
        [
          2,
          3,
          1,
          "朱亮",
          " Windows Server配置与管理",
          "1-4",
          "企业微信语音会议",
          "31"
        ],

        [
          3,
          0,
          1,
          "孙伟",
          " 关系数据库基础与应用",
          "1-2",
          "企业微信会议上课",
          "32"
        ],
        [
          3,
          1,
          1,
          "孙伟",
          " 关系数据库基础与应用",
          "1-2",
          "企业微信会议上课",
          "32"
        ],

        [
          3,
          4,
          1,
          "何亮",
          " Linux系统管理C",
          "5-6",
          "视频直播,学习资料放在学院网络教学平台和企业微信群",
          "签到31人,2人未签到"
        ],
        [
          3,
          5,
          1,
          "何亮",
          " Linux系统管理C",
          "5-6",
          "视频直播,学习资料放在学院网络教学平台和企业微信群",
          "签到31人,2人未签到"
        ]
      ],
      wl19d1: [
        [
          0,
          0,
          1,
          "朱亮",
          " Windows Server配置与管理",
          "1-4",
          "QQ、企业微信沟通答疑",
          "43"
        ],
        [
          0,
          1,
          1,
          "朱亮",
          " Windows Server配置与管理",
          "1-4",
          "QQ、企业微信沟通答疑",
          "43"
        ],
        [
          0,
          2,
          1,
          "朱亮",
          " Windows Server配置与管理",
          "1-4",
          "QQ、企业微信沟通答疑",
          "43"
        ],
        [
          0,
          3,
          1,
          "朱亮",
          " Windows Server配置与管理",
          "1-4",
          "QQ、企业微信沟通答疑",
          "43"
        ],

        [
          0,
          4,
          1,
          "罗颖",
          " 关系数据库基础与应用",
          "5-8",
          "企业微信音频会议,授课多平台课同时发布资源",
          "43"
        ],
        [
          0,
          5,
          1,
          "罗颖",
          " 关系数据库基础与应用",
          "5-8",
          "企业微信音频会议,授课多平台课同时发布资源",
          "43"
        ],
        [
          0,
          6,
          1,
          "罗颖",
          " 关系数据库基础与应用",
          "5-8",
          "企业微信音频会议,授课多平台课同时发布资源",
          "43"
        ],
        [
          0,
          7,
          1,
          "罗颖",
          " 关系数据库基础与应用",
          "5-8",
          "企业微信音频会议,授课多平台课同时发布资源",
          "43"
        ],

        [
          1,
          0,
          1,
          "何亮",
          " Linux系统管理C",
          "1-4",
          "企业微信音频会议,共享屏幕讲课",
          "未说明"
        ],
        [
          1,
          1,
          1,
          "何亮",
          " Linux系统管理C",
          "1-4",
          "企业微信音频会议,共享屏幕讲课",
          "未说明"
        ],
        [
          1,
          2,
          1,
          "何亮",
          " Linux系统管理C",
          "1-4",
          "企业微信音频会议,共享屏幕讲课",
          "未说明"
        ],
        [
          1,
          3,
          1,
          "何亮",
          " Linux系统管理C",
          "1-4",
          "企业微信音频会议,共享屏幕讲课",
          "未说明"
        ],

        [
          2,
          0,
          1,
          "密海英",
          " Web前端技术基础",
          "1-4",
          "企业微信语音会议",
          "31"
        ],
        [
          2,
          1,
          1,
          "密海英",
          " Web前端技术基础",
          "1-4",
          "企业微信语音会议",
          "31"
        ],
        [
          2,
          2,
          1,
          "密海英",
          " Web前端技术基础",
          "1-4",
          "企业微信语音会议",
          "31"
        ],
        [
          2,
          3,
          1,
          "密海英",
          " Web前端技术基础",
          "1-4",
          "企业微信语音会议",
          "31"
        ],

        [
          3,
          4,
          1,
          "罗颖",
          " 关系数据库基础与应用",
          "5-6",
          "企业微信音频会议+屏幕分享,云班课提交课堂练习",
          "43"
        ],
        [
          3,
          5,
          1,
          "罗颖",
          " 关系数据库基础与应用",
          "5-6",
          "企业微信音频会议+屏幕分享,云班课提交课堂练习",
          "43"
        ]
      ],
      xg18h1: [
        [
          0,
          0,
          1,
          "汤晓燕",
          " WEB应用程序开发(ASP.NET)",
          "1-4",
          "网络平台学习及讨论，后半部分效果不太理想",
          "24"
        ],
        [
          0,
          1,
          1,
          "汤晓燕",
          " WEB应用程序开发(ASP.NET)",
          "1-4",
          "网络平台学习及讨论，后半部分效果不太理想",
          "24"
        ],
        [
          0,
          2,
          1,
          "汤晓燕",
          " WEB应用程序开发(ASP.NET)",
          "1-4",
          "网络平台学习及讨论，后半部分效果不太理想",
          "24"
        ],
        [
          0,
          3,
          1,
          "汤晓燕",
          " WEB应用程序开发(ASP.NET)",
          "1-4",
          "网络平台学习及讨论，后半部分效果不太理想",
          "24"
        ],

        [0, 4, 1, "吴阅帆", " 客户关系管理B", "5-6", "无", "未说明"],
        [0, 5, 1, "吴阅帆", " 客户关系管理B", "5-6", "无", "未说明"],

        [
          1,
          0,
          1,
          "黄金晶",
          " 软件工程与建模",
          "1-4",
          "企业微信打卡,群内上课解答,网络平台上传视频",
          "36"
        ],
        [
          1,
          1,
          1,
          "黄金晶",
          " 软件工程与建模",
          "1-4",
          "企业微信打卡,群内上课解答,网络平台上传视频",
          "36"
        ],
        [
          1,
          2,
          1,
          "黄金晶",
          " 软件工程与建模",
          "1-4",
          "企业微信打卡,群内上课解答,网络平台上传视频",
          "36"
        ],
        [
          1,
          3,
          1,
          "黄金晶",
          " 软件工程与建模",
          "1-4",
          "企业微信打卡,群内上课解答,网络平台上传视频",
          "36"
        ],

        [
          2,
          0,
          1,
          "沈茜",
          " 虚拟现实项目开发",
          "1-2",
          "语音会议+实践任务+讨论区任务成果分享",
          "36人，1人未到"
        ],
        [
          2,
          1,
          1,
          "沈茜",
          " 虚拟现实项目开发",
          "1-2",
          "语音会议+实践任务+讨论区任务成果分享",
          "36人，1人未到"
        ],

        [
          3,
          4,
          1,
          "李良",
          " 金融数据分析A",
          "5-6",
          "QQ群直播，问卷星扫码做题",
          "37人，迟到2人"
        ],
        [
          3,
          5,
          1,
          "李良",
          " 金融数据分析A",
          "5-6",
          "QQ群直播，问卷星扫码做题",
          "37人，迟到2人"
        ]
      ],
      xx18d1: [
        [
          0,
          0,
          1,
          "沈茜",
          " 客户端脚本框架应用",
          "1-4",
          "无法登上平台，资料发在群里",
          "37人签到，44人企业微信群均在线"
        ],
        [
          0,
          1,
          1,
          "沈茜",
          " 客户端脚本框架应用",
          "1-4",
          "无法登上平台，资料发在群里",
          "37人签到，44人企业微信群均在线"
        ],
        [
          0,
          2,
          1,
          "沈茜",
          " 客户端脚本框架应用",
          "1-4",
          "无法登上平台，资料发在群里",
          "37人签到，44人企业微信群均在线"
        ],
        [
          0,
          3,
          1,
          "沈茜",
          " 客户端脚本框架应用",
          "1-4",
          "无法登上平台，资料发在群里",
          "37人签到，44人企业微信群均在线"
        ],

        [
          1,
          4,
          1,
          "沈茜",
          " 虚拟现实项目开发",
          "5-6",
          "企业微信音频会议+共享屏幕讲课,网络教学平台讨论",
          "51"
        ],
        [
          1,
          5,
          1,
          "沈茜",
          " 虚拟现实项目开发",
          "5-6",
          "企业微信音频会议+共享屏幕讲课,网络教学平台讨论",
          "51"
        ],

        [
          2,
          0,
          1,
          "汤晓燕",
          " WEB应用程序开发（ASP.NET）A",
          "1-4",
          "企业微信音频会议+屏幕分享,网络平台教学资源",
          "51"
        ],
        [
          2,
          1,
          1,
          "汤晓燕",
          " WEB应用程序开发（ASP.NET）A",
          "1-4",
          "企业微信音频会议+屏幕分享,网络平台教学资源",
          "51"
        ],
        [
          2,
          2,
          1,
          "汤晓燕",
          " WEB应用程序开发（ASP.NET）A",
          "1-4",
          "企业微信音频会议+屏幕分享,网络平台教学资源",
          "51"
        ],
        [
          2,
          3,
          1,
          "汤晓燕",
          " WEB应用程序开发（ASP.NET）A",
          "1-4",
          "企业微信音频会议+屏幕分享,网络平台教学资源",
          "51"
        ],

        [
          3,
          0,
          1,
          "芮文艳",
          " 网站运营及维护",
          "1-2",
          "企业微信音频会议+屏幕分享",
          "51"
        ],
        [
          3,
          1,
          1,
          "芮文艳",
          " 网站运营及维护",
          "1-2",
          "企业微信音频会议+屏幕分享",
          "51"
        ]
      ],
      xx19c1: [
        [
          0,
          0,
          1,
          "陈莉莉",
          " Web前端技术基础",
          "1-4",
          "QQ演示，平台发布视频",
          "37人签到，40人QQ在线"
        ],
        [
          0,
          1,
          1,
          "陈莉莉",
          " Web前端技术基础",
          "1-4",
          "QQ演示，平台发布视频",
          "37人签到，40人QQ在线"
        ],
        [
          0,
          2,
          1,
          "陈莉莉",
          " Web前端技术基础",
          "1-4",
          "QQ演示，平台发布视频",
          "37人签到，40人QQ在线"
        ],
        [
          0,
          3,
          1,
          "陈莉莉",
          " Web前端技术基础",
          "1-4",
          "QQ演示，平台发布视频",
          "37人签到，40人QQ在线"
        ],

        [
          1,
          0,
          1,
          "陈瑾",
          " Linux系统管理C",
          "1-4",
          "网络平台，QQ答疑讨论",
          "41"
        ],
        [
          1,
          1,
          1,
          "陈瑾",
          " Linux系统管理C",
          "1-4",
          "网络平台，QQ答疑讨论",
          "41"
        ],
        [
          1,
          2,
          1,
          "陈瑾",
          " Linux系统管理C",
          "1-4",
          "网络平台，QQ答疑讨论",
          "41"
        ],
        [
          1,
          3,
          1,
          "陈瑾",
          " Linux系统管理C",
          "1-4",
          "网络平台，QQ答疑讨论",
          "41"
        ],

        [
          2,
          0,
          1,
          "胡霞",
          " 关系数据库基础与应用",
          "1-4",
          "云班课上课，教学资源学习",
          "41人参加，7人迟到"
        ],
        [
          2,
          1,
          1,
          "胡霞",
          " 关系数据库基础与应用",
          "1-4",
          "云班课上课，教学资源学习",
          "41人参加，7人迟到"
        ],
        [
          2,
          2,
          1,
          "胡霞",
          " 关系数据库基础与应用",
          "1-4",
          "云班课上课，教学资源学习",
          "41人参加，7人迟到"
        ],
        [
          2,
          3,
          1,
          "胡霞",
          " 关系数据库基础与应用",
          "1-4",
          "云班课上课，教学资源学习",
          "41人参加，7人迟到"
        ],

        [
          3,
          0,
          1,
          "陈莉莉",
          " Web前端技术基础",
          "1-2",
          "企业微信和云班课教学",
          "40人，1人病假"
        ],
        [
          3,
          1,
          1,
          "陈莉莉",
          " Web前端技术基础",
          "1-2",
          "企业微信和云班课教学",
          "40人，1人病假"
        ],

        [
          4,
          0,
          1,
          "盛永华",
          " 三维物件建模（3dsMax）",
          "1-4",
          "企业微信上课,云班课测试抢答,网络教学平台答疑讨论",
          "41"
        ],
        [
          4,
          1,
          1,
          "盛永华",
          " 三维物件建模（3dsMax）",
          "1-4",
          "企业微信上课,云班课测试抢答,网络教学平台答疑讨论",
          "41"
        ],
        [
          4,
          2,
          1,
          "盛永华",
          " 三维物件建模（3dsMax）",
          "1-4",
          "企业微信上课,云班课测试抢答,网络教学平台答疑讨论",
          "41"
        ],
        [
          4,
          3,
          1,
          "盛永华",
          " 三维物件建模（3dsMax）",
          "1-4",
          "企业微信上课,云班课测试抢答,网络教学平台答疑讨论",
          "41"
        ]
      ],
      xx19d1: [
        [
          0,
          0,
          1,
          "密海英",
          " Web前端技术基础",
          "1-4",
          "网络平台，完成任务提交作业",
          "44"
        ],
        [
          0,
          1,
          1,
          "密海英",
          " Web前端技术基础",
          "1-4",
          "网络平台，完成任务提交作业",
          "44"
        ],
        [
          0,
          2,
          1,
          "密海英",
          " Web前端技术基础",
          "1-4",
          "网络平台，完成任务提交作业",
          "44"
        ],
        [
          0,
          3,
          1,
          "密海英",
          " Web前端技术基础",
          "1-4",
          "网络平台，完成任务提交作业",
          "44"
        ],

        [1, 0, 1, "盛永华", " 三维物件建模（3dsMax）", "1-4"],
        [1, 1, 1, "盛永华", " 三维物件建模（3dsMax）", "1-4"],
        [1, 2, 1, "盛永华", " 三维物件建模（3dsMax）", "1-4"],
        [1, 3, 1, "盛永华", " 三维物件建模（3dsMax）", "1-4"],

        [
          1,
          4,
          1,
          "朱东",
          " 关系数据库基础与应用",
          "5-6",
          "在线学习教学资料及视频,网络教学平台进行答疑讨论",
          "40"
        ],
        [
          1,
          5,
          1,
          "朱东",
          " 关系数据库基础与应用",
          "5-6",
          "在线学习教学资料及视频,网络教学平台进行答疑讨论",
          "40"
        ],

        [
          2,
          0,
          1,
          "陈瑾",
          " Linux系统管理C",
          "1-4",
          "学校网络平台发布视频资源、文档,QQ在线答疑讨论",
          "44"
        ],
        [
          2,
          1,
          1,
          "陈瑾",
          " Linux系统管理C",
          "1-4",
          "学校网络平台发布视频资源、文档,QQ在线答疑讨论",
          "44"
        ],
        [
          2,
          2,
          1,
          "陈瑾",
          " Linux系统管理C",
          "1-4",
          "学校网络平台发布视频资源、文档,QQ在线答疑讨论",
          "44"
        ],
        [
          2,
          3,
          1,
          "陈瑾",
          " Linux系统管理C",
          "1-4",
          "学校网络平台发布视频资源、文档,QQ在线答疑讨论",
          "44"
        ],

        [
          3,
          0,
          1,
          "密海英",
          " Web前端技术基础",
          "1-2",
          "在线与学生互动,提问",
          "2人，2人睡过"
        ],
        [
          3,
          1,
          1,
          "密海英",
          " Web前端技术基础",
          "1-2",
          "在线与学生互动,提问",
          "2人，2人睡过"
        ]
      ],
      yjs18c1: [
        [
          0,
          0,
          1,
          "伊雯雯",
          " Java Web云应用开发",
          "1-4",
          "要求8:10-8:39在群里打卡",
          "按时打卡38人，5人迟到，3人始终没有参与"
        ],
        [
          0,
          1,
          1,
          "伊雯雯",
          " Java Web云应用开发",
          "1-4",
          "要求8:10-8:39在群里打卡",
          "按时打卡38人，5人迟到，3人始终没有参与"
        ],
        [
          0,
          2,
          1,
          "伊雯雯",
          " Java Web云应用开发",
          "1-4",
          "要求8:10-8:39在群里打卡",
          "按时打卡38人，5人迟到，3人始终没有参与"
        ],
        [
          0,
          3,
          1,
          "伊雯雯",
          " Java Web云应用开发",
          "1-4",
          "要求8:10-8:39在群里打卡",
          "按时打卡38人，5人迟到，3人始终没有参与"
        ],

        [
          1,
          0,
          1,
          "张伟华",
          " Android云应用开发",
          "1-4",
          "职教云上传教学视频和PPT和作业,学生在线学习",
          "28"
        ],
        [
          1,
          1,
          1,
          "张伟华",
          " Android云应用开发",
          "1-4",
          "职教云上传教学视频和PPT和作业",
          "28"
        ],
        [
          1,
          2,
          1,
          "张伟华",
          " Android云应用开发",
          "1-4",
          "职教云上传教学视频和PPT和作业",
          "42"
        ],
        [
          1,
          3,
          1,
          "张伟华",
          " Android云应用开发",
          "1-4",
          "职教云上传教学视频和PPT和作业",
          "42"
        ],

        [
          2,
          0,
          1,
          "李文俊",
          " 云计算网络技术与应用",
          "1-4",
          "教学平台学习,部分学生遇到网络问题，使用群里资料学习",
          "41"
        ],
        [
          2,
          1,
          1,
          "李文俊",
          " 云计算网络技术与应用",
          "1-4",
          "教学平台学习,部分学生遇到网络问题，使用群里资料学习",
          "41"
        ],
        [
          2,
          2,
          1,
          "李文俊",
          " 云计算网络技术与应用",
          "1-4",
          "教学平台学习,部分学生遇到网络问题，使用群里资料学习",
          "41"
        ],
        [
          2,
          3,
          1,
          "李文俊",
          " 云计算网络技术与应用",
          "1-4",
          "教学平台学习,部分学生遇到网络问题，使用群里资料学习",
          "41"
        ],

        [
          3,
          0,
          1,
          "顾红燕",
          " 路由与交换技术",
          "1-4",
          "云班课学习PPT和视频,完成作业,企业微信会议直播",
          "41人，1人请假"
        ],
        [
          3,
          1,
          1,
          "顾红燕",
          " 路由与交换技术",
          "1-4",
          "云班课学习PPT和视频,完成作业,企业微信会议直播",
          "41人，1人请假"
        ],
        [
          3,
          2,
          1,
          "顾红燕",
          " 路由与交换技术",
          "1-4",
          "云班课学习PPT和视频,完成作业,企业微信会议直播",
          "41人，1人请假"
        ],
        [
          3,
          3,
          1,
          "顾红燕",
          " 路由与交换技术",
          "1-4",
          "云班课学习PPT和视频,完成作业,企业微信会议直播",
          "41人，1人请假"
        ],

        [
          3,
          4,
          1,
          "伊雯雯",
          " Java Web云应用开发",
          "5-6",
          "直播授课,发布在线测试、作业,提问5次",
          "38"
        ],
        [
          3,
          5,
          1,
          "伊雯雯",
          " Java Web云应用开发",
          "5-6",
          "直播授课,发布在线测试、作业,提问5次",
          "38"
        ],

        [
          4,
          0,
          1,
          "李文俊",
          " 云计算网络技术与应用",
          "1-4",
          "理论自学和实验为主",
          "38"
        ],
        [
          4,
          1,
          1,
          "李文俊",
          " 云计算网络技术与应用",
          "1-4",
          "理论自学和实验为主",
          "38"
        ],
        [
          4,
          2,
          1,
          "李文俊",
          " 云计算网络技术与应用",
          "1-4",
          "理论自学和实验为主",
          "38"
        ],
        [
          4,
          3,
          1,
          "李文俊",
          " 云计算网络技术与应用",
          "1-4",
          "理论自学和实验为主",
          "38"
        ]
      ],
      yjs19c1: [
        [
          0,
          0,
          1,
          "李文俊",
          "  Linux系统管理C",
          "1-4",
          "网络平台，完成任务提交作业",
          "上午有10个，下午有学生在继续学习"
        ],
        [
          0,
          1,
          1,
          "李文俊",
          "  Linux系统管理C",
          "1-4",
          "网络平台，完成任务提交作业",
          "上午有10个，下午有学生在继续学习"
        ],
        [
          0,
          2,
          1,
          "李文俊",
          "  Linux系统管理C",
          "1-4",
          "网络平台，完成任务提交作业",
          "上午有10个，下午有学生在继续学习"
        ],
        [
          0,
          3,
          1,
          "李文俊",
          "  Linux系统管理C",
          "1-4",
          "网络平台，完成任务提交作业",
          "上午有10个，下午有学生在继续学习"
        ],

        [
          1,
          0,
          1,
          "李良",
          " Python程序设计",
          "1-4",
          "QQ群直播,问卷星做题",
          "38"
        ],
        [
          1,
          1,
          1,
          "李良",
          " Python程序设计",
          "1-4",
          "QQ群直播,问卷星做题",
          "38"
        ],
        [
          1,
          2,
          1,
          "李良",
          " Python程序设计",
          "1-4",
          "QQ群直播,问卷星做题",
          "38"
        ],
        [
          1,
          3,
          1,
          "李良",
          " Python程序设计",
          "1-4",
          "QQ群直播,问卷星做题",
          "38"
        ],

        [
          1,
          4,
          1,
          "张佳磊",
          " Web前端技术基础",
          "5-6",
          "企业微信直播,网络教学平台资源学习",
          "39"
        ],
        [
          1,
          5,
          1,
          "张佳磊",
          " Web前端技术基础",
          "5-6",
          "企业微信直播,网络教学平台资源学习",
          "39"
        ],

        [
          2,
          0,
          1,
          "黄金晶",
          " 关系数据库基础与应用",
          "1-4",
          "企业微信直播+企业微信群互动交流",
          "37"
        ],
        [
          2,
          1,
          1,
          "黄金晶",
          " 关系数据库基础与应用",
          "1-4",
          "企业微信直播+企业微信群互动交流",
          "37"
        ],
        [
          2,
          2,
          1,
          "黄金晶",
          " 关系数据库基础与应用",
          "1-4",
          "企业微信直播+企业微信群互动交流",
          "37"
        ],
        [
          2,
          3,
          1,
          "黄金晶",
          " 关系数据库基础与应用",
          "1-4",
          "企业微信直播+企业微信群互动交流",
          "37"
        ],

        [
          4,
          0,
          1,
          "张佳磊",
          " Web前端技术基础",
          "1-4",
          "企业微信直播,线上互动,企业微信签到",
          "39"
        ],
        [
          4,
          1,
          1,
          "张佳磊",
          " Web前端技术基础",
          "1-4",
          "企业微信直播,线上互动,企业微信签到",
          "39"
        ],
        [
          4,
          2,
          1,
          "张佳磊",
          " Web前端技术基础",
          "1-4",
          "企业微信直播,线上互动,企业微信签到",
          "39"
        ],
        [
          4,
          3,
          1,
          "张佳磊",
          " Web前端技术基础",
          "1-4",
          "企业微信直播,线上互动,企业微信签到",
          "39"
        ]
      ],
      yjs19c2: [
        [
          0,
          0,
          1,
          "陈园园",
          "  Web前端技术基础",
          "1-4",
          "网络平台，完成任务提交作业",
          "未说明"
        ],
        [
          0,
          1,
          1,
          "陈园园",
          "  Web前端技术基础",
          "1-4",
          "网络平台，完成任务提交作业",
          "未说明"
        ],
        [
          0,
          2,
          1,
          "陈园园",
          "  Web前端技术基础",
          "1-4",
          "网络平台，完成任务提交作业",
          "未说明"
        ],
        [
          0,
          3,
          1,
          "陈园园",
          "  Web前端技术基础",
          "1-4",
          "网络平台，完成任务提交作业",
          "未说明"
        ],

        [
          1,
          0,
          1,
          "孙伟",
          " Python程序设计",
          "1-4",
          "企业微信音频直播+屏幕演示,职教云平台资源自学",
          "38"
        ],
        [
          1,
          1,
          1,
          "孙伟",
          " Python程序设计",
          "1-4",
          "企业微信音频直播+屏幕演示,职教云平台资源自学",
          "38"
        ],
        [
          1,
          2,
          1,
          "孙伟",
          " Python程序设计",
          "1-4",
          "企业微信音频直播+屏幕演示,职教云平台资源自学",
          "38"
        ],
        [
          1,
          3,
          1,
          "孙伟",
          " Python程序设计",
          "1-4",
          "企业微信音频直播+屏幕演示,职教云平台资源自学",
          "38"
        ],

        [
          2,
          0,
          1,
          "陈园园",
          " Web前端技术基础",
          "1-2",
          "企业微信群发布资源,综合教学平台",
          "39"
        ],
        [
          2,
          1,
          1,
          "陈园园",
          " Web前端技术基础",
          "1-2",
          "企业微信群发布资源,综合教学平台",
          "39"
        ],
        [
          2,
          2,
          1,
          "方一新",
          " 关系数据库基础与应用",
          "3-4",
          "网络教学平台,企业微信的语音和互动功能",
          "40"
        ],
        [
          2,
          3,
          1,
          "方一新",
          " 关系数据库基础与应用",
          "3-4",
          "网络教学平台,企业微信的语音和互动功能",
          "40"
        ],

        [
          3,
          4,
          1,
          "李春华",
          " Linux系统管理C",
          "5-6",
          "企业微信语音会议+屏幕分享",
          "40"
        ],
        [
          3,
          5,
          1,
          "李春华",
          " Linux系统管理C",
          "5-6",
          "企业微信语音会议+屏幕分享",
          "40"
        ],

        [
          4,
          0,
          1,
          "方一新",
          " 关系数据库基础与应用",
          "1-4",
          "企业微信直播,完成学校教学平台上的任务",
          "38"
        ],
        [
          4,
          1,
          1,
          "方一新",
          " 关系数据库基础与应用",
          "1-4",
          "企业微信直播,完成学校教学平台上的任务",
          "38"
        ],
        [
          4,
          2,
          1,
          "方一新",
          " 关系数据库基础与应用",
          "1-4",
          "企业微信直播,完成学校教学平台上的任务",
          "40"
        ],
        [
          4,
          3,
          1,
          "方一新",
          " 关系数据库基础与应用",
          "1-4",
          "企业微信直播,完成学校教学平台上的任务",
          "40"
        ]
      ],
      jqr19c1: [
        [
          1,
          0,
          1,
          "雷晖",
          " VC++程序设计",
          "1-2",
          "QQ讨论,屏幕分享,但是效果一般",
          "未说明"
        ],
        [
          1,
          1,
          1,
          "雷晖",
          " VC++程序设计",
          "1-2",
          "QQ讨论,屏幕分享,但是效果一般",
          "未说明"
        ],

        [
          3,
          2,
          1,
          "雷晖",
          " VC++程序设计",
          "3-4",
          "企业微信音频会议+屏幕分享",
          "37"
        ],
        [
          3,
          3,
          1,
          "雷晖",
          " VC++程序设计",
          "3-4",
          "企业微信音频会议+屏幕分享",
          "37"
        ]
      ],
      jqr19c2: [
        [
          2,
          0,
          1,
          "雷晖",
          " VC++程序设计",
          "1-2",
          "企业微信音频会议+屏幕分享",
          "32"
        ],
        [
          2,
          1,
          1,
          "雷晖",
          " VC++程序设计",
          "1-2",
          "企业微信音频会议+屏幕分享",
          "32"
        ],

        [
          4,
          4,
          1,
          "雷晖",
          " VC++程序设计",
          "5-6",
          "企业微信音频会议+屏幕分享",
          "32"
        ],
        [
          4,
          5,
          1,
          "雷晖",
          " VC++程序设计",
          "5-6",
          "企业微信音频会议+屏幕分享",
          "32"
        ]
      ],

      kebiaodays: ["周一", "周二", "周三", "周四", "周五"],
      kebiaojieci: ["1", "2", "3", "4", "5", "6", "7", "8"],
      kebiaodata: [
        [
          1,
          4,
          1,
          "伊雯雯",
          "框架编程技术",
          "5-8",
          "职教云平台进行授课,完成相关任务",
          "全班46人正常签到45人"
        ],
        [
          1,
          5,
          1,
          "伊雯雯",
          "框架编程技术",
          "5-8",
          "职教云平台进行授课,完成相关任务",
          "全班46人正常签到45人"
        ],
        [
          1,
          6,
          1,
          "伊雯雯",
          "框架编程技术",
          "5-8",
          "职教云平台进行授课,完成相关任务",
          "全班46人正常签到45人"
        ],
        [
          1,
          7,
          1,
          "伊雯雯",
          "框架编程技术",
          "5-8",
          "职教云平台进行授课,完成相关任务",
          "全班46人正常签到45人"
        ],

        [
          2,
          0,
          1,
          "郝爱语",
          "软件质量保证与测试",
          "1-4",
          "共享教学资源至班级群,自主学习",
          "46"
        ],
        [
          2,
          1,
          1,
          "郝爱语",
          "软件质量保证与测试",
          "1-4",
          "共享教学资源至班级群,自主学习",
          "46"
        ],
        [
          2,
          2,
          1,
          "郝爱语",
          "软件质量保证与测试",
          "1-4",
          "共享教学资源至班级群,自主学习",
          "46"
        ],
        [
          2,
          3,
          1,
          "郝爱语",
          "软件质量保证与测试",
          "1-4",
          "共享教学资源至班级群,自主学习",
          "46"
        ]
      ],
      //值班老师
      zhiban: null,
      zhibantel: null,
      class: "软件18C2",
      //值班教师信息表
      zhibanInfo: [],
      //词云
      ciyun: [
        { name: "讲的太快", value: 16 },
        { name: "崩溃", value: 17 },
        { name: "网好卡", value: 18 },
        { name: "老师你麦没开", value: 19 },
        { name: "网络平台又进不了了", value: 20 },
        { name: "我又掉出去了", value: 21 },
        { name: "网课期间千万别闭眼", value: 7 },
        { name: "钉钉", value: 8 },
        { name: "鹊桥系列", value: 9 },
        { name: "啥时候开学", value: 10 },
        { name: "迷惑发言", value: 11 },
        { name: "眯眼打卡", value: 12 },
        { name: "频频翻车", value: 13 },
        { name: "老师别点我", value: 14 },
        { name: "忘记闭麦", value: 15 }
      ],
      //上课平台
      pingtai: [[12, 13, 11, 7, 9, 11, 4]]
    };
  },
  components: {
    Header,
    videoPlayer
  },
  created() {},
  mounted() {
    //背景动画
    this.canves();
    //获取系部总人数
    this.initSum();
    //获取当前时间
    this.getTime();
    //获取缺勤比例
    this.initQueqin();
    //绘制课表
    this.drawKebiao();
    //辅导员信息轮播
    this.gundong();
    //当日值班教师信息
    this.todayzhiban();
    //获取值班教师表
    this.initZhibanInfo();
    //绘制词云
    this.drawCiyun();
    //绘制雷达图
    this.drawLeida();
    //绘制出勤率top5
    this.drawTop5();
  },
  methods: {
    //动画
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
    //获取宏观信息
    initSum() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/lineclass/sum")
        .then(function(response) {
          self.sumAll = response.data.sum;
          self.sumYingdao = response.data.haveclass;
          self.sumShidao = response.data.haveclass - response.data.sumabsent;
          self.sumChidao = response.data.sumlate;
          self.sumQueqin = response.data.sumabsent;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //获取当前时间
    getTime() {
      var self = this; //声明一个变量指向Vue实例this，保证作用域一致
      this.timer = setInterval(function() {
        self.currentTime = //修改数据date
          new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          new Date().getDate() +
          " " +
          new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          ":" +
          new Date().getSeconds();
      }, 1000);
    },
    //获取缺勤比例
    initQueqin() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/lineclass/getMoM")
        .then(function(response) {
          self.sumQingjia = response.data.stuleave;
          self.sumKuangke = response.data.stuabsenteism;
          self.drawQueqin();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //缺勤比例
    drawQueqin() {
      var huan = echarts.init(document.getElementById("queqin"));
      const option = {
        color: ["#EE6911", "#1ABDE6"],
        data: ["旷课", "请假"],

        grid: {
          left: 0,
          bottom: 0,
          top: 0,
          containLabel: true
        },
        legend: {
          orient: "vertical",
          top: "15%",
          bottom: "15%",
          right: "10%",
          textStyle: {
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "10"
          },
          icon: "circle",
          itemWidth: 8, // 设置宽度
          itemHeight: 8, // 设置高度
          itemGap: 1 // 设置间距
        },
        series: [
          // 主要展示层的
          {
            radius: ["55%", "75%"],
            center: ["28%", "50%"],
            type: "pie",
            label: {
              normal: {
                show: true,
                position: "outside"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "15"
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 20,
                length2: 35
              },
              emphasis: {
                show: true
              }
            },
            name: "体温等级比例",
            data: [
              {
                value: this.sumKuangke,
                name: "旷课",
                label: {
                  normal: {
                    formatter: function(params) {
                      return params.percent;
                    },
                    position: "center",
                    show: false,
                    textStyle: {
                      fontWeight: "bold"
                    }
                  },
                  emphasis: {
                    show: true
                    // textStyle: {
                    //     fontSize: '30',
                    //     fontWeight: 'bold'
                    // }
                  }
                }
              },
              {
                value: this.sumQingjia,
                name: "请假",
                label: {
                  normal: {
                    formatter: function(params) {
                      return params.percent;
                    },
                    position: "center",
                    show: true,
                    textStyle: {
                      fontWeight: "bold"
                    }
                  }
                }
              }
            ]
          }, // 边框的设置
          {
            radius: ["75%", "73%"],
            center: ["28%", "50%"],
            type: "pie",
            hoverAnimation: false,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            animation: true,
            tooltip: {
              show: false
            },
            data: [
              {
                value: 1,
                itemStyle: {
                  color: "rgba(250,250,250,0.3)"
                }
              }
            ]
          }
        ]
      };

      huan.setOption(option);
    },
    //课表
    drawKebiao() {
      var kebiao = echarts.init(document.getElementById("kebiao"));

      const option = {
        color: "rgba(39,180,194,0.8)",
        textStyle: {
          fontSize: "180%"
        },
        tooltip: {
          position: "right",
          trigger: "item",
          formatter: function(value) {
            let res =
              "课程情况" +
              "<br/>课程名称：" +
              value.data[4] +
              "<br/>上课情况：" +
              value.data[6] +
              "<br/>考勤：" +
              value.data[7];
            return res;
          },
          axisPointer: {
            type: "shadow"
          }
        },
        animation: false,
        grid: {
          bottom: "2%",
          top: "2%",
          left: "2%",
          right: "2%",
          containLabel: true
        },
        xAxis: {
          position: "top",
          type: "category",
          data: this.kebiaodays,
          splitArea: {
            show: true
          },
          axisTick: {
            lineStyle: {
              color: "#1bb4f6"
            }
          },
          axisLabel: {
            color: "#27b4c2"
            // fontSize: "150%"
          },
          axisLine: {
            lineStyle: {
              color: "#1bb4f6"
            }
          }
        },
        yAxis: {
          name: "节次",
          nameLocation: "start",
          inverse: true,
          nameTextStyle: {
            color: "#27b4c2",
            // fontSize:'150%',
            padding: -12
          },
          type: "category",
          data: this.kebiaojieci,
          splitArea: {
            show: true
          },
          axisTick: {
            lineStyle: {
              color: "#1bb4f6"
            }
          },
          axisLabel: {
            color: "#27b4c2"
            // fontSize: "150%"
          },
          axisLine: {
            lineStyle: {
              color: "#1bb4f6"
            }
          }
        },
        // visualMap: {
        //     min: 0,
        //     max: 10,
        //     calculable: true,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'top',
        //     itemWidth:'12',                           //图形的宽度，即长条的宽度。
        //     itemHeight:'40',                         //图形的高度，即长条的高度。
        //     textStyle: {
        //       color:'#27b4c2'
        //     },

        // },
        series: [
          {
            name: "课程信息",
            type: "heatmap",
            data: this.kebiaodata,
            label: {
              show: true,
              formatter: function(value) {
                let res = value.data[3];
                return res;
              }
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };

      kebiao.setOption(option);
    },
    //课表18级切换
    handleCommand1(command) {
      this.kebiaodata = eval("this." + command);
      // if(command = "rj18c2")
      //   this.class = "软件18C2";
      switch (command) {
        case "rj18c2":
          this.class = "软件18C2";
          break;
        case "rj18c1":
          this.class = "软件18C1";
          break;
        case "dsj18c1":
          this.class = "大数据18C1";
          break;
        case "dl18c1":
          this.class = "动联18C1";
          break;
        case "wl18c1":
          this.class = "网络18C1";
          break;
        case "wl18d1":
          this.class = "网络18D1";
          break;
        case "xg18h1":
          this.class = "信管18H1";
          break;
        case "xx18d1":
          this.class = "信息18D1";
          break;
        case "yjs18c1":
          this.class = "云计算18C1";
          break;
      }
      this.drawKebiao();
    },
    //课表19级切换
    handleCommand2(command) {
      this.kebiaodata = eval("this." + command);
      switch (command) {
        case "rj19c2":
          this.class = "软件19C2";
          break;
        case "rj19c1":
          this.class = "软件19C1";
          break;
        case "dsj19c1":
          this.class = "大数据19C1";
          break;
        case "dl19c1":
          this.class = "动联19C1";
          break;
        case "wl19c1":
          this.class = "网络19C1";
          break;
        case "wl19d1":
          this.class = "网络19D1";
          break;
        case "xx19d1":
          this.class = "信息19D1";
          break;
        case "xx19c1":
          this.class = "信息19C1";
          break;
        case "yjs19c1":
          this.class = "云计算19C1";
          break;
        case "yjs19c2":
          this.class = "云计算19C2";
          break;
        case "jqr19c1":
          this.class = "机器人19C1";
          break;
        case "jqr19c2":
          this.class = "机器人19C2";
          break;
      }
      this.drawKebiao();
    },
    //辅导员信息滚动
    gundong() {
      var speed = 12;
      var tab = document.getElementById("lunbo");
      var tab1 = document.getElementById("inlunbo1");
      var tab2 = document.getElementById("inlunbo1");
      tab2.innerHTML = tab1.innerHTML;
      function Marquee() {
        if (tab2.offsetWidth - tab.scrollLeft <= 0)
          tab.scrollLeft -= tab1.offsetWidth;
        else {
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

    //获取当日值班教师信息
    todayzhiban() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/lineclass/dutyteacher")
        .then(function(response) {
          self.zhiban = response.data[0].t_name;
          self.zhibantel = response.data[0].t_tel;
        })
        .catch(function(error) {
          console.log(error);
          // window.location.reload();
        });
    },
    //获取值班教师信息
    initZhibanInfo() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/lineclass/selectTeacher")
        .then(function(response) {
          self.zhibanInfo = response.data;
          self.play();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //change,play实现表格自动滚动
    change() {
      //把第一条数据插入数组最后一条
      this.zhibanInfo.push(this.zhibanInfo[0]);
      //删除数组中第一条数据
      this.zhibanInfo.shift();
    },
    play() {
      //每两秒执行一次插入删除操作
      setInterval(this.change, 1000);
    },
    //绘制词云
    drawCiyun() {
      var wordcould = echarts.init(document.getElementById("main9"));
      const option = {
        // backgroundColor: "#fff",
        // tooltip: {
        //   pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        // },
        series: [
          {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 10,
            //用来调整字的大小范围
            // Text size range which the value in data will be mapped to.
            // Default to have minimum 12px and maximum 60px size.
            sizeRange: [14, 60],
            // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45
            //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
            // rotationRange: [-45, 0, 45, 90],
            // rotationRange: [ 0,90],
            rotationRange: [-45, 0, 45, 90],
            //随机生成字体颜色
            // maskImage: maskImage,
            // width:'100%',
            // height:'100%',

            textStyle: {
              normal: {
                color: function() {
                  return (
                    "rgb(" +
                    (Math.round(Math.random() * (255 - 170)) + 170) +
                    ", " +
                    (Math.round(Math.random() * (255 - 170)) + 170) +
                    ", " +
                    (Math.round(Math.random() * (255 - 170)) + 170) +
                    ")"
                  );
                }
              }
            },
            //位置相关设置
            // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
            // Default to be put in the center and has 75% x 80% size.
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "100%",
            height: "100%",
            //数据
            data: this.ciyun
          }
        ]
      };
      wordcould.setOption(option);
    },
    //绘制雷达图
    drawLeida() {
      var leida = echarts.init(document.getElementById("main8"));
      const option = {
        grid: {},

        legend: {
          bottom: 5,
          itemGap: 20,
          textStyle: {
            color: "#fff",
            fontSize: 14
          },
          selectedMode: "single"
        },
        tooltip: {
          trigger: "item",
          show: true
        },
        radar: {
          center: ["50%", "50%"], //偏移位置
          indicator: [
            { name: "职教云", max: 15 },
            { name: "腾讯会议", max: 15 },
            { name: "企业微信", max: 15 },
            { name: "蓝墨云班课", max: 15 },
            { name: "QQ直播", max: 15 },
            { name: "教学平台", max: 15 }
          ],

          shape: "circle",
          splitNumber: 5,
          name: {
            textStyle: {
              color: "#51cede",
              padding: -10
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                "rgba(20, 157, 192, 0.2)",
                "rgba(20, 157, 192, 0.3)"
              ].reverse()
            }
          },
          splitArea: {
            areaStyle: {
              color: "transparent"
            }
          },

          axisLine: {
            lineStyle: {
              color: "rgba(20, 127, 192, 0.4)"
            }
          }
        },
        series: [
          {
            name: "授课平台",
            type: "radar",
            lineStyle: {
              normal: {
                width: 1,
                opacity: 0.5
              }
            },
            data: this.pingtai,
            symbol: "none",
            itemStyle: {
              color: "#00CED1"
            },
            areaStyle: {
              opacity: 0.15
            }
          }
        ]
      };
      leida.setOption(option);
    },
    
    //绘制出勤率top5
    drawTop5() {
      var chuqin = echarts.init(document.getElementById("main10"));
      const option = {
        grid: {
          left: 65,
          top: 0,
          bottom: 10
        },
        tooltip: {
          trigger: "item",
          textStyle: {
            fontSize: 14
          },
          formatter: "{b0}:{c0}%"
        },
        xAxis: {
          max: 100,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            type: "category",
            inverse: false,
            data: [
              "软件18C2",
              "软件18C1",
              "云计算19C1",
              "大数据19C1",
              "网络18D1"
            ],
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              margin: -4,
              textStyle: {
                color: "#fff",
                fontSize: 14,
                padding: -10
              }
            }
          }
        ],
        series: [
          {
            type: "pictorialBar",
            symbol:
              "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
            symbolRepeat: "fixed",
            symbolMargin: "5%",
            symbolClip: true,
            symbolSize: 22.5,
            symbolPosition: "start",
            symbolOffset: [20, 0],
            symbolBoundingData: 100,
            data: [98, 76, 70, 90, 84],
            z: 10
          },
          {
            type: "pictorialBar",
            itemStyle: {
              normal: {
                opacity: 0.3
              }
            },
            label: {
              normal: {
                show: false
              }
            },
            animationDuration: 0,
            symbolRepeat: "fixed",
            symbolMargin: "5%",
            symbol:
              "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
            symbolSize: 22.5,
            symbolBoundingData: 100,
            symbolPosition: "start",
            symbolOffset: [20, 0],
            data: [2, 24, 30, 10, 16],
            z: 5
          }
        ]
      };

      chuqin.setOption(option);
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
};
</script>

<style lang="less">
.barbox li:nth-child(1):before {
  position: absolute;
  content: "";
  height: 50%;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
  right: 0;
  top: 25%;
}

.barbox li:nth-child(2):before {
  position: absolute;
  content: "";
  height: 50%;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
  right: 0;
  top: 25%;
}
.barbox li:nth-child(3):before {
  position: absolute;
  content: "";
  height: 50%;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
  right: 0;
  top: 25%;
}
.barbox li {
  font-size: 0.65rem;
}
.todayteacher {
  height: 6%;
  padding-right: 2%;
  text-align: right;
  font-size: 0.17rem;
}
.todayteacher span {
  color: #519aae;
}
.zhibantable {
  height: 85.3%;
}
.el-table {
  height: 100%;
  width: 100% !important;
  background-color: transparent !important;
  color: #51bede !important;
  font-size: 130% !important;
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
.el-table th {
  width: 100% !important;
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: 0px solid #05a4b8 !important;
}
/* .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
	border-right: 1px solid #05a4b8!important;
  } */
.el-table--border,
.el-table--group {
  border: 0px solid #05a4b8 !important;
}
/* .el-table--group::after{
	content: '';
	position: absolute;
	background-color: #05a4b8!important;
	/* z-index: 1; */
/* } */
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
  font-size: 0.15rem !important;
}
#kebiao {
  padding-bottom: 0.2rem;
}
#main8 {
  padding-bottom: 0.2rem;
}
#main9 {
  padding-bottom: 0.2rem;
}
#main10 {
  padding-bottom: 0.2rem;
}
.kebiaotitle {
  width: 68%;
  text-align: right;
  float: left;
}
.select {
  width: 32%;
  float: left;
}
.el-dropdown-link {
  cursor: pointer;
  color: #1bb4f6;
  font-size: 0.15rem;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.queqinrenshu {
  font-size: 0.65rem;
  width: 40%;
  float: left;
  color: #ffeb7b;
  font-family: electronicFont;
  font-weight: bold;
}
#queqin {
  width: 60%;
  float: left;
  height: 1rem;
}
#lunbo {
  overflow: hidden;
  margin-top: 3%;
  width: 100%;
  height: 72%;
}
#inlunbo {
  float: left;
  width: 560%;
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
  width: 32.5%;
  height: 100%;
  margin-right: 0.8%;
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
  padding: 7% 3%;
  float: left;
  font-size: 0.19rem;
  color: #519ebe;
}
</style>
