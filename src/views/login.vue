<!-- 登录页面 -->
<template>
    <div id="web">
        
        <div style="height:180px"></div>
        <h1 align="center" style="margin:0">欢迎进入XXX中台系统</h1>
        <p align="center"></p>
        <div class="login">
            <div class="banner">
                <el-carousel height="218px">
                    <el-carousel-item>
                        <img style="height:218px;width:358px" src="http://img3.imgtn.bdimg.com/it/u=765875353,3793971150&fm=27&gp=0.jpg"/>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="logmain">
                <el-row>
                    <el-col :span="24" class="col-margin">
                        <el-input placeholder="账号名……" v-model="param.userName" size="large">
                            <template slot="prepend">账 号：</template>
                        </el-input>
                    </el-col>
                    <el-col :span="24" class="col-margin">
                        <el-input type="password" placeholder="密码……" v-model="param.password" size="large">
                            <template slot="prepend">密 码：</template>
                        </el-input>
                    </el-col>
                    <el-col :span="20" class="col-margin">
                        <el-checkbox v-model="rememberPwd" >记住密码</el-checkbox>
                    </el-col>
                    <el-col :span="4" class="col-margin">
                       <el-button type="text">忘记密码</el-button>
                    </el-col>
                    <el-col :span="24" class="col-margin">
                        <el-button type="primary" :loading="loading" @click="submit" style="width:100%" size="large">
                            提交
                        </el-button>
                    </el-col>
                </el-row>
            </div>
        </div>
        <p align="center">XXX公司版权所有@****提供技术支持</p>
    </div>
</template>
<script>
    import http from "./../libs/httpService"
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                loading:false,
                rememberPwd:false,
                param: {
                    userName: "",
                    password: ""
                }
            }
        },
        components: {},
        methods: {
            ...mapActions(['userLogin']),
            submit: function () {
                let _self = this;
                console.log(_self.param);
                _self.loading = true;
                _self.userLogin(_self.param).then((resp) => {
                    console.log(resp);
                    _self.loading = false;
                    _self.$router.push('/main/home');
                }, (err) => {
                    _self.loading = false;
                    // _self.$router.push('/main');
                });
            }
        }
    }
</script>
<style scoped >

    #web {
        width: 100%;
        height: 100%;
        background: cadetblue;
        margin: 0 auto;
        background-image: url('../resource/image/bg_login.jpg');
        background-repeat:no-repeat; 
        background-size:100% 100%;
        -moz-background-size:100% 100%;
    }

    #web .login {
        width: 700px;
        height: 220px;
        margin: 0 auto;
        background: #F7F7F9;
        border: 1px solid #ddd;
    }

    #web .login .banner {
        width: 358px;
        height: 218px;
        padding: 1px;
        float: left;
    }

    #web .login .logmain {
        width: 320px;
        height: 198px;
        padding: 10px;
        float: right;
    }

    .col-margin{
        margin-top: 10px
    }
</style>
