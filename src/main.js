import Vue from 'vue'
import App from './App.vue'

import 'vuetify/dist/vuetify.min.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Router from './Router'
import store from './Store'

import { sync } from 'vuex-router-sync'
sync(store, Router)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import apiConfig from '../config'
Vue.http.options.root = apiConfig.url

Vue.config.productionTip = false

new Vue({
	store,
	router: Router,
	render: h => h(App),
}).$mount('#app')
