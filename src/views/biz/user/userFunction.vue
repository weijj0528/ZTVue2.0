
<template>
    <el-row>
        <el-col :span="24">
            <el-button type="info" size="small" disabled>重置密码</el-button>
            <el-button type="warning" size="small" disabled>修改短信价格</el-button>
            <el-button type="error" size="small" disabled>删除</el-button>
            <el-button type="success" size="small" @click="openDetails">查看详情</el-button>
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
      openDetails:function(){
          this.$emit('open-details');
      }
  }
}
</script>
<style scoped>
    /*@import '../styles/common.css';*/
</style>