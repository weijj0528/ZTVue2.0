<!-- Created by Weiun on 2017/1/17.-->
<!-- 图表 -->
<template>
    <div :id="echartId" v-bind:style="{height:height+'px',width: width+'px'}"></div>
</template>
<script>
import echarts from "echarts";
import util from "@libs/util";
export default {
  data() {
    let r = util.randomString();
    let i = "echart-" + r;
    return {
      echartId: i,
      myChart: {},
    };
  },
  props: {
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    option: {
      type: Object,
      default: {}
    }
  },
  computed: {},
  mounted: function() {
    this.$nextTick(function() {
      // 代码保证 this.$el 在 document 中
      this.myChart = echarts.init(document.getElementById(this.echartId));
      this.myChart.setOption(this.option);
      this.myChart.showLoading();
    });
  },
  beforeDestroy() {},
  methods: {
    resetOption(option) {
      console.log("resetOption");
      this.myChart.setOption(option);
      this.myChart.hideLoading();
    }
  }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>
