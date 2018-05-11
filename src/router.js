/**
 * Created by aresn on 16/8/22.
 */
import VueRouter from 'vue-router';
import Main from './views/main.vue';
import Login from './views/login.vue';
import test from './views/test.vue';
import home from './views/biz/home/home.vue';
import userPage from './views/biz/user/userPage.vue';
import userInfo from './views/biz/user/userInfo.vue';
import userUpdatePwd from './views/biz/user/userUpdatePwd.vue';


const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {path: '/', component: Login},
        {path: '/test', component: test},
        {path: '/login', component: Login},
        {path: '/main/', component: Main,children:[
            {path: 'home', component: home},
            {path: 'userList', component: userPage},
            {path: 'userInfo', component: userInfo},
            {path: 'userUpdatePwd', component: userUpdatePwd},
        ]}
    ]
})
export default router;
