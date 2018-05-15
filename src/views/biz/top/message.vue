<!-- Created by Weiun on 2017/1/17.-->
<!-- 物流信息 -->
<template>
  <centerLayout :searchShow='false' :functionShow='false'>
    <el-row :gutter="8" slot="content">
      <el-col :span="8" >
        <el-row >
            <el-col :span="4" >
              <!-- 消息分类 -->
              <el-tabs tab-position="left" @tab-click='msgCategorySelect'>
                <el-tab-pane v-for="category in msgCategorise" :key="category.key" :name="category.key" :label="category.label" >
                  <span slot="label" >
                    <el-badge :value="category.unread" :max="99">{{category.label}}</el-badge>
                  </span>
                </el-tab-pane>
              </el-tabs>
            </el-col>
            <el-col :span="20">
              <el-card shadow="never" v-bind:style="{height:layout.contentHeight - 100 + 'px'}">
                <div slot="header" class="clearfix">
                    <span>{{currentCategoryLabel}}消息</span>
                    <el-button style="float: right; padding: 3px 0" type="text" >全部已读</el-button>
                </div>
                <el-card v-for="i in 3" :key='i' style="margin-top:5px">
                  <div slot="header" class="clearfix">
                    <span>信息标题</span>
                    <el-button style="float: right; padding: 3px 0" type="text" @click="messageDetails(i)">查看详情</el-button>
                  </div>
                  信息内容{{i}}
                </el-card>
              </el-card>
            </el-col>
        </el-row>
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
    return {
      currentCategoryLabel:'全部',
      msgCategorise: [
        { key: "all", label: "全部", unread: 0 },
        { key: "user", label: "用户", unread: 6 },
        { key: "offer", label: "报价", unread: 0 },
        { key: "order", label: "订单", unread: 666 },
      ],
    };
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
    },
    msgCategorySelect(tab){
      console.log(tab)
      this.currentCategoryLabel = tab.label;
    }
  }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>
