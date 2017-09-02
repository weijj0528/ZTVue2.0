
<template>
    <Table border :columns="columns" :data="userList"></Table>
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
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ]
            }
        },
        computed:{
            ...mapGetters(['userList'])
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