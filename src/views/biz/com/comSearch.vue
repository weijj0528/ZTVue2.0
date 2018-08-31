<!-- Created by Weiun on 2017/1/17.-->
<!-- 查询组件 -->

<template>
    <div>
        <!-- text -->
        <el-input v-model="value" v-if="param.type == 'text'" type="text" :placeholder="param.placeholder" @keyup.enter.native="query">
            <template slot="prepend" v-if="param.title">{{param.title}}</template>
        </el-input>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: ""
        };
    },
    props: {
        param: {
            type: Object,
            default: () => {
                return {
                    key: "name",
                    type: "text",
                    title: "标题",
                    placeholder: "提示"
                };
            }
        }
    },
    computed: {},
    mounted: function() {},
    methods: {
        query: function() {
            let p = {};
            p[this.param.key] = this.value;
            this.$emit("query", p);
        },
        change: function() {
            let p = {};
            p[this.param.key] = this.value;
            this.$emit("change", p);
        }
    }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>