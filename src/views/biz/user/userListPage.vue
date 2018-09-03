<!-- Created by Weiun on 2017/1/17.-->
<!-- 模板组件 -->
<template>
    <listPage :loading="loading" :queryParam="queryParam" :queryValue="userQueryParam" :funcList="funcList" :data="userResult" :columns="columns" @query="loadData"></listPage>
</template>
<script>
import listPage from "@biz/com/listPage.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
    components: { listPage },
    props: {},
    data() {
        return {
            loading: false,
            // 查询参数
            queryParam: {
                name: {
                    type: "text",
                    more: true,
                    title: "名称",
                    placeholder: ""
                },
                phone: {
                    type: "text",
                    title: "电话",
                    placeholder: ""
                }
            },
            // 功能参数
            funcList: [
                {
                    title: "添加",
                    type: "primary"
                }
            ],
            //数据列展示
            columns: [
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
                    title: "昵称",
                    key: "nickname"
                },
                {
                    title: "电话",
                    key: "phone"
                },
                {
                    title: "积分",
                    key: "point"
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
                                            this.actionTest();
                                        }
                                    }
                                },
                                "操作"
                            )
                        ]);
                    }
                }
            ]
        };
    },
    computed: {
        ...mapGetters(["userResult", "userQueryParam"])
    },
    mounted: function() {
        this.$nextTick(function() {
            // 代码保证 this.$el 在 document 中
            //                oc
        });
    },
    beforeDestroy() {},
    methods: {
        ...mapActions(["userQueryList"]),
        ...mapMutations(["setUserQueryParam"]),
        loadData(p) {
            this.loading = true;
            console.log("loadData->", p);
            this.setUserQueryParam(p);
            this.userQueryList(p).then(
                result => {
                    this.loading = false;
                },
                err => {
                    this.loading = false;
                }
            );
        },
        actionTest() {
            console.log("actionTest");
        }
    },
    watch: {}
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>
