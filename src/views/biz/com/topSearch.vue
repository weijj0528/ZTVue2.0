<!-- Created by Weiun on 2017/1/17.-->
<!-- 模板组件 -->

<template>
    <el-row :gutter='8' type="flex" justify="start">
        <el-button type="text" icon='el-icon-arrow-right' @click="moreSearchOnOff"></el-button>
        <el-col :span="4" v-for="(item,key) in param" :key="item.key">
            <comSearch :pk="key" :value="value[key]" :param="item" @query="query" @change="change"></comSearch>
        </el-col>
        <el-col :span="4">
            <el-button type="primary" icon="el-icon-search" @click="query" round></el-button>
            <el-button type="info">清空</el-button>
            <el-button type="info" @click="query">刷新</el-button>
        </el-col>
    </el-row>
</template>
<script>
import comSearch from "./comSearch.vue";
export default {
    components: { comSearch },
    data() {
        return {
            queryParam: {}
        };
    },
    props: {
        param: {
            type: Object,
            default: () => {
                return {
                    name: {
                        type: "text",
                        title: "名称",
                        placeholder: "这是常用查询演示数据"
                    }
                };
            }
        },
        value: {
            type: Object,
            default: () => {
                return {
                    name: ""
                };
            }
        }
    },
    computed: {},
    mounted: function() {},
    methods: {
        moreSearchOnOff: function() {
            this.$emit("more-search");
        },
        query(p) {
            this.queryParam = Object.assign(this.queryParam, p);
            this.$emit("query", this.queryParam);
        },
        change(p) {
            this.queryParam = Object.assign(this.queryParam, p);
        }
    }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>