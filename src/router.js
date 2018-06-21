/**
 * Created by aresn on 16/8/22.
 */
import VueRouter from 'vue-router';
import Main from './views/main.vue';
import Login from './views/login.vue';
import test from './views/test.vue';
import home from './views/biz/home/home.vue';
// 具体业务组件在需要时按需加载
// Demo
import imageView from './views/demo/image.vue';
import echartsView from './views/demo/echarts.vue';

const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {path: '/', component: Login},
        {path: '/test', component: test},
        {path: '/login', component: Login},
        {path: '/main/', component: Main,children:[
            {path: 'home', component: home},
            {path: 'message', component: function(resolve) { require(['@biz/top/message.vue'], resolve)},children:[
                {path: 'echarts', component: echartsView},
                {path: 'image', component: imageView},
            ]},
            {path: 'fullcalendar', component: function(resolve) { require(['@biz/top/fullcalendar.vue'], resolve)}},
            {path: 'logistics', component: function(resolve) { require(['@biz/top/logistics.vue'], resolve)}},
            {path: 'userList', component: function(resolve) { require(['@biz/user/userPage.vue'], resolve)}},
            {path: 'userInfo', component: function(resolve) { require(['@biz/user/userInfo.vue'], resolve)}},
            {path: 'userUpdatePwd', component: function(resolve) { require(['@biz/user/userUpdatePwd.vue'], resolve)}},
        ]},
        {path: '/demo/', component: Main,children:[
            {path: 'imageView', component: imageView},
            {path: 'echartsView', component: echartsView},
        ]}
    ]
})
export default router;
