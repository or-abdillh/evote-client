import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Voting from '../views/Voting.vue'
import Login from '../views/Login.vue'
import ajax from '@/helper/ajax'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/voting',
		name: 'voting',
		component: Voting
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	}
]
const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes })

//Navigation Guard
router.beforeEach( async (to, from) => {
	try {
		await ajax.get('/user/auth', {
			headers: {
				token: localStorage.getItem('evote-himati:token') || 'YOUR_TOKEN_HERE'
			}
		})
	} catch(err) {
		if ( err?.response && to.name !== 'login' ) {
			return { name: 'login' }
		}
	}
})

export default router
