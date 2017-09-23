<!-- 用户新增图示 -->
<template>
  <div id='userSmsCharts' v-bind:style="{height:height+'px',width: width+'px'}">
  </div>
</template>
<script>
import echarts from 'echarts';
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      myChart: {},
      option: {
        title: {
          text: '短信发送统计',
          subtext: '最近30天'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['总发送条数', '计费条数', "免费条数"]
        },
        toolbox: {
          show: true,
          feature: {
            magicType: { type: ['line', 'bar'] },
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} 条'
          }
        },
        series: [
          {
            name: '总发送条数',
            type: 'line',
            data: [],
          },
          {
            name: '计费条数',
            type: 'line',
            data: [],
          },
          {
            name: '免费条数',
            type: 'line',
            data: [],
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['layout']),
    height: function() {
      return (this.layout.contentHeight - 100) / 2;
    },
    width: function() {
      return this.layout.contentWidth * 2 / 3;
    },
  },
  mounted: function() {
    let _self = this;
    this.$nextTick(function() {
      // 代码保证 this.$el 在 document 中
      var myChart = echarts.init(document.getElementById('userSmsCharts'));
      myChart.setOption(this.option);
      _self.myChart = myChart;
      _self.queryData();
    })
  },
  methods: {
    ...mapActions(['queryUserSmsStatistics']),
    queryData: function() {
      let _self = this;
      _self.myChart.showLoading();
      let param = { queryType: 'day' };
      _self.queryUserSmsStatistics(param).then((resp) => {
        let dataList = resp.result.list;
        let xAxisData = [];
        let series0Data = [];
        let series1Data = [];
        let series2Data = [];
        for (let i = 0; i < dataList.length; i++) {
          xAxisData.push(dataList[i].id);
          series0Data.push(dataList[i].totalCount);
          series1Data.push(dataList[i].feeCount);
          series2Data.push(dataList[i].freeCount);
          _self.option.xAxis.data = xAxisData;
          _self.option.series[0].data = series0Data;
          _self.option.series[1].data = series1Data;
          _self.option.series[2].data = series2Data;
          _self.myChart.setOption(_self.option);
        };
        _self.myChart.hideLoading();
      }, (err) => {
        _self.myChart.hideLoading();
      });
    }
  }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>