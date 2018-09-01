<!-- Created by Weiun on 2017/1/17.-->
<!-- 通用列表页面组件 -->
<template>
    <centerLayout :leftOnOff="moreSearchShow">
        <moreSearch slot="left" :param="moreSerachParam" @query="query"></moreSearch>
        <topSearch slot="search" :param="comSerachParam" @query="query" @more-search="moreSearchOnoff"></topSearch>
        <comPage slot="bottom" :pageParam='pageArgs' @page-chang="page"></comPage>
    </centerLayout>
</template>
<script>
import centerLayout from "@layout/centerLayout.vue";
import comPage from "@com/comPage.vue";
import topSearch from "./topSearch.vue";
import moreSearch from "./moreSearch.vue";
import util from "@libs/util";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
    components: { centerLayout, comPage, topSearch, moreSearch },
    props: {
        // 查询参数
        queryParam: {
            type: Object,
            default: () => {
                return {
                    name: {
                        type: "text",
                        title: "常用查询",
                        placeholder: "关键字"
                    },
                    id: {
                        type: "text",
                        more: true,
                        title: "更多查询",
                        placeholder: "关键字"
                    },
                    pageNum: 1,
                    pageSize: 15,
                    total: 0
                };
            }
        },
        // 数据
        dataList: {
            type: Array,
            default: () => {
                return [];
            }
        },
        //数据展示
        cols: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    data() {
        return {
            moreSearchShow: true,
            param: {}
        };
    },
    computed: {
        ...mapGetters([]),
        comSerachParam() {
            let param = {};
            for (let k in this.queryParam) {
                let v = this.queryParam[k];
                if (v instanceof Object && !v.more) {
                    param[k] = v;
                }
            }
            return param;
        },
        moreSerachParam() {
            let param = {};
            for (let k in this.queryParam) {
                let v = this.queryParam[k];
                if (v instanceof Object && v.more) {
                    param[k] = v;
                }
            }
            return param;
        },
        pageArgs: function() {
            let p = {
                pageNum: this.queryParam.pageNum,
                pageSize: this.queryParam.pageSize,
                total: this.queryParam.total
            };
            return p;
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            // 代码保证 this.$el 在 document 中
        });
    },
    beforeDestroy() {},
    methods: {
        ...mapActions([]),
        moreSearchOnoff() {
            this.moreSearchShow = !this.moreSearchShow;
        },
        page(param) {
            let page = {
                pageNum: param.pageNum ? param.pageNum : 1,
                pageSize: param.pageSize ? param.pageSize : 15
            };
            this.param = Object.assign(this.param, page);
            this.query(page);
        },
        query(p) {
            let param = Object.assign(this.param, p);
            this.param = param;
            this.$emit("query", param);
        }
    },
    watch: {}
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>
