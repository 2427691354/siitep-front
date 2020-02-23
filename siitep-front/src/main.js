// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Axios from "axios";
import iview from "iview";
import "iview/dist/styles/iview.css";
import echarts from "echarts";
import AMap from "vue-amap";

Vue.use(iview);
Vue.use(AMap);
Vue.prototype.$echarts = echarts;

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
Vue.prototype.baseUrl = "http://localhost:50080/";

// 引入公共public.js
import "./assets/css/comon0.css";

import "../node_modules/echarts/map/js/china.js"; // 引入中国地图数据

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
