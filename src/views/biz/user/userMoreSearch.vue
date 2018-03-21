
<template>
    <el-row type="flex" justify="space-between">
        <el-col :span="24">
            更多查询条件
        </el-col>
    </el-row>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted: function() {
    
  },
  methods: {
      moreSearchOnOff:function(){
        this.$emit('more-search-onoff')
      }
  }
}
</script>
<style scoped>
    /*@import '../styles/common.css';*/
</style>