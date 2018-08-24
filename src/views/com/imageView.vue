<!-- Created by Weiun on 2017/1/17.
  图片展示组件，集成预览功能
  props:
    imgList:[{
      src:图片地址
      alt:图片说明
    }]
    maxShow:最大显示图片数量，超过的不显示，在预览时可以查看
    imgWidth:展示图片的宽度
    imgHeight:展示图片的高度度
-->
<template>
  <!-- <div :style="{width:((imgWidth + 10) * maxShow) +'px'}"> -->
  <div :style="{width:'px'}">
    <div v-for="(image,index) in imgList" :key="index" style="float:left">
      <img v-show="index < maxShow" @click="show(index)" class="image" :style="{width:imgWidth +'px',height:imgHeight+'px'}" :src="image.src" :alt="image.alt">
    </div>
  </div>
</template>
<script>
import util from "@libs/util";
export default {
    data() {
        return {};
    },
    props: {
        imgList: {
            type: Array,
            default() {
                return [];
            }
        },
        maxShow: {
            type: Number,
            default: 3
        },
        imgWidth: {
            type: Number,
            default: 50
        },
        imgHeight: {
            type: Number,
            default: 50
        }
    },
    computed: {},
    components: {},
    mounted: function() {
        this.$nextTick(function() {});
    },
    updated: function() {
        this.$nextTick(function() {});
    },
    destroy() {
        this.viewer.destroy();
    },
    methods: {
        show(index) {
            console.log("图片预览");
            // 交给全局图片预览组件
            util.$emit("viewer-show", this.imgList, index);
        }
    }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/

.image {
    margin: 5px;
    border-radius: 10px;
}
</style>
