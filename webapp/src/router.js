import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('./index/Index.vue')
const Dashboard = () => import('./dashboard/db.vue')
const Info = () => import('./info/Info.vue')

Vue.use(Router)

export const router = new Router ({
    mode: 'hash',
    routes: [
        {path: '/', name: 'index', component: Index},
        {path: '/dashboard', name: 'dashboard', component: Dashboard},
        {path: '/info', name: 'project_info', component: Info},
        {path: '*', redirect: '/'}
    ]
})