import Vue from 'vue'
import App from './App.vue'

import 'vuetify/dist/vuetify.min.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Router from './Router'
import store from './Store'

import { sync } from 'vuex-router-sync'
sync(store, Router)

Vue.config.productionTip = false

new Vue({
	store,
	router: Router,
	render: h => h(App),
}).$mount('#app')
