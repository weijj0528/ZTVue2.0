/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import router from './router'
import index from './views/index.vue'
import store from './vuex/store';

Vue.use(VueRouter)
Vue.use(iView)

const routerApp = new Vue({
    store,
    router,
    render: h => h(index)
}).$mount('#app')
