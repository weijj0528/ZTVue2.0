<!-- Created by Weiun on 2017/1/17.-->
<!-- 基于jq的日历组件 -->
<!-- 文档
props:
  height:日历显示的高度，默认600px
  events:日历中事件数据，单向绑定
emit:
  eventClick:日历中事件被点击，返回事件事件（events中数据的某一条）
  dayClick:日历中某一天被点击，返回时间天Moment对像
-->
<template>
    <div id="fullcalendar"></div>
</template>
<script>
import $ from "jquery";
import "fullcalendar";
export default {
  data() {
    return {
      calendar:{},
    };
  },
  props:{
    height:{
      type:Number,
      default:600
    },
    events:{
      type:Array,
      default:[]
    }
  },
  computed: {
  },
  mounted: function() {
    let _self = this;
    console.log("--------mounted--------")
    this.$nextTick(function() {
      // 代码保证 this.$el 在 document 中
      console.log("--------fullcalendar nextTick--------")
      $("#fullcalendar").fullCalendar({
        height: _self.height,
        monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        monthNamesShort: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
        dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
        buttonText: {
            prev: "上月",
            next: "下月",
            prevYear: "上一年",
            nextYear: "下一年",
            today: '返回今天',
            month: '月',
            week: '周',
            day: '日'
        },
        header: {
          left: "today prev,next",
          center: "title",
          right: "prevYear,nextYear month,agendaWeek"
        },
        firstDay: 1,
        timeFormat: "H:mm",
        axisFormat: "H:mm",
        events:function(start, end, timezone, callback){
          console.log("----------events function-----------");
          callback(_self.events);
        },
        eventClick: function(calEvent, jsEvent, view) {
          //日程点击的事件
          console.log("----------eventClick-----------");
          console.log(calEvent);
          _self.$emit("eventClick", calEvent);
        },
        dayClick: function(data, allDay, jsEvent, view) {
          //日期点击的事件
          console.log("----------dayClick-----------");
          console.log(data);
          _self.$emit("dayClick", data);
        }
      });
      _self.calendar = $("#fullcalendar").fullCalendar("getCalendar");
    });
  },
  updated(){
    console.log("--------updated--------")
  },
  methods: {
    ...mapActions([]),
    initCalendar() {
      console.log("hellow world");
    }
  },
  beforeDestroy() {},
  watch:{
    events:function(newEvents){
      console.log("-----------watch:events-----------");
      $("#fullcalendar").fullCalendar('refetchEvents');
    }
  }
};
</script>
<style >
</style>
