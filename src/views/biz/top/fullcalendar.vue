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
              <el-card shadow="never" v-bind:style="{height:layout.contentHeight - 80 + 'px'}">
                <div slot="header" class="clearfix">
                    <span>{{currentCategory.label}}日程</span>
                    <el-button style="float: right; padding: 3px 0" type="text" @click="addEvent">添加</el-button>
                </div>
                <div v-bind:style="{ height: layout.contentHeight-180 + 'px','overflow-y':'auto','overflow-x':'hidden' }">
                  <el-card v-for="e in events" :key='e.id' style="margin-top:5px">
                    <div slot="header" class="clearfix">
                      <span>{{e.title}}</span>
                      <el-button style="float: right; padding: 3px 0" type="text" >删除</el-button>
                    </div>
                    {{e.content}}
                  </el-card>
                </div>
              </el-card>
            </el-col>
        </el-row>
      </el-col>
      <el-col :span="16">
        <el-card shadow="never">
          <fullcalendar :events='events' @eventClick='eventClick' :height='layout.contentHeight-120'></fullcalendar>
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
      currentCategory:{ key: "all", label: "全部", unread: 0 },
      scheduleCategorise: [
        { key: "all", label: "全部", unread: 0 },
        { key: "meeting", label: "会议", unread: 6 },
        { key: "biz_trip", label: "出差", unread: 0 },
        { key: "interview", label: "面试", unread: 666 },
        { key: "due", label: "过期", unread: 0 },
      ],
      // 后期使用状态管理该数据
      eventList:[
        // 该数据格式需要符合组件要求格式
        { id:1,type:'meeting',title : '用户会议',start : '2018-05-02',content:"2.30用户管理业务功能实现讨论"},
        { id:2,type:'meeting',title : '资源会议',start : '2018-05-02',content:"3.30资源业务功能实现讨论"},
        { id:3,type:'meeting',title : '报价会议',start : '2018-05-03',content:"4.30报价业务功能实现讨论"},
        { id:4,type:'meeting',title : '订单会议',start : '2018-05-09',content:"5.30订单业务功能实现讨论"},
        { id:4,type:'biz_trip',title : '上海出差',start : '2018-05-09',content:"05.17上海会见某公司领导，对某订单问题协商解决办法！"},
        { id:4,type:'interview',title : '技术面试',start : '2018-05-10',content:"猪小明-JAVA开发工程师岗位面试"},
        { id:4,type:'due',title : '订单会议',start : '2018-05-01',content:"5.30订单业务功能实现讨论"},
      ],
    };
  },
  computed: {
    ...mapGetters(["layout"]),
    events(){
      let type = this.currentCategory.key;
      let events = [];
      if(type == 'all'){
          events = this.eventList;
      }else{
        this.eventList.forEach(e => {
          if(type == e.type){
            events.push(e);
          }
        });
      }
      return events
    }
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
      console.log('--------------scheduleCategorySelect-----------------')
      console.log(tab)
      this.currentCategory = {
        key: tab.name, label: tab.label
      };
    },
    eventClick(event){
      this.$notify({
        title: event.title,
        message: event.content,
        duration: 3000
      });
    },
    addEvent(){
      
    }
  }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>
