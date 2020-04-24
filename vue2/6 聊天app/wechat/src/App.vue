<template>
  <div id="app">
    <div class="content">
    <chat-com :chooseuser='chooseuser'></chat-com>
    <userlist-com :userlist='userlist' @changelist='togglelist'></userlist-com>
    </div>
    
  </div>
</template>

<script>
import chatCom from './components/chatcom.vue'
import userlistCom from './components/userlistcom'


export default {
  name: 'App',
  components: {
    chatCom,
    userlistCom,
  },
  data(){
    return {
      msg:'聊天室',
      userlist:[
        {username:'小明',header:require('./assets/img/1.jpg')},
        {username:'小红',header:require('./assets/img/2.jpg')},
        {username:'小万',header:require('./assets/img/3.jpg')},
        {username:'小刚',header:require('./assets/img/4.jpg')},

      ],
      chooseuser:{
        username:'小明',
        header:require('./assets/img/1.jpg')
      }
    }
  },
  methods: {
    togglelist(i){
      this.chooseuser=this.userlist[i]
    }
  },
}
</script>

<style scoped>
  .content{
    border: 1px solid #ccc;
    margin: 0 auto;
    display: flex;
    width: 800px;
    height: 700px;
  }

</style>
