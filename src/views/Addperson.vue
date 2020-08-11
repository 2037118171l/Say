<template>
    <div>
<!--        顶部导航栏-->
        <van-nav-bar
                title="添加好友"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
<!--        搜索框-->
        <van-search v-model="value" placeholder="请输入搜索关键词" />
<!--        滚动的标签页 animated-->
        <van-tabs v-model="activeName" animated>
            <van-tab title="找人" name="a">
<!--                带箭头的找人单元格 is-link-->
                <div class="cellbox" @click="all">
                    <van-cell-group>
                        <van-cell title="扫一扫添加好友" is-link icon="scan" />
                        <van-cell title="面对面加好友" is-link icon="friends-o" />
                        <van-cell title="查看附件的人" is-link icon="location-o" />
                    </van-cell-group>
                </div>
            </van-tab>
            <van-tab title="找群聊" name="b">
<!--                添加群聊的单元格-->
                <div class="cellbox" @click="all">
                    <van-cell-group>
                        <van-cell title="扫一扫添加群聊" is-link icon="scan" />
                        <van-cell title="面对面加入群聊" is-link icon="friends-o" />
                    </van-cell-group>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Toast } from 'vant';

    Vue.use(Toast);
    export default {
        name: "Addperson",
        data(){
            return{
                value: '',//搜索框监听的值
                activeName: 'a',//标签页按名字查找的a页
            }
        },
        methods: {
            onClickLeft() {
                this.$router.push({path:'/contacts'})
            },
            all(){
                Toast.fail('该功能未开发');
            }
        },

    }
</script>

<style scoped>
.cellbox{
   margin: 20px auto;
    width: 95%;
    border-radius: 5px;
    box-shadow: 0px 2px 2px 1px rgb(212, 211, 215);
}
</style>
