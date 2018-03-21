<!-- Created by Weiun on 2017/1/17.-->
<template>
  <Menu active-name="1-2" :open-names="['1']" v-on:on-select="onMenuSelect" width="auto">
    <Submenu v-for="(menu,index) in menus" :key="menu.id" :name='menu.id'>
        <template slot="title">
            <Icon type="ios-paper"></Icon>
            {{menu.name}}
        </template>
        <Menu-item v-for="(subMenu,i) in menu.subMenus" :key="subMenu.id" :name='subMenu.id'>{{subMenu.name}}</Menu-item>
    </Submenu>
  </Menu>
</template>
<script>
import util from '../../libs/util'
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
      // console.log('菜单点击：' + name);
      let menu = util.selectMenu(this.menus, name);
      console.log('菜单点击：' + menu.name);
      this.$emit("menu-select", menu);
    }
  }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>
