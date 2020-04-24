<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <bigbrother ref="header"></bigbrother>
    <littlebrother></littlebrother>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import bigbrother from './components/bigbrother.vue'
import littlebrother from './components/littlebrother.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    bigbrother,
    littlebrother,

  },
  beforeDestroy() {
    //解绑监听
    this.$refs.header.$off('clickalert')
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
