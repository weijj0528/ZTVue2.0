<!-- Created by Weiun on 2017/1/17.-->
<!-- 物流信息 -->
<template>
  <centerLayout :searchShow='false' :functionShow='false'>
    <el-row :gutter="8" slot="content">
      <el-col :span="8" >
        <el-card shadow="never" v-bind:style="{height:layout.contentHeight - 100 + 'px'}">
          <el-tabs :tab-position="tabPosition" >
            <el-tab-pane >
              <span slot="label">
                 用户<el-badge :value="3"></el-badge>
              </span>
            </el-tab-pane>
            <el-tab-pane label="求购"></el-tab-pane>
            <el-tab-pane label="资源"></el-tab-pane>
            <el-tab-pane label="报价"></el-tab-pane>
            <el-tab-pane label="订单"></el-tab-pane>
            <el-tab-pane label="药款"></el-tab-pane>
            <el-tab-pane label="系统"></el-tab-pane>
          </el-tabs>
          <el-card v-for="i in 3" :key='i' style="margin-top:5px">
            <div slot="header" class="clearfix">
              <span>信息标题</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="messageDetails(i)">查看详情</el-button>
            </div>
            信息内容{{i}}
          </el-card>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span>消息详情</span>
          </div>
          <router-view></router-view>
        </el-card>
      </el-col >
    </el-row>
  </centerLayout>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import centerLayout from "./../../layout/centerLayout.vue";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["layout"])
  },
  components: {
    centerLayout
  },
  mounted: function() {
    this.$nextTick(function() {
      // 代码保证 this.$el 在 document 中
      //                oc
    });
  },
  beforeDestroy() {},
  methods: {
    ...mapActions([]),
    messageDetails(i) {
      console.log("messageDetails" + i);
      if (i == 1) {
        this.$router.push("/main/message/image");
      } else {
        this.$router.push("/main/message/echarts");
      }
    }
  }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>
