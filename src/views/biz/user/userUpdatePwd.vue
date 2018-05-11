<!-- Created by Weiun on 2017/1/17.-->
<!-- 个人信息 -->
<template>
    <div>密码修改</div>
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
