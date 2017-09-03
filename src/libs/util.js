/**
 * Created by aresn on 16/7/18.
 */
let util = {};

util.alert = function(content) {
  window.alert(content);
};

util.selectMenu = function(menus, id) {
  for (var i = 0; i < menus.length; i++) {
    let subMenus = menus[i].subMenus;
    for (var j = 0; j < subMenus.length; j++) {
      let subMenu = subMenus[j];
      if (subMenu.id === id) {
        return subMenu;
      }
    }
  }
};
// 合并对像属性 返回一个新的对像
util.mergeObj = function(obj1, obj2) {
  let obj = {};
  if (obj1 && typeof obj1 == 'object') {
    for(let k in obj1){
      if(obj1[k] != undefined && obj1[k] != ''){
        obj[k] = obj1[k];
      }
    }
  } 
  if (obj2 && typeof obj2 == 'object') {
    for(let k in obj2){
      if(obj2[k] != undefined && obj2[k] != ''){
        obj[k] = obj2[k];
      }
    }
  } 
  return obj;
};

export default util;
