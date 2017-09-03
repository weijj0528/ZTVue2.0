
<template>
    <Row>
        <Col span="24">
            <Button type="info" size="small">重置密码</Button>
            <Button type="success" size="small" @click="openDetails">查看详情</Button>
            <Button type="warning" size="small">修改短信价格</Button>
            <Button type="error" size="small">删除</Button>
        </Col>
    </Row>
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