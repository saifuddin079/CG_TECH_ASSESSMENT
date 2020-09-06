import Vue from "vue";
import Router from "vue-router";
import LandingView from "@/views/LandingView";
import SearchView from "@/views/SearchView";
import DetailsView from "@/views/DetailsView";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.NODE_ENV === "/",
  routes: [
    {
      path: "/",
      redirect: { name: "tops" }
    },
    {
      path: "/tops",
      name: "tops",
      component: LandingView
    },
    {
      path: "/search",
      name: "search",
      component: SearchView
    },
    {
      path:"/details/:id",
      name: "details",
      component: DetailsView
    },
    {
      path: "/*",
      redirect: { name: "tops" }
    }
  ]
});
