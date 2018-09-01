<!-- Created by Weiun on 2017/1/17.-->
<!-- 模板组件 -->
<template>
    <listPage></listPage>
</template>
<script>
import listPage from "@biz/com/listPage.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
    components: { listPage },
    props: {},
    data() {
        return {};
    },
    computed: {
        ...mapGetters([])
    },
    mounted: function() {
        this.$nextTick(function() {
            // 代码保证 this.$el 在 document 中
            //                oc
        });
    },
    beforeDestroy() {},
    methods: {
        ...mapActions([]),
        hellow() {
            console.log("hellow world");
        }
    },
    watch: {}
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>
