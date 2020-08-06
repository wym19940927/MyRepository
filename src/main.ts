import Vue from "vue";
import "@/style/reset.scss";
import "@/style/elementui-variables.scss";
import "@/style/iconfont.scss";

import App from "./App.vue";
import router from "./router";
import store from "./store";

// import BaiduMap from 'vue-baidu-map'
// Vue.use(BaiduMap, {
//   ak: '你申请的key'
// })

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
