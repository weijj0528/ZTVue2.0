
<template>
    <Row type="flex" justify="start">
        <Col span="1"><Button type="info" size="small" @click="moreSearchOnOff">更多</Button></Col>
        <Col span="3">
            <Input v-model="userQueryParam.name" size="small" placeholder="按回车键可查询……" @on-enter="query"  style="width: 90%"><span slot="prepend">名称</span></Input>
        </Col>
        <Col span="3">
            <Input v-model="userQueryParam.phone" size="small" placeholder="按回车键可查询……" @on-enter="query" style="width: 90%"><span slot="prepend">电话</span></Input>
        </Col>
        <Col span="3" style="flot:right">
            <Button type="primary" size="small" shape="circle" icon="ios-search"></Button>
            <Button type="info" size="small">清空</Button>
            <Button type="info" size="small" @click="query">刷新</Button>
        </Col>
    </Row>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {}
        },
        computed:{
            ...mapGetters(['userQueryParam']),
        },
        mounted: function() {
            
        },
        methods: {
            moreSearchOnOff:function(){
                this.$emit('more-search-onoff')
            },
            query:function(){
                let _self = this;
                let queryParam = {
                    name: _self.userQueryParam.name,
                    phone: _self.userQueryParam.phone,
                };
                this.$emit('query',queryParam);
            },
        }
    }
</script>
<style scoped>
    /*@import '../styles/common.css';*/
</style>