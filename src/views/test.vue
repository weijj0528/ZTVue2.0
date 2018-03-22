<!-- -->
<template>
      <ul id="viewer">
          <li><img src="https://gss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2018-03-22/e14446a25edd9afbfcdc2ceba16c1dd7.jpg" alt="图片1"></li>
      </ul>
</template>
<script>
import Viewer from 'viewerjs'
export default {
  data() {
    return {};
  },
  mounted: function() {
    console.log("图片查看");
    var viewer = new Viewer(document.getElementById("viewer"));
    this.$nextTick(function() {});
  },
  components: {}
};
</script>
<style scoped >

</style>
