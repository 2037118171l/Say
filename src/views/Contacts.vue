<template>
    <div>
<!--        插槽自定义右侧图标的单元格-->
        <van-nav-bar title="通讯录"  >
            <template #right>
<!--                添加好友或群聊-->
                <router-link to="addperson">
                    <van-icon name="add-o" size="18" />
                </router-link>
            </template>
        </van-nav-bar>
<!--        带监听的搜索框-->
        <form action="/">
            <van-search
                    v-model="value"
                    show-action
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
                    @touchstart.stop="show = true"
            />
        </form>
        <van-cell-group>
            <van-cell title="新朋友" is-link />
        </van-cell-group>
<!--        标签页-->
        <van-tabs v-model="active">
            <van-tab title="好友">
<!--                索引页-->
                <van-index-bar>
                    <van-index-anchor index="A" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="B" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    ...
                </van-index-bar>
            </van-tab>
            <van-tab title="群聊" >
<!--                自定义的下拉刷新，刷新效果是图片的改变-->
                <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
                    <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
                    <template #pulling="props">
                        <img
                                class="doge"
                                src="https://img.yzcdn.cn/vant/doge.png"
                                :style="{ transform: `scale(${props.distance / 80})` }"
                        />
                    </template>

                    <!-- 释放提示 -->
                    <template #loosing>
                        <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
                    </template>

                    <!-- 加载提示 -->
                    <template #loading>
                        <div >
                            <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
                        </div>

                    </template>
                    <div style="height: 100px;">下拉刷新</div>
                </van-pull-refresh>
<!--                自定义的索引，索引方式为1-9-->
                <van-collapse v-model="activeName" accordion>
                    <van-collapse-item title="创建的群聊" name="1">
                        <van-cell title="文本" />
                        <van-cell title="文本" />
                        <van-cell title="文本" />
                    </van-collapse-item>
                    <van-collapse-item title="加入的群聊" name="2">
                        <van-cell title="文本" />
                        <van-cell title="文本" />
                        <van-cell title="文本" />
                    </van-collapse-item>
                </van-collapse>
            </van-tab>

        </van-tabs>
        <div>
<!--            数字键盘-->
            <van-number-keyboard
                    :show="show"
                    theme="custom"
                    extra-key="."
                    close-button-text="完成"
                    @blur="show = false"
                    @input="onInput"
                    @delete="onDelete"
            />
        </div>
<!--        底部标签栏-->
        <Tabbar></Tabbar>
    </div>
</template>

<script>
    import Tabbar from "../components/Tabbar";
    import { Toast } from 'vant';
    export default {
        name: "Contacts",
        components:{
          Tabbar
        },
        data() {
            return {
                value: '',//搜索框监听值
                active: 0,//默认打开的是好友
                activeName: '1',//默认打开加入的群聊
                // count: 0,
                isLoading: false,//下拉刷新默认不显示
                show: false,//数字键盘默认不显示
            };
        },
        methods: {
            onRefresh() {
                setTimeout(() => {
                    Toast('刷新成功');
                    this.isLoading = false;

                }, 1000);
            },
            onSearch(val) {
                Toast(val);
            },
            onInput(value) {
                Toast(value);
            },
            onDelete() {
                Toast('删除');
            }
        },
    }
</script>

<style scoped>
    .doge {
        width: 140px;
        height: 72px;
        margin-top: 8px;
        border-radius: 4px;
    }
</style>
