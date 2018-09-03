<!-- Created by Weiun on 2017/1/17.-->
<!-- 模板组件 
props:{
    value:查询条件初始值,
    param:查询条件,
},
event:{
    // 查询
    query(p){
        p:组件封装好的查询条件
    },
    more-search(){
        更多模块开关
    },
}
-->

<template>
    <el-row :gutter='8' type="flex" justify="start">
        <el-button type="text" icon='el-icon-arrow-right' @click="moreSearchOnOff"></el-button>
        <el-col :span="4" v-for="(item,key) in param" :key="item.key">
            <comSearch :pk="key" :value="value[key]" :param="item" @query="query" @change="change"></comSearch>
        </el-col>
        <el-col :span="4">
            <el-button type="primary" icon="el-icon-search" @click="search" round></el-button>
            <el-button type="info" @click="clear">清空</el-button>
            <el-button type="info" @click="search">刷新</el-button>
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
    mounted: function() {
        this.$nextTick(function() {
            this.queryParam = this.value;
            console.log("TopSearch nextTick->", this.param);
            this.query();
        });
    },
    methods: {
        moreSearchOnOff: function() {
            this.$emit("more-search");
        },
        search() {
            console.log("TopSearch search->", this.queryParam);
            this.$emit("query", this.queryParam);
        },
        query(p) {
            if (p) {
                Object.assign(this.queryParam, p);
                console.log("TopSearch query->", this.queryParam);
            }
            this.search();
        },
        change(p) {
            if (p) {
                Object.assign(this.queryParam, p);
                console.log("TopSearch change->", this.queryParam);
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