/**
 * Created by aresn on 16/8/22.
 */
import VueRouter from 'vue-router';
import Main from './views/main.vue';
import Login from './views/login.vue';
import Center from './views/center.vue';

const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {path: '/', component: Login},
        {path: '/login', component: Login},
        {path: '/main/', component: Main,children:[
            {path: 'userList', component: Center}
        ]}
    ]
})
export default router;
