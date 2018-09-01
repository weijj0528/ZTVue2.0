/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI,{ size: 'mini' });

import {Table } from 'iview';
import 'iview/dist/styles/iview.css';
Vue.component('i-table', Table);

import 'viewerjs/dist/viewer.min.css';
import 'fullcalendar/dist/fullcalendar.min.css';
import './static/icon/iconfont.css';

import * as filters from './filters/filters'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router'
import app from './views/app.vue'
import store from './vuex/store';
const routerApp = new Vue({
    store,
    router,
    render: h => h(app)
}).$mount('#app')
