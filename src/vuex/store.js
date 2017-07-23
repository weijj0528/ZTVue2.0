/**
 * Created by yi on 2017-01-06.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

// 创建一个对象来保存应用启动时的初始状态
const state = {
  'headerTitle': '福利',
  'menuShow': false,
  'loadingShow': false,
  'news': 5,
  'menus': [{
    'id': 1,
    'name': '内容管理',
    'subMenus': [{
      'id': 11,
      'name': '文章管理'
    }, {
      'id': 12,
      'name': '评论管理'
    }]
  }, {
    'id': 2,
    'name': '统计分析',
    'subMenus': [{
      'id': 21,
      'name': '月度分析'
    }, {
      'id': 22,
      'name': '季度分析'
    }]
  }]
};
// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // TODO: 放置我们的状态变更函数
  UPDATE_TITLE(state, title) {
    console.log(title);
    state.headerTitle = title;
  }
};

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
});
