import Vue from "vue";
import Router from "vue-router";
import Album from "../components/Album.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/album/:id",
      name: "album",
      component: Album,
    },
  ],
});
