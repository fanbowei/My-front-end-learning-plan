<template>
    <div class="chat">
        <h1 class="user">
            用户:{{chooseuser.username}}
        </h1>

        <div class="chatlist">
            <chatitem v-for="(item, index) in chatlist" :key="index" :chooseusers='item'>{{item.content}}</chatitem>
        </div>
        
        <chatinput-com :addchat='addchat'></chatinput-com>
    </div>
</template>


<script>

import chatinputCom from './chatinputcom.vue'
import chatitem from './chatitem.vue'
export default {
    props:['chooseuser'],
    data(){
        return{
            chatlist:[
                {user:{
                    username:'小明',
                    header:require('../assets/img/1.jpg')
                    },
                    content:'我吃饭了'
                }
            ],
        }
    },
    methods: {
         addchat(msg){
            this.chatlist.push(
                {
                    user:{
                    username:'小明',
                    header:require('../assets/img/1.jpg')
                    },
                    content:msg,
                })
               
                this.chatlist.push(
                {
                    user:this.$root.$children[0].chooseuser,
                    content:new Date()
                })



        }
    },
    components:{
        chatinputCom,
        chatitem,
    }
}
</script>
<style scoped>
    .chat{
        width: 500px;
        height: 700px;
    }
</style>