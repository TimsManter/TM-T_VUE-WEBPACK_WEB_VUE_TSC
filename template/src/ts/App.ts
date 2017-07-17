// Imports
import Vue from "vue";{{#router}}
import VueRouter from "vue-router";{{/router}}{{#material}}
import VueMaterial from "vue-material";{{/material}}{{#axios}}
import Axios from "axios";{{/axios}}{{#router}}
import MainPage from "./../vue/pages/MainPage.vue";{{/router}}
import "./../scss/style.scss";

// Components
import App from "../vue/App.vue";{{#axios}}

Axios.defaults.baseURL = "https://api.github.com";
Axios.defaults.headers.common["Accept"] = "application/vnd.github.v3+json";{{/axios}}{{#router}}

Vue.use(VueRouter);{{/router}}{{#material}}
Vue.use(VueMaterial);{{/material}}{{#router}}

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/main",
      component: MainPage
    },
    {
      path: "/",
      redirect: "/main"
    }
  ]
});{{/router}}

const app = new Vue({
  el: "#app",{{#router}}
  router: router,{{/router}}
  render: r => r(App, {
  })
});
