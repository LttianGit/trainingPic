import Vue from 'vue'
import App from './App'
import ECharts from 'vue-echarts/components/ECharts.vue'

import 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
Vue.config.productionTip = false
Vue.component('v-chart', ECharts)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
