
<template>
    <Row type="flex" justify="space-between">
        <Col span="1"><Button type="info" size="small" @click="moreSearchOnOff">更多</Button></Col>
        <Col span="3"><Input size="small" placeholder=""><span slot="prepend">名称</span></Input></Col>
        <Col span="3"><Input size="small" placeholder=""><span slot="prepend">电话</span></Input></Col>
        <Col span="3"></Col>
        <Col span="3"></Col>
        <Col span="3"></Col>
        <Col span="5">
        
            <Button type="primary" size="small" shape="circle" icon="ios-search"></Button>
            <Button type="info" size="small">清空</Button>
            <Button type="info" size="small" @click="refresh">刷新</Button>
        </Input></Col>
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
      moreSearchOnOff:function(){
        this.$emit('more-search-onoff')
      },
      refresh:function(){
        this.$emit('refresh')
      }
  }
}
</script>
<style scoped>
    /*@import '../styles/common.css';*/
</style>