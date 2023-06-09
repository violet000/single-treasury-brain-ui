import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        // @ts-ignore
        component: () => import('@/pages/login.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
