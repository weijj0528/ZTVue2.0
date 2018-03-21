
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
                    title: '头像',
                    render: (h, param) => {
                        if(param.row.avatar){
                            return h('Avatar', {
                                props: {
                                       src:param.row.avatar
                                }
                                
                            });
                        }else{
                            return h('Avatar', {
                                props: {
                                       icon:"person"
                                }});
                        }
                        
                    }
                },
                {
                    title: '姓名',
                    key: 'name',
                },
                {
                    title: '昵称',
                    key: 'nickname',
                },
                {
                    title: '电话',
                    key: 'phone',
                },
                {
                    title: '余额',
                    key: 'money',
                },
                {
                    title: '短信价格',
                    key: 'smsPrice'
                },
                {
                    title: '免费短信数',
                    key: 'smsFree'
                },
                {
                    title: '积分',
                    key: 'point'
                },
                {
                    title: '今日签到',
                    key: 'sign',
                    render: (h, param) => {
                        let t = param.row.sign == 0 ? "未签到" : "已签到";
                        return h('div', t);
                    }
                },
                {
                    title: '来源',
                    key: 'source',
                    render: (h, param) => {
                        let str = _self.constructor.filter('client')(param.row.source);
                        return h('div',str);
                    }
                },
                {
                    title: '注册时间',
                    key: 'ctime',
                }
            ]
        }
    },
    props: {
        dataList: {
            type: Array,
            default: []
        }
    },
    computed: {
        ...mapGetters(['layout'])
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