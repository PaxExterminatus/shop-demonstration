import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/pages/HomePage'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/product',
        name: 'product',
        component: () => import(/* webpackChunkName: "app/chunk.page.product" */ './components/pages/ProductPage.vue')
    },
];

export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});
