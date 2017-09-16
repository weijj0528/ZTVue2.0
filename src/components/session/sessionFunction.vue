
<template>
    <Row>
        <Col span="24">
            <Button type="success" size="small" @click="openDetails">查看详情</Button>
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