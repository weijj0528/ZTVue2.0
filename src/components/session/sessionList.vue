
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
                    title: '会话名称',
                    key: 'name',
                },
                {
                    title: '发送手机',
                    key: 'phone',
                },
                {
                    title: '接收手机',
                    key: 'mobile',
                },
                {
                    title: '货码',
                    key: 'code'
                },
                {
                    title: '附加码',
                    key: 'subAppend'
                },
                {
                    title: '标题',
                    key: 'titel'
                },
                {
                    title: '最新内容',
                    key: 'content'
                },
                {
                    title: '发送时间',
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