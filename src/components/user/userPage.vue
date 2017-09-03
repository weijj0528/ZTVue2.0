<template>
    <Page :total="userPageParam.total" 
          :page-size="userPageParam.pageSize" 
          :current="userPageParam.page" show-total show-elevator show-sizer show-elevator placement='top' 
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
    ...mapGetters(['userPageParam'])
  },
  mounted: function() {

  },
  methods: {
    ...mapMutations(['pageChange','pageSizeChange']),
    pageSizeChang:function(ps){
        this.pageSizeChange(ps);
    },
    pageChang:function(pn){
      this.pageChange(pn);
      this.$emit("page-chang", pn);
    }
    
  }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>