<template>
	<div id="app">
		点击的次数{{count1}}
		<button @click="addcount">dianji</button>
		<h3>{{$store.getters.reversemsg}}</h3>
	</div>
</template>



<script>
import { mapState } from "vuex";
let obj={
  mounted:function() {
    console.log('mount');
  },
}
export default {
	data() {
		return {
			count: ""
		};
	},
	methods: {
		addcount() {
			console.log(this);
			this.$store.commit("addnum");
		}
	},
	computed: mapState({
		count1: state => {
			return state.num;
		}
  }),
  mixins:[obj]
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
