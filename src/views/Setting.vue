<template>
<div class="mysetting">
    <div class="viewbox">
<!--        头像-->
        <div class="imgbox">
            <van-image
                    round
                    fit="cover"
                    width="5rem"
                    height="5rem"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
        </div>
        <div style="float: left;margin-top: 20px;margin-left: 20px">
<!--            昵称-->
            <div class="nemebox">
                <b>王富贵111111111111222222</b>
            </div>
<!--            个性签名-->
            <div class="signature">
                人间不值得
            </div>
        </div>

<!---->
    </div>
<!--    关注-点赞-寄信-粉丝-->
    <div class="dynamic">
        <div style="margin: 15px 30px;">
            <div>
                <van-icon name="like-o" size="40px"  color="#46a3ff"/>
            </div>
            <div>
                关注
            </div>

        </div>
        <div style="margin: 15px 20px;">
            <div>
                <van-icon name="thumb-circle-o" size="40px"  color="#46a3ff"/>
            </div>
            <div>
                点赞
            </div>
        </div>
        <div style="margin: 15px 20px;">
            <router-link to="letter">
            <div>
                <van-icon name="envelop-o" size="40px" color="#46a3ff"  />
            </div>
            <div>
                寄信
            </div>
            </router-link>
        </div>
        <div style="margin: 15px 30px;">
            <div>
                <van-icon name="flower-o"  size="40px"  color="#46a3ff"/>
            </div>
            <div>
                粉丝
            </div>
        </div>
    </div>
<!--    设置-修改密码等单元格-->
    <div class="sets">
        <van-cell title="帮助中心" is-link icon="question-o" />
        <van-cell title="隐私安全" is-link value="设置密码"   icon="shop-o" @click="dialogFormVisible = true"/>
        <van-cell title="联系客服" is-link icon="phone-o" />
        <van-cell title="设置" is-link icon="setting-o"  to="/mine" />
    </div>
<!--        修改密码弹窗-->
        <el-dialog title="修改密码" :visible.sync="dialogFormVisible" custom-class="customStyles">
        <el-form :model="form">
            <el-form-item label="新密码" :label-width="formLabelWidth">
                <el-input v-model="form.password" autocomplete="off" type="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" :label-width="formLabelWidth">
                <el-input v-model="form.againPass" autocomplete="off" type="password"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary"
                       @click="dialogFormVisible = false"
                       :disabled="!(form.password == form.againPass)">确 定</el-button>
        </div>
        </el-dialog>
    <Tabbar></Tabbar>
</div>
</template>

<script>
    import Tabbar from "../components/Tabbar";
    import '../assets/css/mysetting.css'
    export default {
        name: "Setting",
        components:{
            Tabbar
        },
        data(){
            return {
                dialogFormVisible: false,//弹窗
                formLabelWidth: '80px',//弹窗的左侧文字宽度
                form: {
                    password: '',//新密码
                    againPass: '',// 确认密码
                },
            }
        },
        methods:{
            updataUser(){
                this.dialogupdataFormVisible = false;
            }
        }
    }
</script>

<style scoped>

</style>
