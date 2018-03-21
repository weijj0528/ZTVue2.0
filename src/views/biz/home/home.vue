<!-- Created by Weiun on 2017/1/17.-->
<template>
    <Row>
        <Col span="24">
            主页
        </Col>
    </Row>
</template>
<script>
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