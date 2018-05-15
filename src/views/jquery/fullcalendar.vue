<!-- Created by Weiun on 2017/1/17.-->
<!-- 基于jq的日历组件 -->
<template>
    <div id="fullcalendar"></div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import $ from "jquery";
import "fullcalendar";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters([])
  },
  mounted: function() {
    this.$nextTick(function() {
      // 代码保证 this.$el 在 document 中
      var fullcalendar = $("#fullcalendar").fullCalendar({
        header: {
          left: "prev,next today",
          center: "title",
          right: "month,agendaWeek"
        },
        firstDay: 1,
        timeFormat: "H:mm",
        axisFormat: "H:mm",
        eventClick: function(calEvent, jsEvent, view) {
          //日程点击的事件（自己实现）
        },
        dayClick: function(data, allDay, jsEvent, view) {
          //日期点击的事件（自己实现）
        }
      });
      console.log(fullcalendar);
    });
  },
  beforeDestroy() {},
  methods: {
    ...mapActions([]),
    hellow() {
      console.log("hellow world");
    }
  }
};
</script>
<style >
</style>
