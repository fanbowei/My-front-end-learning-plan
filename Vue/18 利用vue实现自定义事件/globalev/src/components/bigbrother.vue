<template>
    <div>
        <h1>我是哥哥</h1>
    </div>
</template>


<script>
export default {
    mounted() {
        this.$globaleventbus.$on('alertmsg',(data)=>{
            alert(data)
        })
    },
    
}
</script>