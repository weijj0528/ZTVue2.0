/**
 * Created by aresn on 16/7/18.
 * 工具方法
 */
import Vue from 'vue'
var util = new Vue({
  data: {

  },
  methods: {
    alert(content) {
      window.alert(content);
    },
    selectMenu(menus, id) {
      for (var i = 0; i < menus.length; i++) {
        let subMenus = menus[i].subMenus;
        for (var j = 0; j < subMenus.length; j++) {
          let subMenu = subMenus[j];
          if (subMenu.id === id) {
            return subMenu;
          }
        }
      }
    },
    mergeObj(obj1, obj2) {
      let obj = {};
      if (obj1 && typeof obj1 == 'object') {
        for (let k in obj1) {
          if (obj1[k] != undefined && obj1[k] != '') {
            obj[k] = obj1[k];
          }
        }
      }
      if (obj2 && typeof obj2 == 'object') {
        for (let k in obj2) {
          if (obj2[k] != undefined && obj2[k] != '') {
            obj[k] = obj2[k];
          }
        }
      }
      return obj;
    },
    randomString(len) {　　
      len = len || 32;　　
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/ 　　
      var maxPos = $chars.length;　　
      var pwd = '';　　
      for (let i = 0; i < len; i++) {　　　　
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));　　
      }　　
      return pwd;
    }
  }
});
export default util;