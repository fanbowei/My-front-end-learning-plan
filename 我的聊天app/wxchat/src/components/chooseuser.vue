<template>
    <div class="chooseuser">
        <h3>请选择要登陆的账号<div class="back" @click='backlog'>
            返回
        </div></h3>
        
        <ul>
            <li v-for="(item, index) in userlist" :key="index" @click='chooseevent(item)' v-if="item.username=='小明'||item.username=='小黑'||item.username=='小红'" :class='{disonline:!item.isonline,online:item.isonline}'>         
                <img :src="item.headering+'?'+new Date().toString()">
                <div class="name">{{item.username}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
import socket from '../socket'
export default {
    props:['userlist','togglelogin','togglechooseuser'],
    methods: {
        backlog(){
            this.togglechooseuser(false)
            this.togglelogin(true)
        },
        async chooseevent(item){
            if(item.socketid!=='null')
            {
                new Promise((resolve,reject)=>{
                    this.$root.$children[0].togglechoosepopshow(true,'当前用户已在线,是否登录');
                    let time=setInterval(() => {
                     
                        if(this.$root.$children[0].ischoosepopshow==false)
                        {
                           
                            clearInterval(time)
                            resolve()
                        }
                            }, 50);
                        }).then(
                            ()=>{
                       
                                if(!this.$root.$children[0].choosepopbacktrue)
                                {   
                                    
                                    return;
                                }
                                else
                                {
                                
                                    this.$root.me=item
                                    localStorage.chatme=JSON.stringify(item)
                                    socket.emit('login',item)
                                    return;
                                }
               
                            },
                )

            }
            else{
            this.$root.me=item
            localStorage.chatme=JSON.stringify(item)
            socket.emit('login',item)
            }
        }
    },
}
</script>

<style scoped>
    .chooseuser h3{
        font-size: 20px;
        text-align: center;
        padding: 20px 0;
        width: auto;
        position: relative
    }
    .chooseuser ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        
    }
    .chooseuser ul li{
        width: 50%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 15px 0;
        height: 130px;
    }
    .chooseuser{
        width: 100vw;
        height: 100vh;
        background-color: lightblue;
    }
    .chooseuser img{
        height: 100px;
        width: 100px;
        border-radius: 50%;
    }
    .chooseuser .name{
        text-align: center;
    }
    .disonline{
        filter:grayscale(1)
    }
    .online{
        filter:grayscale(0)
    }
    .back{
        position: absolute;
        top: 20px;
        left: 10px;
        font-weight: 900;

    }
</style>