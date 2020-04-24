<template>
  <div id="app">
    <van-button type="default">默认按钮</van-button>
    <van-button plain type="primary">朴素按钮</van-button>
    <van-button plain type="info">朴素按钮</van-button>
  </div>
</template>


<script>
import { Button } from 'vant';
import Vue from 'vue';
Vue.use(Button);


export default {
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
