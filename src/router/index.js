import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/index";
import Video from "@/components/video";
import onlineCourse from "@/components/onlineCourse";
import xx from "@/components/xx";
import epidemic from "@/components/epidemic";

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
      path: "/onlineCourse",
      name: "onlineCourse",
      component: onlineCourse
    },
    {
      path: "/xx",
      name: "xx",
      component: xx
    },{
      path: "/e",
      name: "epidemic",
      component: epidemic
    }
  ]
});
