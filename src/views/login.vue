<!-- 登录页面 -->
<template>
    <div id="web">
        <p style="height:180px;"></p>
        <h1 align="center">欢迎进入爱家园中台系统</h1>
        <p style="height:40px;"></p>
        <div class="login">
            <div class="banner">
            </div>
            <div class="logmain">
                <h1>&nbsp;</h1>
                <div class="logdv">
                    <span class="logzi">账 号：</span>
                    <input name="textarea" type="text" id="textarea" class="ipt" v-model="param.userName"/>
                </div>
                <div class="logdv">
                    <span class="logzi">密 码：</span>
                    <input name="textarea" type="password" id="textarea" class="ipt" v-model="param.password"/>
                </div>
                <div class="logdv">
                    <p class="logzi">&nbsp;</p>
                    <a href="#" class="more">忘记密码</a>
                    <input name="" type="checkbox" value="" class="cex"/>记住密码
                </div>
                <div class="logdv" style="height:40px;">
                    <p class="logzi">&nbsp;</p>
                    <Button type="primary" class="btnbg" :loading="loading" @click="submit">
                        <span >提交</span>
                    </Button>
                </div>
                <div>
                    <a href="#" class="more">注册</a>
                </div>
            </div>
        </div>
        <p style="height:100px;"></p>
        <p align="center">爱家园公司版权所有@****提供技术支持</p>
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
            ...mapActions(['login']),
            submit: function () {
                let _self = this;
                console.log(_self.param);
                _self.loading = true;
                _self.login(_self.param).then((resp) => {
                    console.log(resp);
                    _self.loading = false;
                    _self.$router.push('/main');
                }, (err) => {
                    _self.loading = false;
                    _self.$router.push('/main');
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
        width: 670px;
        height: 220px;
        margin: 0 auto;
        background: #F7F7F9;
        border: 1px solid #ddd;
    }

    #web .login .banner {
        width: 368px;
        height: 218px;
        padding: 1px;
        float: left;
    }

    #web .login .logmain {
        width: 300px;
        height: 220px;
        float: right;
    }

    #web .login .logmain h1 {
        height: 30px;
        display: block;
        line-height: 30px;
    }

    #web .login .logmain .logdv {
        height: 28px;
        margin: 8px 0;
        padding-left: 20px;
        line-height: 28px;
    }

    #web .login .logmain .logdv .logzi {
        width: 50px;
        height: 28px;
        display: block;
        float: left;
    }

    #web .login .logmain .logdv .ipt {
        width: 190px;
        height: 26px;
        border: 1px solid #ddd;
        padding-left: 10px;
    }

    .more {
        display: block;
        float: right;
        color: #3C8DB5;
        margin-right: 30px;
        color: #3C8DB5;
    }

    .cex {
        float: left;
        display: block;
        margin-top: 7px;
        margin-right: 5px;
    }

    .btnbg {
        width: 203px;
        height: 40px;
        text-align: center;
        color: #FFFFFF;
        font-weight: bold;
        border: 0;
        cursor: pointer;
    }
</style>
