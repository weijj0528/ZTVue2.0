<!-- Created by Weiun on 2017/1/17.-->
<!-- 日程安排 -->
<template>
  <centerLayout :searchShow='false' :functionShow='false'>
    <el-row :gutter="8" slot="content">
      <el-col :span="8" >
        <el-row >
            <el-col :span="4" >
              <!-- 消息分类 -->
              <el-tabs tab-position="left" @tab-click='scheduleCategorySelect'>
                <el-tab-pane v-for="schedule in scheduleCategorise" :key="schedule.key" :name="schedule.key" :label="schedule.label" >
                  <span slot="label" >
                    <el-badge :value="schedule.unread" :max="99">{{schedule.label}}</el-badge>
                  </span>
                </el-tab-pane>
              </el-tabs>
            </el-col>
            <el-col :span="20">
              <el-card shadow="never" v-bind:style="{height:layout.contentHeight - 100 + 'px'}">
                <div slot="header" class="clearfix">
                    <span>{{currentCategoryLabel}}日程</span>
                    <el-button style="float: right; padding: 3px 0" type="text" >添加</el-button>
                </div>
                <el-card v-for="i in 3" :key='i' style="margin-top:5px">
                  <div slot="header" class="clearfix">
                    <span>会议提醒</span>
                    <el-button style="float: right; padding: 3px 0" type="text" >删除</el-button>
                  </div>
                  3.50分有您的会议，请按时参加{{i}}
                </el-card>
              </el-card>
            </el-col>
        </el-row>
      </el-col>
      <el-col :span="16">
        <el-card shadow="never">
          <fullcalendar></fullcalendar>
        </el-card>
      </el-col >
    </el-row>
  </centerLayout>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import centerLayout from "@layout/centerLayout";
import fullcalendar from "@jquery/fullcalendar";
export default {
  data() {
    return {
      currentCategoryLabel:'全部',
      scheduleCategorise: [
        { key: "all", label: "全部", unread: 0 },
        { key: "user", label: "会议", unread: 6 },
        { key: "offer", label: "出差", unread: 0 },
        { key: "order", label: "面试", unread: 666 },
        { key: "due", label: "过期", unread: 0 },
      ],
    };
  },
  computed: {
    ...mapGetters(["layout"])
  },
  components: {
    centerLayout,
    fullcalendar,
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
    scheduleCategorySelect(tab){
      console.log(tab)
      this.currentCategoryLabel = tab.label;
    }
  }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>
