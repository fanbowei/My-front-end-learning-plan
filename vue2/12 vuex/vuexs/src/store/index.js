import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:0,
    msg:'msg'
  },

  //方法
  mutations: {
    addnum(state)
    {
      state.num++;
    }
  },

  //异步方法
  actions: {
    
  },
  modules: {
    
  },
  getters:{
    reversemsg(state){
      return state.msg.split('').reverse().join('')
    }
  }
})
