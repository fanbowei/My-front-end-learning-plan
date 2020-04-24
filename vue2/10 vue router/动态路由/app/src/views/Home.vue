<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div @click="changeview">go</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    changeview(){
      console.log(this.$router);
      this.$router.push(
        
        {
        path:'/new/45',
        }
        // {
        //   name:'new',
        //   params:{
        //     id:46,
        //   }
        // }

        )
    }
  },
}
</script>
