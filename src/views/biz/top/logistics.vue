<!-- Created by Weiun on 2017/1/17.-->
<!-- 物流信息 -->
<template>
    <el-row>
      <el-col :span="10">
        <iframe name="kuaidi100" src="https://www.kuaidi100.com/frame/730px.html" width="700" height="800" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>

      </el-col>
      <el-col :span="14">
        <iframe name="kuaidi100" src="https://www.kuaidi100.com/frame/wuliu/" width="960" height="615" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>
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
