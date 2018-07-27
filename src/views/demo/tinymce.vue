<!-- Created by Weiun on 2017/1/17.-->
<!-- tinymce富文本示例 -->
<template>
    <div style="width:90%;height:100%">
        <tinymceEditor :value="content" @tinymce="tinymce" :qiniuBucket="qiniuBucket"></tinymceEditor>
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
        tinymce(content) {
            this.content = content;
        }
    },
    watch: {}
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>
