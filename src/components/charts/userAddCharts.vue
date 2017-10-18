<!-- 用户新增图示 -->
<template>
  <div id='userAddCharts' v-bind:style="{height:height+'px',width: width+'px'}">
  </div>
</template>
<script>
import echarts from 'echarts';
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      myChart: {},
      option: {
        title: {
          text: '用户注册统计',
          subtext: '最近30天'
        },
        tooltip: {
          trigger: 'axis'
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
            formatter: '{value} 人'
          },
          // min: 0,
          // max: 100,
        },
        series: [
          {
            name: '注册用户数',
            type: 'line',
            data: [],
            // markPoint: {
            //   data: [
            //     { name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }
            //   ]
            // },
            // markLine: {
            //   data: [
            //     { type: 'average', name: '平均值' },
            //     [{
            //       symbol: 'none',
            //       x: '90%',
            //       yAxis: 'max'
            //     }, {
            //       symbol: 'circle',
            //       label: {
            //         normal: {
            //           position: 'start',
            //           formatter: '最大值'
            //         }
            //       },
            //       type: 'max',
            //       name: '最高点'
            //     }]
            //   ]
            // }
          }
        ]
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
      var myChart = echarts.init(document.getElementById('userAddCharts'));
      myChart.setOption(this.option);
      _self.myChart = myChart;
      _self.queryData();
    })
  },
  beforeDestroy() {

  },
  methods: {
    ...mapActions(['queryUserAddStatistics']),
    queryData: function() {
      let _self = this;
      _self.myChart.showLoading();
      let param = { queryType: 'day' };
      _self.queryUserAddStatistics(param).then((resp) => {
        let dataList = resp.result.list;
        let xAxisData = [];
        let series1Data = [];
        for (let i = 0; i < dataList.length; i++) {
          // dataList[i];
          xAxisData.push(dataList[i].id);
          series1Data.push(dataList[i].totalCount);
          _self.option.xAxis.data = xAxisData;
          _self.option.series[0].data = series1Data;
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