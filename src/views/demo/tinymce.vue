<!-- Created by Weiun on 2017/1/17.-->
<!-- 模板组件 -->
<template>
    <div style="width:90%;height:100%">
        <tinymceEditor :value="content" :qiniuBucket="qiniuBucket"></tinymceEditor>
    </div>
</template>
<script>
import tinymceEditor from "@com/tinymce/tinymceEditor.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
    components: { tinymceEditor },
    props: {},
    data() {
        return {
            content: "",
            qiniuBucket: "news"
        };
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
