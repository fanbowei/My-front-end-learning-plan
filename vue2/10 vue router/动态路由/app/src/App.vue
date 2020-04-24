<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div @click="go">go</div>
    <div @click="back">back</div>
    <router-view name="nav"/>
    <router-view name="aside"/>
    <router-view name="a"/>
    <router-view />
    
  </div>
</template>


<script>
export default {
   watch: {
        '$route'(){
            console.log('页面发生了变化');
        }
    },
    methods: {
      go(){
        this.$router.go(1)
      },
      back(){
        this.$router.back(1)
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
