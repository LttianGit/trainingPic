import Vue from 'vue'
import App from './App.vue'
import Mint from "mint-ui"
import 'mint-ui/lib/style.css'
import router from "./router/index"
window.VueBus = new Vue()
Vue.use(Mint);
import store from './store/index'

//引入vant
import { Popup,Picker} from 'vant';
Vue.use(Popup);
Vue.use(Picker);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
