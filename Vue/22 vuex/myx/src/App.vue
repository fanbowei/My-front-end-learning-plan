<template>
  <div id="app">
  clicked:{{item}}times,count is {{num}}<br>
  <button @click="$store.dispatch('additem')"> + </button><button @click="$store.dispatch('subitem')"> - </button>
  <button @click="$store.dispatch('otheradd')">奇数加</button><button @click="$store.dispatch('asyncadd')">异步加</button>
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
export default {
  mounted() {
  },
  computed: {
    // item(){
    //   return this.$store.state.item
    // },
    // num(){
    //   return this.$store.getters.num
    // },


    /*
    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    */

    ...mapState(['item']),
    ...mapGetters({num:'num'})
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
</style>
