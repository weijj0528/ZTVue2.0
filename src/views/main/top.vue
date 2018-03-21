<!--Created by Weiun on 2017/1/17.-->
<template>
    <Row type="flex" justify="space-between" align="middle">
        <Col span="1" style="padding: 20px;">
        <Avatar style="background-color: #87d068" size="large" icon="person" />
        </Col>
        <Col span="2" style="padding-left: 5px;">
        <span class="userName">系统管理员</span>
        </Col>
        <Col span="20">
        <Menu mode="horizontal" theme="dark" @on-select="topMenuSelect">
            <MenuItem v-for="item in topMenus" v-bind:key='item.id' :name="item.id">
            <Icon :type="item.icon"></Icon>
            {{item.name}}
            </MenuItem>
        </Menu>
        </Col>
        <Col span="1" style="padding: 20px;">
        <Button type="info" size='large' shape="circle" icon="log-out" @click="logout"></Button>
        </Col>
    </Row>
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
                    icon: 'clipboard',
                    url: 'http://lovejiayuan.cn:8080/api',
                },
                {
                    id: 'service',
                    name: 'SOA服务治理',
                    icon: 'shuffle',
                    url: 'http://lovejiayuan.cn:8080/dubbo',
                },
                {
                    id: 'job',
                    name: 'Job调度中心',
                    icon: 'clock',
                    url: 'http://114.67.135.132:8080/xxljob',
                },
                {
                    id: 'maven',
                    name: 'Maven私库',
                    icon: 'ios-keypad',
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
        topMenuSelect: function(id) {
            console.log(id);
            for (let i = 0; i < this.topMenus.length; i++) {
                let menu = this.topMenus[i];
                if (menu.id == id) {
                    if (menu.url.indexOf('http') == 0) {
                        // 打开新窗口
                        window.open(menu.url);
                    } else {
                        this.$router.push(menu.url);
                    }
                    break;
                }
            }
        }
    }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/

.userName {
    color: #fff;
}
</style>