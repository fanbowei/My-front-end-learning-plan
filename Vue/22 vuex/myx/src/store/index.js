import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  //包含状态数据的对象
  state: {
    item:0
  },

  //包含用来直接更新方法的对象
  mutations: {
    itemadd(state){
      state.item++;
    },
    itemsub(state){
      state.item--;
    }
  },
  actions: {
    //包含间接更新数据状态的方法对象
    additem(context)
    {
      context.commit('itemadd')
    },
    subitem(context){
     
      context.commit('itemsub')
    },
    otheradd(context){
      if(context.state.item%2==0)
      {
        console.log('调用了');
        context.commit('itemadd')
      }
    },
    asyncadd(c){
      setTimeout(() => {
        c.commit('itemadd')
      }, 1000);
    }
  },
  modules: {

  },
  getters: {
    num(state){
      if(state.item%2==0)
      {
        return "偶数"
      }
      else
      {
        return "奇数"
      }
    }
  }
})
