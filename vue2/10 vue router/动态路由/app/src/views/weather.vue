<template>
    <div>
        <h1>城市:{{city}}</h1>
        <h2>天气:{{tq}}</h2>
        <h2>温度:{{tem}}</h2>
        <h2>方向:{{dir}}</h2>
        <router-link to="/new/11">dfsfsf</router-link>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            city:'',
            tq:'',
            tem:'',
            dir:'',
        }
    },
    mounted() {
    },
    created() {
    
        let parameters="location="+ this.$route.params.city;
        axios.get(`https://free-api.heweather.net/s6/weather/now?${parameters}&key=022fd994f39c4229850aac7380854ea0`)
        .then(
            (data)=>{
               console.log(data);
                this.city=data.data.HeWeather6[0].basic.location
                this.tq=data.data.HeWeather6[0].now.cond_txt
                this.tem=data.data.HeWeather6[0].now.tmp
                this.dir=data.data.HeWeather6[0].now.wind_dir
            }
        )
    },
   
}
</script>