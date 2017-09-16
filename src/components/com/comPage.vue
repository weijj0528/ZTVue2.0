<!-- 通用分页组件-->
<template>
  <Page :total="pageParam.total" :page-size="pageParam.pageSize" :current="pageParam.page"  @on-change='pageNumChang' @on-page-size-change="pageSizeChang" show-total show-elevator show-sizer show-elevator placement='top' :page-size-opts="opts">
  </Page>
</template>
<script>
export default {
  data() {
    return {
      opts: [15, 50, 80, 100],
    }
  },
  props: {
    pageParam: {
      type: Object,
      default: {
        page: 1,
        pageSize: 15,
        total: 0,
      }
    }
  },
  computed: {

  },
  mounted: function() {

  },
  methods: {
    pageSizeChang: function(ps) {
      let pn = this.pageParam.page;
      this.chang(pn, ps);
    },
    pageNumChang: function(pn) {
      let ps = this.pageParam.pageSize;
      this.chang(pn, ps);
    },
    chang: function(pn, ps) {
      let p = {
        page: pn,
        pageSize: ps,
      }
      this.$emit("page-chang", p);
    }

  }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>