import Vue from 'vue'
import App from './App.vue'

import store from './store/index'

import './assets/style.css'
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
