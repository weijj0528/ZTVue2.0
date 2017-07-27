/**
 * Created by aresn on 16/7/18.
 */
let util = {
  alert: function(content) {
    window.alert(content);
  },
  selectMenu: function(menus, name) {
    for (var i = 0; i < menus.length; i++) {
      let subMenus = menus[i].subMenus;
      for (var j = 0; j < subMenus.length; j++) {
        let subMenu = subMenus[j];
        if (subMenu.id === name) {
          return subMenu;
        }
      }
    }
  }
};
export default util;
