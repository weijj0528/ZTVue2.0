<!-- Created by Weiun on 2017/1/17.-->
<!-- 通用列表页面组件 -->
<template>
    <div>
        <centerLayout :leftOnOff="moreSearchShow">
            <moreSearch slot="left"></moreSearch>
            <topSearch slot="search" @more-search="moreSearchOnoff"></topSearch>
            <comPage slot="bottom" :pageParam='pageArgs' @page-chang="page"></comPage>
        </centerLayout>
    </div>
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
        dataList: {
            type: Array,
            default: () => {
                return [];
            }
        },
        queryParam: {
            type: Object,
            default: () => {
                return {
                    pageNum: 1,
                    pageSize: 15,
                    total: 0
                };
            }
        }
    },
    data() {
        return {
            moreSearchShow: true
        };
    },
    computed: {
        ...mapGetters([]),
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
            console.log("moreSearchOnoff:" + this.moreSearchShow);
        },
        search(param) {
            // param 合并到 queryParam
            this.queryParam = util.mergeObj(this.queryParam, param);
            this.query();
        },
        page(param) {
            this.queryParam.pageNum = param.pageNum;
            this.queryParam.pageSize = param.pageSize;
            this.query();
        },
        query() {
            this.$emit("query", this.queryParam);
        }
    },
    watch: {}
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>
