<!-- 通道负载图示 -->
<template>
  <div>
    <div id='channelsLoadCharts' v-bind:style="{height:height+'px',width: width +'px'}">
    </div>
    <Modal
        v-model="setPanelShow"
        class-name="vertical-center-modal"
        title="通道配额设置">
        <p>通道配额总数必须为100</p><br>
        <Form :model="setForm" :label-width="80">
          <FormItem label="容联">
              <Input v-model="setForm.rl" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="创蓝">
              <Input v-model="setForm.cl" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="乐信">
              <Input v-model="setForm.lx" placeholder="请输入"></Input>
          </FormItem>
        </Form>
        <div slot="footer">
            <Button type="info" size="large" long :loading="setForm.loading" @click="panelOk">确定</Button>
        </div>
    </Modal>
  </div>
</template>
<script>
import echarts from 'echarts';
import http from '../../libs/httpService'
import { mapActions } from 'vuex';
export default {
  data() {
    let _self =  this;
    return {
      setForm: {
        rl:0,
        cl:0,
        lx:0,
        loading:false,
      },
      setPanelShow:false,
      timer: {},
      myChart: {},
      option: {
        title: { text: '实时通道负载', subtext: '通道中未发送的短信数量，刷新时间10s' },
        tooltip: {},
        toolbox: {
          show: true,
          showTitle: true,
          right: 40,
          feature: {
            myToolSetChannel: {
                show: true,
                title: '通道调整',
                icon: 'image://http://echarts.baidu.com/images/favicon.png',
                onclick: function (){
                    _self.openSetPanel();

                }
            },
          }
        },
        xAxis: {
          data: []
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} 条'
          },
          // min: 0,
          // max: 1000,
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
    ...mapActions(['queryChannelLen','queryChannelRatio','setChannelRatio']),
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
    },
    openSetPanel(){
      // 打开通道设置面板
      let _self = this;
      _self.setPanelShow = true;
      if(setForm.rl == 0 && setForm.cl == 0 && setForm.lc == 0 &&){
        _self.setForm.loading = true;
        _self.queryChannelRatio().then((resp) => {
          _self.setForm.loading = false;
          let result = resp.result;
          _self.setForm.rl = result['0'] ;
          _self.setForm.cl = result['1'] ;
          _self.setForm.lx = result['2'] ;
        },(err)=>{
          _self.setPanelShow = false;
          _self.setForm.loading = false;
        });
      }
    },
    panelOk(){
      // 设置确定
      let _self = this;
      _self.setForm.loading = true;
      let param = {
        "0":_self.setForm.rl,
        "1":_self.setForm.cl,
        "2":_self.setForm.lx,
      }
      _self.setChannelRatio(param).then((resp) => {
        _self.setForm.loading = false;
        if(resp.code != '1c01'){
          this.$Message.success({
          top: 50,
          content:resp.msg,
        });
          return;
        }
        let result = resp.result;
        _self.setForm.rl = result['0'] ;
        _self.setForm.cl = result['1'] ;
        _self.setForm.lx = result['2'] ;
        _self.setPanelShow = false;
        this.$Message.success({
          top: 50,
          content:'设置成功',
        });
      },(err)=>{
        _self.setForm.loading = false;
      });
    },
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