/**
 * Created by aresn on 16/8/22.
 */
import VueRouter from 'vue-router';
import Main from './views/main.vue';
import Login from './views/login.vue';
import test from './views/test.vue';
import home from './views/biz/home/home.vue';
import message from './views/biz/top/message.vue';
import fullcalendar from './views/biz/top/fullcalendar.vue';
import logistics from './views/biz/top/logistics.vue';
import userPage from './views/biz/user/userPage.vue';
import userInfo from './views/biz/user/userInfo.vue';
import userUpdatePwd from './views/biz/user/userUpdatePwd.vue';
// Demo
import imageView from './views/demo/image.vue';

const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {path: '/', component: Login},
        {path: '/test', component: test},
        {path: '/login', component: Login},
        {path: '/main/', component: Main,children:[
            {path: 'home', component: home},
            {path: 'message', component: message},
            {path: 'fullcalendar', component: fullcalendar},
            {path: 'logistics', component: logistics},
            {path: 'userList', component: userPage},
            {path: 'userInfo', component: userInfo},
            {path: 'userUpdatePwd', component: userUpdatePwd},
        ]},
        {path: '/demo/', component: Main,children:[
            {path: 'imageView', component: imageView},
        ]}
    ]
})
export default router;
