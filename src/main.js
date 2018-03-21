/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'
import app from './views/app.vue'
import store from './vuex/store';
import * as filters from './filters/filters'

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.use(VueRouter)
Vue.use(ElementUI,{ size: 'mini' });

import loading  from './common/loading/loading'
// import message  from './common/message/message'
// import showImg  from './common/showImg/showImg'
// import dialog from './common/dialog/dialog'
//原型扩展 全局方法
Vue.prototype.$loading = loading;
// Vue.prototype.$message = message;
// Vue.prototype.$showImg = showImg;
// Vue.prototype.$dialog = dialog;

const routerApp = new Vue({
    store,
    router,
    render: h => h(app)
}).$mount('#app')
