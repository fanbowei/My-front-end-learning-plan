import Vue from 'vue'
import App from './App.vue'
import { Button} from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Toast } from 'mint-ui';


Vue.component(Button.name,Button)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data(){
    return{
      Toast,
    }
  }
}).$mount('#app')
