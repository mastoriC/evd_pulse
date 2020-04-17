import Vue from 'vue'
import {router} from './router.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import moment from 'vue-moment'
Vue.use(moment)

import App from './App.vue'

new Vue ({
    el: '#app',
    router,
    render: h => h(App)
})