<!-- Created by Weiun on 2017/1/17.-->
<style scoped>
    /*@import '../styles/common.css';*/
</style>
<template>
    <div>
        <Tabs type="card" closable @on-tab-remove="handleTabRemove">
            <Tab-pane label="标签一" ></Tab-pane>
            <Tab-pane label="标签二" ></Tab-pane>
            <Tab-pane label="标签三" ></Tab-pane>
        </Tabs>
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