<template>
    <div>

        <h1 @click="clickalert">我是弟弟</h1>
    </div>
</template>

<script>
export default {
    methods: {
        clickalert(){
            this.$globaleventbus.$emit('alertmsg','兄弟传值')
        }
    },
}
</script>