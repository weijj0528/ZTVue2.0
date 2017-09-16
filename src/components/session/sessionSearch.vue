
<template>
    <Row type="flex" justify="start" :gutter="16">
        <Col span="1">
        <Button type="info" size="small" :icon="moreIocn" @click="moreSearchOnOff"></Button>
        </Col>
        <Col span="4">
        <Select v-model="param.smsStatus" size="small" @on-change="query" placeholder='发送状态'>
            <Option v-for="item in statusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        </Col>
        <Col span="4">
        <Input v-model="param.phone" size="small" placeholder="按回车键可查询……" @on-enter="query">
        <span slot="prepend">发送人手机</span>
        </Input>
        </Col>
        <Col span="4">
        <Input v-model="param.mobile" size="small" placeholder="按回车键可查询……" @on-enter="query">
        <span slot="prepend">接收人手机</span>
        </Input>
        </Col>
        <Col span="4">
        <Input v-model="param.code" size="small" placeholder="按回车键可查询……" @on-enter="query">
        <span slot="prepend">货号</span>
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
export default {
    data() {
        return {
            param: {
                uid: -1,
                phone: '',
                code: '',
                mobile: '',
                smsStatus: -1,
            },
            statusList: [
                {
                    value: -1,
                    label: '全部'
                },
                {
                    value: 0,
                    label: '正在发送'
                },
                {
                    value: 1,
                    label: '发送成功'
                },
                {
                    value: 2,
                    label: '发送失败'
                },
                {
                    value: 3,
                    label: '状态未知'
                },
            ]
        }
    },
    computed: {
        moreIocn: function() {
            return this.leftOnOff ? 'chevron-left' : 'chevron-right'
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
                uid: _self.param.uid,
                phone: _self.param.phone,
                code: _self.param.code,
                mobile: _self.param.mobile,
                smsStatus: _self.param.smsStatus,
            };
            this.$emit('query', queryParam);
        },
        reset: function() {
            this.param.uid = -1;
            this.param.phone = '';
            this.param.code = '';
            this.param.mobile = '';
            this.param.smsStatus = -1;
            this.query();
        },
    }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>