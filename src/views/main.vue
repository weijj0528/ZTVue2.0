<!-- -->
<template>
    <div class="index">
        <top class="top"></top>
        <left class="left"></left>
        <bg-center class="center"></bg-center>
        <bottom class="bottom"></bottom>
    </div>
</template>
<script>
    import Top from './top.vue'
    import Left from './left.vue'
    import BgCenter from './center.vue'
    import Bottom from './bottom.vue'

    export default {
        data() {
            return {}
        },
        components: {
            top: Top,
            left: Left,
            BgCenter: BgCenter,
            bottom: Bottom,
        }
    }
</script>
<style scoped lang="less">
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
    }

    .top {
        width: 100%;
        height: 10%;
        background: cadetblue;
    }

    .left {
        width: 240px;
        height: 90%;
        /*background: rosybrown;*/
    }

    .center {
        width: 100%;
        height: 85%;
        position: fixed;
        padding-right: 240px;
        top: 10%;
        left: 240px;
        /*background: darkgrey;*/
    }

    .bottom {
        width: 100%;
        height: 5%;
        position: fixed;
        padding-right: 240px;
        top: 95%;
        left: 240px;
        /*background: forestgreen;*/
    }
</style>