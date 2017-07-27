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
  <Menu :theme="theme2" active-name="1-2" :open-names="['1']" v-on:on-select="onMenuSelect">
    <Submenu v-for="(menu,index) in menus" :name='menu.id'>
      <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        {{menu.id}}-{{menu.name}}
                    </template>
      <Menu-item v-for="(subMenu,i) in menu.subMenus" :name='subMenu.id'>{{subMenu.id}}-{{subMenu.name}}</Menu-item>
    </Submenu>
  </Menu>
  </Col>
</div>
</template>
<script>
import util from '../libs/util'
export default {
  data() {
    return {}
  },
  props: {
    menus: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      // 代码保证 this. 在 document 中
    })
  },
  methods: {
    onMenuSelect: function(name) {
      console.log('菜单点击：' + name);
      let menu = util.selectMenu(this.menus, name);
      console.log('菜单点击：' + menu.name);
      this.$emit("menu-select", menu);
    }
  }
}
</script>
