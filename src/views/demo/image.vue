<!-- Created by Weiun on 2017/1/17.-->
<!-- 图片预览.-->
<template>
    <div>
       <imageView :imgList="imgList" :maxShow="2"></imageView>
    </div>
</template>
<script>
import imageView from "../com/imageView.vue";
export default {
  data() {
    return {
      imgList:[
        {
          src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2357619894,3620973597&fm=27&gp=0.jpg",
          alt:"图片1"
        },
        {
          src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2359550423,1794059142&fm=27&gp=0.jpg",
          alt:"图片1"
        },
        {
          src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3608840126,3105604471&fm=27&gp=0.jpg",
          alt:"图片1"
        },
        {
          src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3608840126,3105604471&fm=27&gp=0.jpg",
          alt:"图片1"
        },
        {
          src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3608840126,3105604471&fm=27&gp=0.jpg",
          alt:"图片1"
        },
        {
          src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3608840126,3105604471&fm=27&gp=0.jpg",
          alt:"图片1"
        },
        {
          src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3608840126,3105604471&fm=27&gp=0.jpg",
          alt:"图片1"
        },
      ]
    };
  },
  props:{
  },
  computed: {},
  components: {
    imageView
  },
  mounted: function() {
    this.$nextTick(function() {
      
    });
  },
  beforeDestroy() {},
  methods: {}
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>