<template>
    <div>
        <router-view/>
        <van-tabbar v-model="active" active-color="#F75000" inactive-color="#000" route>
            <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="chat-o" to="/news" badge="9">消息</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/contacts">通讯录</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="/setting">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "Tabbar",
        data(){
            return{
                active: 1,
            }
        }
    }
</script>

<style scoped>

</style>
