<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
   beforeRouteEnter (to, from, next) {
    // 在渲染组件的对象路由被confirm前调用
    //不能获取组件实例this  因为当守卫执行前,组件实例还没有被创建
    console.log('---beforeenter',this);
    next()
  },
  beforeRouteUpdata(){
    //在当前路由改变,但是组件复用的时候
    //类似 /foo/:id
    //可以访问组件this
    console.log('--beforerouteupdata');
  },
  beforeRouteLeave (to, from, next) {
    //导航离开该组件的对象路由时调用,可以访问this
    console.log('----beforeleave');
    next()
  }
}
</script>
