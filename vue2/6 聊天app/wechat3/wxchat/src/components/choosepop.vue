<template >
    <div class="choosepop">
        <div class="choose">
            <div class="one">{{popmsg}}</div>
            <div class="two" @click='closepop(true)'>好的</div><div class="three" @click='closepop(true)'>不好</div>
        </div>
    </div>
</template>

<script>
export default {
    props:['popmsg','togglechoosepopshow'],
    methods: {
        closepop(back){
            this.togglechoosepopshow(false)
            this.$root.$children[0].choosepopbacktrue=back
            
        }
    },
}
</script>

<style scoped>
    .choosepop{
        height: 100vh;
        width: 100vw;
        background-color: transparent;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 998;
        font-weight: 900;
    }
    .choose{
        height: 150px;
        width: 80%;
        position: absolute;
        z-index: 998;
        background-color: rgb(211, 224, 231);
        top:25%;
        left: 0;
        right: 0;
        margin: 0 auto;
        text-align: center;
    }
    .one{
        position: absolute;
        height: 58%;
        width: 100%;
        padding-top: 20px;
        

    }
    .two{
        position: absolute;
        top: 70%;
        left: 30%;
        
    }
    .three{
        position: absolute;
        top: 70%;
        left: 60%;
    }
</style>