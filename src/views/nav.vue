<!-- Created by Weiun on 2017/1/17.-->
<!-- 导航组件，选项卡组件 -->
<template>
<div>
  <Tabs type="card" v-model:value='active' closable @on-tab-remove="handleRemove" @on-click="handleClick">
    <Tab-pane v-for='(tab,i) in tabs' :label="tab.name" :name="tab.id"></Tab-pane>
  </Tabs>
</div>
</template>
<script>
export default {
  data() {
    return {
      active: '-1'
    }
  },
  props: {
    tabs: {
      type: Array,
      default: function() {
        return [];
      }
    },
    activeTab: {
      type: String,
      default: function() {
        return '-1';
      }
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      // 代码保证 this.$el 在 document 中
      //                oc
    })
  },
  beforeDestroy() {

  },
  methods: {
    handleClick: function(name) {
      // tab 点击 返回当前tab
      console.log("Tab打开" + name);
      console.log("activeTab-->" + this.active);
      let index = -1;
      for (let i = 0; i < this.tabs.length; i++) {
        let tab = this.tabs[i];
        if (tab.id === name) {
          index = i;
          break;
        }
      }
      this.$emit("update:activeTab", this.active);
      this.$emit("onClick", this.tabs[index]);
    },
    handleRemove: function(name) {
      // tab 移除 返回激活tab
      console.log("Tab移除" + name);
      console.log("activeTab-->" + this.activeTab);
      let newTabs = [];
      for (let i = 0; i < this.tabs.length; i++) {
        let tab = this.tabs[i];
        if (tab.id != name) {
          newTabs.push(tab);
        }
      }
      console.log(newTabs);
      this.$emit("update:tabs", newTabs);
      for (let i = 0; i < newTabs.length; i++) {
        let tab = newTabs[i];
        if (tab.id === this.activeTab) {
          this.$emit("onClose", tab);
          break;
        }
      }
    }
  },
  watch: {
    activeTab: function (val, oldVal) {
      this.active = this.activeTab;
    }
  }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>
