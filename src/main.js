/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import index from './views/index.vue'
import store from './vuex/store';

Vue.use(VueRouter)
Vue.use(ElementUi)

const routerApp = new Vue({
    store,
    router,
    render: h => h(index)
}).$mount('#app')
