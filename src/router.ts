import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const Home = () =>
  import(/* webpackChunkName: "routerChunk" */ "./views/Home.vue");
const DailyHabit = () =>
  import(/* webpackChunkName: "routerChunk" */ "./views/DailyHabit.vue");
const Mine = () =>
  import(/* webpackChunkName: "routerChunk" */ "./views/Mine.vue");

export default new VueRouter({
  base: "/app/",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/habit",
      component: DailyHabit,
    },
    {
      path: "/mine",
      component: Mine,
    },
  ],
});
