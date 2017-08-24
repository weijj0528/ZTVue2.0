/**
 * Created by yi on 2017-01-06.
 */
import Vue from 'vue'
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex)
// 创建一个对象来保存应用启动时的初始状态
const state = {
  'menus': [{
    'id': '1',
    'name': '内容管理',
    'subMenus': [{
      'id': '11',
      'name': '文章管理'
    }, {
      'id': '12',
      'name': '评论管理'
    }]
  }, {
    'id': '2',
    'name': '统计分析',
    'subMenus': [{
      'id': '21',
      'name': '月度分析'
    }, {
      'id': '22',
      'name': '季度分析'
    }]
  }],
  // 当前活动菜单
  'activeMenuName': ''
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
