import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let apps=new Vue({
  render: h => h(App),
  data:{
    me:''
  }
}).$mount('#app')
