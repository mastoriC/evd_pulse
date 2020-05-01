import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('./index/Index.vue')
const Dashboard = () => import('./dashboard/db.vue')

Vue.use(Router)

export const router = new Router ({
    base: '/evd_pulse/',
    mode: 'history',
    routes: [
        {path: '/', name: 'index', component: Index},
        {path: '/dashboard', name: 'dashboard', component: Dashboard},
        {path: '*', redirect: '/'}
    ]
})