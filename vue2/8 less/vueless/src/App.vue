<template>
  <div id="app">
    <alerts :title='title' :content='content' v-if="isalertshow" :cancelevent='cancelevent' :comfirmevent='comfirmevent'></alerts>
  </div>
</template>

<script>
import alerts from './components/alert.vue'

export default {
  name: 'App',
  components: {
    alerts,
  },
  data()
  {
   return {
    title:'跳转百度',
    content:'是否跳转百度',
    isalertshow:true,
   }
  },

  methods:
  {
    cancelevent()
    {
      this.isalertshow=false
    } ,
    comfirmevent()
    {
      location.href='http://baidu.com'
    } ,
  },

}
</script>

<style lang="less" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
