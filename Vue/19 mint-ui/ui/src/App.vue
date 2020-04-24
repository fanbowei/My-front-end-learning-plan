<template>
  <div id="app">
    <mt-button type="default">default</mt-button>
    <mt-button type="primary" @click="alertmsg">primary</mt-button>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  methods: {
    alertmsg(){
     this.$root.Toast({
        message: 'hello',
        position: 'top',
         duration: 1000
     })
    }
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
