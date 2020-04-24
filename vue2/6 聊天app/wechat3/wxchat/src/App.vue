<template>
  <div id="app">
  <choosepop v-if="ischoosepopshow" :popmsg="popmsg" :togglechoosepopshow='togglechoosepopshow'></choosepop>
  <popsc :popmsg="popmsg" v-if="ispopshow" ></popsc>
  <chooseuser :userlist='userlist' v-if="!$root.me"></chooseuser>
  <userlist v-else :isonline='isonline' :users="users" :touser='touser' :chatlist='chatlist'></userlist>
  <chatuser v-if="ischat" :tochatuser='tochatuser' :toback='toback' :chatlist="chatlist"></chatuser>
  </div>
</template>

<script>
import popsc from './components/popc.vue'//提示弹窗
import choosepop from './components/choosepop.vue'//选择弹窗
import chooseuser from './components/chooseuser.vue'
import axios from 'axios'
import chatuser from './components/chatuser.vue'
import userlist from './components/userlist.vue'
import socket from './socket'
export default {
  name: 'App',
  components: {
  chooseuser,
  userlist,
  chatuser,
  popsc,
  choosepop,
  },
  methods: {
    touser(user){
      this.tochatuser=user
      this.ischat=false;
    },
    toback(){
      this.tochatuser=null;
      this.ischat=false
    },
    togglepopshow(msg){
      this.popmsg=msg;
      this.ispopshow=true,
      setTimeout(() => {
        this.ispopshow=false
      }, 1500);
    },
    togglechoosepopshow(isshow,msg){
      this.ischoosepopshow=isshow;
      this.popmsg=msg
      return this.choosepopbacktrue
    }
  },
  data(){
    return {
      userlist:[],
      isonline:false,
      users:[],
      ischat:false,
      tochatuser:{},
      chatlist:[],
      popmsg:'',
      ispopshow:false,
      ischoosepopshow:false,//控制弹窗是否显示
      choosepopbacktrue:false//控制弹窗点击之后的返回值
    }
  },
  async beforeMount() {
    let data=await axios.get('http://localhost:3000/api/getuserlist/?'+new Date())
    this.userlist=data.data
  },
  mounted() {
    //监听登录成功事件
     socket.on('login',(data)=>{
        if(data.state==='ok')
        {
          this.isonline=true
          this.togglepopshow(data.msg)

        }//检测异地登录
        if(data.state==='no')
        {
          setTimeout(() => {
            location.reload()
          }, 1000);
          this.isonline=false
          this.togglepopshow(data.msg)
          
          
        }
  })
  socket.emit('getuserlist',{})
        socket.on('senduserlist',(data)=>{
            this.users=data
            
        })

      //监听别的用户上线
      socket.on('usersupdata',(data)=>{
        this.users=data
        this.userlist=data
      }),

      socket.on('backmsg',(data)=>{
        
        this.chatlist.push(data)
        this.chatlist.sort((a,b) =>  a.time-b.time)
      })
  },

}
</script>

<style>

</style>
