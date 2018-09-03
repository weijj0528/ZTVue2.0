<!-- Created by Weiun on 2017/1/17.-->
<!-- 查询组件 
props:{
    pk:查询条件键值,
    value:查询条件初始值,
    param:查询条件其他属性,
},
event:{
    query(p){
        p:组件封装好的查询条件
    },
    change(p){
        p:组件变更的查询条件
    }
}
-->

<template>
    <div>
        <!-- text -->
        <el-input v-model="v" v-if="param.type == 'text'" type="text" :placeholder="param.placeholder" @change="change" @blur="blur" @keyup.enter.native="query">
            <template slot="prepend" v-if="param.title">{{param.title}}</template>
        </el-input>
    </div>
</template>
<script>
export default {
    data() {
        return {
            v: ""
        };
    },
    props: {
        pk: {
            type: String,
            default: "key"
        },
        value: {
            type: String | Number,
            default: ""
        },
        param: {
            type: Object,
            default: () => {
                return {
                    type: "text",
                    title: "标题",
                    placeholder: "提示"
                };
            }
        }
    },
    computed: {},
    mounted: function() {
        this.$nextTick(function() {
            this.v = this.value;
        });
    },
    methods: {
        query: function() {
            let p = {};
            p[this.pk] = this.v;
            console.log("ComSearch query->", this.v);
            this.$emit("query", p);
        },
        blur(e) {
            console.log("blur->", e);
        },
        change: function() {
            let p = {};
            p[this.pk] = this.v;
            console.log("ComSearch change->", this.v);
            this.$emit("change", p);
        }
    },
    watch: {
        value(v) {
            this.v = v;
        }
    }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>