<template>
    <Page :total="moneyPageParam.total" 
          :page-size="moneyPageParam.pageSize" 
          :current="moneyPageParam.page" show-total show-elevator show-sizer show-elevator placement='top' 
          :page-size-opts="opts" @on-change='pageChang' @on-page-size-change="pageSizeChang"></Page>
</template>
<script>
import {mapMutations,mapGetters} from 'vuex'
export default {
  data() {
    return {
      opts:[20,50,80,100],
    }
  },
  computed:{
    ...mapGetters(['moneyPageParam'])
  },
  mounted: function() {

  },
  methods: {
    ...mapMutations(['moneyPageChange','moneyPageSizeChange']),
    pageSizeChang:function(ps){
        this.moneyPageSizeChange(ps);
    },
    pageChang:function(pn){
      this.moneyPageChange(pn);
      this.$emit("page-chang", pn);
    }
    
  }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>