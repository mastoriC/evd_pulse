import Vue from 'vue'
import Router from 'vue-router'

import Index from './index/Index.vue'
import Dashboard from './dashboard/db.vue'

Vue.use(Router)

export const router = new Router ({
    mode: 'history',
    routes: [
        {path: '/', name: 'index', component: Index},
        {path: '/dashboard', name: 'dashboard', component: Dashboard},
        {path: '*', redirect: '/'}
    ]
})