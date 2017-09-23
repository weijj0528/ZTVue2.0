<!-- Created by Weiun on 2017/1/17.-->
<template>
    <Row>
        <Col span="8">
        <channelsLoadCharts></channelsLoadCharts>
        </Col>
        <Col span="16">
        <Row>
            <Col span="24">
            <userAddCharts></userAddCharts>
            </Col>
        </Row>
        <Row>
            <Col span="24">
            <userSmsCharts></userSmsCharts>
            </Col>
        </Row>
        </Col>
    </Row>
</template>
<script>
import channelsLoadCharts from './../../components/charts/channelsLoadCharts.vue';
import userAddCharts from './../../components/charts/userAddCharts.vue';
import userSmsCharts from './../../components/charts/userSmsCharts.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        channelsLoadCharts,
        userAddCharts,
        userSmsCharts,
    },
    mounted: function() {
        this.$nextTick(function() {
            // 代码保证 this. 在 document 中
        })
    },
    beforeDestroy() {

    },
    methods: {}
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>