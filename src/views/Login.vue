<template>
<div class="login">
    <div class="views">
        <div class="box">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="账号" prop="username" class="login_input">
                    <el-input
                            @keyup.enter.native="onSubmit()"
                            autocomplete="off"
                            maxlength="12"
                            placeholder="请输入账号"
                            suffix-icon="el-icon-user-solid"
                            type="text"
                            class="login-form-input"
                            v-model="form.username"
                    />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input
                            @keyup.enter.native="onSubmit()"
                            maxlength="10"
                            placeholder="请输入密码"
                            show-password
                            type="password"
                            v-model="form.password"
                            class="login-form-input"
                    />
                </el-form-item>
                <el-form-item>
                <el-button @click="dialogFormVisible = true" class="forgetpsd" type="text">忘记密码</el-button>
                </el-form-item>
                <el-form-item>
                    <div style="margin-top: -20px">
                        <div style="float: left;margin-left: -20px">
                            <el-button type="primary" @click="onSubmit">登录</el-button>
                        </div>
                        <div style="float: left;margin-left:35%">
                            <el-button type="primary" @click="dialogaddFormVisible = true">注册</el-button>
                        </div>
                    </div>
                </el-form-item>
                <!-- 其他方式登录 -->
<!--                <el-divider >其他方式登录</el-divider>-->
<!--                <el-form-item>-->
<!--                    <div>-->
<!--                        <div class="qqlogo">-->
<!--                        </div>-->
<!--                        <div class="wechatlogo">-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </el-form-item>-->
            </el-form>
            <!-- 忘记密码弹窗 -->
            <el-dialog title="修改密码" :visible.sync="dialogFormVisible" :modal-append-to-body='false' customClass="customStyle">
                <el-form :model="psdform" :rules="rules">
                    <el-form-item label="账号:" :label-width="formLabelWidth" prop="username">
                        <el-input v-model="psdform.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
                        <el-input v-model="psdform.password" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary"
                               @click="updatePsd"
                               :disabled="!psdform.username||!psdform.password">确 定</el-button>
                </div>
            </el-dialog>
            <!-- 注册弹窗 -->
            <el-dialog title="注册" :visible.sync="dialogaddFormVisible" :modal-append-to-body='false' customClass="customStyle">
                <el-form :model="addform">
                    <el-form-item label="账号:" :label-width="formLabelWidth">
                        <el-input v-model="addform.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="手机:" :label-width="formLabelWidth">
                        <el-input v-model="addform.phone" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码:" :label-width="formLabelWidth">
                        <el-input v-model="addform.password" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogaddFormVisible = false">取 消</el-button>
                    <el-button type="primary"
                               @click="addUser"
                               :disabled="!addform.username||!addform.phone||!addform.password">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>

</div>
</template>

<script>
    import "../assets/css/login.css"
    import {validateNumber, validatePsdReg} from "../validator.js"
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                },
                // 表单验证，需要在 el-form-item 元素中增加 prop 属性
                rules: {
                    username: [
                        {required: true, message: "账号不可为空", trigger: "blur"},
                        {type: "string", min: 12, message: "账号是12位纯数字"},
                        {validator: validateNumber}
                    ],
                    password: [
                        {required: true, message: "密码不可为空", trigger: "blur"},
                        {type: "string", min: 6, message: "请输入6-10位字母、数字或者符号组合"},
                        {validator: validatePsdReg}
                    ],

                },
                dialogFormVisible: false,
                psdform: {
                    username:'',
                    password:''
                },
                formLabelWidth: '60px',
                dialogaddFormVisible: false,
                addform: {
                    username:'',
                    password:''
                },
            }
        },
        methods: {
            // 登录
            onSubmit() {
                console.log('submit!');
                    this.$router.push({path:'/home'})
            },
            // 注册
            addUser() {
                this.dialogaddFormVisible = false;
                console.log('addUser!');
            },
            // 修改密码
            updatePsd(){
                this.dialogFormVisible = false;
                console.log('forupdatePsd!');
            },
        },
    }
</script>

<style scoped>

</style>
