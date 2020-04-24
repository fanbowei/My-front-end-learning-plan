<template>
    <div @click='alertmsg'>
        this is b
    </div>
</template>

<script>
export default {
    methods: {
        alertmsg(){
            this.$root.eventbus.emit('myevent12','hello')
            console.log(this.$root.eventbus);
        }
    },
}
</script>