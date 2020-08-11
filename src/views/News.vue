<template>
<div>
<!--    搜索框-->
    <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
    />
<!--    显示的消息列表-->
    <div v-for="index in 8" :key="index">
        <router-link to="chat">
<!--            头像-->
            <div class="portrait"></div>
<!--            消息-->
<!--            好友名字-->
<!--            消息内容-->
            <div style="width: 80%;float: left">
                <van-cell title="菜xx"  label="人间不值得" />
            </div>
        </router-link>
        <router-link to="chat">
            <div class="portrait"></div>
            <div style="width: 80%;float: left">
                <van-cell title="静植"  label="好的">
                    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                    <template #right-icon>
<!--                      记录未读信息数-->
                    </template>
                </van-cell>
            </div>
        </router-link>
    </div>
    <!-- 底部标签栏-->
    <Tabbar></Tabbar>
</div>
</template>

<script>
    import { Toast } from 'vant';
    import Tabbar from "../components/Tabbar";
    export default {
        name: "Room",
        // 将Tabber组件映射成标签
        components:{
            Tabbar
        },
        data() {
            return {
                value: '',// 搜索框监听的值

            };
        },
        methods: {
            onSearch(val) {
                Toast(val);
            },
            onCancel() {
                Toast('取消');
            },
        },
    }
</script>

<style scoped>
    /*头像*/
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
</style>
