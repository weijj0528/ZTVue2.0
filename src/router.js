/**
 * Created by aresn on 16/8/22.
 */
import VueRouter from 'vue-router';
import Main from './views/main.vue';
import Login from './views/login.vue';
import home from './views/biz/home/home.vue';
import userPage from './views/biz/user/userPage.vue';


const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {path: '/', component: Login},
        {path: '/login', component: Login},
        {path: '/main/', component: Main,children:[
            {path: 'home', component: home},
            {path: 'userList', component: userPage},
        ]}
    ]
})
export default router;
