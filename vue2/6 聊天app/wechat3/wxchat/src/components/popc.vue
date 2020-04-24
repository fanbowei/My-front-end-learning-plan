<template>
    <div class="popsc" >
        <div class="pop">
            {{popmsg}}
        </div>
    </div>
</template>

<script>
export default {
    props:['popmsg',],
    name:'fade',
}
</script>

<style scoped>
    .popsc{
        transition: all 0.5s;
        position: fixed;
        top: 10px;
        left: 0;
        right: 0;
        height: 100px;
        width: 90vw;
        background-color: rgb(211, 224, 231);
        z-index: 999;
        margin: 0 auto;
    }
    .pop{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        font-size: 20px;
        font-weight: 900;
        text-align: center;
        height: 30px;
    }   
</style>