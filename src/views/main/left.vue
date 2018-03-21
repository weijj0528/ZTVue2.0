<!-- Created by Weiun on 2017/1/17.-->
<template>
  <el-menu default-active="1" @select="onMenuSelect" width="auto">
    <el-submenu v-for="menu in menus" :key="menu.id" :index='menu.id'>
        <template slot="title">
            <i v-if="menu.icon" :class="menu.icon"></i>
            {{menu.name}}
        </template>
        <el-menu-item v-for="subMenu in menu.subMenus" :key="subMenu.id" :index='subMenu.id'>{{subMenu.name}}</el-menu-item>
    </el-submenu>
  </el-menu>
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
