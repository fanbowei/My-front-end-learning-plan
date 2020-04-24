import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$globaleventbus=new Vue()//创建一个全局可以看见的vue对象,里面有自定义的事件模块,这样就可以实现全局的组件通信
new Vue({
  render: h => h(App),
}).$mount('#app')
