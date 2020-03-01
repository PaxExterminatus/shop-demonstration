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
        path: '/clothing',
        name: 'clothing',
        component: () => import(/* webpackChunkName: "app/chunk.page.clothing" */ './components/pages/ClothingPage.vue')
    },
    {
        path: '/accessories',
        name: 'accessories',
        component: () => import(/* webpackChunkName: "app/chunk.page.accessories" */ './components/pages/AccessoriesPage.vue')
    },
    {
        path: '/collections',
        name: 'collections',
        component: () => import(/* webpackChunkName: "app/chunk.page.collections" */ './components/pages/CollectionsPage.vue')
    },
];

export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});
