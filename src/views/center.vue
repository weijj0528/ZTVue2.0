<!-- Created by Weiun on 2017/1/17.-->
<style scoped>
    /*@import '../styles/common.css';*/
</style>
<template>
    <div>
        <el-tabs type="card" closable @tab-click="handleClick" @tab-remove="handleRemove">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        mounted: function () {
            this.$nextTick(function () {
                // 代码保证 this.$el 在 document 中
//                oc
            })
        },
        beforeDestroy () {

        },
        methods: {
            handleClick:function () {
                console.log("打开")
            },
            handleRemove:function () {

                console.log("关闭")
            }
        }
    }
</script>