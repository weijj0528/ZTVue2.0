/**
 * Created by aresn on 16/8/22.
 */
import VueRouter from 'vue-router';

const test = resolve => require(['./views/test.vue'], resolve);
const Login = resolve => require(['./views/login.vue'], resolve);
const Main = resolve => require(['./views/main.vue'], resolve);
// 具体业务组件在需要时按需加载
const home = resolve => require(['@biz/home/home.vue'], resolve);
const message = resolve => require(['@biz/top/message.vue'], resolve);
const fullcalendar = resolve => require(['@biz/top/fullcalendar.vue'], resolve);
const logistics = resolve => require(['@biz/top/logistics.vue'], resolve);
const userInfo = resolve => require(['@biz/user/userInfo.vue'], resolve);
const userUpdatePwd = resolve => require(['@biz/user/userUpdatePwd.vue'], resolve);
// User
const userPage = resolve => require(['@biz/user/userPage.vue'], resolve);
const userListPage = resolve => require(['@biz/user/userListPage.vue'], resolve);
// Demo
const imageView = resolve => require(['./views/demo/image.vue'], resolve);
const echartsView = resolve => require(['./views/demo/echarts.vue'], resolve);
const tinymce = resolve => require(['./views/demo/tinymce.vue'], resolve);

const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        { path: '/', component: Login },
        { path: '/test', component: test },
        { path: '/login', component: Login },
        {
            path: '/main/', component: Main, children: [
                { path: 'home', component: home },
                {
                    path: 'message', component: message, children: [
                        { path: 'echarts', component: echartsView },
                        { path: 'image', component: imageView },
                    ]
                },
                { path: 'fullcalendar', component: fullcalendar },
                { path: 'logistics', component: logistics },
                { path: 'userInfo', component: userInfo },
                { path: 'userUpdatePwd', component: userUpdatePwd },
            ]
        },
        {
            path: '/user/', component: Main, children: [
                { path: 'userPage', component: userPage },
                { path: 'userListPage', component: userListPage },
            ]
        },
        {
            path: '/demo/', component: Main, children: [
                { path: 'imageView', component: imageView },
                { path: 'echartsView', component: echartsView },
                { path: 'tinymce', component: tinymce },
            ]
        }
    ]
})
export default router;
