/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'viewerjs/dist/viewer.min.css';
import 'fullcalendar/dist/fullcalendar.min.css';
import './static/icon/iconfont.css';

import router from './router'
import app from './views/app.vue'
import store from './vuex/store';
import * as filters from './filters/filters'

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.use(VueRouter)
Vue.use(ElementUI,{ size: 'mini' });

const routerApp = new Vue({
    store,
    router,
    render: h => h(app)
}).$mount('#app')
