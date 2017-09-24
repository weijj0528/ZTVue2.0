<!-- Created by Weiun on 2017/1/17.-->
<template>
    <Row>
        <Col span="8">
        <channelsLoadCharts :height="channelChartHeight" :width="channelChartWidth"></channelsLoadCharts>
        </Col>
        <Col span="16">
        <Row>
            <Col span="24">
            <userAddCharts :height="userChartHeight" :width="userChartWidth"></userAddCharts>
            </Col>
        </Row>
        <Row>
            <Col span="24">
            <userSmsCharts :height="userChartHeight" :width="userChartWidth"></userSmsCharts>
            </Col>
        </Row>
        </Col>
    </Row>
</template>
<script>
import channelsLoadCharts from './../../components/charts/channelsLoadCharts.vue';
import userAddCharts from './../../components/charts/userAddCharts.vue';
import userSmsCharts from './../../components/charts/userSmsCharts.vue';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['layout']),
        userChartHeight: function() {
            return (this.layout.contentHeight - 100) / 2;
        },
        userChartWidth: function() {
            return this.layout.contentWidth * 2 / 3;
        },
        channelChartHeight: function() {
            return (this.layout.contentHeight - 100);
        },
        channelChartWidth: function() {
            return this.layout.contentWidth * 1 / 3;
        },
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