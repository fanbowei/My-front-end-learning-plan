<template>
    <div class="alert">
        <div class="zz">
            <div class="alertmain">
                <div class="title">
                    温馨提示
                </div>
                <div class="content">
                    即将删除内容
                </div>
                <div class="btnlist">
                    <div class="btn cancel" @click='cancelevent'>
                    取消
                </div>
                <div class="btn comfirm" @click='comfirmevent'>
                    确认
                </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['title','content','cancelevent','comfirmevent'],

}
</script>


<style lang="less">
    @themecolor:orange;
    @defontsize:18px;
    @defontcolor:#fff;

    .fullscreen(){
        width: 100vw;
        height: 100vh;

    }

    .alert{
        .fullscreen();
        .zz{
            .fullscreen();
            display: flex;
            background-color:rgba(0,0,0,.7);
            justify-content: center;
            align-items: center;
            
        }

    .depadding(){
        padding: 10px;
    }
        .alertmain{
            position: relative;
            width: 600px;
            height: 400px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            .title{
                font-size: @defontsize;
                height: 50px;
                background-color: @themecolor;
                color: @defontcolor;
                .depadding();
                line-height: 50px;
                font-weight: 900;
            }
            .content{
                .depadding();
                font-size: @defontsize;

            }

            .btns(@padding:20px){
                padding: @padding;
                text-align: center;

            }

            .btnlist{
                position: absolute;
                width: 100%;
                bottom: 0;
                display: flex;
                
                margin: 0 auto;
            }
            .btn{
                .btns();
                width: 50%;

            }
            .cancel{
                background-color: pink;
                
            }
            .comfirm{
                background-color: yellowgreen;
            }
        }
    }
</style>