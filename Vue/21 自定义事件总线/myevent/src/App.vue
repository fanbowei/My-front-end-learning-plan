<template>
  <div id="app">
   <a1></a1>
   <b1></b1>
  </div>
</template>

<script>
import a1 from './components/a.vue'
import b1 from './components/b.vue'

export default {
  name: 'App',
  components: {
    a1,
    b1,
  }
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
