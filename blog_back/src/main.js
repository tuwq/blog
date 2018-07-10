// 语法支持
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
// Vuex
import store from './store/main.js'
import router from './router'
// 解决点击延迟
import fastclick from 'fastclick'

fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

