/**
 * Created by aresn on 16/8/22.
 */
import VueRouter from 'vue-router';
import test from './views/test.vue';
import Login from './views/login.vue';
import Main from './views/main.vue';
// 具体业务组件在需要时按需加载
const home = resolve => require(['@biz/home/home.vue'], resolve) ;
const message = resolve => require(['@biz/top/message.vue'], resolve) ;
const fullcalendar = resolve => require(['@biz/top/fullcalendar.vue'], resolve) ;
const logistics = resolve => require(['@biz/top/logistics.vue'], resolve) ;
const userPage = resolve => require(['@biz/user/userPage.vue'], resolve) ;
const userInfo = resolve => require(['@biz/user/userInfo.vue'], resolve) ;
const userUpdatePwd = resolve => require(['@biz/user/userUpdatePwd.vue'], resolve) ;
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
            {path: 'message', component: message,children:[
                {path: 'echarts', component: echartsView},
                {path: 'image', component: imageView},
            ]},
            {path: 'fullcalendar', component: fullcalendar},
            {path: 'logistics', component: logistics},
            {path: 'userList', component: userPage},
            {path: 'userInfo', component: userInfo},
            {path: 'userUpdatePwd', component: userUpdatePwd},
        ]},
        {path: '/demo/', component: Main,children:[
            {path: 'imageView', component: imageView},
            {path: 'echartsView', component: echartsView},
        ]}
    ]
})
export default router;
