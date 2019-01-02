import Vue from 'vue'
import App from './App.vue'
import Mint from "mint-ui"
import 'mint-ui/lib/style.css'
import router from "./router/index"
// import VueBus from 'vue-bus';
Vue.use(Mint);
import store from './store/index'


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
