<template>
   <div>
        这是我的个人中心
        <button @click='change'>去主页</button>
   </div>
</template>

<script>
export default {
   methods: {
      change(){
         this.$router.push('/1')
      }
   },
}
</script> 