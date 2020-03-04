import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/index";
import Video from "@/components/video";
import xx from "@/components/xx";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/video",
      name: "Video",
      component: Video
    },
    {
      path: "/xx",
      name: "xx",
      component: xx
    }
  ]
});
