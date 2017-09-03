<!-- Created by Weiun on 2017/1/17.-->
<template>
    <Row>
        <centerContent :leftOnOff="false" :rightOnOff="false" :searchShow="false" :functionShow="false">
            
        </centerContent>
    </Row>
</template>
<script>
    import centerContent from './../../components/centerContent.vue';
    export default {
        data () {
            return {
                 value2: '1'
            }
        },
        components:{
            centerContent: centerContent
        },
        mounted: function () {
            this.$nextTick(function () {
                // 代码保证 this. 在 document 中
            })
        },
        beforeDestroy () {

        },
        methods: {}
    }
</script>
<style scoped>
    /*@import '../styles/common.css';*/
</style>