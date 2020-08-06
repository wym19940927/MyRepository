import Vue from "vue";
import "@/style/reset.scss";
import "@/style/elementui-variables.scss";
import "@/style/iconfont.scss";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
