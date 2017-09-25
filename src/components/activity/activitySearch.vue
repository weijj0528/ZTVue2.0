
<template>
    <Row type="flex" justify="start" :gutter="16">
        <Col span="1">
        <Button type="info" size="small" :icon="moreIocn" @click="moreSearchOnOff"></Button>
        </Col>
        <Col span="4">
        <Select v-model="param.way" size="small" @on-change="query" placeholder='充值/消费选择'>
            <Option v-for="item in wayList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        </Col>
        <Col span="4">
        <Input v-model="param.no" size="small" placeholder="按回车键可查询……" @on-enter="query" style="width: 90%">
        <span slot="prepend">单号</span>
        </Input>
        </Col>
        <Col span="6" style="flot:right">
        <Button type="primary" size="small" shape="circle" icon="ios-search" @click="query"></Button>
        <Button type="info" size="small" @click="reset">清空</Button>
        <Button type="info" size="small" @click="query">刷新</Button>
        </Col>
    </Row>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            param: {
                no: '',
                way: 0,
            },
            wayList: [
                {
                    value: 0,
                    label: '全部'
                },
                {
                    value: 1,
                    label: '充值'
                },
                {
                    value: -1,
                    label: '消费'
                },
            ]
        }
    },
    computed:{
        moreIocn:function(){
            return this.leftOnOff?'chevron-left':'chevron-right'
        }
    },
    props: {
        leftOnOff: {
            type: Boolean,
            default: false
        },
    },
    mounted: function() {

    },
    methods: {
        moreSearchOnOff: function() {
            console.log('更多查询');
            this.$emit('more-search-onoff')
        },
        query: function() {
            let _self = this;
            let queryParam = {
                no: _self.param.no,
                way: _self.param.way,
            };
            this.$emit('query', queryParam);
        },
        reset: function() {
            this.param.no = '';
            this.param.way = 0;
            this.query();
        },
    }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>