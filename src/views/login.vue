<!-- 登录页面 -->
<template>
    <div id="web">
        <p style="height:160px;"></p>
        <h1 align="center">欢迎进入XXX中台系统</h1>
        <p style="height:20px;"></p>
        <div class="login">
            <div class="banner">
            </div>
            <div class="logmain">
                <h1></h1>
                <el-row>
                    <el-col :span="24" class="col-margin">
                        <el-input placeholder="账号名……" v-model="param.userName">
                            <template slot="prepend">账 号：</template>
                        </el-input>
                    </el-col>
                    <el-col :span="24" class="col-margin">
                        <el-input placeholder="密码……" v-model="param.password">
                            <template slot="prepend">密 码：</template>
                        </el-input>
                    </el-col>
                    <el-col :span="12" class="col-margin">
                       <input name="" type="checkbox" value="" class="cex"/>记住密码
                    </el-col>
                    <el-col :span="12" class="col-margin">
                       <a href="#" class="more">忘记密码</a>
                    </el-col>
                    <el-col :span="24" class="col-margin">
                        <el-button type="primary" :loading="loading" @click="submit">
                            <span >提交</span>
                        </el-button>
                    </el-col>
                </el-row>
            </div>
        </div>
        <p style="height:100px;"></p>
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
<style scoped lang="less">
    html {
        -webkit-text-size-adjust: none;
    }

    li,ol,ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    img {
        border: 0;
    }

    #web {
        width: 100%;
        height: 100%;
        background: cadetblue;
        margin: 0 auto;
    }

    #web .login {
        width: 700px;
        height: 220px;
        margin: 0 auto;
        background: #F7F7F9;
        border: 1px solid #ddd;
    }

    #web .login .banner {
        width: 346px;
        height: 218px;
        padding: 1px;
        float: left;
    }

    #web .login .logmain {
        width: 320px;
        height: 220px;
        padding: 10px;
        float: right;
    }

    #web .login .logmain h1 {
        height: 20px;
        display: block;
        line-height: 20px;
    }

    .col-margin{
        margin-top: 10px
    }
</style>
