<!-- Created by Weiun on 2017/1/17.-->
<!-- 物流信息 -->
<template>
    <el-row>
      <el-col :span="10">
        消息中心
      </el-col>
      <el-col :span="14">
      </el-col >
    </el-row>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
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
      //                oc
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
<style scoped>
/*@import '../styles/common.css';*/
</style>
