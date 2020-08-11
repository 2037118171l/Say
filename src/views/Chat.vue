<template>
    <div class="chat">
<!--        顶部导航栏-->
        <van-nav-bar
                title="菜xx"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <div>
<!--            头像-->
            <div class="portrait"></div>
<!--            消息-->
            <div class="chatcontent">
                上号
            </div>
        </div>
        <div>
            <div class="portraits"></div>
            <div class="chatcontents">
                等一下,马上来
            </div>

        </div>
        <div style="position: absolute;bottom: 0px;width: 95%;margin-left: 3%">
            <van-field
                    v-model="sms"
                    center
                    clearable
                    placeholder="请输入"
            >
                <template #button>
                    <van-button size="small" type="primary">发送</van-button>
                </template>
            </van-field>
        </div>

    </div>

</template>

<script>
    export default {
        name: "Chat",
        data(){
          return{
              sms:'',
          }
        },
        methods: {
            onClickLeft() {
                this.$router.push({path:'/news'});
            },
        },
    }
</script>

<style scoped>
    .chat{
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 0px;
        top: 0px;
        width: 100%;
    }
    .portrait{
        margin-left: 3%;
        margin-top: 15px;
        width: 10%;
        height: 40px;
        float: left;
        border-radius: 50%;
        background-image: url("https://img.yzcdn.cn/vant/cat.jpeg");
        background-size: 100% 100%;
    }
    .chatcontent{
        line-height: 20px;
        margin-left: 10px;
        margin-top: 20px;
        padding:10px ;
        float: left;
        max-width: 60%;
        border-radius: 5px;
        border-bottom: 2px slategray solid;
        box-shadow: 0px 2px 2px 1px rgb(212, 211, 215);
    }
    .chatcontents{
        margin-right: 10px;
        margin-top: 20px;
        padding:10px ;
        max-width: 60%;
        float: right;
        border-radius: 5px;
        border-bottom: 2px slategray solid;
        box-shadow: 0px 2px 2px 1px rgb(212, 211, 215);
    }
    .portraits{
        margin-right: 3%;
        margin-top: 15px;
        width: 10%;
        height: 40px;
        float: right;
        border-radius: 50%;
        background-image: url("https://img.yzcdn.cn/vant/cat.jpeg");
        background-size: 100% 100%;
    }

</style>
