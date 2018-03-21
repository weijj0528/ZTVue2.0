<!-- Created by Weiun on 2017/1/17.-->
<!-- 导航组件，选项卡组件 -->
<template>
    <el-tabs :value='activeTab' type="card" closable @tab-remove="handleRemove" @tab-click="handleClick">
        <el-tab-pane
            :key="tab.name"
            v-for='tab in tabs'
            :closable="tab.id != 0"
            :label="tab.name"
            :name="tab.id">
        </el-tab-pane>
    </el-tabs>
</template>
<script>
    export default {
        data() {
            return {}
        },
        props: {
            tabs: {
                type: Array,
                default: []
            },
            activeTab: {
                type: String,
                default: 0
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                // 代码保证 this.$el 在 document 中
                //                oc
            })
        },
        beforeDestroy() {

        },
        methods: {
            handleClick: function (name) {
                // tab 点击 返回当前tab
                let index = -1;
                for (let i = 0; i < this.tabs.length; i++) {
                    let tab = this.tabs[i];
                    if (tab.id === name) {
                        index = i;
                        break;
                    }
                }
                console.log("Tab打开" + name);
                this.$emit("nav-click", this.tabs[index]);
            },
            handleRemove: function (name) {
                // tab 移除 返回移除tab
                let index = -1;
                for (let i = 0; i < this.tabs.length; i++) {
                    let tab = this.tabs[i];
                    if (tab.id === name) {
                        index = i;
                        break;
                    }
                }
                console.log("Tab移除" + name);
                this.$emit("nav-close", this.tabs[index],index);
            }
        },
        watch: {
            activeTab: function (val, oldVal) {
                this.$emit("nav-router", val);
            }
        }
    }
</script>
<style scoped>
    /*@import '../styles/common.css';*/
</style>
