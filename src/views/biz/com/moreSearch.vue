<!-- Created by Weiun on 2017/1/17.-->
<!-- 模板组件 -->

<template>
    <el-row :gutter='8'>
        <el-col :span="8">
            <el-button type="primary" style="width:100%">取消</el-button>
        </el-col>
        <el-col :span="8">
            <el-button type="primary" style="width:100%">清空</el-button>
        </el-col>
        <el-col :span="8">
            <el-button type="primary" icon="el-icon-search" @click="query" style="width:100%">查询</el-button>
        </el-col>
        <el-col v-for="(item,key) in param" :key="item.key" :span="24" style="margin-top:5px">
            <comSearch :pk="key" :value="value[key]" :param="item" @query="query" @change="change"></comSearch>
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
                        title: "标题1",
                        placeholder: "这是更多查询演示数据"
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