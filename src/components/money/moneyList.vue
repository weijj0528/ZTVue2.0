
<template>
    <Table border :columns="columns" :data="dataList" :height="layout.contentHeight-225"></Table>
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
                    },
                    {
                        title: '充值/消费',
                        key: 'way',
                        render:(h,param)=>{
                            let str = _self.constructor.filter('moneyRecordWay')(param.row.way);
                            return h('div',str);
                        }
                    },
                    {
                        title: '单号',
                        key: 'no',
                    },
                    {
                        title: '金额',
                        key: 'amount',
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
                    }
                ]
            }
        },
        computed:{
            ...mapGetters(['layout'])
        },
        props:{
            dataList:{
                type:Array,
                default:[]
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