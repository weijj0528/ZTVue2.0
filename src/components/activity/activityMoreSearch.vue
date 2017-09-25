
<template>
    <Row type="flex" justify="space-between">
        <Col span="24">
            <Button type="primary" size="small" shape="circle" icon="ios-search"></Button>
            <Button type="info" size="small">清空</Button>
            <Button type="info" size="small">刷新</Button>
        </Input></Col>
    </Row>
</template>
<script>
export default {
  data() {
    return {}
  },
  props:{
    leftOnOff:{
        type: Boolean,
        default: false
    },
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