<template>
<div >
<!--    顶部导航栏-->
    <div>
        <van-nav-bar
                title="寄信"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
    </div>
    <div class="person">
        <van-cell title="寄信人"  size="large" label="请输入真实姓名" icon="shop-o" />
        <van-cell title="收信人"  size="large" label="请输入姓名" icon="shop-o"/>
    </div>
</div>
</template>

<script>
    import '../assets/css/mysetting.css'
    export default {
        name: "Letter",
        methods: {
            onClickLeft() {
                this.$router.push({path:'/setting'})
            },

        },
    }
</script>

<style scoped>

</style>
