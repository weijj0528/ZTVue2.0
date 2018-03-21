<!--Created by Weiun on 2017/1/17.-->
<template>
    <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="2" style="padding-left: 5px;">
            <span class="userName">系统管理员</span>
        </el-col>
        <el-col :span="18">
        <el-button v-for="item in topMenus" :key='item.id' :icon="item.icon" @click="topMenuSelect(item)" type="text" size="large">{{item.name}}</el-button>
        </el-col>
        <el-col :span="1" style="padding: 20px;">
            <el-button type="text" icon="el-icon-arrow-right" @click="logout"  size="large" style="width:100%"></el-button>
        </el-col>
    </el-row>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            topMenus: [
                {
                    id: 'api',
                    name: 'API文档',
                    icon: 'el-icon-tickets',
                    url: 'http://lovejiayuan.cn:8080/api',
                },
                {
                    id: 'service',
                    name: 'SOA服务治理',
                    icon: 'el-icon-refresh',
                    url: 'http://lovejiayuan.cn:8080/dubbo',
                },
                {
                    id: 'job',
                    name: 'Job调度中心',
                    icon: 'el-icon-time',
                    url: 'http://114.67.135.132:8080/xxljob',
                },
                {
                    id: 'maven',
                    name: 'Maven私库',
                    icon: 'el-icon-menu',
                    url: 'http://lovejiayuan.cn:8081',
                },
            ]
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            // 代码保证 this. 在 document 中
        })
    },
    beforeDestroy() {

    },
    methods: {
        ...mapActions(['userLogout']),
        logout: function() {
            let _self = this;
            this.userLogout().then((resp) => {
                _self.$router.push('/login');
            }, (err) => {
                _self.$router.push('/login');
            });
        },
        topMenuSelect: function(menu) {
            console.log(menu);
            if (menu.url.indexOf('http') == 0) {
                // 打开新窗口
                window.open(menu.url);
            } else {
                this.$router.push(menu.url);
            }
        }
    }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/

.userName {
    el-color: #fff;
}
</style>