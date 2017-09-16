<!--Created by Weiun on 2017/1/17.-->
<template>
    <Row type="flex" justify="space-between" align="middle">
        <Col span="1" style="padding: 20px;">
        <Avatar style="background-color: #87d068" size="large" icon="person" />
        </Col>
        <Col span="2" style="padding-left: 5px;">
        <span class="userName">系统管理员</span>
        </Col>
        <Col span="20" style="padding: 20px;">

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
        return {}
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