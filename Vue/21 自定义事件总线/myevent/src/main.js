import Vue from 'vue'
import App from './App.vue'
import eventbus from './eventbus.js'

Vue.prototype.eventbus=eventbus
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
