<!-- 通道负载图示 -->
<template>
  <div id='channelsLoadCharts' v-bind:style="{height:height+'px',width: width+'px'}">
  </div>
</template>
<script>
import echarts from 'echarts';
import http from '../../libs/httpService'
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      timer: {},
      myChart: {},
      option: {
        title: { text: '实时通道负载', subtext: '通道中未发送的短信数量，刷新时间10s' },
        tooltip: {},
        xAxis: {
          data: []
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
          data: []
        }]
      }
    }
  },
  props: {
    height: {
      type: Number,
      default: 0,
    },
    width: {
      type: Number,
      default: 0,
    },
  },
  mounted: function() {
    let _self = this;
    this.$nextTick(function() {
      // 代码保证 this.$el 在 document 中
      var myChart = echarts.init(document.getElementById('channelsLoadCharts'));
      myChart.setOption(this.option);
      _self.myChart = myChart;
      _self.queryData();
      window.setInterval(_self.intervalQueryData, 1000 * 10)
    })
  },
  methods: {
    ...mapActions(['queryChannelLen']),
    queryData: function() {
      let _self = this;
      _self.myChart.showLoading();
      let param = {};
      _self.queryChannelLen(param).then((resp) => {
        _self.dataHandel(resp);
        _self.myChart.hideLoading();
      }, (err) => {
        _self.myChart.hideLoading();
      });
    },
    intervalQueryData: function() {
      // 周期查询
      let _self = this;
      let param = {};
      _self.queryChannelLen(param).then((resp) => {
        _self.dataHandel(resp);
      }, (err) => {
      });
    },
    dataHandel: function(resp) {
      let _self = this;
      let dataList = resp.result.list;
      let xAxisData = [];
      let series0Data = [];
      for (let i = 0; i < dataList.length; i++) {
        xAxisData.push(dataList[i].name);
        series0Data.push(dataList[i].len);
        _self.option.xAxis.data = xAxisData;
        _self.option.series[0].data = series0Data;
        _self.myChart.setOption(_self.option);
      };
    }
  },
  beforeDestroy: function() {
    // 清除定时器
    window.clearInterval(this.timer)
  }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>