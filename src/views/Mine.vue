<template>
<div>
    <div>
<!--        顶部导航栏-->
        <van-nav-bar
                title="个人资料"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
    </div>
    <div >
        <van-cell  is-link  @click="headImage">
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <template #title>
                <span class="custom-title celltitle" style="line-height:40px; ">头像</span>
            </template>
            <template #right-icon>
                <van-image class="headimage"
                           round
                           fit="cover"
                           width="40px"
                           height="40px"
                           :src=imageUrl
                />
                <!-- <van-icon name="search" style="line-height: inherit;" /> -->
            </template>
        </van-cell>
        <van-cell-group @click="dialogupdataFormVisible = true">
            <van-cell :value=name is-link>
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <span class="custom-title celltitle">昵称</span>
                </template>
            </van-cell>
                <van-cell  is-link :value=signature>
                    <!-- 使用 title 插槽来自定义标题 -->
                    <template #title>
                        <span class="custom-title celltitle">个性签名</span>
                    </template>
                </van-cell>
            <van-cell value="男" is-link >
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <span class="custom-title celltitle">性别</span>
                </template>
            </van-cell>
            <van-cell  is-link :value=birthday>
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title >
                <span class="custom-title celltitle">生日</span>
            </template>
            </van-cell>

            <van-cell  is-link >
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <span class="custom-title celltitle">编辑资料</span>
                </template>
            </van-cell>
        </van-cell-group>
    </div>
<!--    编辑资料弹窗-->
    <el-dialog  :visible.sync="dialogupdataFormVisible" :modal-append-to-body='false' customClass="customStyles">
        <el-form :model="updataform">
            <el-form-item label="昵称:" :label-width="formLabelWidth">
                <el-input v-model="updataform.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机:" :label-width="formLabelWidth">
                <el-input v-model="updataform.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="个性签名:" :label-width="formLabelWidth">
                <el-input v-model="updataform.signature" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别:" :label-width="formLabelWidth">
<!--                <el-input v-model="updataform.sex" autocomplete="off"></el-input>-->
                <el-select v-model=updataform.sex placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="生日:" :label-width="formLabelWidth">
<!--                <el-input v-model="updataform.birthday" autocomplete="off"></el-input>-->
                <div class="block" style="width:210px ">
                    <el-date-picker
                            v-model="updataform.birthday"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </div>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogupdataFormVisible = false">取 消</el-button>
            <el-button type="primary"
                       @click="updataUser"
                       :disabled="!updataform.name||!updataform.name||!updataform.signature||!updataform.sex||!updataform.birthday">确 定</el-button>
        </div>
    </el-dialog>
<!--    退出登录-->
    <div class="gooff">
        <van-button color="#ec234c" round type="info" size="large" @click="goOff">退出登录</van-button>
    </div>

</div>
</template>

<script>
    import { ImagePreview } from 'vant';
    export default {
        name: "Mine",
        data(){
            return{
                name:'王富贵',
                signature:'人间不值得',
                birthday:'2019-01-01',
                imageUrl:'https://img.yzcdn.cn/vant/cat.jpeg',
                dialogupdataFormVisible:false,
                formLabelWidth: '80px',
                updataform:{ //修改资料的form
                    name:'',
                    signature:'',
                    phone:'',
                    birthday:'',
                    sex:''
                },
                options: [{ //性别的选择器内容
                    value: '选项1',
                    label: '男'
                }, {
                    value: '选项3',
                    label: '女'
                }, ],

            }
        },
        methods: {
            onClickLeft() {
                this.$router.push({path:'/setting'})
            },
            // 预览图片
            headImage() {
                ImagePreview([this.imageUrl]);
            },
            updataUser(){
                this.dialogupdataFormVisible = false;
            },
            goOff() {
                this.$router.push({path: '/'});
                // localStorage.removeItem('token')
            }

        },
    }
</script>

<style scoped>
    .celltitle{
        float:left;
        margin-left:20px;
    }
    .gooff{
        position: absolute;
        bottom: 20px;
        width: 80%;
        margin-left: 10%;

    }

</style>
