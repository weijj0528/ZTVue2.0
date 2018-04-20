<!-- Created by Weiun on 2017/1/17.
  图片展示组件，集成预览功能
  props：
    imgList：[{
      src:图片地址
      alt:图片说明
    }]
    maxShow:最大显示图片数量，超过的不显示，在预览时可以查看
-->
<template>
      <div :id="viewerid" :style="{width:60 * maxShow +'px'}">
        <div v-for="(image,index) in imgList" :key="index" style="float:left">
          <img v-show="index < maxShow" class="image" :src="image.src" :alt="image.alt">
        </div>
      </div>
</template>
<script>
import Viewer from "viewerjs";
import util from "../../libs/util";
export default {
  data() {
    let r = util.randomString();
    let i = "viewer-" + r;
    console.log("id:" + i);
    return {
      viewerid: i
    };
  },
  props: {
    imgList: {
      type: Array,
      default() {
        return [];
      }
    },
    maxShow:{
      type:Number,
      default:3
    }
  },
  computed: {},
  components: {},
  mounted: function() {
    let _self = this;
    console.log("图片预览" + this.viewerid);
    this.$nextTick(function() {
      var viewer = new Viewer(document.getElementById(_self.viewerid));
    });
  },
  beforeDestroy() {},
  methods: {}
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
.image {
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 10px;
}

</style>