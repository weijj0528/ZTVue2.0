
<template>
    <Table border :columns="columns" :data="userList" :height="layout.contentHeight-225"></Table>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        data () {
            return {
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                        fixed: 'left'
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        fixed: 'left'
                    },
                    {
                        title: '电话',
                        key: 'phone',
                        fixed: 'left'
                    },
                    {
                        title: '余额',
                        key: 'money',
                        fixed: 'left'
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
                        render:(h,param)=>{
                            let t = param.row.sign == 0 ?"未签到":"已签到";
                            return h('div',t);
                        }
                    },
                    {
                        title: '来源',
                        key: 'source',
                        render:(h,param)=>{
                            return h('ClientSource',{
                                props: {
                                    source: param.row.source
                                }
                            });
                        }
                    },
                    {
                        title: '注册时间',
                        key: 'ctime',
                        fixed: 'right'
                    }
                ]
            }
        },
        computed:{
            ...mapGetters(['userList','layout'])
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