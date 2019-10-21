import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'jquery'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';
import {routes} from "./routes";

const VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);
Vue.use(BootstrapVue);
Vue.use(VueRouter);


Vue.config.productionTip = false;
const router  = new VueRouter(
    {
      routes,
        mode:'history'
    }
);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
