/**
 * Created by aresn on 16/8/22.
 */
import VueRouter from 'vue-router';
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {path: '/foo', component: Foo},
        {path: '/bar', component: Bar}
    ]
})
export default router;