
<template>
    <Table border :columns="columns" :data="moneyRecordList" :height="layout.contentHeight-225"></Table>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        data () {
            let _self = this;
            return {
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                        fixed: 'left'
                    },
                    {
                        title: '充值/消费',
                        key: 'way',
                        fixed: 'left',
                        render:(h,param)=>{
                            let str = _self.constructor.filter('moneyRecordWay')(param.row.way);
                            return h('div',str);
                        }
                    },
                    {
                        title: '单号',
                        key: 'no',
                        fixed: 'left'
                    },
                    {
                        title: '金额',
                        key: 'amount',
                        fixed: 'left'
                    },

                    {
                        title: '计费数',
                        key: 'billCount'
                    },
                    {
                        title: '余额',
                        key: 'balance'
                    },
                    {
                        title: '状态',
                        key: 'status',
                        render:(h,param)=>{
                            let str = _self.constructor.filter('moneyRecordStatus')(param.row.status);
                            return h('div',str);
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
            ...mapGetters(['moneyRecordList','layout'])
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