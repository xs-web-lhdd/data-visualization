import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import * as Echarts from 'echarts'

Vue.config.productionTip = false
// 将 echarts 加到原型链上
Vue.prototype.$echarts = Echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
