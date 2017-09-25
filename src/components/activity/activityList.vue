
<template>
    <Table border :columns="columns" :data="dataList" :height="layout.contentHeight-225">
    </Table>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        let _self = this;
        return {
            columns: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center',
                },
                {
                    title: '活动类型',
                    key: 'aType',
                    render: (h, param) => {
                        let str = _self.constructor.filter('activityAType')(param.row.aType);
                        return h('div', str);
                    }
                },
                {
                    title: '活动名称',
                    key: 'name',
                },
                {
                    title: '活动说明',
                    key: 'spec',
                },

                {
                    title: '奖励类型',
                    key: 'awardType',
                    render: (h, param) => {
                        let str = _self.constructor.filter('activityAwardType')(param.row.awardType);
                        return h('div', str);
                    }
                },
                {
                    title: '是否需要领取',
                    key: 'needGain',
                    render: (h, param) => {
                        let str = param.row.needGain == 1 ? '自动发放' : '需要领取';
                        return h('div', str);
                    }
                },
                {
                    title: '是否开放',
                    key: 'open',
                    render: (h, param) => {
                        let str = param.row.open == 1 ? '进行中' : '结束';
                        return h('div', str);
                    }
                },
                {
                    title: '时间',
                    key: 'ctime',
                }
            ]
        }
    },
    computed: {
        ...mapGetters(['layout'])
    },
    props: {
        dataList: {
            type: Array,
            default: []
        }
    },
    mounted: function() {

    },
    methods: {

    }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>