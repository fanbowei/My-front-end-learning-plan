<template>
    <div>
        this is a
    </div>
</template>

<script>
export default {
    mounted() {

        this.$root.eventbus.on('myevent12',(data)=>{
            alert(data)
        })
        this.$root.eventbus.on('myevent23',(data)=>{
            alert(data)
        })
    },
}
</script>