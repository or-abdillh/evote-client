import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Voting from '../views/Voting.vue'


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
	}
]
const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes })

export default router