/**
 * Created by yi on 2017-01-06.
 */
import Vue from 'vue'
import Vuex from 'vuex';
import charts from './modules/charts'
import common from './modules/common'
import user from './modules/user'
import money from './modules/money'
import session from './modules/session'
import activity from './modules/activity'

Vue.use(Vuex)

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  modules: {
    charts,
    common,
    user,
    money,
    session,
    activity,
  }
});
