<!-- Created by Weiun on 2017/1/17.-->
<!-- 模板组件 
props:{
    value:查询条件初始值,
    param:查询条件,
},
event:{
    query(p){
        p:组件封装好的查询条件
    },
}
-->

<template>
    <el-row :gutter='8'>
        <el-col :span="8">
            <el-button type="primary" style="width:100%">取消</el-button>
        </el-col>
        <el-col :span="8">
            <el-button type="primary" @click="clear" style="width:100%">清空</el-button>
        </el-col>
        <el-col :span="8">
            <el-button type="primary" icon="el-icon-search" @click="search" style="width:100%">查询</el-button>
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
    mounted: function() {
        this.$nextTick(function() {
            this.queryParam = this.value;
            console.log("MoreSearch nextTick->", this.param);
            this.query();
        });
    },
    methods: {
        search() {
            console.log("MoreSearch search->", this.queryParam);
            this.$emit("query", this.queryParam);
        },
        query(p) {
            if (p) {
                Object.assign(this.queryParam, p);
                console.log("MoreSearch query->", this.queryParam);
            }
            this.search();
        },
        change(p) {
            if (p) {
                Object.assign(this.queryParam, p);
                console.log("MoreSearch change->", this.queryParam);
            }
        },
        clear() {
            for (let k in this.queryParam) {
                this.queryParam[k] = "";
            }
            this.search();
        }
    }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>