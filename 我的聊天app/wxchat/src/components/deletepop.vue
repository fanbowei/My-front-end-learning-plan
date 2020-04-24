<template>
    <div class="deletepop" >
        <div class="content">
            <div @click.stop="dechat" style="width:45px;">
                撤回
            </div>
        </div>
        <div class="back">
            取消
        </div>
    </div>
</template>




<script>
import socket from '../socket';
export default {
    props:['index','chatlist','item','togglede','togglepopshow'],
    data(){
        return{
            chatsz:this.chatlist
        }
    },
    methods:{
        dechat(){
            if(new Date().getTime()-this.chatlist[this.index].time<30000)
            {   
                console.log(this.chatlist[this.index]);

                this.chatlist[this.index].enable_flag='N'
                socket.emit('senddemsg',this.chatlist[this.index])
                this.chatlist.splice(this.index,1)
                this.togglede(this.item,this.index)
            
            }
            else
            {
                this.togglepopshow('时间超过30s无法撤回')
                this.togglede(this.item,this.index)
            }
        }
    }
}
</script>





<style scoped>
    .deletepop{
        position: absolute;
        z-index: 997;
        height: 100%;
        width: 30%;
        top: 0;
        left: 0px;
        border-radius: 7px;
        right: 0;
        margin: auto;
        cursor: pointer;
    }
    .content{
        background-color: rgb(248, 10, 42);
        line-height: 40px;
        
        margin: 15px 0;
        border-radius: 7px;

    }
    .back{
        line-height: 40px;
        position: absolute;
        right: 0px;
        top: 15px;
    
    }
</style>