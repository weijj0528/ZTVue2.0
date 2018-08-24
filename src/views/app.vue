<!-- 应用入口组件 -->
<template>
  <div class="index">
    <router-view></router-view>
    <!-- 全局图片预览组件 Viewer-->
    <div :id="viewerid" v-show="false">
      <img class="image" v-for="(image,index) in viewerImageList" :key="index" :src="image.src" :alt="image.alt">
    </div>
  </div>
</template>
<script>
import Viewer from "viewerjs";
import util from "@libs/util";
export default {
    data() {
        return {
            viewerid: "viewerjs20180625",
            viewerImageList: [{}],
            viewer: {}
        };
    },
    computed: {},
    components: {},
    mounted: function() {
        const _self = this;
        this.$nextTick(function() {
            _self.viewer = new Viewer(document.getElementById(this.viewerid), {
                zIndex: 9999
            });
            util.$on("viewer-show", (viewerImageList, index) => {
                console.log("---viewer-show---");
                _self.viewerImageList = viewerImageList;
                _self.viewer.update();
                if (
                    !index ||
                    index < 0 ||
                    index > _self.viewerImageList.length - 1
                ) {
                    index = 0;
                }
                _self.viewer.view(index);
            });
        });
    },
    methods: {}
};
</script>
<style scoped lang="less">
body,
button,
caption,
dd,
div,
dl,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
iframe,
input,
legend,
li,
ol,
p,
pre,
select,
table,
td,
textarea,
th,
ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-style: normal;
    font-size: 100%;
    font-family: inherit;
}
body {
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    background: #cccccc;
    color: #555555;
}
.index {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
}
</style>
