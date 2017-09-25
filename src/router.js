/**
 * Created by aresn on 16/8/22.
 */
import VueRouter from 'vue-router';
import Main from './views/main.vue';
import Login from './views/login.vue';
import Center from './views/center.vue';
import home from './views/biz/home.vue';
import userList from './views/biz/userList.vue';
import moneyRecordList from './views/biz/moneyRecordList.vue';
import shareRecordList from './views/biz/shareRecordList.vue';
import freeSmsList from './views/biz/freeSmsList.vue';
import smsSessionList from './views/biz/smsSessionList.vue';
import smsRecordList from './views/biz/smsRecordList.vue';
import activityList from './views/biz/activityList.vue';



const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {path: '/', component: Login},
        {path: '/login', component: Login},
        {path: '/main/', component: Main,children:[
            {path: 'home', component: home},
            {path: 'userList', component: userList},
            {path: 'moneyRecordList', component: moneyRecordList},
            {path: 'shareRecordList', component: shareRecordList},
            {path: 'freeSmsList', component: freeSmsList},
            {path: 'smsSessionList', component: smsSessionList},
            {path: 'smsRecordList', component: smsRecordList},
            {path: 'activityList', component: activityList},
        ]}
    ]
})
export default router;
