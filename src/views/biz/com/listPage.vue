<!-- Created by Weiun on 2017/1/17.-->
<!-- 通用列表页面组件 -->
<template>
    <centerLayout :loading="loading" :leftOnOff="moreSearchShow" :functionShow="funcList.length > 0" @height-change="heightChange">
        <moreSearch slot="left" :param="moreSerachParam" :value="moreSerachValue" @query="query"></moreSearch>
        <topSearch slot="search" :param="comSerachParam" :value="comSerachValue" @query="query" @more-search="moreSearchOnoff"></topSearch>
        <el-row slot="function">
            <el-button v-for="(item,index) in funcList" :key="item.title" :type="item.type" @click="funcClick(index)">{{item.title}}</el-button>
        </el-row>
        <i-table slot="content" :columns="columns" :data="data" highlight-row @on-current-change="onCurrentChange" @on-selection-change="onSelectionChange" :height="tableHeight" border></i-table>
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
        loading: {
            type: Boolean,
            default: false
        },
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
        // 查询初始值
        queryValue: {
            type: Object,
            default: () => {
                return {
                    name: "",
                    id: "",
                    pageNum: 1,
                    pageSize: 15,
                    total: 0
                };
            }
        },
        // 功能参数
        funcList: {
            type: Array,
            default: () => {
                return [
                    {
                        title: "添加",
                        type: "primary"
                    }
                ];
            }
        },
        // 数据
        data: {
            type: Array,
            default: () => {
                return [
                    {
                        name: "John Brown",
                        age: 18,
                        date: "2016-10-03",
                        address: "New York No. 1 Lake Park",
                        comment: "这是演示数据……"
                    }
                ];
            }
        },
        //数据列展示
        columns: {
            type: Array,
            default: () => {
                return [
                    {
                        type: "selection",
                        width: 60,
                        align: "center",
                        fixed: "left"
                    },
                    {
                        title: "名称",
                        key: "name",
                        fixed: "left"
                    },
                    {
                        title: "表头分组",
                        children: [
                            {
                                title: "年龄",
                                key: "age"
                            },
                            {
                                title: "生日",
                                key: "date"
                            }
                        ]
                    },
                    {
                        title: "地址",
                        key: "address"
                    },
                    {
                        title: "备注",
                        key: "comment"
                    },
                    {
                        title: "操作",
                        fixed: "right",
                        render: (h, params) => {
                            return h("div", [
                                h(
                                    "el-button",
                                    {
                                        props: {
                                            type: "primary",
                                            size: "small"
                                        },
                                        on: {
                                            click: () => {
                                                console.log("table action");
                                            }
                                        }
                                    },
                                    "操作"
                                )
                            ]);
                        }
                    }
                ];
            }
        }
    },
    data() {
        return {
            moreSearchShow: true,
            tableHeight: 600,
            param: {},
            selectedData: {}, // 单选数据
            selectedDataList: [] // 多选数据
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
        comSerachValue() {
            let param = {};
            for (let k in this.queryParam) {
                let v = this.queryParam[k];
                if (v instanceof Object && !v.more) {
                    param[k] = this.queryValue[k];
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
        moreSerachValue() {
            let param = {};
            for (let k in this.queryParam) {
                let v = this.queryParam[k];
                if (v instanceof Object && v.more) {
                    param[k] = this.queryValue[k];
                }
            }
            return param;
        },
        pageArgs: function() {
            let p = {
                pageNum: this.queryValue.pageNum,
                pageSize: this.queryValue.pageSize,
                total: this.queryValue.total
            };
            return p;
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            this.query();
        });
    },
    beforeDestroy() {},
    methods: {
        ...mapActions([]),
        moreSearchOnoff() {
            this.moreSearchShow = !this.moreSearchShow;
        },
        heightChange(p) {
            this.tableHeight = p.contentHeight;
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
        },
        // 功能执行
        funcClick(index) {
            let f = this.funcList[index];
            console.log("funcClick->", f);
            this.$emit(
                "func-click",
                f,
                this.selectedData,
                this.selectedDataList
            );
        },
        onCurrentChange(currentRow, oldCurrentRow) {
            console.log("onCurrentChange->", currentRow, oldCurrentRow);
            this.selectedData = currentRow;
        },
        onSelectionChange(selection) {
            console.log("onSelectionChange->", selection);
            this.selectedDataList = selection;
        }
    },
    watch: {}
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>
