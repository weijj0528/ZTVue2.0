<!-- -->
<template>
    <div class="index">
        <router-view></router-view>
    </div>
</template>
<script>
    import Top from './top.vue'
    import Left from './left.vue'
    import BgCenter from './center.vue'
    import Bottom from './bottom.vue'
    export default {
        data () {
            return {
            }
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
    body, div, address, blockquote, iframe, ul, ol, dl, dt, dd, li, dl, h1, h2, h3, h4, h5, h6, p, pre, table, caption, th, td, form, legend, fieldset, input, button, select, textarea, p {margin:0; padding:0; font-weight: normal;font-style: normal;font-size: 100%; font-family: inherit;}
    body { font-size:12px; font-family:Arial, Helvetica, sans-serif; background: #CCCCCC; color:#555555;}
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
    }
</style>