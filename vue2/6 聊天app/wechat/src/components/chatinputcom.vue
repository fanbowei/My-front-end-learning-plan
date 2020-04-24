<template>
    <div>
        <input type="text" @keydown.enter="addchats($event.target.value)" v-model="inputcontent">
        <button @click="addchats(inputcontent)">发送</button>
    </div>
</template>

<script>
export default {
    props:['addchat'],
    data(){
        return{
            inputcontent:''
        }
    },
    methods: {
        addchats(msg){
            this.addchat(msg)
            this.inputcontent=''      
        }
    },
    
}
</script>