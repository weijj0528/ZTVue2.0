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
            <el-button type="primary" icon="el-icon-search" @click="search" style="width:100%">查询</el-button>
        </el-col>
        <el-col v-for="item in queryList" :key="item.key" :span="24" style="margin-top:5px">
            <comSearch :param="item" @query="query" @change="change"></comSearch>
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
                        placeholder: "提示1"
                    },
                    no: {
                        type: "text",
                        title: "标题2",
                        placeholder: "提示2"
                    }
                };
            }
        }
    },
    computed: {
        queryList() {
            let l = [];
            for (let k in this.param) {
                let o = this.param[k];
                o.key = k;
                l.push(o);
            }
            return l;
        }
    },
    mounted: function() {},
    methods: {
        search() {
            console.log("search--> " + JSON.stringify(this.queryParam));
            this.$emit("search", this.queryParam);
        },
        query(p) {
            console.log("query--> " + JSON.stringify(p));
            this.queryParam = Object.assign(this.queryParam, p);
            this.search();
        },
        change(p) {
            console.log("change--> " + JSON.stringify(p));
            this.queryParam = Object.assign(this.queryParam, p);
        }
    }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>