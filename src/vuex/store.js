/**
 * Created by yi on 2017-01-06.
 */
import Vue from 'vue'
import Vuex from 'vuex';
// import * as actions from './actions';
// import * as getters from './getters';
// import * as mutations from './mutations';
import common from './modules/common'
import user from './modules/user'

Vue.use(Vuex)

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  // state,
  // mutations,
  // actions,
  // getters,
  modules: {
    common,
    user
  }
});
