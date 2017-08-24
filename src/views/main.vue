<!-- -->
<template>
<div class="index">
  <top class="top"></top>
  <left class="left" :menus='menus' @menu-select='menuSelect'></left>
  <tab-nav class="nav" :tabs.sync='tabs' :active-tab.sync='active_tab' @on-click="navClick" @on-close='navClose'></tab-nav>
  <center class="center"></center>
  <bottom class="bottom"></bottom>
</div>
</template>
<script>
import Top from './top.vue'
import Left from './left.vue'
import TabNav from './nav.vue'
import Center from './center.vue'
import Bottom from './bottom.vue'
import util from '../libs/util'
import {
  menus
} from '../vuex/getters'
export default {
  data() {
    return {
      'active_tab': '-1',
      'tabs': []
    }
  },
  components: {
    top: Top,
    left: Left,
    tabNav: TabNav,
    center: Center,
    bottom: Bottom,
  },
  vuex: {
    getters: {
      'menus': menus
    }
  },
  methods: {
    menuSelect: function(menu) {
      // 存在则激活，否则添加
      let b = false;
      for (let i = 0; i < this.tabs.length; i++) {
        let tab = this.tabs[i];
        if (tab.id === menu.id) {
          b = true;
          break;
        }
      }
      if (b) {
        if (this.active_tab != menu.id)
          this.active_tab = menu.id;
      } else {
        this.tabs.push(menu);
        this.active_tab = menu.id;
      }
      console.log(this.tabs);
      // TODO 路由到选择的页面
    },
    navClick: function(tab) {

    },
    navClose: function(tab) {}
  }
}
</script>
<style scoped lang="less">
.index {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
}

.top {
    width: 100%;
    height: 10%;
    background: cadetblue;
}

.left {
    width: 240px;
    height: 90%;
    // background: rosybrown;
}

.nav {
    width: 100%;
    height: 85%;
    position: fixed;
    padding-right: 240px;
    top: 10%;
    left: 240px;
    /*background: darkgrey;*/
}

.center {
    width: 100%;
    height: 85%;
    position: fixed;
    padding-right: 240px;
    margin-top: 32px;
    top: 10%;
    left: 240px;
    /*background: darkgrey;*/
}

.bottom {
    width: 100%;
    height: 5%;
    position: fixed;
    padding-right: 240px;
    top: 95%;
    left: 240px;
    /*background: forestgreen;*/
}
</style>
