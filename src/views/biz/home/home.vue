<!-- Created by Weiun on 2017/1/17.-->
<template>
  <centerLayout>
      <el-row slot="search" :gutter="8" type="flex" justify="start">
        <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="4"
          v-for="o in 6" :key="o">
          <el-card class="box-card">
            <div slot="header">
              <span>我的客户数数</span>
              <el-button style="float: right; padding: 3px 0" type="text">More</el-button>
            </div>
            <div>
              <span style="font-size:28px">{{o*300}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row  slot="function" :gutter="8" type="flex" justify="start" style="margin-top:10px">
        <el-col :xs="12" :sm="12" :lg="8" :xl="8">
          <el-card class="box-card box-card-charts">
            <div slot="header">
              <span>XXX统计</span>
              <el-button style="float: right; padding: 3px 0" type="text">More</el-button>
            </div>
            <div>
              <echarts></echarts>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="8" :xl="8">
          <el-card class="box-card box-card-charts">
            <div slot="header">
              <span>XXX统计</span>
              <el-button style="float: right; padding: 3px 0" type="text">More</el-button>
            </div>
            <div>
               <echarts></echarts>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="8" :xl="8">
          <el-card class="box-card">
            <div slot="header">
              <span>更新日志</span>
              <el-button style="float: right; padding: 3px 0" type="text">More</el-button>
            </div>
            <el-collapse>
              <el-collapse-item title="V20180511" :name="o" v-for="o in 10" :key="o">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>{{'更新内容' + o}}</div>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </el-col>
      </el-row>
  </centerLayout>
</template>
<script>
import centerLayout from '@layout/centerLayout.vue';
import echarts from './echarts.vue';
export default {
  data() {
    return {
      
    };
  },
  props: {},
  computed: {},
  components: {
    centerLayout,
    echarts
  },
  mounted: function() {
    this.$nextTick(function() {});
  },
  beforeDestroy() {},
  methods: {}
};
</script>
<style scoped>
/*@import '../styles/common.css';*/

.box-card {
  width: 100%;
}
</style>