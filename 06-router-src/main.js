import Vue from 'vue'
import App from './App.vue'
//引入router
import VueRouter from 'vue-router'
import router from './router/index'

import './assets/style.css'


Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router:router
 
}).$mount('#app')
