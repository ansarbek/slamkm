// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueFire from "vuefire";
import App from "./App";
import Router from "./router";
import VueI18n from "vue-i18n";

Vue.use(VueFire);
Vue.use(VueI18n);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router: Router,
  components: { App },
  template: "<App/>"
});
