<!-- Created by Weiun on 2017/1/17.-->
<style scoped>
/*@import '../styles/common.css';*/

.left {
  width: 100%;
  height: 100%;
  background: white;
}
</style>
<template>
<div class="left">
  <Col span="2">
  <Menu :theme="theme2" active-name="1-2" :open-names="['1']">
    <Submenu name="1">
      <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        内容管理
                    </template>
      <Menu-item name="1-1">文章管理</Menu-item>
      <Menu-item name="1-2">评论管理</Menu-item>
      <Menu-item name="1-3">举报管理</Menu-item>
    </Submenu>
  </Menu>
  </Col>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    // ...mapGetters([
    //   'menus'
    // ])
  },
  mounted: function() {
    this.$nextTick(function() {
      // 代码保证 this. 在 document 中
    })
  },
  beforeDestroy() {

  },
  methods: {
    handleOpen: function() {
      console.log("打开")
    },
    handleClose: function() {
      console.log("关闭")
    }
  }
}
</script>
