<template>
    <div class="userlist">
        <h1>
            用户列表
        </h1>
        <ul>
            <li  @click="changechat(index)" v-for="(item, index) in userlist" :key="index" ><img :src="item.header"><br>{{item.username}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    props:['userlist'],
    methods: {
        changechat(i){
            this.$emit('changelist',i)
        }
    },
}
</script>




<style scoped>
    .userlist{
        height: 700px;
        width: 300px;
        background-color: red;
    }
    .userlist ul li img{
        height: 80px;
        width: 80px;
    }

</style>
