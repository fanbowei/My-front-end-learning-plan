<template>
    <div class="chats">
        <img :src="chooseusers.user.header" alt="">
        
        <slot></slot>
    </div>
</template>


<script>
export default {
    props:['chooseusers']
}
</script>


<style scoped>
    .chats {
        width: 500px;
        height: auto;
        display: flex;
        line-height: auto;
        align-content: space-between;
    }
    img{
        height: 40px;
        width: 40px;
    }
   
</style>