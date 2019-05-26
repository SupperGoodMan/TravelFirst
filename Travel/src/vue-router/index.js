import Vue from 'vue'
import router from 'vue-router'
import home from "@/pages/home"
import logo from "@/pages/logo"

Vue.use(router)

export default new router({
	routes: [
		{
			path: '/',
			name: 'home',
			component : home
		},
		{
			path: '/logo',
			name: 'logo',
			component : logo
		}
	]
})