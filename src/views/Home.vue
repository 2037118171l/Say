<template>
    <div>
<!--        头像-昵称-个性签名-->
        <div>
            <div class="portrait">
            </div>
            <div style="width: 82%;float: left">
                <van-cell title="王富贵"  label="人间不值得">
                    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                    <template #right-icon>
                        <van-icon name="scan"  size="2rem"/>
                    </template>
                </van-cell>
            </div>
        </div>
<!--        搜索框-->
        <div>
            <van-search v-model="value" placeholder="请输入搜索关键词" @search="onSearch"/>
        </div>
<!--        推荐列表-->
        <div >
            <van-tabs v-model="activeName" animated>
                <van-tab title="推荐" name="a">
                    <div style="margin: 10px auto;">
                        <div v-for="index in 8" :key="index" class="viewboxs">
                            <div class="headerpeciter"></div>
                            <div style="width: 82%;float: left">
                                <div class="name">糟糕透了1111111111111</div>
                            </div>
                            <div class="content">
                                希望你生活的地方 天空足够蓝 阳光足够好 街边的小店干净又好吃 回家的灯总是亮的
                            </div>
                            <div style="margin-left: 30px;margin-top: 10px;float: left">
                                <van-icon name="good-job-o"  size="20px" />
                            </div>
                            <div style="margin-left: 30px;margin-top: 10px;float: left">
                                <van-icon name="chat-o" size="20px"/>
                            </div>
                            <div style="margin-top: 10px;float: right;margin-right: 20px" @click="showShare = true">
                                <van-icon name="ellipsis"  size="20px"/>
                            </div>
                        </div>
                    </div>

                </van-tab>
                <van-tab title="关注" name="b">
                    <van-empty description="没有关注的人" />
                </van-tab>
            </van-tabs>
<!--            分享面板-->
            <van-share-sheet
                    v-model="showShare"
                    title="立即分享给好友"
                    :options="options"
                    @select="onSelect"
            />
        </div>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    import Tabbar from "../components/Tabbar";
    export default {
        name: "Home",
        components:{
            Tabbar
        },
        data() {
            return {
                value: '',//搜索框监听的值
                activeName:'a',//标签页按名字打开a
                showShare: false,//分享面板不显示
                options: [ //分享面板里面按两行分布
                    [
                        { name: '微信', icon: 'wechat' },
                        { name: '微博', icon: 'weibo' },
                        { name: 'QQ', icon: 'qq' },
                    ],
                    [
                        { name: '复制链接', icon: 'link' },
                        { name: '分享海报', icon: 'poster' },
                        { name: '二维码', icon: 'qrcode' },
                    ],
                ],
            };
        },
        methods: {
            onSearch(val) {
                Toast(val);
            },
            onSelect(option) {
                Toast(option.name);
                this.showShare = false;
            },
        },

    }
</script>

<style scoped>
.portrait{
    margin-left: 3%;
    margin-top: 5px;
    width: 15%;
    height: 60px;
    float: left;
    border-radius: 50%;
    background-image: url("https://img.yzcdn.cn/vant/cat.jpeg");

    background-size: 100% 100%;
}
.viewboxs{
    margin: 10px auto;
    height: 150px;
    width: 95%;
    border-radius: 5px;
    box-shadow: 0px 2px 5px 5px rgb(233, 233, 234);
}
.headerpeciter{
    margin-left: 3%;
    margin-top: 10px;
    width: 13%;
    height: 50px;
    float: left;
    border-radius: 50%;
    background-image: url("../assets/imgs/head.jpeg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.name{
    width:40%;
    margin-top: 20px;
    margin-left: 10px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;

}
.content{
    margin-top: 5px;
    margin-left: 2%;
    width: 95%;
    float: left;
    text-indent: 30px;
}
</style>
