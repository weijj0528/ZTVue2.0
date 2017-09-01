<style lang="less" scoped>
  .showImg {
    position: fixed;
    z-index: 20170721;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    img {
      max-width: 100%;
    }
  }
</style>
<template>
  <transition>
    <div @click="visible = false" :style="{'background-color': 'rgba(0, 0, 0,'+ opacity + ')'}" class="showImg"
         v-show="visible">
      <slide :imgList="imgList" :activeIndex="activeIndex" v-if="imgList.length > 0"/>
    </div>
  </transition>
</template>
<script>
  import slide from '../slide.vue'
  export default {
    data(){
      return {
        visible: true,
        src: '',
        activeIndex: 0,
        imgList: [],
        opacity: .8
      }
    },
    components: {
      slide
    },
    watch: {
      visible(newVisible){
        //监听变化 当传入值为false时 删除自己 通过父元素
        if (!newVisible) {
          this.$el.parentNode.removeChild(this.$el)
        }
      }
    }
  }
</script>
