// 导航tab添加
export function tabsAdd (state,tab) {
  console.log('mutations-tabsAdd:'+tab);
  state.tabs.push(tab);
};
// 导航tab移除
export function tabsRemove (state,id) {
  console.log('mutations-tabsRemove:'+id);
  let index = -1
  for (let i = 0; i < state.tabs.length; i++) {
    let tab = state.tabs[i];
    if (tab.id === id) {
      state.tabs.splice(i, 1);
      break;
    }
  }
};
