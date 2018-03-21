
<template>
    <el-row :gutter='8' type="flex" justify="start">
        <el-col :span="2">
            <el-button type="primary" icon='el-icon-arrow-right' @click="moreSearchOnOff"></el-button>
        </el-col>
        <el-col :span="4">
            <el-input v-model="userQueryParam.name"  placeholder="按回车键可查询……" @on-enter="query" ><span slot="prepend">名称</span></el-input>
        </el-col>
        <el-col :span="4">
            <el-input v-model="userQueryParam.phone"  placeholder="按回车键可查询……" @on-enter="query"><span slot="prepend">电话</span></el-input>
        </el-col>
        <el-col :span="6" style="flot:right">
            <el-button type="primary" icon="el-icon-search" @click="query" round></el-button>
            <el-button type="info" >清空</el-button>
            <el-button type="info"  @click="query">刷新</el-button>
        </el-col>
    </el-row>
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