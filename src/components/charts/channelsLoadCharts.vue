<!-- 通道负载图示 -->
<template>
  <div id='channelsLoadCharts' v-bind:style="{height:height+'px',width: width+'px'}">
  </div>
</template>
<script>
import echarts from 'echarts';
import http from '../../libs/httpService'
import { mapGetters,mapActions } from 'vuex';
export default {
  data() {
    return {
      myChart: {},
      option: {
        title: { text: '实时通道负载', subtext: '通道中未发送的数量' },
        tooltip: {},
        xAxis: {
          data: ["容联", "网易", "环信", "云片"]
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} 条'
          },
          min: 0,
          max: 1000,
        },
        series: [{
          name: '负载',
          type: 'bar',
          data: [100, 0, 0, 0]
        }]
      }
    }
  },
  computed: {
    ...mapGetters(['layout']),
    height: function() {
      return (this.layout.contentHeight - 100);
    },
    width: function() {
      return this.layout.contentWidth * 1 / 3;
    },
  },
  mounted: function() {
    let _self = this;
    this.$nextTick(function() {
      // 代码保证 this.$el 在 document 中
      var myChart = echarts.init(document.getElementById('channelsLoadCharts'));
      myChart.setOption(this.option);
      _self.myChart = myChart;
    })
  },
  methods: {
    // ...mapActions(['','']),
    queryData: function() {
    }
  }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>