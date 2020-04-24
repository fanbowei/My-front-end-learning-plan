<template>
    <div class="userlist">
       <div class="nav">
           <div class="headering" :class='{disonline:!isonline,online:isonline}'>
               <img v-if="$root.me!=null" :src="$root.me.headering" alt="">
           </div>
           <div class="headering1">消息</div>
           <div class="headering2"> </div>
           <div class="back" @click='toback'>
               退出
           </div>
       </div>
       <div class="users">
           <div class="useritem" v-for="(item, index) in users" :key="index" v-if="item.username!=$root.me.username" @click='chooseu(item,"click")'>
               <div class="left" :class='{disonline:!item.isonline,online:item.isonline}' >
                    <img :src="item.headering+'?'+new Date().toString()" alt="" >
               </div>
              <div class="right" >
                  <span class="usernam">{{item.username}}</span>
                  <div class="newmsg">{{newmsg[index]?newmsg[index].from.username==$root.me.username?"我: ":newmsg[index].from.username+": ":'' }} {{ newmsg[index]?" "+newmsg[index].content:'' }}</div>
                  <span class="msg"></span>
              </div>
           </div>
       </div>
    </div>
</template>
<script>
import socket from '../socket'
export default {
    props:['isonline','users','chatlist'],
    data(){
        return{
            watchu:this.users,//监听this.users是否发生变化
            choosemen:'',
            newmsg:[],
           time:''
        }
    },
    methods: {
        toback(){
            location.reload();
        },
        chooseu(i,method){
            this.$root.$children[0].tochatuser=i;
            if(method=='click')
            {
                this.$root.$children[0].ischat=true
            }
            this.choosemen=i;
        }
    },
    watch: {
        users(){
            let choosemen=this.choosemen
            this.users.forEach((item,index)=>{
                if(item.username==choosemen.username)
                {
                    this.chooseu(item,'others')
                    
                }
            }
            )
        },
        chatlist(){
            clearTimeout(this.time)
            this.time=setTimeout(() => {
                for(let i=this.chatlist.length-1;i>=0;i--)
            {
                
                this.users.forEach((item,index)=>{
                    
                    if(this.$root.me.username!==item.username)
                    {
                        if(this.chatlist[i].from.username==this.$root.me.username&&this.chatlist[i].to.username==item.username)
                        {   
                           if(!this.newmsg[index])
                            {
                                
                                this.newmsg[index]=this.chatlist[i]
                                return;
                            }
                            else
                            {
                                if(this.chatlist[i].time>this.newmsg[index].time)
                                {
                                    this.newmsg[index]=this.chatlist[i]
                                    return;
                                }
                            }
                            

                        }
                        if(this.chatlist[i].from.username==item.username&&this.chatlist[i].to.username==this.$root.me.username)
                        {
                            if(!this.newmsg[index])
                            {
                                this.newmsg[index]=this.chatlist[i]
                                return;
                            }
                            else
                            {
                                if(this.chatlist[i].time>this.newmsg[index].time)
                                {
                                    this.newmsg[index]=this.chatlist[i]
                                    return;
                                }
                            }
                            
                        }
                    }
                })
                
            }
            this.newmsg.push('');
            this.newmsg.pop();
            }, 1500);
        }
    },
    beforeMount() {
       
    },
}
</script>

<style scoped>

    .userlist{
        
        width: 100vw;
    }
    .usernam{
        padding-left: 20px;
        font-size: 20px;
        font-weight: 800;
    }
    .newmsg{
        padding-left: 20px;
        font-size: 16px;
    }
    .useritem{
        padding-left: 20px;
        display: flex;
        width: auto;
        height: 100px;
        align-items: center;
        
        border-bottom: 1px solid #ccc;
        background-color: rgb(221, 218, 218);
    }
    .users img{
        height: 50px;
        width: auto;
        border-radius: 50%;
    }
    .disonline{
        filter:grayscale(1)
    }
    .online{
        filter:grayscale(0)
    }
    
    .nav{
        padding-left: 20px;
        height: 100px;
        width: auto;
        display: flex;
        background-color: lightblue;
        align-items: center;
        justify-content: space-between;
    }
    .nav .headering1,.nav .headering2{
        line-height: 50px;
        width: 50px;

    }
    .headering img{
        height: 60px;
        width: 60px;
        border-radius: 50%;
    }
    .users{
        overflow:auto;
    }
    .back{
        font-weight: 900;
        width: 40px;
        height: 30px;
        position: absolute;
        top: 35px;
        right: 20px;
   

    }
</style>