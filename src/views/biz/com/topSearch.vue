<!-- Created by Weiun on 2017/1/17.-->
<!-- 模板组件 -->

<template>
    <el-row :gutter='8' type="flex" justify="start">
        <el-button type="text" icon='el-icon-arrow-right' @click="moreSearchOnOff"></el-button>
        <el-col :span="4">
            <el-input v-model="queryParam['name']" placeholder="按回车键可查询……" @on-enter="query">
                <span slot="prepend">名称</span>
            </el-input>
        </el-col>
        <el-col :span="4">
            <el-input v-model="queryParam['name']" placeholder="按回车键可查询……" @on-enter="query">
                <span slot="prepend">电话</span>
            </el-input>
        </el-col>
        <el-col :span="24">
            <el-button type="primary" icon="el-icon-search" @click="query" round></el-button>
            <el-button type="info">清空</el-button>
            <el-button type="info" @click="query">刷新</el-button>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data() {
        return {};
    },
    props: {
        queryParam: {
            type: Object,
            default: () => {
                return {
                    name: "大"
                };
            }
        }
    },
    computed: {},
    mounted: function() {},
    methods: {
        moreSearchOnOff: function() {
            console.log("moreSearchOnoff");
            this.$emit("more-search");
        },
        query: function() {
            this.$emit("query", this.queryParam);
        }
    }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>