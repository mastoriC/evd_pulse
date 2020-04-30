import Vue from 'vue'
import {router} from './router.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import moment from 'vue-moment'
Vue.use(moment)

import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAGX7mILXi_3T7AgvBmJPhH_xVvHtSBdts",
    authDomain: "evdpulse-4a3f9.firebaseapp.com",
    databaseURL: "https://evdpulse-4a3f9.firebaseio.com",
    projectId: "evdpulse-4a3f9",
    storageBucket: "evdpulse-4a3f9.appspot.com",
    messagingSenderId: "842873640345",
    appId: "1:842873640345:web:a8b9a883e2f7a7abad6f08",
    measurementId: "G-X19X6LHYLC"
};
firebase.initializeApp(firebaseConfig);

import App from './App.vue'

new Vue ({
    el: '#app',
    router,
    render: h => h(App)
})