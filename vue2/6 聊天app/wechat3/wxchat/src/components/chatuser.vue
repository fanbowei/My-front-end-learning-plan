<template>
    <div class="chatuser">
        <div class="header">
        <div class="back" @click='back'>返回</div>
        {{tochatuser.username}}
        </div>

        <div class="chatlist" ref="chatbox">
            <div class="chatitem"  :class="{self:$root.me.username==item.from.username}" v-for="(item, index) in chatlist" :key="index" v-if="(tochatuser.username==item.to.username)||(item.from.username==tochatuser.username)">
                <div class="header" :class="{selfchatlist:$root.me.username==item.from.username,headerr:$root.me.username!==item.from.username}"> <img :src="item.from.headering" alt=""> </div>
                <div class="chatcontent" >{{item.content}} </div>
            </div>
        </div>

        <div class="inputcom">
        <input type="text" v-model="chatcontent" @keydown.enter="sendchat">
        <button @click='sendchat'>发送</button>   
        </div>
    </div>
</template>

<script>
import socket from '../socket';
export default {
    props:['tochatuser','toback','chatlist'],
    methods: {
        back(){
            this.toback()
        },
        sendchat(e){
            if(!this.chatcontent)
            {
                this.$root.$children[0].togglepopshow('内容不能为空')
                return;
            }
            if(!this.tochatuser.socketid)
            {
                this.$root.$children[0].togglepopshow('对方暂时不在线')
            }
            let msg={
                from:this.$root.me,
                fromusername:this.$root.me.username,
                to:this.tochatuser,
                tousername:this.tochatuser.username,
                content:this.chatcontent,
                time:new Date().getTime()
            }
            //发送到服务端
            socket.emit('sendmsg',msg)

            setTimeout(() => {
                let contentel=document.querySelector('.chatlist')
        if(contentel)
        {
            if(contentel.scrollHeight)
            contentel.scrollTop = contentel.scrollHeight
        }
            }, 100);

            //保存聊天记录
            this.chatlist.push(msg)
           this.savestorage()
           this.chatcontent=''
        },
        savestorage(){
            let strkey='chat-user-'+this.$root.me.username+'-'+this.tochatuser.username
            localStorage[strkey]=JSON.stringify(this.chatlist)
        }
    },
    data(){
        return{
            chatcontent:'',
        }
    },
    watch: {
        chatlist(){
            setTimeout(() => {
                let contentel=document.querySelector('.chatlist')
        if(contentel)
        {
            if(contentel.scrollHeight)
            contentel.scrollTop = contentel.scrollHeight
        }
            }, 100);
        }
    },
    computed: {

    },
    mounted() {
        let contentel=document.querySelector('.chatlist')
        if(contentel)
        {
            if(contentel.scrollHeight)
            contentel.scrollTop = contentel.scrollHeight
        }
    },
}


</script>

<style scoped>
    /* 聊天表样式 */
    .chatlist .header{
        position: relative;
    }
    .self{
        flex-direction: row-reverse;
    }
    .chatcontent{
        padding: 5px;
        box-sizing: content-box;
        background-color: white;
        border-radius: 5px;
    }
    .headerr::before{
        display: block;
        content: '';
        position: absolute;
        width: 0px;
        height: 0px;
        border: 10px solid transparent;
        border-right-color: white ;
        top: 15px;
        left:70px;
    }
    .selfchatlist::before{
        display: block;
        content: '';
        position: absolute;
        width: 0px;
        height: 0px;
        border: 10px solid transparent;
        border-left-color: white ;
        top: 15px ;
        left: 0px;
    }
    .chatlist{
        display: flex;
        flex-direction: column;
        background-color: #ccc;
        overflow:auto;

    }
    .chatlist .chatitem .header{
        padding:0 20px;
        background-color: #ccc;
    }
    .chatlist img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
    .chatitem{
        flex-shrink: 0;
        height: 70px;
        display: flex;
        align-items: center;
    }

    .chatuser .back{
        position: fixed;
        left: 35px;
        top: 0px;
        
    }
    .chatuser{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #ccc;
    }
    .chatuser .header{
        font-size: 18px;
        font-weight: 900;
        background-color: lightblue;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }
    .chatlist{
        flex: 1;
    }
    .inputcom{
        height: 50px;
        display: flex;
        background-color: #ccc;
        justify-content: space-between;

    }
    .inputcom input{
        width: 90vw;
        height: 40px;
        font-size: 18px;
        font-weight: 900;
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        margin: 0 5px;

    }
    .inputcom button{
        width: 15vw;
        height: 40px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
    }
</style>